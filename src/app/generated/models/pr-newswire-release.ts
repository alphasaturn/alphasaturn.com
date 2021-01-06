/* tslint:disable */
/* eslint-disable */
import { PrNewswireReleaseMultiMedia } from './pr-newswire-release-multi-media';
export interface PrNewswireRelease {
  body: string;
  company: Array<string>;
  date: string;
  geography: Array<string>;
  industry: Array<string>;
  language: Array<string>;
  multimedia: Array<PrNewswireReleaseMultiMedia>;
  release_id: string;
  source_company: string;
  subject: Array<string>;
  ticker: Array<string>;
  title: string;
  websiteUrl: Array<string>;
}
