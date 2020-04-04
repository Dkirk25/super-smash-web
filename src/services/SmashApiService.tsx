// import axios from 'axios';

// /users
// /events

export class SmashApiService {
  private host = "";
  constructor(host = "") {
    this.host = host;
  }
}

export const api = new SmashApiService(process.env.REACT_APP_API_HOST);
