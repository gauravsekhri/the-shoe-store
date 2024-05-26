import { Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, Outlet, useLocation } from "react-router-dom";
import UserMenu from "../common/UserMenu";
import { WebRoutes } from "@/enums/WebRoutes";
import classNames from "classnames";

interface ILink {
  label: string;
  link: string;
}

export function SettingsLayout() {
  const { pathname } = useLocation();

  const linksArray: ILink[] = [
    {
      label: "My Profile",
      link: WebRoutes.MY_PROFILE,
    },
    {
      label: "My Address",
      link: WebRoutes.MY_Address,
    },
    {
      label: "My Transactions",
      link: WebRoutes.MY_TRANSACTIONS,
    },
    {
      label: "Change Password",
      link: WebRoutes.CHANGE_PW,
    },
    {
      label: "Help & Support",
      link: WebRoutes.HELP_SUPPORT,
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Store</span>
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link to="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial"></form>
          <UserMenu />
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            {linksArray.map((ele, ind) => (
              <Link
                to={ele.link}
                key={ind + 2}
                className={classNames("hover:text-primary", {
                  "font-semibold text-primary": pathname == ele?.link,
                })}
              >
                {ele.label}
              </Link>
            ))}
          </nav>
          <div className="grid gap-6">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
