import React, { useState } from "react";
import { connect } from "react-redux";

const CouterContainer = (props) => {
  return(
    <div>
      <p>{props.count}</p>
      <button onClick={() => props.dispatch({ type: 'ADD1'})}>+1</button>
      <button onClick={() => props.dispatch({ type: 'REMOVE1'})}>-1</button>
      <button onClick={() => props.dispatch({ type: 'ADD10'})}>+10</button>
      <button onClick={() => props.dispatch({ type: 'REMOVE10'})}>_10</button>
      <button onClick={() => props.dispatch({ type: 'RESET'})}>reset</button>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state
});

export default connect(mapStateToProps)(CouterContainer);
