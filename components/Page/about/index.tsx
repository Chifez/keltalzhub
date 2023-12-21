import Image from 'next/image';
import AboutCard from './AboutCard';

const AboutPage = () => {
  const imagelist = [
    '/about_one.png',
    '/about_two.png',
    '/about_three.png',
    '/about_four.png',
  ];

  const contentList = [
    {
      title: 'About Us',
      desc: 'At Keltalz Technologies, our mission is to empower individuals with knowledge and skills that open doors to endless possibilities. We offer comprehensive training programs in UI/UX design, graphics design, video editing and animations, and basic computer practical training. Whether you are a beginner or an experienced professional, our courses cater to a diverse range of skill levels and provide a solid foundation for success.',
      image: ['/about_one.png', '/about_two.png'],
    },
    {
      title: 'Our Program',
      desc: 'Our training programs are designed to be immersive and hands-on, allowing you to apply your skills through real-world projects. Led by experienced instructors who bring a wealth of industry expertise, our courses ensure that  you receive top-notch instruction and guidance throughout your learning journey.',
      image: ['/about_three.png', '/about_four.png'],
    },
    {
      title: 'Our Vision',
      desc: 'Our success lies in staying at the forefront of technological advancements. We continuously update our training programs to incorporate the latest software tools and technologies, ensuring that you receive instruction that is relevant and in line with industry demands.',
      image: ['/about_one.png'],
    },
  ];
  return (
    <div>
      <div className="w-full hidden md:flex">
        {imagelist.map((item, idx) => (
          <div key={idx} className="relative w-full h-[150px]">
            <Image
              src={item}
              layout="fill"
              objectFit="cover"
              alt="about image"
            />
          </div>
        ))}
      </div>
      <div>
        {contentList.map((item, idx) => (
          <AboutCard item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default AboutPage;
