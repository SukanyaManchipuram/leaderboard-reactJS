import React,{Component} from 'react';
import p1 from '../images/22.png';
import pic1 from '../images/3.jpeg';

class View2 extends Component{
    render(){
        return(
            <center>
            <div className="card z-depth-0 "border="solid 1px" width="500px">
           <div className="card-content">
            <img src={pic1} alt="charles"/><br/>
            <h5>David</h5>
            <p>27</p>
            <img src={p1} alt="qr_for_2"/>
            
            <p><b>Year of Study:</b>2<br/><b>About:</b>yyyyyyyyy</p>
            
            </div>
            </div>
            </center>
        )
    }
}

export default View2