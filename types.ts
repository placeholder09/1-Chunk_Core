export enum VisualMode {
  TwoDGrid = '2D Grid',
  ThreeDGrid = '3D Grid',
  ThreeDCube = '3D Cube',
  ThreeDSpheres = '3D Spheres',
}

export enum AudioGUIVisibility {
  IconAndText = 'Show Icon and Text',
  IconOnly = 'Show Icon Only',
  Hidden = 'Hide',
}

export enum ResponseLayout {
  Bottom = 'Bottom',
  Side = 'Side by Side',
}

export type StimulusType = 'audio' | 'position' | 'color' | 'shape' | 'text';

// Represents a single visual element, combining position, color, and shape
export interface VisualStimulus {
  position: number;
  color: number;
  shape: number;
  text: number;
}

// A "Stimulus" is the set of stimuli presented in a single turn
export interface Stimulus {
  id: number;
  audio: number | null;
  visual: VisualStimulus | null;
}

export interface GameSettings {
  nValue: number;
  trials: number;
  speed: number;
  adaptive: boolean;
  stimuli: {
    [key in StimulusType]: {
      enabled: boolean;
      count: number;
    }
  };
  visualMode: VisualMode;
  audioGUIVisibility: AudioGUIVisibility;
  responseLayout: ResponseLayout;
  visualizerHeight: number;
  gridSize: number; // e.g., 3 for 3x3 or 3x3x3
  inactiveOpacity: number;
  cubeGap: number;
  cameraAngleX: number; // Vertical camera angle for 3D modes
  sphereCount: number;
  respawnSphere: boolean;
  sphereSpeed: number;
  interferenceEnabled: boolean;
  interferencePercentage: number;
}

export type UserResponse = 'match' | 'new';

export interface PerformanceStats {
    accuracies: Partial<Record<StimulusType, number>>;
    overallAccuracy: number;
    scores: Partial<Record<StimulusType, {correct: number; total: number}>>;
    bestStreak: number;
    currentStreak: number;
}

export interface TurnFeedback {
  userResponse: UserResponse;
  correctResponse: UserResponse;
}