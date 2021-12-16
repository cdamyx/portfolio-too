import React from 'react';
import { useState } from 'react';
import './contact.scss'

export default function Contact(){

	const [message, setMessage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(true);
		//use window to access function/script in public index! If you try to call emailjs.sendForm without window here, you get a 'not defined' error.
		window.emailjs.sendForm('service_sawa95u', 'template_g5hk1bm', '#contact-form')
	}
	return (
		<div className='contact' id='contact'>
			<div className='left'>
				<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NcpR-HOd12zhuf0zxLvQXQHaG8%26pid%3DApi&f=1' alt='' />
			</div>
			<div className='right'>
				<h2>Contact</h2>
				<form id='contact-form' onSubmit={handleSubmit}>
					<input name='user-email' type='text' placeholder='Email'/>
					<textarea name='message' placeholder='Message'></textarea>
					<button type='submit'>Send</button>
					{message && <span>Thanks, I will reply ASAP :)</span>}
				</form>
			</div>
		</div>
	)
}