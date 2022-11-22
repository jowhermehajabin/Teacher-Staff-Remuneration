import React from 'react';
import { Items } from './NavbarInsideItems';
import './NavbarInside.css';
import { Link } from 'react-router-dom';

function NavbarInside() {
	// 	const logOut = () => {
	// 		localStorage.removeItem('accesstoken');
	// 		localStorage.removeItem('username');
	// 		navigate('/');
	// 		console.log('Logged Out');
	// 	};
	return (
		<nav className="navbar navbar-expand-lg  NavbarItems">
			<h1 className="navbar-brand text-light navbar-logo">
				<Link
					to="/"
					className="nav-links home">
					Teacher Remuneration
					<span className="material-symbols-outlined">payments</span>
				</Link>
			</h1>
			<ul className="nav-menu">
				{Items.map((item, index) => {
					return (
						<li key={index}>
							<Link
								to={item.url}
								className={item.cName}>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default NavbarInside;
