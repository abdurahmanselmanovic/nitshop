import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Button, Checkbox, Grid, TextField } from "@mui/material";
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
			margin: "0 20px 0 0",
		},
		iconX: {
			color: "orange",
			paddingTop: "10px",
		},
		thirdDivP: {
			color: "gray",
			fontSize: "14px",
			padding: "12px",
		},
		inputs: {
			margin: "4px",
			width: "90%",
			heihgt: "100px",
		},
		buttons: {
			backgroundColor: "orange",
			color: "white",
			width: "120px",
			marginTop: "10px",
			marginLeft: "8px",
			height: "40px",
			fontSize: "12px",
			border: "none",
		},
		spanOrange: {
			color: "orange",
			fontWeight: "bold",
			fontSize: "16px",
			margin: "-40px 0 0 0",
		},
		textBox: {
			backgroundColor: "lightgray",
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
				<span style={styles.spanOrange}> Cancel</span>
			</SimplifiedDiv>
			<SimplifiedDiv style={styles.firstDiv}>
				<p style={styles.thirdDivP}>
					Please use Register And Checkout to easily get access to your order
					history, or use Checkout as Guest
				</p>
			</SimplifiedDiv>
			<SimplifiedDiv>
				<Grid container spacing={2}>
					<Grid item xs={3.5}>
						<h3>Shopper information</h3>
						<TextField
							style={styles.inputs}
							size="small"
							id="filled"
							label="Display Name"
							variant="filled"
						/>
						<TextField
							style={styles.inputs}
							size="small"
							id="filled"
							label="User Name"
							variant="filled"
						/>
						<TextField
							style={styles.inputs}
							size="small"
							id="filled"
							label="Password"
							variant="filled"
						/>
						<TextField
							style={styles.inputs}
							size="small"
							id="filled"
							label="Confirm Password  "
							variant="filled"
						/>
						<Button style={styles.buttons} variant="contained">
							Get Quotes
						</Button>
						<Button style={styles.buttons} variant="contained">
							Continue
						</Button>
					</Grid>
					<Grid item xs={5}>
						<h3>Bill to</h3>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="Company Name"
									variant="filled"
								/>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="Email"
									variant="filled"
								/>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="Title"
									variant="filled"
								/>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="First Name *"
									variant="filled"
								/>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="Middle Name"
									variant="filled"
								/>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="Last Name * "
									variant="filled"
								/>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="Address 1 *"
									variant="filled"
								/>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="Address 2"
									variant="filled"
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="Zip / Postal code *"
									variant="filled"
								/>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="Country"
									variant="filled"
								/>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="State"
									variant="filled"
								/>
								<TextField
									style={styles.inputs}
									size="small"
									id="filled"
									label="Confirm Password"
									variant="filled"
								/>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="Phone *"
									variant="filled"
								/>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="Mobile Phone"
									variant="filled"
								/>
								<TextField
									size="small"
									style={styles.inputs}
									id="filled"
									label="Fax"
									variant="filled"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={3.5}>
						<h3>Shipping Order</h3>
						<textarea
							style={styles.textBox}
							rows="20"
							cols="50"
							placeholder="Notes about your order, Special Notes for Delivery"
						></textarea>
						<Checkbox></Checkbox>
						<span>Shipping to bill address</span>
					</Grid>
				</Grid>
			</SimplifiedDiv>
		</SimplifiedDiv>
	);
};

export default Checkout;
