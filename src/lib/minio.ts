import * as Minio from "minio";
import { env } from "../../env";

const MinioClient = new Minio.Client({
  endPoint: "localhost",
  port: 9000,
  useSSL: false,
  accessKey: env.MINIO_ACCESS_KEY, 
  secretKey: env.MINIO_ACCESS_SECRET_KEY,
});

const MinioLendanaPublicClient = new Minio.Client({
  endPoint: "localhost",
  port: 9000,
  useSSL: false,
  accessKey: env.MINIO_LENDANA_PUBLIC_ACCESS_KEY, 
  secretKey: env.MINIO_LENDANA_PUBLIC_ACCESS_SECRET_KEY,
});

export { MinioClient , MinioLendanaPublicClient };