import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div
      className="mt-[1rem] px-2 mx-10 sm:px-4  rounded-2xl relative bottom-2 py-[2rem] 
      bg-[#AFD3E2]/90  flex flex-row items-center justify-around"
    >
      <Image
        src={
          'https://res.cloudinary.com/dbmw0xoar/image/upload/v1684682725/ecell/ACM-W/ACM-w_iith_transparent_logo_1_pd1hrt.png'
        }
        width="700"
        height="700"
        alt="ACM-W Logo"
        className="w-[10rem]"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="text-[1rem] text-[#32769B]/90 py-1">
          Copyright © 2023 ACM-W, Student Chapter IIT Hyderbad
        </div>
        <div className="flex flex-row gap-4">
          <a href="https://www.linkedin.com/company/acm-women-student-chapter-iit-hyderabad/" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faLinkedin} color="#32769B" size="2x"/>
          </a>
          <a href="" >
            <FontAwesomeIcon icon={faInstagram} color="#32769B" size="2x"/>
          </a>
          <a href="" >
            <FontAwesomeIcon icon={faTwitter} color="#32769B" size="2x"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
