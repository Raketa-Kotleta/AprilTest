import {AxiosResponse, AxiosPromise} from "axios"
import Game from "~/middleware/Game"
const axios = require("axios");

export default class Requests{
  public base_url: string;
  public RAPID_API_KEY: string;
  public RAPID_API_HOST: string;
  constructor(base_url: string, RAPID_API_KEY: string, RAPID_API_HOST: string) {
    this.base_url = base_url;
    this.RAPID_API_KEY = RAPID_API_KEY;
    this.RAPID_API_HOST = RAPID_API_HOST;
  }

  get(endpoint: String, code?: number): Promise<AxiosResponse>{
    return this.execute(endpoint, "GET", !(code)??{ params:  {id: code?.toString()}});
  }
  post(): void{

  }
  put(): void{

  }
  delete(): void{

  }
   async execute(endpoint: String, method: String,  options: Object): Promise<AxiosResponse> {
    try {
      const init = {
        method: method,
        url: this.base_url + "/" + endpoint,
        ...options,
        headers:{
          "X-RapidAPI-Key": this.RAPID_API_KEY,
          "X-RapidAPI-Host": this.RAPID_API_HOST,
        }
      };
      const response: Promise<AxiosResponse<Array<Game>>> = axios.request(init)
      return response;
    }
    catch (error: any){
      console.log(error)
    }
    return JSON.parse("")
  }


}


