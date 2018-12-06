import React, { Component } from 'react';
import './aboutSection.scss';

class AboutSection extends Component {
    render() {
        return (
            <section id="about">
                <div className="content-box">
                    <div id="about-bg-diagonal" className="bg-parallax"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div id="about-content-box">
                                    <div className="about-content-box-outer">
                                        <div className="about-content-box-inner">
                                            <div className="content-title wow fadeInDown" data-wow-duration="1s">
                                                <h3>新超越集团</h3>
                                                <div className="content-title-underline">
                                                </div>
                                            </div>

                                            <div id="about-desc" className="content-title wow fadeInDown" data-wow-duration="1s">
                                                <p>新超越集团总部位于世界一流的商业中心<strong>多伦多</strong>。 新超越集团由70多家海外华侨精英集团联合创办，是一家以资本运营为核心业务的国际化集团。秉承“精诚铸就品牌，平台重塑格局”的核心理念，集团一直致力于在金融、房地产、旅游、教育四大领域，文化和健康两大产业的发展。 2017年，新超越集团在加拿大隆重宣布全面战略转型，以“供应链金融集成”为核心，集团投资2.5亿元打造超级全数字化智能服务平台——01N App系统，该系统聘请北美亚马逊设计团队主力开发，预计01N App上线后将全球一期实现2000家线下联盟和线上对接，上线后将实现10000个就业岗位。</p>
                                            </div>

                                            <div id="about-btn" className="wow  fadeInUp" data-wow-duration="1s" >
                                                <a className="smooth-scroll btn btn-lg btn-general btn-blue" href="#work" role="button" title="View Work">产品展示</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutSection;
