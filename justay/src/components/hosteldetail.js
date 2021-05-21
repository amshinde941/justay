import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from './shared/baseUrl';

function Renderhostel({ hostel }) {
    if (hostel != null) {
        return (
            <div>
                    <Card key={hostel.id}>
                        <CardImg width="100%" src={baseUrl + hostel.mainimage} alt={hostel.name} />
                        <CardBody>
                            <CardTitle>{hostel.name}</CardTitle>
                            <CardText>{hostel.description}</CardText>
                        </CardBody>
                    </Card>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

const Hosteldetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    }
    else if (props.selectedHostel != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/hostel'>Hostel</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.selectedHostel.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Hostel</h3>
                        <hr />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Renderhostel hostel={props.selectedHostel} />
                    </div>
                </div>
            </div>
        );

    } else {
        return (
            <div>

            </div>
        );
    }

}

export default Hosteldetail;