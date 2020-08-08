import React from 'react';
import ProfilPhoto from "./profile/ProfilPhoto";
import FullName from "./profile/FullName";
import Adress from "./profile/Adress"
import './App.css';

function Main() {
  return (
    <div className="App">
     <ProfilPhoto/>
     <FullName/>
     <Adress/>
    </div>
  );
}

export default Main;
