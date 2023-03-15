import Link from 'next/link';
import Image from 'next/image';

import {
  ArrowIcon,
  GitHubIcon,
  LinkedInIcon,
  ViewsIcon,
} from '../components/icons';
import avatar from '../public/avatar.jpg';

export const revalidate = 60;

const about = () => {
  return (
    <>
      Hey, I&apos;m a graduate student in the School of Engineering and Applied Sciences at the University at Buffalo, New York. 
      I&apos;m a developer who loves to build scalable web applications. 
      When I&apos;m not coding, I&apos;m probably playing video games or football. 
      I also love to travel and explore new places.
    </>
  );
};

const bio = () => {
  return (
    <>
      Previously, I worked as a Software Engineer at Madras Global, analyzing, designing, developing, and integrating frontend & backend applications.
      <br/><br/>
      I&apos;m seeking full-time work opportunities for after my graduation in 2023. Specifically, 
      I&apos;m looking for roles within software development and engineering, with a preference to work on automation.
    </>
  );
};

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Jashaul Diwakar</h1>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt="Jashaul Diwakar"
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/jashaul-d"
            className="flex items-center gap-2"
          >
            <LinkedInIcon />
            {`Follow me on LinkedIn`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Jashaul"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            {`Check out my Github`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="res/Jashaul_Diwakar_resume.pdf"
            className="flex items-center gap-2"
          >
            <ViewsIcon />
            {`Resume`}
          </a>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto: djashaul@gmail.com"
          >
            <ArrowIcon />
            <p className="h-7">Get in touch with me</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
