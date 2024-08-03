import { useState, useRef } from 'react';
import { ChevronDownOutline, ChevronUpOutline } from 'react-ionicons';

const faqs = [
  {
    question: 'How does Webbofferter work?',
    answer: 'For those seeking help with a service, you describe what you need help with either by phone or in the form. We match your request with providers connected to Webbofferter. Up to five interested providers can contact you to perform the task. Your request is non-binding.',
  },
  {
    question: 'Is it free to make a request?',
    answer: 'Yes! It costs nothing to send a request. The service is completely free for you as a client.',
  },
  {
    question: 'How are my contact details handled?',
    answer: 'Your contact details are only visible to companies that want to submit a quote to you. Your contact details are handled confidentially and are never publicly disclosed or shared with other parties.',
  },
  {
    question: 'How quickly can I get a response?',
    answer: 'We review new requests daily and hope to match your request with interested providers within a few hours. As soon as your request is approved, providers can contact you.',
  },
  {
    question: 'Am I committed to hiring anyone?',
    answer: 'You are not obligated to hire any of the providers who contact you with a quote. However, to create good relationships and facilitate the provider, it is courteous to inform them of your choice.',
  },
  {
    question: 'What should I consider before hiring a company?',
    answer: 'Before starting a collaboration, we recommend reviewing the provider. Take time to read reviews from previous clients to get an idea of their performance. Additionally, you can ask for reference projects from previous assignments. For extra security, it is always wise to create a written agreement detailing what is expected and what will be performed within the project.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-200 transition duration-300"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                  {isOpen ? (
                    <ChevronUpOutline width="24px" height="24px" color="#4A5568" />
                  ) : (
                    <ChevronDownOutline width="24px" height="24px" color="#4A5568" />
                  )}
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[1000px] p-4' : 'max-h-0'
                  }`}
                  ref={(el) => contentRefs.current[index] = el}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
