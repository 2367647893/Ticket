import React, { useEffect, useState } from "react";
import Icons from "../Icons";
import './styles.less'

export default function UserName() {
    const [username] = useState(JSON.parse(localStorage.getItem('userInfo')).username)
   useEffect(()=>{
    console.log(username);
   },[])
    return (
        <div className="username_box">
            <div className="username">
                <div className="user_lef">
                    {/* icon图标 */}
                    <Icons name={'icon-wode-F'} style={{fontSize:'35px'}} />
                </div>
                {username}
            </div>
        </div>
    )
}