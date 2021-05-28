import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from './shared/baseUrl';
function RenderMenuItem({ hostel }) {
    if (hostel.featured === true) {
        return (
            <Card key={hostel.id}>
                <Link to={`/hostel/${hostel.id}`}>
                    <CardImg width="100%" src={baseUrl + hostel.mainimage} alt={hostel.name} />
                    <CardImgOverlay>
                        <CardTitle style={{color:"#e739df",backgroundColor:"#f0f8ff"}}>{hostel.name}</CardTitle>
                    </CardImgOverlay>
                    <CardText>{hostel.category}</CardText>
                    <CardText>{hostel.address}</CardText>
                </Link>
            </Card>
        );
    }
    else {
        return (
            <div>

            </div>

        )

    }
}

const Hostels = (props) => {
    const hostel = props.hostels.hostels.map((hostel) => {
        return (
            <div className="col-12 col-md-3 m-1 ">
                <RenderMenuItem hostel={hostel} />
            </div>
        );
    });

    if (props.hostels.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.hostels.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.hostels.errMess}</h4>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Hostels</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Hostels</h3>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {hostel}
                </div>
            </div>
        );
    }
}


export default Hostels;