// tslint:disable:max-line-length
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bot } from '../models/bot-model';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { AuthService } from '../core/auth.service';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Project } from '../models/project-model';
@Injectable()
export class BotService {

  http: Http;
  // MONGODB_BASE_URL = environment.mongoDbConfig.BOTS_BASE_URL;
  MONGODB_BASE_URL: any;
  // TOKEN = environment.mongoDbConfig.TOKEN;
  TOKEN: string
  user: any;


  public test: BehaviorSubject<String> = new BehaviorSubject<String>(null);

  constructor(
    http: Http,
    private auth: AuthService,
    private router: Router
  ) {
    this.http = http;

    // SUBSCRIBE TO USER BS
    this.user = auth.user_bs.value
    this.checkUser()

    this.auth.user_bs.subscribe((user) => {
      this.user = user;
      this.checkUser()
    });

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {

        console.log('BotService - NavigationEnd');
        this.test.next('»»»»»»»»»   change of route »»»»»»»»»');

      }
    });

  }

  checkUser() {
    if (this.user) {
      this.TOKEN = this.user.token
      // this.getToken();
    } else {
      console.log('No user is signed in');
    }
  }

  /**
   * READ (GET)
   */
  public getMongDbBots(): Observable<Bot[]> {
    const url = this.MONGODB_BASE_URL;
    console.log('MONGO DB BOT URL', url);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.TOKEN);
    return this.http
      .get(url, { headers })
      .map((response) => response.json());
  }


  /**
   * READ DETAIL (GET BOT BY BOT ID)
   * @param id
   */
  public getMongDbBotById(id: string): Observable<Bot[]> {
    let url = this.MONGODB_BASE_URL;
    url += `${id}`;
    console.log('MONGO DB GET BOT BY BOT ID URL', url);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.TOKEN);
    return this.http
      .get(url, { headers })
      .map((response) => response.json());
  }

  /**
   * CREATE (POST)
   * @param fullName
   */
  public addMongoDbBot(fullName: string, id_faq_kb: string) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this.TOKEN);
    const options = new RequestOptions({ headers });

    const body = { 'fullname': `${fullName}`, 'id_faq_kb': `${id_faq_kb}` };

    console.log('ADD BOT POST REQUEST BODY ', body);

    const url = this.MONGODB_BASE_URL;

    return this.http
      .post(url, JSON.stringify(body), options)
      .map((res) => res.json());

  }

  /**
   * DELETE (DELETE)
   * @param id
   */
  public deleteMongoDbBot(id: string) {

    let url = this.MONGODB_BASE_URL;
    url += `${id}# chat21-api-nodejs`;
    console.log('DELETE URL ', url);

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this.TOKEN);
    const options = new RequestOptions({ headers });
    return this.http
      .delete(url, options)
      .map((res) => res.json());

  }

  /**
   * UPDATE (PUT)
   * @param id
   * @param fullName
   */
  public updateMongoDbBot(id: string, fullName: string, id_faq_kb: string) {

    let url = this.MONGODB_BASE_URL;
    url = url += `${id}`;
    console.log('PUT URL ', url);

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this.TOKEN);
    const options = new RequestOptions({ headers });

    const body = { 'fullname': `${fullName}`, 'id_faq_kb': `${id_faq_kb}` };

    console.log('PUT REQUEST BODY ', body);

    return this.http
      .put(url, JSON.stringify(body), options)
      .map((res) => res.json());

  }

}
