import React from 'react';
import { UserContext } from '../../context/UserProvider';
import FoodPostsList from './FoodPostsList'
import { Link } from 'react-router-dom';
import './profile.css'

export default function Profile() {
  const { user: { username }, foodPosts, getUserFoodPosts, deletePost } = React.useContext(UserContext);

  React.useEffect(() => {
    getUserFoodPosts();
  }, []);

  return (
    <div className='profileContainer'>
      <div className='user'>
        <h1 className="welcome">Welcome Back, {username.charAt(0).toUpperCase() + username.slice(1)}</h1>
        <img className='profilePic' src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'/>
      </div>
      <h3 className="myPosts">{username.charAt(0).toUpperCase() + username.slice(1)}'s Posts</h3>
      <div className='userPosts'>
        <FoodPostsList foodPosts={foodPosts} deletePost={deletePost} isPublicPage={false} isProfilePage={true}>
          {foodPosts.map(foodPost => (
            <Link key={foodPost._id} to={`/profile/${foodPost._id}`}>
              <img src={foodPost.imgUrl} className="postImg" style={{ height: '95px', width: '95px' }} />
            </Link>
          ))}
        </FoodPostsList>
      </div>
    </div>
  );
}

    
