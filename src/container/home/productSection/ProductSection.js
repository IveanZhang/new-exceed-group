import React, { Component } from 'react';
import { connect } from 'react-redux';
import './productSection.scss';

class ProductSection extends Component {

    renderProducts() {
        const productList = this.props.productList;
        return productList.map((item, index) => {
            return (
                <div key={index} className="col-md-6 wow zoomIn" data-wow-duration="1s">
                    <div className="product-box text-center">
                        <h2 className="product-title">{item.name}</h2>
                        <div className="product-icon">
                            <i className={`fas fa-${item.icon} fa-3x`}></i>
                        </div>
                        <ul className="product-spec">
                            {
                                item.content.map((info, _index)=>{
                                    return (<li key={_index}><p>{info}</p></li>)
                                })
                            }
                        </ul>
                        <div className="product-gtn">
                            <a className="btn btn-lg btn-general btn-blue" rel="noopener noreferrer" href={item.url} role="button" target="_blank" >了解更多</a>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        const title = this.props.title.value;
        return (
            <section id="product">
                <div className="content-box">
                    <div className="content-title wow fadeInDown" data-wow-duration="1s">
                        <h3>{title}</h3>
                        <div className="content-title-underline"></div>
                    </div>

                    <div className="container">
                        <div className="row">
                            {this.renderProducts()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(
    state => ({
        title: state.navBarReducer.navList[4],
        productList: state.productReducer.productList
    })
)(ProductSection);
