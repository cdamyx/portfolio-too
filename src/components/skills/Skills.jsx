import React from 'react';
import './skills.scss'
import {useState} from 'react';
import htmlImage from '../../assets/html.png';
import cssImage from '../../assets/css.png';
import sassImage from '../../assets/sass.png';
import javascriptImage from '../../assets/javascript.png';
import reactImage from '../../assets/react.png';
import bootstrapImage from '../../assets/bootstrap2.png';
import npmImage from '../../assets/npm-logo.png';
import ejsImage from '../../assets/ejs.png';
import nodeImage from '../../assets/node.png';
import expressImage from '../../assets/express.png';
import sqlImage from '../../assets/sql.png';
import mongoImage from '../../assets/mongo.png';
import apiImage from '../../assets/api.png';
import herokuImage from '../../assets/heroku.png';
import awsImage from '../../assets/aws.png';
import dockerImage from '../../assets/docker.png'
import gitImage from '../../assets/git.png';
import githubImage from '../../assets/github.png'
import linuxImage from '../../assets/linux.png';
import windowsImage from '../../assets/windows.png';
import puppeteerImage from '../../assets/puppeteer.png';
import agileImage from '../../assets/agile.png';
import postmanImage from '../../assets/postman.png';
import restImage from '../../assets/rest.png';

export default function Skills(){

	const [currentSlide, setCurrentSlide] = useState(0);
	const data = [
		{
			id: '1',
			icon: 'fab fa-chrome fa-1x',
			title: 'Frontend',
			desc: 'HTML | CSS | SASS | Javascript | React | Bootstrap | NPM | EJS',
			img: [htmlImage, cssImage, sassImage, javascriptImage, reactImage, bootstrapImage, npmImage, ejsImage]
		},
		{
			id: '2',
			icon: 'fas fa-server fa-1x',
			title: 'Backend/etc.',
			desc: 'Node | Express | SQL | mongoDB | API | AWS | Heroku | Docker',
			img: [nodeImage, expressImage, sqlImage, mongoImage, apiImage, awsImage, herokuImage, dockerImage]
		},
		{
			id: '3',
			icon: 'fas fa-arrow-alt-circle-up fa-1x',
			title: 'Other',
			desc: 'Git | Github | Linux | Windows | Puppeteer | Postman | Agile | REST/SOAP',
			img: [gitImage, githubImage, linuxImage, windowsImage, puppeteerImage, postmanImage, agileImage, restImage]
		},
	]
	const handleClick = (way) => {
		way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
		: setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
	};
	return (
		<div className='skills' id='skills'>
			<h1>Skills</h1>
			<div className='slider' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
				{data.map((d) => (
					<div className='container'>
						<div className='item'>
							<div className='left'>
								<div className='leftContainer'>
									<div className='imgContainer'>
										<i className={d.icon}></i>
									</div>
									<h2>{d.title}</h2>
									<p>{d.desc}</p>
								</div>
							</div>
							<div className='right'>
								<div className='top'>
									<img src={d.img[0]} alt=''/>
									<img src={d.img[1]} alt=''/>
									<img src={d.img[2]} alt=''/>
									<img src={d.img[3]} alt=''/>
								</div>
								<div className='bottom'>
									<img src={d.img[4]} alt=''/>
									<img src={d.img[5]} alt=''/>
									<img src={d.img[6]} alt=''/>
									<img src={d.img[7]} alt=''/>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<i class="fas fa-chevron-left arrow left fa-3x" onClick={() => handleClick('left')}></i>
			<i class="fas fa-chevron-right arrow right fa-3x" onClick={() => handleClick('right')}></i>
		</div>
	)
}