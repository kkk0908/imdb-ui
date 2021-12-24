import React, { useState, useEffect, useRef, useCallback } from 'react'
import axios from "axios";
import { css } from '@emotion/react'
import { SyncLoader, ScaleLoader } from 'react-spinners'
import Aos from 'aos'
import ScrollUpButton from "react-scroll-up-button";

import "aos/dist/aos.css"
import "./home.css";
import Card from "./../components/card/Card"
import useFetch from "./../customHooks/useFetch"


function Home() {
	const loaderCSS = css`
display:flex;
justify-content:center
`
	const baseURL = "https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en-US&sort_by=popularity.desc&page=1";
	const [page, setPage] = useState(1);
	const loader = useRef(null);
	const [query, setQuery] = useState("");
	const { loading, error, list } = useFetch(query, page);
	console.log(list)
	const handleChange = (e) => {
		if (!e.target.value) {

			setQuery(e.target.value);
		} else {
			setQuery(e.target.value);
		}

	};

	const [data, setData] = useState([])
	const getMoviesList = () => {
		axios.get(baseURL).then((response) => {
			setData(response.data.results);
			console.log("data>>>>", response.data.results)
		});
	}


	const handleObserver = useCallback((entries) => {
		const target = entries[0];
		if (target.isIntersecting) {
			setPage((prev) => prev + 1);
		}
	}, []);

	// useEffect(() => {
	// 	getMoviesList()
	// }, [])

	useEffect(() => {
		Aos.init({ duration: 2000 })
		const option = {
			root: null,
			rootMargin: "20px",
			threshold: 0
		};
		const observer = new IntersectionObserver(handleObserver, option);
		if (loader.current) observer.observe(loader.current);
	}, [handleObserver]);

	return (
		<div className="home">
			<input type="text" value={query} onChange={handleChange} placeholder="Search BY Name..." />
			<div className="homeContainer">
				{
					list.map((movie, index) => {
						return (<div className="cardDiv" data-aos="flip-up" ><Card key={index} movieInfo={movie} /></div>)
					})
				}

			</div>
			{/* {loading && <p>Loading...</p>} */}
			<ScaleLoader size={60} css={loaderCSS} color="green" loading={loading} />
			{error && <p>Error!</p>}
			<div ref={loader} />
			<ScrollUpButton />
		</div>
	)
}

export default Home
