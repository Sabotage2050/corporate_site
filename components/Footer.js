import Image from "next/legacy/image";
const Footer = () => {
  return (
    <footer className="bg-gray-400">
      <div className="flex">
        <div className="flex-1 w-screen mr-10">
          <Image
            className=""
            src="/sanichi_logo.png"
            width={300}
            height={50}
            alt="sanichi_logo"
          />
        </div>
        <p className="text-sm text-right font-serif">
          550-0013
          <br /> No.602 EIDAI BLDG., 34-21, 1-CHOME,<br></br> SHINMACHI,
          NISHI-KU,OSAKA JAPAN<br></br>
          TEL: +81 06-6543-6737<br></br>
          E-mail sanichi@d4.dion.ne.jp
        </p>
      </div>
      <p className=" text-center text-xs font-serif">
        Copyright 2022 SANICHI CORPORATION, inc, All Reserved.
      </p>
    </footer>
  );
};

export default Footer;
