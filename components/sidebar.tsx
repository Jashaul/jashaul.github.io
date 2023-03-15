'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

type tnavItems = {
  [key: string]: {
    name: string,
    x: number,
    y: number,
    w: string
  }
}

const navItems: tnavItems = {
  '/': {
    name: 'home',
    x: 0,
    y: 0,
    w: '64px',
  },
  // '/about': {
  //   name: 'about',
  //   x: 64,
  //   y: 35,
  //   w: '65px',
  // },
  '/experience': {
    name: 'experience',
    x: 64,
    y: 35,
    w: '103px',
  },
  '/projects': {
    name: 'projects',
    x: 168,
    y: 69,
    w: '83px',
  }
};

function Logo() {
  return (
    <Link aria-label="Jashaul Diwakar" href="/">
      <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        width="25"
        height="37"
        viewBox="0 0 262 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M 247.26 0.03 H 173.34 c -3.72 0 -6.72 3 -6.72 6.72 v 136.59 c 0.93 32.52 -0.54 71.07 -4.56 77.67 c -0.3 0.39 -0.6 0.84 -0.81 1.29 c -4.8 9.99 -20.7 20.34 -38.97 20.34 c -18.99 0 -41.34 -16.38 -47.82 -35.04 a 6.72 6.72 90 0 0 -8.37 -4.23 l -61.41 19.23 c -3.18 0.99 -5.1 4.14 -4.59 7.44 c 0.03 0.21 0.09 0.42 0.12 0.6 c 6.96 52.74 56.82 88.14 124.38 88.14 c 67.59 0 117.48 -35.43 124.44 -88.2 c 0.06 -0.3 0.12 -0.57 0.15 -0.87 c 4.68 -45.06 4.74 -86.13 4.74 -86.55 V 6.75 c 0.06 -3.69 -2.94 -6.72 -6.66 -6.72 z"
          fill="currentColor"
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <nav
          className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            {navItems[pathname] ? (
              <>
                {/* Desktop version, hidden on mobile, animates y axis */}
                <div className="hidden md:block">
                  <motion.div
                    className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                    layoutId="test2"
                    initial={{ opacity: 0, y: navItems[pathname].y }}
                    animate={{
                      opacity: 1,
                      y: navItems[pathname].y,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
                {/* Mobile version, hidden on desktop, animates x axis */}
                <div className="block md:hidden">
                  <motion.div
                    className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                    layoutId="test"
                    initial={{ opacity: 0, x: navItems[pathname].x }}
                    animate={{
                      opacity: 1,
                      x: navItems[pathname].x,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
              </>
            ) : null}

            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;

              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]',
                    {
                      'text-neutral-500': !isActive,
                      'font-bold': isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
