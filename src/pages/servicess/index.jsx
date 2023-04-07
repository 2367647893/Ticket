import React, { useEffect } from "react";
import { connect } from 'dva';
import './styles.less'
export default connect((state) => {
    return {

    }
})(servicess)

function servicess(props) {
    return (
        <div>servicess
        </div>
    )
}

// import React, { useState } from "react"
// import {Button} from 'antd-mobile'
// export default function servicess(){
//     const [x,setX] = useState(0)
//     const [y,setY] = useState(()=>{
//         if(1){
//             return '小花'
//         }
//     })
//     const onClick = () => {
//         setX(x + 1) 
//         setX(pre => {
//             console.log(pre,'pre');
//             return pre
//         })
//     }
//     return (
//         <div>
//             <h1>y: {y}</h1>
//             <h1>x: {x}</h1>
//             <Button onClick={onClick}>点我</Button>
//         </div>
//     )
// }
// export default class servicess extends React.PureComponent{
//     constructor (props){
//         super()
//         this.state = {
//             user:'小明',
//             age:22,
//         }
//     }
//     componentDidMount(){
//         this.setState({
//             user:'小李'
//         })
//         console.log(this.state.user,'user');
    
//         this.setState(pre => {
//             console.log(pre,'pre');
    
//             return {
//                 user:'小龙'
//             }
//         })
//     }
//     render (){
//         const {user} = this.state
//         return (
//             <div>
//                 <h1>{user}</h1>
//             </div>
//         )
//     }
// }

