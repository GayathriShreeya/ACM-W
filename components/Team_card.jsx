import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Team_card = ({
  name,
  designation,
  i_link,
  p_link,
  l_link,
  info,
  role,
}) => {
  return (
    <div className="hover:-translate-y-2 transition-all h-100 w-100 inline-block text-center m-5 hover:bg-[#AFD3E2]/90 shadow-md px-8 py-5 rounded-md hover:text-black text-black/90">
      {role ? (
        <h1 className="text-xl my-4 border-b border-red w-[10rem] text-center mx-auto ">
          {role}
        </h1>
      ) : (
        ' '
      )}
      <div className="h-40 w-40 relative m-auto ">
        <Image
          src={
            i_link
              ? i_link
              : 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg'
          }
          alt={`${name}`}
          fill={true}
          style={{ objectFit: 'cover' }}
          className="rounded-md shadow-xl"
        />
      </div>
      <div className="flex flex-col ">
        <h3 className="font-medium text-[1.1rem] mt-3">{name}</h3>
        <p className="text-[.8rem] text-[#555] block">{designation}</p>
        <p className="text-[.7rem] text-[#555] block mb-[.2rem]">{info}</p>
        <div className="flex flex-row items-center justify-center">
          <a className="m-2">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href={p_link} className="m-2">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team_card;
