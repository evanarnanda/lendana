import { Elysia } from "elysia";
import { PulicController } from "./controller";
import { GetNameFileModel } from "../download/model";

export const publicRoute = new Elysia()
  .post('/public', 
    async ({ body }) => {
      const downloadFile = PulicController.publicLinkFile({ file_name: body.file_name })

      return downloadFile
    }, {
      tags: ['Public'],
      body: GetNameFileModel,
      type: 'application/json',
    })
  