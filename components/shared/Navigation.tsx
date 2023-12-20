'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';

import Link from 'next/link';
import Button from '@/components/shared/Button';
import { usePathname } from 'next/navigation';

const links = [
  { title: 'About', link: '/about' },
  { title: 'Courses', link: '/courses' },
  { title: 'Testimonies', link: '/testimony' },
  { title: 'FAQs', link: '/faq' },
];
const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const currentRoute = usePathname();
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <nav className="lg:px-12 lg:py-10 flex justify-between items-center h-[10vh] lg:mb-4 max-w-full sticky top-0 z-50">
        <Link href="/" className="flex-1 flex items-center">
          <Image
            src="keltalz_logo.svg"
            width={50}
            height={50}
            alt="keltalz logo"
          />
          Keltalz_Tech
        </Link>
        <div className="block mr-5 lg:hidden" onClick={toggleMenu}>
          <RxHamburgerMenu />
        </div>
        <ul
          className={`absolute w-full left-0 right-0 top-[10vh] z-50 lg:top-0 lg:z-0 bg-white lg:bg-transparent h-[calc(100vh-10vh)]  lg:h-full lg:relative flex-1 flex flex-col lg:flex-row justify-around lg:justify-between lg:gap-2 items-center text-sm transition ${
            menuIsOpen ? 'translate-x-0' : 'translate-x-[100%]'
          } lg:translate-x-0`}
        >
          {links.map((items, idx) => (
            <li key={idx} className="group relative pb-1">
              <Link href={items.link} onClick={toggleMenu}>
                {items.title}
              </Link>
              <span
                className={`absolute bottom-0 transition-all duration-200 left-0 h-1 w-0 rounded-md lg:bg-[#000B6A] ${
                  currentRoute === items.link ? 'w-full lg:bg-[#000B6A]' : ''
                }`}
              ></span>
            </li>
          ))}
          <Button
            title="Start learning"
            url="/enroll"
            extraclass="text-2xl py-2 px-2 md:px-4 text-white"
          />
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
