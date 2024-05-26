import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Support = () => {
  return (
    <>
      <Card x-chunk="dashboard-04-chunk-1">
        <CardHeader>
          <CardTitle>Help & Support</CardTitle>
          <CardDescription>Contact us if you need help.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-16 text-center">Coming soon!</div>
        </CardContent>
      </Card>
    </>
  );
};

export default Support;
