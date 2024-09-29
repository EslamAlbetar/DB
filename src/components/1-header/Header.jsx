import "./header.css";
import { MdPersonOutline } from "react-icons/md";
import { RiSunFoggyLine } from "react-icons/ri";

function Header() {
  return (
    <header className="nav_bar ">
      <div className="logo_name">البيطار للحج والعمرة</div>
      <div className="list">
        <ul>
          <a href="#">الرئيسية</a>
          <a href="#reservation">الحجز</a>
          <a href="#contact">تواصل معنا</a>
        </ul>
      </div>

      <div className="btn_nav">
        <ul className="btn_item">
          <nav>
            <MdPersonOutline width={80} height={80} className="icon_nav"/>
          </nav>
          <nav className="tow">
            <RiSunFoggyLine className="icon_nav "/>
          </nav>
        </ul>
      </div>
    </header>
  );
}

export default Header;
