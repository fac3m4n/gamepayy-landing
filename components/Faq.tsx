import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const Faq = () => {
  function toggleAccordion(id: number) {
    const accordion = document.getElementById(`accordion${id}`);
    const chevron = document.getElementById(`chevron${id}`);
    accordion.classList.toggle('hidden');
    chevron.classList.toggle('rotate-180');
  }

  const faqData = [
    {
      id: 1,
      question: 'What is Lorem Ipsum?',
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 2,
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 3,
      question: 'Where does it come from?',
      answer:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      id: 4,
      question: 'Where can I get some?',
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  return (
    <section className='text-white w-max-7xl px-10 mt-20 mb-20'>
      <h2 className='text-center'>FAQs?</h2>
      <div>
        {faqData.map((faq) => (
          <div key={faq.id}>
            <div
              className='py-3 border-b border-secondary cursor-pointer flex justify-between items-center'
              onClick={() => {
                toggleAccordion(faq.id);
              }}
            >
              <h3 className='text-lg font-medium'>{faq.question}</h3>
              <BiChevronDown
                className='transform transition-transform duration-500'
                id={`chevron${faq.id}`}
                size={36}
              />
            </div>
            <div className='p-4 hidden  text-justify' id={`accordion${faq.id}`}>
              <p>{faq.answer}</p>
            </div>
            <div className=''></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
