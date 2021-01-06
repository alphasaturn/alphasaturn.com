import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TickerDetailsResponse } from 'src/app/generated/models/ticker-details-response';
import { NewsService } from 'src/app/generated/services/news.service';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import Swal from 'sweetalert2'

@Component({
    selector: 'app-ticker-info',
    templateUrl: './ticker-info.component.html',
    styleUrls: ['./ticker-info.component.scss']
})
export class TickerInfoComponent implements OnInit, AfterViewInit {

    loading: boolean = false;
    ticker: string;
    tickerInfo: TickerDetailsResponse;
    companyFinances = {
        accountsPayable: null,
        cash: null,
        netIncome: null,
        assets: null,
        accountsReceivable: null,
        retainedEarnings: null,
        stockholdersEquity: null,
        marketableSecurities: null,
        inventoryNet: null,
        nontradeReceivablesCurrent: null,
        otherAssetsCurrent: null,
        marketableSecuritiesNoncurrent: null,
        propertyPlantAndEquipmentNet: null,
        otherAssetsNoncurrent: null,
        assetsNoncurrent: null,
        otherLiabilitiesCurrent: null,
        contractWithCustomerLiabilityCurrent: null,
        commercialPaper: null,
        longTermDebtCurrent: null,
        liabilitiesCurrent: null,
        longTermDebtNoncurrent: null,
        otherLiabilitiesNoncurrent: null,
        liabilitiesNoncurrent: null,
        commitmentsAndContingencies: null,
        retainedEarningsAccumulatedDeficit: null,
        depreciationDepletionAndAmortization: null,
        deferredIncomeTaxExpenseBenefit: null,
        otherNoncashIncomeExpense: null,
        netCashProvidedByUsedInOperatingActivities: null,
        netCashProvidedByUsedInInvestingActivities: null,
        cashAndCashEquivalentsAtCarryingValue: null,
    };

    constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService, private sanitizer: DomSanitizer, private elementRef: ElementRef, private router: Router) {
        if (this.activatedRoute.snapshot.params && this.activatedRoute.snapshot.params.ticker) {
            this.ticker = this.activatedRoute.snapshot.params.ticker;
        }
    }

    async ngOnInit(): Promise<void> {
        await this.getTickerInfo();
    }

    ngAfterViewInit(): void {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.innerHTML = `
        STWT.Widget({container: 'stocktwits-widget-news', height: '800', symbol: '${this.ticker}', limit: '25', scrollbars: 'true', streaming: 'true', title: '${this.ticker} Ideas', style: {link_color: '4871a8', link_hover_color: '4871a8', header_text_color: '000000', border_color: 'cecece', divider_color: 'cecece', divider_color: 'cecece', divider_type: 'solid', box_color: 'f5f5f5', stream_color: 'ffffff', text_color: '000000', time_color: '999999'}});   
        `;
        this.elementRef.nativeElement.append(s);
    }

    sanitize(description: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(description);
    }


    async getTickerInfo(): Promise<void> {
        try {
            this.loading = true;
            const news = await this.newsService.newsControllerGetTickerDetailsForWebsite({ ticker: this.ticker }).toPromise();
            if (!news || news['stack'] || news['name'] === 'Error') {
                throw new Error('Unable to find company information');
            }
            this.tickerInfo = news;
            // console.log(this.tickerInfo);
            if (this.tickerInfo && this.tickerInfo.financialsAsReported && this.tickerInfo.financialsAsReported.data && this.tickerInfo.financialsAsReported.data.length) {
                const finances = this.tickerInfo.financialsAsReported.data[0];
                const cashAndCashEquivalentsAtCarryingValue = finances.report.bs.find(b => b.concept === 'CashAndCashEquivalentsAtCarryingValue');
                this.companyFinances.cashAndCashEquivalentsAtCarryingValue = cashAndCashEquivalentsAtCarryingValue?.value || 'N/A';
                const accountsPayable = finances.report.bs.find(b => b.concept === 'AccountsPayableCurrent');
                this.companyFinances.accountsPayable = accountsPayable?.value || 'N/A';
                const cash = finances.report.bs.find(b => b.concept === 'CashAndCashEquivalentsAtCarryingValue');
                this.companyFinances.cash = cash?.value || 'N/A';
                const netIncome = finances.report.cf.find(b => b.concept === 'NetIncomeLoss');
                this.companyFinances.netIncome = netIncome?.value || 'N/A';
                const assets = finances.report.bs.find(b => b.concept === 'Assets');
                this.companyFinances.assets = assets?.value || 'N/A';
                const accountsReceivable = finances.report.bs.find(b => b.concept === 'AccountsReceivableNetCurrent');
                this.companyFinances.accountsReceivable = accountsReceivable?.value || 'N/A';
                const retainedEarnings = finances.report.bs.find(b => b.concept === 'RetainedEarningsAccumulatedDeficit');
                this.companyFinances.retainedEarnings = retainedEarnings?.value || 'N/A';
                const stockholdersEquity = finances.report.bs.find(b => b.concept === 'StockholdersEquity');
                this.companyFinances.stockholdersEquity = stockholdersEquity?.value || 'N/A';
                const marketableSecurities = finances.report.bs.find(b => b.concept === 'MarketableSecuritiesCurrent');
                this.companyFinances.marketableSecurities = marketableSecurities?.value || 'N/A';
                const inventoryNet = finances.report.bs.find(b => b.concept === 'InventoryNet');
                this.companyFinances.inventoryNet = inventoryNet?.value || 'N/A';
                const nontradeReceivablesCurrent = finances.report.bs.find(b => b.concept === 'NontradeReceivablesCurrent');
                this.companyFinances.nontradeReceivablesCurrent = nontradeReceivablesCurrent?.value || 'N/A';
                const otherAssetsCurrent = finances.report.bs.find(b => b.concept === 'OtherAssetsCurrent');
                this.companyFinances.otherAssetsCurrent = otherAssetsCurrent?.value || 'N/A';
                const marketableSecuritiesNoncurrent = finances.report.bs.find(b => b.concept === 'MarketableSecuritiesNoncurrent');
                this.companyFinances.marketableSecuritiesNoncurrent = marketableSecuritiesNoncurrent?.value || 'N/A';
                const propertyPlantAndEquipmentNet = finances.report.bs.find(b => b.concept === 'PropertyPlantAndEquipmentNet');
                this.companyFinances.propertyPlantAndEquipmentNet = propertyPlantAndEquipmentNet?.value || 'N/A';
                const otherAssetsNoncurrent = finances.report.bs.find(b => b.concept === 'OtherAssetsNoncurrent');
                this.companyFinances.otherAssetsNoncurrent = otherAssetsNoncurrent?.value || 'N/A';
                const assetsNoncurrent = finances.report.bs.find(b => b.concept === 'AssetsNoncurrent');
                this.companyFinances.assetsNoncurrent = assetsNoncurrent?.value || 'N/A';
                const otherLiabilitiesCurrent = finances.report.bs.find(b => b.concept === 'OtherLiabilitiesCurrent');
                this.companyFinances.otherLiabilitiesCurrent = otherLiabilitiesCurrent?.value || 'N/A';
                const contractWithCustomerLiabilityCurrent = finances.report.bs.find(b => b.concept === 'ContractWithCustomerLiabilityCurrent');
                this.companyFinances.contractWithCustomerLiabilityCurrent = contractWithCustomerLiabilityCurrent?.value || 'N/A';
                const commercialPaper = finances.report.bs.find(b => b.concept === 'CommercialPaper');
                this.companyFinances.commercialPaper = commercialPaper?.value || 'N/A';
                const longTermDebtCurrent = finances.report.bs.find(b => b.concept === 'LongTermDebtCurrent');
                this.companyFinances.longTermDebtCurrent = longTermDebtCurrent?.value || 'N/A';
                const liabilitiesCurrent = finances.report.bs.find(b => b.concept === 'LiabilitiesCurrent');
                this.companyFinances.liabilitiesCurrent = liabilitiesCurrent?.value || 'N/A';
                const longTermDebtNoncurrent = finances.report.bs.find(b => b.concept === 'LongTermDebtNoncurrent');
                this.companyFinances.longTermDebtNoncurrent = longTermDebtNoncurrent?.value || 'N/A';
                const otherLiabilitiesNoncurrent = finances.report.bs.find(b => b.concept === 'OtherLiabilitiesNoncurrent');
                this.companyFinances.otherLiabilitiesNoncurrent = otherLiabilitiesNoncurrent?.value || 'N/A';
                const liabilitiesNoncurrent = finances.report.bs.find(b => b.concept === 'LiabilitiesNoncurrent');
                this.companyFinances.liabilitiesNoncurrent = liabilitiesNoncurrent?.value || 'N/A';
                const commitmentsAndContingencies = finances.report.bs.find(b => b.concept === 'CommitmentsAndContingencies');
                this.companyFinances.commitmentsAndContingencies = commitmentsAndContingencies?.value || 'N/A';
                const retainedEarningsAccumulatedDeficit = finances.report.bs.find(b => b.concept === 'RetainedEarningsAccumulatedDeficit');
                this.companyFinances.retainedEarningsAccumulatedDeficit = retainedEarningsAccumulatedDeficit?.value || 'N/A';
                const depreciationDepletionAndAmortization = finances.report.cf.find(b => b.concept === 'DepreciationDepletionAndAmortization');
                this.companyFinances.depreciationDepletionAndAmortization = depreciationDepletionAndAmortization?.value || 'N/A';
                const deferredIncomeTaxExpenseBenefit = finances.report.cf.find(b => b.concept === 'DeferredIncomeTaxExpenseBenefit');
                this.companyFinances.deferredIncomeTaxExpenseBenefit = deferredIncomeTaxExpenseBenefit?.value || 'N/A';
                const otherNoncashIncomeExpense = finances.report.cf.find(b => b.concept === 'OtherNoncashIncomeExpense');
                this.companyFinances.otherNoncashIncomeExpense = otherNoncashIncomeExpense?.value || 'N/A';
                const netCashProvidedByUsedInOperatingActivities = finances.report.cf.find(b => b.concept === 'NetCashProvidedByUsedInOperatingActivities');
                this.companyFinances.netCashProvidedByUsedInOperatingActivities = netCashProvidedByUsedInOperatingActivities?.value || 'N/A';
                const netCashProvidedByUsedInInvestingActivities = finances.report.cf.find(b => b.concept === 'NetCashProvidedByUsedInInvestingActivities');
                this.companyFinances.netCashProvidedByUsedInInvestingActivities = netCashProvidedByUsedInInvestingActivities?.value || 'N/A';
            }
            this.loading = false;
        } catch (error) {
            console.log(error);
            this.loading = false;
            await Swal.fire('Error', `We were unable to find company information for ticker ${this.ticker}. Please try again later.`, 'error')
            this.router.navigate(['/news']);
            // alert('An error has occurred, please contact support');
        }
    }

    calcSentimentLabel(sentiment: number): string {
        if (sentiment >= 0.6) {
            return 'Positive';
        } else if (sentiment < 0) {
            return 'Negative';
        }
        return 'Neutral';
    }

    calcSentimentColor(sentiment: number): string {
        if (sentiment >= 0.6) {
            return 'green-badge';
        } else if (sentiment < 0) {
            return 'red-badge';
        }
        return 'gray-badge';
    }

}

