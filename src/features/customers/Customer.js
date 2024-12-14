import { connect } from "react-redux";

function Customer({ customerName }) {
  return <h2>👋 Welcome, {customerName}</h2>;
}

function mapStateToProps(state) {
  return {
    customerName: state.customer.fullName,
  };
}

export default connect(mapStateToProps)(Customer);
