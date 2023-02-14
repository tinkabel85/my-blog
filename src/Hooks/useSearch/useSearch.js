import { useState, useEffect } from "react";

function useSearch(posts) {
	const [filteredList, setFilteredList] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	console.log("useSearch");

	useEffect(() => {
		let filtered = posts.map((post) => {
			const record = {id: post.id, };
			if (
				searchInput === "" ||
				(post.title.toLowerCase().includes(searchInput) ||
				post.content.toLowerCase().includes(searchInput))
			) {
				record.isShown = true;
			} else {
				record.isShown = false;
			}
			return record;
		});

		setFilteredList(filtered);
	}, [posts, searchInput]);

	return [filteredList, setSearchInput];
}

export default useSearch;
