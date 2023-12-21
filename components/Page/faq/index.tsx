'use client';

import { getNumber } from '@/libs/utils/getNumber';
import FAQCard from './FAQCard';
import { Accordion } from 'react-accessible-accordion';
const FaqPage = () => {
  const list = new Array(10).fill(10);
  return (
    <div className="px-6 lg:px-12">
      <h1 className="text-3xl md:text-5xl font-semibold">
        Frequently Asked Questions
      </h1>
      <Accordion allowZeroExpanded={true}>
        {list.map((item, idx) => (
          <FAQCard key={idx} cardNumber={getNumber(idx + 1)} />
        ))}
      </Accordion>
    </div>
  );
};
export default FaqPage;
