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
