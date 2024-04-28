import { LuDollarSign } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";
import { FiCreditCard } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import clsx from "clsx";

export function DropDown(props) {
  const { className, handleLogout } = props;
  return (
    <div
      className={clsx(
        "bg-dropDown rounded-3xl my-10 p-4 h-[432px] w-[300px] mx-auto",
        className
      )}
    >
      <p className="semi-bold text-perfectGrey font-dmsans">User profile</p>
      <div className="py-6 px-4 flex items-center">
        <img
          className="h-16 w-16 rounded-full"
          src="https://i.pravatar.cc/150?img=1"
          alt="profile"
        />
        <div className="pl-3">
          <p className="text-lg text-perfectGrey font-dmsans font-semibold">
            Julia Roberts
          </p>
          <p className="text-sm text-gray-400 font-dmsans">Administrator</p>
          <div className="flex items-center">
            <FaRegEnvelope className="text-slate-400" />
            <p className="pl-2 text-sm text-gray-400 font-dmsans">
              info@app.com
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t  border-gray-400" />
      <div className="px-3 py-4 hover:bg-zinc-600 flex items-center h-16">
        <div className="text-highlighter bg-blue-50 rounded-lg h-8 w-10 flex justify-center items-center">
          <LuDollarSign />
        </div>
        {/** TODO: Move to a separate component for reusability */}
        <div className="pl-3">
          <p className="text-base font-medium text-perfectGrey leading-none">
            Personal settings
          </p>
          <p className="text-xs text-gray-400 font-dmsans">
            Email, profile, notifications
          </p>
        </div>
      </div>
      <hr className=" border-t  border-gray-400" />
      <div className="px-3 py-4 hover:bg-zinc-600 flex items-center h-16">
        <div className="text-verified bg-green-50 rounded-lg h-8 w-10 flex justify-center items-center">
          <MdOutlineShield />
        </div>
        <div className="pl-3">
          <p className="text-base font-medium text-perfectGrey leading-none font-dmsans">
            Personal settings
          </p>
          <p className="text-xs text-gray-400 font-dmsans">
            Email, profile, notifications
          </p>
        </div>
      </div>
      <hr className="border-t  border-gray-400" />
      <div className="px-3 py-4 hover:bg-zinc-600 flex items-center h-16">
        <div className="text-red-400 bg-red-50 rounded-lg h-8 w-10 flex justify-center items-center">
          <FiCreditCard />
        </div>
        <div className="pl-3">
          <p className="text-base font-medium text-perfectGrey leading-none font-dmsans">
            Personal settings
          </p>
          <p className="text-xs text-gray-400 font-dmsans">
            Email, profile, notifications
          </p>
        </div>
      </div>
      <button
        className="w-full bg-highlighter font-dmsans text-white text-sm mt-6 font-semibold rounded-md h-9"
        onClick={handleLogout}
        type="submit"
      >
        Logout
      </button>
    </div>
  );
}
