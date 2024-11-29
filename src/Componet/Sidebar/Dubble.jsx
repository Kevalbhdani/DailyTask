import React from 'react'
import { useState } from 'react';

function Dubble() {

  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle "Next" button
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  // Function to handle "Back" button
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>

      <div className="bg-white w-full max-w-md mx-auto p-6 rounded-md shadow-md">
        {/* Step 1 */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-lg font-semibold">Add Treatment</h2>
            <p className="text-gray-600 mt-2">Select the Tooth Where patient Feels the Most Pain</p>
            {/* Tooth Diagram */}
            <div className="mt-6 flex justify-center">
              <img src="tooth-diagram.png" alt="Tooth Diagram" className="w-64 h-64" />
            </div>
            {/* Next Button */}
            <button
              onClick={handleNext}
              className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-lg font-semibold">Add Treatment</h2>
            <p className="text-gray-600 mt-2">Enter Treatment Details</p>
            {/* Treatment List */}
            <div className="mt-6">
              <ul className="space-y-2">
                <li>Sinus + Impala</li>
                <li>Completion 35,36</li>
                <li>Resection 14</li>
                <li>Other</li>
              </ul>
            </div>
            {/* Input Field */}
            <input
              type="text"
              placeholder="Enter Treatment"
              className="mt-4 w-full p-2 border rounded-md focus:outline-blue-500"
            />
            {/* Buttons */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleBack}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
              >
                Back
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

</div>
  )
}

export default Dubble