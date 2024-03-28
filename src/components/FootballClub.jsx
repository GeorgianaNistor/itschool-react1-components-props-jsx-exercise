import React from 'react';

export function FootballClub(props) {
  // Extragem prop-urile de interes.
  const { name, country } = props;

  return (
    <div>
      <h1>{name}</h1>
      <p>{country}</p>
    </div>
  );
}
