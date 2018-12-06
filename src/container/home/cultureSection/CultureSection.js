import React, { Component } from 'react';
import './cultureSection.scss';

class CultureSection extends Component {
    render() {
        return (
            <section id="cultures">
                <div id="cultures-cover" className="bg-parallax">
                    <div className="content-box">
                        <div className="content-title content-title-white wow fadeInDown" data-wow-duration="1s">
                            <h3>公 司 文 化</h3>
                            <div className="content-title-underline"></div>
                        </div>

                        <div className="container">
                            <div className="row wow bounceInDown" data-wow-duration="1s">
                                <div className="col-md-12">
                                    <div id="customers-cultures" className="text-center owl-carousel owl-theme">
                                        <div className="culture">
                                            <img src={require("./img/balloon_fdb9722.png")} className="img-responsive img-circle" alt="culture" />
                                            <blockquote className="text-center">
                                                <p>作为一个全球性拥有多元文化的企业，来自世界各地的员工为了一个目标努力奋斗。在这里国籍不是问题，年龄不是差距，语言不会带来障碍。每个人都能找到最适合自己的位置，发挥最大的价值。我们会走到世界各地的企业参观学习，掌握最准确的信息，寻找最合适的资源。</p>
                                            </blockquote>
                                        </div>

                                        <div className="culture">
                                            <img src={require("./img/balloon_fdb9722.png")} className="img-responsive img-circle" alt="culture" />
                                            <blockquote className="text-center">
                                                <p>集团也非常注重人才培养和梯队的建设，每周会邀请各行业资深专家进行内部培训。企业会出资选拔优秀员工到各大商学院进行进一步深造。
                                        </p>
                                            </blockquote>
                                        </div>

                                        <div className="culture">
                                            <blockquote className="text-center">
                                                <h3>精诚铸就品牌，平台重塑格局</h3>
                                            </blockquote>
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

export default CultureSection;
