import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'
import Logo from '../../assets/loog.svg';
import { auth } from '../../firebase/firebase.utils'

export default class Header extends Component {
    render() {

        let { currentUser } = this.props;

        return (
            <div className="header">
                <Link to="/" className="logo-container">
                    <img src={Logo} alt="logo" className="logo" />
                </Link>

                <div className="options">
                    <Link className="option" to="/shop">Shop</Link>
                    <Link className="option" to="/">Contact</Link>
                    {
                        currentUser 
                        ?
                            <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                        : 
                            <Link className="option" to="/signIn">Sign In</Link>
                    }
                </div>
            </div>
        )
    }
}
