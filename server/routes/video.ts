import express from 'express';
import fs from 'fs';
import path from 'path';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/stream/:videoId', authenticate, (req, res) => {
  const { videoId } = req.params;
  
  // Verify user has purchased video
  // const purchase = await Purchase.findOne({ userId: req.user.userId, videoId, status: 'completed' });
  // if (!purchase) return res.status(403).send('Purchase required');

  const videoPath = path.resolve(__dirname, '../../assets/video.mp4');
  
  // Check if file exists
  if (!fs.existsSync(videoPath)) {
    return res.status(404).send('Video not found');
  }

  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(videoPath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(200, head);
    fs.createReadStream(videoPath).pipe(res);
  }
});

export default router;
