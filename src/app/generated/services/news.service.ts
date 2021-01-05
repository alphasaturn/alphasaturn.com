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

import { News } from '../models/news';
import { PageRequest } from '../models/page-request';
import { TickerDetailsResponse } from '../models/ticker-details-response';

@Injectable({
  providedIn: 'root',
})
export class NewsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation newsControllerGetLatestNewsForWebsite
   */
  static readonly NewsControllerGetLatestNewsForWebsitePath = '/api/news/website';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newsControllerGetLatestNewsForWebsite()` instead.
   *
   * This method doesn't expect any request body.
   */
  newsControllerGetLatestNewsForWebsite$Response(params?: {
    source?: string;
  }): Observable<StrictHttpResponse<Array<News>>> {

    const rb = new RequestBuilder(this.rootUrl, NewsService.NewsControllerGetLatestNewsForWebsitePath, 'get');
    if (params) {
      rb.query('source', params.source, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<News>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `newsControllerGetLatestNewsForWebsite$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  newsControllerGetLatestNewsForWebsite(params?: {
    source?: string;
  }): Observable<Array<News>> {

    return this.newsControllerGetLatestNewsForWebsite$Response(params).pipe(
      map((r: StrictHttpResponse<Array<News>>) => r.body as Array<News>)
    );
  }

  /**
   * Path part for operation newsControllerGetTickerDetailsForWebsite
   */
  static readonly NewsControllerGetTickerDetailsForWebsitePath = '/api/news/website/ticker/{ticker}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newsControllerGetTickerDetailsForWebsite()` instead.
   *
   * This method doesn't expect any request body.
   */
  newsControllerGetTickerDetailsForWebsite$Response(params: {
    ticker: string;
  }): Observable<StrictHttpResponse<TickerDetailsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NewsService.NewsControllerGetTickerDetailsForWebsitePath, 'get');
    if (params) {
      rb.path('ticker', params.ticker, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TickerDetailsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `newsControllerGetTickerDetailsForWebsite$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  newsControllerGetTickerDetailsForWebsite(params: {
    ticker: string;
  }): Observable<TickerDetailsResponse> {

    return this.newsControllerGetTickerDetailsForWebsite$Response(params).pipe(
      map((r: StrictHttpResponse<TickerDetailsResponse>) => r.body as TickerDetailsResponse)
    );
  }

  /**
   * Path part for operation newsControllerGetLatestNewsForTicker
   */
  static readonly NewsControllerGetLatestNewsForTickerPath = '/api/news/latest/{ticker}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newsControllerGetLatestNewsForTicker()` instead.
   *
   * This method doesn't expect any request body.
   */
  newsControllerGetLatestNewsForTicker$Response(params: {
    ticker: string;
  }): Observable<StrictHttpResponse<Array<News>>> {

    const rb = new RequestBuilder(this.rootUrl, NewsService.NewsControllerGetLatestNewsForTickerPath, 'get');
    if (params) {
      rb.path('ticker', params.ticker, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<News>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `newsControllerGetLatestNewsForTicker$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  newsControllerGetLatestNewsForTicker(params: {
    ticker: string;
  }): Observable<Array<News>> {

    return this.newsControllerGetLatestNewsForTicker$Response(params).pipe(
      map((r: StrictHttpResponse<Array<News>>) => r.body as Array<News>)
    );
  }

  /**
   * Path part for operation newsControllerGetNews
   */
  static readonly NewsControllerGetNewsPath = '/api/news/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newsControllerGetNews()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newsControllerGetNews$Response(params: {
    body: PageRequest
  }): Observable<StrictHttpResponse<Array<News>>> {

    const rb = new RequestBuilder(this.rootUrl, NewsService.NewsControllerGetNewsPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<News>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `newsControllerGetNews$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  newsControllerGetNews(params: {
    body: PageRequest
  }): Observable<Array<News>> {

    return this.newsControllerGetNews$Response(params).pipe(
      map((r: StrictHttpResponse<Array<News>>) => r.body as Array<News>)
    );
  }

  /**
   * Path part for operation newsControllerGetNewsSourceTypes
   */
  static readonly NewsControllerGetNewsSourceTypesPath = '/api/news/source-types';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newsControllerGetNewsSourceTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  newsControllerGetNewsSourceTypes$Response(params?: {
  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, NewsService.NewsControllerGetNewsSourceTypesPath, 'get');
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
   * To access the full response (for headers, for example), `newsControllerGetNewsSourceTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  newsControllerGetNewsSourceTypes(params?: {
  }): Observable<Array<string>> {

    return this.newsControllerGetNewsSourceTypes$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation newsControllerGetKeywordBadgeTypes
   */
  static readonly NewsControllerGetKeywordBadgeTypesPath = '/api/news/keyword-badge-types';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `newsControllerGetKeywordBadgeTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  newsControllerGetKeywordBadgeTypes$Response(params?: {
  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, NewsService.NewsControllerGetKeywordBadgeTypesPath, 'get');
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
   * To access the full response (for headers, for example), `newsControllerGetKeywordBadgeTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  newsControllerGetKeywordBadgeTypes(params?: {
  }): Observable<Array<string>> {

    return this.newsControllerGetKeywordBadgeTypes$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

}
