import React, { Component } from 'react';
import './timeLine.scss';

class TimeLine extends Component {
    render() {
        return (
            <section id="history">
                <div className="content-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>公司大事记</h2>
                                <h3 className="section-subheading">记录公司发展脚步</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="timeline">
                                    <li data-index='1'>
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src={require("./img/1.jpg")} alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>2018-06-22</h4>
                                                <h4 className="subheading">2018胡晓平庆祝演唱会</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">2018年6月16日晚在多伦多世嘉堡城堡演播中心成功举办，来宾包括加拿大各界精英人士和爱乐华人。西欧评论家把她和世界著名女高音歌唱家Freni相比：“胡是初生的太阳，Freni是黄昏的太阳，都是那么艳丽”，“胡唱的咪咪，赋予人物更准确的性格描写，应该称她是咪咪胡”，“把东方的美溶进了西方的歌剧”，“从东方飞来的百灵鸟”。</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-index='2' className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src={require("./img/2.jpg")} alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>2018-06-22</h4>
                                                <h4 className="subheading">2018安省国际学生歌唱大赛</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">2018年6月2日晚，本届大赛总决赛历时4个小时，在新动力传媒大型演播中心完美落幕。量子教育多伦多分院作为协办方，参与举办了安省最大的国际学生歌唱大赛。此次大赛在多伦多备受关注，并得到了加拿大政府议员的祝贺信。谭耕国会议员助理黄志勇博士、旺市议员Racco的先生Mr. Mario G. Racco 也亲临决赛现场发表贺词。</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-index='3'>
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src={require("./img/3.jpg")} alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>2018-06-22</h4>
                                                <h4 className="subheading">量子大学多伦多分院签约仪式</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">2018年3月18日，量子大学多伦多分院在杭州签约正式成立。量子大学加拿大（多伦多）分院充分响应国家“一带一路”国际发展战略，通过新超越的全球智能商盟平台与5万高净值客户，2000多个线下联盟与线上对接。</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-index='4' className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src={require("./img/1.jpg")} alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>2018-08-03</h4>
                                                <h4 className="subheading">新超越集团赴蒙特利尔进行商务考察</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">2018年6月18日至20日，新超越集团的商务考察团前往位于蒙特利尔、渥太华等地进行为期三天的商务考察。   本次行程的目的在于与当地多个领域的顶尖企业进行合作洽谈，以配合全球智能商盟平台上线前的内部测试，寻找更多的优秀合作伙伴，共建互赢互利的未来。</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <h4>
                                                <br /><strong>待续</strong>
                                            </h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TimeLine;
