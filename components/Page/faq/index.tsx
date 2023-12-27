'use client';

import { getNumber } from '@/libs/utils/getNumber';
import FAQCard from './FAQCard';
import { Accordion } from 'react-accessible-accordion';
const FaqPage = () => {
  const list = [
    {
      question:
        'What are the prerequisites for enrolling in the training program?',
      answer:
        'Our training programs are designed to accommodate both beginners and individuals with basic knowledge in the respective fields. No prior experience is required.',
    },
    {
      question: ' How long is the duration of the training program?',
      answer:
        'The duration of the training program varies depending on the course. Typically, our courses range from 4 to 12 weeks. The specific duration will be mentioned in the course details.',
    },
    {
      question: 'What software or tools will be used during the training?',
      answer:
        'The training program utilizes industry-standard software and tools specific to the respective courses. The software may include Adobe Creative Suite (such as Photoshop, Illustrator, After Effects), Corel Draw, and other relevant applications.',
    },
    {
      question: 'Will I receive a certificate upon completion of the training?',
      answer:
        'Yes, upon successful completion of the training program, you will be awarded a certificate that validates your participation and achievement. Our certificates are recognized for their quality and industry relevance.',
    },
    {
      question:
        'Will I have access to course materials and resources after completing the training?',
      answer:
        'Yes, trainees will have access to course materials and resources for a specified period of time after completing the training program. This allows you to review the content and continue learning at your own pace.',
    },
    {
      question:
        'Are there any opportunities for practical projects or hands-on experience during the training?',
      answer:
        'Absolutely! Our training programs emphasize practical learning. You will have opportunities to work on real-world projects, engage in hands-on exercises, and build a portfolio of work to showcase your skills.',
    },
    {
      question: 'Can I enroll in multiple courses simultaneously? ',
      answer:
        'While it is possible to enroll in multiple courses, we recommend focusing on one course at a time to ensure optimal learning and proficiency in the specific skill set. Each course has its own dedicated curriculum and workload.',
    },
  ];
  return (
    <div className="px-6 lg:px-12">
      <h1 className="text-3xl md:text-5xl font-semibold">
        Frequently Asked Questions
      </h1>
      <Accordion allowZeroExpanded={true}>
        {list.map((item, idx) => (
          <FAQCard key={idx} list={item} cardNumber={getNumber(idx + 1)} />
        ))}
      </Accordion>
    </div>
  );
};
export default FaqPage;
