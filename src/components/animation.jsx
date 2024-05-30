import React, { useState, useEffect } from 'react';
import '../App.css'; // CSS 파일을 임포트합니다.

const AnimatedDiv = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`${animate ? 'animate-slide-in' : 'hidden1'} border-2 border-gray-900 block w-full`}>
    </div>
  );
};

export default AnimatedDiv;
