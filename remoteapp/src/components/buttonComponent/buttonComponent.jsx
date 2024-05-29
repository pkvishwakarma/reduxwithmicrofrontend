import React from "react";

export default function ButtonComponent(props){
    return(
        <>
            <div>
                <button type={props.btnType} onClick={props.onClick}>{props.btnLabel}</button>
            </div>
        </>
    )
}