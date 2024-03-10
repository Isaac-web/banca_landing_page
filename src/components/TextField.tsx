interface TextFieldProps {
  placeholder: string;
  label: string;
}

export const TextField = ({ label, placeholder }: TextFieldProps) => {
  return (
    <div>
      <label htmlFor="input" className="text-xl font-semibold text-gray-900 ">
        {label}
      </label>

      <input
        id="input"
        className="mt-4 px-5 py-4 border-[1px] w-full text-lg text-gray-600 hover:border-red-600 transition-all"
        placeholder={placeholder}
      />
    </div>
  );
};
