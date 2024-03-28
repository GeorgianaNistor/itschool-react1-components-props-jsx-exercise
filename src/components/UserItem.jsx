import React from 'react';

function UserItem(props) {
  // Adaugam noile prop-uri.
  const { name, email, shirtNumber, salary } = props;

  // Afisam pe ecran noile prop-uri.
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>No. {shirtNumber}</p>
      <p>Salariu: {salary}</p>
    </div>
  );
}

export default UserItem;
