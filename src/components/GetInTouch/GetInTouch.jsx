import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import Text from "../Text/Text";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SimplifiedDiv from "../SimplifiedDiv/SimplifiedDiv";
import { fontSize } from "@mui/system";

const GetInTouch = () => {
	const styles = {
		container: {
			padding: "150px 10% 5% 10%",
		},
		item1Grid: {
			padding: "0 5% 0 0",
		},
		itemH1: {
			color: "orange",
			fontSize: "18px",
			textAlign: "center",
		},
		item1TextField: {
			width: "100%",
		},
		item1Button: {
			backgroundColor: "orange",
			color: " white",
			float: "right",
			marginTop: "10px",
		},
		item2p: {
			color: "gray",
			fontSize: "16px",
		},
		item2logoContainer: {
			display: "flex",
			justifyContent: "space-around",
			alignItems: "center",
		},
		item2logo: {
			color: "gray",
			fontSize: "32px",
		},
	};
	return (
		<Grid style={styles.container} container spacing={2}>
			<Grid style={styles.item1Grid} item xs={8}>
				<h1 style={styles.itemH1}>GET IN TOUCH</h1>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<TextField
							style={styles.item1TextField}
							id="demo-helper-text-misaligned-no-helper"
							label="Name"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							style={styles.item1TextField}
							id="demo-helper-text-misaligned-no-helper"
							label="Email"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField fullWidth label="Subject" id="fullWidth" />
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							style={styles.item1BigTextField}
							label="Type your message here"
						></TextField>
						<Button style={styles.item1Button} variant="contained">
							Submit
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={4}>
				<h1 style={styles.itemH1}>CONTACT INFO</h1>
				<p style={styles.item2p}>Eshopper Inc.</p>
				<p style={styles.item2p}>
					935 W. Webster Ave New Streets Chicago, IL 60614, NY
				</p>
				<p style={styles.item2p}>Newyork USA</p>
				<p style={styles.item2p}>Mobile: +2346 17 38 93</p>
				<p style={styles.item2p}>Fax: 1-714-252-0026</p>
				<p style={styles.item2p}>Email: info@e-shopper.com</p>
				<h1 style={styles.itemH1}>SOCIAL NETWORKING</h1>
				<SimplifiedDiv style={styles.item2logoContainer}>
					<FacebookIcon style={styles.item2logo} />
					<TwitterIcon style={styles.item2logo} />
					<GoogleIcon style={styles.item2logo} />
					<YouTubeIcon style={styles.item2logo} />
				</SimplifiedDiv>
			</Grid>
		</Grid>
	);
};

export default GetInTouch;
