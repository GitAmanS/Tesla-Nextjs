'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const pathname = usePathname(); 

  const links = [
    { name: 'Reports', path: '/reports' },
    { name: 'Library', path: '/Library' },
    { name: 'People', path: '/People' },
    { name: 'Activities', path: '/Activities' },
  ];

  const support = [
    { name: 'Get Started', path: '/getstarted' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <div className="fixed flex flex-col h-screen w-[17%] bg-[#FFFFFF] text-white px-5 border border-[#EFF0F6] rounded-3xl">
      <h1 className="text-2xl font-bold p-4 text-[#E51837] py-4">TESLA</h1>
      <ul className='pb-6'>
        {links.map((link) => (
          <li
            key={link.name}
            className={`px-4 py-3 my-1 w-full cursor-pointer rounded-lg text-[14px] font-[500] transition-all duration-300 ease-in-out ${
              pathname === link.path ? 'bg-[#1B59F81A] text-[#1B59F8]' : 'text-[#000000B2]'
             }`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <h1 className='text-[#00000080] font-[600] text-[16px] px-4 py-3 my-1'>Support</h1>
      <ul className='pb-2'>
        {support.map((link) => (
          <li
            key={link.name}
            className={`px-4 py-3 my-1 w-full cursor-pointer rounded-lg text-[14px] font-[500] transition-all duration-300 ease-in-out ${
              pathname === link.path ? 'bg-[#1B59F81A] text-[#1B59F8]' : 'text-[#000000B2]'
             }`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* profile button */}
      <div className='flex flex-col px-4 py-8 items-start justify-start border-t mt-auto'>
        <img 
            src='https://www.w3schools.com/w3images/avatar2.png' 
            alt='Profile Photo' 
            className='w-9 h-9 rounded-full' 
            />
        <h1 className='text-[#000000] font-[600] text-[14px]'>
            Sam Wheeler
        </h1>
        <p className='text-[#00000080] font-[400] text-[12px]'>
            samwheeler@example.com
        </p>
      </div>
    </div>
  );
};

export default SideBar;
