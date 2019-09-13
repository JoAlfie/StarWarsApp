import React from "react"
import styles from "../card.module.css"

class FilmCard extends React.Component {
	render() {
		return (
			<div className={styles.card__inner}>
				<h3 className={styles.card__title}>
					#{this.props.film.episodeId} - {this.props.film.title}
				</h3>
				<h4 className={styles.card__subtitle}>Release Date:</h4>
				<p className={styles.card__copy}>
					{new Date(this.props.film.releaseDate).toLocaleDateString("en-US")}
				</p>

				<h4 className={styles.card__subtitle}>Director:</h4>
				<p className={styles.card__copy}>{this.props.film.director}</p>

				<h4 className={styles.card__subtitle}>Opening Crawl:</h4>
				<p className={styles.card__copy}>{this.props.film.openingCrawl}</p>
			</div>
		)
	}
}

export default FilmCard
