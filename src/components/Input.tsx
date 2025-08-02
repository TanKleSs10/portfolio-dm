import { InputHTMLAttributes, TextareaHTMLAttributes, JSX } from "react";
import {
  UseFormRegister,
  UseFormWatch,
  FieldValues,
  Path,
} from "react-hook-form";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type CommonProps<T extends FieldValues> = {
  nameField: string;
  registerName: Path<T>;
  error?: string;
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
  as?: "input" | "textarea";
};

type InputProps<T extends FieldValues> = CommonProps<T> &
  (
    | InputHTMLAttributes<HTMLInputElement>
    | TextareaHTMLAttributes<HTMLTextAreaElement>
  );

export default function Input<T extends FieldValues>({
  registerName,
  nameField,
  error,
  register,
  watch,
  as = "input",
  ...props
}: InputProps<T>): JSX.Element {
  const inputValue = watch(registerName);

  const baseStyles = `
    border-2 rounded-lg px-5 py-2 w-full outline-0
    peer transition-all duration-300 bg-night-900 text-white resize-none
  `;

  const inputClass = twMerge(
    clsx(baseStyles, {
      "border-brand-folly": error,
      "border-cyan-400": !error && inputValue?.length > 0,
      "border-platinum-200": !error && !inputValue,
      "focus:border-cyan-400": !error,
    }),
  );

  const labelClass = twMerge(
    clsx(
      "absolute bg-night-900 px-2 top-0 left-0 ms-3 border-x-2 transition-all duration-300",
      {
        "text-brand-folly peer-focus:border-brand-folly": error,
        "text-cyan-400 border-cyan-400": !error && inputValue?.length > 0,
        "border-night-900": !inputValue,
        "-translate-y-4/6": inputValue?.length > 0,
        "translate-y-1/2": !inputValue,
        "peer-focus:-translate-y-4/6": true,
        "peer-focus:text-brand-folly peer-focus:border-brand-folly": error,
        "peer-focus:text-cyan-400 peer-focus:border-cyan-400": !error,
      },
    ),
  );

  const FieldComponent =
    as === "textarea" ? (
      <textarea
        className={inputClass}
        {...register(registerName)}
        {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    ) : (
      <input
        className={inputClass}
        {...register(registerName)}
        {...(props as InputHTMLAttributes<HTMLInputElement>)}
      />
    );

  return (
    <div className="space-y-3">
      <div className="w-full relative group">
        {FieldComponent}
        <span className={labelClass}>{nameField}</span>
      </div>
      {error && (
        <p className="text-brand-folly text-sm font-bold ml-2">{error}</p>
      )}
    </div>
  );
}
