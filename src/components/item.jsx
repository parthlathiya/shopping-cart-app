import React, { Component } from "react";

class Item extends Component {
  componentWillUnmount() {
    console.log("Item - Unmounting");
  }

  render() {
    console.log("Item - Rendered");

    const { onIncrement, onDecrement, onDelete, item } = this.props;
    return (
      <div>
        <span className="badge badge-primary m-2">{item.name}</span>
        <span className="badge badge-warning m-2">{item.count}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onIncrement(item)}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onDecrement(item)}
        >
          Decrement
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
        <br />
      </div>
    );
  }
}

export default Item;
