import React from "react";
import { BiChevronRight } from "react-icons/bi";

interface SideNavItemProps {
  title: string;
  // isSubCategory: boolean;
}

const SideNavItem = ({ title }: SideNavItemProps) => {
  return (
    <>
      <hr className="border-blue-800 border-[1.5px]" />
      <div className="flex justify-between items-center text-white">
        <span>{title}</span>
        <div>
        {title !== 'Offers' && title !== 'Careers' ? <BiChevronRight size={25} /> : null}
        </div>
      </div>
    </>
  );
};

export default SideNavItem;