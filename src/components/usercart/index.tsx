import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  ListFilter,
  Menu,
  MoreVertical,
  Package2,
  Trash2,
  Truck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import UserMenu from "../common/UserMenu";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

export function UserCart() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4">
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
        <main className="max-w-7xl mx-auto">
          <h5 className="text-4xl font-bold p-4 sm:px-6">Cart</h5>
          <ScrollArea className="h-[calc(100vh_-_200px)] w-full">
            <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 ">
              <div className="grid auto-rows-max items-start gap-2 md:gap-4 lg:col-span-2">
                {[...new Array(10)].map((ele) => (
                  <Card className="justify-between p-4 sm:flex sm:justify-start">
                    <img
                      src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          Nike Air Max 2019
                        </h2>
                        <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block">
                        <div className="flex items-center justify-end border-gray-100">
                          <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                            {" "}
                            -{" "}
                          </span>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value="2"
                            min="1"
                          />
                          <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 justify-end">
                          <p className="text-sm">₹2999</p>
                          <Trash2 className="h-4 w-4 cursor-pointer duration-150 hover:text-red-500" />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="sticky top-0">
                <Card
                  className="overflow-hidden"
                  x-chunk="dashboard-05-chunk-4"
                >
                  <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                      <CardTitle className="group flex items-center gap-2 text-lg">
                        Cart Summary
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 text-sm">
                    <div className="grid gap-3">
                      <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Glimmer Lamps x <span>2</span>
                          </span>
                          <span>$250.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Aqua Filters x <span>1</span>
                          </span>
                          <span>$49.00</span>
                        </li>
                      </ul>
                      <Separator className="my-2" />
                      <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Subtotal
                          </span>
                          <span>$299.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Shipping
                          </span>
                          <span>$5.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">Tax</span>
                          <span>$25.00</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                          <span className="text-muted-foreground">Total</span>
                          <span>$329.00</span>
                        </li>
                      </ul>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-3">
                        <div className="font-semibold">Delivery Address</div>
                        <address className="grid gap-0.5 not-italic text-muted-foreground">
                          <span>Liam Johnson</span>
                          <span>1234 Main St.</span>
                          <span>Anytown, CA 12345</span>
                        </address>
                      </div>
                      <div className="grid auto-rows-max gap-3">
                        <div className="font-semibold">
                          Delivery Time (Expected)
                        </div>
                        <div className="text-muted-foreground">
                          Tomorrow, 9AM - 7PM
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex border-t bg-muted/50 p-5">
                    <Button className="w-full">Proceed to checkout</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
