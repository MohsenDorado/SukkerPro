import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { TbPlayFootball } from "react-icons/tb";
import { GiCrossedSwords, GiVerticalBanner } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";

const useAllRoutes = () => {
  const pathname = usePathname();
    const router=useRouter();
  const routes = useMemo(() => [
    { 
      label: 'Players', 
      href: '/players', 
      icon: TbPlayFootball ,
      active: pathname === '/players' ,
      onClick:()=>{router.push('/players')}
    },
    { 
      label: 'Teams', 
      href: '/teams', 
      icon: GiVerticalBanner , 
      active: pathname === '/teams',
      onClick:()=>{router.push('/teams')}

    },
    {
      label: 'Home', 
      href: '/',
      icon: IoHomeOutline  ,
      active: pathname === '/',
      onClick:()=>{router.push('/')}


    },
    {
      label: 'Fixtures', 
      href: '/fixtures',
      icon: GiCrossedSwords ,
      active: pathname === '/fixtures',
      onClick:()=>{router.push('/fixtures')}


    },
  ], [pathname]);

  return routes;
};

export default useAllRoutes;