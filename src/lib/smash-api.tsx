import axios, { AxiosRequestConfig } from "axios";

// /users
// /events

type HTTPRequestMethod = "GET" | "POST" | "PUT" | "DELETE";

/**
 * Basic wrapper to communicate with the Spring API
 */
export class SmashApi {
  private host: string = "/";
  constructor(host: string = "/") {
    this.host = host;
  }

  /**
   * Adjusts the outgoing request to add default headers the API needs to communicate
   */
  private _config(
    method: HTTPRequestMethod,
    config: AxiosRequestConfig
  ): AxiosRequestConfig {
    const headers = {
      Accept: "application/json",
      "Content/Type": "application/json",
      ...config.headers,
    };

    return {
      ...config,
      headers,
      method,
      baseURL: this.host,
    };
  }

  /**
   * Asynchronous method to send a request to the Smash api
   *
   * Usage:
   *
   * api.request('GET', { url:'/users' }).then(response => { ... })
   *
   * OR with ES6 async/await
   * const response = await api.request('GET', { url:'/users' })
   */
  public async request(
    method: any,
    config: AxiosRequestConfig
  ): Promise<AxiosRequestConfig> {
    const requestConfig = this._config(method, config);
    return await axios(requestConfig);
  }
}
