import React,{Component} from 'react';
import p1 from '../images/11.png';
import pic1 from '../images/1.jpeg';

class View1 extends Component{
    render(){
        return(
            <center>
            <div className="card z-depth-0 "border="solid 1px" width="500px">
           <div className="card-content">
            <img src={pic1} alt="charles"/><br/>
            <h5>Charles</h5>
            <p>29</p>
            <img src={p1} alt="qr_for_1"/>
            
            <p><b>Year of Study:</b>3<br/><b>About:</b>xxxxxx</p>
            
            </div>
            </div>
            </center>
        )
    }
}

export default View1