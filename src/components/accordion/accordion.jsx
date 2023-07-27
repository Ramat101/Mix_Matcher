import { Accordion as LibraryAccordion, AccordionItem as LibraryAccordionItem } from '@szhsin/react-accordion';
import { MATCHING_OPTIONS } from 'common/utils';

import './accordion.scss';

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
    <LibraryAccordionItem
      {...rest}
      header={
        <>
          {header}
          <span className="chevron-down material-symbols-outlined material-icons md-36">expand_more</span>

        </>
      }
    />
  );

function Accordion({ matchElements }) {
  return (
    <LibraryAccordion>
      {matchElements.map((element, index) => (
        <AccordionItem key={index} header={element.name}>
          <span className='item'>Matches: { [...element[MATCHING_OPTIONS.INTERESTED]].join(', ') }</span>
          <span className='item'>Also consider: { [...element[MATCHING_OPTIONS.MAYBE]].join(' ') }</span>
        </AccordionItem>
      ))}
    </LibraryAccordion>
  );
}

export default Accordion;