import React, { useState, useEffect } from "react";
import { fetchComments } from "../../api/commentsApi";
import CategoryTab from "../CategoryTab/CategoryTab";
import { Button, Grid, TextField } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";

const BlogPage = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={3}>
				<h1>Category</h1>
				<SimplifiedDiv>
					<CategoryTab />
				</SimplifiedDiv>
			</Grid>
			<Grid item xs={9}></Grid>
		</Grid>
	);
};

export default BlogPage;
