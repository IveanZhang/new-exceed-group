import React, { Component } from 'react';
import { connect } from 'react-redux';
import './timeLine.scss';

class TimeLine extends Component {

    renderContentList() {
        const contentList = this.props.contentList;
        return contentList.map((item, index) => {
            return (
                <li key={index} data-index={index+1} className={index % 2 === 0 ? '' : 'timeline-inverted'}>
                    <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={require(`./img/${(index)%3 + 1}.jpg`)} alt="" />
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>{item.date}</h4>
                            <h4 className="subheading">{item.title}</h4>
                        </div>
                        <div className="timeline-body">
                            <p className="text-muted">{item.content}</p>
                        </div>
                    </div>
                </li>
            );
        });
    }

    render() {
        const title = this.props.title.value;
        return (
            <section id="history">
                <div className="content-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>{title}</h2>
                                <h3 className="section-subheading">记录公司发展脚步</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="timeline">
                                    {this.renderContentList()}
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

export default connect(
    state => ({
        title: state.navBarReducer.navList[5],
        contentList: state.timeLineReducer.contentList
    })
)(TimeLine);
