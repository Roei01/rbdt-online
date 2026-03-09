import mongoose, { Document, Schema } from 'mongoose';

export interface IVideo extends Document {
  title: string;
  description: string;
  videoUrl: string; // Internal protected path or S3 key
  price: number;
}

const VideoSchema = new Schema<IVideo>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  price: { type: Number, required: true },
});

export const Video = mongoose.models.Video || mongoose.model<IVideo>('Video', VideoSchema);
