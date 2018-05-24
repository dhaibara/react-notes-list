import React from 'react';

const Header = (props) => {
  const { headerTitle } = props;
  return(
    <header className="header">
      <h1 className="header__title">{headerTitle}</h1>
    </header>
  );
};

export default Header;
