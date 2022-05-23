import React from 'react';
import {useState, useEffect} from 'react';
import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList.jsx'
import { featuredPortfolio, informationalPortfolio, gamesPortfolio, productivityPortfolio, otherPortfolio } from '../../data.js';
const privateText = "This is a private Github repo. Please contact me to request access."

export default function Portfolio(){
	const [selected, setSelected] = useState('featured');
	const [data, setData] = useState([]);
	
	const list = [
		{
			id: 'featured',
			title: 'Featured'
		},
		{
			id: 'informational',
			title: 'Informational'
		},
		{
			id: 'games',
			title: 'Games'
		},
		{
			id: 'productivity',
			title: 'Productivity'
		},
		{
			id: 'other',
			title: 'Other'
		}
	];

	useEffect(() => {
		switch(selected){
			case 'featured':
				setData(featuredPortfolio);
				break;
			case 'informational':
				setData(informationalPortfolio);
				break;
			case 'games':
				setData(gamesPortfolio);
				break;
			case 'productivity':
				setData(productivityPortfolio);
				break;
			case 'other':
				setData(otherPortfolio);
				break;
			default:
				setData(featuredPortfolio);
		}
	},[selected])

	const handleClick = (id) => {
		const elem = document.getElementById(id);

		elem.classList.add("active");
	}

	return (
		<div className='portfolio' id='portfolio'>
			{document.addEventListener('mouseup', () => {
				const activeItem = document.getElementsByClassName('item active');

				if(activeItem[0]) {
					activeItem[0].classList.remove("active");
				}
			})}

			<h1>Projects</h1>
			<ul>
				{list.map((item) =>(
					<PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
				))}
			</ul>
			<div className='container'>
				{data.map( d => (
					<div id={d.key} className='item' onClick={() => handleClick(d.key)}>
					
						<img src={d.img} alt=''/>
						<h3>{d.title}</h3>
						
						<a href={d.siteLink} target="_blank" rel="noreferrer" className="siteLink">Site</a>
						
						{d.title === "Web Scraper" ?
							<button className="codeLink" onClick={() => alert(privateText)}>Code</button> :
							<a href={d.codeLink} target="_blank" rel="noreferrer" className="codeLink">Code</a>
						}
					</div>
				))}
			</div>
		</div>
	)
}