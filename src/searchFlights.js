import { DateTime } from 'luxon';
// DateTime.fromMillis(datetimeFromREST * 1000).toFormat('hh:mm');

const searchFlights = async (origin, destination, direct) => {
  const whenFrom = DateTime.local().plus({ days: 1}).toFormat("dd/MM/yyyy");
  const whenTo = DateTime.local().plus({ days: 2}).toFormat("dd/MM/yyyy");
  const query = new URLSearchParams({
    partner: "picky",
    flyFrom: origin,
    to: destination,
    dateFrom: whenFrom,
    dateTo: whenTo,
    v:3
  })
  const url = new URL( `?${query}`, "https://api.skypicker.com/flights" )
  // console.log("url", url);
  
  const response = await fetch(url);
  // console.log("response", response);
  const data = await response.json();
  // console.log("data", data);
  // console.log("data", data.data);

  const wholeData = data.data;
  // console.log("wholeData", wholeData)

  return wholeData;
  
}

export default searchFlights






