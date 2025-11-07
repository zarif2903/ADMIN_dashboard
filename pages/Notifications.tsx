import React, { useState } from 'react';

type AlertColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  color: AlertColor;
  message: string;
}

const colorStyles: Record<AlertColor, { bg: string; text: string }> = {
  primary: { bg: 'bg-blue-100', text: 'text-blue-700' },
  secondary: { bg: 'bg-gray-100', text: 'text-gray-700' },
  success: { bg: 'bg-green-100', text: 'text-green-700' },
  error: { bg: 'bg-red-100', text: 'text-red-700' },
  warning: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
  info: { bg: 'bg-sky-100', text: 'text-sky-700' },
};

const Alert: React.FC<AlertProps> = ({ color, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const { bg, text } = colorStyles[color];

  return (
    <div className={`relative p-4 rounded-lg text-white ${bg.replace('100', '500')}`}>
      <span className="font-bold capitalize">{color} alert!</span> {message}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};


const Notifications: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Alerts</h2>
      <div className="space-y-4">
        <Alert color="primary" message="This is a simple primary alert—check it out!" />
        <Alert color="secondary" message="This is a simple secondary alert—check it out!" />
        <Alert color="success" message="This is a simple success alert—check it out!" />
        <Alert color="error" message="This is a simple error alert—check it out!" />
        <Alert color="warning" message="This is a simple warning alert—check it out!" />
        <Alert color="info" message="This is a simple info alert—check it out!" />
      </div>
    </div>
  );
};

export default Notifications;
