import { Html } from "@elysiajs/html";
import { User } from "../../../db/schemas/auth";

interface Props {
  user: User | null
}
export default function Hero( { user } : Props) {
  
  return (
    <div class="flex justify-center">
      <div class="flex flex-col items-center text-center gap-6 max-w-xl">
          <span class="text-sm text-accent">Lendana: Get a broad!</span>

          <h1 class="text-5xl font-bold">We help you to get a broad</h1>

          <span class="">
              We help you to connect to morethan 180+ Agencies . Lendana is the solution for everyone who wants to
              participate in working abroad!
          </span>
          { user ? 
          <div class="flex gap-4">
            <a class="btn btn-neutral">
              See our Job Posts
              <i class="fa-solid fa-blog"></i>
            </a>
          </div>
          :
          <div class="flex gap-4">
            <a class="btn btn-primary" href="/auth/signup">
                Get Started
                <i class="fa-solid fa-arrow-right text-sm"></i>
            </a>
            <a class="btn btn-neutral">
                  See our Job Posts
                <i class="fa-solid fa-blog"></i>
            </a>
          </div>
          }
      </div>
  </div>
  );
}