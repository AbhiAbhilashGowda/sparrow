import { Typography } from "@mui/material";

// Function to get the number of days in the current month
export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

// Function to get the first day of the month
export const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

// Component to render individual events
export const Event = ({ event }) => {
  return (
    <div
      style={{
        backgroundColor: event.color,
        color: "#fff",
        padding: "4px 8px",
        borderRadius: "4px",
        marginBottom: "4px",
      }}
    >
      <Typography variant="body2">{event.title}</Typography>
      <Typography variant="caption">
        {event.startTime} - {event.endTime}
      </Typography>
    </div>
  );
};

// Function to render the month calendar
export const renderMonthCalendar = (year, month, events) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  const calendar = [];

  // Generate empty slots for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendar.push(<div key={`empty-${i}`} />);
  }

  // Generate days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isCurrentDate =
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear();

    const eventsOnDate = events.filter(
      (event) =>
        new Date(year, month, day).toDateString() ===
        new Date(event.date).toDateString()
    );

    calendar.push(
      <div
        key={day}
        style={{
          padding: "30px 10px",
          borderRadius: "4px",
          backgroundColor: isCurrentDate ? "#1976d2" : "#fff",
          color: isCurrentDate ? "#fff" : "#000",
          textAlign: "center",
          border: "0.5px solid #e6e3e3",
        }}
      >
        <div>{day}</div>
        {eventsOnDate.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </div>
    );
  }

  return calendar;
};

