import Image from "next/legacy/image";
import Link from "next/link";

const Stocklist = ({ stocklist, fork_kind, index }) => {
  return (
    <div>
      <div className="border  border-black">
        <Image
          src={`/${fork_kind}/${stocklist[2]}-${stocklist[3]}/${stocklist[2]}-${stocklist[3]}_0.jpg`}
          height={480}
          width={480}
          alt="test"
        />
      </div>
      <div className="px-2 py-4">
        <h1 className=" text-lg">
          <p className="font-serif">Maker: {stocklist[1]}</p>
          <p className="font-serif">Model: {stocklist[2]}</p>
          <p className="font-serif">Serial Number: {stocklist[3]}</p>
        </h1>
      </div>
      <Link
        href={`/detailed/${fork_kind}/${stocklist[3]}`}
        className="font-serif"
      >
        detailed
      </Link>
    </div>
  );
};

export default Stocklist;
