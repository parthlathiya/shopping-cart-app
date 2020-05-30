import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Items from "./components/items";

class App extends Component {
  state = {
    items: [
      { id: 1, count: 0, name: "item1" },
      { id: 2, count: 0, name: "item2" },
      { id: 3, count: 0, name: "item3" },
      { id: 4, count: 0, name: "item4" },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }
  componentDidMount() {
    console.log("App - Mounted");
  }
  componentDidUpdate() {
    console.log("App - Updated");
  }
  handleDelete = (itemId) => {
    const items = this.state.items.filter((item) => item.id !== itemId);
    this.setState({ items });
  };

  handleReset = () => {
    const items = this.state.items.map((item) => {
      item.count = 0;
      return item;
    });
    this.setState({ items });
  };

  handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].count++;
    this.setState({ items });
  };

  handleDecrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    const cnt = Math.max(0, items[index].count - 1);
    items[index].count = cnt;
    this.setState({ items });
  };

  totalItems = () => {
    return this.state.items.filter((item) => item.count > 0).length;
  };
  totalQuantity = () => {
    return this.state.items
      .map((item) => {
        return item.count;
      })
      .reduce((a, b) => a + b, 0);
  };
  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalItems={this.totalItems()}
          totalQuantity={this.totalQuantity()}
        />
        <main className="container">
          <Items
            items={this.state.items}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
