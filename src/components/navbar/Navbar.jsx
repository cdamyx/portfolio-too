import React from 'react';
import './navbar.scss'
import { Mail } from '@material-ui/icons';

export default function Navbar({menuOpen, setMenuOpen}){
	return (
		<div className={'navbar ' + (menuOpen && 'active')}>
			<div className='wrapper'>
				<div className='left'>
					<a href='#intro' className='logo'>&lt;Chris Amyx&gt;</a>
					
					<div className='itemContainer'>
						<Mail className='icon'/>
						<a href='#contact'>Contact Me</a>
					</div>
				</div>
				<div className='right'>
					<div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
						<span className='line1'></span>
						<span className='line2'></span>
						<span className='line3'></span>
					</div>
				</div>
			</div>
		</div>
	)
}