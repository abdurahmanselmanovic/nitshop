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
import pngShipping from "../../assets/images/home/shipping.jpg";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Star from "@mui/icons-material/Star";
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
		grid1Image: {
			marginTop: "100px",
			marginLeft: "-40px",
			padding: "20px",
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
		grid2stars: {
			float: "right",
			color: "orange",
			marginRight: "20%",
		},
		stars: {
			fontSize: "18px",
			color: "orange",
		},
		spanStyle: {
			color: "gray",
			fontSize: "14px",
			margin: "-10% 10px 10px 5px",
		},
		lastButtonStyle: {
			margin: "0 0 10px 0",
			backgroundColor: "orange",
			color: " white",
			marginTop: "10px",
		},
	};
	return (
		<Grid container spacing={2}>
			<Grid style={styles.grid1container} item xs={3}>
				<Grid item xs={12}>
					<h1 style={styles.grid1h1}>CATEGORY</h1>
					<SimplifiedDiv>
						<CategoryTab />
					</SimplifiedDiv>
				</Grid>
				<Grid style={styles.grid1Image} item xs={12}>
					<img src={pngShipping} className="App-logo" alt="logo" />
				</Grid>
			</Grid>
			<Grid item xs={9}>
				<h1 style={styles.grid2h1}>LATEST FROM OUR BLOG</h1>
				<SimplifiedDiv>
					<h2 style={styles.grid2h2}>GIRLS PINK T SHIRT ARRIVED IN STORE</h2>
					<PersonIcon style={styles.stars}></PersonIcon>
					<span style={styles.spanStyle}>Mac doe</span>
					<AccessTimeIcon style={styles.stars}></AccessTimeIcon>
					<span style={styles.spanStyle}>1:33pm</span>
					<CalendarMonthIcon style={styles.stars}></CalendarMonthIcon>
					<span style={styles.spanStyle}>DEC 5,2013</span>
					<SimplifiedDiv style={styles.grid2stars}>
						<Star style={styles.stars}></Star>
						<Star style={styles.stars}></Star>
						<Star style={styles.stars}></Star>
						<Star style={styles.stars}></Star>
						<StarHalfIcon style={styles.stars}></StarHalfIcon>
					</SimplifiedDiv>

					<img src={png1} className="App-logo" alt="logo" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor
					</p>

					<Button style={styles.item1Button} variant="contained">
						Read More
					</Button>
				</SimplifiedDiv>
				<SimplifiedDiv>
					<h2 style={styles.grid2h2}>GIRLS PINK T SHIRT ARRIVED IN STORE</h2>
					<PersonIcon style={styles.stars}></PersonIcon>
					<span style={styles.spanStyle}>Mac doe</span>
					<AccessTimeIcon style={styles.stars}></AccessTimeIcon>
					<span style={styles.spanStyle}>1:33pm</span>
					<CalendarMonthIcon style={styles.stars}></CalendarMonthIcon>
					<span style={styles.spanStyle}>DEC 5,2013</span>
					<SimplifiedDiv style={styles.grid2stars}>
						<Star style={styles.stars}></Star>
						<Star style={styles.stars}></Star>
						<Star style={styles.stars}></Star>
						<Star style={styles.stars}></Star>
						<StarHalfIcon style={styles.stars}></StarHalfIcon>
					</SimplifiedDiv>

					<img src={png2} className="App-logo" alt="logo" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor
					</p>

					<Button style={styles.item1Button} variant="contained">
						Read More
					</Button>
				</SimplifiedDiv>
				<SimplifiedDiv>
					<h2 style={styles.grid2h2}>GIRLS PINK T SHIRT ARRIVED IN STORE</h2>
					<PersonIcon style={styles.stars}></PersonIcon>
					<span style={styles.spanStyle}>Mac doe</span>
					<AccessTimeIcon style={styles.stars}></AccessTimeIcon>
					<span style={styles.spanStyle}>1:33pm</span>
					<CalendarMonthIcon style={styles.stars}></CalendarMonthIcon>
					<span style={styles.spanStyle}>DEC 5,2013</span>
					<SimplifiedDiv style={styles.grid2stars}>
						<Star style={styles.stars}></Star>
						<Star style={styles.stars}></Star>
						<Star style={styles.stars}></Star>
						<Star style={styles.stars}></Star>
						<StarHalfIcon style={styles.stars}></StarHalfIcon>
					</SimplifiedDiv>

					<img src={png3} className="App-logo" alt="logo" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor
					</p>

					<Button
						style={(styles.item1Button, styles.lastButtonStyle)}
						variant="contained"
					>
						Read More
					</Button>
				</SimplifiedDiv>
			</Grid>
		</Grid>
	);
};

export default BlogPage;
