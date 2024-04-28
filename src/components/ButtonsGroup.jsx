export function ButtonsGroup(props) {
  const { handleButtonClick, activeButton } = props;
  return (
    <div className="flex flex-col items-center pt-4">
      <div className="flex h-14">
        <button
          onClick={() => handleButtonClick(1)}
          className={`border ${
            activeButton === 1 ? " text-white bg-highlighter" : ""
          }  border-highlighter hover:bg-highlighter text-highlighter hover:text-white font-dmsans text-xl py-2 px-6 rounded-l-md`}
        >
          Emails
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={`border ${
            activeButton === 2 ? "bg-highlighter text-white" : ""
          } border-highlighter hover:bg-highlighter text-highlighter hover:text-white font-dmsans text-xl py-2 px-6`}
        >
          Templates
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className={`border ${
            activeButton === 3 ? "bg-highlighter text-white" : ""
          } border-highlighter hover:bg-highlighter text-highlighter hover:text-white font-dmsans text-xl py-2 px-6 rounded-r-md`}
        >
          Settings
        </button>
      </div>
    </div>
  );
}
