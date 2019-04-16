import React from 'react';
import  PropTypes from 'prop-types';

function Seasonal(props) {
  return (
    <div>
      <style jsx>{`
      div{
        width:25%;
        border: solid 1px red;
        margin:0;
        box-sizing: border-box;
      }
      `}</style>
      <h3>{props.month}</h3>
      <h4>{props.produce.map((produce, index)=>
        <p key={index}>{produce}</p>
      )}</h4>
    </div>
  );
}

Seasonal.propTypes = {
  month: PropTypes.string.isRequired,
  produce: PropTypes.string.isRequired,
};

export default Seasonal;
