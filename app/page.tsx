
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            <span className="text-blue-600 dark:text-blue-400">Notes</span>App
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            A simple, elegant note-taking application to organize your thoughts
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/dashboard"
              className="btn btn-primary text-center px-6 py-3 text-lg"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="btn btn-secondary text-center px-6 py-3 text-lg"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6">
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Easy Note Taking</h3>
            <p className="text-gray-600 dark:text-gray-300">Quickly capture your thoughts and ideas with our intuitive interface.</p>
          </div>

          <div className="card p-6">
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure Storage</h3>
            <p className="text-gray-600 dark:text-gray-300">Your notes are securely stored and accessible only to you.</p>
          </div>

          <div className="card p-6">
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Organized Collection</h3>
            <p className="text-gray-600 dark:text-gray-300">Keep all your notes organized and easily accessible in one place.</p>
          </div>
        </div>
      </div>
    </div>
  )
}