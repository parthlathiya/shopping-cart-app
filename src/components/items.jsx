import React, { Component } from "react";
import Item from "./item";

class Items extends Component {
  render() {
    console.log("Items - Rendered");

    const { onReset, items, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset-Count
        </button>

        {items.map((item) => (
          <Item
            key={item.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default Items;
