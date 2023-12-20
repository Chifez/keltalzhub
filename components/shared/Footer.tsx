import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-[#2D2D2E]">
      <div className="p-6  lg:pb-20 lg:px-20 flex flex-col lg:flex-row gap-5 text-white text-xl">
        <div className="w-full flex flex-col gap-2 text-white ">
          <p>CONTACT</p>
          <p>
            Zandas Plaza, 111 Chime Avenue New Haven Enugu. Opposite Uduma Bus
            stop. (Last floor, left wing)
          </p>
          <p>+2349065561484</p>
          <p>Keltalzglobal@gmail.com</p>
          <p className="hidden md:block">Privacy Policy</p>
        </div>
        <div className="w-full flex flex-col gap-2 text-white ">
          <p>PAGES</p>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/testimony">Testimonials</Link>
          <Link href="/faq">FAQs</Link>
        </div>
        <p className="md:hidden">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
