import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnalysisScore } from '../types/types';

interface Props {
  category: string;
  data: AnalysisScore;
  index: number;
}

export default function ResultCard({ category, data, index }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-gray-900 border border-blue-900 rounded-lg p-6 transform hover:scale-105 transition-all duration-300"
      style={{
        opacity: 0,
        animation: `fadeSlideIn 0.5s ease-out ${index * 0.2}s forwards`
      }}
    >
      <h3 className="text-lg font-semibold mb-2 capitalize text-blue-400">
        {category}
      </h3>
      
      <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
        {data.score}
      </div>
      
      <ul className="space-y-2 mb-4">
        {data.suggestions.map((suggestion, idx) => (
          <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>{suggestion}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors w-full justify-between p-2 rounded-lg hover:bg-gray-800"
      >
        <span className="font-medium">
          {isExpanded ? 'Hide detailed analysis' : 'Show detailed analysis'}
        </span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg text-sm text-gray-300 space-y-3 animate-fadeIn border border-blue-900">
          <div className="prose prose-sm max-w-none whitespace-pre-line prose-invert">
            {data.detailedCritique}
          </div>
        </div>
      )}
    </div>
  );
}