import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'teal';
}

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  teal: 'bg-teal-700'
};

const Section = ({ children, className, background = 'white' }: SectionProps) => {
  return (
    <section className={cn(backgroundClasses[background], 'py-16', className)}>
      {children}
    </section>
  );
};

export default Section;