import React,{Component} from 'react';
import p1 from '../images/99.png';
import pic1 from '../images/7.png';

class View9 extends Component{
    render(){
        return(
            <center>
            <div className="card z-depth-0 "border="solid 1px" width="500px">
           <div className="card-content">
            <img width="250" height="250" src={pic1} alt="charles"/><br/>
            <h5>Ria</h5>
            <p>14</p>
            <img src={p1} alt="qr_for_9"/>
            
            <p><b>Year of Study:</b>2<br/><b>About:</b>zzzzzzzzz</p>
            
            </div>
            </div>
            </center>
        )
    }
}

export default View9