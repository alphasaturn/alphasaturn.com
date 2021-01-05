/* tslint:disable */
/* eslint-disable */
import { TickerDetailsSentimentBuzz } from './ticker-details-sentiment-buzz';
import { TickerDetailsSentimentScores } from './ticker-details-sentiment-scores';
export interface TickerDetailsSentiment {
  buzz: TickerDetailsSentimentBuzz;
  companyNewsScore: number;
  sectorAverageBullishPercent: number;
  sectorAverageNewsScore: number;
  sentiment: TickerDetailsSentimentScores;
  symbol: string;
}
