import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const AddEventModal = ({
  modalOpen,
  setModalOpen,
  formValues,
  handleFormChange,
  addEvent,
}) => {
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Event
          </Typography>
          <Box component="form" onSubmit={addEvent}>
            <TextField
              label="Title"
              name="title"
              value={formValues.title}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Start Time"
              name="startTime"
              value={formValues.startTime}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="End Time"
              name="endTime"
              value={formValues.endTime}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Date"
              name="date"
              value={formValues.date}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" fullWidth>
              Add Event
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddEventModal;
