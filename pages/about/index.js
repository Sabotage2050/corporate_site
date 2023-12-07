import Image from "next/legacy/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="flex flex-col bg-gray-300 text-center">
      <div className="order-1">
        <ul className="flex">
          <li>
            <Link href="/">
              <p className="text-blue-800 font-serif">Top</p>
            </Link>
          </li>
          <li>&nbsp;&gt;&nbsp;</li>
          <li className="font-serif">About us</li>
        </ul>
        <Image
          src="/sanichi_about_us_logo.png"
          alt="sample"
          width={500}
          height={60}
        />
      </div>
      <div className="order-2 mt-20 bg-gray-200 m-auto">
        <table className="border bg-gray-300">
          <tbody>
            <tr>
              <td className="border border-black font-serif">Company:</td>
              <td className="border border-black font-serif">
                SANICHI CORPORATION, inc
              </td>
            </tr>
            <tr>
              <td className="border border-black font-serif">establishment:</td>
              <td className="border border-black font-serif">1988</td>
            </tr>
            <tr>
              <td className="border border-black font-serif">capital</td>
              <td className="border border-black font-serif">10 million yen</td>
            </tr>
            <tr>
              <td className="border border-black font-serif">president :</td>
              <td className="border border-black font-serif">KUNIO FUKAI</td>
            </tr>
            <tr>
              <td className="border border-black font-serif">Address:</td>
              <td className="border border-black font-serif">
                〒550-0013<br></br>
                No.602 EIDAI BLDG., 34-21, 1-CHOME,<br></br> SHINMACHI,
                NISHI-KU,OSAKA JAPAN
              </td>
            </tr>
            <tr>
              <td className="border border-black font-serif">TEL:</td>
              <td className="border border-black font-serif">06-6543-6737</td>
            </tr>
            <tr>
              <td className="border border-black font-serif">FAX:</td>
              <td className="border border-black font-serif">06-6543-6747</td>
            </tr>
            <tr>
              <td className="border border-black font-serif">E-mail:</td>
              <td className="border border-black font-serif">
                sanichi@d4.dion.ne.jp
              </td>
            </tr>
            <tr>
              <td className="border border-black font-serif">business:</td>
              <td className="border border-black font-serif">
                used forklifts, machine tools, domestic and overseas sales
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="order-3 mt-20 mb-20 m-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.0506555165593!2d135.49153871552656!3d34.67867098044029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7024c61ab53%3A0x4f0065c1d7e037ea!2z44CSNTUwLTAwMTMg5aSn6Ziq5bqc5aSn6Ziq5biC6KW_5Yy65paw55S677yR5LiB55uu77yT77yU4oiS77yS77yRIOOCqOODvOODgOOCpOODk-ODqw!5e0!3m2!1sja!2sjp!4v1661669622189!5m2!1sja!2sjp"
          width="450"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
