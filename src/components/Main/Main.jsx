import React from 'react';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Promo />
      <NavTab />
      <section className='main__section'><AboutProject />
      <Techs />
      <AboutMe />
      </section>
    </main>
  );
}

export default Main;