export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  performance: number;
  trainingProgress: number;
}

export interface TrainingModule {
  id: string;
  title: string;
  progress: number;
  status: 'not-started' | 'in-progress' | 'completed';
}

export interface PerformanceMetric {
  label: string;
  value: number;
  target: number;
}

export interface AIDecision {
  id: string;
  type: string;
  recommendation: string;
  confidence: number;
  status: 'pending' | 'approved' | 'rejected';
}