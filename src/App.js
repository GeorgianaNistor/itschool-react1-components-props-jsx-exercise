import React from 'react';
import './style.css';
import { Navigation } from './components/Navigation';
import UserItem from './components/UserItem';
import UserItemClass from './components/UserItemClass';
// Importam componenta FootballClub.
import { FootballClub } from './components/FootballClub';

export default function App() {
  return (
    <div className="App">
      <Navigation
        imgSrc="https://www.itschool.ro/_next/static/media/OG-1200x615.40de1169.png"
        width="100"
      />
      <Navigation
        imgSrc="https://www.starbt.ro/img/parteneri/1687868692LOGO_IT_SCHOOL_2022_-_colored-01.png"
        width="150"
      />
      {/* Instantiem componenta FootballClub, pasand prop-urile corespunzatoare. */}
      <FootballClub name="PSG" country="Franța" />
      {/* Adaugam valori pentru shirtNumber si salary pentru fiecare userItem. */}
      <UserItem
        name="Octavian Darius"
        email="ocatvian.darius@gmail.com"
        shirtNumber="30"
        salary="30.000.000"
      />
      <UserItem
        name="Eduard Lavinia"
        email="eduard.lavinia@gmail.com"
        shirtNumber="7"
        salary="25.000.000"
      />
      <UserItem
        name="Sanda Cosmin."
        email="sanda.cosmin@gmail.com"
        shirtNumber="10"
        salary="28.000.000"
      />
      <UserItemClass name="Fabian Albert" email="fabian.albert@gmail.com" />
    </div>
  );
}
