import Elysia, {Cookie, redirect} from "elysia";
import { candidateRoutes } from "./candidate";
import { adminRoutes } from './admin';
import { validateSessionToken } from "../../lib/auth";


const dashboardRoutes = new Elysia({prefix: '/dashboard'})
  .onBeforeHandle( async({ cookie, redirect }) => {
    const token = cookie.session.value

    const { session, user } = await validateSessionToken(token ?? '')

    if (!session) {
      return redirect('/')
    }
  })
  .use(adminRoutes)
  .use(candidateRoutes)

export { dashboardRoutes }
