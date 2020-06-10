import React from 'react';
import { Link } from 'react-router-dom';
import IconSearch from './Fontawesome/IconSearch';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 12px;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Nav = () => {
    return (
        <div className="nav">
            <div className="wrap-info">
                <div className="nav-logo">OLDIE THE CAMERA</div>
                <ul>
                    <li><StyledLink to="/">home</StyledLink></li>
                    <li><StyledLink to="/about">about us</StyledLink></li>
                    <li><StyledLink to="/board">board</StyledLink></li>
                </ul>
                <div className="nav-searchbox">
                    <input type="text" id="search" placeholder="Go to Oldie ebay" readOnly></input>
                    <label htmlFor="search"> <IconSearch /></label>
                </div>
            </div>
        </div>
    )
}

export default Nav;
