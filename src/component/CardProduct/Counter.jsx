import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/reducer/globalActionTyoe";

class Counter extends Component {
  //   handleShopCountChange = (newValue) => {
  //     this.props.onShopCountChange(newValue);
  //   };

  //   handlePlus = () => {
  //     this.setState(
  //       {
  //         order: this.state.order + 1,
  //       },
  //       () => {
  //         this.handleShopCountChange(this.state.order);
  //       }
  //     );
  //   };

  //   handleMinus = () => {
  //     if (this.state.order > 0) {
  //       this.setState(
  //         {
  //           order: this.state.order - 1,
  //         },
  //         () => {
  //           this.handleShopCountChange(this.state.order);
  //         }
  //       );
  //     }
  //   };
  render() {
    console.log(this.props);
    return (
      <div className="flex items-center plusMinus">
        <button
          className="minus inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={this.props.handleMinus}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </button>

        <input
          type="text"
          className="inputAngka bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={this.props.order}
          readOnly
        ></input>

        <button
          className="plus inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={this.props.handlePlus}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: ActionType.HANDLE_PLUS }),
    handleMinus: () => dispatch({ type: ActionType.HANDLE_MINUS }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
