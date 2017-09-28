import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { authCredentials, authEmptyResponse, authToken, authUser, authUserInfo, authUserRole, authVersion, protobufEmpty, calendarEvent, calendarEventSharing, calendarEventSharingList, calendarEventSharingRole, calendarEventType, calendarEvents, calendarPaging, calendarVersion, discussionDiscussion, discussionVersion, horseActivity, horseActivityList, horseFoodDosage, horseFoodDosages, horseHorse, horseHorseList, horseHorseSharing, horseHorseSharingList, horseHorseSharingRequest, horseHorseSharingRole, horsePaging, horseTraining, horseTrainingData, horseTrainingDataList, horseTrainingList, horseTrainingType, horseVersion } from './models';

/**
* Created with ngx-swagger-client-generator.
*/
@Injectable()
export class ApiClientService {

  private domain = 'http://host';

  constructor(private http: HttpClient, @Optional() @Inject('domain') domain: string ) {
    if (domain) {
      this.domain = domain;
    }
  }

  login(body: authCredentials): Observable<authToken> {
    const path = `/auth/login`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<authToken>('post', path, headers, params, JSON.stringify(body));
  }

  createUser(body: authUser): Observable<authUser> {
    const path = `/auth/users`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<authUser>('post', path, headers, params, JSON.stringify(body));
  }

  getUserByEmail(email: string): Observable<authUser> {
    const path = `/auth/users/email/${email}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<authUser>('get', path, headers, params, null);
  }

  getUserByID(id: string): Observable<authUser> {
    const path = `/auth/users/id/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<authUser>('get', path, headers, params, null);
  }

  getCurrentUser(): Observable<authUser> {
    const path = `/auth/users/me`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<authUser>('get', path, headers, params, null);
  }

  validateUser(): Observable<authUserInfo> {
    const path = `/auth/users/me/validate`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<authUserInfo>('delete', path, headers, params, null);
  }

  deleteUser(id: string): Observable<protobufEmpty> {
    const path = `/auth/users/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<protobufEmpty>('delete', path, headers, params, null);
  }

  editUser(userId: string, body: authUser): Observable<authUser> {
    const path = `/auth/users/${userId}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<authUser>('put', path, headers, params, JSON.stringify(body));
  }

  getVersion(): Observable<authVersion> {
    const path = `/auth/version`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<authVersion>('get', path, headers, params, null);
  }

  createEvent(body: calendarEvent): Observable<calendarEvent> {
    const path = `/calendar/create`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<calendarEvent>('post', path, headers, params, JSON.stringify(body));
  }

  createEventSharing(body: calendarEventSharing): Observable<calendarEventSharing> {
    const path = `/calendar/eventSharing`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<calendarEventSharing>('post', path, headers, params, JSON.stringify(body));
  }

  getEventSharingByEventID(id: string): Observable<calendarEventSharingList> {
    const path = `/calendar/eventSharing/event/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<calendarEventSharingList>('get', path, headers, params, null);
  }

  getEventSharingByUserID(id: string): Observable<calendarEventSharingList> {
    const path = `/calendar/eventSharing/user/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<calendarEventSharingList>('get', path, headers, params, null);
  }

  deleteEventSharing(id: string): Observable<protobufEmpty> {
    const path = `/calendar/eventSharing/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<protobufEmpty>('delete', path, headers, params, null);
  }

  getEvents(from: string, to: string, horseID: string): Observable<calendarEvents> {
    const path = `/calendar/list`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (from) {
      params = params.set('from', from + '');
    }
    if (to) {
      params = params.set('to', to + '');
    }
    if (horseID) {
      params = params.set('horseID', horseID + '');
    }
    return this.sendRequest<calendarEvents>('get', path, headers, params, null);
  }

  getVersion(): Observable<calendarVersion> {
    const path = `/calendar/version`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<calendarVersion>('get', path, headers, params, null);
  }

  getEventByID(id: string): Observable<calendarEvent> {
    const path = `/calendar/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<calendarEvent>('get', path, headers, params, null);
  }

  deleteEvent(id: string): Observable<protobufEmpty> {
    const path = `/calendar/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<protobufEmpty>('delete', path, headers, params, null);
  }

  updateEvent(id: string, body: calendarEvent): Observable<calendarEvent> {
    const path = `/calendar/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<calendarEvent>('put', path, headers, params, JSON.stringify(body));
  }

  createDiscussion(body: discussionDiscussion): Observable<discussionDiscussion> {
    const path = `/discussion/create`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<discussionDiscussion>('post', path, headers, params, JSON.stringify(body));
  }

  getDiscussion(id: string, type: string): Observable<discussionDiscussion> {
    const path = `/discussion/list/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (type) {
      params = params.set('type', type + '');
    }
    return this.sendRequest<discussionDiscussion>('get', path, headers, params, null);
  }

  getVersion(): Observable<discussionVersion> {
    const path = `/discussion/version`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<discussionVersion>('get', path, headers, params, null);
  }

  deleteDiscussion(id: string): Observable<protobufEmpty> {
    const path = `/discussion/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<protobufEmpty>('delete', path, headers, params, null);
  }

