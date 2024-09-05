import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import styles from "./homepage.module.css"; // Import the CSS module

export default function Component() {
  return (
    <main className={styles.mainContent}>
      {/* Existing Content (John Doe & Latest News) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className={`flex flex-col items-start space-y-4 ${styles.johnDoeSpacing}`}>
          <h2 className="text-3xl font-bold mb-4 text-[#292929]">Featured Player</h2>
          <img
            src="/placeholder.svg"
            width={500}
            height={300}
            alt="Featured Player"
            className="rounded-lg mb-4"
            style={{ aspectRatio: "500/300", objectFit: "cover" }}
          />
          <h3 className="text-2xl font-bold mb-2 text-[#292929]">John Doe</h3>
          <p className="text-[#292929] mb-4">Center, #12</p>
          <p className="text-[#292929]">
            John Doe is a skilled center who has been a key player for our team. With his impressive scoring ability and strong defensive skills, he has become a fan favorite.
          </p>
        </div>
        <div className={`flex flex-col items-start space-y-4 ${styles.johnDoeSpacing}`}>
          <h2 className="text-3xl font-bold mb-4 text-[#292929]">Latest News</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-[#292929]">New Arena Groundbreaking</CardTitle>
              <CardDescription className="text-[#292929]">
                Our city is excited to announce the groundbreaking of a new state-of-the-art hockey arena.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#292929]">
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

      {/* Our Team Section */}
      <section className={`py-8 ${styles.stretchSection} ${styles.greenBackground} ${styles.ourTeamSpacing}`}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#292929]">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/team-member-placeholder.jpg"
                alt="Team Member"
                className={`rounded-full ${styles.teamImage}`}
              />
              <h3 className="text-xl font-bold mt-4 text-[#292929]">Mariana Caceres</h3>
              <p className="text-[#292929]">Website Creator</p>
            </div>
            <div className="text-center">
              <img
                src="/team-member-placeholder.jpg"
                alt="Team Member"
                className={`rounded-full ${styles.teamImage}`}
              />
              <h3 className="text-xl font-bold mt-4 text-[#292929]">John Roe</h3>
              <p className="text-[#292929]">UI/UX Designer</p>
            </div>
            <div className="text-center">
              <img
                src="/team-member-placeholder.jpg"
                alt="Team Member"
                className={`rounded-full ${styles.teamImage}`}
              />
              <h3 className="text-xl font-bold mt-4 text-[#292929]">Emily Doe</h3>
              <p className="text-[#292929]">Content Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Website Section */}
      <section className={`py-8 ${styles.stretchSection} ${styles.greyBackground}`}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#292929]">Our Website</h2>
          <div className="space-y-4">
            <p className="text-[#292929]">Welcome to UK Hockey, where you can explore the world of hockey, specifically:</p>
            <ul className="list-disc list-inside space-y-2 text-[#292929]">
              <li><strong>Player Stats:</strong> Detailed information about each and every player in a club in the UK</li>
              <li><strong>Latest News:</strong> Regular updates and latest news around the UK related to Hockey</li>
              <li><strong>Pathways:</strong> Pathways for a Hockey career, including information about England</li>
              <li><strong>Teams:</strong> Access to Local & National teams + statistics and following</li>
              <p> Log in or Sign up, to personalize your experience!</p>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
