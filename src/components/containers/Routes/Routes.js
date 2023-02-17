import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import BlogPostDetailPage from "../../pages/BlogPostDetail/BlogPostDetailPage";
import BlogPostListPage from "../../pages/BlogPostList/BlogPostListPage";
import Err404Page from "../../pages/Err404/Err404Page";
import LoginPage from "../../pages/Login/LoginPage";

function Routes() {
	return (
		<RouterRoutes>
			<Route path="/" element={<BlogPostListPage />} />
			<Route path="/post/:id" element={<BlogPostDetailPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="*" element={<Err404Page />} />
		</RouterRoutes>
	);
}

export default Routes;
