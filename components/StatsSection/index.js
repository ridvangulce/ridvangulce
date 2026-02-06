import React, { useEffect, useRef, useState } from "react";

const StatCard = ({ number, label, icon, description }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Extract number from string (e.g., "30+" -> 30)
            const targetNumber = parseInt(number.replace(/\D/g, ''));
            const suffix = number.replace(/\d/g, '');

            // Animate counter
            let currentCount = 0;
            const increment = targetNumber / 50;
            const timer = setInterval(() => {
              currentCount += increment;
              if (currentCount >= targetNumber) {
                setCount(targetNumber);
                clearInterval(timer);
              } else {
                setCount(Math.floor(currentCount));
              }
            }, 30);

            setHasAnimated(true);
            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [number, hasAnimated]);

  // Get icon emoji based on type
  const getIcon = () => {
    switch (icon) {
      case 'api':
        return '🔌';
      case 'project':
        return '🚀';
      case 'experience':
        return '⏱️';
      case 'database':
        return '🗄️';
      default:
        return '✨';
    }
  };

  return (
    <div ref={cardRef} className="stat-card group">
      <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
        {getIcon()}
      </div>
      <div className="stat-number">
        {hasAnimated ? count : 0}{number.replace(/\d/g, '')}
      </div>
      <div className="stat-label font-semibold">{label}</div>
      {description && (
        <p className="text-sm text-text-secondary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
      )}
    </div>
  );
};

const StatsSection = ({ stats }) => {
  return (
    <section className="stats-section p-2 laptop:p-0">
      <h2 className="text-2xl laptop:text-3xl font-bold text-center mb-2">
        Impact & Experience
      </h2>
      <p className="text-center text-text-secondary mb-8">
        Building production-grade systems
      </p>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            number={stat.number}
            label={stat.label}
            icon={stat.icon}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
