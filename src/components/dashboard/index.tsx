import {
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ScrollArea } from "../ui/scroll-area";
import UserMenu from "../common/UserMenu";
import { WebRoutes } from "@/enums/WebRoutes";
import classNames from "classnames";

interface ILink {
  label: string;
  link: string;
  icon: any;
}

export function DashboardLayout() {
  const { pathname } = useLocation();

  const linksArray: ILink[] = [
    {
      label: "Summary",
      link: WebRoutes.DASH_SUMMARY,
      icon: Home,
    },
    {
      label: "Orders",
      link: WebRoutes.DASH_ORDERS,
      icon: ShoppingCart,
    },
    {
      label: "Products",
      link: WebRoutes.DASH_PRODUCTS,
      icon: Package,
    },
    {
      label: "Customers",
      link: WebRoutes.DASH_PRODUCTS,
      icon: Users,
    },
  ];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Store</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {linksArray.map((ele, ind) => (
                <Link
                  key={ind + 2}
                  to={ele.link}
                  className={classNames(
                    "flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary",
                    { "text-primary bg-muted": pathname == ele?.link }
                  )}
                >
                  <ele.icon className="h-4 w-4" />
                  {ele.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 justify-end items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
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
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <UserMenu />
        </header>
        {/* <div className="flex items-start"> */}
        <ScrollArea className="relative h-[calc(100vh_-_60px)]">
          <Outlet />
        </ScrollArea>
        {/* </div> */}
        {/* <ScrollArea className="w-full max-h-[calc(100vh - 145px)] p-2">
        </ScrollArea> */}
      </div>
    </div>
  );
}
