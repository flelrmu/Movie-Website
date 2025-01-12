import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="justify-center flex flex-col text-red-800 bg-black min-h-screen items-center">
      <h1 className="text-3xl font-bold">Error Page!</h1>
      <p className="my-2 text-xl">{error.statusText || error.message}</p>
      <p className="text-lg">Back to previous page</p>
    </div>
  );
}

export default ErrorPage;
