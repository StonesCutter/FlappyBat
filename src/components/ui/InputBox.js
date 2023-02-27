import React from "react";
import './button.css'

function InputBox(props) {

    function callback(e){
        props.callbackInput(e)
    }

    return (
        <input
            name={props.nameInput}
            placeholder={props.placeholderInput}
            type={props.typeInput}
            onChange={callback}
        />
    )
}

export default InputBox