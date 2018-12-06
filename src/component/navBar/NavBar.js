import React, { Component } from 'react';
import {connect} from 'react-redux';
import './navbar.scss';

class NavBar extends Component {

    renderNavList(){
        const navList = this.props.navList;
        return navList.map(item => {
            return (<li key={item.key}><a className="smooth-scroll" href={`#${item.value}`}>{item.value}</a></li>)
        })
    }

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
                                    {this.renderNavList()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default connect(
    state => ({ navList: state.navBarReducer.navList})
)(NavBar);
