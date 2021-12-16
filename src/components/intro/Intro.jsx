import React from 'react';
import './intro.scss'
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro(){
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			backDelay: 1500,
			backSpeed: 60,
			showCursor: true,
			strings: ['Full Stack Developer', 'Software Engineer', 'Computer Programmer', 'Code Warrior', 'Tech Junkie']
		});

	}, []);

	return (
		<div className='intro' id='intro'>
			<div className='left'>
				{/*<div className='imgContainer'>
					<img src='assets/colors.png' alt=''></img>
				</div>*/}
			</div>
			<div className='right'>
				<div className='wrapper'>
					<h1>Chris Amyx</h1>
					<h3><span ref={textRef}></span></h3>
					<h2>Welcome to my Portfolio!</h2>
				</div>
				<a href='#portfolio'>
					<i class="fas fa-chevron-down fa-2x"></i>
				</a>
			</div>
		</div>
	)
}