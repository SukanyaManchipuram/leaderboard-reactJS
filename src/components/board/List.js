import React,{Component} from 'react';
import './List.css';
import {Link} from 'react-router-dom';
import View1 from './views/View1'
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import pic1 from './images/1.jpeg';
import pic2 from './images/3.jpeg';
import pic3 from './images/7.png';
import pic4 from './images/4.png';
import pic5 from './images/5.png';
import pic6 from './images/2.png';
import pic7 from './images/6.png';
import pic8 from './images/9.png';
class List extends Component{
    
    render(){
    return (
        <div className="list section" padding-left="50px" padding-right="50px">
        <table>
        <tr><td>
           <center>
           <div className="card z-depth-0 "border="solid 1px">
           <div className="card-content grey-text text-darken-3">
            <img width="200" height="200" src={pic1} alt="Winner"  />
            <h4>Charles</h4>
            <p>score:29</p>
            <Link to='/charles' >View</Link>
           </div>
           </div>
           </center>
        </td>
        <td/>
        <td>
        <center>
        <div className="card z-depth-0 ">
        <div className="card-content grey-text text-darken-3">
        <img width="200" height="200" src={pic2} alt="Runner1" />
        <h4>David</h4>
        <p>score:27</p>
        <Link to='/David'>View</Link>
        </div>
        </div>
        </center>
        </td>
        <td/>
        <td>
        <center>
        <div className="card z-depth-0 ">
        <div className="card-content grey-text text-darken-3">
        <img width="200" height="200" src={pic3} alt="Runner2" />
        <h4>Alice</h4>
        <p>score:27</p>
        <Link to='/alice'>View</Link>
        </div>
        </div>
        </center>
        </td>
        </tr>
        </table><br/>
        <table>
        <tr>
            <td>
                <img width="50" height="50" src={pic4} alt="member" />
            </td>
            <td>Chay</td>
            <td></td>
            <td>  19    </td>
            <td><Link to='/chay'>View</Link></td>
        </tr>
        <tr>
            <td>
                <img width="50" height="50" src={pic5} alt="member" />
            </td>
            <td>Sid</td>
            <td></td>
            <td>  18    </td>
            <td><Link to='/sid'>View</Link></td>
        </tr>
        <tr>
            <td>
                <img width="50" height="50" src={pic8} alt="member" />
            </td>
            <td>Marie</td>
            <td></td>
            <td>  16    </td>
            <td><Link to='/marie'>View</Link></td>
        </tr>
        <tr>
            <td>
                <img width="50" height="50" src={pic1} alt="member" />
            </td>
            <td>John</td>
            <td></td>
            <td>  16    </td>
            <td><Link to='/john'>View</Link></td>
        </tr>
        <tr>
            <td>
                <img width="50" height="50" src={pic6} alt="member" />
            </td>
            <td>Sam</td>
            <td></td>
            <td>  15    </td>
            <td><Link to='/sam'>View</Link></td>
        </tr>
        <tr>
            <td>
                <img width="50" height="50" src={pic3} alt="member" />
            </td>
            <td>Ria</td>
            <td></td>
            <td>  14   </td>
            <td><Link to='/ria'>View</Link></td>
        </tr>
        <tr>
            <td>
                <img width="50" height="50" src={pic4} alt="member" />
            </td>
            <td>Harry</td>
            <td></td>
            <td>  13    </td>
            <td><Link to='/harry'>View</Link></td>
        </tr>

        </table>
        </div>
    )
    }
}
export default List