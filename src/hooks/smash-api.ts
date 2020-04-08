import { api } from "../services/smash-api-service";
import { SmashApi } from "../lib/smash-api";

/**
 * A base hook that would allow us to inject our api service into a component
 */
export function useApi(): [SmashApi] {
  return [api];
}