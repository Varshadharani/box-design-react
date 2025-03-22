import React from 'react';
import '../components/';;

const BoxDesign = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="box-container">
        <div className="box red-box"></div>
        <div className="box black-box"></div>
        <div className="box red-box"></div>
        <div className="box red-box"></div>
        <div className="box black-box"></div>
      </div>
    </div>
  );
};

export default BoxDesign;
