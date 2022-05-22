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
				<h2>Connect with me</h2>
				<div className='social'>
					<a href='https://github.com/cdamyx' target='_blank' rel='noreferrer'><i class="fab fa-github-square"></i></a>
					<a href='https://linkedin.com/in/chrisamyx' target='_blank' rel='noreferrer'><i class="fab fa-linkedin"></i></a>
				</div>
			</div>
			<div className='right'>
				<h2>Contact</h2>
				<form id='contact-form' onSubmit={handleSubmit}>
					<div className='contact-inputs'>
						<input name='user-email' type='text' placeholder='Email'/>
						<textarea name='message' placeholder='Message'></textarea>
					</div>
					<button type='submit'>Send</button>
					{message && <span>Thanks, I will reply ASAP :)</span>}
				</form>
			</div>
		</div>
	)
}