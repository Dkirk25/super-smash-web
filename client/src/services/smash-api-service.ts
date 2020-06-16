import { SmashApi } from "../lib/smash-api";

/**
 * Use our api library in src/lib and make a service out of it we can use in the app
 */
const api = new SmashApi(process.env.REACT_APP_API_HOST);

/**
 * This is to export it as a property instead of the default.
 *
 * Meaning when we import it: import { api } from '../path/to/smash-api-service'
 * instead of import api from '../path/to/smash-api-service';
 */
export { api };