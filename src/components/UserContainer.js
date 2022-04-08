//The required packages is imported
import React from "react";
import { connect } from "react-redux";
import { updateUsers } from "../redux";

function UserContainer(props) {
  return (
    <div>
      <button onClick={props.updateUser}>Update User</button>
    </div>
  );
}

//This function maps the state to props
const mapStateToProps = (state) => {
  return {
    response: state.response,
  };
};

//PC_RT_05
//This function maps the dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: () => dispatch(updateUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
