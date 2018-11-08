import React from 'react';

import {
    Row,
    Col,
} from 'reactstrap';


//Strings
import Strings from 'strings/Strings';

import Aux from '../../hoc/Aux/Aux'
import { } from './ToDoView.css'
import PostIt from './PostIt.js'
import _ from 'lodash';

const ToDoView = (props) => {


    return (
        <Aux>
            <Row>
                <Col lg="12" md="12" sm="12" xs="12">
                    <div className="TitleToDo">Things To Do</div>
                </Col>
            </Row>
            <Row>
                {
                    _.map(props.items, (item) => {
                        return <PostIt title={item.nome} key={item.id} />
                    })
                } 
            </Row>
        </Aux>
    )
}


export default ToDoView;