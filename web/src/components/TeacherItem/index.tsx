import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/1903990?s=460&u=6b2cb281534fb5c81660151be7ab4255a41365c2&v=4" alt="Alanna Vanzella"/>
                <div>
                    <strong>Alanna Vanzella</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                <br /><br />
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 30,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;