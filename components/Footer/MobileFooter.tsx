"use client"
import useAllRoutes from "@/hooks/useAllRoutes";
import MobileItems from "./MobileItems";

const MobileFooter = () => {
  const routes=useAllRoutes();
  
  return ( 
    <div 
      className="
        fixed 
        justify-between 
        w-full 
        bottom-0 
        z-50 
        flex 
        items-center 
        bg-white 
        border-t-[1px] 
        md:hidden
      "
    >
      {routes.map((route) => (
        <MobileItems 
          key={route.href} 
          href={route.href} 
          active={route.active} 
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
      
    </div>
   );
}

export default MobileFooter