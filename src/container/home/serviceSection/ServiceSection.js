import React, { Component } from 'react';
import { connect } from 'react-redux';
import './serviceSection.scss';

class ServiceSection extends Component {
    renderContent() {
        const contentList = this.props.contentList;
        return contentList.map(item => {
            return (
                <div className="col-sm-6">
                    <div className="service-item">
                        <div className="service-item-icon">
                            <a href={`${item.url}`} target='_blank' rel="noopener noreferrer">
                                <i className="fas fa-building fa-3x"></i>
                            </a>
                        </div>
                        <div className="service-item-title">
                            <h3>{item.name}</h3>
                        </div>
                        <div className="service-item-desc">
                            <p>{item.content}</p>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        const title = this.props.title.value;
        return (
            <section id="service">
                <div className="content-box">
                    <div className="content-title wow fadeInDown" data-wow-duration="1s">
                        <h3>{title}</h3>
                        <div className="content-title-underline"></div>
                    </div>

                    <div className="container">
                        <div className="row wow fadeInUp" data-wow-duration="1s">
                            {this.renderContent()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(
    state => ({
        title: state.navBarReducer.navList[1],
        contentList: state.servicesReducer.services
    })
)(ServiceSection);
