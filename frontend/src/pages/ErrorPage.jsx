import { useRouteError } from "react-router-dom";
import { Alert, Card } from "flowbite-react";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Alert color="failure">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Error
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Sorry, an unexpected error has occurred. 
        <br />
          <i>
            Error {error.status}: {error.statusText || error.message}
          </i>
      </p>
    </Alert>
  );
};

export default ErrorPage;
