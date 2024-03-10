interface TextAreaProps {
  placeholder: string;
  label: string;
}

export const TextArea = ({ label, placeholder }: TextAreaProps) => {
  return (
    <div>
      <label htmlFor="input" className="text-xl font-semibold text-gray-900 ">
        {label}
      </label>

      <textarea
        id="input"
        className="mt-4 px-5 py-4 border-[1px] w-full text-lg text-gray-600 hover:border-red-600 transition-all"
        placeholder={placeholder}
        rows={4}
      />
    </div>
  );
};
