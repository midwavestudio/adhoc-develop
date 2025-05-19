"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="relative h-10 w-40 mb-4">
              <Image
                src="/images/Logo-04.png"
                alt="Adhoc Develop Logo"
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
            <p className="text-stone-600 dark:text-stone-400 mb-4">
              Specializing in natural terrain projects that enhance the beauty and functionality of the landscape.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-[#eaccb4]"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-[#eaccb4]"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-stone-800 dark:text-[#eaccb4] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                // { label: "Projects", href: "/projects" }, // Temporarily removed until we have projects to showcase
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-600 hover:text-stone-800 dark:text-stone-400 dark:hover:text-[#eaccb4]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-stone-800 dark:text-[#eaccb4] mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Land Development", href: "/services#land-development" },
                { label: "Terrain Design", href: "/services#terrain-design" },
                { label: "Terrain Modification", href: "/services#terrain-modification" },
                { label: "Natural Landscapes", href: "/services#natural-landscapes" },
                { label: "Site Planning", href: "/services#site-planning" },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-stone-600 hover:text-stone-800 dark:text-stone-400 dark:hover:text-[#eaccb4]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-stone-800 dark:text-[#eaccb4] mb-4">
              Contact Us
            </h3>
            <address className="not-italic">
              <p className="text-stone-600 dark:text-stone-400 mb-2">
                Kalispell, Montana
              </p>
              <p className="text-stone-600 dark:text-stone-400 mb-2">
                Phone: <a href="tel:+14062501942" className="hover:text-stone-800 dark:hover:text-[#eaccb4]">(406) 250-1942</a>
              </p>
              <p className="text-stone-600 dark:text-stone-400">
                Email: <a href="mailto:adhocjon@gmail.com" className="hover:text-stone-800 dark:hover:text-[#eaccb4]">adhocjon@gmail.com</a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-200 dark:border-stone-800 mt-8 pt-8 text-center">
          <p className="text-stone-600 dark:text-stone-400">
            &copy; {currentYear} Adhoc Develop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 