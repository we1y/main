import React, { useRef }from "react";
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../styles/header.css";
import logo from '../assets/headlogo.png'

const Header = () => {


  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  
 return (
  <header>

	<Link to='/main'><img src={logo} className="navlogo"/></Link>
			<nav ref={navRef}>
				<NavLink to="/main">Главная</NavLink>
				<NavLink to="/atlas">Атлас профессий</NavLink>
				<NavLink to="/proforient">Профориентация</NavLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<IoClose />
				</button>
			</nav>
			<button
			style={{marginLeft: 100, marginRight: 50}}
				className="nav-btn"
				onClick={showNavbar}>
				<IoMenu />
			</button>
		</header>
 );
};

export default Header;