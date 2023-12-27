import React, { ChangeEvent } from 'react';
import SelectInput from './DropDown';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  dropDown: boolean;
  options?: string[];
}
const Input = ({
  listItem,
  value,
  inputChange,
  onDropdownSelect,
}: {
  listItem: Props;
  value: any;
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDropdownSelect: (selectedValue: string) => void;
}) => {
  const { label, name, placeholder, dropDown = false, options } = listItem;
  return (
    <>
      {dropDown == false ? (
        <div className="flex flex-col gap-1 font-inter my-4">
          <label htmlFor={label} className="text-xl font-medium ml-4">
            {label}
          </label>
          <input
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={inputChange}
            className="w-full p-4 border-2 border-[#2D2D2E] rounded-xl"
          />
        </div>
      ) : (
        <div className="relative flex flex-col gap-1 font-inter my-4">
          <label htmlFor={label} className="text-xl font-medium ml-4">
            {label}
          </label>
          <SelectInput
            options={options}
            value={value}
            onSelect={onDropdownSelect}
          />
          {/* <select
            name=""
            id=""
            className="w-full p-4 border-2 border-[#2D2D2E] rounded-xl"
          >
            
              {options?.map((item, idx) => (
                <option value={item}>{item}</option>
              ))}
           
          </select> */}
        </div>
      )}
    </>
  );
};

export default Input;
