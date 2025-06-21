import React, { useEffect, useState } from 'react';

const bannerImage =
  'https://res.cloudinary.com/drkfb976p/image/upload/v1750524587/33_dzmd0a.webp';

const Banner02 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerStyle = {
    width: '100%',
    height: '400px',
    backgroundImage: `url("${bannerImage}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'center' : 'flex-start',
    alignItems: 'center',
    paddingLeft: isMobile ? 0 : '5%',
    paddingRight: '5%',
    marginTop: '40px',
  };

  const textStyle = {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: isMobile ? 'center' : 'left',
    maxWidth: '500px',
    // textShadow: '0 2px 6px rgba(255,255,255,0.7)',
  };

  return (
    <div style={containerStyle}>
      <h3 style={textStyle}>
      Smart, sustainable travel essentials designed to make every journey more comfortable, efficient, and eco-friendly.    </h3>
    </div>
  );
};

export default Banner02;
