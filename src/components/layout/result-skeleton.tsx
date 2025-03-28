import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function ResultSkeleton() {
	return (
		<Card className="w-full md:max-w-[482px] h-48 p-4 ">
			<CardHeader>
				<CardTitle className="text-lg font-semibold text-center">
					<Skeleton className="h-[28px] w-[400px]" />
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-2 flex flex-col items-center">
					<Skeleton className="h-[28px] w-[100px]" />
					<Skeleton className="h-[28px] w-[200px]" />
				</div>
			</CardContent>
		</Card>
	);
}
