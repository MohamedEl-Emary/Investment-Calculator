import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  @Input() results?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[];
}
