import Elysia from "elysia";
import { landingRoute } from "./landing";
import { auth } from "./auth";
import { dashboardRoutes } from "./dashboard";


const pagesRoutes = new Elysia()
  .use(landingRoute)
  .use(auth)
  .use(dashboardRoutes)

export { pagesRoutes }