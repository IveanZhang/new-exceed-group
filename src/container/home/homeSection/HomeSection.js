import React, { Component } from 'react';
import './homeSection.scss';

class HomeSection extends Component {
    render() {
        return (
            <section id="home">
                <div id="home-cover" className="bg-parallax animated fadeIn">
                    <div id="home-content-box">
                        <div id="home-content-box-inner">
                            <div id="home-heading" className="animated zoomIn">
                                <img src={require('./img/logo.png')} alt='logo'/>
                                <h3>海外资产配置一站式服务</h3><h4>房产购置/金融保险/旅游投资/留学移民</h4>
                            </div>
                            <div id="home-btn" className="animated zoomIn">
                                <a className="smooth-scroll btn btn-lg btn-general btn-white" href="#work" role="button" title="View Our Product">产品展示</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeSection;
