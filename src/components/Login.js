import React from "react";
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import {ButtonContainer} from './Button'
import {ProductConsumer} from '../context'
// import {handleUserChange} from '../context'


export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        showLogin: true,

    };

    componentDidMount() {

    }


    handleCreate = (event) => {
        event.preventDefault();
        event.target.reset();

        const { username, password } = this.state;
        const userData = { username, password };

        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
            body: JSON.stringify({ user: userData }),
        })
        .then((res) => res.json())
        .then(console.log);
    };

    handleLogin = (event) => {
        event.preventDefault();
        // handleUserChange(event)

    };

    handleInputChange = (event) => {
    this.setState({
    [event.target.id]: event.target.value,
    });
    };

    toggleShowLogin = () => {
        this.setState({ showLogin: !this.state.showLogin })
    }

    render() {
    return (
    <div className="App">
    <h1>
        {this.state.showLogin ? 
        "Login Form"
        :
        "Sign Up"}
    </h1>

    {this.state.showLogin ? (
        <ProductConsumer>
            {
            value => {
                return (<LoginForm handleInputChange={this.handleInputChange} handleUserChange={value.handleUserChange} />)
            }
            } 
        </ProductConsumer>
    ) : (
        <SignUpForm handleInputChange={this.handleInputChange} handleCreate={this.handleCreate} />
    )}

    {
        this.state.showLogin
        ? <ButtonContainer onClick={this.toggleShowLogin}>Sign Up</ButtonContainer>
        : <ButtonContainer onClick={this.toggleShowLogin}>Login</ButtonContainer>
    }
    </div>
    );
    }
}