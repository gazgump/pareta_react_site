import React, { useState, useEffect } from "react";

    const PartnerItem = () => {

        const [data, setData] = useState([]);
        const url = 'https://pareta-strapi.fly.dev/api/partners';
        
        useEffect(() => {

        fetch(url)
        .then(response => response.json())
        .then(response => {
            setData(response.data);
        })

        .catch(error => {
            console.error('Error:', error);
        });
    });

    const listItems = data.sort((a, b) => a.id > b.id ? 1: -1).map((item) =>
        <section key={item.id} className='px-6 lg:px-20 xl:px-70 pb-12 pt-6 lg:pt-8 lg:pb-8 border-b border-gray-400'>
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-4 lg:col-span-2 flex items-center">
                  <img src={item.partnerImageLink} className='rounded-xl w-48 lg:w-full h-30 object-contain' alt={item.partnerImageAlt}/>
              </div>
              <div className="col-span-12 md:col-span-8 lg:col-span-10">
                <div className='pl-0 lg:pl-12'>
                  <h3 className='text-black text-sm lg:text-xl font-bold mb-2'>{item.partnerTitle}</h3>
                  <p className='text-black text-sm lg:text-base'>{item.partnerDescription}</p>
                </div>
              </div>
            </div>
        </section>
    );

  return (
    <>
        {listItems}
    </>
  )
};

export default PartnerItem;
