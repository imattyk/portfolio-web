import React, { Component } from "react";
import { Button, Tag, UnorderedList, ListItem } from "carbon-components-react";

class TestPage extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: "20px",
    fontWeight: "bold",
    marginRight: "1rem",
  };

  handleIncrement = () => {
    console.log("Increment Clicked", this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <Tag style={this.styles} type={this.getTagColors()} size="sm">
          {this.formatCount()}
        </Tag>
        <Button onClick={this.handleIncrement} size="sm">
          Increment
        </Button>
        {this.renderTags()}
      </>
    );
  }

  renderTags() {
    if (this.state.tags.length !== 0) {
      return (
        <UnorderedList>
          {this.state.tags.map((tag) => (
            <ListItem key={tag}>{tag}</ListItem>
          ))}
        </UnorderedList>
      );
    }
  }

  getTagColors() {
    let colors = "";
    colors += this.state.count === 0 ? "red" : "blue";
    return colors;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default TestPage;
