import React from 'react'


import instagram from '../../img/icons/instagram.svg'
import gitHub from '../../img/icons/gitHub.svg'
import twiter from '../../img/icons/twitter.svg'

import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={twiter} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer