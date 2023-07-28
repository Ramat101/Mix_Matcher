import { Accordion as LibraryAccordion, AccordionItem as LibraryAccordionItem } from '@szhsin/react-accordion';
import { MATCHING_OPTIONS } from 'common/utils';
import MatchTable from 'components/matchTable';

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
          {/** Need to convert element's Sets to Arrays */}
          <MatchTable data={[...element[MATCHING_OPTIONS.INTERESTED]]} header={MATCHING_OPTIONS.INTERESTED} />
          <MatchTable data={[...element[MATCHING_OPTIONS.MAYBE]]} header={MATCHING_OPTIONS.MAYBE} />
        </AccordionItem>
      ))}
    </LibraryAccordion>
  );
}

export default Accordion;