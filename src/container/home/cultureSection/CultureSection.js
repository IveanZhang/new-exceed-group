import React, { Component } from 'react';
import { connect } from 'react-redux';
import './cultureSection.scss';

class CultureSection extends Component {

    renderCultureList() {
        const cultureList = this.props.cultureList;
        return cultureList.map((item, index) => {
            return (
                <div key={index} className="culture">
                    {
                        item.isHighLight ? null : <img src={require("./img/balloon_fdb9722.png")} className="img-responsive img-circle" alt="culture" />
                    }
                    <blockquote className="text-center">
                        {item.isHighLight ? <h3>{item.content}</h3> : <p>{item.content}</p>}
                    </blockquote>
                </div>
            );
        });
    }

    render() {
        const title = this.props.title.value;
        return (
            <section id="cultures">
                <div id="cultures-cover" className="bg-parallax">
                    <div className="content-box">
                        <div className="content-title content-title-white wow fadeInDown" data-wow-duration="1s">
                            <h3>{title}</h3>
                            <div className="content-title-underline"></div>
                        </div>

                        <div className="container">
                            <div className="row wow bounceInDown" data-wow-duration="1s">
                                <div className="col-md-12">
                                    <div id="customers-cultures" className="text-center owl-carousel owl-theme">
                                        {this.renderCultureList()}
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

export default connect(
    state => ({
        title: state.navBarReducer.navList[5],
        cultureList: state.cultureReducer.cultureList
    })
)(CultureSection);
