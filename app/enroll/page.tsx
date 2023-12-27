'use client';

import React, { ChangeEvent, useState } from 'react';
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';

const page = () => {
  interface Data {
    [key: string]: string;
    name: string;
    contact: string;
    email: string;
    course: string;
    location: string;
    occupation: string;
  }

  const [inputData, setInputData] = useState<Data>({
    name: '',
    contact: '',
    email: '',
    course: '',
    location: '',
    occupation: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const handleDropdownSelect = (selectedValue: string) => {
    setInputData({
      ...inputData,
      course: selectedValue,
    });
  };

  const handleSubmit = async (e: any) => {
    console.log('cliked 1');
    e.preventDefault();
    const response = await fetch('/api/sendMail', {
      method: 'POST',
      body: JSON.stringify({
        name: inputData.name,
        contact: inputData.contact,
        email: inputData.email,
        course: inputData.course,
        location: inputData.location,
        occupation: inputData.occupation,
      }),
    });
    console.log(await response.json());
    console.log('cliked 2');
  };
  const list = [
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Type your name here',
      dropDown: false,
    },
    {
      label: 'Contact Number',
      name: 'contact',
      placeholder: 'Type your phone number here',
      dropDown: false,
    },
    {
      label: 'Email address',
      name: 'email',
      placeholder: 'Type your email addresss here',
      dropDown: false,
    },
    {
      label: 'Course of choice',
      name: 'course',
      dropDown: true,
      options: [
        'computer design',
        'graphic design',
        'UI/UX',
        'Video editing and Animating',
      ],
    },
    {
      label: 'Current location',
      name: 'location',
      placeholder: 'Type where you currently reside',
      dropDown: false,
    },
    {
      label: 'Occupation',
      name: 'occupation',
      placeholder: 'Type what you currently do',
      dropDown: false,
    },
  ];
  return (
    <div className="px-6 md:px-12">
      <h1 className="text-2xl lg:text-5xl text-center font-semibold">
        You’re almost there!
      </h1>
      <div>
        {list.map((items, idx) => (
          <Input
            listItem={items}
            key={idx}
            value={inputData[items.name]}
            inputChange={handleChange}
            onDropdownSelect={handleDropdownSelect}
          />
        ))}
        <div className="flex items-center justify-center my-2">
          <Button
            title="Start learning"
            extraclass="px-8 py-2 !text-2xl text-white"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
