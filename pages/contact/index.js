import { useForm } from "react-hook-form";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import app from "../../components/firebase";
import { db } from "../../components/firebase";
import { useRouter } from "next/router";
import "98.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    let week = ["日", "月", "火", "水", "木", "金", "土"];

    // 現在日時を取得
    let today = new Date();

    // 年月日を取得
    let year = today.getFullYear();
    let month = today.getMonth() + 1; // 1月~12月 -> 0~11
    let date = today.getDate();

    // 曜日を取得
    let day = today.getDay(); // 日~土 -> 0~6

    // 時分秒を取得
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    const now_time =
      year +
      "/" +
      month +
      "/" +
      date + // 年月日
      "(" +
      week[day] +
      ")" + // 曜日
      " " +
      hour +
      ":" +
      minute +
      ":" +
      second; // 時分秒
    const docRef = doc(db, "corporate_related", now_time);
    setDoc(docRef, {
      comment: data.comment,
      name: data.name,
      corporate_name: data.corporate_name,
      email: data.email,
      phone_number: data.phone_number,
      zip: data.zip,
      address: data.address,
    });

    // メール送信
    let send_data = {
      name: data.name,
      email: data.email,
      message: data.comment,
    };

    await fetch(process.env.NEXT_PUBLIC_SEND_EMAIL_LAMBDA, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(send_data),
    }).then((res) => {
      if (res.status == 200) {
      }
    });

    router.push("/contact/result");
  };

  return (
    <div className="bg-gray-300">
      <form
        className="flex flex-col justify-center m-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p
          className="text-2xl text-black font-serif text-center mb-5"
          id="contact"
        >
          CONTACT FORM
        </p>
        <div className="md:flex md:items-center justify-center mb-5">
          <div className="mx-5 font-serif">detail</div>
          <textarea
            className="bg-gray-300 border-2 border-black focus:outline-none focus:bg-white font-serif"
            name="comment"
            cols="50"
            rows="3"
            id="comment"
            {...register("comment", {})}
          />
        </div>
        <div className="md:flex md:items-center justify-center mb-5">
          <div className="mx-5 font-serif">Name</div>
          <input
            className="bg-gray-300 border-2 border-black focus:outline-none focus:bg-white font-serif"
            id="name"
            {...register("name", {
              required: "Required field",
            })}
          />
          {errors.name?.message && (
            <div className="mx-5 text-red-600 font-serif">
              {errors.name.message}
            </div>
          )}
        </div>
        <div className="md:flex md:items-center justify-center mb-5">
          <div className="mx-5 font-serif">
            Corporate Name / Organization Name
          </div>
          <input
            className="bg-gray-300 border-2 border-black focus:outline-none focus:bg-white font-serif"
            id="corporate_name"
            {...register("corporate_name", {})}
          />
        </div>
        <div className="md:flex md:items-center justify-center mb-5">
          <div htmlFor="email" className="mx-5 font-serif">
            E-mail Address
          </div>
          <input
            className="bg-gray-300 border-2 border-black focus:outline-none focus:bg-white font-serif"
            id="email"
            {...register("email", {
              required: "Required field",
            })}
          />
          {errors.email?.message && (
            <div className="mx-5 text-red-600 font-serif">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="md:flex md:items-center justify-center mb-5">
          <div htmlFor="phone_number" className="mx-5 font-serif">
            Phone Number
          </div>
          <input
            className="bg-gray-300 border-2 border-black focus:outline-none focus:bg-white font-serif"
            {...register("phone_number", {})}
          />
        </div>
        <div className="md:flex md:items-center justify-center mb-5">
          <div htmlFor="zip" className="mx-5 font-serif">
            Postal Code
          </div>
          <input
            className="bg-gray-300 border-2 border-black focus:outline-none focus:bg-white font-serif"
            size={15}
            id="zip"
            {...register("zip", {})}
          />
        </div>
        <div className="md:flex md:items-center justify-center mb-5">
          <div className="mx-5 font-serif">
            Country, City, Street Address,
            <br /> Name of Apartment Building, etc.
          </div>

          <input
            className="bg-gray-300 border-2 border-black focus:outline-none focus:bg-white font-serif"
            size={50}
            id="address"
            {...register("address", {})}
          />
        </div>
        <div>
          <div className="flex justify-center mt-10 mx-10 mb-10">
            <button className=" text-2xl font-serif" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
