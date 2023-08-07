import React, { useState } from "react";

interface Props {
  text: string;
  explanation: string;
}

const ExpandableText: React.FC<Props> = ({ text, explanation }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <span
        onClick={() => setVisible(!visible)}
        className="underline cursor-pointer"
      >
        {text}
      </span>
      <div
        className={`bg-darkGray rounded-2xl transition-all duration-500 px-4 overflow-hidden ${
          visible ? "max-h-96 my-4 py-4" : "max-h-0 my-0 py-0"
        }`}
      >
        {explanation}
      </div>
    </>
  );
};

export default ExpandableText;
