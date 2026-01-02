"use client";

import { useState } from "react";

export default function WhyWeLoveItPage() {
  const [activeReason, setActiveReason] = useState<number>(1);

  const reasons = [
    {
      id: 1,
      title: "Ultimate Comfort",
      description: "The soft, gentle touch that makes every moment comfortable",
      details: "Modern toilet paper is engineered for maximum softness using advanced fiber processing techniques. The multi-ply construction and micro-embossing create a cloud-like texture that's gentle on skin while maintaining strength.",
      icon: "🌟",
      stats: { softness: "95%", comfort: "98%" }
    },
    {
      id: 2,
      title: "Reliable Strength",
      description: "Dependable performance when you need it most",
      details: "Through careful fiber bonding and wet-strength additives, toilet paper provides the perfect balance of softness and durability. It won't tear unexpectedly or fall apart when wet.",
      icon: "💪",
      stats: { strength: "92%", reliability: "99%" }
    },
    {
      id: 3,
      title: "Superior Absorbency",
      description: "Exceptional absorption capacity for maximum effectiveness",
      details: "The unique fiber structure and micro-perforations create countless tiny pockets that quickly absorb moisture. This engineered absorbency makes toilet paper incredibly effective.",
      icon: "💧",
      stats: { absorbency: "94%", efficiency: "96%" }
    },
    {
      id: 4,
      title: "Hygienic Protection",
      description: "Clean, safe, and sanitary for health and wellness",
      details: "Toilet paper provides a crucial barrier for hygiene and health. The manufacturing process includes purification steps that ensure the final product is clean and safe for personal use.",
      icon: "🛡️",
      stats: { hygiene: "99%", safety: "100%" }
    },
    {
      id: 5,
      title: "Convenient Design",
      description: "Perfectly sized and perforated for easy use",
      details: "The standard sheet size, convenient perforations, and roll format make toilet paper incredibly user-friendly. It's designed to dispense easily and tear cleanly every time.",
      icon: "✨",
      stats: { convenience: "97%", usability: "98%" }
    },
    {
      id: 6,
      title: "Environmental Progress",
      description: "Increasingly sustainable and eco-friendly options",
      details: "Modern toilet paper production focuses on sustainability with recycled content, responsible forestry, and reduced environmental impact. Many brands now offer eco-friendly alternatives.",
      icon: "🌱",
      stats: { sustainability: "85%", ecoFriendly: "78%" }
    }
  ];

  const funFacts = [
    {
      fact: "The average person uses 57 sheets per day",
      detail: "That's about 20,805 sheets per year!"
    },
    {
      fact: "Toilet paper was invented in 1857",
      detail: "Before that, people used everything from corn cobs to newspapers"
    },
    {
      fact: "Americans prefer soft toilet paper",
      detail: "While Europeans often prefer stronger, less soft varieties"
    },
    {
      fact: "The roll orientation debate is real",
      detail: "Studies show 70% prefer the paper to hang over the roll"
    },
    {
      fact: "Toilet paper has saved countless trees",
      detail: "Recycled content now makes up 35% of production"
    },
    {
      fact: "It's a $40 billion global industry",
      detail: "One of the most essential consumer products worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Why We Love Toilet Paper
            </h1>
            <p className="text-xl text-amber-700 mb-8 max-w-3xl mx-auto">
              Discover the remarkable qualities that make toilet paper one of humanity's most beloved 
              and essential inventions. From comfort to convenience, explore what makes this simple 
              product so extraordinary.
            </p>
            
            {/* Hero Image */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative aspect-video bg-amber-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/435cc65c-30a4-4f06-9ac3-dd83977d27bd.png" 
                  alt="Happy people celebrating toilet paper comfort with soft fluffy clouds in peaceful scene"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-amber-900 bg-opacity-10 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-6">
                    <div className="text-4xl">🧻</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <div className="bg-white bg-opacity-80 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-amber-900">Essential</div>
                <div className="text-sm text-amber-700">Daily Use</div>
              </div>
              <div className="bg-white bg-opacity-80 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-amber-900">Beloved</div>
                <div className="text-sm text-amber-700">Worldwide</div>
              </div>
              <div className="bg-white bg-opacity-80 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-amber-900">Innovative</div>
                <div className="text-sm text-amber-700">Technology</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">The Science of Love</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Toilet paper combines engineering excellence with human comfort needs. 
              Here's why this simple product has captured our hearts and become indispensable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reason Selection */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-amber-800 mb-4">Why We Love It</h3>
              <div className="space-y-3">
                {reasons.map((reason) => (
                  <button
                    key={reason.id}
                    onClick={() => setActiveReason(reason.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                      activeReason === reason.id
                        ? "border-amber-500 bg-amber-50"
                        : "border-gray-200 bg-white hover:border-amber-300"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{reason.icon}</div>
                      <div>
                        <h4 className={`font-semibold ${
                          activeReason === reason.id ? "text-amber-900" : "text-gray-700"
                        }`}>
                          {reason.title}
                        </h4>
                        <p className="text-sm text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Reason Details */}
            <div className="lg:col-span-2">
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className={`${activeReason === reason.id ? "block" : "hidden"}`}
                >
                  <div className="bg-amber-50 p-8 rounded-lg">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-4xl">{reason.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-amber-900">{reason.title}</h3>
                        <p className="text-amber-700">{reason.description}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">{reason.details}</p>

                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(reason.stats).map(([key, value]) => (
                        <div key={key} className="bg-white p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className="text-lg font-bold text-amber-900">{value}</span>
                          </div>
                          <div className="bg-amber-100 rounded-full h-2">
                            <div 
                              className="bg-amber-500 h-2 rounded-full transition-all duration-1000"
                              style={{ width: value }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Amazing Toilet Paper Facts</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Fascinating insights about our favorite household essential that might surprise you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">{item.fact}</h3>
                <p className="text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Connection Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">The Emotional Connection</h2>
              <p className="text-gray-700 mb-4">
                Beyond its practical benefits, toilet paper represents comfort, security, and care. 
                It's one of the first things we notice when it's missing, and one of the most 
                appreciated when it's high quality.
              </p>
              <p className="text-gray-700 mb-6">
                The soft touch, reliable performance, and everyday dependability create an emotional 
                bond that goes beyond mere functionality. It's a small luxury that makes a big 
                difference in our daily comfort and well-being.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <span className="text-amber-800 font-bold">💝</span>
                  </div>
                  <span className="text-gray-700">Represents care and thoughtfulness</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <span className="text-amber-800 font-bold">🏠</span>
                  </div>
                  <span className="text-gray-700">Essential for feeling at home</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <span className="text-amber-800 font-bold">😌</span>
                  </div>
                  <span className="text-gray-700">Provides peace of mind and comfort</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <span className="text-amber-800 font-bold">🌟</span>
                  </div>
                  <span className="text-gray-700">Small luxury with big impact</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2fcacd5b-ef38-4216-bb5b-45fd7b5d5f14.png" 
                alt="Cozy bathroom scene with soft lighting and comfortable atmosphere featuring premium toilet paper for luxury feel"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Love Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">A Universal Love Story</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Across cultures and continents, toilet paper has become a symbol of modern comfort 
              and civilization. Here's how the world shows its love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">🇺🇸</div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">United States</h3>
              <p className="text-gray-600">Prefers ultra-soft, multi-ply varieties with quilted textures</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">🇪🇺</div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Europe</h3>
              <p className="text-gray-600">Values strength and sustainability over extreme softness</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">🇯🇵</div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Japan</h3>
              <p className="text-gray-600">Innovates with perfumed varieties and premium textures</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Global</h3>
              <p className="text-gray-600">Growing demand for eco-friendly and bamboo alternatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Continuous Innovation</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              The love for toilet paper drives constant innovation, making it better, softer, 
              stronger, and more sustainable with each generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Advanced Materials</h3>
              <p className="text-gray-700">
                New fiber technologies and processing methods create unprecedented softness 
                while maintaining strength and absorbency.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Sustainability</h3>
              <p className="text-gray-700">
                Eco-friendly alternatives using bamboo, recycled materials, and sustainable 
                forestry practices address environmental concerns.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Premium Features</h3>
              <p className="text-gray-700">
                Luxury options with lotion infusion, enhanced textures, and premium packaging 
                elevate the everyday experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Celebrate the Love</h2>
          <p className="text-xl text-amber-700 mb-8">
            Join millions worldwide in appreciating this remarkable invention that brings 
            comfort, convenience, and care to our daily lives.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Share Your Toilet Paper Love</h3>
            <p className="text-gray-700 mb-6">
              What makes your favorite toilet paper special? Share your thoughts about 
              this essential comfort that makes life a little bit better every day.
            </p>
            <button className="bg-amber-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-900 transition-colors">
              Learn More About Manufacturing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}