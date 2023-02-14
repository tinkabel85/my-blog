export default function postShouldBeShown(filtered, post) {
	return filtered.find((r) => r.id === post.id && r.isShown);
}
