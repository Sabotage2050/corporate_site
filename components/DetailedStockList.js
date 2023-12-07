import Image from "next/legacy/image";
import { useRouter } from "next/router";
const DetailedStockList = ({ stocklist, fork_kind, setDetailed }) => {
  const clickdetailedButton = () => {
    setDetailed(false);
  };
  return (
    <div className="m-10">
      <div className="m-10">
        <Image
          src={`/${fork_kind}/${stocklist[2]}-${stocklist[3]}.jpg`}
          height={300}
          width={350}
          alt="test"
        />
      </div>
      <div className="flex">
        <div className="mx-10">
          <p className="text-xl">Maker: {stocklist[1]}</p>
          <p className="text-xl">Model: {stocklist[2]}</p>
          <p className="text-xl">Serial Number: {stocklist[3]}</p>
          <p className="text-xl">height: {stocklist[4]}</p>
        </div>
        <div className="mx-10">
          <p className="text-xl">attachment: {stocklist[5]}</p>
          <p className="text-xl">year: {stocklist[6]}</p>
          <p className="text-xl">hour meter: {stocklist[7]}</p>
          <p className="text-xl">applicable: {stocklist[8]}</p>
        </div>
      </div>
      <button onClick={clickdetailedButton}>戻る</button>
    </div>
  );
};

export default DetailedStockList;
