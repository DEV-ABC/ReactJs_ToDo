import React from 'react';

import {} from './Spinner.css';

const spinner = (props) => {
    let color = "#14223e";
    if(props.color !== ""){
        color = props.color;
    }
    let style = {
        color: color,
    };

    let className = "loader " + props.className;
    return (
        <div className={className} style={style}>Loading...</div>
    );
}
    

export default spinner;