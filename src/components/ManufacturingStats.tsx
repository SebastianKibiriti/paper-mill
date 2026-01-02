"use client";

import { useState, useEffect } from "react";

interface Stat {
  label: string;
  value: number;
  unit: string;
  description: string;
  icon: string;
}

const manufacturingStats: Stat[] = [
  {
    label: "Daily Production",
    value: 50,
    unit: "tons",
    description: "Average daily toilet paper production capacity",
    icon: "📊"
  },
  {
    label: "Water Usage",
    value: 15,
    unit: "m³/ton",
    description: "Water consumption per ton of finished product",
    icon: "💧"
  },
  {
    label: "Energy Consumption",
    value: 2.8,
    unit: "MWh/ton",
    description: "Energy required per ton of toilet paper",
    icon: "⚡"
  },
  {
    label: "Recycled Content",
    value: 35,
    unit: "%",
    description: "Percentage of recycled materials used",
    icon: "♻️"
  },
  {
    label: "Production Speed",
    value: 1800,
    unit: "m/min",
    description: "Maximum paper machine operating speed",
    icon: "🏃"
  },
  {
    label: "Quality Tests",
    value: 24,
    unit: "per hour",
    description: "Quality control tests performed hourly",
    icon: "🔬"
  }
];

export default function ManufacturingStats() {
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    manufacturingStats.map(() => 0)
  );

  useEffect(() => {
    const animationDuration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = animationDuration / steps;

    manufacturingStats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(increment * currentStep, stat.value);
        
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = newValue;
          return newValues;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, []);

  return (
    <div className="bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Manufacturing Statistics</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Real-time insights into our toilet paper manufacturing process and efficiency metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manufacturingStats.map((stat, index) => (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{stat.icon}</div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-amber-900">
                    {animatedValues[index].toFixed(stat.value % 1 === 0 ? 0 : 1)}
                    <span className="text-lg text-amber-700 ml-1">{stat.unit}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
              
              {/* Progress bar */}
              <div className="mt-4">
                <div className="bg-amber-100 rounded-full h-2">
                  <div 
                    className="bg-amber-500 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ 
                      width: `${(animatedValues[index] / stat.value) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Production Efficiency</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Overall Equipment Effectiveness (OEE)</span>
                <span className="font-bold text-green-600">87%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Waste Reduction</span>
                <span className="font-bold text-green-600">12%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Energy Efficiency Improvement</span>
                <span className="font-bold text-green-600">8%</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Environmental Impact</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Carbon Footprint Reduction</span>
                <span className="font-bold text-green-600">15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Water Recycling Rate</span>
                <span className="font-bold text-green-600">92%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Renewable Energy Usage</span>
                <span className="font-bold text-green-600">45%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}