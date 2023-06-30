import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Checkbox } from "@mui/material";
const Checkout = () => {
	const styles = {
		parentDiv: {
			padding: "0 10%",
		},
		firstDiv: {
			backgroundColor: "lightgray",
		},
		firstDivH1: {
			fontSize: "20px",
			color: "#1A1110",
			padding: "10px",
		},
		secondtDivSpan: {
			color: "gray",
			fontWeight: "600",
			margin: "0 10px 0 0",
		},
		iconX: {
			color: "orange",
			paddingTop: "10px",
		},
		thirdDivP: {
			color: "gray",
			fontSize: "14px",
			padding: "10px",
		},
	};

	return (
		<SimplifiedDiv style={styles.parentDiv}>
			<SimplifiedDiv style={styles.firstDiv}>
				<h1 style={styles.firstDivH1}>Step 1</h1>
			</SimplifiedDiv>
			<SimplifiedDiv>
				<h1 style={styles.firstDivH1}>New User </h1>
				<span style={styles.secondtDivSpan}>Checkout options</span>
				<br></br>
				<Checkbox></Checkbox>
				<span style={styles.secondtDivSpan}>Register Account</span>
				<Checkbox></Checkbox>
				<span style={styles.secondtDivSpan}>Guest Checkout</span>
				<HighlightOffRoundedIcon style={styles.iconX} />
				<span> Cancel</span>
			</SimplifiedDiv>
			<SimplifiedDiv style={styles.firstDiv}>
				<p style={styles.thirdDivP}>
					Please use Register And Checkout to easily get access to your order
					history, or use Checkout as Guest
				</p>
			</SimplifiedDiv>
		</SimplifiedDiv>
	);
};

export default Checkout;
