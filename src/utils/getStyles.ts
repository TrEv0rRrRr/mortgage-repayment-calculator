import { FieldError } from "react-hook-form";

interface Props {
  position: "left" | "right";
  error: FieldError | undefined;
}

interface SpanStyles {
  positionSpanStyle: string;
  spanStylesIfError: string;
}

interface InputStyles {
  inputPaddingStyle: string;
  inputStylesIfError: string;
}

/**
 * Generates styles for a span element based on error state and position.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.error - Indicates if there is an error.
 * @param {"left" | "right"} props.position - The position of the span element.
 * @returns {Object} An object containing the styles for the span element.
 * @returns {string} return.positionSpanStyle - The style for the span element based on its position.
 * @returns {SpanStyles} return.spanStylesIfError - The style for the span element based on the error state.
 */
export const getSpanStyles = ({ error, position }: Props): SpanStyles => {
  const positionSpanStyle =
    position === "left"
      ? "left-0 rounded-tl rounded-bl border-r-0"
      : "right-0 rounded-tr rounded-br border-l-0";

  const spanStylesIfError = error
    ? "bg-Red border-Red group-focus-within:bg-Red group-focus-within:border-Red group-focus-within:text-white group-hover:bg-Red group-hover:border-Red group-hover:text-white md:top-[2.41rem] xl:top-[2.19rem] 2xl:top-[2.18rem]"
    : "group-focus-within:bg-Lime group-focus-within:border-Lime group-hover:bg-Lime group-hover:border-Lime md:top-[2.41rem] xl:top-[2.1rem] 2xl:top-[2.15rem]";

  return {
    positionSpanStyle,
    spanStylesIfError,
  };
};

/**
 * Generates input styles based on error state and position.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.error - Indicates if there is an error.
 * @param {string} props.position - The position of the input, either "left" or other.
 * @returns {InputStyles} An object containing the input padding style and input styles based on error state.
 */
export const getInputStyles = ({ error, position }: Props): InputStyles => {
  const inputPaddingStyle = position === "left" ? "pl-[55px] px-5" : "pl-4";

  const inputStylesIfError = error
    ? "border-Red focus:border-Red hover:border-Red"
    : "border-slate-700 focus:border-Lime hover:border-Lime";

  return {
    inputPaddingStyle,
    inputStylesIfError,
  };
};
