import React from "react"
import CharacterCard from "./characterCard"
import styles from "../card.module.css"

export default props => {
	const cards = props.characters.map((character, index) => (
		<li className={styles.character__card} key={character.id}>
			<CharacterCard character={character} />
		</li>
	))
	return <ul className={styles.cards__container}>{cards}</ul>
}
