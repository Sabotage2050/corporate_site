import fs from "fs";
import { parse } from "csv-parse/sync";
import Stocklist from "../../components/Stocklist";

const Example = ({ battery_stocklist, fork_kind, photofiles }) => {
  photofiles.map((one, i) => {});

  return (
    <div className="my-8 bg-gray-300">
      <div className=" grid grid-cols-3 gap-4">
        {battery_stocklist.map((stocklist, index) => (
          <Stocklist
            key={index}
            stocklist={stocklist}
            fork_kind={fork_kind}
            index={index}
            battery_stocklist={battery_stocklist}
          />
        ))}
      </div>
    </div>
  );
};

export default Example;

export function getStaticProps() {
  const glob = require("glob");
  const files = fs.readdirSync("csv");
  const battery_stocklist = parse(
    fs.readFileSync(process.cwd() + "/csv/battery_photos.csv"),
  );

  const fork_kind = "battery";
  const photofiles = battery_stocklist.map((stocklist, i) => {
    const photo_file = glob.sync(
      `./public/${fork_kind}/${stocklist[2]}-${stocklist[3]}/*`,
      { nodir: true },
    );
    return {
      [stocklist[3]]: photo_file,
    };
  });

  return {
    props: {
      battery_stocklist,
      fork_kind,
      photofiles,
    },
  };
}
