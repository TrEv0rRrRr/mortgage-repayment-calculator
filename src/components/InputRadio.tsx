import { UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { FormInput } from "../types/FormInput";

type Props = {
  label: string;
  selectedValue?: string;
  setValue: UseFormSetValue<FormInput>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  trigger?: UseFormTrigger<FormInput>;
};

const InputRadio = ({ label, selectedValue, setValue, register }: Props) => {
  const isChecked = selectedValue === label;

  const handleCheck = () => {
    setValue("mortgageType", label, { shouldValidate: true });
  };

  return (
    <>
      <div
        className={`flex flex-row w-full rounded border-[1px] py-2 px-4 hover:border-Lime transition-all cursor-pointer ${
          isChecked ? "bg-Lime/15 border-Lime" : ""
        }`}
        onClick={handleCheck}
      >
        <label className="flex flex-row-reverse items-center gap-3 font-bold relative md:text-[1.2rem]">
          {label}
          <input
            className="hidden peer"
            type="radio"
            name="mortgageType"
            value={label}
            checked={isChecked}
            {...register}
            readOnly
          />
          <div className="w-5 h-5 border-2 border-slate-700 rounded-full peer-checked:border-Lime " />
          <div className="w-2.5 h-2.5 left-[5px] bg-Lime rounded-full scale-0 peer-checked:scale-100 transition-all absolute" />
        </label>
      </div>
    </>
  );
};

export default InputRadio;
