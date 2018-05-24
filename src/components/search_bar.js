import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    const { term } = this.state;
    return (
      <div className="search">
        <div className="container">
          <input
            className="search__searchbar"
            type="text"
            name="search"
            value={term}
            placeholder="Pesquise por uma nota"
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
      </div>
    );
  }
};

export default SearchBar;
