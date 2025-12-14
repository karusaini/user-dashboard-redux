import React from "react";

interface InputFieldProps {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  placeholder,
  onChange,
  type = "text",
}) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1">{label}</label>}
      <input
        type={type}
        className="border p-2 rounded"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;
