import React, { Component } from "react";

const NavBar = ({ totalItems, totalQuantity }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span className="text-success m-2 h1">Shopping Cart</span>
        <span className="text-info h5 ml-5">Different Items: {totalItems}</span>
        <span className="text-info h5 ml-5">
          Total Quantity: {totalQuantity}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
