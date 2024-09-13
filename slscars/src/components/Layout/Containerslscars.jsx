import React from "react";
import style from './Containerslscars.module.css'

const Container = (props) => {

return(

    <div className={style.Container}>
        {props.children}

    </div>


    
)


}

export default Container