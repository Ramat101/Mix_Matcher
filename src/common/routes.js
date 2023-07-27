import {
    createBrowserRouter,
} from "react-router-dom";

import App from "App";
import Form from "components/form";
import Results from 'components/results';
import { cmsLoader } from 'common/CMS';
import ErrorBoundary from "components/errorBoundary";
import { resultsLoader } from "common/utils";
import { ACTIONS } from "store";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      loader: cmsLoader,
      errorElement: <ErrorBoundary />,
      children: [
        {
          errorElement: <ErrorBoundary />,
          children: [
            {
              index: true,
              element: <Form />,
              action: ACTIONS.SUBMIT_FORM,
            },
            {
              path: 'results',
              element: <Results />,
              loader: resultsLoader,
            },
          ],
        },
      ],
    },
]);
