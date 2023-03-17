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
        width="90"
        height="37"
        viewBox="0 0 260 110"
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
          d="M 82.42 0.02 H 57.78 c -1.24 0 -2.24 1 -2.24 2.24 v 45.53 c 0.31 10.84 -0.18 23.69 -1.52 25.89 c -0.1 0.13 -0.2 0.28 -0.27 0.43 c -1.6 3.33 -6.9 6.78 -12.99 6.78 c -6.33 0 -13.78 -5.46 -15.94 -11.68 a 2.24 2.24 0 0 0 -2.79 -1.41 l -20.47 6.41 c -1.06 0.33 -1.7 1.38 -1.53 2.48 c 0.01 0.07 0.03 0.14 0.04 0.2 c 2.32 17.58 18.94 29.38 41.46 29.38 c 22.53 0 39.16 -11.81 41.48 -29.4 c 0.02 -0.1 0.04 -0.19 0.05 -0.29 c 1.56 -15.02 1.58 -28.71 1.58 -28.85 V 2.26 c 0.02 -1.23 -0.98 -2.24 -2.22 -2.24 z"
          fill="currentColor"
        />
        <motion.path
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M 132.71 0 h -43.6 c -1.25 0 -2.24 1 -2.24 2.24 v 100.96 c 0 1.24 1 2.24 2.24 2.24 H 132.7 c 30.15 0 50.43 -21.19 50.43 -52.73 c 0 -31.53 -20.27 -52.71 -50.42 -52.71 z m -1.29 80.8 c -0.28 0 -0.54 -0.07 -0.79 -0.16 c -0.06 0.01 -0.11 0.03 -0.17 0.03 c -0.08 0.01 -0.14 0.04 -0.22 0.04 h -14.7 c -1.2 0 -2.16 -0.97 -2.16 -2.16 V 26.88 c 0 -1.19 0.96 -2.16 2.16 -2.16 h 14.7 c 0.08 0 0.14 0.03 0.22 0.04 c 0.05 0 0.11 0.02 0.17 0.03 c 0.25 -0.09 0.51 -0.16 0.79 -0.16 c 0.43 0 0.86 0.04 1.29 0.06 c 0.75 0.03 1.5 0.09 2.24 0.18 c 13.11 1.63 21.69 12.39 21.69 27.84 s -8.59 26.21 -21.69 27.84 c -0.74 0.09 -1.49 0.15 -2.24 0.18 c -0.43 0.03 -0.86 0.07 -1.29 0.07 z"
          // d="M 126.168 20 h -34.88 c -1 0 -1.792 0.8 -1.792 1.792 v 80.768 c 0 0.992 0.8 1.792 1.792 1.792 H 126.16 c 24.12 0 40.344 -16.952 40.344 -42.184 c 0 -25.224 -16.216 -42.168 -40.336 -42.168 z m -1.032 64.64 c -0.224 0 -0.432 -0.056 -0.632 -0.128 c -0.048 0.008 -0.088 0.024 -0.136 0.024 c -0.064 0.008 -0.112 0.032 -0.176 0.032 h -11.76 c -0.96 0 -1.728 -0.776 -1.728 -1.728 V 41.504 c 0 -0.952 0.768 -1.728 1.728 -1.728 h 11.76 c 0.064 0 0.112 0.024 0.176 0.032 c 0.04 0 0.088 0.016 0.136 0.024 c 0.2 -0.072 0.408 -0.128 0.632 -0.128 c 0.344 0 0.688 0.032 1.032 0.048 c 0.6 0.024 1.2 0.072 1.792 0.144 c 10.488 1.304 17.352 9.912 17.352 22.272 s -6.872 20.968 -17.352 22.272 c -0.592 0.072 -1.192 0.12 -1.792 0.144 c -0.344 0.024 -0.688 0.056 -1.032 0.056 z"
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
