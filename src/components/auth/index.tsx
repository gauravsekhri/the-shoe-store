import { Outlet } from "react-router-dom";
import { Button } from "../ui/button";

export function AuthScreen() {
  return (
    <div className="w-full lg:grid lg:h-screen lg:grid-cols-2 xl:h-screen overflow-hidden">
      <div className="flex items-center justify-center bg-card">
        <div className="mx-auto grid w-[350px] gap-6">
          <Outlet />
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="https://browsecat.art/sites/default/files/cartoon-air-jordan-1-wallpapers-102731-1254601-8358368.png"
          alt="Image"
          className="h-full w-auto object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
