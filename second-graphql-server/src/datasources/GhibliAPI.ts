import { RESTDataSource } from "@apollo/datasource-rest";
import { People } from "../types";
import { FilModel, PeopleModel } from "../models";

export default class GhibliAPI extends RESTDataSource {
  baseURL = "https://ghibliapi.dev"

  getFilms() {
    return this.get<FilModel[]>("films")
  }

  getPeople() {
    return this.get<PeopleModel[]>("people")
  }
  

  getPeopleById(peopleId: string) {
    return this.get<PeopleModel>(`people/${peopleId}`)
  }

  getFilmById(fimId: string) {
    return this.get<FilModel>(`films/${fimId}`)
  }
}