import React from "react"
import FilmCard from "./filmCard"
import styles from "../card.module.css"

export default props => {
	const cards = props.films.map((film, index) => (
		<li className={styles.film__card} key={film.id}>
			<FilmCard film={film} />
		</li>
	))

	return <ul className={styles.cards__container}>{cards}</ul>
}
