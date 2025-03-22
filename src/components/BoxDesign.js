import React from 'react';

const BoxDesign = () => {
  const containerStyle = {
    width: '190px',
    height: '172px',
    bottom:'40px',
    backgroundColor: '#d6d6d6',
    position: 'relative',
    border: '1px solid #6c757d'
  };

  const boxStyle = {
    width: '300px',
    height: '50px',
    position: 'absolute'
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div style={containerStyle}>
        {/* Center Box */}
        <div style={{ ...boxStyle, backgroundColor: '#dc3545', top: '50px', left: '50px',width: '90px',height: '65px',border: '10px solidrgb(0, 0, 0)' }}></div>

        {/* Red Boxes */}
        <div style={{ ...boxStyle, backgroundColor: '#dc3545', top: '20px', left: '20px',width: '60px', border: '10px solidrgb(0, 0, 0)' }}></div>
        <div style={{ ...boxStyle, backgroundColor: '#dc3545', top: '95px', left: '20px',width: '60px',border: '10px solidrgb(0, 0, 0)' }}></div>

        {/* Black Boxes */}
        <div style={{ ...boxStyle, backgroundColor: '#000', top: '23px', left: '129px',width: '40px',height: '40px' }}></div>
        <div style={{ ...boxStyle, backgroundColor: '#000', top: '95px', left: '120px',width: '40px',height: '40px'}}></div>
      </div>
    </div>
  );
};

export default BoxDesign;
