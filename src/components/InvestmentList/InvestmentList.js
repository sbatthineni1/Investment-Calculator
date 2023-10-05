import styles from './InvestmentList.module.css';
import React from 'react';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits : 2,
});

const InvestmentList = (props) => {
  return (
    <div>
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.onReceiveData.map((yearData) => (
            <tr key = {yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearData.yearlyInterest)}</td>
              <td>
                {formatter.format(yearData.savingsEndOfYear -
                  props.intialInvestment -
                  yearData.yearlyContribution * yearData.year)}
              </td>
              {/* TOTAL INTEREST GAINED */}
              <td>
                {formatter.format(props.intialInvestment +
                  yearData.yearlyContribution * yearData.year)}
              </td>
              {/* TOTAL INVESTED CAPITAL*/}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentList;
