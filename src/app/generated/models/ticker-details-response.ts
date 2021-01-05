/* tslint:disable */
/* eslint-disable */
import { News } from './news';
import { TickerDetailsCompanyInfo } from './ticker-details-company-info';
import { TickerDetailsFinancialsAsReported } from './ticker-details-financials-as-reported';
import { TickerDetailsFinviz } from './ticker-details-finviz';
import { TickerDetailsOtherTickerNews } from './ticker-details-other-ticker-news';
import { TickerDetailsSecFilings } from './ticker-details-sec-filings';
import { TickerDetailsSentiment } from './ticker-details-sentiment';
export interface TickerDetailsResponse {
  companyInfo: TickerDetailsCompanyInfo;
  companySentiment: TickerDetailsSentiment;
  financialsAsReported: TickerDetailsFinancialsAsReported;
  finvizAnnual: TickerDetailsFinviz;
  finvizQuarterly: TickerDetailsFinviz;
  latestCompanyNews: Array<News>;
  otherTickerNews: TickerDetailsOtherTickerNews;
  secFilings: Array<TickerDetailsSecFilings>;
}
