import React from 'react';
import b from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
const Profile = () =>{
    return(
<div className={b.body}>
  <div>
  <img src="https://img-fotki.yandex.ru/get/6843/183449610.17/0_f5bba_8e49bb81_XL.jpg"></img>
  </div>
 <div>
    <a>ava + description</a>
  </div>
  <MyPosts />
</div>
    )
}
export default Profile;