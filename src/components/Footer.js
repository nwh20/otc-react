import React from 'react';
import { Link } from 'react-router-dom';
import IconInsta from './Fontawesome/IconInsta'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: rgb(95, 95, 95);
    text-transform: uppercase;
    font-size: 12px;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrap-info">
                <div className="footer-logo">
                    <h1>OLDIE THE CAMERA</h1>
                    <p>copyright 2020</p>
                </div>
                <ul>
                    <li><StyledLink to="/">home</StyledLink></li>
                    <li><StyledLink to="/about">about us</StyledLink></li>
                    <li><StyledLink to="/board">board</StyledLink></li>
                </ul>
                <ul className="footer-info">
                    <li><b>TEL</b> 02-1001-1001</li>
                    <li><b>CS/WALK-IN</b> AM10:00 - PM05:00 (MON OFF)</li>
                    <li><b>SHOWROOM</b> 서울시 성동구 성수이로 94</li>
                    <li>94 SEONGSUI-RO, SEONGDONG-GU, SEOUL</li>
                </ul>
                <div className="footer-sns">
                    <p>OLDIETHECAMERA@GMAIL.COM</p>
                    <IconInsta />
                </div>
            </div>
        </div>
    );
}

export default Footer;