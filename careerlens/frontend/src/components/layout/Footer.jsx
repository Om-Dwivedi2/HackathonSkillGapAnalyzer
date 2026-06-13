import React from 'react';
import Logo from '../common/Logo';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = 2024; // To exactly match the design: © 2024 CareerLens. All rights reserved.

  const sections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Roles', href: '#roles' },
        { name: 'Pricing', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Learning Resources', href: '#' },
        { name: 'Roadmaps', href: '#' },
        { name: 'Guides', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-border-gray pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-border-gray">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Logo variant="light" />
            <p className="text-[15px] leading-relaxed text-slate-500 max-w-sm">
              AI-powered skill gap analyzer that helps you identify missing skills and get a personalized roadmap to achieve your dream career.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="p-2 rounded-full border border-slate-200 hover:border-primary-blue text-slate-500 hover:text-primary-blue hover:bg-blue-50 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 width-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-slate-200 hover:border-primary-blue text-slate-500 hover:text-primary-blue hover:bg-blue-50 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 width-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-slate-200 hover:border-primary-blue text-slate-500 hover:text-primary-blue hover:bg-blue-50 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 width-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[15px] text-slate-500 hover:text-primary-blue transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright statement */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 text-center w-full md:text-left">
            &copy; {currentYear} CareerLens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
