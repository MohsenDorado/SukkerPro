import clsx from 'clsx';
import Link from 'next/link';
import React from 'react'
interface MobileItemProps {
  label :string;
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
  }
  
const MobileItems: React.FC<MobileItemProps> = ({ 
  label,
    href, 
    icon: Icon, 
    active,
    onClick
  }) => {
  return (

    <Link 
      onClick={onClick} 
      href={href} 
      className={clsx(`
        group 
        items-center
        flex 
        flex-col
        gap-x-3 
        text-sm 
        leading-6 
        font-semibold 
        w-full 
        justify-center 
        p-4 
        text-gray-500 
        hover:text-black 
        hover:bg-gray-100
      `,
        active && 'bg-gray-100 text-black',
      )}>
      <Icon className="h-6 w-6" />
      {label}
    </Link>  )
}

export default MobileItems