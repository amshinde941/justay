import React, {Component} from 'react';
import Header from './headerComp';
import { Jumbotron } from 'reactstrap';

class Home extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h2>HEY THERE!!</h2>
                                <p>WE ARE REDUCING YOUR EFFORTS TO FIND A ROOM, PERFECT FOR YOUR <br/>'HOSTEL DAYS MEMORIES'.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }

}

export default Home;