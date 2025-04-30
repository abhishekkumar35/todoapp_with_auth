export default function Page() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-4rem)]">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                        Simple, Transparent <span className="text-blue-600 dark:text-blue-400">Pricing</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Choose the plan that works best for you
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Free Plan */}
                    <div className="card p-8 border-t-4 border-gray-400 dark:border-gray-600 flex flex-col h-full">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">Perfect for personal use</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white">$0</span>
                            <span className="text-gray-600 dark:text-gray-400">/month</span>
                        </div>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Up to 50 notes</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Basic editing features</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Web access</span>
                            </li>
                        </ul>
                        <a
                            href="/auth/signin"
                            className="btn btn-secondary w-full text-center"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Pro Plan */}
                    <div className="card p-8 border-t-4 border-blue-500 flex flex-col h-full shadow-lg transform scale-105 z-10">
                        <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                            Popular
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Pro</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">For power users</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white">$9.99</span>
                            <span className="text-gray-600 dark:text-gray-400">/month</span>
                        </div>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Unlimited notes</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Advanced formatting</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Web & mobile access</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Priority support</span>
                            </li>
                        </ul>
                        <a
                            href="/auth/signin"
                            className="btn btn-primary w-full text-center"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="card p-8 border-t-4 border-gray-400 dark:border-gray-600 flex flex-col h-full">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Enterprise</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">For teams and businesses</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white">$29.99</span>
                            <span className="text-gray-600 dark:text-gray-400">/month</span>
                        </div>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Team collaboration</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Admin controls</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Dedicated support</span>
                            </li>
                        </ul>
                        <a
                            href="/auth/signin"
                            className="btn btn-secondary w-full text-center"
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                    <div className="mt-8 max-w-3xl mx-auto">
                        <div className="card p-6 mb-4 text-left">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Can I cancel my subscription?</h3>
                            <p className="text-gray-600 dark:text-gray-400">Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.</p>
                        </div>
                        <div className="card p-6 mb-4 text-left">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Is there a free trial?</h3>
                            <p className="text-gray-600 dark:text-gray-400">Yes, all paid plans come with a 14-day free trial so you can try before you commit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}