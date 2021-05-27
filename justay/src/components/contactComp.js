import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Errors, Form } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length) <= len;
const minLength = (len) => (val) => (val) && (val.length) >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("current state is :" + JSON.stringify(values));
        alert("current state is :" + JSON.stringify(values));
        this.props.postFeedback(values);
        this.props.resetFeedbackForm();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contactus</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>

                <div className="row row-content" style={{padding:"2em"}}>
                    <div className="col-12">
                        <h3 style={{padding:"1em"}}>send us your Suggestion/Grievience</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group" style={{padding:"1em"}}>
                                <Label htmlfor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group" style={{padding:"1em"}}>
                                <Label htmlfor="telnum" md={2}>Contact Telno.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="tel" name="telnum"
                                        placeholder="Contact telno."
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(10), isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'must be less than 10 numbers',
                                            isNumber: 'must be number'
                                        }}
                                    />
                                </Col>
                            </Row>
                            
                            <Row className="form-group" style={{padding:"1em"}}>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input" />{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>group</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group" style={{padding:"1em"}}>
                                <Label htmlfor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="2"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send feedback
                                </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;