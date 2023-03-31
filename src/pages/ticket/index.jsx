import React, { useEffect, useState } from "react";
import {connect} from 'dva';
import './styles.less'
export default connect((state)=>{
    return{

    }
})(ticket)
function ticket(props){
    const {dispatch} = props
    useEffect(()=>{
        dispatch({
            type:'ticket/feactTicketDetail',
            payload:'',
        })
    },[])
    return(
        <div>
            ticket
        </div>
    )
}