  updateDiscussion(id: string): Observable<discussionDiscussion> {
    const path = `/discussion/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<discussionDiscussion>('put', path, headers, params, null);
  }

  readAllHorseSharings(): Observable<horseHorseSharingList> {
    const path = `/horse/access`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseHorseSharingList>('get', path, headers, params, null);
  }

  createHorseSharing(body: horseHorseSharingRequest): Observable<horseHorseSharing> {
    const path = `/horse/access`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseHorseSharing>('post', path, headers, params, JSON.stringify(body));
  }

  readHorseSharingByHorseID(horseID: string): Observable<horseHorseSharingList> {
    const path = `/horse/access/horse/${horseID}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseHorseSharingList>('get', path, headers, params, null);
  }

  readHorseSharingByUserID(userID: string): Observable<horseHorseSharingList> {
    const path = `/horse/access/user/${userID}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseHorseSharingList>('get', path, headers, params, null);
  }

  deleteHorseSharing(id: string): Observable<protobufEmpty> {
    const path = `/horse/access/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<protobufEmpty>('delete', path, headers, params, null);
  }

  readActivities(horseID: string): Observable<horseActivityList> {
    const path = `/horse/activities/${horseID}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseActivityList>('get', path, headers, params, null);
  }

  createActivity(body: horseActivity): Observable<horseActivity> {
    const path = `/horse/activity`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseActivity>('post', path, headers, params, JSON.stringify(body));
  }

  readActivity(id: string): Observable<horseActivity> {
    const path = `/horse/activity/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseActivity>('get', path, headers, params, null);
  }

  deleteActivity(id: string): Observable<protobufEmpty> {
    const path = `/horse/activity/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<protobufEmpty>('delete', path, headers, params, null);
  }

  createHorse(body: horseHorse): Observable<horseHorse> {
    const path = `/horse/create`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseHorse>('post', path, headers, params, JSON.stringify(body));
  }

  getHorseFromFEI(id: string): Observable<horseHorse> {
    const path = `/horse/fei/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseHorse>('get', path, headers, params, null);
  }

  editFoodDosages(body: horseFoodDosages): Observable<horseFoodDosages> {
    const path = `/horse/food/dosages`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseFoodDosages>('post', path, headers, params, JSON.stringify(body));
  }

  getFoodDosages(id: string): Observable<horseFoodDosages> {
    const path = `/horse/food/dosages/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseFoodDosages>('get', path, headers, params, null);
  }

  getHorse(id: string): Observable<horseHorse> {
    const path = `/horse/id/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseHorse>('get', path, headers, params, null);
  }

  listHorses(): Observable<horseHorseList> {
    const path = `/horse/list/simple`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseHorseList>('get', path, headers, params, null);
  }

  getTrainingByID(id: string): Observable<horseTraining> {
    const path = `/horse/training/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseTraining>('get', path, headers, params, null);
  }

  listTrainings(start: string, number: string): Observable<horseTrainingList> {
    const path = `/horse/trainings`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (start) {
      params = params.set('start', start + '');
    }
    if (number) {
      params = params.set('number', number + '');
    }
    return this.sendRequest<horseTrainingList>('get', path, headers, params, null);
  }

  deleteTraining(id: string): Observable<protobufEmpty> {
    const path = `/horse/trainings/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<protobufEmpty>('delete', path, headers, params, null);
  }

  updateActivity(id: string, body: horseActivity): Observable<horseActivity> {
    const path = `/horse/trainings/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseActivity>('put', path, headers, params, JSON.stringify(body));
  }

  getTrainingData(id: string, type: string, graphType: string): Observable<horseTrainingDataList> {
    const path = `/horse/trainings/${id}/${type}/${graphType}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseTrainingDataList>('get', path, headers, params, null);
  }

  updateHorse(body: horseHorse): Observable<horseHorse> {
    const path = `/horse/update`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseHorse>('put', path, headers, params, JSON.stringify(body));
  }

  getVersion(): Observable<horseVersion> {
    const path = `/horse/version`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseVersion>('get', path, headers, params, null);
  }

  createTraining(horseID: string, body: horseTraining): Observable<horseTraining> {
    const path = `/horse/${horseID}/trainings`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseTraining>('post', path, headers, params, JSON.stringify(body));
  }

  deleteHorse(id: string): Observable<protobufEmpty> {
    const path = `/horse/${id}`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<protobufEmpty>('delete', path, headers, params, null);
  }

  getTrainingsByHorseID(id: string): Observable<horseTrainingList> {
    const path = `/horse/${id}/trainings`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<horseTrainingList>('get', path, headers, params, null);
  }

  private sendRequest<T>(method: string, path: string, headers: HttpHeaders, params: HttpParams, body: any): Observable<T> {
    if (method === 'get') {
      return this.http.get<T>(this.domain + path, { headers: headers, params: params });
    } else if (method === 'put') {
      return this.http.put<T>(this.domain + path, body, { headers: headers, params: params });
    } else if (method === 'post') {
      return this.http.post<T>(this.domain + path, body, { headers: headers, params: params });
    } else if (method === 'delete') {
      return this.http.delete<T>(this.domain + path, { headers: headers, params: params });
    } else {
      console.error('Unsupported request: ' + method);
      return Observable.throw('Unsupported request: ' + method);
    }
  }
}
