import { useState, useEffect } from 'react';

const useDevice = () => {
  const [device, setDevice] = useState("mb");

  const updateDevice = () => {
    const screenWidth = window.innerWidth

    let device = "mb";
    
    if(screenWidth >= 768 ){
      device = "tb"
    }

    if(screenWidth >= 1024){
      device = "pc"
    }

    setDevice(device)
  };

  useEffect(() => {
    window.addEventListener('resize', updateDevice);

    return () => {
      window.removeEventListener('resize', updateDevice);
    };
  }, []);

  return {device}
};

export default useDevice;
