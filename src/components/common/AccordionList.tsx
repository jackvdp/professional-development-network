import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //

const AccordionList: FC<{ items: AccordionProp[] }> = ({ items }) => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {items.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  );
};

export default AccordionList;

export interface AccordionProp {
  no: string;
  expand: boolean;
  heading: string;
  body: string;
}