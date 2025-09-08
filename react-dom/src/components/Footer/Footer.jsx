import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white/60 backdrop-blur-sm border-t border-slate-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">R</span>
                            </div>
                            <span className="text-xl font-bold text-slate-800">ReactRouter</span>
                        </Link>
                        <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                            Learn React Router with our comprehensive tutorial and examples. 
                            Master client-side routing for modern web applications.
                        </p>
                    </div>

                    
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/github" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                    GitHub
                                </Link>
                            </li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://reactrouter.com" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/remix-run/react-router" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                    GitHub Repo
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                                    Tutorials
                                </a>
                            </li>
                         
                        </ul>
                    </div>
                    </div>

                <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-600 text-sm">
                        © 2024 ReactRouter Tutorial~ by Vanshika Jain. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="#" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export {Footer};