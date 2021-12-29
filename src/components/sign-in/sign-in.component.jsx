import './sign-in.scss';
import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            password: '',
            email: ''
        })
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        console.log(event.target.value);
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I have already account</h2>
                <span>Sign In with your email or password</span>

                <form onSubmit={this.handleSubmit} id="form">
                    <FormInput type="email" name="" id="email" handleChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="" id="password" handleChange={this.handleChange} label="Password" required />
                    <div className="buttons">
                        <CustomButton type="submit" value="SIGN IN"> Sign In</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;