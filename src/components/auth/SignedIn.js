import React,{Component} from 'react';

class SignedIn extends Component{
    state={
        email:'',
        password:''
    }
    handleChange =(e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e) => {
        
            e.preventDefault();
            console.log(this.state);
        }
    
    render() {
        return(
            <div className='container'>
            <form  onSubmit={this.handleSubmit} className="white">
            <h4 className="grey-text grey-darken-3">Sign in</h4>
            <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="input-field">
            <div className="btn btn-primary z-depth-0">Login</div>
            </div>
            </form>
            </div>         
        )
    }
}
export default SignedIn