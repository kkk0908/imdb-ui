import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query, page) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);

	const sendQuery = useCallback(async () => {
		try {
			let url = `https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en-US&sort_by=popularity.desc&page=${page}`;
			await setLoading(true);
			await setError(false);
			const res = await axios.get(url);
			await setList((prev) => {



				if (query) {
					let updatedList = [...prev, ...res.data.results]
					updatedList = [...new Map(updatedList.map((item) => [item["title"], item])).values()]
					// return updatedList.filter(list => list.title.toLowerCase().startsWith(query.toLowerCase()))
					updatedList = [...updatedList.filter(list => list.title.toLowerCase().includes(query.toLowerCase()))]
					// updatedList = [...new Map(updatedList.map((item) => [item["title"], item])).values()]
					return updatedList
				} else {
					let updatedList = [...res.data.results]
					updatedList = [...prev, ...new Map(updatedList.map((item) => [item["title"], item])).values()]
					return updatedList
				}

			})

			setLoading(false);
		} catch (err) {
			setError(err);
		}
	}, [query, page]);

	useEffect(() => {
		sendQuery(query);
	}, [query, sendQuery, page]);

	return { loading, error, list };
}

export default useFetch;