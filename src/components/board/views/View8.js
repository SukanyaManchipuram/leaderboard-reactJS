import React,{Component} from 'react';
import p1 from '../images/88.png';
import pic1 from '../images/6.png';

class View8 extends Component{
    render(){
        return(
            <center>
            <div className="card z-depth-0 "border="solid 1px" width="500px">
           <div className="card-content">
            <img src={pic1} alt="charles"/><br/>
            <h5>Sam</h5>
            <p>15</p>
            <img src={p1} alt="qr_for_8"/>
            
            <p><b>Year of Study:</b>2<br/><b>About:</b>zzzzzzzzz</p>
            
            </div>
            </div>
            </center>
        )
    }
}

export default View8