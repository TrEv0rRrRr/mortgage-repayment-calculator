import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "../types/FormInput";
import Input from "./Input";
import InputRadio from "./InputRadio";
import CalculatorIcon from "/icon-calculator.svg";

interface Props {
  onSubmit: (data: FormInput) => void;
  setReset: (reset: () => void) => void;
}

const Form = ({ onSubmit, setReset }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm<FormInput>({
    mode: "onBlur",
  });

  const selectedValue = watch("mortgageType");
  useEffect(() => {
    setReset(() => reset);
  }, [reset, setReset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-5 w-full xl:h-full flex-grow overflow-auto transition-all duration-300"
    >
      <div className="flex flex-col w-full gap-5">
        <Input
          register={register("amount", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Amount must be greater than 0",
            },
            max: {
              value: 10000000,
              message: "Amount must be less than £10,000,000",
            },
          })}
          error={errors.amount}
          label="Mortgage Amount"
          name="amount"
          position="left"
          spanText="£"
        />
        <div className="flex flex-col gap-5 xl:flex-row xl:gap-8 xl:flex-grow">
          <Input
            register={register("term", {
              required: "This field is required",
              min: {
                value: 1,
                message: "Term must be at least 1 year",
              },
              max: {
                value: 40,
                message: "Term must be less than 40 years",
              },
            })}
            error={errors.term}
            label="Mortgage Term"
            name="term"
            position="right"
            spanText="years"
          />
          <Input
            register={register("rate", {
              required: "This field is required",
              min: {
                value: 0.1,
                message: "Rate must be at least 0.1%",
              },
              max: {
                value: 15,
                message: "Rate must be less than 15%",
              },
            })}
            error={errors.rate}
            label="Mortgage Rate"
            name="rate"
            position="right"
            spanText="%"
            step="0.01"
          />
        </div>
      </div>

      <fieldset className="flex flex-col items-start w-full">
        <legend className="text-slate-500 text-[.9rem] mb-2 md:text-[1.1rem] md:mb-3 xl:text-[.95rem]">
          Mortgage Type
        </legend>
        <div className="flex flex-col gap-3 w-full">
          <InputRadio
            label="Repayment"
            selectedValue={selectedValue}
            setValue={setValue}
            register={register("mortgageType", {
              required: "This field is required",
            })}
          />
          <InputRadio
            label="Interest Only"
            selectedValue={selectedValue}
            setValue={setValue}
            register={register("mortgageType", {
              required: "This field is required",
            })}
          />
        </div>
        {errors.mortgageType && (
          <p role="alert" className="text-Red font-bold mt-3 text-[.8rem]">
            {errors.mortgageType.message}
          </p>
        )}
      </fieldset>
      <button
        className="flex flex-row bg-Lime rounded-4xl px-6 py-3 font-bold gap-2 
        items-center w-full justify-center hover:bg-Lime/40 cursor-pointer
        md:text-[1.3rem] xl:w-auto xl:px-10 xl:text-[1.2rem] xl:mt-4"
        type="submit"
      >
        <img className="w-5 h-5" src={CalculatorIcon} alt="" aria-hidden />
        Calculate Repayments
      </button>
    </form>
  );
};

export default Form;
