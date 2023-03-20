import React,{useEffect} from "react"
import { Redirect } from 'umi'
import { connect } from 'dva'

export default connect(()=>{

})(Auth)

function Auth(props){
    if (localStorage.getItem('id')) {
        return props.children
    }else{
        return <Redirect to='/user/login' />
    }
}