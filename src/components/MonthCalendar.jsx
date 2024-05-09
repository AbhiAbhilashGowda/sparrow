import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Button } from "@mui/material";
import AddEventModal from "./AddEventModal";
import { renderMonthCalendar } from "./utils";
import {
  daysBox,
  daysWrapper,
  nextButtonStyle,
  prevButtonStyle,
  singleDayBox,
  wrapperStyle,
} from "./styles";

const MonthCalendar = () => {
  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = React.useState(
    new Date().getFullYear()
  );

  const [events, setEvents] = React.useState([
    {
      startTime: "00:00",
      endTime: "01:30",
      color: "#f6be23",
      title: "Daily Standup",
      date: new Date().toDateString(), // Set the date to today's date for example
    },
    {
      startTime: "4:30",
      endTime: "7:30",
      color: "#f6501e",
      title: "Weekly catchup",
      date: new Date().toDateString(), // Set the date to today's date for example
    },
    {
      startTime: "4:30",
      endTime: "7:30",
      color: "#b35045",
      title: "Weekly touch",
      date: "Wed May 02 2024", // Set the date to today's date for example
    },
  ]);

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth === 0 ? 11 : prevMonth - 1;
      const newYear = newMonth === 11 ? currentYear - 1 : currentYear;
      return newMonth;
    });
    setCurrentYear((prevYear) => {
      const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      return newMonth === 11 ? prevYear - 1 : prevYear;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth === 11 ? 0 : prevMonth + 1;
      const newYear = newMonth === 0 ? currentYear + 1 : currentYear;
      return newMonth;
    });
    setCurrentYear((prevYear) => {
      const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      return newMonth === 0 ? prevYear + 1 : prevYear;
    });
  };

  // modal
  const [modalOpen, setModalOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    title: "",
    startTime: "01:30",
    endTime: "7:30",
    color: "#f6be23",
    date: new Date().toDateString(),
  });

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addEvent = () => {
    setEvents([...events, formValues]);
    setModalOpen(false);
    setFormValues({
      title: "",
      startTime: "",
      endTime: "",
      color: "#f6be23",
      date: new Date().toDateString(),
    });
  };

  return (
    <Box height={730}>
      {/* Header */}
      <div style={wrapperStyle}>
        <Typography
          variant="h6"
          fontWeight="bold"
          style={{ textAlign: "left", fontSize: 40 }}
        >
          Calendar
        </Typography>
        <div style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddOutlinedIcon />}
            style={{ height: 50, width: 180 }}
            onClick={() => setModalOpen(true)}
          >
            Add Event
          </Button>
        </div>
      </div>

      {/* Month */}
      <Box sx={daysWrapper}>
        <Typography variant="h6">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={prevButtonStyle} onClick={handlePrevMonth}>
            <KeyboardArrowLeftOutlinedIcon />
          </div>
          <div style={nextButtonStyle} onClick={handleNextMonth}>
            <KeyboardArrowRightOutlinedIcon style={{ color: "#fff" }} />
          </div>
        </div>
      </Box>

      {/* days */}
      <Box style={daysBox}>
        <Typography variant="subtitle1" style={singleDayBox}>
          Sun
        </Typography>
        <Typography variant="subtitle1" style={singleDayBox}>
          Mon
        </Typography>
        <Typography variant="subtitle1" style={singleDayBox}>
          Tue
        </Typography>
        <Typography variant="subtitle1" style={singleDayBox}>
          Wed
        </Typography>
        <Typography variant="subtitle1" style={singleDayBox}>
          Thu
        </Typography>
        <Typography variant="subtitle1" style={singleDayBox}>
          Fri
        </Typography>
        <Typography variant="subtitle1" style={singleDayBox}>
          Sat
        </Typography>
        {renderMonthCalendar(currentYear, currentMonth, events)}
      </Box>

      {/* Add Event Modal */}
      <AddEventModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        formValues={formValues}
        handleFormChange={handleFormChange}
        addEvent={addEvent}
      />
    </Box>
  );
};

export default MonthCalendar;
