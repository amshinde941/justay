import React from 'react';
import {
    Card, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from './shared/baseUrl';

function RenderImages({ image }) {
    return (
        <Card key={image.iid}>
            <CardImg width="100%" src={baseUrl + image.image} alt="hostel-images" />
        </Card>
    )
}

const Hosteldetail = (props) => {
    const Images = props.selectedHostel.images.map((image) => {
        return (
            <div className="col-5 col-md-3 m-1">
                <RenderImages image={image} />
            </div>
        );
    })

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
            <div className="container ">
                <div className="row justify-content-center">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/hostel'>Hostel</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.selectedHostel.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Hostel</h3>
                        <hr />
                    </div>
                    {Images}
                </div>
                <div className="row col-12" style={{ padding: "1em",marginBottom:"2em"}}>
                    <Card style={{ padding: "1em",backgroundColor: "#f0f8ff " }}>
                        <CardTitle><h3>Name : {props.selectedHostel.name} </h3></CardTitle>
                        <CardText><h3>Category : {props.selectedHostel.category}</h3></CardText>
                        <CardText><h3>Address : {props.selectedHostel.address}</h3></CardText>
                        <CardText><h3>Price : {props.selectedHostel.price} </h3></CardText>
                        <CardText><h5>{props.selectedHostel.description}</h5></CardText>
                    </Card>
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