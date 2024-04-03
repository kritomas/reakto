import './App.css'
import {Card} from './Card.jsx'

export function App()
{
	let raw = [
		{title: "tit", content: "con"},
		{title: "tit", content: "con"},
		{title: "titoma", content: "contetoma"},
		{title: "tit", content: "con"},
		{title: "titos", content: "contetos"},
		{title: "titoma", content: "contetoma"},
		{title: "titos", content: "contetos"},
		{title: "titos", content: "contetos"},
		{title: "titoma", content: "contetoma"},
		{title: "titobicosidodecahedron", content: "contetobicosidodecahedron"}
	]
	let cards = [];
	for (let i = 0; i < raw.length; ++i)
	{
		cards.push(<Card Key={i} title={raw[i].title} content={raw[i].content}></Card>)
	}

	return (
		<div style={{display: "flex", flexWrap: "wrap", justifyContent: "left"}}>
			{cards}
		</div>
	)
}