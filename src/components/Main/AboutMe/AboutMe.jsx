import React from 'react';
import './AboutMe.css';
import photo from '../../../images/profile.png';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <h2 className="about-me__header">Студент</h2>
      
      <article className="about-me__container">
        
        <article className="about-me__info">
          <h3 className="about-me__title">Виталий</h3>
          <p className="about-me__subtitle">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С&nbsp;2015 года работал в компании «СКБ
            Контур». После того, как&nbsp;прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами&nbsp;и ушёл с постоянной работы.
          </p>
          <a className="about-me__link" href="https://github.com/Asperiuso" >Github</a>
        </article>
        <img src={photo} alt="Фото студента" className="about-me__image" />
      </article>
<Portfolio />
    </section>
  );
}

export default AboutMe;