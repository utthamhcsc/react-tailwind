import React from 'react';
import img26 from './assets/img26.jpg';
export default function FlatsForRent() {
  return (
    <div className="flex flex-col items-center mt-14">
      <h1 className="text-3xl font-extrabold p-3">
        POPULAR APARTMENTS FOR RENT
      </h1>
      <div className="h-3 w-24 bg-yellow-600" />
      <div
        className="font-thin text-center text-sm"
        style={{ maxWidth: '700px' }}
      >
        Mauris sodales tellus vel felis dapibus, sit amet porta nibh egestas.
        Sed dignissim tellus quis sapien sagittis cursus. Cras porttitor auctor
        sapien eu tempus nunc placerat
      </div>

      <div className="flex space-x-4 overflow-auto w-full mt-12">
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <FlatCards key={'flat' + i} />
          ))}
      </div>
    </div>
  );
}

const FlatCards = () => {
  return (
    <div
      className="p-2 rounded-sm border text-center"
      style={{ minWidth: '220px', minHeight: '300px' }}
    >
      <div className="p-5">
        <b>$3500</b>/per month
      </div>
      <h3 className="font-medium uppercase">
        Ut pulvinar tellus sed elit luctus
      </h3>
      <div className="py-3 text-yellow-600 text-xs">12 Reviews</div>
      <img src={img26} alt="" className="w-full" />
    </div>
  );
};
