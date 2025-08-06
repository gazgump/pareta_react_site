import React, { useState, useEffect } from "react";

    const TeamMember = () => {

        const [data, setData] = useState([]);
        const url = 'https://pareta-strapi.fly.dev/api/teams';
        
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

    const listItems = data.sort((a, b) => a.order > b.order ? 1: -1).map((item) =>
        <section key={item.order} className='px-6 lg:px-20 xl:px-40 pb-12 pt-6 lg:pt-8 lg:pb-8 border-b border-gray-400'>
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-4 lg:col-span-2 flex items-start justify-start">
                  <img src={item.teamMemberImageLink} className='flex justify-start rounded-xl w-50 h-50 object-cover mb-6 lg:mb-0' alt={item.teamMemberImageAlt}/>
              </div>
              <div className="col-span-12 md:col-span-8 lg:col-span-10">
                <div className='pl-0 lg:pl-12'>
                  <h3 className='text-black text-2xl lg:text-3xl font-bold mb-2'>{item.teamMemberTitle}</h3>
                  <p className='text-black text-xl lg:text-2xl'>{item.teamMemberDescription}</p>
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

export default TeamMember;
