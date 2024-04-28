import { Verification } from "./Verification";

export function Emails(props) {
  const { emails } = props;
  return (
    <div className="px-14 py-4">
      <table className="min-w-full divide-y divide-gray-600">
        <thead>
          <tr>
            <th className=" py-3 text-left text-base  text-gray-400 ">Email</th>
            <th className="  py-3 text-left text-base text-gray-400 ">
              Status
            </th>
          </tr>
        </thead>
        {emails.map((email) => (
          <tbody
            key={email.email}
            className="bg-transparent divide-y divide-gray-600"
          >
            <tr>
              <td className=" flex py-4 items-center">
                <div className="w-10 h-10 ">
                  <img
                    className="rounded-full"
                    src={`${email.icon}`}
                    width="40"
                    height="40"
                    alt="Philip Harbach"
                  />
                </div>
                <p className="text-base tracking-wide text-white font-dmsans pl-3">
                  {email.email}
                </p>
              </td>
              <td className="py-4 font-dmsans text-left">
                <Verification
                  isVerified={email.verified}
                  placeholderVerification={email.verified}
                />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
