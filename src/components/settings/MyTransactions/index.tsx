import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MyTransactions = () => {
  return (
    <>
      <Card x-chunk="dashboard-04-chunk-1">
        <CardHeader>
          <CardTitle>My Transactions</CardTitle>
          <CardDescription>Check all your transactions here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-16 text-center">Coming soon!</div>
        </CardContent>
      </Card>
    </>
  );
};

export default MyTransactions;
