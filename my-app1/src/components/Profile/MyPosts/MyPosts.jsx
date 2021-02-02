import React from 'react';
import b from './MyPost.module.css';
import Post from './Post/Post.jsx'
const MyPost = (props) =>{
    return(
        <div className={b.postsBlock}>
 <div className={b.item}>
   <a>My post</a> 
    </div>
    <textarea></textarea>
  <button>add post</button>
 <Post message="Hi" like="1"/>
 <Post message="Whats up?"like="1"/>
 <Post message="Learn Pituhon((("like="-12"/>
 <Post message="LOSEEER"like="187"/>
</div>
    )
}
export default MyPost;