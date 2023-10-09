import { ImSpinner2 } from "react-icons/im";

function Loading(): JSX.Element {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="inline-block animate-spin rounded-full">
        <ImSpinner2 style={{ color: "#EA4585" }} size={40} />
      </div>
    </div>
  );
}

export default Loading;
