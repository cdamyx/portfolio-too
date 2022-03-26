//Basically have to import local images here, since we're exporting them in the objects below, because of webpack
import PortfolioPic from './assets/portfolio.gif'
import GamePic from './assets/tiktoktoe.gif'
import ScraperPic from './assets/contracts.gif'
import ToDoPic	from './assets/todo.gif'

export const informationalPortfolio = [
	{
		id: 1,
		title: "Portfolio",
		//this is where you have to use the import. If you try to use the path it won't work. Only for internal assets, external work fine with full URL.
		img: PortfolioPic,
		siteLink: "http://ec2-23-21-19-108.compute-1.amazonaws.com/",
		codeLink: "https://github.com/cdamyx/portfolio-too"
	}
];

export const gamesPortfolio = [
	{
		id: 1,
		title: "TikTokToe",
		img: GamePic,
		siteLink: "https://blissful-edison-8a7461.netlify.app",
		codeLink: "https://github.com/cdamyx/tic-tac-toe"
	}
];

export const productivityPortfolio = [
	{
		id: 1,
		title: "To Do List",
		img: ToDoPic,
		siteLink: "",
		codeLink: "https://github.com/cdamyx/to-do-list"
	}
];

export const otherPortfolio = [
	{
		id: 1,
		title: "Web Scraper",
		img: ScraperPic,
		siteLink: "https://quiet-reaches-09144.herokuapp.com/",
		codeLink: "https://github.com/cdamyx/revised-govt-site"
	}
];

export const featuredPortfolio = [
	{
		id: 1,
		title: informationalPortfolio[0].title,
		img: informationalPortfolio[0].img,
		siteLink: informationalPortfolio[0].siteLink,
		codeLink: informationalPortfolio[0].codeLink
	},
	{
		id: 2,
		title: otherPortfolio[0].title,
		img: otherPortfolio[0].img,
		siteLink: otherPortfolio[0].siteLink,
		codeLink: otherPortfolio[0].codeLink
	},
	{
		id: 3,
		title: productivityPortfolio[0].title,
		img: productivityPortfolio[0].img,
		siteLink: productivityPortfolio[0].siteLink,
		codeLink: productivityPortfolio[0].codeLink
	},
	{
		id: 4,
		title: gamesPortfolio[0].title,
		img: gamesPortfolio[0].img,
		siteLink: gamesPortfolio[0].siteLink,
		codeLink: gamesPortfolio[0].codeLink
	},
];