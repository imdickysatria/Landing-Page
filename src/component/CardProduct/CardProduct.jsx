import React, { Component } from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";

class Product extends Component {
  render() {
    return (
      <div className="flex content-center mt-1 justify-center">
        <div className="card ml-2 mr-2">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="/Home">
              <img
                className="rounded-t-lg"
                src="https://assets.klikindomaret.com/products/10000426/10000426_1.jpg"
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link to="/Home">
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </Link>
              <p className="mb-3 text-1xl font-bold text-blue-500 dark:text-gray-400">
                Rp. 5000
              </p>
              <Counter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
