import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TickerDetailsResponse } from 'src/app/generated/models/ticker-details-response';
import { NewsService } from 'src/app/generated/services/news.service';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
    selector: 'app-ticker-info',
    templateUrl: './ticker-info.component.html',
    styleUrls: ['./ticker-info.component.scss']
})
export class TickerInfoComponent implements OnInit {

    ticker: string;
    tickerInfo: TickerDetailsResponse;
    companyFinances = {
      accountsPayable: 0,
      cash: 0,
      netIncome: 0,
      assets: 0,
      accountsReceivable: 0,
      retainedEarnings: 0,
      stockholdersEquity: 0,
      marketableSecurities: 0,
      inventoryNet: 0,
      nontradeReceivablesCurrent: 0,
      otherAssetsCurrent: 0,
      marketableSecuritiesNoncurrent: 0,
      propertyPlantAndEquipmentNet: 0,
      otherAssetsNoncurrent: 0,
      assetsNoncurrent: 0,
      otherLiabilitiesCurrent: 0,
      contractWithCustomerLiabilityCurrent: 0,
      commercialPaper: 0,
      longTermDebtCurrent: 0,
      liabilitiesCurrent: 0,
      longTermDebtNoncurrent: 0,
      otherLiabilitiesNoncurrent: 0,
      liabilitiesNoncurrent: 0,
      commitmentsAndContingencies: 0,
      retainedEarningsAccumulatedDeficit: 0,
      depreciationDepletionAndAmortization: 0,
      deferredIncomeTaxExpenseBenefit: 0,
      otherNoncashIncomeExpense: 0,
      netCashProvidedByUsedInOperatingActivities: 0,
      netCashProvidedByUsedInInvestingActivities: 0,
    };

    constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService, private sanitizer: DomSanitizer) {
        if (this.activatedRoute.snapshot.params && this.activatedRoute.snapshot.params.ticker) {
            this.ticker = this.activatedRoute.snapshot.params.ticker;
        }
    }

    async ngOnInit(): Promise<void> {
        await this.getTickerInfo();
    }

    sanitize(description: string): SafeHtml{
      return this.sanitizer.bypassSecurityTrustHtml(description);
    }


    async getTickerInfo(): Promise<void> {
        try {
            const news = await this.newsService.newsControllerGetTickerDetailsForWebsite({ticker: this.ticker}).toPromise();
            this.tickerInfo = news;
            console.log(this.tickerInfo);
            const finances = this.tickerInfo.financialsAsReported.data[0];
            const accountsPayable = finances.report.bs.find(b => b.concept === 'AccountsPayableCurrent');
            this.companyFinances.accountsPayable = accountsPayable.value;
            const cash = finances.report.bs.find(b => b.concept === 'CashAndCashEquivalentsAtCarryingValue');
            this.companyFinances.cash = cash.value;
            const netIncome = finances.report.cf.find(b => b.concept === 'NetIncomeLoss');
            this.companyFinances.netIncome = netIncome.value;
            const assets = finances.report.bs.find(b => b.concept === 'Assets');
            this.companyFinances.assets = assets.value;
            const accountsReceivable = finances.report.bs.find(b => b.concept === 'AccountsReceivableNetCurrent');
            this.companyFinances.accountsReceivable = accountsReceivable.value;
            const retainedEarnings = finances.report.bs.find(b => b.concept === 'RetainedEarningsAccumulatedDeficit');
            this.companyFinances.retainedEarnings = retainedEarnings.value;
            const stockholdersEquity = finances.report.bs.find(b => b.concept === 'StockholdersEquity');
            this.companyFinances.stockholdersEquity = stockholdersEquity.value;
            const marketableSecurities = finances.report.bs.find(b => b.concept === 'MarketableSecuritiesCurrent');
            this.companyFinances.marketableSecurities = marketableSecurities.value;
            const inventoryNet = finances.report.bs.find(b => b.concept === 'InventoryNet');
            this.companyFinances.inventoryNet = inventoryNet.value;
            const nontradeReceivablesCurrent = finances.report.bs.find(b => b.concept === 'NontradeReceivablesCurrent');
            this.companyFinances.nontradeReceivablesCurrent = nontradeReceivablesCurrent.value;
            const otherAssetsCurrent = finances.report.bs.find(b => b.concept === 'OtherAssetsCurrent');
            this.companyFinances.otherAssetsCurrent = otherAssetsCurrent.value;
            const marketableSecuritiesNoncurrent = finances.report.bs.find(b => b.concept === 'MarketableSecuritiesNoncurrent');
            this.companyFinances.marketableSecuritiesNoncurrent = marketableSecuritiesNoncurrent.value;
            const propertyPlantAndEquipmentNet = finances.report.bs.find(b => b.concept === 'PropertyPlantAndEquipmentNet');
            this.companyFinances.propertyPlantAndEquipmentNet = propertyPlantAndEquipmentNet.value;
            const otherAssetsNoncurrent = finances.report.bs.find(b => b.concept === 'OtherAssetsNoncurrent');
            this.companyFinances.otherAssetsNoncurrent = otherAssetsNoncurrent.value;
            const assetsNoncurrent = finances.report.bs.find(b => b.concept === 'AssetsNoncurrent');
            this.companyFinances.assetsNoncurrent = assetsNoncurrent.value;
            const otherLiabilitiesCurrent = finances.report.bs.find(b => b.concept === 'OtherLiabilitiesCurrent');
            this.companyFinances.otherLiabilitiesCurrent = otherLiabilitiesCurrent.value;
            const contractWithCustomerLiabilityCurrent = finances.report.bs.find(b => b.concept === 'ContractWithCustomerLiabilityCurrent');
            this.companyFinances.contractWithCustomerLiabilityCurrent = contractWithCustomerLiabilityCurrent.value;
            const commercialPaper = finances.report.bs.find(b => b.concept === 'CommercialPaper');
            this.companyFinances.commercialPaper = commercialPaper.value;
            const longTermDebtCurrent = finances.report.bs.find(b => b.concept === 'LongTermDebtCurrent');
            this.companyFinances.longTermDebtCurrent = longTermDebtCurrent.value;
            const liabilitiesCurrent = finances.report.bs.find(b => b.concept === 'LiabilitiesCurrent');
            this.companyFinances.liabilitiesCurrent = liabilitiesCurrent.value;
            const longTermDebtNoncurrent = finances.report.bs.find(b => b.concept === 'LongTermDebtNoncurrent');
            this.companyFinances.longTermDebtNoncurrent = longTermDebtNoncurrent.value;
            const otherLiabilitiesNoncurrent = finances.report.bs.find(b => b.concept === 'OtherLiabilitiesNoncurrent');
            this.companyFinances.otherLiabilitiesNoncurrent = otherLiabilitiesNoncurrent.value;
            const liabilitiesNoncurrent = finances.report.bs.find(b => b.concept === 'LiabilitiesNoncurrent');
            this.companyFinances.liabilitiesNoncurrent = liabilitiesNoncurrent.value;
            const commitmentsAndContingencies = finances.report.bs.find(b => b.concept === 'CommitmentsAndContingencies');
            this.companyFinances.commitmentsAndContingencies = commitmentsAndContingencies.value;
          const retainedEarningsAccumulatedDeficit = finances.report.bs.find(b => b.concept === 'RetainedEarningsAccumulatedDeficit');
          this.companyFinances.retainedEarningsAccumulatedDeficit = retainedEarningsAccumulatedDeficit.value;
          const depreciationDepletionAndAmortization = finances.report.cf.find(b => b.concept === 'DepreciationDepletionAndAmortization');
          this.companyFinances.depreciationDepletionAndAmortization = depreciationDepletionAndAmortization.value;
          const deferredIncomeTaxExpenseBenefit = finances.report.cf.find(b => b.concept === 'DeferredIncomeTaxExpenseBenefit');
          this.companyFinances.deferredIncomeTaxExpenseBenefit = deferredIncomeTaxExpenseBenefit.value;
          const otherNoncashIncomeExpense = finances.report.cf.find(b => b.concept === 'OtherNoncashIncomeExpense');
          this.companyFinances.otherNoncashIncomeExpense = otherNoncashIncomeExpense.value;
          const netCashProvidedByUsedInOperatingActivities = finances.report.cf.find(b => b.concept === 'NetCashProvidedByUsedInOperatingActivities');
          this.companyFinances.netCashProvidedByUsedInOperatingActivities = netCashProvidedByUsedInOperatingActivities.value;
          const netCashProvidedByUsedInInvestingActivities = finances.report.cf.find(b => b.concept === 'NetCashProvidedByUsedInInvestingActivities');
          this.companyFinances.netCashProvidedByUsedInInvestingActivities = netCashProvidedByUsedInInvestingActivities.value;

        } catch (error) {
            console.log(error);
            alert('An error has occurred, please contact support');
        }
    }

    calcSentimentLabel(sentiment: number): string {
      if(sentiment >= 0.6){
        return 'Positive';
      } else if (sentiment < 0){
        return 'Negative';
      }
      return 'Neutral';
    }

    calcSentimentColor(sentiment: number): string {
      if(sentiment >= 0.6){
      return 'green-badge';
      } else if (sentiment < 0){
      return 'red-badge';
      }
      return 'gray-badge';
    }
}

