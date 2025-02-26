import IllustrationEmpty from "/illustration-empty.svg";

const WithoutData = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-3 bg-slate-900 text-white xl:rounded-bl-[5rem] xl:flex-1 py-8 md:py-10">
      <img
        className="w-44 h-44 object-contain md:w-52 md:h-52"
        src={IllustrationEmpty}
        alt=""
      />
      <div className="flex flex-col text-center gap-3">
        <h2 className="text-[21px] font-bold md:text-[25.5px]">
          Results shown here
        </h2>
        <p className="text-slate-500 text-[.9rem] px-7 md:text-[1.1rem] md:px-52 xl:px-10">
          Complete the form and click "calculate repayments" to see what your
          monthly repayments would be.
        </p>
      </div>
    </header>
  );
};

export default WithoutData;
