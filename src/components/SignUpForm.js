import React, { Component } from 'react'

export default class SignUpForm extends Component {
    render() {
        return (
        <form onSubmit={this.props.handleCreate}>
            <input
                id="username"
                onChange={this.props.handleInputChange}
                type="text"
                placeholder="username"
            />
            <input
                id="password"
                onChange={this.props.handleInputChange}
                type="password"
                placeholder="password"
            />
            <input type="submit" value="sign up" />
        </form>
        )
    }
}
