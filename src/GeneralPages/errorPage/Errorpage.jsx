import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Oops!</h1>
        <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-600">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
