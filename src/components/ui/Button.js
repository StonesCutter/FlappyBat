import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import './button.css'

function Button(props) {

    const t = 'sdfsdsdfsd'
    let n = 9

    useEffect(()=>{
        console.log('props', props)
    },[props.label])

    function callback (){
        props.callbackButton()
    }

    return (
        <div
            className={props.cssStyle}
            onClick={
                callback
            }
        >
            <span>
                {
                    props.label
                }
            </span>
        </div>
    )
}

Button.defaultProps = {
    label:'click',
    cssStyle:'defaultButton'
}

Button.propTypes = {
    label:PropTypes.string,
    cssStyle:PropTypes.string,
    callbackButton:PropTypes.func.isRequired
};


export default Button