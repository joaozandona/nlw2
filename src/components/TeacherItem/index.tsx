import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/59064300?s=460&u=d476bcd767b9063b9961ebcd57aaa0ff9f0fd78a&v=4" alt="João Ricardo"/>
                <div>
                    <strong>João Ricardo</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.

                Apaixonado por explodir coisas em loboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minnhas explosões.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;