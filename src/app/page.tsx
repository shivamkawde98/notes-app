import { Feature } from "@/components/Feature";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { Review } from "@/components/Review";
import { feature, reviewData } from "@/utils";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <NavBar />

        <section className="w-full px-4 py-20 bg-white">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {feature.map((feature) => {
              return (
                <Feature
                  image={feature.image}
                  name={feature.name}
                  desc={feature.desc}
                  key={feature.name}
                />
              );
            })}
          </div>
        </section>
        <section className="w-full px-4 py-20 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-[#ff00ff]">
            What Our Users Say
          </h2>
          {reviewData.map((data, i) => {
            return (
              <Review
                name={data.name}
                review={data.review}
                image={data.image}
                key={i + data.name}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}
