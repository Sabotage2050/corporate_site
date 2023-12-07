import Link from "next/link";
import Head from "next/head";
import Image from "next//image";

const Header = () => {
  return (
    <div>
      <title>SANICHI CORPORATION</title>
      <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
      <meta name="description" content="Forklifts" />
      <meta name="keyword" content="Forklifts,Used forklifts" />

      <div className="bg-gray-100">
        <h1 className="font-serif text-xs">
          SANICHI CORPORATION | Japan Used Gasoline Diesel battery Forklifts,
          Japan Used Shovel Loader
        </h1>
        <h2>
          <Image
            src="/sanichi_logo.png"
            alt="SANICHI CORPORATION"
            width={365}
            height={60}
            priority={true}
          />
        </h2>
      </div>
    </div>
  );
};

export default Header;
