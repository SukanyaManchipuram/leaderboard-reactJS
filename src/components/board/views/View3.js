import React,{Component} from 'react';
import p1 from '../images/33.png';
import pic1 from '../images/7.png';

class View3 extends Component{
    render(){
        return(
            <center>
            <div className="card z-depth-0 "border="solid 1px" width="500px">
           <div className="card-content">
            <img width="250" height="250" src={pic1} alt="charles"/><br/>
            <h5>Alice</h5>
            <p>27</p>
            <img src={p1} alt="qr_for_3"/>
            
            <p><b>Year of Study:</b>3<br/><b>About:</b>zzzzzzzzz</p>
            
            </div>
            </div>
            </center>
        )
    }
}

export default View3