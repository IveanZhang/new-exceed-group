import React, { Component } from 'react';
import './workSection.scss';

class WorkSection extends Component {
    render() {
        return (
            <section id="work">
                <div className="content-box">
                    <div className="content-title wow fadeInDown" data-wow-duration="1s">
                        <h3>产品展示</h3>
                        <div className="content-title-underline">
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row no-gutters wow fadeInUp" data-wow-duration="1s">
                            <div className="col-md-3 col-sm-4">
                                <div className="img-wrapper">
                                    <a href="img/work/1.jpg" title="Work desc">
                                        <div className="img-block">
                                            <img src={require("./img/1.jpg")} className="img-responsive" alt="Work" />
                                        </div>
                                    </a>
                                    <div className="work-desc" data-index='1'>
                                        <h4>迪拜达马克Celestia精装公寓</h4>
                                        <p>Celestia 精装公寓，Celestia精装公寓位于迪拜南部—世界上最大的航空枢纽和众多世界级设施的2020年世博会的中枢神经中心。精品品质生活，绝佳投资项目。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="img-wrapper">
                                    <a href="img/work/2.jpg" title="Work desc">
                                        <div className="img-block">
                                            <img src={require("./img/2.jpg")} className="img-responsive" alt="Work" />
                                        </div>
                                    </a>
                                    <div className="work-desc" data-index='2'>
                                        <h4>法国房产投资-璞蔚房地产</h4>
                                        <p>巴黎自然村庄Villages Nature Paris严格遵循可持续环保建造概念，巴黎自然村庄Villages Nature Paris拥有欧洲最大的水上乐园以及地热礁湖，全年恒温。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="img-wrapper">
                                    <a href="img/work/3.jpg" title="Work desc">
                                        <div className="img-block">
                                            <img src={require("./img/3.jpg")} className="img-responsive" alt="Work" />
                                        </div>
                                    </a>
                                    <div className="work-desc" data-index='3'>
                                        <h4>法国多维尔市：五星级杜克半岛公寓</h4>
                                        <p>欧洲五星级酒店式服务，高端装潢配置,150 平米顶级酒吧,玻璃天顶早餐厅,室外泳池、室内泳池.水疗中心： 220平米水疗空间，土耳其浴、桑拿浴等一应俱全。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="img-wrapper">
                                    <a href="img/work/4.jpg" title="Work desc">
                                        <div className="img-block">
                                            <img src={require("./img/4.jpg")} className="img-responsive" alt="Work" />
                                        </div>
                                    </a>
                                    <div className="work-desc" data-index='4'>
                                        <h4>佛州奥兰多—Balmoral度假别墅</h4>
                                        <p>位于佛罗里达州中部，靠近奥兰多，坐落在一个美丽的私人封闭式社区，设有带私人游泳池的宽敞度假屋，周围环绕着宁静的公园，花园，郁郁葱葱的风景，宁静的湖泊和人行道。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="img-wrapper">
                                    <a href="img/work/5.jpg" title="Work desc">
                                        <div className="img-block">
                                            <img src={require("./img/5.jpg")} className="img-responsive" alt="Work" />
                                        </div>
                                    </a>
                                    <div className="work-desc" data-index='5'>
                                        <h4>亚特兰大·全新独栋别墅—蓝堡美墅</h4>
                                        <p>蓝堡美墅Lombard Estates是由美国佐治亚州三大房地产开发商之一的麦克金利地产有限公司在亚特兰大东南近郊Ellenwood（艾伦伍德）地区全新打造的独栋别墅项目。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="img-wrapper">
                                    <a href="img/work/6.jpg" title="Work desc">
                                        <div className="img-block">
                                            <img src={require("./img/6.jpg")} className="img-responsive" alt="Work" />
                                        </div>
                                    </a>
                                    <div className="work-desc" data-index='6'>
                                        <h4>达马克梅森Privé——迪拜水岸酒店式公寓</h4>
                                        <p>市中心哈利法塔区，滨水景观酒店式公寓,豪华套房，一居两居全景水岸观景房可选。达马克梅森的酒店服务根据您的需求为您打造最舒心的居住体验。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="img-wrapper">
                                    <a href="img/work/7.jpg" title="Work desc">
                                        <div className="img-block">
                                            <img src={require("./img/7.jpg")} className="img-responsive" alt="Work" />
                                        </div>
                                    </a>
                                    <div className="work-desc" data-index='7'>
                                        <h4>最新超值楼盘——希腊VIRONAS四层公寓出售</h4>
                                        <p>公寓1,2,3,和4层，每层分别82.04平方米。包含：2间卧室，1间卫生间，开放式的客厅，餐厅配有厨房和壁炉、储藏室，停车位以及独立供暖系统。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="img-wrapper">
                                    <a href="img/work/8.jpg" title="Work desc">
                                        <div className="img-block">
                                            <img src={require("./img/8.jpg")} className="img-responsive" alt="Work" />
                                        </div>
                                    </a>
                                    <div className="work-desc" data-index='8'>
                                        <h4>Shipyard——旧金山顶级海景别墅</h4>
                                        <p>旧金山湾海景别墅Shipyard是位于旧金山市的一个大综合规划社区，坐拥180°旧金山海湾一线景色，这里是西海岸最大的艺术家聚集地之一。</p>
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

export default WorkSection;
