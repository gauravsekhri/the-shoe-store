import {
  Bell,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ScrollArea } from "../ui/scroll-area";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import UserMenu from "../common/UserMenu";

export function Products() {
  const items = [
    {
      id: "recents",
      label: "Recents",
    },
    {
      id: "home",
      label: "Home",
    },
    {
      id: "applications",
      label: "Applications",
    },
    {
      id: "desktop",
      label: "Desktop",
    },
    {
      id: "downloads",
      label: "Downloads",
    },
    {
      id: "documents",
      label: "Documents",
    },
  ] as const;

  const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

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
            <nav className="grid items-start px-2 text-sm font-medium lg:px-2">
              <div className="p-2 mt-2 mb-5 text-lg">Filters</div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className=" space-y-9"
                >
                  <div className="rounded-lg px-3 py-2 transition-all">
                    <div className="text-foreground text-md mb-3">
                      Price Range
                    </div>
                    <div className="flex items-center gap-3">
                      <Select>
                        <SelectTrigger className="w-[50%] px-2 text-xs">
                          <SelectValue placeholder="Select price" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apple" className="text-xs">
                            Apple
                          </SelectItem>
                          <SelectItem value="banana" className="text-xs">
                            Banana
                          </SelectItem>
                          <SelectItem value="blueberry" className="text-xs">
                            Blueberry
                          </SelectItem>
                          <SelectItem value="grapes" className="text-xs">
                            Grapes
                          </SelectItem>
                          <SelectItem value="pineapple" className="text-xs">
                            Pineapple
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="w-[50%] px-2 text-xs">
                          <SelectValue placeholder="Select price" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apple" className="text-xs">
                            Apple
                          </SelectItem>
                          <SelectItem value="banana" className="text-xs">
                            Banana
                          </SelectItem>
                          <SelectItem value="blueberry" className="text-xs">
                            Blueberry
                          </SelectItem>
                          <SelectItem value="grapes" className="text-xs">
                            Grapes
                          </SelectItem>
                          <SelectItem value="pineapple" className="text-xs">
                            Pineapple
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="rounded-lg px-3 py-2 transition-all">
                    <div className="text-foreground text-md mb-3">Gender</div>
                    <div className="flex items-center gap-3">
                      <Select>
                        <SelectTrigger className="px-2">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="rounded-lg px-3 py-2 transition-all">
                    <div className="text-foreground text-md mb-3">Size</div>
                    <div className="flex items-center gap-3">
                      <FormField
                        control={form.control}
                        name="items"
                        render={() => (
                          <FormItem>
                            {items.map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="items"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(
                                            item.id
                                          )}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([
                                                  ...field.value,
                                                  item.id,
                                                ])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.id
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {item.label}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            ))}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="rounded-lg px-3 py-2 transition-all">
                    <div className="text-foreground text-md mb-3">Brand</div>
                    <div className="flex items-center gap-3">
                      <FormField
                        control={form.control}
                        name="items"
                        render={() => (
                          <FormItem>
                            {items.map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="items"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(
                                            item.id
                                          )}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([
                                                  ...field.value,
                                                  item.id,
                                                ])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.id
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {item.label}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            ))}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </form>
              </Form>
            </nav>
          </div>
          {/* <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
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
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Link to="/cart">
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </Link>
          <UserMenu />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-2 lg:gap-4 lg:p-4">
          <div className="flex items-center gap-3">
            <span>Sort</span>
            <Select defaultValue="relevance">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="priceHighToLow">
                  Price High to Low
                </SelectItem>
                <SelectItem value="priceLowToHigh">
                  Price Low to High
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ScrollArea className="w-full h-[calc(100vh_-_135px)] p-2">
            <div className="grid grid-cols-5 gap-4">
              {[...new Array(50)].map((ele: any, ind: any) => (
                <Card className="h-auto ">
                  <CardHeader className="p-3">
                    <div className="relative flex justify-center h-60 overflow-hidden rounded-xl bg-card dark:bg-card-foreground">
                      <img
                        className="object-cover mix-blend-darken"
                        src="https://rukminim2.flixcart.com/image/322/540/xif0q/shoe/u/m/o/-original-imahyg2whmzguyhx.jpeg?q=70"
                        alt="product image"
                      />
                      <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                        39% OFF
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="px-3 py-0 h-auto ">
                    <div className="mt-4 px-3 pb-5">
                      <h5 className="text-xl tracking-tight text-slate-900 dark:text-gray-300">
                        Nike Air MX Super 2500 - Red
                      </h5>
                      <div className="mt-2 flex items-center justify-between gap-2 ">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-slate-900 dark:text-gray-300">
                            ₹4499
                          </span>
                          <span className="text-md text-slate-900 line-through dark:text-gray-400">
                            $16999
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
