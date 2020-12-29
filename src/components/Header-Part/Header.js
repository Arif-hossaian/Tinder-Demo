import React from 'react'
import "../Header-Part/header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton"
import TinderLogo from "../Header-Part/images/Tinder-Logo.png"
import ForumIcon from "@material-ui/icons/Forum"

function Header() {
    return (
        <div className="header">
        <IconButton>
        <PersonIcon fontSize="large" className="header_icon"/>
        </IconButton>

        <img src={TinderLogo} alt="" className="header_logo" ></img>

        <IconButton>
        <ForumIcon fontSize="large" className="header_icon"/>
        </IconButton>
        </div>
    )
}

export default Header
