import React, { useContext } from 'react';
import { Accordion, AccordionItem as LibraryAccordionItem } from '@szhsin/react-accordion';

import { CMSContext } from 'common/CMS';
import { MATCHING_OPTIONS, getEmailLink } from 'common/utils';
import SingleColumnTable from 'components/singleColumnTable';

import './resultsAccordion.scss';

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

function ResultsAccordion({ matches }) {
  const { main: { results: { email: cms }}} = useContext(CMSContext);

  return (
    <Accordion>
      {matches.map((element, index) => {
        /** Converting element's Sets to Arrays */
        const matches = [...element[MATCHING_OPTIONS.INTERESTED]];
        const maybes = [...element[MATCHING_OPTIONS.MAYBE]];

        const email = getEmailLink(element.name, element.email, cms, matches, maybes);

        return (
          <AccordionItem key={index} header={element.name}>
            <div className="accordionContent">
              <SingleColumnTable data={matches} header={MATCHING_OPTIONS.INTERESTED} />
              <SingleColumnTable data={maybes} header={MATCHING_OPTIONS.MAYBE} />

              <div className="emailContainer">
                <span className="material-symbols-outlined emailIcon ">mail</span>
                <a className="email" href={email}>{element.email}</a>
              </div>
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default ResultsAccordion;