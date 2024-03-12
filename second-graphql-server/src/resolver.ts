import { PeopleModel } from "./models"
import { Resolvers } from "./types"

export const resolvers: Resolvers = {
  Query: {
    getTracks: (_, __, { dataSources }, ___) => {
      return dataSources.trackAPI.getTracks()
    },
    getFilms: (_, __, { dataSources }, ___) => {
      return dataSources.ghibliAPI.getFilms()
    },
    getPeople: (_, __, { dataSources }, ___) => {
      return dataSources.ghibliAPI.getPeople()
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }, __) => {
      return dataSources.trackAPI.getAuthorBy(authorId)
    }
  },

  Film: {
    people: (film, _, { dataSources }, __) => {
      let people: PeopleModel[] = []
      film.people.forEach( element => {
        const destructuredPath = element.split("/")
        const id = destructuredPath.at(destructuredPath.length - 1)
        if(id !== "people" && id.length > 0){
          const value = dataSources.ghibliAPI.getPeopleById(id)
          console.log(id.length)
          people.push(value)
        }
      });
      return people
    }
  },

  People: {
    films: (people, _, { dataSources }, __) => {
      return people.films.map((path) => {
        const destructuredPath = path.split("/")
        const id = destructuredPath.at(destructuredPath.length - 1)
        return dataSources.ghibliAPI.getFilmById(id)
      })
    }
  }
}