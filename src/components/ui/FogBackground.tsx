import React, { useEffect, useRef } from 'react';

interface FogLayer {
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
  speed: number;
  color: string;
}

interface Ember {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  drift: number;
}

interface FogBackgroundProps {
  fogLayerCount?: number;
  emberCount?: number;
  className?: string;
}

const FogBackground: React.FC<FogBackgroundProps> = ({
  fogLayerCount = 8,
  emberCount = 20,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fogLayersRef = useRef<FogLayer[]>([]);
  const embersRef = useRef<Ember[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion preference
    reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateFogLayers();
      generateEmbers();
    };

    const generateFogLayers = () => {
      fogLayersRef.current = [];
      const colors = [
        'rgba(45, 27, 78, 0.15)',   // Midnight Purple
        'rgba(107, 70, 193, 0.08)', // Mystic Violet
        'rgba(45, 212, 191, 0.03)', // Mystic Teal hint
        'rgba(10, 10, 15, 0.2)',    // Shadow Black
      ];

      for (let i = 0; i < fogLayerCount; i++) {
        fogLayersRef.current.push({
          x: Math.random() * canvas.width * 2 - canvas.width,
          y: Math.random() * canvas.height,
          width: Math.random() * 600 + 400,
          height: Math.random() * 300 + 200,
          opacity: Math.random() * 0.3 + 0.1,
          speed: (Math.random() * 0.3 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const generateEmbers = () => {
      embersRef.current = [];
      const adjustedCount = window.innerWidth > 768 ? emberCount : Math.floor(emberCount * 0.5);

      for (let i = 0; i < adjustedCount; i++) {
        embersRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          speed: Math.random() * 0.5 + 0.2,
          drift: Math.random() * 0.5 - 0.25
        });
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2
      };
    };

    const drawFogLayer = (layer: FogLayer) => {
      const parallaxX = mouseRef.current.x * 10;
      const parallaxY = mouseRef.current.y * 5;

      const gradient = ctx.createRadialGradient(
        layer.x + layer.width / 2 + parallaxX,
        layer.y + layer.height / 2 + parallaxY,
        0,
        layer.x + layer.width / 2 + parallaxX,
        layer.y + layer.height / 2 + parallaxY,
        layer.width / 2
      );

      gradient.addColorStop(0, layer.color);
      gradient.addColorStop(1, 'rgba(10, 10, 15, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(
        layer.x + layer.width / 2 + parallaxX,
        layer.y + layer.height / 2 + parallaxY,
        layer.width / 2,
        layer.height / 2,
        0,
        0,
        Math.PI * 2
      );
      ctx.fill();
    };

    const drawEmber = (ember: Ember, time: number) => {
      const parallaxX = mouseRef.current.x * 3;
      const parallaxY = mouseRef.current.y * 3;

      // Flickering effect
      const flicker = Math.sin(time * 0.005 + ember.x) * 0.3 + 0.7;
      const currentOpacity = ember.opacity * flicker;

      // Ember glow - orange color from D002
      const gradient = ctx.createRadialGradient(
        ember.x + parallaxX,
        ember.y + parallaxY,
        0,
        ember.x + parallaxX,
        ember.y + parallaxY,
        ember.size * 3
      );

      gradient.addColorStop(0, `rgba(255, 107, 53, ${currentOpacity})`); // Ember Orange
      gradient.addColorStop(0.5, `rgba(255, 107, 53, ${currentOpacity * 0.3})`);
      gradient.addColorStop(1, 'rgba(255, 107, 53, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(
        ember.x + parallaxX,
        ember.y + parallaxY,
        ember.size * 3,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Core of ember
      ctx.fillStyle = `rgba(255, 200, 150, ${currentOpacity})`;
      ctx.beginPath();
      ctx.arc(
        ember.x + parallaxX,
        ember.y + parallaxY,
        ember.size * 0.5,
        0,
        Math.PI * 2
      );
      ctx.fill();
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw fog layers
      fogLayersRef.current.forEach((layer) => {
        if (!reducedMotionRef.current) {
          layer.x += layer.speed;

          // Wrap around
          if (layer.x > canvas.width + layer.width) {
            layer.x = -layer.width;
          } else if (layer.x < -layer.width) {
            layer.x = canvas.width + layer.width;
          }
        }

        drawFogLayer(layer);
      });

      // Draw embers
      embersRef.current.forEach((ember) => {
        if (!reducedMotionRef.current) {
          ember.y -= ember.speed;
          ember.x += ember.drift;

          // Reset ember when it goes off screen
          if (ember.y < -10) {
            ember.y = canvas.height + 10;
            ember.x = Math.random() * canvas.width;
          }
          if (ember.x < -10 || ember.x > canvas.width + 10) {
            ember.x = Math.random() * canvas.width;
          }
        }

        drawEmber(ember, time);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [fogLayerCount, emberCount]);

  // Handle reduced motion preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMotionPreference = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };

    mediaQuery.addEventListener('change', handleMotionPreference);
    return () => mediaQuery.removeEventListener('change', handleMotionPreference);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: 'transparent'
      }}
      aria-hidden="true"
    />
  );
};

export default FogBackground;
