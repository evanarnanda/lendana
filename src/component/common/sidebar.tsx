import { Html } from "@elysiajs/html";
import { User } from "../../db/schemas/auth";
import { SignOutDialog } from "./dialog";

interface Props {
  icon: string
  user: User
  avatar: string
}

export default function Sidebar ({ icon, user, avatar }: Props) {
  return (
    <aside class="flex flex-col items-center h-screen sticky top-0 overflow-y-auto space-y-4 w-72 py-6 px-4 bg-base-200">
      <div class="flex justify-between p-2">
            <a class="btn btn-ghost text-lg">
                <img alt="Logo" src={icon} class="w-4" />
                Lendana
            </a>
            
            <a class="btn btn-ghost btn-circle text-lg">
                <i class="fa-solid fa-gear"></i>
            </a>
        </div>

        <div class="flex flex-col border-y border-base-300 px-6 pt-4 grow">
                <input class="input input-bordered" placeholder="Search..."/>

                <div class="flex flex-col divide-y divide-base-300">
                    <ul class="menu px-0 py-4">
                        <li>
                            <a>
                                <i class="fa-solid fa-house fa-fw"></i>
                                Home 
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fa-solid fa-users fa-fw"></i>
                                Team 
                            </a>
                        </li>
                        <li>
                            <a class="active">
                                <i class="fa-solid fa-fire fa-fw"></i>
                                Features 
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fa-solid fa-podcast fa-fw"></i>
                                Podcast 
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fa-solid fa-newspaper fa-fw"></i>
                                News 
                            </a>
                        </li>
                    </ul>

                    <ul class="menu px-0 py-4">
                        <li>
                            <a>
                                <i class="fa-brands fa-github fa-fw"></i>
                                GitHub 
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fa-brands fa-facebook fa-fw"></i>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fa-brands fa-youtube fa-fw"></i>
                                Youtube
                            </a>
                        </li>
                    </ul>

                    <ul class="menu px-0 py-4">
                        <li>
                            <a>
                                <i class="fa-solid fa-truck fa-fw"></i>
                                Deliver 
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fa-solid fa-box fa-fw"></i>
                                Products
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fa-solid fa-store fa-fw"></i>
                                Store 
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fa-solid fa-lemon fa-fw"></i>
                                Fruits
                            </a>
                        </li>
                    </ul>
            </div>
        </div>

      <div class="flex justify-between items-center p-2">
            <a class="btn">
                <img alt="Profile" src={avatar} class="w-8 rounded-full" />

                <div class="flex flex-col text-start">
                    <span class="font-bold">{user.email}</span>
                    <span class="text-sm text-accent">{user.email}</span>
                </div>
            </a>

            <a class="btn btn-error btn-sm mr-3" title="Logout" onclick="signout_dialog.showModal()">
                <i class="fa-solid fa-door-open"></i>
            </a>
        </div>

        <SignOutDialog />
    </aside>
  )}