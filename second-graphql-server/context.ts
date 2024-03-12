import GhibliAPI from "./src/datasources/GhibliAPI";
import { TrackAPI } from "./src/datasources/TrackAPI";

export type DataSourceContext = {
  dataSources: {
    trackAPI: TrackAPI,
    ghibliAPI: GhibliAPI
  };
};