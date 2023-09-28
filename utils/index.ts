export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "dee66cb8bdmshc468f3685bc5392p1f6bd0jsn017b21b68954",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 1000;
  const milageFactor = 70;
  const ageFactor = 30;

  //calculate additional rate based on milage and rate
  const milageRate = city_mpg * milageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const totalRentPerDay = basePricePerDay + milageRate + ageRate;

  return totalRentPerDay.toFixed(0);
};
