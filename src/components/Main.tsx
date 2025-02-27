import { useState } from "react";
import { FormInput } from "../types/FormInput";
import Form from "./Form";

type Props = {
  onSubmit: (data: FormInput) => void;
};

type ResetProp = (() => void) | null;

const Main = ({ onSubmit }: Props) => {
  const [resetForm, setResetForm] = useState<ResetProp>(null);

  return (
    <main className="flex flex-col gap-5 bg-white p-8 xl:h-full xl:w-1/2 xl:gap-10 xl:p-10 transition-all duration-300">
      <header className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="font-bold text-2xl md:text-4xl xl:text-2xl">
          Mortgage Calculator
        </h1>
        <button
          onClick={() => resetForm && resetForm()}
          className="text-slate-500 underline underline-offset-4 text-[.9rem] cursor-pointer hover:text-slate-900 transition-all md:text-[1.3rem] xl:text-[1.1rem]"
        >
          Clear All
        </button>
      </header>
      <Form onSubmit={onSubmit} setReset={setResetForm} />
    </main>
  );
};

export default Main;
