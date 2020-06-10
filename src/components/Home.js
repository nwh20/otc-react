import React from 'react';
import CardList from './Card/CardList';
import { ImgML, ImgMR, ImgG1, ImgG2, ImgG3, ImgG4 } from '../img';

const Home = () => {
    return (
        <div className="home">
            <div className="home-main">
                <div className="home-main-items"><img src={ImgML} alt="main"></img></div>
                <div className="home-main-items"><img src={ImgMR} alt="main"></img></div>
            </div>
            <div className="wrap-page">
                <div className="home-grid-wrap">
                    <div className="home-grid-container">
                        <div className="home-grid-item1"><img src={ImgG1} alt="grid"></img></div>
                        <div className="home-grid-item2"><img src={ImgG2} alt="grid"></img></div>
                        <div className="home-grid-item3"><img src={ImgG3} alt="grid"></img></div>
                        <div className="home-grid-item4"><img src={ImgG4} alt="grid"></img></div>
                    </div>
                </div>
                <div className="home-card">
                    <p>STOCKS</p>
                    <CardList />
                </div>
            </div>
        </div>
    );
}

export default Home;