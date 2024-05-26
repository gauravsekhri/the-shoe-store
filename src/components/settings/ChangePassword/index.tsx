import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ChangePassword = () => {
  return (
    <>
      <Card x-chunk="dashboard-04-chunk-1">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Change your password</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Input placeholder="Old Password" type="password" />
            <Input placeholder="New Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ChangePassword;
