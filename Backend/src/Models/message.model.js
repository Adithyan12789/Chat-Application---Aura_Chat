import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    text: { type: String },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    image: { type: String },
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

export default Message;
