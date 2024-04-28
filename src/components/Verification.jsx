export function Verification(props) {
  const { isVerified, placeholderVerification } = props;
  return (
    <button className={`px-2 py-1 mr-2 ${isVerified ==="Verified" ? "bg-verified" : "bg-nonverified"}  text-white text-xs hover:opacity-80 rounded-md`}>
     {placeholderVerification}
    </button>
  );
}
