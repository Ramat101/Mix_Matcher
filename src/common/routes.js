import {
    createBrowserRouter,
} from "react-router-dom";

import App from "App";
import Form from "components/form";
import CMS, { cmsLoader } from 'common/CMS';
import ErrorBoundary from "components/errorBoundary";
import { ACTIONS } from "store";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorBoundary />,
      loader: cmsLoader,
      children: [
        {
          path: "form",
          element: <Form cms={CMS.main.form} />,
          action: ACTIONS.SUBMIT_FORM,
        },
      ]
    },
]);
