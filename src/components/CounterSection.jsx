import React, { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ value, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        count: value,
        transition: { duration: 2, delay, ease: 'easeOut' },
      });
    }
  }, [controls, inView, value, delay]);

  return (
    <motion.h1
      ref={ref}
      initial={{ count: 0 }}
      animate={controls}
      onUpdate={(latest) => {
        if (latest.count !== undefined) {
          setCount(Math.floor(latest.count));
        }
      }}
      className="counter"
    >
      {count}
    </motion.h1>
  );
};

const counters = [
  { icon: 'flaticon-ui', value: 150, label: 'étudiants accompagnés', delay: 0 },
  { icon: 'flaticon-global', value: 300, label: 'projets d’immigration réussis', delay: 0.2 },
  { icon: 'flaticon-time', value: 1600, label: 'établissements d\'enseignement désignés disponibles', delay: 0.4 },
  { icon: 'flaticon-compass', value: 10, label: 'provinces de destination possibles', delay: 0.6 },
];

const CounterSection = () => (
  <div className="counter-section pb-70">
    <div className="container">
      <div className="row">
        {counters.map(({ icon, value, label, delay }, idx) => (
          <div
            key={idx}
            className="col-lg-3 col-md-6 wow fadeInUp animated"
            style={{ animationDuration: '3500ms' }}
          >
            <div className="single-counter-text">
              <div className="counter-icon">
                <i className={icon}></i>
              </div>
              <div className="counter-content d-flex align-items-end gap-1">
                <h3>+</h3>
                <Counter value={value} delay={delay} />
              </div>
              <div className="counter-title-style-2">
                <h4>{label}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CounterSection;
