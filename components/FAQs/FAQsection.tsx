'use client';
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQsProps = {
  question: string;
  answer: string;
};

const FAQsection = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (itemValue: string) => {
    setOpenItem((prevValue) => (prevValue === itemValue ? null : itemValue));
  };

  const faqsData: FAQsProps[] = [
    {
      question: "What services does your consultancy agency offer?",
      answer:
        "We provide business strategy, financial planning, marketing solutions, and operational consulting tailored to your specific needs.",
    },
    {
      question: "How experienced is your team?",
      answer:
        "Our team consists of industry experts with over 10 years of experience in various domains, including finance, marketing, and operations.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in healthcare, technology, retail, manufacturing, and small-to-medium enterprises across diverse sectors.",
    },
    {
      question: "How do you ensure confidentiality?",
      answer:
        "We sign NDAs with all our clients and implement robust data protection measures to ensure your information is secure.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing is flexible and based on the scope of the project. We offer hourly rates, fixed project fees, and retainers.",
    },
    {
      question: "How can I get started?",
      answer:
        "You can get started by booking a free consultation through our website or contacting us via email or phone.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Yes, we work with startups and help them develop effective strategies for growth and scalability.",
    },
    {
      question: "Can you assist with digital transformation?",
      answer:
        "Absolutely. We provide expert guidance on adopting new technologies and optimizing digital processes to drive efficiency.",
    },
    {
      question: "Do you offer remote consultations?",
      answer:
        "Yes, we offer remote consultations through video calls, making it convenient for clients worldwide to work with us.",
    },
    {
      question: "What is your success rate?",
      answer:
        "Our success rate is high, with numerous case studies and testimonials from satisfied clients who achieved measurable results.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-16 w-full py-10">
        <div className="w-full">
          <Accordion type="single" collapsible>
            {faqsData?.map((faq: FAQsProps, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#313640] mb-3 p-5 "
                // isOpen={openItem === `item-${index}`}
              >
                <AccordionTrigger
                  className="text-start text-2xl font-normal hover:no-underline "
                  onClick={() => handleToggle(`item-${index}`)}
                >
                  {faq?.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base">{faq?.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* <div className="w-full lg:w-1/2 border-b lg:border-none">
          <Accordion type="single" collapsible>
            {faqsData?.slice(5)?.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                // isOpen={openItem === `item-${index}`}
              >
                <AccordionTrigger
                  className="text-start text-xl font-normal hover:no-underline"
                  onClick={() => handleToggle(`item-${index}`)}
                >
                  {faq?.question}
                </AccordionTrigger>
                <AccordionContent>{faq?.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div> */}
      </div>
    </div>
  );
};

export default FAQsection;
