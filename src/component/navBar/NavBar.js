import React, { Component } from 'react';
import './navbar.scss';

class NavBar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="vesco-nav-wrapper">
                            <div className="navbar-header">

                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#vesco-menu">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>

                                <a className="navbar-brand" href="#home">
                                    <img src={require('./img/logo.png')} alt="logo" />
                                    <span>新超越集团</span>
                                </a>
                            </div>

                            <div id="vesco-menu" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li><a className="smooth-scroll" href="#home">首页</a></li>
                                    <li><a className="smooth-scroll" href="#service">四大领域</a></li>
                                    <li><a className="smooth-scroll" href="#about">新超越介绍</a></li>
                                    <li><a className="smooth-scroll" href="#work">产品展示</a></li>
                                    <li><a className="smooth-scroll" href="#product">两大产业</a></li>
                                    <li><a className="smooth-scroll" href="#cultures">公司文化</a></li>
                                    <li><a className="smooth-scroll" href="#history">公司大事记</a></li>
                                    <li><a className="smooth-scroll" href="#contact">联系我们</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default NavBar;
