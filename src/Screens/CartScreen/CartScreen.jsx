import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, deleteFromCart } from "../../redux/cartSlice";
import Navigation from "../../Templates/Navigation/Navigation";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import { colors, fontSize, fontWeight } from "../../util/theme";
import Footer from "../../Templates/Footer/Footer";
import Text from "../../components/Text/Text";

const CartScreen = () => {
	const styles = {
		div: {
			width: "100%",
			margin: "auto",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			padding: "40px 0px",
		},
		grid: {
			width: "80%",
			height: "auto",
			padding: "10px",
			color: colors.white,
			display: "flex",
			justifyContent: "center",
			backgroundColor: colors.accentColor,
			margin: "20px",
		},
		gridWhite: {
			width: "80%",
			backgroundColor: colors.white,
			padding: "5px",
		},
		textStyle: {
			color: colors.black,
		},
		buttonStyle: {
			backgroundColor: colors.secondColor,
			border: 0,
			padding: "10px",
			color: colors.white,
			fontWeight: fontWeight.boldPlus,
			cursor: "pointer",
		},
		inputStyle: {
			width: "30px",
			padding: "7px",
		},
	};

	const items = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const handleIncrement = (itemId) => {
		dispatch(increment(itemId));
	};

	const handleDecrement = (itemId) => {
		dispatch(decrement(itemId));
	};

	const handleRemove = (itemId) => {
		dispatch(deleteFromCart(itemId));
	};

	return (
		<div>
			<Navigation />
			<SimplifiedDiv style={styles.div}>
				<Grid container direction="row" style={styles.grid}>
					<Grid item lg={6}>
						Item
					</Grid>
					<Grid item lg={2}>
						Price
					</Grid>
					<Grid item lg={2}>
						Quantity
					</Grid>
					<Grid item lg={2}>
						Total
					</Grid>
				</Grid>
				{items?.map((item) => (
					<Grid
						key={item.id}
						container
						direction="row"
						style={styles.gridWhite}
					>
						<Grid item lg={2}>
							<img src={item.img} alt={item.name} style={{ width: "80px" }} />
						</Grid>
						<Grid item lg={4}>
							<Text style={styles.textStyle}>
								ColorBlock Scuba <br />
								<span
									style={{
										fontSize: fontSize.optimal,
									}}
								>
									Web ID: {item.id}
								</span>
							</Text>
						</Grid>
						<Grid item lg={2}>
							<Text style={styles.textStyle}>{item.price + "$"}</Text>
						</Grid>
						<Grid item lg={2}>
							<button
								style={styles.buttonStyle}
								onClick={() => handleDecrement(item.id)}
							>
								-
							</button>
							<input
								type="number"
								value={item.quantity}
								style={styles.inputStyle}
								onChange={() => {}}
							/>
							<button
								style={styles.buttonStyle}
								onClick={() => handleIncrement(item.id)}
							>
								+
							</button>
						</Grid>
						<Grid item lg={2}>
							<Text style={styles.textStyle}>
								{(item.price * item.quantity).toFixed(2) + "$"}
								<button
									style={styles.buttonStyle}
									onClick={() => handleRemove(item.id)}
								>
									X
								</button>
							</Text>
						</Grid>
					</Grid>
				))}
			</SimplifiedDiv>
			<Footer />
		</div>
	);
};

export default CartScreen;
