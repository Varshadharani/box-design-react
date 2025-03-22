import React from 'react';

const BoxDesign = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="d-flex flex-wrap border border-secondary" style={{ width: '150px', height: '150px' }}>
        <div className="bg-danger" style={{ width: '50px', height: '50px' }}></div>
        <div className="bg-light" style={{ width: '50px', height: '50px' }}></div>
        <div className="bg-dark" style={{ width: '50px', height: '50px' }}></div>
        <div className="bg-danger" style={{ width: '50px', height: '50px' }}></div>
        <div className="bg-danger" style={{ width: '50px', height: '50px' }}></div>
        <div className="bg-dark" style={{ width: '50px', height: '50px' }}></div>
      </div>
    </div>
  );
};

export default BoxDesign;
