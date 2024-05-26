import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Cctv,
  CircleUser,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ThemeButton";
import { Link } from "react-router-dom";
import { WebRoutes } from "@/enums/WebRoutes";

const UserMenu = () => {
  return (
    <>
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[200px]">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link to={WebRoutes.DASH_SUMMARY}>
              <DropdownMenuItem className="cursor-pointer">
                <Cctv className="mr-2 h-4 w-4" />
                <span>Manage Admins</span>
              </DropdownMenuItem>
            </Link>
            <Link to={WebRoutes.DASH_SUMMARY}>
              <DropdownMenuItem className="cursor-pointer">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </DropdownMenuItem>
            </Link>
            <Link to={WebRoutes.MY_PROFILE}>
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>My Profile</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="cursor-pointer">
              <ShoppingBag className="mr-2 h-4 w-4" />
              <span>My Orders</span>
            </DropdownMenuItem>
            <Link to={WebRoutes.SETTINGS}>
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserMenu;
