import React from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import Checkout from "../../Templates/Checkout/Checkout";
import Footer from "../../Templates/Footer/Footer";
import CartPage from "../../Templates/CartPage/CartPage";

const CheckoutScreen = () => {
	return (
		<>
			<Navigation />
			<Checkout />
			<CartPage></CartPage>
			<Footer />
		</>
	);
};

export default CheckoutScreen;
