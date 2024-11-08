import { env } from "../../../env";
import MinioClient from "../../lib/minio";

export const PulicController = {
  publicLinkFile: async ({ file_name }: { file_name: string }) => {
    const preDesignUrl = await MinioClient.presignedUrl(
      "GET",
      env.BUCKET_NAME,
      file_name,
      60 * 1 //5 minutes in seconds for expiry
    );

    return {
      data: preDesignUrl,
      message: "success",
    };
  },
}