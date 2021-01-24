import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/cartActions";
import "./pizza.css";
import AOS from "aos";
import "aos/dist/aos.css";
class Home extends Component {
  handleClick = (id) => {
    this.props.addItem(id);
  };
  componentDidMount(){
    AOS.init({ duration: 800, once: true });
  }
  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="home-card" key={item.id}>
          <img src={item.img} alt={item.title} />
          <p className="title">
            {item.title} <br /> <span className="desc">{item.desc}</span>{" "}
          </p>
          <hr className={item.type ? "green-line" : "red-line"} />
          <div className="price">
            <p className="foodprice">Rs {item.price}</p>
            <div
              className={item.type ? "veg-button" : "nonveg-button"}
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              Add to Cart
            </div>
          </div>
        </div>
      );
    });

    return <div className="home-container" data-aos="fade-right">{itemList}</div>;
  }
}








const mapStateToProps = (state) => {
  return {
    items: state.items.slice(12,18)
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id) => {
      dispatch(addItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
