import { Elysia } from "elysia";
import { DownloadController } from "./controller";
import { GetNameFileModel } from "./model";

export const downloadRoute = new Elysia()
  .post('/download', 
    async ({ body }) => {
      const downloadFile = DownloadController.downloadFile({ file_name: body.file_name })

      return downloadFile
    }, {
      tags: ['Download'],
      body: GetNameFileModel,
      type: 'application/json',
    })
  