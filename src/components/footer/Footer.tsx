import './footer.css';

import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
    <div className='footerTitulo'>
        Desenvolvido © 2024 - Todos os direitos Reservados
    </div>
    <div className='footerCenter'>
        <i className="footerIcon">
            <Link className='footerIconLink' to="/contato"><MdOutlineEmail /></Link>
        </i>
        <i className="footerIcon">
            <a className='footerIconLink' href="https://www.instagram.com/jonathan_silva_92/?igsh=MTVsZWlqOHp2M2djMw%3D%3D" target='_blank'><FaInstagram /></a>
        </i>
    </div>
</div>
  )
}
