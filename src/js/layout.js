import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SinglePersonajes } from "./views/singleDePersonajes.jsx"
import { SinglePlaneta } from "./views/singledePlaneta";
import { SingleAuto } from "./views/SingledeAuto"
import { Login } from "./views/login.jsx"
/* import { singup } from "./views/singup" */


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/singlepersonaje/:theid" element={<SinglePersonajes />} />
						<Route path="/singlePlaneta/:theid" element={<SinglePlaneta />} />
						<Route path="/singleauto/:theid" element={<SingleAuto />} />
						<Route path="/singleauto/:theid" element={<SingleAuto />} />
						<Route path="/login#pills-login" element={<Login />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
