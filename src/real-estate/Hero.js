import React from 'react';
import img26 from './assets/img26.jpg';
export default function Hero() {
  return (
    <div
      style={{
        minHeight: 'max(35vh,35vw)',
        backgroundColor: 'rgba(0,0,0,.6)',
        backgroundImage: `url(${img26})`,
      }}
      className="bg-fixed text-center tracking-widest text-white grid place-items-center bg-no-repeat bg-center bg-cover overflow-hidden  bg-blend-darken "
    >
      <div>
        <div className="text-3xl font-medium">$3.500/per month</div>
        <div className="h-3" />
        <h2 className="capitalize text-6xl font-semibold">
          Apartments In <br /> London's Center{' '}
        </h2>
        <br />
        <button className="p-2 rounded-md transform transition-all duration-300 hover:scale-105 bg-yellow-600 text-white">
          Learn More
        </button>
      </div>
    </div>
  );
}
