import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedCard from './AdvertisedCard';

const Advertised = () => {
    const { data: advertises = []} = useQuery({
        queryKey: ["advertises"],
        queryFn: async () => {
          try {
            const res = await fetch("http://localhost:5000/advertises");
            const data = res.json();
            return data;
          } catch (error) {}
        },
      });

    return (
        <div className='mb-10'>
            <h2 className="text-2xl text-center font-bold mb-4 text-orange-500">Advertised Vehicles</h2>
            <p  className="text-4xl font-semibold w-2/3 text-center mx-auto  mb-16">Hurry Up! before stock runs out.</p>
            <div>
                {
                    advertises.map(advertise => <AdvertisedCard key={advertise._id} advertise={advertise}></AdvertisedCard>)
                }
            </div>
        </div>
    );
};

export default Advertised;