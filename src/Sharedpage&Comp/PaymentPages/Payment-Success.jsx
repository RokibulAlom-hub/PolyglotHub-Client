import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <div className="flex h-screen items-center justify-center bg-green-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">Your transaction was completed successfully. Thank you for your purchase.</p>
        <Link to="/" className="inline-block px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">Go Home</Link>
      </div>
    </div>
  );
}
