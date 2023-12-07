import fs from "fs";
import { parse } from "csv-parse/sync";
import Stocklist from "../../components/Stocklist";

const Example = ({ diesel_stocklist, fork_kind, slug }) => {
  return (
    <div className="bg-gray-300">
      <div className=" grid grid-cols-3 gap-4">
        {diesel_stocklist.map((stocklist, index) => (
          <Stocklist
            key={slug + index}
            stocklist={stocklist}
            index={index}
            fork_kind={fork_kind}
          />
        ))}
      </div>
    </div>
  );
};

export default Example;

export function getStaticProps() {
  // `getStaticProps()` の中で `fs` を少しでも利用すれば OK
  const files = fs.readdirSync("csv");
  const csv_forks = files.map((fileName, index) => {
    const slug = fileName.replace(/\.csv$/, "");
    const data = fs.readFileSync(`csv/diesel_photos.csv`);
    const stocklist = parse(data);

    //const fileContent = fs.readFileSync(`csv/${fileName}`, "utf-8");
    //var lines = fileContent.toString().split("\r\n");
    //var arr = [];
    //for (var idx in lines) console.log(lines[idx].split(","));
    //const options = { escape: "\\" };
    //const { ok, err } = canParse(fileContent, options);
    //if (ok) {
    //  const rows = parse(fileContent, options);
    //  arr.push(rows);
    //} else {
    //  console.error(err);
    //}
    return {
      stocklist,
      slug,
    };
  });

  //const sample = csv_forks.map((obj) => obj.stocklist);
  //console.log(csv_forks[0]);

  let arr = [];
  let slug = [];
  csv_forks.map((stock_one, index) => {
    arr.push(stock_one.stocklist);
    slug.push(stock_one.slug);
  });

  //let battery_stocklist = arr[0];
  ////let gasoline_stocklist = [];
  let diesel_stocklist = arr[0];
  //let shovelloader_stocklist = arr[3];
  //let gasoline_stocklist = arr[2];
  //console.log(gasoline_stocklist);
  //表示するstocklistを取得
  //const present_list_file = fs.readFileSync("./homepage_photos.txt", "utf8");
  //let lines = present_list_file.toString().trim().split("\r\n");
  ////console.log(lines);
  //
  //const present_list = lines.map((file, index) => {
  //  const list_one = file.split(/(.*)\s/).filter(function (s) {
  //    return s !== "";
  //  });
  //
  //  return list_one;
  //});
  ////console.log(present_list);
  //let present_diesel_list = [];
  //diesel_stocklist.map((element, index) => {
  //  present_list.map((element2, index) => {
  //    for (let w of element) {
  //      if (w === element2[0]) {
  //        present_diesel_list.push(element);
  //      }
  //    }
  //  });
  //});
  ////console.log(present_list);
  //present_diesel_list = new Set(present_diesel_list);
  ////console.log(present_diesel_list);
  //present_diesel_list = Array.from(present_diesel_list);
  //
  //imageと番号を紐付け
  //const image_file_names = fs.readdirSync("public/stocklist");
  ////console.log(image_file_names);
  //let image_number_list = [];
  //present_diesel_list.map((element, index) => {
  //  //console.log(element[3]);
  //  present_list.map((w, index2) => {
  //    //console.log(w[1]);
  //    if (element[3] === w[1]) {
  //      image_number_list.push(index2);
  //      return true;
  //    }
  //  });
  //});
  //console.log(present_list);
  //console.log(image_number_list);
  //console.log(present_diesel_list);
  //const present_revised_gasoline_list = present_gasoline_list.filter(
  //  (s) => s !== undefined
  //);

  //console.log(present_revised_gasoline_list);
  //console.log(gasoline_stocklist);
  //const pickuped_gasoline_list = gasoline_stocklist[0].filter();

  //console.log(pickuped_gasoline_list);

  //console.log(battery_stocklist);
  //console.log(gasoline_stocklist);
  //console.log(diesel_stocklist);
  //battery_stocklist.map((stocklist) => {
  //  console.log(stocklist);
  //  console.log(typeof stocklist);
  //});
  //console.log(arr);
  const fork_kind = "diesel";
  return {
    props: {
      diesel_stocklist,
      fork_kind,
      //image_number_list,
      slug,
    },
  };
}
