import React from 'react';

const NoteItem = (props) => {
  const {
    name,
    date,
  } = props.note;
  return(
    <li className="notes__list-item">
      <h3 className="notes__list-item__title">{name}</h3>
      <p className="notes__list-item__date">{date}</p>
    </li>
  );
};

export default NoteItem;
