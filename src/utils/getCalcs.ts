import { FormInput } from "../types/FormInput";

interface RepaymentResult {
  monthlyPayment: number;
  totalRepayment: number;
}

interface InterestOnlyResult {
  monthlyInterest: number;
  totalInterest: number;
}

/**
 * Calculates the monthly mortgage repayment and total repayment amount.
 *
 * @param {FormInput} data - The input data for the mortgage calculation.
 * @param {number} data.amount - The loan amount.
 * @param {number} data.rate - The annual interest rate (percentage).
 * @param {number} data.term - The loan term in years.
 * @returns {RepaymentResult} The result of the mortgage calculation.
 * @returns {number} MortgageResult.monthlyPayment - The monthly repayment amount.
 * @returns {number} MortgageResult.totalRepayment - The total repayment amount over the term.
 */
export const calculateRepaymentMortgage = (
  data: FormInput
): RepaymentResult => {
  const monthlyRate = data?.rate / 100 / 12;
  const totalPayments = data?.term * 12;

  const monthlyPayment =
    (data?.amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -totalPayments));

  const totalRepayment = monthlyPayment * totalPayments;

  return {
    monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
    totalRepayment: parseFloat(totalRepayment.toFixed(2)),
  };
};

/**
 * Calculates the monthly payment and total repayment for an interest-only mortgage.
 *
 * @param {FormInput} data - The input data for the mortgage calculation.
 * @param {number} data.amount - The principal loan amount.
 * @param {number} data.rate - The annual interest rate (percentage).
 * @param {number} data.term - The term of the loan in years.
 *
 * @returns {InterestOnlyResult} An object containing the monthly payment and total repayment.
 * @returns {number} MortgageResult.monthlyPayment - The monthly payment amount.
 * @returns {number} MortgageResult.totalRepayment - The total repayment amount over the term of the loan.
 */
export const calculateInterestOnlyMortgage = (
  data: FormInput
): InterestOnlyResult => {
  const monthlyInterest = (data?.amount * (data?.rate / 100)) / 12;
  const totalInterest = monthlyInterest * data?.term * 12;

  return {
    monthlyInterest: parseFloat(monthlyInterest.toFixed(2)),
    totalInterest: parseFloat(totalInterest.toFixed(2)),
  };
};
