import React from "react";

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Carddeck } from "./carddeck.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />

			<Jumbotron
				title="A Warm Welcome!"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non facilisis est. Sed interdum interdum ultrices. Donec est erat, dictum vitae ultricies quis, fermentum ut nisl."
				buttonLabel="Call to action!"
				buttonURL="#"
			/>

			<Carddeck />

			<Footer />
		</div>
	);
}
