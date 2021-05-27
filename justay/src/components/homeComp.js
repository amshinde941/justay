import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './homeComp.css';
class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>HEY THERE!!</h1>
                            <h5>WE ARE REDUCING YOUR EFFORTS TO FIND A ROOM, PERFECT FOR YOUR <br />'HOSTEL DAYS MEMORIES'.</h5>
                        </div>
                    </div>
                </Jumbotron>
                <div className="row justify-content-center home-content">
                    <h4>what to look for, when searching for a hostel?</h4>
                    <img src="images/location.png" alt="location" />
                    <img src="images/single-bed.png" alt="single-bed" />
                    <img src="images/table.png" alt="table" />
                    <img src="images/cupboard.png" alt="cupboard" />
                    <img src="images/hot-water.png" alt="hot-water" />
                    <img src="images/food.png" alt="food" />
                    <img src="images/drinking-water.png" alt="drinking-water" />
                    <img src="images/wifi-signal.png" alt="wifi" />
                    <img src="images/fan.png" alt="fan" />
                    <img src="images/household.png" alt="household" />
                    <h4>we will find one for you</h4><br />
                    <div className="row">
                        <h3>Owners can mail their hostel info here 	&rarr;
                        <a role="button" className="btn btn-success" style={{ width: "10%",backgroundColor:"#e739df" }} href="mailto:justay@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </h3>
                        <div className="copyright" style={{paddingTop:"1em"}}>
                            &copy; Designed & Developed by justay web team
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;