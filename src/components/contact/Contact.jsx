import React from 'react';
import { useState } from 'react';
import './contact.scss'

export default function Contact(){

	const [message, setMessage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(true);
	}
	return (
		<div className='contact' id='contact'>
			<div className='left'>
				<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NcpR-HOd12zhuf0zxLvQXQHaG8%26pid%3DApi&f=1' alt='' />
			</div>
			<div className='right'>
				<h2>Contact</h2>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder='Email'/>
					<textarea placeholder='Message'></textarea>
					<button type='submit'>Send</button>
					{message && <span>Thanks, I will reply ASAP :)</span>}
				</form>
			</div>
		</div>
	)
}