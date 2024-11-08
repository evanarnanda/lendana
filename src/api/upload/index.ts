import { Elysia } from "elysia";
import { UploadController } from "./controller";
import { UploadFileModel } from "./model";

export const uploadRoute = new Elysia()
  .post('/upload', 
    async ({ body }) => {
      const uploadFile = UploadController.uploadFile({ file: body.file })

      return uploadFile
    }, {
      tags: ['Upload'],
      type: 'multipart/form-data',
      body: UploadFileModel
    })
  