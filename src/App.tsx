import React, { useState } from 'react';
import { AnalysisResult } from './types/types';
import AnalysisForm from './components/AnalysisForm';
import ResultCard from './components/ResultCard';

export default function App() {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setResults({
        engagement: {
          score: 7.8,
          suggestions: ['Add more interactive elements', 'Improve social sharing'],
          detailedCritique: `The site's engagement metrics show promise but have room for improvement. Key findings:

          • User Interaction Rate: Currently at 45% against industry average of 60%
          • Average Session Duration: 2.5 minutes, could be improved to 4+ minutes
          • Bounce Rate: 65% - needs attention to reduce to target of 40%
          
          Recommended Actions:
          1. Implement interactive elements like polls and quizzes
          2. Add social proof elements (testimonials, reviews)
          3. Enhance content presentation with multimedia
          4. Develop a clear call-to-action strategy`
        },
        accessibility: {
          score: 8.4,
          suggestions: ['Ensure proper alt text', 'Check color contrast'],
          detailedCritique: `Accessibility analysis reveals strong fundamentals with some areas for enhancement:

          • WCAG Compliance: 85% of checkpoints met
          • Screen Reader Compatibility: Good, but navigation could be improved
          • Keyboard Navigation: Fully functional with minor focus indicator issues
          
          Critical Improvements Needed:
          1. Add missing alt text to 12 images
          2. Increase color contrast in secondary navigation
          3. Implement ARIA labels for custom components
          4. Enhance focus states for interactive elements`
        },
        performance: {
          score: 9.2,
          suggestions: ['Optimize images', 'Minimize JavaScript'],
          detailedCritique: `Performance metrics indicate excellent optimization with minor opportunities:

          • First Contentful Paint: 1.2s (Excellent)
          • Time to Interactive: 2.8s (Very Good)
          • Cumulative Layout Shift: 0.12 (Needs Minor Improvement)
          
          Optimization Opportunities:
          1. Implement WebP image format with fallbacks
          2. Enable HTTP/2 server push for critical assets
          3. Optimize third-party script loading
          4. Implement service worker for offline capabilities`
        }
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Website Analyzer
        </h1>

        <AnalysisForm 
          url={url}
          loading={loading}
          onUrlChange={setUrl}
          onSubmit={handleAnalyze}
        />

        {results && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-8 text-blue-400">Analysis Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(results).map(([category, data], index) => (
                <ResultCard 
                  key={category} 
                  category={category} 
                  data={data}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}