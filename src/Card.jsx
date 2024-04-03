import './App.css'

export function Card({title, content})
{
	return (
		<div style={{padding: "20px", margin: "10px", backgroundColor: "darkblue"}}>
			<h1>{title}</h1>
			<div>{content}</div>
		</div>
	)
}