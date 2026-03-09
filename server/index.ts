import express, { Request, Response } from 'express';
import next from 'next';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { config } from './config/env';

import apiRoutes from './routes';

const dev = config.isProduction === false;
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

(async () => {
  try {
    // 1. Prepare Next.js
    await app.prepare();

    // 2. Connect to MongoDB
    if (!config.dbUri) {
      throw new Error('DATABASE_URL is not defined');
    }
    
    try {
      await mongoose.connect(config.dbUri, { serverSelectionTimeoutMS: 5000 });
      console.log('✅ Connected to MongoDB');
    } catch (err) {
      console.warn('⚠️ Failed to connect to primary MongoDB. Falling back to in-memory database for development...');
      try {
        const { MongoMemoryServer } = await import('mongodb-memory-server');
        const mongod = await MongoMemoryServer.create();
        const uri = mongod.getUri();
        await mongoose.connect(uri);
        console.log('✅ Connected to In-Memory MongoDB');
        console.log(`ℹ️  URI: ${uri}`);
      } catch (memoryErr) {
        console.error('❌ Failed to start in-memory database:', memoryErr);
        throw err; // Throw original error if fallback fails
      }
    }

    // 3. Initialize Express
    const server = express();

    // Middleware
    server.use(cors());
    // Helmet helps secure Express apps, but be careful with CSP and Next.js
    server.use(
      helmet({
        contentSecurityPolicy: false, // Disable CSP for now to avoid Next.js conflicts in dev
        crossOriginEmbedderPolicy: false,
      })
    );
    server.use(express.json());
    server.use(cookieParser());

    // API Routes
    server.use('/api', apiRoutes);


    // Handle all other requests with Next.js
    server.all(/(.*)/, (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
