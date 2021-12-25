import React from 'react'
import { FaCalendar } from "react-icons/fa"
import { AiFillLike, AiFillStar } from "react-icons/ai"
import "./card.css"

function Card(props) {

	const { backdrop_path, title, vote_count, release_date, vote_average } = props.movieInfo
	return (
		<div className="card">
			<img src={`https://image.tmdb.org/t/p/w185/${backdrop_path}`} alt="Avatar" style={{ width: "100%" }} />
			<div className="container">
				<h4 className="movietitle"><b>{title}</b></h4>
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
