import React from "react";
import img_500x325 from "../../img/img_500x325.png";
import { Card } from "./card.js";

export const Carddeck = () => {
	return (
		<div className="row row-cols-1 row-cols-md-4">
			<Card
				title="Card title"
				imageUrl={img_500x325}
				description="Nam ac quam aliquam, ullamcorper turpis quis, porta metus. Etiam a neque in quam vehicula feugiat sed quis diam."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>
			<Card
				title="Card title"
				imageUrl={img_500x325}
				description="Mauris efficitur urna eget metus sagittis tincidunt. Proin gravida est quis tortor varius, a aliquet elit efficitur. Proin euismod rhoncus ornare."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>
			<Card
				title="Card title"
				imageUrl={img_500x325}
				description="Pellentesque tincidunt ipsum iaculis sapien hendrerit placerat. Nunc eu odio orci. Aliquam erat volutpat."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>
			<Card
				title="Card title"
				imageUrl={img_500x325}
				description="Sagittis lobortis, odio fermentum ullamcorper venenatis, tellus nunc finibus nunc, semper varius neque lacus sit amet ex."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>

			<Card
				title="Card title"
				imageUrl={img_500x325}
				description="Sapien hendrerit placerat, odio fermentum ullamcorper venenatis, tellus nunc finibus nunc, semper varius neque lacus sit amet ex."
				buttonUrl="#"
				buttonLabel="Find Out More!"
			/>
		</div>
	);
};
