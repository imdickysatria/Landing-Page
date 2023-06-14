import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "../../../component/CardProduct/CardProduct";
import { connect } from "react-redux";

class Product extends Component {
  //   state = {
  //     order: 4,
  //   };

  //   handleShopCountChange = (newValue) => {
  //     this.setState({
  //       order: newValue,
  //     });
  //   };

  render() {
    return (
      <Fragment>
        <div className="header flex bg-yellow-300 justify-end">
          <button
            type="button"
            className="mr-10 mt-2 mb-2 relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-6 h-6 text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
            </svg>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {this.props.order}
            </div>
          </button>
        </div>
        <hr />

        <CardProduct />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

export default connect(mapStateToProps)(Product);
