import React from "react"
import styles from "../card.module.css"

export default props => (
	<div className={styles.card__inner}>
		<h3 className={styles.card__title}>
			#{props.film.episodeId} - {props.film.title}
		</h3>
		<h4 className={styles.card__subtitle}>Release Date:</h4>
		<p className={styles.card__copy}>
			{new Date(props.film.releaseDate).toLocaleDateString("en-US")}
		</p>

		<h4 className={styles.card__subtitle}>Director:</h4>
		<p className={styles.card__copy}>{props.film.director}</p>

		<h4 className={styles.card__subtitle}>Opening Crawl:</h4>
		<p className={styles.card__copy}>{props.film.openingCrawl}</p>
	</div>
)
