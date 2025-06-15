
"use client"; // Recommended if you later add interactivity, though pure CSS animation doesn't strictly need it.

import * as React from 'react';
import { Bell } from 'lucide-react';

export function PulsingNotificationBellPreview() {
  return (
    <>
      <style jsx>{`
        .pulse-bell {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
      <div className="flex items-center justify-center p-4">
        <Bell className="h-10 w-10 text-primary pulse-bell" />
      </div>
    </>
  );
}
