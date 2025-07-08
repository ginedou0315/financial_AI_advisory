import React from 'react';

function Header() {
  return (
    <header className="gradient-header text-white" data-name="header" data-file="src/components/Header.js">
      <div className="container py-5">
        <div className="text-center">
          <div className="d-flex justify-content-center align-items-center mb-4">
            <i className="bi bi-graph-up-arrow fs-1 me-3"></i>
            <h1 className="display-4 fw-bold mb-0">Financial Recovery Hub</h1>
          </div>
          <p className="fs-5 text-light">Your journey to financial stability starts here</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
