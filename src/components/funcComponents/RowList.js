import React, { useEffect } from "react";
import PropTypes from 'prop-types';


function RowList(props) {

    return (
        <div>
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

RowList.defaultProps = {
    title:'title'
}

RowList.propTypes = {
    title:PropTypes.string,
    children: PropTypes.array.isRequired
};


export default RowList