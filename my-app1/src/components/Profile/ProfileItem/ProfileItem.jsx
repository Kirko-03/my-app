import React from 'react';
import b from './ProfileItem.module.css.module.css';


const Profile = () => {
    return (
        <div>
           <div>
               <img src="https://img-fotki.yandex.ru/get/6843/183449610.17/0_f5bba_8e49bb81_XL.jpg"></img>
           </div>
            <div className={b.descriptionBlock}>
                <a>ava + description</a>
        </div>
        </div>
    )
}
export default Profile;