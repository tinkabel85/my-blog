import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import BlogPostDetailPage from "../../pages/BlogPostDetail/BlogPostDetailPage";
import BlogPostListPage from "../../pages/BlogPostList/BlogPostListPage";
import LoginPage from "../../pages/Login/LoginPage";

function Routes() {
	return (
		<RouterRoutes>
			<Route path="/" element= {<BlogPostListPage />} />
			<Route path="/post/:id" element={< BlogPostDetailPage/>} />
			<Route path="/login" element={<LoginPage />} />
		</RouterRoutes>
	);
}

export default Routes;
