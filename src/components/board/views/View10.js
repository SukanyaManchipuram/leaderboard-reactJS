import React,{Component} from 'react';
import p1 from '../images/01.png';
import pic1 from '../images/4.png';

class View10 extends Component{
    render(){
        return(
            <center>
            <div className="card z-depth-0 "border="solid 1px" width="500px">
           <div className="card-content">
            <img src={pic1} alt="charles"/><br/>
            <h5>Harry</h5>
            <p>13</p>
            <img src={p1} alt="qr_for_10"/>
            
            <p><b>Year of Study:</b>2<br/><b>About:</b>zzzzzzzzz</p>
            
            </div>
            </div>
            </center>
        )
    }
}

export default View10