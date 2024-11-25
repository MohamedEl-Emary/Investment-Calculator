import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { ResultsComponent } from "./results/results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, ResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  resultsData = signal<{year: number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment: number,
      totalInterest: number,
      totalAmountInvested: number}[]
     | undefined>(undefined);
// resultsData? :{year: number,
//   interest: number,
//   valueEndOfYear: number,
//   annualInvestment: number,
//   totalInterest: number,
//   totalAmountInvested: number}[];

  calculateInvestmentResults(data: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  }) {
    const annualData = [];
    const{ initialInvestment, annualInvestment, expectedReturn, duration } = data;
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultsData.set(annualData);
    console.log(annualData);
  }
}
