/* Accordion code is heavily based on Dominic Arrojado's tutorial:
/* https://dominicarrojado.com/posts/how-to-create-your-own-accordion-in-react-and-typescript-with-tests/ */

import { useState } from 'react';
import './Accordion.css';
import AccordionItems from './AccordionItems.tsx'
import { AccordionData } from '../../shared/globals';

function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <ul className="accordion">
      {items.map((item, idx) => (
        <AccordionItems
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </ul>
  );
}

  export default Accordion;