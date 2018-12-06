import React, { Component } from 'react';
import './footBar.scss';

class FootBar extends Component {
    render() {
        return (
            <footer>
                <div id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div id="contact-left">
                                    <h3>新超越集团</h3>
                                    <p>感谢您来到新超越，若您有合作意向，请您为我们留言或使用以下方式联系我们，我们将尽快给您回复，并为您提供最真诚的服务，谢谢。</p>

                                    <div id="contact-info">
                                        <address>
                                            <strong>地址:</strong>
                                            <p>250 Sheppard Ave. E. Suite 200<br />
                                                North York. M2N 6M9.
                                            </p>
                                        </address>
                                        <div id="phone-fax-email">
                                            <p>
                                                <strong>联系电话:</strong><span> 950-4033-5104（国内）</span><br />
                                                <strong>联系电话:</strong><span> (416)224-0386（海外）</span><br />
                                                <strong>邮箱地址:</strong><span> wuzhou331@gmail.com</span><br />
                                                <strong>公司网址:</strong><span> www.cenbillions.com</span><br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="contact-right">
                                    <h3>联系我们</h3>
                                    <div className='contact-qr'>
                                        <img src={require("./img/qr.jpg")} alt='qr code'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div id="footer-copyrights">
                                    <p>copyrights &copy; 2018 All Rights Reserved by Ivan Zhang.</p>
                                </div>
                            </div>
                            <div className="col-md-6 hidden-sm hidden-xs">
                                <div id="footer-menu">
                                    <ul>
                                        <li><a className="smooth-scroll" href="#home">首页</a>/</li>
                                        <li><a className="smooth-scroll" href="#service">四大领域</a>/</li>
                                        <li><a className="smooth-scroll" href="#about">新超越介绍</a>/</li>
                                        <li><a className="smooth-scroll" href="#work">产品展示</a>/</li>
                                        <li><a className="smooth-scroll" href="#product">两大产业</a>/</li>
                                        <li><a className="smooth-scroll" href="#cultures">公司文化</a></li>
                                        <li><a className="smooth-scroll" href="#history">大事记</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#home" id="back-to-top" className="btn btn-sm btn-blue btn-back-to-top smooth-scroll hidden-sm hidden-xs" title="home" role="button">
                    <i className="fa fa-angle-up"></i>
                </a>
            </footer>
        );
    }
}

export default FootBar;
