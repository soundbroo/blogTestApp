import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import './Sidebar.css'
import FacebookIcon from './img/FacebookIcon.png'
import GithubIcon from './img/GithubIcon.png'
import InstagramIcon from './img/InstagramIcon.png'
import TwitterIcon from './img/TwitterIcon.png'


class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <div className="Sidebar__sidebar-title">My personal blog</div>
                <div className="Sidebar__sidebar-description">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</div>
                <hr className="sidebar__delimetr" />
                <Link to="/" className="Sidebar-link home">Home</Link>
                <Link to="/about" className="Sidebar-link">About</Link>
                <hr className="sidebar__delimetr" />
                <div className="Sidebar-icon">
                    <img className="fb-icon" src={FacebookIcon} alt="fb" />
                    <img className="github-icon" src={GithubIcon} alt="github" />
                    <img className="instagram-icon" src={InstagramIcon} alt="instagram" />
                    <img className="twitter-icon" src={TwitterIcon} alt="twitter" />
                </div>
            </div>
        )
    }
}

export default Sidebar;