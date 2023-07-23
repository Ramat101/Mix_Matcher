import { Accordion as LibraryAccordion, AccordionItem as LibraryAccordionItem } from '@szhsin/react-accordion';
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

function Accordion() {
  return (
    <LibraryAccordion>
        <AccordionItem header="Name 1">
            <p>Matches: Name 1, Name 2 Name 3</p>
            <p>Maybe's: Name 3, Name 4, Name 5</p>
        </AccordionItem>

        <AccordionItem header="Name 2">
        <ul>
                <li>Match 1</li>
                <li>Match 2</li>
                <li>Match 3</li>
            </ul>
        </AccordionItem>

        <AccordionItem header="Name 3">
            Suspendisse massa risus, pretium id interdum in, dictum sit
            amet ante. Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
  </LibraryAccordion>
  );
}

export default Accordion;