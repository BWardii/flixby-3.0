import React from 'react';
import { Bot } from 'lucide-react';
import OnboardingWizard from '../../components/OnboardingWizard';

function CreateAssistant() {
  return (
    <div className="p-6 md:p-10">
      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center md:justify-start space-x-4 md:space-x-6">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-medium">
              1
            </div>
            <span className="ml-2 text-purple-300 font-medium">Quick Set-up</span>
          </div>
          <div className="h-px w-8 bg-gray-700"></div>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-gray-400 font-medium">
              2
            </div>
            <span className="ml-2 text-gray-400">Talk to Flixby</span>
          </div>
          <div className="h-px w-8 bg-gray-700"></div>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-gray-400 font-medium">
              3
            </div>
            <span className="ml-2 text-gray-400">Launch</span>
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl border border-gray-700/50 p-6 md:p-8 mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center">
            <Bot className="h-6 w-6 text-purple-400" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center text-white mb-2">Welcome to Flixby!</h1>
        <p className="text-center text-gray-300 mb-6 max-w-lg mx-auto">
          Let's set up your AI phone receptionist to handle customer calls 24/7. 
          Just follow these simple steps to create your custom Flixby assistant.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-gray-700/40 p-4 rounded-lg border border-gray-600/50 text-center">
            <p className="text-purple-300 font-medium mb-2">Train Flixby</p>
            <p className="text-gray-300 text-sm">on your business information</p>
          </div>
          <div className="bg-gray-700/40 p-4 rounded-lg border border-gray-600/50 text-center">
            <p className="text-purple-300 font-medium mb-2">Test Your Assistant</p>
            <p className="text-gray-300 text-sm">with a sample conversation</p>
          </div>
          <div className="bg-gray-700/40 p-4 rounded-lg border border-gray-600/50 text-center">
            <p className="text-purple-300 font-medium mb-2">Go Live</p>
            <p className="text-gray-300 text-sm">with your 24/7 AI receptionist</p>
          </div>
        </div>
      </div>

      {/* Onboarding Wizard */}
      <OnboardingWizard />
    </div>
  );
}

export default CreateAssistant;