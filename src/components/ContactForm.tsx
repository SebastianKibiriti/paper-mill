"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  inquiryType: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          organization: "",
          subject: "",
          message: "",
          inquiryType: "general"
        });
      }, 3000);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-green-50 p-8 rounded-lg border border-green-200">
            <div className="text-6xl text-green-500 mb-4">✓</div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h2>
            <p className="text-green-700">
              Thank you for your inquiry. Our educational team will respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Contact Our Education Team</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Have questions about toilet paper manufacturing? Need information for research or educational purposes? 
            We're here to help with detailed technical information and educational resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-700 mb-1">Educational Inquiries</h4>
                  <p className="text-gray-700">info@papermillco.edu</p>
                  <p className="text-gray-700">1-800-PAPER-ED</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-amber-700 mb-1">Research Collaboration</h4>
                  <p className="text-gray-700">research@papermillco.edu</p>
                  <p className="text-gray-700">1-800-RESEARCH</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-amber-700 mb-1">Facility Tours</h4>
                  <p className="text-gray-700">tours@papermillco.edu</p>
                  <p className="text-gray-700">1-800-TOUR-TPM</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-amber-200">
                <h4 className="font-semibold text-amber-700 mb-2">Response Time</h4>
                <p className="text-sm text-gray-600">
                  We typically respond to educational inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization/Institution
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="University, School, Company, etc."
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                >
                  <option value="general">General Information</option>
                  <option value="research">Research Collaboration</option>
                  <option value="education">Educational Resources</option>
                  <option value="tour">Facility Tour Request</option>
                  <option value="technical">Technical Questions</option>
                  <option value="environmental">Environmental Impact</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-vertical"
                  placeholder="Please provide details about your inquiry, including any specific questions about the manufacturing process, research needs, or educational requirements."
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  * Required fields
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                    isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-amber-600 text-white hover:bg-amber-700"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}