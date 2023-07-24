import { useRouteError } from "react-router-dom";
import { useContext } from "react";

import { CMSContext } from "common/CMS";

import './errorBoundary.scss';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const { error: cms } = useContext(CMSContext);

  return (
    <div id="errorPage">
      <h1>{ cms.heading }</h1>
      <p>{ cms.body }</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;