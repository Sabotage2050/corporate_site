import Link from "next/link";
import Image from "next/legacy/image";
const StockListIndex = () => {
  return (
    <div className="bg-gray-300 w-max h-max mb-72">
      <ul className="flex">
        <li className="m-2">
          <Image
            src="/forklift_tan_1.jpg"
            alt="tan_1"
            width={300}
            height={250}
          />
          <Link href="/stocklist/diesellist">
            <h4 className="text-blue-800 font-serif  text-l text-center">
              Diesel
            </h4>
          </Link>
        </li>
        <li className="m-2">
          <Image
            src="/forklift_tan_3.jpg"
            alt="tan_1"
            width={300}
            height={250}
          />
          <Link href="/stocklist/gasolinelist">
            <h4 className="text-blue-800 font-serif  text-l text-center">
              Gasoline
            </h4>
          </Link>
        </li>

        <li className="m-2">
          <Image
            src="/forklift_tan_4.jpg"
            alt="tan_1"
            width={300}
            height={250}
          />
          <Link href="/stocklist/batterylist">
            <h4 className="text-blue-800 font-serif  text-l text-center">
              Battery
            </h4>
          </Link>
        </li>
        <li className="m-2">
          <Image
            src="/shovelloader_tan_1.jpg"
            alt="tan_1"
            width={300}
            height={250}
          />
          <Link href="/stocklist/shovelloaderlist">
            <h4 className="text-blue-800 font-serif  text-l text-center">
              Shovelloader
            </h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StockListIndex;
