import { useParams } from "react-router-dom";
export default function User() {
    const { userId } = useParams();
    
    return (
        <div className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        User Profile
                    </h1>
                    <p className="text-xl text-slate-600">
                        Dynamic routing example with URL parameters
                    </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                User Information
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-600">User ID</p>
                                        <p className="text-lg font-bold text-slate-900">{userId || 'Not specified'}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-600">URL Path</p>
                                        <p className="text-lg font-mono text-slate-900">/user/{userId}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/60">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                                    Dynamic Routing Demo
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    This page demonstrates how React Router can capture URL parameters 
                                    and use them in your components.
                                </p>
                                <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
                                    <code className="text-sm text-slate-700">
                                        const userId = useParams();
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-slate-600">
                        Try changing the URL to <span className="font-mono bg-slate-100 px-2 py-1 rounded">/user/123</span> or any other ID!
                    </p>
                </div>
            </div>
        </div>
    );
}

export {User};
