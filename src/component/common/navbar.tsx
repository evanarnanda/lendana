import { Html } from "@elysiajs/html";
import { User } from "../../db/schemas/auth";
import { SignOutDialog } from "./dialog";

interface Props {
  user: User | null
  icon: string
}
export default async function NavBar ({ user, icon }: Props) {

  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
      <div class="avatar">
        <div class="mask mask-squircle">
          <img src={icon} />
        </div>
      </div>
      </div>
      <div class="flex-none">
        {
          user ? 
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a href="/dashboard/candidate">
                  Dashboard
                </a>
              </li>
              <div class="divider my-0"></div>
              <li><a onclick="signout_dialog.showModal()">Sign Out</a></li>
            </ul>
          </div> :
          <a href='/auth/signin' class='btn btn-primary'>Login</a>
        } 
          
        
        <SignOutDialog />
      </div>
    </div>
  )
} 

