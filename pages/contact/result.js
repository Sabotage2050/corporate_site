import Link from "next/link";
import { useRouter } from "next/router";
import "98.css";
export default function Result() {
  const router = useRouter();
  return (
    <div className="flex text-2xl flex-col justify-center h-screen w-screen items-center font-serif bg-gray-300">
      <h4>Completed</h4>
      <br></br>
      <br></br>
      <h4>Thank you for inquiy</h4>
      <button
        className=" text-center border bold m-10"
        onClick={() => {
          router.back();
        }}
      >
        Back
      </button>
    </div>
  );
}
