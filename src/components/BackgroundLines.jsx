import React from "react";

const BackgroundLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Two parallel semi-circle lines with company logos */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100% 100%"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* First semi-circle line (top) - reduced curve depth */}
        <path
          d="M 0,10 Q 50%,600 100%,0"
          stroke="#e5e7eb"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3,3"
          opacity="0.05"
        />

        {/* Second semi-circle line (bottom) - increased distance */}
        <path
          d="M 0,300 Q 50%,800 100%,300"
          stroke="#e5e7eb"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3,3"
          opacity="0.05"
        />
      </svg>

      {/* Company logos positioned along the lines */}
      {/* Top line logos - line passes BELOW the center */}
      <div className="absolute top-12 left-4 md:left-12">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </div>
      </div>

      <div className="absolute top-44 left-1/2 transform -translate-x-1/2 md:left-72 md:transform-none">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-orange-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      <div className="absolute top-20 right-4 md:right-24">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100">
          <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </div>
      </div>

      {/* Bottom line logos - line passes ABOVE the center */}
      <div className="absolute top-72 left-4 md:left-20">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      </div>

      <div className="absolute top-80 right-4 md:right-20">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100">
          <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
            <path fill="#f25022" d="M0 0h11v11H0z" />
            <path fill="#7fba00" d="M12 0h11v11H12z" />
            <path fill="#00a4ef" d="M0 12h11v11H0z" />
            <path fill="#ffb900" d="M12 12h11v11H12z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BackgroundLines;
