import React from 'react';
import './menu.scss';

export default function Menu({menuOpen, setMenuOpen}){
	return (
		<div className={'menu ' + (menuOpen && 'active')}>
			<ul onClick={() => setMenuOpen(false)}>
				<li>
					<a href='#intro'>Home</a>
				</li>
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li>
					<a href='#skills'>Skills</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
				<li className='gitLnLandscapeXs'>
					<a href='https://github.com/cdamyx'>Github</a>
				</li>
				<li className='gitLnLandscapeXs'>
					<a href='https://www.linkedin.com/in/chrisamyx'>LinkedIn</a>
				</li>
			</ul>
		</div>
	)
}