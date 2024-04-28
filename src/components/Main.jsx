import { Emails } from "./Emails";
import { Settings } from "./Settings";
import { ButtonsGroup } from "./ButtonsGroup";
import { Profile } from "./Profile";
import { Logo } from "./Logo";
import { Templates } from "./Templates";
import { EMAILS_VERIFICATION } from "../utils/constantsForTable";
import { TEMPLATES } from "../utils/constantsForTable";

export function Main(props) {
  const { handleButtonClick, activeButton, handleLogout } = props;
  return (
    <div className="h-[600px] w-[600px] bg-primarybg mt-6 mx-auto">
      <div className="flex justify-between px-8 py-4 items-center">
        <Logo />
        <Profile handleLogout={handleLogout} />
      </div>
      <ButtonsGroup
        handleButtonClick={handleButtonClick}
        activeButton={activeButton}
      />
      {activeButton === 1 && <Emails emails={EMAILS_VERIFICATION} />}
      {activeButton === 2 && <Templates templates={TEMPLATES} />}
      {activeButton === 3 && <Settings />}
    </div>
  );
}
