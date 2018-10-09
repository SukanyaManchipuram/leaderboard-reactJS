import React,{Component} from 'react';
import p1 from '../images/44.png';
import pic1 from '../images/4.png';

class View4 extends Component{
    render(){
        return(
            <center>
            <div className="card z-depth-0 "border="solid 1px" width="500px">
           <div className="card-content">
            <img src={pic1} alt="charles"/><br/>
            <h5>Chay</h5>
            <p>19</p>
            <img src={p1} alt="qr_for_4"/>
            
            <p><b>Year of Study:</b>3<br/><b>About:</b>zzzzzzzzz</p>
            
            </div>
            </div>
            </center>
        )
    }
}

export default View4