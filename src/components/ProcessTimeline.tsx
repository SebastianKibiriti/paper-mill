"use client";

import { useState } from "react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  temperature?: string;
  details: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Raw Material Preparation",
    description: "Wood chips and recycled paper are prepared and sorted for processing.",
    duration: "30 minutes",
    details: [
      "Wood chips are screened for size consistency",
      "Recycled paper is sorted and cleaned",
      "Foreign materials are removed",
      "Materials are weighed and batched"
    ]
  },
  {
    id: 2,
    title: "Pulping",
    description: "Raw materials are cooked with chemicals to break down into pulp.",
    duration: "2-4 hours",
    temperature: "150-170°C",
    details: [
      "Wood chips mixed with cooking chemicals",
      "Heated under pressure in digesters",
      "Lignin is dissolved, leaving cellulose fibers",
      "Pulp is washed to remove spent chemicals"
    ]
  },
  {
    id: 3,
    title: "Cleaning & Screening",
    description: "Pulp is cleaned and screened to remove impurities and contaminants.",
    duration: "45 minutes",
    details: [
      "Primary screening removes large debris",
      "Centrifugal cleaning removes heavy particles",
      "Flotation removes ink and stickies",
      "Final screening ensures purity"
    ]
  },
  {
    id: 4,
    title: "Bleaching",
    description: "Pulp is bleached to achieve desired whiteness and brightness.",
    duration: "1-2 hours",
    temperature: "60-80°C",
    details: [
      "Oxygen delignification removes residual lignin",
      "Hydrogen peroxide bleaching",
      "pH adjustment and washing",
      "Brightness testing and quality control"
    ]
  },
  {
    id: 5,
    title: "Paper Formation",
    description: "Bleached pulp is formed into paper sheets on the paper machine.",
    duration: "Continuous",
    details: [
      "Pulp diluted to 0.5-1% consistency",
      "Fed onto moving wire mesh",
      "Water drains through wire",
      "Fiber mat forms and consolidates"
    ]
  },
  {
    id: 6,
    title: "Pressing & Drying",
    description: "Water is removed and paper is dried to final moisture content.",
    duration: "2-3 minutes",
    temperature: "150-200°C",
    details: [
      "Press rolls remove water mechanically",
      "Heated cylinders evaporate remaining water",
      "Steam boxes provide additional heat",
      "Final moisture content: 6-8%"
    ]
  },
  {
    id: 7,
    title: "Creping & Winding",
    description: "Paper is creped for softness and wound into parent rolls.",
    duration: "Continuous",
    details: [
      "Paper adhered to heated Yankee dryer",
      "Doctor blade scrapes paper off cylinder",
      "Creates micro-folds for softness",
      "Wound into large parent rolls"
    ]
  },
  {
    id: 8,
    title: "Converting",
    description: "Parent rolls are unwound, perforated, and rewound into consumer rolls.",
    duration: "30 seconds per roll",
    details: [
      "Parent rolls unwound at high speed",
      "Perforations added for easy tearing",
      "Multiple plies laminated if needed",
      "Rewound into consumer-sized rolls"
    ]
  }
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Interactive Process Timeline</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Click on each step to explore the detailed manufacturing process from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Steps */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${
                    activeStep === step.id
                      ? "border-amber-500 bg-amber-50"
                      : "border-gray-200 bg-white hover:border-amber-300"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        activeStep === step.id
                          ? "bg-amber-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step.id}
                    </div>
                    <div>
                      <h3
                        className={`font-semibold ${
                          activeStep === step.id ? "text-amber-900" : "text-gray-700"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500">{step.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Details */}
          <div className="lg:col-span-2">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`${activeStep === step.id ? "block" : "hidden"}`}
              >
                <div className="bg-amber-50 p-8 rounded-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-amber-900">{step.title}</h3>
                      <div className="flex space-x-4 text-sm text-amber-700 mt-1">
                        <span>Duration: {step.duration}</span>
                        {step.temperature && <span>Temperature: {step.temperature}</span>}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 text-lg">{step.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-3">Process Details:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-amber-800 mb-3">Key Metrics:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Process Time:</span>
                          <span className="font-medium text-amber-900">{step.duration}</span>
                        </div>
                        {step.temperature && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Temperature:</span>
                            <span className="font-medium text-amber-900">{step.temperature}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600">Quality Check:</span>
                          <span className="font-medium text-green-600">Required</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}