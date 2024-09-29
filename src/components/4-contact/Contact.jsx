import "./contact.css";
import { TbPhoneCalling } from "react-icons/tb";

function Contact() {
return (
<div id="contact" className="contact_container">
<div className="text_contact">
<h1>
<TbPhoneCalling className="icon" /> تواصل معنا
</h1>
<span className="contact_subtitle ">+966-506972000 <span className="none">/</span> +966-506972001</span>
</div>
</div>
);
}

export default Contact;
