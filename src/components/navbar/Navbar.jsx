import React from 'react';
import './navbar.scss'
import Mail from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Navbar({menuOpen, setMenuOpen}){
	return (
		<div className={'navbar ' + (menuOpen && 'active')}>
			<div className='wrapper'>
				<div className='left'>
					<a href='#intro' className='logo'>&lt;Chris Amyx&gt;</a>
					
					<div className='itemContainer'>
						
						<a href='#contact'><Mail className='icon'/>Email</a>
						<a href='https://github.com/cdamyx' target='_blank' rel='noreferrer'><GitHubIcon className='icon'/>Github</a>
						<a href='https://www.linkedin.com/in/chrisamyx' target='_blank' rel='noreferrer'><LinkedInIcon className='icon'/>LinkedIn</a>

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