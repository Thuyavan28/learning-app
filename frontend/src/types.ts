export interface Algorithm {
    id: string;
    title: string;
    category: AlgorithmCategory;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    timeComplexity: string;
    spaceComplexity: string;
}

export type AlgorithmCategory =
    | 'Searching & Sorting'
    | 'Graph Algorithms'
    | 'Algorithm Design'
    | 'Advanced Algorithms'
    | 'CPU Scheduling';

export interface AlgorithmData {
    id: string;
    title: string;
    category: AlgorithmCategory;
    definition: string;
    realWorldUse: string;
    pros: string[];
    cons: string[];
    timeComplexity: string;
    spaceComplexity: string;
    workingSteps: WorkingStep[];
    defaultInputs: any;
    cCode?: string;
    pythonCode: string;
    examples: Example[];
    videoUrl?: string;
}

export interface WorkingStep {
    step: number;
    title: string;
    description: string;
    codeSnippet?: string;
    variables?: VariableExplanation[];
}

export interface VariableExplanation {
    name: string;
    purpose: string;
    type: string;
}

export interface Example {
    title: string;
    input: any;
    output: any;
    explanation: string;
}

export interface AnimationStep {
    type: string;
    indices?: number[];
    values?: any[];
    message?: string;
    highlight?: number[];
}

// Tree structures for heap, binary search, recursion visualizations
export interface TreeNode {
    id: string;
    value: number;
    left?: TreeNode;
    right?: TreeNode;
    x?: number;
    y?: number;
}

// Graph structures for graph algorithms
export interface GraphNode {
    id: string;
    label: string;
    x: number;
    y: number;
}

export interface GraphEdge {
    from: string;
    to: string;
    weight?: number;
    directed?: boolean;
}

export interface Graph {
    nodes: GraphNode[];
    edges: GraphEdge[];
}

// CPU Scheduling structures
export interface Process {
    id: string;
    name: string;
    arrivalTime: number;
    burstTime: number;
    priority?: number;
    remainingTime?: number;
    completionTime?: number;
    waitingTime?: number;
    turnaroundTime?: number;
}

export interface GanttEntry {
    processName: string;
    startTime: number;
    endTime: number;
    color: string;
}

// N-Queens visualization
export interface ChessboardState {
    size: number;
    queens: { row: number; col: number }[];
    conflicts?: { row: number; col: number }[];
}

// TSP structures
export interface City {
    id: string;
    name: string;
    x: number;
    y: number;
}

export interface TSPPath {
    cities: string[];
    totalDistance: number;
}
