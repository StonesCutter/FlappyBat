import React from "react";
import './button.css'

function ButtonSecondVersion(props) {
    return (
        <div
            className={'defaultButton'}
            style={props.styleButton}
        >
            <span>
                {
                    !!props.label ? props.label : 'click'
                }
            </span>
        </div>
    )
}

export default ButtonSecondVersion