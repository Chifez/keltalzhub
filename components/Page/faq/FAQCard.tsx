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

const FAQCard = ({
  list,
  cardNumber,
}: {
  list: { question: string; answer: string };
  cardNumber: string;
}) => {
  return (
    <AccordionItem className="my-4 md:my-8">
      <AccordionItemHeading className="border bg-white border-[#1F1F1F] p-1 md:p-2 rounded-md w-full">
        <AccordionItemButton className="flex flex-row gap-2 justify-between items-center">
          <div className="flex items-center md:items-start gap-1 md:gap-4">
            <Button
              title={cardNumber}
              extraclass="!text-2xl md:!text-3xl font-inter font-medium text-white p-2 md:p-3 md:h-full"
            />

            <p className="text-sm md:text-3xl ">{list.question}</p>
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
          {list.answer}
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default FAQCard;
