import React, { Component } from 'react';
import { connect } from 'react-redux';
import './workSection.scss';

class WorkSection extends Component {

    renderWorkList() {
        const workList = this.props.workList;
        return workList.map((item, index) => {
            return (
            <div key={index} className="col-md-3 col-sm-4">
                <div className="img-wrapper">
                    <a href={require(`./img/${index}.jpg`)} title="Work desc">
                        <div className="img-block">
                            <img src={require(`./img/${index}.jpg`)} className="img-responsive" alt="Work" />
                        </div>
                    </a>
                    <div className="work-desc" data-index='1'>
                        <h4>{item.name}</h4>
                        <p>{item.content}</p>
                    </div>
                </div>
            </div>);
        });
    }

    render() {
        const title = this.props.title.value;
        return (
            <section id="work">
                <div className="content-box">
                    <div className="content-title wow fadeInDown" data-wow-duration="1s">
                        <h3>{title}</h3>
                        <div className="content-title-underline">
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row no-gutters wow fadeInUp" data-wow-duration="1s">
                            {this.renderWorkList()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(
    state => ({
        title: state.navBarReducer.navList[3],
        workList: state.workReducer.workList
    })
)(WorkSection);
