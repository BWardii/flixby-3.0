import React from 'react';
import { Phone, Bot, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AIAssistant from '../../components/AIAssistant';

interface TestAssistantProps {
  assistantId: string;
  assistantName: string;
  voiceId: string;
  greeting: string;
}

const TestAssistant: React.FC<TestAssistantProps> = ({ 
  assistantId, 
  assistantName, 
  voiceId, 
  greeting 
}) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10">
      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center md:justify-start space-x-4 md:space-x-6">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white font-medium">
              ✓
            </div>
            <span className="ml-2 text-gray-300 font-medium">Quick Set-up</span>
          </div>
          <div className="h-px w-8 bg-gray-700"></div>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-medium">
              2
            </div>
            <span className="ml-2 text-purple-300 font-medium">Talk to Flixby</span>
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

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm flex items-center mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span>Creation Complete</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Your AI Assistant is Ready!</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Try having a conversation with your new AI assistant to hear how it responds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl border border-gray-700/50 p-6">
            <h3 className="text-lg font-medium text-white mb-4 flex items-center">
              <Phone className="h-5 w-5 text-purple-400 mr-2" />
              Test Your Assistant
            </h3>
            
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-4 border border-gray-800/50 backdrop-blur-sm">
              <AIAssistant assistantId={assistantId} />
            </div>
            
            <div className="mt-6 text-sm text-gray-400 bg-gray-900/50 p-4 rounded-lg border border-gray-800/50">
              <p>
                Click the phone button above to start a conversation with your AI assistant.
                This simulates what callers will experience.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl border border-gray-700/50 p-6">
            <h3 className="text-lg font-medium text-white mb-4 flex items-center">
              <Bot className="h-5 w-5 text-purple-400 mr-2" />
              Assistant Details
            </h3>
            
            <div className="space-y-4">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800/50">
                <div className="text-sm text-gray-400 mb-1">Name</div>
                <div className="font-medium text-white">{assistantName}</div>
              </div>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800/50">
                <div className="text-sm text-gray-400 mb-1">Voice</div>
                <div className="font-medium text-white">
                  {voiceId === 'jennifer' ? 'Jennifer (Female)' : 'Michael (Male)'}
                </div>
              </div>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800/50">
                <div className="text-sm text-gray-400 mb-1">Greeting</div>
                <div className="font-medium text-white">{greeting}</div>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                onClick={() => navigate('/my-assistant/manage')}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg flex items-center justify-center font-medium hover:from-purple-600 hover:to-blue-600 transition-colors"
              >
                <span>Go to Dashboard</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestAssistant;