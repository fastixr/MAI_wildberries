import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-full flex justify-center">
      {children}
    </div>
  );
}