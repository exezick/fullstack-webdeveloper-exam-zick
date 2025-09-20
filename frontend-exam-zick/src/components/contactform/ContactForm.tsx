"use client";

import { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactForm({ open, onClose }: ContactFormProps) {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    let valid = true;
    const newErrors = { fullname: "", email: "", subject: "", message: "" };

    if (!form.fullname.trim()) {
      newErrors.fullname = "Full name is required.";
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email.";
      valid = false;
    }
    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required.";
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess("");
    if (!validateForm()) return;
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const res = await axios.post(
        "https://dev-exam.777tech.me/senior_level/api/sendMessage",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("✅ Raw API response:", res.data);

      if (res.data?.status === "200") {
        setSuccess(res.data?.message || "Message sent successfully!");
        setForm({ fullname: "", email: "", subject: "", message: "" });
        setErrors({ fullname: "", email: "", subject: "", message: "" });
      } else {
        setErrors({
          ...errors,
          message: res.data?.message || "Failed to send message.",
        });
      }
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", {
          status: err.response?.status,
          data: err.response?.data,
        });
        setErrors({
          ...errors,
          message:
            err.response?.data?.message ||
            "Failed to send message, please try again.",
        });
      } else {
        console.error("Unexpected error:", err);
        setErrors({
          ...errors,
          message: "Unexpected error, please try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          backgroundColor: "#002B6B",
          color: "#fff",
          fontWeight: "bold",
          py: 2,
        }}
      >
        Contact Us
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ p: 4 }}>
          {success && (
            <Typography
              sx={{ mt: 2, mb: 2, color: "green", fontWeight: "bold" }}
            >
              {success}
            </Typography>
          )}
          {errors.message && (
            <Typography sx={{ mt: 1, mb: 2 }} color="error">
              {errors.message}
            </Typography>
          )}
          <Box display="flex" flexDirection="column" gap={3} mt={2}>
            <TextField
              label="Full Name"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              error={!!errors.fullname}
              helperText={errors.fullname}
              fullWidth
              required
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              required
            />
            <TextField
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
              fullWidth
              required
            />
            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              multiline
              rows={4}
              fullWidth
              required
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 4, pb: 3 }}>
          <Button
            onClick={onClose}
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              bgcolor: "#FF7D00",
              "&:hover": { bgcolor: "#FAA41D" },
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "5px",
              px: 3,
              py: 1,
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
