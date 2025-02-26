import { FieldError } from "react-hook-form";
import { getInputStyles, getSpanStyles } from "../utils/getStyles";

type Props = {
  label: string;
  name: "amount" | "term" | "rate";
  position: "left" | "right";
  spanText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  error: FieldError | undefined;
  step?: string;
};

const Input = ({
  label,
  position,
  spanText,
  register,
  error,
  name,
  step,
}: Props) => {
  const { positionSpanStyle, spanStylesIfError } = getSpanStyles({
    position,
    error,
  });

  const { inputPaddingStyle, inputStylesIfError } = getInputStyles({
    position,
    error,
  });

  return (
    <div className="flex flex-col gap-1 xl:gap-3">
      <label
        className="flex flex-col text-slate-500 text-[.9rem] gap-2 relative group 
        md:text-[1.1rem] md:gap-3 xl:text-[.95rem]"
      >
        {label}
        <input
          {...register}
          className={`w-full border-[1px] rounded border-slate-700 py-2 text-slate-900
          focus:outline-none transition-all 
          font-bold ${inputPaddingStyle} text-[1rem] md:text-[1.3rem]
          ${inputStylesIfError}`}
          type="number"
          name={name}
          step={step}
        />
        <span
          className={`flex items-center justify-center bg-slate-100 w-max text-slate-700 
          font-bold px-4 absolute h-[42px] top-[1.85rem] transition-colors border-[1px] border-slate-700
          ${positionSpanStyle} md:h-[49px] ${spanStylesIfError}`}
        >
          {spanText}
        </span>
      </label>
      {error && (
        <p role="alert" className="text-Red font-bold text-[.8rem]">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Input;
