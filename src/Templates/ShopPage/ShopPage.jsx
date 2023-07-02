import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Banner from "../../assets/images/shop/advertisement.jpg";
import { Grid } from "@mui/material";
import CategoryTab from "../CategoryTab/CategoryTab";
import freeshipping from "../../assets/images/home/shipping.jpg";
import ArticleCard from "../ArticleCard/ArticleCard";
import ArticlesHomePage from "../ArticlesHomePage/ArticlesHomePage";

const ShopPage = () => {
	const styles = {
		glavniDiv: {
			marginTop: "40px",
			marginBottom: "40px",
			padding: "0 10%",
		},
		imgBanner: {
			marginBottom: "15px",
		},
		grid1H1: {
			color: "orange",
			textAlign: "center",
			fontWeight: "bold",
			fontSize: "18px",
		},
		grid1img2: {
			marginTop: "100px",
			width: "100%",
		},
	};

	return (
		<>
			<SimplifiedDiv style={styles.glavniDiv}>
				<img
					style={styles.imgBanner}
					src={Banner}
					alt=""
					srcset=""
					width={"100%"}
				/>
				<Grid container spacing={2}>
					<Grid style={styles.grid1} item xs={3}>
						<h1 style={styles.grid1H1}>CATEGORY</h1>
						<CategoryTab />
						<img style={styles.grid1img2} src={freeshipping} alt="s"></img>
					</Grid>
					<Grid item xs={9}>
						<ArticlesHomePage />
					</Grid>
				</Grid>
			</SimplifiedDiv>
		</>
	);
};

export default ShopPage;
