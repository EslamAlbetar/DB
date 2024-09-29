import "./footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer_logo_name">
        جميع الحقوق محفوظة لدى البيطار للحج والعمرة © 2024
      </div>
        <div className="footer_list ">
          <ul>
            <a href="#">الرئيسية</a>
            <a href="#reservation">الحجز</a>
            <a href="#contact">تواصل معنا</a>
          </ul>
        </div>
    </footer>
  )
}

export default Footer