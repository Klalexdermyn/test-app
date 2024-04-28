import { IoIosArrowDown } from "react-icons/io";
import { DropDown } from "./DropDown";
import { useState, useCallback } from "react";

export function Profile(props) {
  const { handleLogout } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = useCallback(
    () => setIsOpen((prev) => !prev),
    [setIsOpen]
  );
  return (
    <div className="relative">
      <button
        className="rounded-full flex items-center justify-between h-12 bg-secondarybg px-3"
        onClick={handleToggle}
      >
        <div className="flex items-center space-x-2">
          <img
            className="h-7 w-7 rounded-full"
            src="https://i.pravatar.cc/150?img=1"
            alt="profile"
          />
          <p className="text-sm font-semibold text-gray-400 font-dmsans">
            Hi, <span className="font-bold text-slate-300">Julia</span>
          </p>
        </div>
        <IoIosArrowDown className="text-slate-300" />
      </button>
      {isOpen && (
        <DropDown
          className="absolute right-1/2 top-5 dropshadow"
          handleLogout={handleLogout}
        />
      )}
    </div>
  );
}
