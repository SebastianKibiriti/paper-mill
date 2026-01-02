"use client";

import { useState } from "react";
import ProcessTimeline from "@/components/ProcessTimeline";
import ManufacturingStats from "@/components/ManufacturingStats";
import QualityTestingSimulator from "@/components/QualityTestingSimulator";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-amber-50 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              How Toilet Paper is Made
            </h1>
            <p className="text-xl text-amber-700 mb-8 max-w-3xl mx-auto">
              Discover the fascinating journey from raw materials to the essential product we use every day. 
              Learn about the intricate manufacturing process that creates soft, absorbent toilet paper.
            </p>
            
            {/* Hero Video Placeholder */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative aspect-video bg-amber-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/169f1bd0-f2b6-403d-b92a-fbd8d9a9a692.png" 
                  alt="Educational video showing toilet paper manufacturing process in modern factory with industrial equipment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-amber-900 bg-opacity-20 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4">
                    <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="bg-amber-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-900 transition-colors">
              Explore the Process
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">The Art of Paper Making</h2>
              <p className="text-gray-700 mb-4">
                Toilet paper manufacturing is a sophisticated process that combines traditional papermaking techniques 
                with modern technology. The journey begins with carefully selected raw materials and ends with the 
                soft, absorbent product found in homes worldwide.
              </p>
              <p className="text-gray-700 mb-6">
                Modern toilet paper production involves multiple stages including pulping, cleaning, bleaching, 
                and converting. Each step is carefully controlled to ensure the final product meets strict 
                quality and safety standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">Daily Production</h3>
                  <p className="text-2xl font-bold text-amber-900">50+ Tons</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">Process Steps</h3>
                  <p className="text-2xl font-bold text-amber-900">12 Stages</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3ee39743-661b-40f3-ad84-25350e71ea09.png" 
                alt="Modern toilet paper manufacturing facility showing industrial equipment and production line"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Raw Materials Section */}
      <section id="materials" className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Raw Materials</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Quality toilet paper starts with carefully selected raw materials that determine the final product's softness, strength, and absorbency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/239a17b2-fa54-4120-90e0-9b9e5816e01d.png" 
                alt="Virgin wood fibers from softwood and hardwood timber logs in sustainable forest"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Virgin Wood Fibers</h3>
              <p className="text-gray-700">
                High-quality softwood and hardwood fibers provide strength and softness. Sourced from sustainably managed forests.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f23a1bc1-03ab-4c8c-8510-678ab02eb62a.png" 
                alt="Recycled paper materials from waste paper collection showing recycling process for sustainability"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Recycled Paper</h3>
              <p className="text-gray-700">
                Post-consumer recycled paper reduces environmental impact while maintaining quality standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/57d44f41-74f2-4ef7-867f-d5e46a913efa.png" 
                alt="Chemical additives including bleaching agents and wet strength additives for quality control"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Chemical Additives</h3>
              <p className="text-gray-700">
                Carefully controlled chemicals for bleaching, wet strength, and softness enhancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <ProcessTimeline />

      {/* Manufacturing Statistics Dashboard */}
      <ManufacturingStats />

      {/* Interactive Quality Testing Simulator */}
      <QualityTestingSimulator />

      {/* History Section */}
      <section id="history" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">History of Toilet Paper</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              From ancient civilizations to modern manufacturing, explore the evolution of this essential product.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-800 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                1857
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">First Commercial Toilet Paper</h3>
                <p className="text-gray-700">
                  Joseph Gayetty introduced the first commercially available toilet paper in the United States, 
                  marketed as "Gayetty's Medicated Paper."
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-amber-800 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                1890
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Perforated Rolls</h3>
                <p className="text-gray-700">
                  The Scott Paper Company introduced perforated toilet paper rolls, making it easier to tear off individual sheets.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-amber-800 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                1942
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Two-Ply Innovation</h3>
                <p className="text-gray-700">
                  St. Andrew's Paper Mill in England created the first two-ply toilet paper, significantly improving softness and strength.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-amber-800 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                1973
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Colored and Scented Paper</h3>
                <p className="text-gray-700">
                  Manufacturers began producing colored and scented toilet paper, though these were later discontinued due to health concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Environmental Responsibility</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Modern toilet paper manufacturing prioritizes sustainability and environmental protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Sustainable Practices</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Forest Stewardship Council (FSC) certified wood sources
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Increased use of recycled paper content
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Water recycling and treatment systems
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Energy-efficient manufacturing processes
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Reduced packaging and plastic use
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1d543842-1e4d-427a-a2f7-b2e815cee953.png" 
                alt="Sustainable forest management showing tree planting and environmental conservation in green manufacturing"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Carbon Footprint Reduction</h3>
              <p className="text-gray-700">
                Advanced manufacturing techniques and renewable energy sources help minimize the environmental impact of toilet paper production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form */}
      <ContactForm />
    </div>
  );
}