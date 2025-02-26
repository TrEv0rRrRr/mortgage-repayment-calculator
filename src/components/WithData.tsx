import { FormInput } from "../types/FormInput";
import formattedNumber from "../utils/formattedNumber";

import {
  calculateInterestOnlyMortgage,
  calculateRepaymentMortgage,
} from "../utils/getCalcs";

interface Props {
  data: FormInput;
}

const WithData = ({ data }: Props) => {
  const { monthlyPayment, totalRepayment } = calculateRepaymentMortgage(data);

  const { monthlyInterest, totalInterest } =
    calculateInterestOnlyMortgage(data);

  return (
    <header className="flex flex-col items-center justify-center gap-6 bg-slate-900 text-white xl:rounded-bl-[5rem] xl:w-1/2 py-8 md:py-10 xl:px-12 xl:justify-normal xl:gap-10">
      <div className="flex flex-col text-start gap-3">
        <h2 className="text-[21px] font-bold md:text-[25.5px]">Your results</h2>
        <p className="text-slate-500 text-[.9rem] md:text-[1.1rem] xl:text-[1rem]">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
      </div>
      <div className="flex flex-col bg-[#0E2532] gap-4 p-5 rounded-xl border-t-Lime border-t-[3px] w-[19.5rem] xl:w-[27rem] xl:gap-7 xl:p-8">
        <div className="flex flex-col gap-2 xl:gap-4">
          <p className="text-slate-500 text-[.9rem] xl:text-[.98rem]">
            Your monthly repayments
          </p>
          <span className="font-bold text-Lime text-3xl xl:text-[3.5rem]">
            £
            {data.mortgageType === "Repayment"
              ? formattedNumber(monthlyPayment)
              : formattedNumber(monthlyInterest)}
          </span>
        </div>
        <hr className="border-slate-500/30" />
        <div className="flex flex-col gap-2 xl:gap-4">
          <p className="text-slate-500 text-[.9rem] xl:text-[.98rem]">
            Total you'll repay over the term
          </p>
          <span className="font-bold text-xl xl:text-2xl">
            £
            {data.mortgageType === "Repayment"
              ? formattedNumber(totalRepayment)
              : formattedNumber(totalInterest)}
          </span>
        </div>
      </div>
    </header>
  );
};

export default WithData;
