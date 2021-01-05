/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Finviz } from '../models/finviz';
import { PageRequest } from '../models/page-request';

@Injectable({
  providedIn: 'root',
})
export class FinvizService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation finvizControllerGetNewsSourceTypes
   */
  static readonly FinvizControllerGetNewsSourceTypesPath = '/api/finviz/source-types';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `finvizControllerGetNewsSourceTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  finvizControllerGetNewsSourceTypes$Response(params?: {
  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, FinvizService.FinvizControllerGetNewsSourceTypesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `finvizControllerGetNewsSourceTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  finvizControllerGetNewsSourceTypes(params?: {
  }): Observable<Array<string>> {

    return this.finvizControllerGetNewsSourceTypes$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation finvizControllerGetAll
   */
  static readonly FinvizControllerGetAllPath = '/api/finviz/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `finvizControllerGetAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  finvizControllerGetAll$Response(params: {
    body: PageRequest
  }): Observable<StrictHttpResponse<Array<Finviz>>> {

    const rb = new RequestBuilder(this.rootUrl, FinvizService.FinvizControllerGetAllPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Finviz>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `finvizControllerGetAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  finvizControllerGetAll(params: {
    body: PageRequest
  }): Observable<Array<Finviz>> {

    return this.finvizControllerGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Finviz>>) => r.body as Array<Finviz>)
    );
  }

}
