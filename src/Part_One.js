import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";

const Part_One = () => {
    const [selectedTimezone, setSelectedTimezone] = useState("Asia/Kolkata");
    const [currentTime, setCurrentTime] = useState(
      moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss")
    );
    const [currentDate, setCurrentDate] = useState(moment().tz(selectedTimezone));
  
    const MorningTime = [
      "8:00 AM",
      "8:30 AM",
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
    ];
    const NoonTime = [
      "12:00 PM",
      "12:30 PM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
    ];
    const EveTime = [
      "07:00 PM",
      "07:30 PM",
      "08:00 PM",
      "08:30 PM",
      "09:00 PM",
      "09:30 PM",
      "10:00 PM",
      "10:30 PM",
      "11:00 PM",
    ];
  
    const goToPreviousWeek = () => {
      setCurrentDate(currentDate.clone().subtract(1, "week"));
      console.log(currentDate);
    };
  
    const goToNextWeek = () => {
      setCurrentDate(currentDate.clone().add(1, "week"));
    };
  
    const getWeekdaysWithDates = () => {
      const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
      const dates = [];
      const today = currentDate.clone().tz(selectedTimezone);
      for (let i = 0; i < 5; i++) {
        const date = today
          .clone()
          .startOf("week")
          .add(i + 1, "days");
        dates.push({
          day: weekdays[i],
          date: date.format("DD/MM"),
        });
      }
      return dates;
    };
  
    const weekdaysWithDates = getWeekdaysWithDates();
  
    const handleTimeZoneChange = (e) => {
      const newTimezone = e.target.value;
      setCurrentTime(moment().tz(newTimezone).format("YYYY-MM-DD HH:mm:ss"));
      setSelectedTimezone(newTimezone);
      console.log(currentDate);
    };
  
    return (
      <>
        <div className=" flex itmes-center justify-center"><p className="font-bold ">TIMEZONE : &nbsp;{selectedTimezone} </p> &nbsp;<p className="font-bold "> - {currentDate.format("YYYY-MM-DD HH:mm:ss")}</p></div>
        <div className="flex justify-between">
          <div>
            <button
              className="text-blue-900 ps-4 bg-white  font-medium  text-sm "
              onClick={goToPreviousWeek}
            >
              Previous Week
            </button>
          </div>
          <div> {moment(currentTime).format("MMM,D YYYY")}</div>
          <div>
            {" "}
            <button
              className="me-4 pe-4 text-blue-900 ps-4 bg-white  font-medium  text-sm "
              onClick={goToNextWeek}
            >
              Next Week
            </button>
          </div>
        </div>
        <br />
        <br />
        <div className="mb-4 m-4">
          <label className="pb-2 font-bold">Timezone :</label>
          <select
            value={selectedTimezone}
            className="w-full p-2 mt-1 border border-gray-800"
            onChange={handleTimeZoneChange}
          >
            <option value="Asia/Kolkata">India Standard Time (IST)</option>
            <option value="America/New_York">Eastern Time (US & Canada)</option>
            <option value="UTC">UTC (Coordinated Universal Time)</option>
          </select>
        </div>
     
        <div className="m-8">
          <table>
            
            <tbody>
              {weekdaysWithDates.map(({ day, date }) => (
                <tr key={day} className="">
                  <td className="bg-gray-100 hover:bg-gray-300">
                    <p className="text-center text-red-600 font-bold pt-2 pb-1 pe-4 ps-4 ">{day}</p>
                    <p className="text-center pt-1 pb-2 pe-2 ">{date}</p>
                  </td>
  
                  <td>
                    {MorningTime.map((item) => (
                      <span className="inline-block  w-28 mt-2 ms-1 ">
                        {" "}
                        <input type="checkbox" className="w-5 h-5 "/> {item}{" "}
                      </span>
                    ))}
                    <br />
                    {NoonTime.map((item) => (
                      <span className="inline-block w-28 mt-2 ms-1">
                        {" "}
                        <input type="checkbox" className="w-5 h-5"/> {item}{" "}
                      </span>
                    ))}
                    <br />
  
                    {EveTime.map((item) => (
                      <span className="inline-block w-28 mt-2 ms-1">
                        {" "}
                        <input type="checkbox" className="w-5 h-5"/> {item}{" "}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  

export default Part_One
