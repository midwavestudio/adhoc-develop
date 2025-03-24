import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Adhoc Develop - Natural Terrain Development",
  description: "Get in touch with Adhoc Develop for your natural terrain development needs.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden bg-stone-800">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/contact-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-800/70 to-stone-800/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto">
              Have questions about our natural terrain development services? 
              We'd love to hear from you. Fill out the form below or contact us directly.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6">
                Get In Touch
              </h2>
              <p className="text-stone-600 dark:text-stone-400 mb-8">
                Whether you're ready to start a project or just have questions about our services, 
                we're here to help. Send us a message and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-stone-100 dark:bg-stone-800 rounded-full p-3 mr-4">
                    <MapPin className="h-5 w-5 text-stone-600 dark:text-stone-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 dark:text-stone-200 mb-1">Our Location</h3>
                    <p className="text-stone-600 dark:text-stone-400">
                      456 Terrain Drive<br />
                      Kalispell, MT 59901
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-stone-100 dark:bg-stone-800 rounded-full p-3 mr-4">
                    <Mail className="h-5 w-5 text-stone-600 dark:text-stone-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 dark:text-stone-200 mb-1">Email Address</h3>
                    <a href="mailto:adhocjon@gmail.com" className="text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200">
                      adhocjon@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-stone-100 dark:bg-stone-800 rounded-full p-3 mr-4">
                    <Phone className="h-5 w-5 text-stone-600 dark:text-stone-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 dark:text-stone-200 mb-1">Phone Number</h3>
                    <a href="tel:+14062501942" className="text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200">
                      (406) 250-1942
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-stone-100 dark:bg-stone-800 rounded-full p-3 mr-4">
                    <Clock className="h-5 w-5 text-stone-600 dark:text-stone-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 dark:text-stone-200 mb-1">Business Hours</h3>
                    <p className="text-stone-600 dark:text-stone-400">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-stone-800 p-6 md:p-8 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700">
              <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 