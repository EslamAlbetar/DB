import "./home.css";
import { FaBus } from "react-icons/fa";
import { IoBusOutline } from "react-icons/io5";

import { FaHotel } from "react-icons/fa6";
import { GiMicrophone } from "react-icons/gi";

function UnderHome() {
  return (
    <section  className="box  ">
      <div className="box_skil ">
        <IoBusOutline className="icon" />
        <div className="text"> رحلة سفر شاملة جميع الخدمات</div>
      </div>

      <div className="box_skil ">
        <FaHotel className="icon" />
        <div className="text">فنادق فاخرة 5 نجوم</div>
      </div>

      <div className="box_skil ">
        <GiMicrophone className="icon" />
        <div className="text">ندوات اسلامية متنوعة</div>
      </div>
    </section>
  );
}

export default UnderHome;
