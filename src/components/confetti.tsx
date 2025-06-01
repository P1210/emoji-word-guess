import React from 'react';
import ReactConfetti from 'react-confetti';
import canvasConfetti from 'canvas-confetti';

export const Confetti: React.FC = () => {
  const [windowDimension, setWindowDimension] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  const confettiRef = React.useRef<HTMLDivElement>(null);

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  React.useEffect(() => {
    window.addEventListener('resize', detectSize);
    
    // Fire multiple confetti effects for a more dynamic celebration
    const timer1 = setTimeout(() => {
      fireConfettiCannon();
    }, 100);
    
    const timer2 = setTimeout(() => {
      fireConfettiBlast();
    }, 300);
    
    const timer3 = setTimeout(() => {
      fireEmojiConfetti();
    }, 600);
    
    return () => {
      window.removeEventListener('resize', detectSize);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);
  
  const fireConfettiCannon = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1000,
    };

    function fire(particleRatio: number, opts: any) {
      canvasConfetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      decay: 0.91,
      scalar: 0.8,
      origin: { y: 0.7, x: 0.1 }
    });
    fire(0.2, {
      spread: 60,
      startVelocity: 55,
      decay: 0.91,
      scalar: 1.2,
      origin: { y: 0.7, x: 0.9 }
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      origin: { y: 0.7, x: 0.5 }
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      origin: { y: 0.7, x: 0.5 }
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      decay: 0.92,
      scalar: 1.2,
      origin: { y: 0.7, x: 0.5 }
    });
  };
  
  const fireConfettiBlast = () => {
    canvasConfetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFC700', '#FF0000', '#2E3191', '#41C0F0', '#8BC53F', '#FFF'],
      zIndex: 1000,
      startVelocity: 30,
      gravity: 1.2,
      shapes: ['circle', 'square'],
      scalar: 1.2
    });
  };
  
  const fireEmojiConfetti = () => {
    // This is just for additional visual effect
    // The emoji confetti is handled by ReactConfetti
  };

  return (
    <div ref={confettiRef}>
      <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        numberOfPieces={150}
        gravity={0.2}
        tweenDuration={8000}
        colors={['#FFC700', '#FF0000', '#2E3191', '#41C0F0', '#8BC53F', '#FFF']}
        confettiSource={{
          x: windowDimension.width / 2,
          y: windowDimension.height / 3,
          w: 0,
          h: 0
        }}
        drawShape={ctx => {
          // Draw custom shapes for some confetti pieces
          const random = Math.random();
          if (random < 0.3) {
            // Draw star
            ctx.beginPath();
            ctx.moveTo(0, -5);
            for (let i = 0; i < 5; i++) {
              ctx.lineTo(
                Math.cos((18 + i * 72) * Math.PI / 180) * 10,
                Math.sin((18 + i * 72) * Math.PI / 180) * 10
              );
              ctx.lineTo(
                Math.cos((54 + i * 72) * Math.PI / 180) * 5,
                Math.sin((54 + i * 72) * Math.PI / 180) * 5
              );
            }
            ctx.closePath();
            ctx.fill();
            return;
          } else if (random < 0.6) {
            // Draw heart
            ctx.beginPath();
            ctx.moveTo(0, 2);
            ctx.bezierCurveTo(0, 0, -5, -5, -10, -2);
            ctx.bezierCurveTo(-15, 0, -10, 10, 0, 15);
            ctx.bezierCurveTo(10, 10, 15, 0, 10, -2);
            ctx.bezierCurveTo(5, -5, 0, 0, 0, 2);
            ctx.fill();
            return;
          }
          
          // Default circle for remaining pieces
          ctx.beginPath();
          ctx.arc(0, 0, 5, 0, 2 * Math.PI);
          ctx.fill();
        }}
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          zIndex: 100, 
          pointerEvents: 'none',
          mixBlendMode: 'normal'
        }}
      />
    </div>
  );
};