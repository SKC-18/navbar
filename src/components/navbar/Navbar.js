import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css';

class Navbar extends Component{
    state = {clicked:  false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className='NavBarItems'>
            <h1 className="navbar-logo">CryptoMart<i className="fa fa-shopping-cart"></i></h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
            </div>
            <ul className='nav-menu'>
                {MenuItems.map((item,index)=>{
                    return( 
                    <li key = {index}>
                        <a className={MenuItems.className} href = {item.url}>
                        {item.title}
                     </a>
                     </li>
                     )
                })}
                </ul>
            </nav>


        )
    }
} 
export default Navbar