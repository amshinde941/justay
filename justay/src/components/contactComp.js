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
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>send us your Suggestion/Grievience</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlfor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.Text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(10)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 char',
                                            maxLength: 'must be less than 10 char'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.Text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(10)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 char',
                                            maxLength: 'must be less than 10 char'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="telnum" md={2}>Contact Telno.</Label>
                                <Col md={10}>
                                    <Control.Text model=".telnum" id="tel" name="telnum"
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
                            <Row className="form-group">
                                <Label htmlfor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.Text model=".email" id="email" name="email"
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
                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.Checkbox model=".agree" name="agree"
                                                className="form-check-input" />{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.Select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>group</option>
                                    </Control.Select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.Textarea model=".message" id="message" name="message"
                                        rows="12"
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