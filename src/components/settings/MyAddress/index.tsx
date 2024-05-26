import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MyAddress = () => {
  return (
    <>
      <Card x-chunk="dashboard-04-chunk-1">
        <CardHeader>
          <CardTitle>My Address</CardTitle>
          <CardDescription>Update your address details</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Input placeholder="Flat or street number" />
            <Input placeholder="Area" />
            <Input placeholder="Landmark" />
            <Input placeholder="Pincode" />
            <Input placeholder="City" />
            <Input placeholder="State" />
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default MyAddress;
