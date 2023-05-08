import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Faq = () => {
  function toggleAccordion(id: number) {
    const accordion = document.getElementById(`accordion${id}`);
    const chevron = document.getElementById(`chevron${id}`);
    accordion?.classList.toggle("hidden");
    chevron?.classList.toggle("rotate-180");
  }

  const faqData = [
    {
      id: 1,
      question: "What is Game Payy?",
      answer:
        "Game Payy is a social competitive platform that brings gamers together to share experiences and compete for wages. Our platform allows users to engage and interact with other gamers, follow and subscribe to users, like and share posts, and earn cryptocurrency through gameplay.",
    },
    {
      id: 2,
      question: "How do you sign up?",
      answer:
        "You can sign up via our website by connecting through gmail, discord or steam.",
    },
    {
      id: 3,
      question: "Does it cost anything to sign up on Game Payy?",
      answer: "No! It is completely free to sign up on our platform.",
    },
    {
      id: 4,
      question: "Is Game Payy a scam?",
      answer:
        "No, Game Payy is not a scam. Game Payy is a platform to play video games for money. We are a registered business in the state of Florida and we earn money by keeping 8% of entry fees from users. We offer lower fees than any of our competitors. For more information on our founders, investors, and business, head to the 'about' page on our website.",
    },
    {
      id: 5,
      question: "How old must I be to use Game Payy?      ",
      answer:
        "You have to be at least 18 to play on Game Payy for wages. It is against our Terms of Service and the law to use our site if you are under 18. Please don't make a wagering account if you're under 18—we'll be forced to lock it. Users under the age of 18 may register for the platform to access social media components.",
    },
    {
      id: 6,
      question: "Is Game Payy legal?",
      answer:
        "Yes! Legally, Game Payy is NOT a gambling platform, it's a platform that facilitates skill based video game competitions. Our users place wagers on THEIR OWN performance, NOT the outcome of other players. Each state has its own law competing for cash. If you live in one of the following states, you may not play for cash prizes on Game Payy Arizona, Arkansas, Connecticut, Delaware, Florida, Indiana, Louisiana, Maryland, Minnesota, Montana, South Carolina, South Dakota, Tennessee, and Wyoming.",
    },
    {
      id: 7,
      question: "What games are on Game Payy?",
      answer:
        "We currently offer Madden 23, NBA 2K23, FIFA 23 Call of Duty: Modern Warfare, Warzone, Fortnite, League of Legends, Apex Legends, Halo Infinite, Super Smash Bros ultimate and Rocket League on Game Payy. We plan to expand to most major web 2 titles as well as major Web3 titles in the near future.",
    },
    {
      id: 8,
      question: "IIs the site secure?",
      answer:
        "We place the highest concern on keeping your sensitive info protected. Our databases & servers are highly secured with robust encryption. We NEVER store your credit card information. All credit card transactions are done securely via our credit card processors.",
    },
    {
      id: 9,
      question: "I'm not a pro gamer, can I win money on Game Payy?",
      answer:
        "Casual players are making money on Game Payy EVERY DAY!. Game Payy is designed for non-professional gamers. Our matchmaking system ensures that you are playing people within your skill level to allow casual gamers to play games competitively. We actively match gamers of similar skill levels, to ensure all users have the best experience possible. The majority of our users are students, lawyers, security guards, cashiers, accountants, developers — all types of people!",
    },
  ];

  return (
    <section className="text-white w-max-7xl px-10 mt-20 mb-20">
      <h2 className="text-center">FAQs?</h2>
      <div>
        {faqData.map((faq) => (
          <div key={faq.id}>
            <div
              className="py-3 border-b border-secondary cursor-pointer flex justify-between items-center"
              onClick={() => {
                toggleAccordion(faq.id);
              }}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <BiChevronDown
                className="transform transition-transform duration-500"
                id={`chevron${faq.id}`}
                size={36}
              />
            </div>
            <div className="p-4 hidden  text-justify" id={`accordion${faq.id}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
