import React,{useState} from 'react'
import axios from 'axios'



const UserContext = React.createContext()
const userAxios = axios.create()//creates a configurable version of axios 

userAxios.interceptors.request.use(config=>{//for outgoing request use the following config
    const token = localStorage.getItem('token')//whatevr is added to config is changing confi of axios
    config.headers.Authorization = `Bearer ${token}`//same as header setting in postman
    return config
})

function UserProvider(props){
//inital state
const initState = {
    user: JSON.parse(localStorage.getItem('user')) || {}, //parse removes data from json format so js can read it  
    token: localStorage.getItem('token') || '', //first look in local storage to see if item exists and use it or if not an empty string
    //this allows for us to refresh w/o losing data. it keeps you logged in 
    issues: [],
    errMsg: ''//added for hamdling of autherr
}
// users state
const [userState, setUserState] = useState(initState)

//signup function w/authentication
function signup(credentials){
axios.post('/api/auth/signup', credentials)//credentials is obj withtoken 
.then(res=>{
    const {user,token} = res.data// data returned in the response of a request
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    getUserIssues()
    setUserState(prev=> ({
        ...prev,
        user,//only changing user/token in userstate 
        token
    }))
})
.catch(error =>{
    if(error.response.data.errMsg === "User validation failed: username: Path `username` is required."){
        handleAuthErr("Please enter a username")
    } else if(error.response.data.errMsg === "User validation failed: password: Path `password` is required."){
        handleAuthErr("Please enter a password")
    } else if(error.response.data.errMsg === "User validation failed: username: Path `username` is required., password: Path `password` is required."){
        handleAuthErr("Username & Password required")
    } else{
        handleAuthErr(error.response.data.errMsg)
    }
})
}
console.log('userState', userState)

//login
function login(credentials){
    axios.post('/api/auth/login', credentials)
    .then(res=>{
        const {user,token} = res.data
        localStorage.setItem('token',token)
        localStorage.setItem('user', JSON.stringify(user))
        getUserIssues()
        setUserState(prev=>({
            ...prev,
            user,
            token
        }))
    })
    .catch(err => handleAuthErr(err.response.data.errMsg))
}

//logout 
function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUserState({
        user: {},
        token: '',
        issues: []
    })
}

//get the users issues only
function getUserIssues(){
userAxios.get('/api/issue/user')//use useraxios for credentials to access
.then(res=>setUserState(prev=>({
    ...prev,
    issues: res.data //sets array to user issues only
})))
.catch(err=> console.log(err.response.data.errMsg))
}

//get all posts (public feed)
function getAllIssues(){
    userAxios.get('/api/issue')
    .then(res=>setUserState(prev=>({
        ...prev,
        issues: res.data
    })))
    .catch(err=>console.log(err.response.data.errMsg))
}

//addIssue 
function addIssue(newIssue){
    userAxios.post('/api/issue', newIssue)
    .then(res=>{
        setUserState(prevState=>({
            ...prevState,
            issues: [...prevState.issues, res.data]//grabbing all issues and adding the new one created
        }))
    })
    .catch(err=>console.log(err.response.data.errMsg))
}

// const { user, comments} = userState;

//comments array state 
const [commentsData, setCommentsData] = React.useState([])

function getAllComments() {
userAxios.get('/api/comments')
    .then(res => {
    setCommentsData(res.data);
    })
    .catch(err => console.log(err.response.data.errMsg));
    }

    React.useEffect(() => {
    getAllComments();
    }, []);

//addComment
function addComment(newComment,issueId) {
    userAxios .post(`/api/comments/${issueId}`, newComment)//posting comment to the issue by id 
        .then(res => {
            setCommentsData(prevState =>[...prevState, res.data]);
            getAllComments()
        })
        .catch(err => console.log(err.response.data.errMsg));
    }
    console.log('commentsData', commentsData)


// delete function
function deleteIssue(issueId){
    userAxios.delete(`/api/issue/${issueId}`)
    .then(res => {
    setUserState(prevState =>({
        ...prevState,
        issue: prevState.issues.filter(issue => issue._id !== issueId)
    }))
    getUserIssues()
    })
    .catch(err => console.log(err.response.data.errMsg))
    }

//delete comments 
function deleteComment(commentId){
    userAxios.delete(`/api/comments/${commentId}`)
    .then(res => {
        setCommentsData(prevComments => prevComments.filter(comment => comment._id !== commentId))
        })
    .catch(err => console.log(err.response.data.errMsg))
    }


// add likes/dislikes
function upVote(issueId) {
    userAxios
        .put(`/api/issue/upVote/${issueId}`)
        .then((res) => {
        setUserState((prevState) => ({
            ...prevState,
            issues: prevState.issues.map((issue) =>
            issue._id !== issueId ? issue : res.data
            ),
        }));
        })
        .catch((err) => console.log(err));
    }

    function downVote(issueId) {
    userAxios
        .put(`/api/issue/downVote/${issueId}`)
        .then((res) => {
        setUserState((prevState) => ({
            ...prevState,
            issues: prevState.issues.map((issue) =>
            issue._id !== issueId ? issue : res.data
            ),
        }));
        })
        .catch((err) => console.log(err));
    }

//handling auth errors
function handleAuthErr(errMsg){
    setUserState(prev=>({
        ...prev,
        errMsg
    }))
}

//reset auth errors 
function resetAuthErr(){
    setUserState(prev=>({
        ...prev,
        errMsg: ''
    }))
}
return(
    <UserContext.Provider value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        deleteIssue,
        getUserIssues,
        getAllIssues,
        addComment,
        commentsData,
        setCommentsData,
        downVote,
        upVote,
        resetAuthErr,
        deleteComment
    }}>
        {props.children}
    </UserContext.Provider>
)
}

export {UserContext, UserProvider}