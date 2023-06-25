import React from "react";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import Footer from "../Footer/Footer";

const ContactCard = () => {
	const styles = {
		Text: {
			marginTop: "60px",
			textAlign: "center",
			fontSize: "18px",
			color: "orange",
			fontWeight: "bold",
		},
		GlavniDiv: {
			width: "100%",
			padding: "0% 0%",
		},
	};
	return (
		<SimplifiedDiv style={styles.GlavniDiv}>
			<Text style={styles.Text}>CONTACT US</Text>
			<GetInTouch></GetInTouch>
			<Footer></Footer>
		</SimplifiedDiv>
	);
};

export default ContactCard;
