import { useState, useEffect } from "react";


function useSearch(posts) {
	const [filteredList, setFilteredList] = useState([]);
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		const filtered = posts.map((post) => ({
			...post,
			isShown: (
				searchInput === "" ||
				(post.title.toLowerCase().includes(searchInput) ||
				post.content.toLowerCase().includes(searchInput))
			)
		}));

		setFilteredList(filtered);
	}, [posts, searchInput]);

	return [filteredList, setSearchInput];
}

export default useSearch;
