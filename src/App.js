import React, { Component } from 'react';
// import './App.css';

// import components
import Header from './components/header';
import SearchBar from './components/search_bar';
import NoteList from './components/note_list';

const lista = [
  { id: 1, name: 'Stark', date: '17-08-2017' },
  { id: 2, name: 'Lannister', date: '17-08-2017' },
  { id: 3, name: 'Targaryen', date: '16-08-2017' },
  { id: 4, name: 'KarStark', date: '17-08-2017' },
  { id: 5, name: 'Bolton', date: '15-08-2017' },
  { id: 6, name: 'Martell', date: '15-08-2017' },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.setState({ notes: lista });
    this.noteSearch();
  }

  noteSearch(term) {
    let filteredNotes = [];
    if (term) {
      const reg = new RegExp(
        term.split('').reduce(
          (reg, char) => {
            return `${reg}.*${char}`;
          }
        ),
      "g");
      filteredNotes = lista.filter((note) => {
        return note.name.toLocaleLowerCase().match(reg);
      });
    }    
    this.setState({ notes: term ? filteredNotes : lista });   
  }

  render() {
    return (
      <div className="App">
        <Header headerTitle={'Notes'} />
        <SearchBar onSearchTermChange={term => this.noteSearch(term)} />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
