import React from 'react'
import freightLogo from "../../assets/images/freight.png";

const Icons = () => {
  return (
    <a
    href="https://freight.com"
    className="flex items-center justify-between mr-4"
  >
    <img src={freightLogo} className="mr-3 h-8" alt="Flowbite Logo" />
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
      Freight Management system
    </span>
  </a>
  )
}

export default Icons
