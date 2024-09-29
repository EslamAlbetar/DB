import "./travel.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { TbBrandDaysCounter } from "react-icons/tb";
import { RiSortNumberDesc } from "react-icons/ri";

function Travel() {
const [age, setAge] = React.useState("");
const [day, setDay] = React.useState("");

const handleChange = (event) => {
setAge(event.target.value);
};

const handleChangee = (event) => {
setDay(event.target.value);
};

return (
<div id="reservation" className="travel_container">
<section className="">
<div className="travel_text">
<h1>إحجز رحلتك</h1>
</div>
<div className="box_transport  ">
<div className="location ">
<p className="fa_text">
<FaLocationDot />
الموقع
</p>
<p className="sun_text">الرياض</p>
</div>
<div style={{ display: "flex", flexDirection: "row-reverse" }}>
<div className="divaider " />
<div className="date ">
<p className="fa_text">
<BsCalendarDateFill />
التاريخ
</p>
<p className="date_picker">
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DemoContainer components={["DatePicker"]}>
<DatePicker label="اختر تارخ سفرك" />
</DemoContainer>
</LocalizationProvider>
</p>
</div>
</div>

<div style={{ display: "flex", flexDirection: "row-reverse" }}>
<div className="divaider" />
<div className="days ">
<p className="fa_text">
<TbBrandDaysCounter />
حدد عدد ايام العمرة
</p>
<p className="sun_text">
<Box sx={{ minWidth: 120 }}>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">اختر </InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={day}
label="Day"
onChange={handleChangee}
>
<MenuItem value={11}>3 أيام</MenuItem>
<MenuItem value={12}>5 أيام</MenuItem>
<MenuItem value={13}>7 أيام</MenuItem>
<MenuItem value={14}>14 يوم</MenuItem>
<MenuItem value={15}>30 يوم</MenuItem>
</Select>
</FormControl>
</Box>
</p>
</div>
</div>

<div style={{ display: "flex", flexDirection: "row-reverse" }}>
<div className="divaider" />
<div className="peapole ">
<p className="fa_text">
<RiSortNumberDesc />
الاشخاص
</p>
<p className="sun_text">
<Box sx={{ minWidth: 120 }}>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">اختر</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={age}
label="Age"
onChange={handleChange}
>
<MenuItem value={1}>1</MenuItem>
<MenuItem value={2}>2</MenuItem>
<MenuItem value={3}>3</MenuItem>
<MenuItem value={4}>4</MenuItem>
<MenuItem value={5}>5</MenuItem>
<MenuItem value={6}>6</MenuItem>
<MenuItem value={7}>7</MenuItem>
<MenuItem value={8}>8</MenuItem>
<MenuItem value={9}>9</MenuItem>
<MenuItem value={10}>10</MenuItem>
</Select>
</FormControl>
</Box>
</p>
</div>
</div>

<div className="search ">إبحث</div>
</div>
</section>
</div>
);
}

export default Travel;
