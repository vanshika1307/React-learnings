import {Link , NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
        
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">R</span>
                        </div>
                        <span className="text-xl font-bold text-slate-800">ReactRouter</span>
                    </Link>

                
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLink 
                            to="/"
                            className={({isActive}) =>
                                `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    isActive 
                                        ? "bg-blue-100 text-blue-700" 
                                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/about"
                            className={({isActive}) =>
                                `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    isActive 
                                        ? "bg-blue-100 text-blue-700" 
                                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/contact"
                            className={({isActive}) =>
                                `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    isActive 
                                        ? "bg-blue-100 text-blue-700" 
                                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink 
                            to="/github"
                            className={({isActive}) =>
                                `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    isActive 
                                        ? "bg-blue-100 text-blue-700" 
                                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                }`
                            }
                        >
                            GitHub
                        </NavLink>
                    </div>

            
                    <div className="flex items-center space-x-3">
                    </div>
                </div>
            </nav>
        </header>
    );
} 
export {Header};

