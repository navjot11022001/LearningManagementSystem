require("dotenv").config();
import { Redis } from "ioredis";

const connectClient = () => {
  const redisUrl = process.env.REDIS_URL;
  if (redisUrl) return redisUrl;
  throw new Error("Redis connection error");
};
export const redis = new Redis(connectClient());
