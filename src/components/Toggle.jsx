import { useState } from "react";
export function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };
  return (
    <div className="flex items-center p-2">
      <div>
        <label className="relative mb-5 cursor-pointer">
          <input type="checkbox" value="" className="peer sr-only" onChange={handleToggle}/>
          <div className="peer h-5 w-10 rounded-full bg-gray-400 after:absolute after:top-[-4px] after:left-[-8px] after:h-7 after:w-7 after:rounded-full after:bg-grayish peer-checked:after:bg-highlighter after:transition-all peer-checked:bg-darkhigh peer-checked:after:translate-x-full"></div>
        </label>
      </div>
      <div className="pl-4 max-w-[60px]">
        <p className="text-2xl font-dmsans text-white">{isToggled ? "Label" : "Disable"}</p>
      </div>
    </div>
  );
}
