import mongoose, { Document, Schema } from "mongoose";

export interface INewsletterSubscriber extends Document {
  email: string;
  source: string;
  createdAt: Date;
}

const NewsletterSubscriberSchema = new Schema<INewsletterSubscriber>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  source: {
    type: String,
    required: true,
    default: "footer",
    trim: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export const NewsletterSubscriber =
  mongoose.models.NewsletterSubscriber ||
  mongoose.model<INewsletterSubscriber>(
    "NewsletterSubscriber",
    NewsletterSubscriberSchema
  );
