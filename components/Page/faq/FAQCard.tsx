import Button from '@/components/shared/Button';
import { useState } from 'react';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import { MdNavigateNext } from 'react-icons/md';

const FAQCard = ({ cardNumber }: { cardNumber: string }) => {
  return (
    <AccordionItem className="my-4 md:my-8">
      <AccordionItemHeading className="border bg-white border-[#1F1F1F] p-1 md:p-2 rounded-md w-full">
        <AccordionItemButton className="flex flex-row gap-2 justify-between items-center">
          <div className="flex items-center md:items-start gap-1 md:gap-4">
            <Button
              title={cardNumber}
              extraclass="!text-2xl md:!text-3xl font-inter font-medium text-white p-2 md:p-3 md:h-full"
            />

            <p className="text-sm md:text-3xl ">
              What are the prerequisites for enrolling in the training program?
            </p>
          </div>
          <AccordionItemState>
            {(state) => {
              return (
                <MdNavigateNext
                  className={` transition-all ${
                    state.expanded ? 'rotate-[90deg]' : 'rotate-0'
                  } w-8 h-8`}
                />
              );
            }}
          </AccordionItemState>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className="w-full text-justify py-4 px-3">
        <p className="text-xl md:text-3xl text-[#000B6A] w-full">
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
          ut occaecat consequat est minim minim esse tempor laborum consequat
          esse adipisicing eu reprehenderit enim.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default FAQCard;
