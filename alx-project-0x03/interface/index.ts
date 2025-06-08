// ButtonProps
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// LayoutProps
export interface LayoutProps {
  children: React.ReactNode;
}