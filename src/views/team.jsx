import React, { useState, useEffect } from "react";
import FadeIn from '../shared/fadein';
import TeamMember from "../components/team-member";

const Team = () => {

  const [data, setData] = useState([]);
    const url = 'https://pareta-strapi.fly.dev/api/team-page';
    
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

  return (
    <>
        <meta name="title" content={`${data.metaTitle}`} />
        <meta name="description" content={`${data.metaDescription}`} />
        <title>{`${data.metaTitle}`}</title>
        <link rel="canonical" href="https://www.paretainnovations.com/partners"/>
        <meta property="og:title" content={`${data.metaTitle}`} key="og:title" />
        <meta
            property="og:description"
            content={`${data.metaDescription}`}
            key="og:description"
        />
        <meta name="keywords" content={`${data.keywords}`} />
        <FadeIn delay={100} duration={1000}>
            <div className="relative bg-purple-500 opacity-75 w-full h-auto min-h-[80px] lg:h-[80px] flex items-center justify-center">
                <h1 className="z-2 text-white text-2xl font-bold italic text-center lg:text-4xl">{data.tagline}</h1>
            </div>

            <TeamMember />

      </FadeIn>
    </>
  )
};

export default Team;