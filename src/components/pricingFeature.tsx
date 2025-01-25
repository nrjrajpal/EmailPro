import React from 'react';

interface Props {
  text: string,
  tickcolour: string;
}

const PricingFeature: React.FC<Props> = ({ text, tickcolour }) => {
  return (
    <div className="flex justify-items-center h-fit items-center gap-2">
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12.7676C3 5.35558 4.588 3.76758 12 3.76758C19.412 3.76758 21 5.35558 21 12.7676C21 20.1796 19.412 21.7676 12 21.7676C4.588 21.7676 3 20.1796 3 12.7676Z"
          stroke={tickcolour}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12.7676L10.683 14.4506C10.858 14.6256 11.142 14.6256 11.317 14.4506L15 10.7676"
          stroke={tickcolour}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h4 className="text-lg">{text}</h4>
    </div>
  );
};

export default PricingFeature;
