import { Verification } from "./Verification";
export function Templates(props) {
  const { templates } = props;
  return (
    <div className="px-14 py-4">
      <table className="min-w-full divide-y divide-gray-600">
        <thead>
          <tr>
            <th className="py-3 text-left text-base text-gray-400">Name</th>
            <th className="py-3 text-left text-base text-gray-400">Emails</th>
          </tr>
        </thead>
        {templates.map((user) => (
          <tbody
            key={user.name}
            className="bg-transparent divide-y divide-gray-600"
          >
            <tr>
              <td className="flex py-4 items-center">
                <p className="text-base tracking-wide text-white font-dmsans ">
                  {user.name}
                </p>
              </td>
              <td className="py-4 font-dmsans text-left">
                {user.emails.map((email) => (
                  <Verification
                    key={email.email}
                    placeholderVerification={email.email}
                    isVerified={email.verified}
                  />
                ))}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
