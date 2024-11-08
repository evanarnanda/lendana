import { Elysia } from "elysia";
import { authRoutes } from "./auth";
import { uploadRoute } from "./upload";
import { downloadRoute } from "./download";
import { publicRoute } from "./public";

export const apiRouteV1 = new Elysia({prefix: '/api/v1' })
    .use(authRoutes)
    .use(uploadRoute)
    .use(downloadRoute)
    .use(publicRoute)