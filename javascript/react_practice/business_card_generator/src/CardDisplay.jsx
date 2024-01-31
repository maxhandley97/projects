export default function CardDisplay(props){
	return(
		<div>
			<h1>Name:{props.card.name}</h1>
			<h1>Email:{props.card.email}</h1>
			<h1>LinkedIn:{props.card.linkedIn}</h1>
			<h1>GitHub:{props.card.github}</h1>

		</div>
	)
}