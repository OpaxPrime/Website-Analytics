import React from 'react';
import { AnalysisResult } from '../types/analyzer';
import ResultCard from './ResultCard';
import ScoreChart from './ScoreChart';

interface Props {
  results: AnalysisResult;
}

export default function AnalysisResults({ results }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Analysis Results</h2>
      <ScoreChart results={results} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Object.entries(results).map(([category, data]) => (
          <ResultCard key={category} title={category} data={data} />
        ))}
      </div>
    </div>
  );
}