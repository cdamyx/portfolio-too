//Basically have to import local images here, since we're exporting them in the objects below, because of webpack
import PortfolioPic from './assets/portfolio.gif'
import GamePic from './assets/typing.gif'
import ScraperPic from './assets/webScraper.png'

export const informationalPortfolio = [
	{
		id: 1,
		title: "Portfolio",
		//this is where you have to use the import. If you try to use the path it won't work. Only for internal assets, external work fine with full URL.
		img: PortfolioPic,
		siteLink: "http://localhost:3000",
		codeLink: "https://github.com"
	}
];

export const gamesPortfolio = [
	{
		id: 1,
		title: "Tic-tac-toe",
		img: GamePic,
		siteLink: "https://www.duckduckgo.com",
		codeLink: "https://github.com"
	}
];

export const productivityPortfolio = [
	{
		id: 1,
		title: "To Do List",
		img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8QU-dGv_oS6qa-9eE8Y3YwHaNJ%26pid%3DApi&f=1",
		siteLink: "https://www.duckduckgo.com",
		codeLink: "https://github.com"
	}
];

export const otherPortfolio = [
	{
		id: 1,
		title: "Web Scraper",
		img: ScraperPic,
		siteLink: "https://quiet-reaches-09144.herokuapp.com/",
		codeLink: "https://github.com"
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
	// {
	// 	id: 5,
	// 	title: "Social App 5",
	// 	img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIF.yNsL4cwXrSLkg1KkDc8AmQ%26pid%3DApi&f=1"
	// },
	// {
	// 	id: 6,
	// 	title: "Social App 6",
	// 	img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HiOJjPiaC8_hC0YU9PWPBQHaHa%26pid%3DApi&f=1"
	// }
];