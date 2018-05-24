import React from 'react';
import NoteItem from './note_item';

const NoteList = (props) => {
  const notes = props.notes.map((note) => {
    return <NoteItem key={note.id} note={note} />
  });

  return(
    <div className="notes">
      <div className="container">
        <h2 className="notes__title">Notas</h2>
        <ul className="notes__list">
          {notes}
        </ul>
      </div>
    </div>
  );
};

export default NoteList;