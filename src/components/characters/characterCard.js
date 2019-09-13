import React from "react"
import styles from "../card.module.css"

export default props => (
	<div className={styles.card__inner}>
		<h2 className={styles.card__title}>{props.character.name}</h2>
		<h4 className={styles.card__subtitle}>Homeworld:</h4>
		<p className={styles.card__copy}>
			{props.character.homeworld
				? props.character.homeworld.name
				: "Not Specified"}
		</p>

		<h4 className={styles.card__subtitle}>Species:</h4>
		<p className={styles.card__copy}>
			{props.character.species.length > 0
				? props.character.species[0].name
				: "Not Specified"}
		</p>

		<h4 className={styles.card__subtitle}>Birth year:</h4>
		<p className={styles.card__copy}>{props.character.birthYear}</p>

		<h4 className={styles.card__subtitle}>Height:</h4>
		<p className={styles.card__copy}>{props.character.height}</p>

		<h4 className={styles.card__subtitle}>Eye Colour:</h4>
		<p className={styles.card__copy}>{props.character.eyeColor}</p>

		<h4 className={styles.card__subtitle}>Starships: </h4>

		<ul className={styles.card__list}>
			{props.character.starships.map((starship, index) => (
				<li key={index} className={styles.card__listitem}>
					{starship.name}
				</li>
			))}
		</ul>
	</div>
)
