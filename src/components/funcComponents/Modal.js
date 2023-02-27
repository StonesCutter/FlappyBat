import React, { useEffect } from "react";
import PropTypes from 'prop-types';


function Modal(props) {

    return (
        <div style={{
            position:'absolute',
            width:'50%',
            height:300,
            backgroundColor:'red',
            display:'flex',
            justifyContent:'center',
            left:'25%'
        }}>
            <h2>
                {
                    props.title
                }
            </h2>

            <div>
                {
                    props.children
                }
            </div>
        </div>
    )
}

Modal.defaultProps = {
    title:'title'
}

Modal.propTypes = {
    title:PropTypes.string
};


export default Modal