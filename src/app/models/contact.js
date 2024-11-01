import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minLength: [3, "Name must be at least three characters."],
    maxLength: [50, "Name must be less than 50 characters."],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
