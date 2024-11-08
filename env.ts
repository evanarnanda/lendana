import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().min(1000).default(3000),
  NODE_ENV: z.enum(
    [
      'development',
      'test',
      'production',
    ]
  ).default('development'),
  DATABASE_URL: z.string().default('postgres://user:password@localhost:5432/your_db'),
  MINIO_ACCESS_KEY: z.string().default('minioadmin'),
  MINIO_ACCESS_SECRET_KEY: z.string().default('minioadmin123'),
  BUCKET_NAME: z.string().default('lendana-bucket'),
})
const envServer = envSchema.safeParse({
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  MINIO_ACCESS_KEY: Bun.env.MINIO_ACCESS_KEY,
  MINIO_ACCESS_SECRET_KEY: Bun.env.MINIO_ACCESS_SECRET_KEY,
  BUCKET_NAME: Bun.env.BUCKET_NAME,
});

console.log(envServer.data);

if (!envServer.success) {
  console.error(envServer.error.issues);
  throw new Error('There is an error with the server environment variables');
}

export const env = envServer.data;