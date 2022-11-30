import React, { Component } from "react";
import CardList from "../components/CardList";
import Loading from "../components/Loading";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "./ErrprBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robots, searchField } = this.state;

    const filteredRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robots) {
      return <h1>Loading...</h1>;
    }

    if (!robots) {
      return <Loading />;
    }

    return (
      <main className="text-center">
        <h1 className="my-4 mt-8 text-5xl font-bold font-goodTime text-violet-900">
          Robofriend
        </h1>
        <SearchBox
          searchField={searchField}
          searchChange={this.onSearchChange}
        />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobot} />
          </ErrorBoundary>
        </Scroll>
      </main>
    );
  }
}

export default App;
