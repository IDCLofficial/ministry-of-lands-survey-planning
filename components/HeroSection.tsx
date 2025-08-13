'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  height?: 'small' | 'medium' | 'large' | 'extra-large';
  alignment?: 'left' | 'center';
  overlay?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundImage = '/photos/Imo State.jpeg',
  backgroundGradient,
  height = 'medium',
  alignment = 'left',
  overlay = true,
  children,
  className = ''
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const getHeightClass = () => {
    switch (height) {
      case 'small':
        return 'h-[30vh] sm:h-[40vh]';
      case 'medium':
        return 'h-[40vh] sm:h-[50vh] md:h-[60vh]';
      case 'large':
        return 'h-[50vh] sm:h-[60vh] md:h-[70vh]';
      case 'extra-large':
        return 'h-[60vh] sm:h-[70vh]';
      default:
        return 'h-[40vh] sm:h-[50vh] md:h-[60vh]';
    }
  };

  const getAlignmentClass = () => {
    return alignment === 'center' ? 'justify-center text-center' : 'justify-start text-left';
  };

  return (
    <section className={`relative ${getHeightClass()} ${className}`}>
      {/* Background */}
      {backgroundImage && !backgroundGradient && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      
      {backgroundGradient && (
        <div className={`absolute inset-0 ${backgroundGradient}`}></div>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/80"></div>
      )}

      {/* Content */}
      <div className={`relative z-10 flex items-center h-full ${getAlignmentClass()}`}>
        <div className="max-w-8xl px-4 sm:px-6 lg:px-20 w-full">
          <div className={`max-w-7xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
            {/* Animated Content */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              {subtitle && (
                <p className="text-sm sm:text-base text-white/80 mb-2 font-medium">
                  {subtitle}
                </p>
              )}
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                {title}
              </h1>
              
              {description && (
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            {/* Additional Content (like buttons, search bars, etc.) */}
            {children && (
              <div
                className={`transform transition-all duration-1000 ease-out delay-300 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
