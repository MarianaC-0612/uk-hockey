import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { MenuIcon } from "lucide-react";

export default function Component() {
  return (
    <main className="py-8 px-2 md:px-4 bg-white">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-3xl font-bold mb-4">Featured Player</h2>
          <img
            src="/placeholder.svg"
            width={500}
            height={300}
            alt="Featured Player"
            className="rounded-lg mb-4"
            style={{ aspectRatio: "500/300", objectFit: "cover" }}
          />
          <h3 className="text-2xl font-bold mb-2">John Doe</h3>
          <p className="text-muted-foreground mb-4">Center, #12</p>
          <p>
            John Doe is a skilled center who has been a key player for our team. With his impressive scoring ability and strong defensive skills, he has become a fan favorite.
          </p>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-3xl font-bold mb-4">Latest News</h2>
          <Card>
            <CardHeader>
              <CardTitle>New Arena Groundbreaking</CardTitle>
              <CardDescription>
                Our city is excited to announce the groundbreaking of a new state-of-the-art hockey arena.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The new arena will feature modern amenities and seating for over 15,000 fans. Construction is expected to be completed by the start of the next season.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                Read More
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
