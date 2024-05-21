import './header.css';
import Js4 from '../../assets/Js4.png'
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header'>
            <nav className='headerMenu'>
                <div className="">
                    <Link to='/'> <img className="headerImg" src={Js4} alt="" /></Link>
                </div>
                <div className=" ">
                    <ul className="headerList">
                        <li className='headerListItem'>
                            <Link className='link' to="/">HOME</Link>
                        </li>
                        <li className='headerListItem'>
                            <Link className='link' to="/historia">HISTÓRIA</Link>
                        </li>
                        <li className='headerListItem'>
                            <Link className='link' to="/perfil">PERFIL</Link>
                        </li>
                        <li className='headerListItem'>
                            <Link className='link' to="/servico">SERVIÇO</Link>
                        </li>
                        <li className='headerListItem'>
                            <Link className='link' to="/contato">CONTATO</Link>
                        </li>
                    </ul>
                </div>
                <div className='headerDireto'>
                    <i className="headerIcon">
                        <Link className='headerIconLink' to="/contato"><MdOutlineEmail /></Link>
                    </i>
                    <i className="headerIcon">
                        {/*<Link className='headerIconLink' to="https://www.instagram.com/jonathan_silva_92/?igsh=MTVsZWlqOHp2M2djMw%3D%3D"><FaInstagram /></Link>*/}
                        <a className='headerIconLink' href="https://www.instagram.com/jonathan_silva_92/?igsh=MTVsZWlqOHp2M2djMw%3D%3D" target='_blank'><FaInstagram /></a>
                    </i>
                </div>
            </nav>
        </div>
    )
}
