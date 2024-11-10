import { Html } from "@elysiajs/html";
import Elysia from "elysia";
import BaseHtml from "../../../component/common/base";
import CandidateDashboard from "./component/dashboard";
import { MinioLendanaPublicClient } from "../../../lib/minio";
import { env } from "../../../../env";
import Sidebar from "../../../component/common/sidebar";
import { validateSessionToken } from "../../../lib/auth";

const candidateRoutes = new Elysia({prefix: '/candidate'})
  .get('/', async ({ cookie }) =>  {

    const { session, user } = await validateSessionToken(cookie.session.value ?? '')
    
    const iconUrl = await MinioLendanaPublicClient.presignedUrl(
      "GET",
      env.LENDANA_PUBLIC_BUCKET_NAME,
      'favicon.ico',
      60 * 1 //5 minutes in seconds for expiry
    );
    const avatarUrl = await MinioLendanaPublicClient.presignedUrl(
      "GET",
      env.LENDANA_PUBLIC_BUCKET_NAME,
      'cewek.webp',
      60 * 1 //5 minutes in seconds for expiry
    );
    if (session && user) {
      return (
        <BaseHtml>
          <div class="flex flex-row h-screen">
            <Sidebar icon={iconUrl} user={user} avatar={avatarUrl}/>
            <CandidateDashboard />
          </div>
        </BaseHtml>
      )
    }
  })


export { candidateRoutes }