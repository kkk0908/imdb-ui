import React from 'react'
import './header.css'
import logo from '../../Imdb-logo.png'
import { HiMenu } from "react-icons/hi"
import { BsFillBookmarkPlusFill } from "react-icons/bs"
import { ImSearch } from "react-icons/im"

function Header() {
	return (
		<div className="headerContainer">
			<img className="logo" src={logo} alt="Logo" height="2vh" />;
			<ul>
				<li key="home" style={{ fontWeight: "bold" }}><a href="#home"><HiMenu /> Home</a></li>
				<li className="inputBox">

					<input className="input" type="text" placeholder="Search.." name="search" />
					<button type="button"><ImSearch /></button>

				</li>
				<li key="IMDbPro" style={{ fontWeight: "bold" }}><a href="#news">IMDbPro</a></li>
				<li key="Watchlist"><a href="#contact">< BsFillBookmarkPlusFill />  Watchlist</a></li>
				<li key="SignIn" style={{ float: "right" }}><a href="#about">Sign In</a></li>
			</ul>
		</div>
	)
}

export default Header
