import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardOverview() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>React Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <p>70% Complete</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>CSS Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <p>85% Complete</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Next.js Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <p>50% Complete</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>TypeScript Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <p>60% Complete</p>
        </CardContent>
      </Card>
    </>
  );
}
