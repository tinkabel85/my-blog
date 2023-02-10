import { useState, useEffect } from "react";

function useSearch(posts) {
	const [filteredList, setFilteredList] = useState([]);
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		let filtered = posts.filter(
			(post) =>
				post.title.toLowerCase().includes(searchInput) ||
				post.content.toLowerCase().includes(searchInput)
		);
		setFilteredList(filtered);
	}, [posts, searchInput]);

	return [filteredList, setSearchInput];
}

export default useSearch;
