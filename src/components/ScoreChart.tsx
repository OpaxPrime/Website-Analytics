import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AnalysisResult } from '../types/analyzer';

interface ScoreChartProps {
  results: AnalysisResult;
}

function ScoreBar({ score, position, color }: { score: number; position: [number, number, number]; color: string }) {
  const height = (score / 100) * 2;

  return (
    <mesh position={position}>
      <boxGeometry args={[0.5, height, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function ScoreChart({ results }: ScoreChartProps) {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        
        <ScoreBar 
          score={results.engagement.score}
          position={[-3, 0, 0]}
          color="#FF6B6B"
        />
        <ScoreBar 
          score={results.accessibility.score}
          position={[-2, 0, 0]}
          color="#4ECDC4"
        />
        <ScoreBar 
          score={results.visualDesign.score}
          position={[-1, 0, 0]}
          color="#45B7D1"
        />
        <ScoreBar 
          score={results.contentDepth.score}
          position={[0, 0, 0]}
          color="#96CEB4"
        />
        <ScoreBar 
          score={results.innovation.score}
          position={[1, 0, 0]}
          color="#D4A5A5"
        />
        <ScoreBar 
          score={results.performance.score}
          position={[2, 0, 0]}
          color="#9B5DE5"
        />
        <ScoreBar 
          score={results.scalability.score}
          position={[3, 0, 0]}
          color="#F15BB5"
        />
      </Canvas>
    </div>
  );
}