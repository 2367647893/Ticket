import React,{useEffect} from "react"
import { Redirect } from 'umi'
import { connect } from 'dva'

export default connect(()=>{
    return{
        
    }
})(Auth)

function Auth(props){
    if (localStorage.getItem('ticketToken')) {
        return props.children
    }else{
        return <Redirect to='/login' />
    }
}