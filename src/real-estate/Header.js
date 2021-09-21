import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
function Header() {
  return (
    <div className="flex border-b py-1 px-3">
      <h1 className="text-4xl font-bold text-yellow-600">Company Logo</h1>
      <div className="flex flex-1 justify-around items-center divide-x">
        <IconWithDetails
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          }
          title="Call Us"
          details="+91 8861129756"
        />
        <IconWithDetails
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          title="Opening Time"
          details="6AM- 12PM"
        />
        <IconWithDetails
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          }
          title="Email"
          details="info@gmail.com"
        />
        <SocialIcons />
      </div>
    </div>
  );
}

const IconWithDetails = ({ icon, title, details }) => {
  return (
    <div className="flex items-center mx-3 hover:text-yellow-600">
      <div className="mx-3">{icon}</div>
      <div>
        <div className="text-sm">{title}</div>
        <div className="font-medium">{details}</div>
      </div>
    </div>
  );
};

const SocialIcons = () => (
  <div className="flex mx-4">
    <div className="mx-4 hover:text-yellow-600">
      <FaFacebookF />
    </div>
    <div className="mr-4 hover:text-yellow-600">
      <FaTwitter />
    </div>
    <div className="mr-4 hover:text-yellow-600">
      <FaInstagram />
    </div>
  </div>
);
export default Header;
