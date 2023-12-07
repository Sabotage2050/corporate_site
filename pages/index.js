import Image from "next/legacy/image";
import TestCarousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="bg-gray-300">
      <TestCarousel />
      <div className="m-12">
        <p className="text-3xl font-serif">Corporate Info.</p>
        <p className="mt-5 text-base font-serif">
          SANICHI CORPORATION is used forklift (diesel, petrol, battery), We are
          a machine tool sales company.
          <br></br>
          We have a history of 40 years as a used forklift exporter, and have
          earned the trust of all customers, both domestic and overseas,
          including buyers and end users.
        </p>
      </div>
      <div className="m-12">
        <p className="text-3xl font-serif">Forklift</p>
        <ul className="mt-5 flex">
          <li className="m-4">
            <Image
              src="/forklift_tan_1.jpg"
              alt="tan_1"
              width={300}
              height={250}
            />
          </li>
          <li className="m-4">
            <Image
              src="/forklift_tan_2.jpg"
              alt="tan_1"
              width={300}
              height={250}
            />
          </li>
          <li className="m-4">
            <Image
              src="/forklift_tan_3.jpg"
              alt="tan_1"
              width={300}
              height={250}
            />
          </li>
          <li className="m-4">
            <Image
              src="/forklift_tan_4.jpg"
              alt="tan_1"
              width={300}
              height={250}
            />
          </li>
          <li className="m-4">
            <Image
              src="/forklift_tan_5.jpg"
              alt="tan_1"
              width={300}
              height={250}
            />
          </li>
        </ul>
      </div>
      <div className="m-12">
        <p className="text-3xl font-serif">Machine Tool</p>
        <ul className="mt-5 flex">
          <li className="m-4">
            <Image
              src="/machinery_tan_1.jpg"
              alt="tan_1"
              width={300}
              height={250}
            />
          </li>
          <li className="m-4">
            <Image
              src="/machinery_tan_2.jpg"
              alt="tan_1"
              width={300}
              height={250}
            />
          </li>
          <li className="m-4">
            <Image
              src="/machinery_tan_3.jpg"
              alt="tan_1"
              width={300}
              height={250}
            />
          </li>
          <li className="m-4">
            <Image
              src="/machinery_tan_5.jpg"
              alt="tan_1"
              width={300}
              height={250}
            />
          </li>
          <li className="m-4">
            <Image
              src="/machinery_tan_6.jpg"
              alt="tan_1"
              width={300}
              height={250}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
