import React from 'react';
import './skills.scss'
import {useState} from 'react';
import htmlImage from '../../assets/html.png';
import cssImage from '../../assets/css.png';
import sassImage from '../../assets/sass.png';
import javascriptImage from '../../assets/javascript.png';
import reactImage from '../../assets/react.png';
import bootstrapImage from '../../assets/bootstrap.png';
import nodeImage from '../../assets/node.png';
import expressImage from '../../assets/express.png';
import sqlImage from '../../assets/sql.png';
import mongoImage from '../../assets/mongo.png';
import herokuImage from '../../assets/heroku.png';
import awsImage from '../../assets/aws.png';
import gitImage from '../../assets/git.png';
import linuxImage from '../../assets/linux.png';
import windowsImage from '../../assets/windows.png';

export default function Skills(){

	const [currentSlide, setCurrentSlide] = useState(0);
	const data = [
		{
			id: '1',
			icon: 'fab fa-chrome fa-1x',
			title: 'Front End',
			desc: 'HTML5 | CSS3 | SASS | Javascript | React | Bootstrap',
			img: [htmlImage, cssImage, sassImage, javascriptImage, reactImage, bootstrapImage]
		},
		{
			id: '2',
			icon: 'fas fa-server fa-1x',
			title: 'Back End',
			desc: 'NodeJS | ExpressJS | SQL | mongoDB | APIs',
			img: [nodeImage, expressImage, sqlImage, mongoImage]
		},
		{
			id: '3',
			icon: 'fas fa-arrow-alt-circle-up fa-1x',
			title: 'Deployment/Other',
			desc: 'Heroku | AWS | Git | Linux | Windows | Agile | System Design',
			img: [herokuImage, awsImage, gitImage, linuxImage, windowsImage]
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