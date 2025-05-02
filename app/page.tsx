
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] w-full">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-24">
        <div className="text-center px-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6">
            <span className="text-blue-600 dark:text-blue-400">Notes</span>App
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            A simple, elegant note-taking application to organize your thoughts
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mx-auto">
            <a
              href="/dashboard"
              className="btn btn-primary text-center px-4 sm:px-6 py-3 text-base sm:text-lg w-full sm:flex-1"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="btn btn-secondary text-center px-4 sm:px-6 py-3 text-base sm:text-lg w-full sm:flex-1"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          <div className="card p-5 sm:p-6 flex flex-col h-full">
            <div className="text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center justify-center sm:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center sm:text-left">Easy Note Taking</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-center sm:text-left">Quickly capture your thoughts and ideas with our intuitive interface.</p>
          </div>

          <div className="card p-5 sm:p-6 flex flex-col h-full">
            <div className="text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center justify-center sm:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center sm:text-left">Secure Storage</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-center sm:text-left">Your notes are securely stored and accessible only to you.</p>
          </div>

          <div className="card p-5 sm:p-6 flex flex-col h-full sm:col-span-2 md:col-span-1 sm:mx-auto md:mx-0 sm:max-w-md md:max-w-none">
            <div className="text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center justify-center sm:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center sm:text-left">Organized Collection</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-center sm:text-left">Keep all your notes organized and easily accessible in one place.</p>
          </div>
        </div>
      </div>
    </div>
  )
}