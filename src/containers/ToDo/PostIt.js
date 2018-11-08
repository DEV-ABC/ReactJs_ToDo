import React from 'react';

import {
    Col,
} from 'reactstrap';

//Strings
import { } from './ToDoView.css'

const PostIt = (props) => {


    return (
        <Col lg="2" md="12" sm="12" xs="12">
            <div className="Postit"> {props.title} </div>
        </Col>
    )
}


export default PostIt;