import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/30079181?s=460&u=cd6dbdfcb3e7cb7049a538d300924be637991d37&v=4" alt="Leonardo Souza"/>
            <div>
                <strong>Leonardo Souza</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br/><br/>
            Optio, eaque doloremque soluta eveniet quisquam aperiam unde ad excepturi ratione officiis reprehenderit repellat, ipsa quae quibusdam architecto facilis repudiandae nam in.
        </p>

        <footer>
            <p>
                Preço/Hora 
                <strong>R$50,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Entrar em contato com whatsapp"/>
                Entrar em contato
            </button>
        </footer>

    </article>
    )
}

export default TeacherItem;