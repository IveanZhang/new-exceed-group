import React, { Component } from 'react';
import './productSection.scss';

class ProductSection extends Component {
    render() {
        return (
            <section id="product">
                <div className="content-box">
                    <div className="content-title wow fadeInDown" data-wow-duration="1s">
                        <h3>两大产业</h3>
                        <div className="content-title-underline"></div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 wow zoomIn" data-wow-duration="1s">
                                <div className="product-box text-center">
                                    <h2 className="product-title">文化</h2>
                                    <div className="product-icon">
                                        <i className="fas fa-dove fa-3x"></i>
                                    </div>
                                    <ul className="product-spec">
                                        <li>
                                            <p>举办音乐类、舞蹈类等国际化赛事</p>
                                        </li>
                                        <li>
                                            <p>联合参与各类峰会、论坛等国际会议</p>
                                        </li>
                                        <li>
                                            <p>投资电影、电视、演出等文化产品</p>
                                        </li>
                                    </ul>
                                    <div className="product-gtn">
                                        <a className="btn btn-lg btn-general btn-blue" rel="noopener noreferrer" href="http://www.neg18.com/project.html" role="button" target="_blank" >了解更多</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 wow zoomIn" data-wow-duration="1s">
                                <div className="product-box text-center">
                                    <h2 className="product-title">健康</h2>
                                    <div className="product-icon">
                                        <i className="fas fa-heartbeat fa-3x"></i>
                                    </div>
                                    <ul className="product-spec">
                                        <li>
                                            <p>与多家人工智能企业合作</p>
                                        </li>
                                        <li>
                                            <p>涉及医疗、无人驾驶、金融、安防</p>
                                        </li>
                                        <li>
                                            <p>在加拿大建有多个旅游度假疗养地</p>
                                        </li>
                                    </ul>
                                    <div className="product-gtn">
                                        <a className="btn btn-lg btn-general btn-blue" rel="noopener noreferrer" href="http://www.neg18.com/project.html" role="button" target="_blank">了解更多</a>
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

export default ProductSection;
