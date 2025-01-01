import React from 'react';
import { Search } from 'lucide-react';

interface Props {
  url: string;
  loading: boolean;
  onUrlChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function AnalysisForm({ url, loading, onUrlChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className="relative">
      <div className="flex gap-4">
        <input
          type="text"
          value={url}
          onChange={(e) => onUrlChange(e.target.value)}
          placeholder="Enter website URL"
          className="flex-1 p-4 bg-gray-900 border border-blue-900 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Search className="w-5 h-5" />
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>
    </form>
  );
}