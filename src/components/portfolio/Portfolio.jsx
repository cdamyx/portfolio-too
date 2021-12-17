import React from 'react';
import {useState, useEffect} from 'react';
import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList.jsx'
import { featuredPortfolio, informationalPortfolio, gamesPortfolio, productivityPortfolio, otherPortfolio } from '../../data.js';

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

	return (
		<div className='portfolio' id='portfolio'>
			<h1>Projects</h1>
			<ul>
				{list.map((item) =>(
					<PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
				))}
			</ul>
			<div className='container'>
				{data.map( d => (
					<div className='item'>
						<img src={d.img} alt=''/>
						<h3>{d.title}</h3>
						<a href={d.siteLink} target="_blank" rel="noreferrer" className="siteLink">Site</a>
						<a href={d.codeLink} target="_blank" rel="noreferrer" className="codeLink">Code</a>
					</div>
				))}
			</div>
		</div>
	)
}