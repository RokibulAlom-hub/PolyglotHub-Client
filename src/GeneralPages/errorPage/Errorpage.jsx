import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="text-center p-6 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-accent">Oops!</h1>
        <p className="text-lg">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className="p-2 shadow-md underline text-accent rounded-md">Go Back To Home</Link>
      </div>
    </div>
  );
}
