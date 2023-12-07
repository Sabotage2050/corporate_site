import Image from "next/legacy/image";
import { useRouter, usePathname, useParams } from "next/navigation";
import fs from "fs";
import { parse } from "csv-parse/sync";

const DetailedStockList = ({ photo_files, battery_stocklist }) => {
  const Params = useParams();
  // console.log(pathname);
  const id = Params.id;

  const selected_detail_stocklist = battery_stocklist.find((stock_one, i) => {
    return id == stock_one[3];
  });

  const selected_detail_photos_stocklist = Object.values(
    photo_files.find((photo_one, i) => {
      return photo_one[id];
    }),
  )[0];

  return (
    // 下のdiv要素を
    <div className="flex flex-col text-center bg-gray-300">
      <div className="order-1 grid grid-cols-4 gap-4 justify-center mt-40">
        {selected_detail_photos_stocklist.map((stocklist, index) => (
          <Image
            key={index}
            src={stocklist}
            height={300}
            width={300}
            alt="test"
          />
        ))}
      </div>
      <div className="order-2 mt-40 grid grid-cols-2">
        <p className="border border-black font-serif">
          Maker: {selected_detail_stocklist[1]}
        </p>
        <p className="border border-black font-serif">
          Model: {selected_detail_stocklist[2]}
        </p>
        <p className="border border-black font-serif">
          Serial Number: {selected_detail_stocklist[3]}
        </p>
        <p className="border border-black font-serif">
          height: {selected_detail_stocklist[4]}
        </p>
        <h5 className="border border-black font-serif">
          attachment: {selected_detail_stocklist[6]}
        </h5>
        <p className="border border-black font-serif">
          year: {selected_detail_stocklist[7]}
        </p>
        <p className="border border-black font-serif">
          hour meter: {selected_detail_stocklist[8]}
        </p>
        <p className="border border-black font-serif">
          applicable: {selected_detail_stocklist[9]}
        </p>
      </div>
    </div>
  );
};

export default DetailedStockList;

export function getServerSideProps() {
  const glob = require("glob");
  const fork_kind = "battery";
  const battery_stocklist = parse(
    fs.readFileSync(process.cwd() + `/public/csv/${fork_kind}_photos.csv`),
  );

  const photo_files = battery_stocklist.map((stocklist, i) => {
    const photo_file = fs
      .readdirSync(
        process.cwd() + `/public/${fork_kind}/${stocklist[2]}-${stocklist[3]}`,
      )
      .map((one, i) => {
        return `/${fork_kind}/${stocklist[2]}-${stocklist[3]}/` + one;
      });
    return {
      [stocklist[3]]: photo_file,
    };
  });

  return {
    props: {
      battery_stocklist,
      photo_files,
    },
  };
}
