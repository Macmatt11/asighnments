import React, {useState} from "react"
import axios from 'axios'

const UserContext = React.createContext()
const userAxios = axios.create()//creates another version of axios that we can then configure  

userAxios.interceptors.request.use(config=>{//for outgoing request use the following config
    const token = localStorage.getItem('token')//whatevr is added to config is changing confi of axios
    config.headers.Authorization = `Bearer ${token}`//same as header setting in postman
    return config
})
function UserProvider(props){
//initail state
const initState = {
    user: JSON.parse(localStorage.getItem('user')) || {}, //parse removes data from json format so js can read it  
    token: localStorage.getItem('token') || '', //first look in local storage to see if item exists and use it or if not an empty string
    //this allows for us to refresh w/o losing data. it keeps you logged in 
    todos: []
}

//state
const [userState,setUserState] = useState(initState) 

//signup
function signUp(credentials){
axios.post('/auth/signup', credentials)
.then(res=>{
    const {user,token} = res.data//grabbing only this info from res.data
    localStorage.setItem('token', token)//not complex and is string already so no need to stringify
    localStorage.setItem('user',JSON.stringify(user))//user is an object or complext data type so has to be saved in json for localstorage
    setUserState(prevState=>({
        ...prevState,
        user,//only changing the user & token
        token
    }))
})
.catch(err => console.log(err.response.data.errMsg))
}
console.log(userState)

//login
function login(credentials){
    axios.post('/auth/login', credentials)
    .then(res=>{
        const {user,token} = res.data//grabbing only this info from res.data
        localStorage.setItem('token', token)//not complex and is string already so no need to stringify
        localStorage.setItem('user',JSON.stringify(user))//user is an object or complext data type so has to be saved in json for localstorage
        getUserTodos()//gets all of the users todos and displays them in profile after login
        setUserState(prevState=>({
            ...prevState,
            user,//only changing the user & token
            token
        }))
    })
    .catch(err => console.log(err.response.data.errMsg))
    }

//logout
function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUserState({//resets user state to empty 
        user: {},
        token: '',
        todos: []
    })
}

//getUsertodos
function getUserTodos(){
userAxios.get("/api/todo/user")
.then(res=> {setUserState(prevState=>({
    ...prevState,
    todos: res.data//sets array to the todos that user created 
}))})
.catch(err=> console.log(err.response.data.errMsg))
}


//addtodo
function addTodo(newTodo){
userAxios.post('/api/todo', newTodo)
.then(res=>{
    setUserState(prevState=>({
        ...prevState,
        todos: [...prevState.todos, res.data]//grabbing all todos and adding the new one created
    }))
})
.catch(err=>console.log(err))
}

    return(
        <UserContext.Provider
        value={{
            ...userState,
            signUp,
            login,
            logout,
            addTodo
        }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}