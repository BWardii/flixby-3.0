import React from 'react';
import { CheckCircle, Volume2 } from 'lucide-react';

interface VoiceSelectorProps {
  selectedVoice: string;
  onVoiceSelect: (voiceId: string) => void;
}

const VoiceSelector: React.FC<VoiceSelectorProps> = ({ selectedVoice, onVoiceSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Jennifer Voice Option */}
      <div 
        onClick={() => onVoiceSelect('jennifer')}
        className={`relative p-4 border rounded-xl cursor-pointer transition-all duration-300 ${
          selectedVoice === 'jennifer' 
            ? 'bg-purple-500/20 border-purple-500' 
            : 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
        }`}
      >
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-3 relative">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Jennifer" 
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity ${selectedVoice === 'jennifer' ? 'opacity-0' : 'opacity-0'}`}>
              <Volume2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white">Jennifer</h3>
            <p className="text-sm text-gray-400">Professional female voice</p>
          </div>
        </div>
        
        {selectedVoice === 'jennifer' && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
        )}
        
        <div className="mt-3 text-sm text-gray-300">
          <span className="font-medium">"</span>
          <span className="italic">Hello, this is Jennifer speaking. How may I assist you today?</span>
          <span className="font-medium">"</span>
        </div>
        
        <div className="mt-2 flex justify-center">
          <div className="w-3/4 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full w-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Michael Voice Option */}
      <div 
        onClick={() => onVoiceSelect('michael')}
        className={`relative p-4 border rounded-xl cursor-pointer transition-all duration-300 ${
          selectedVoice === 'michael' 
            ? 'bg-blue-500/20 border-blue-500' 
            : 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
        }`}
      >
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-3 relative">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Michael" 
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity ${selectedVoice === 'michael' ? 'opacity-0' : 'opacity-0'}`}>
              <Volume2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white">Michael</h3>
            <p className="text-sm text-gray-400">Friendly male voice</p>
          </div>
        </div>
        
        {selectedVoice === 'michael' && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
        )}
        
        <div className="mt-3 text-sm text-gray-300">
          <span className="font-medium">"</span>
          <span className="italic">Hi there! Michael speaking. What can I do for you today?</span>
          <span className="font-medium">"</span>
        </div>
        
        <div className="mt-2 flex justify-center">
          <div className="w-3/4 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSelector;