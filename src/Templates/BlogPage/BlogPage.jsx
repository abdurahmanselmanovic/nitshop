import React, { useState, useEffect } from "react";
import { fetchComments } from "../../api/commentsApi";
import CategoryTab from "../CategoryTab/CategoryTab";
import { Button, Grid, TextField } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import png1 from "../../assets/images/blog/blog-one.jpg";
import png2 from "../../assets/images/blog/blog-two.jpg";
import png3 from "../../assets/images/blog/blog-three.jpg";
const BlogPage = () => {
	const styles = {
		grid1container: {
			padding: "50px",
		},
		grid1h1: {
			color: "orange",
			fontSize: "20px",
			fontWeight: "bold",
			textAlign: "center",
		},
		item1Button: {
			backgroundColor: "orange",
			color: " white",
			marginTop: "10px",
		},
		grid2h1: {
			color: "orange",
			fontSize: "20px",
			fontWeight: "bold",
			textAlign: "center",
			margin: "5% 10% 0 0 ",
		},
		grid2h2: {
			color: "gray",
			fontSize: "15px",
		},
	};
	return (
		<Grid container spacing={2}>
			<Grid style={styles.grid1container} item xs={3}>
				<h1 style={styles.grid1h1}>CATEGORY</h1>
				<SimplifiedDiv>
					<CategoryTab />
				</SimplifiedDiv>
			</Grid>
			<Grid item xs={9}>
				<h1 style={styles.grid2h1}>LATEST FROM OUR BLOG</h1>
				<SimplifiedDiv>
					<h2 style={styles.grid2h2}>GIRLS PINK T SHIRT ARRIVED IN STORE</h2>
					<PersonIcon></PersonIcon>
					<span>Mac doe</span>
					<AccessTimeIcon></AccessTimeIcon>
					<span>1:33pm</span>
					<CalendarMonthIcon></CalendarMonthIcon>
					<span>DEC 5,2013</span>
					<png1></png1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</p>

					<Button style={styles.item1Button} variant="contained">
						Read More
					</Button>
				</SimplifiedDiv>
				<SimplifiedDiv>
					<h2 style={styles.grid2h2}>GIRLS PINK T SHIRT ARRIVED IN STORE</h2>
					<PersonIcon></PersonIcon>
					<span>Mac doe</span>
					<AccessTimeIcon></AccessTimeIcon>
					<span>1:33pm</span>
					<CalendarMonthIcon></CalendarMonthIcon>
					<span>DEC 5,2013</span>
					<png1></png1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</p>

					<Button style={styles.item1Button} variant="contained">
						Read More
					</Button>
				</SimplifiedDiv>
				<SimplifiedDiv>
					<h2 style={styles.grid2h2}>GIRLS PINK T SHIRT ARRIVED IN STORE</h2>
					<PersonIcon></PersonIcon>
					<span>Mac doe</span>
					<AccessTimeIcon></AccessTimeIcon>
					<span>1:33pm</span>
					<CalendarMonthIcon></CalendarMonthIcon>
					<span>DEC 5,2013</span>
					<png1></png1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</p>

					<Button style={styles.item1Button} variant="contained">
						Read More
					</Button>
				</SimplifiedDiv>
			</Grid>
		</Grid>
	);
};

export default BlogPage;
