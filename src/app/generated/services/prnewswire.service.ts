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

import { PrNewswireNewsDetails } from '../models/pr-newswire-news-details';
import { PrNewswireFilter } from '../models/pr-newswire-filter';
import { PrNewswireRelease } from '../models/pr-newswire-release';

@Injectable({
  providedIn: 'root',
})
export class PrnewswireService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation prNewswirecontrollerPrNewswireQuery
   */
  static readonly PrNewswirecontrollerPrNewswireQueryPath = '/api/prnewswire';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prNewswirecontrollerPrNewswireQuery()` instead.
   *
   * This method doesn't expect any request body.
   */
  prNewswirecontrollerPrNewswireQuery$Response(params: {
    subject: string;
    industry: string;
    from: number;
    size: number;
    keyword?: string;
    ticker?: string;
    startDate?: string;
    exchange?: string;
  }): Observable<StrictHttpResponse<Array<PrNewswireNewsDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, PrnewswireService.PrNewswirecontrollerPrNewswireQueryPath, 'get');
    if (params) {
      rb.query('subject', params.subject, {});
      rb.query('industry', params.industry, {});
      rb.query('from', params.from, {});
      rb.query('size', params.size, {});
      rb.query('keyword', params.keyword, {});
      rb.query('ticker', params.ticker, {});
      rb.query('startDate', params.startDate, {});
      rb.query('exchange', params.exchange, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PrNewswireNewsDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prNewswirecontrollerPrNewswireQuery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prNewswirecontrollerPrNewswireQuery(params: {
    subject: string;
    industry: string;
    from: number;
    size: number;
    keyword?: string;
    ticker?: string;
    startDate?: string;
    exchange?: string;
  }): Observable<Array<PrNewswireNewsDetails>> {

    return this.prNewswirecontrollerPrNewswireQuery$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PrNewswireNewsDetails>>) => r.body as Array<PrNewswireNewsDetails>)
    );
  }

  /**
   * Path part for operation prNewswirecontrollerPrNewswireSaveFilter
   */
  static readonly PrNewswirecontrollerPrNewswireSaveFilterPath = '/api/prnewswire';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prNewswirecontrollerPrNewswireSaveFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  prNewswirecontrollerPrNewswireSaveFilter$Response(params: {
    body: PrNewswireFilter
  }): Observable<StrictHttpResponse<PrNewswireFilter>> {

    const rb = new RequestBuilder(this.rootUrl, PrnewswireService.PrNewswirecontrollerPrNewswireSaveFilterPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PrNewswireFilter>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prNewswirecontrollerPrNewswireSaveFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  prNewswirecontrollerPrNewswireSaveFilter(params: {
    body: PrNewswireFilter
  }): Observable<PrNewswireFilter> {

    return this.prNewswirecontrollerPrNewswireSaveFilter$Response(params).pipe(
      map((r: StrictHttpResponse<PrNewswireFilter>) => r.body as PrNewswireFilter)
    );
  }

  /**
   * Path part for operation prNewswirecontrollerPrNewswireDeleteFilter
   */
  static readonly PrNewswirecontrollerPrNewswireDeleteFilterPath = '/api/prnewswire';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prNewswirecontrollerPrNewswireDeleteFilter()` instead.
   *
   * This method doesn't expect any request body.
   */
  prNewswirecontrollerPrNewswireDeleteFilter$Response(params?: {
  }): Observable<StrictHttpResponse<PrNewswireFilter>> {

    const rb = new RequestBuilder(this.rootUrl, PrnewswireService.PrNewswirecontrollerPrNewswireDeleteFilterPath, 'delete');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PrNewswireFilter>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prNewswirecontrollerPrNewswireDeleteFilter$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prNewswirecontrollerPrNewswireDeleteFilter(params?: {
  }): Observable<PrNewswireFilter> {

    return this.prNewswirecontrollerPrNewswireDeleteFilter$Response(params).pipe(
      map((r: StrictHttpResponse<PrNewswireFilter>) => r.body as PrNewswireFilter)
    );
  }

  /**
   * Path part for operation prNewswirecontrollerPrNewswireGetFilters
   */
  static readonly PrNewswirecontrollerPrNewswireGetFiltersPath = '/api/prnewswire/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prNewswirecontrollerPrNewswireGetFilters()` instead.
   *
   * This method doesn't expect any request body.
   */
  prNewswirecontrollerPrNewswireGetFilters$Response(params?: {
  }): Observable<StrictHttpResponse<PrNewswireFilter>> {

    const rb = new RequestBuilder(this.rootUrl, PrnewswireService.PrNewswirecontrollerPrNewswireGetFiltersPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PrNewswireFilter>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prNewswirecontrollerPrNewswireGetFilters$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prNewswirecontrollerPrNewswireGetFilters(params?: {
  }): Observable<PrNewswireFilter> {

    return this.prNewswirecontrollerPrNewswireGetFilters$Response(params).pipe(
      map((r: StrictHttpResponse<PrNewswireFilter>) => r.body as PrNewswireFilter)
    );
  }

  /**
   * Path part for operation prNewswirecontrollerPrNewswireGetRelease
   */
  static readonly PrNewswirecontrollerPrNewswireGetReleasePath = '/api/prnewswire/release/{releaseId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `prNewswirecontrollerPrNewswireGetRelease()` instead.
   *
   * This method doesn't expect any request body.
   */
  prNewswirecontrollerPrNewswireGetRelease$Response(params: {
    releaseId: string;
  }): Observable<StrictHttpResponse<PrNewswireRelease>> {

    const rb = new RequestBuilder(this.rootUrl, PrnewswireService.PrNewswirecontrollerPrNewswireGetReleasePath, 'get');
    if (params) {
      rb.path('releaseId', params.releaseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PrNewswireRelease>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `prNewswirecontrollerPrNewswireGetRelease$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  prNewswirecontrollerPrNewswireGetRelease(params: {
    releaseId: string;
  }): Observable<PrNewswireRelease> {

    return this.prNewswirecontrollerPrNewswireGetRelease$Response(params).pipe(
      map((r: StrictHttpResponse<PrNewswireRelease>) => r.body as PrNewswireRelease)
    );
  }

}
