'use client';

import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const SelectInput = ({
  options,
  value,
  onSelect,
}: {
  options?: string[];
  value: string;
  onSelect: (selectedValue: string) => void;
}) => {
  const [selectedInput, setSelectedInput] = useState(value);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={`relative border-2 border-[#2D2D2E] rounded-xl`}
        // onMouseEnter={() => setOpen(true)}
        // onMouseLeave={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-between py-1 px-4`}
        >
          <div>{selectedInput}</div>

          <RiArrowDropDownLine className="w-12 h-12" />
        </div>
        <div
          className={`${
            open ? 'block' : 'hidden'
          } w-full border absolute bg-white cursor-pointer rounded-md z-20`}
        >
          {options?.map((item: any, index: any) => (
            <option
              className="hover:bg-[grey] px-2"
              key={index}
              value={item}
              onClick={(e) => {
                setSelectedInput((e.target as HTMLInputElement).value);
                onSelect(item);
                setOpen(false);
                // {item.getCategory && item.getCategory()};
              }}
            >
              {item}
            </option>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SelectInput;
