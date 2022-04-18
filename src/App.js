import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  //Code Optimization - Performance
  onSearchChange = (event) =>
    this.setState({ searchField: event.target.value.toLowerCase() });

  render() {
    //Code Optimization - readable
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="tittle">Kitty Kitten Paradise</h1>
        <SearchBox
          onSearchChange={onSearchChange}
          className="search-box"
          placeholder="Search Cats"
        />
        <header className="header">
          <CardList monsters={filteredMonster} />
        </header>
      </div>
    );
  }
}

export default App;
