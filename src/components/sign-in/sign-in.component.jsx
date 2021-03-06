import React from 'react';

import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h1>Already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' name='email' type='email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label='password' name='password' type='password' value={this.state.password} handleChange={this.handleChange} required />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignedIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;