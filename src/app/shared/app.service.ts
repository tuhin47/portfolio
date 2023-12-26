import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {AppData} from "./app-data";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  data!: AppData;

  async getAppData() {
    if (this.data) {
      return this.data;
    }

    await fetch(`${environment.apiBase}/experiences.json`,
      {
        method: 'GET',
        redirect: 'follow'
      })
      .then(response => response.json())
      .then(result => {
        this.data = result as AppData;
      })
      .catch(error => console.log('error', error));

    return this.data;
  }

}
