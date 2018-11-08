import React from 'react';

import {
    Row,
    Col,
    Container,
    Card,
    CardBody,
    InputGroupAddon,
    Button,
    Alert,    
    FormGroup,
} from 'reactstrap';
import Spinner from '../../componentsUI/Layout/Spinner/Spinner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { AvForm, AvFeedback, AvInput, AvGroup } from 'availity-reactstrap-validation';

//Strings
import Strings from 'strings/Strings';

import { } from './LoginView.css'


const LoginView = (props) => {

    let button = <Button className="btnLogin" outline color="info">{Strings.send}</Button>;
    if(props.loading){
        button= (
            <Spinner color="#fff" />
        )  
    }

    let error = null;
    if(props.error !== ""){
        console.log("Teste" + props.error);
        error = ( 
            <Alert color="danger">
                {props.error}
            </Alert> 
        );
    }

    return (
        <Container fluid className="continerLogin">
            <Row className="align-items-center" style={{ height: "100%"}}>
                <Col xl={{ size: 4, offset: 4 }}
                    lg={{size: 6, offset: 3}}
                     md={{size: 6, offset: 3}}
                    sm={{ size: 6, offset: 3 }}
                    
                     className="align-self-center vcenter">
                    <Card className='border-0 box_login' >
                        <CardBody>
                            <AvForm className="hidden" onValidSubmit={props.onValidSubmit} >
                                <AvGroup className="input-group">
                                    <InputGroupAddon addonType="prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>
                                    </InputGroupAddon>
                                    <AvInput
                                        name="email"
                                        minLength={3}
                                        placeholder={Strings.login.email}
                                        required
                                    />
                                    <AvFeedback>{Strings.login.emailError}</AvFeedback>
                                </AvGroup>
                                <AvGroup className="input-group">
                                    <InputGroupAddon addonType="prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUnlockAlt} />
                                        </span>
                                    </InputGroupAddon>
                                    <AvInput
                                        type="password"
                                        name="password"
                                        minLength={4}
                                        placeholder={Strings.login.password}
                                        required
                                    />
                                    <AvFeedback>{Strings.login.passwordError}</AvFeedback>
                                </AvGroup>
                                <FormGroup style={{ textAlign: 'center' }}>
                                    {button}
                                </FormGroup>
                            </AvForm>
                            {error}
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    )
}


export default LoginView;