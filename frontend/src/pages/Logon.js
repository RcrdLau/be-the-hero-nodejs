import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import heroesImg from '../assets/heroes.png'
import logoImg from '../assets/logo.svg'

const Logon = () => {

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero" />
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"></input>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"  />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}
export default Logon