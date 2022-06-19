import Link from 'next/link';

export default function Nav() {
  // const isActive = route.path === router.pathname;
  const defaultClasses = `font-sans font-semibold flex rounded items-center text-opacity-40 justify-center py-2 text-sm`;
  const activeClasses = `bg-gray-1000 bg-opacity-5 dark:bg-white text-primary filter-saturate filter-blur`;
  const inactiveClasses = `hover:bg-gray-900 filter-saturate hover:bg-opacity-5 dark:hover:bg-white dark:text-white  hover:text-gray-1000 dark:hover:text-gray-100 text-tertiary`;

  return (
    <nav className="fixed top-0  w-full py-2 bg-white border-b border-gray-400 dark:border-opacity-10 border-opacity-20 md:bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-40 filter-blur">
      <ul className="flex max-w-4xl  gap-6 mx-auto h-12"></ul>
    </nav>
  );
}
