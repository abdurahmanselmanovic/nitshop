import React from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import Footer from "../../Templates/Footer/Footer";
import CounterComponent from "../../Templates/CounterComponent/CounterComponent";
import ShopPage from "../../Templates/ShopPage/ShopPage";

const ShopScreen = () => {
	return (
		<>
			<Navigation />
			<ShopPage />
			<Footer />
		</>
	);
};

export default ShopScreen;
