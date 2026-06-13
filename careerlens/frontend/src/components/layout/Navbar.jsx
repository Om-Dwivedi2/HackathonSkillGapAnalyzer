import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { Menu, X, ChevronDown, HelpCircle } from 'lucide-react';
import { useAuth } from '../common/AuthContext';

export default function Navbar({ showSteps = false, currentStep = 1 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [rolesOpen, setRolesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Roles', href: '#roles' },
    { name: 'FAQs', href: '#faqs' },
  ];

  const supportedRoles = [
    'Frontend Engineer',
    'Backend Engineer',
    'Full Stack Engineer',
    'Android Developer',
    'Data Scientist',
    'DevOps Engineer',
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.03)] border-b border-slate-200/80'
          : 'bg-white/40 backdrop-blur-sm border-b border-slate-200/20'
      } py-3.5`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 transition-transform active:scale-95">
            <Logo variant="light" />
          </Link>

          {/* Desktop Navigation Links / Progress Steps */}
          {showSteps ? (
            <div className="hidden md:flex items-center gap-4 text-[13px] font-bold">
              {/* Step 1 */}
              <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-primary-blue' : 'text-slate-400'}`}>
                <span className={`flex items-center justify-center h-6 w-6 rounded-full text-[11px] font-black ${
                  currentStep > 1 
                    ? 'bg-primary-blue text-white shadow-sm' 
                    : 'bg-slate-100 border border-slate-200 text-slate-500'
                }`}>
                  {currentStep > 1 ? '✓' : '1'}
                </span>
                <span>Select Role</span>
              </div>
              <span className="w-8 border-t border-slate-300" />
              
              {/* Step 2 */}
              <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-primary-blue' : 'text-slate-400'}`}>
                <span className={`flex items-center justify-center h-6 w-6 rounded-full text-[11px] font-black ${
                  currentStep > 2 
                    ? 'bg-primary-blue text-white shadow-sm' 
                    : currentStep === 2 
                      ? 'bg-primary-blue text-white' 
                      : 'bg-slate-100 border border-slate-200 text-slate-500'
                }`}>
                  {currentStep > 2 ? '✓' : '2'}
                </span>
                <span>Upload Resume</span>
              </div>
              <span className="w-8 border-t border-slate-300" />
              
              {/* Step 3 */}
              <div className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-primary-blue' : 'text-slate-400'}`}>
                <span className={`flex items-center justify-center h-6 w-6 rounded-full text-[11px] font-black ${
                  currentStep >= 3 
                    ? 'bg-primary-blue text-white' 
                    : 'bg-slate-100 border border-slate-200 text-slate-500'
                }`}>
                  3
                </span>
                <span>Get Analysis</span>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                if (link.name === 'Roles') {
                  return (
                    <div key={link.name} className="relative group py-2">
                      <button className="flex items-center gap-1 text-[15px] font-medium text-slate-600 hover:text-primary-blue transition-colors duration-200 cursor-pointer">
                        Roles
                        <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-primary-blue transition-colors" />
                      </button>
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white border border-slate-100 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="px-3 py-1.5 border-b border-slate-50 text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-left">
                          Supported Roles
                        </div>
                        {supportedRoles.map((role) => (
                          <a
                            key={role}
                            href="#"
                            className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:text-primary-blue hover:bg-slate-50 text-left transition-colors"
                          >
                            {role}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[15px] font-medium text-slate-600 hover:text-primary-blue transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          )}

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                {/* Help Button */}
                <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors cursor-pointer">
                  <HelpCircle className="h-5.5 w-5.5" />
                </button>
                
                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-slate-100/50 border border-transparent hover:border-slate-100 transition-all cursor-pointer select-none"
                  >
                    <span className="flex h-8 w-8 rounded-full bg-blue-100 text-primary-blue items-center justify-center font-bold text-sm shadow-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                    <span className="text-[14px] font-bold text-slate-700">{user.name}</span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl py-1.5 z-50 text-left">
                      <div className="px-4 py-2 border-b border-slate-50">
                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Signed in as</p>
                        <p className="text-xs font-bold text-slate-700 truncate mt-0.5">{user.email || user.name}</p>
                      </div>
                      <button
                        onClick={() => {
                          logout();
                          setProfileOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-[15px] font-medium text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-lg bg-white shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer text-center block"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-[15px] font-medium text-white bg-primary-blue hover:bg-blue-700 rounded-lg shadow-md hover:shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-200 active:scale-95 cursor-pointer text-center block"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="h-6 width-6" /> : <Menu className="h-6 width-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-200 ease-in-out">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => {
              if (link.name === 'Roles') {
                return (
                  <div key={link.name} className="block">
                    <button
                      onClick={() => setRolesOpen(!rolesOpen)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-primary-blue hover:bg-slate-50 transition-all cursor-pointer"
                    >
                      <span>Roles</span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
                          rolesOpen ? 'rotate-180 text-primary-blue' : ''
                        }`}
                      />
                    </button>
                    {rolesOpen && (
                      <div className="pl-6 mt-1 space-y-1.5 border-l border-slate-100">
                        {supportedRoles.map((role) => (
                          <a
                            key={role}
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-sm font-semibold text-slate-500 hover:text-primary-blue text-left"
                          >
                            {role}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-primary-blue hover:bg-slate-50 transition-all"
                >
                  {link.name}
                </a>
              );
            })}
            
            {user ? (
              <div className="pt-4 border-t border-slate-100 px-3 flex flex-col gap-3">
                <div className="flex items-center gap-3 px-3 py-1">
                  <span className="flex h-9 w-9 rounded-full bg-blue-100 text-primary-blue items-center justify-center font-bold text-base shadow-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-800 leading-none">{user.name}</p>
                    <p className="text-xs text-slate-400 font-medium mt-1">{user.email || 'User Account'}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full py-2.5 text-center text-base font-semibold text-rose-600 hover:bg-rose-50 border border-rose-100 rounded-lg transition-all cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5 px-3">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 text-center text-base font-medium text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-lg transition-all cursor-pointer block"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 text-center text-base font-medium text-white bg-primary-blue hover:bg-blue-700 rounded-lg shadow transition-all cursor-pointer block"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
