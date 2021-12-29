import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './header.style.scss'
import Logo from '../../assets/loog.svg'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/" className="logo-container">
                    <img src={Logo} alt="logo" className="logo"/>
                </Link>

                <div className="options">
                    <Link className="option" to="/shop">Shop</Link>
                    <Link className="option" to="/">Contact</Link>
                    <Link className="option" to="/signIn">Sign In</Link>
                </div>
            </div>
        )
    }
}
