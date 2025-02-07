import React from 'react'
import './Contato.css'
import linkedinIcon from '../../assets/img/linkedin.png'
import telefoneIcon from '../../assets/img/telefone.png'

function Contato() {
  return (
    <div id='contato' className='contato-Container'>
      <h5>Vitor Barahona</h5>
        <p>Para mais informações</p>

        <div className="social">
            <a href="https://www.linkedin.com/in/vitorbarahona/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin" />
            </a>
            <a href="https://web.whatsapp.com/send?phone=5521998666767" target="_blank">
                <img src={telefoneIcon} alt="Telefone" />
            </a>
        </div>
    </div>
  )
}

export default Contato
