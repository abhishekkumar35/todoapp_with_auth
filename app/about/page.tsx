export default function Page() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-4rem)]">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                        About <span className="text-blue-600 dark:text-blue-400">NotesApp</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A simple, elegant solution for your note-taking needs
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                We believe that note-taking should be simple, fast, and accessible. Our mission is to provide a clean,
                                distraction-free environment where you can capture your thoughts, ideas, and important information.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                Whether you&apos;re a student, professional, or just someone who likes to stay organized,
                                NotesApp is designed to help you keep track of what matters most.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
                            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Simple, clean interface focused on your content</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Secure authentication to protect your notes</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Fast, responsive design that works on all devices</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Dark mode support for comfortable viewing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get Started Today</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Join thousands of users who trust NotesApp for their note-taking needs.
                    </p>
                    <a
                        href="/auth/signin"
                        className="btn btn-primary text-center px-6 py-3 text-lg inline-block"
                    >
                        Sign Up Now
                    </a>
                </div>
            </div>
        </div>
    );
}