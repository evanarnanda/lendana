import Elysia from "elysia";
import { Html } from "@elysiajs/html";
import BaseHtml from "../../component/common/base";
import NavBar from "../../component/common/navbar";
import FirstComponent from "../../component/FirstComponent";
import Test from "../../component/Text";
import { validateSessionToken } from "../../lib/auth";
import Footer from "../../component/common/footer";
import { MinioLendanaPublicClient } from "../../lib/minio";
import { env } from "../../../env";

const landingRoute = new Elysia()
  .get('/', async ({ cookie }) => { 
    const token = cookie.session.value

    const { session, user } = await validateSessionToken(token ?? '')
    
    const iconUrl = await MinioLendanaPublicClient.presignedUrl(
      "GET",
      env.LENDANA_PUBLIC_BUCKET_NAME,
      'favicon.ico',
      60 * 1 //5 minutes in seconds for expiry
    );
    return (
      <BaseHtml>
        <>
          <NavBar user={user} icon={iconUrl}/>
          <div class='flex flex-col justify-center items-center h-screen'>
            <FirstComponent />
            <Test />
          </div>
          <Footer icon={iconUrl}/>
        </>
      </BaseHtml>
    )
  })

export { landingRoute }