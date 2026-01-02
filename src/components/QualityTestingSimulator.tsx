"use client";

import { useState } from "react";

interface TestResult {
  name: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  status: "pass" | "fail" | "warning";
}

interface QualityTest {
  id: string;
  name: string;
  description: string;
  duration: string;
  results: TestResult[];
}

const qualityTests: QualityTest[] = [
  {
    id: "tensile",
    name: "Tensile Strength Test",
    description: "Measures the maximum stress the paper can withstand while being stretched",
    duration: "5 minutes",
    results: [
      { name: "Dry Tensile", value: 0, unit: "N·m/g", min: 4.5, max: 8.0, status: "pass" },
      { name: "Wet Tensile", value: 0, unit: "N·m/g", min: 0.8, max: 2.0, status: "pass" }
    ]
  },
  {
    id: "absorbency",
    name: "Absorbency Test",
    description: "Tests the paper's ability to absorb and retain liquids",
    duration: "10 minutes",
    results: [
      { name: "Absorption Rate", value: 0, unit: "ml/s", min: 2.0, max: 5.0, status: "pass" },
      { name: "Absorption Capacity", value: 0, unit: "ml/g", min: 8.0, max: 15.0, status: "pass" }
    ]
  },
  {
    id: "softness",
    name: "Softness Test",
    description: "Evaluates the tactile properties and surface smoothness",
    duration: "3 minutes",
    results: [
      { name: "Surface Roughness", value: 0, unit: "μm", min: 15, max: 35, status: "pass" },
      { name: "Softness Index", value: 0, unit: "points", min: 7.0, max: 10.0, status: "pass" }
    ]
  },
  {
    id: "thickness",
    name: "Thickness & Density",
    description: "Measures paper thickness and bulk density",
    duration: "2 minutes",
    results: [
      { name: "Thickness", value: 0, unit: "mm", min: 0.15, max: 0.35, status: "pass" },
      { name: "Bulk Density", value: 0, unit: "kg/m³", min: 120, max: 200, status: "pass" }
    ]
  }
];

export default function QualityTestingSimulator() {
  const [activeTest, setActiveTest] = useState<string>("tensile");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [testResults, setTestResults] = useState<QualityTest[]>(qualityTests);

  const runTest = (testId: string) => {
    setIsRunning(true);
    
    // Simulate test duration
    setTimeout(() => {
      setTestResults(prev => 
        prev.map(test => {
          if (test.id === testId) {
            return {
              ...test,
              results: test.results.map(result => {
                // Generate random values within acceptable ranges
                const range = result.max - result.min;
                const randomValue = result.min + (Math.random() * range);
                
                // Determine status based on value
                let status: "pass" | "fail" | "warning" = "pass";
                if (randomValue < result.min * 1.1 || randomValue > result.max * 0.9) {
                  status = Math.random() > 0.8 ? "warning" : "pass";
                }
                if (randomValue < result.min || randomValue > result.max) {
                  status = "fail";
                }
                
                return {
                  ...result,
                  value: randomValue,
                  status
                };
              })
            };
          }
          return test;
        })
      );
      setIsRunning(false);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pass": return "text-green-600 bg-green-50";
      case "warning": return "text-yellow-600 bg-yellow-50";
      case "fail": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass": return "✓";
      case "warning": return "⚠";
      case "fail": return "✗";
      default: return "○";
    }
  };

  const currentTest = testResults.find(test => test.id === activeTest);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Quality Testing Simulator</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Experience our quality control process by running simulated tests on toilet paper samples.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Test Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">Select Test Type</h3>
            <div className="space-y-3">
              {testResults.map((test) => (
                <button
                  key={test.id}
                  onClick={() => setActiveTest(test.id)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    activeTest === test.id
                      ? "border-amber-500 bg-amber-50"
                      : "border-gray-200 bg-white hover:border-amber-300"
                  }`}
                >
                  <h4 className="font-semibold text-gray-900">{test.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{test.duration}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Test Interface */}
          <div className="lg:col-span-2">
            {currentTest && (
              <div className="bg-amber-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-amber-900">{currentTest.name}</h3>
                    <p className="text-gray-700 mt-2">{currentTest.description}</p>
                    <p className="text-sm text-amber-700 mt-1">Duration: {currentTest.duration}</p>
                  </div>
                  <button
                    onClick={() => runTest(currentTest.id)}
                    disabled={isRunning}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      isRunning
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-amber-600 text-white hover:bg-amber-700"
                    }`}
                  >
                    {isRunning ? "Running..." : "Run Test"}
                  </button>
                </div>

                {/* Test Results */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-amber-800">Test Results</h4>
                  {currentTest.results.map((result, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-semibold text-gray-900">{result.name}</h5>
                          <p className="text-sm text-gray-600">
                            Range: {result.min} - {result.max} {result.unit}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">
                            {result.value > 0 ? result.value.toFixed(2) : "--"}
                            <span className="text-sm text-gray-600 ml-1">{result.unit}</span>
                          </div>
                          {result.value > 0 && (
                            <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(result.status)}`}>
                              <span className="mr-1">{getStatusIcon(result.status)}</span>
                              {result.status.toUpperCase()}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Progress bar for visual representation */}
                      {result.value > 0 && (
                        <div className="mt-3">
                          <div className="bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-500 ${
                                result.status === "pass" ? "bg-green-500" :
                                result.status === "warning" ? "bg-yellow-500" : "bg-red-500"
                              }`}
                              style={{ 
                                width: `${Math.min((result.value / result.max) * 100, 100)}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Test Summary */}
                {currentTest.results.some(r => r.value > 0) && (
                  <div className="mt-6 p-4 bg-white rounded-lg border">
                    <h4 className="font-semibold text-amber-800 mb-2">Test Summary</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          {currentTest.results.filter(r => r.status === "pass").length}
                        </div>
                        <div className="text-sm text-gray-600">Passed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-yellow-600">
                          {currentTest.results.filter(r => r.status === "warning").length}
                        </div>
                        <div className="text-sm text-gray-600">Warnings</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">
                          {currentTest.results.filter(r => r.status === "fail").length}
                        </div>
                        <div className="text-sm text-gray-600">Failed</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}