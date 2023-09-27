import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  //2.42.58
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home_text-container">
          <h1 className=" text-4xl font-extrabold">CAR CATALOGUE</h1>
          <p>Explore the car you might like</p>
        </div>
        <div className="home_filters">
          <SearchBar />
          <div className="home_filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
