import React from 'react'
import { FaCalendar } from "react-icons/fa"
import { AiFillLike, AiFillStar } from "react-icons/ai"
import noimage from "../../noimage.png"
import "./card.css"

function Card(props) {

	const { backdrop_path, title, vote_count, release_date, vote_average } = props.movieInfo
	let image = ``
	if (backdrop_path) {
		image = `https://image.tmdb.org/t/p/w185/${backdrop_path}`
	}
	else {
		image = noimage
	}
	return (
		<div className="card">
			<img src={image} alt="Avatar" style={{
				backgroundImage: `url(${image})`,
				backgroundSize: "cover"
			}} />
			<div className="container">
				<h4 className="movietitle"><b>{title.slice(0, 28)}<span className="hideTitle">{title.slice(28,)}</span></b></h4>
				<div className="movieInfo">
					<p><FaCalendar /> {release_date}</p>
					<p> <AiFillLike size={20} /> {vote_count}</p>
					<p> <AiFillStar size={20} /> {vote_average}/10</p>
				</div>

			</div>
		</div>
	)
}

export default Card
