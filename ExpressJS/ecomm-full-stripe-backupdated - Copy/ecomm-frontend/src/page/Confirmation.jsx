import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="h-[20rem] max-w-[40%] mt-10 px-10 bg-blue-300 rounded-[1rem] shadow-2xl text-slate-700 mx-auto text-center text-2xl font-semibold flex items-center justify-center">
        <h1>Your Payment is successful</h1>
      </div>
      <Link to={"/"} className="mx-auto">
        <p className="text-blue-800 text-sm underline">Go to homepage...</p>
      </Link>
    </div>
  );
};

export default Confirmation;
