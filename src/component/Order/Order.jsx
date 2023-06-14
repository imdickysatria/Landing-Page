import { Component } from "react";
import { connect } from "react-redux";

class Order extends Component {
  render() {
    return (
      <div>
        <h1>Total order : {this.props.order}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

export default connect(mapStateToProps)(Order);
