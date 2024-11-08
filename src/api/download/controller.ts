import { fileTypeFromBuffer } from "file-type";
import MinioClient from "../../lib/minio";
import { env } from "../../../env";

export const DownloadController = {
  downloadFile: async ({ file_name }: { file_name: string }) => {
    const stream = await MinioClient.getObject(env.BUCKET_NAME, file_name);

    // Convert the stream to a buffer
    const chunks: Buffer[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const fileBuffer = Buffer.concat(chunks as unknown as Uint8Array[]);

    //determine the file type from the buffer
    const type = await fileTypeFromBuffer(new Uint8Array(fileBuffer));
    if (!type) {
      return {
        data: null,
        message: "Unable to determine file type",
      };
    }

    // Set response headers for PNG file
    const headers = {
      "Content-Type": type?.mime ?? "image/jpeg",
      "Content-Disposition": `attachment; filename="${file_name}"`,
    };

    // Return the file buffer as the response with headers
    return new Response(fileBuffer, { headers });
  },
}