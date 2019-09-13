import React from "react"
import { graphql } from "gatsby"
import FilmList from "../components/films/filmsList"
import CharacterList from "../components/characters/characterList"

class StarWarsApp extends React.Component {
	render() {
		const {
			swapi: { allFilms, allPersons },
		} = this.props.data

		return (
			<div className="star-wars-app">
				<div className="stars"></div>
				<div className="twinkling"></div>
				<div className="content">
					<h2 className="section__title">Films</h2>
					<FilmList films={allFilms} />

					<h2 className="section__title">Characters</h2>
					<CharacterList characters={allPersons} />
				</div>
			</div>
		)
	}
}

// This query is executed at build time by Gatsby
export const GatsbyQuery = graphql`
	{
		swapi {
			allFilms {
				id
				title
				releaseDate
				openingCrawl
				episodeId
				director
			}
			allPersons {
				id
				name
				homeworld {
					name
				}
				species {
					name
				}
				birthYear
				height
				eyeColor
				starships {
					name
				}
			}
		}
	}
`

export default StarWarsApp
