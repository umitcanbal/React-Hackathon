import { DateTime } from 'luxon';
// DateTime.fromMillis(datetimeFromREST * 1000).toFormat('hh:mm');

const searchFlights = async (origin, destination, direct) => {
  const whenFrom = DateTime.local().plus({ days: 1}).toFormat("dd/MM/yyyy");
  const whenTo = DateTime.local().plus({ days: 2}).toFormat("dd/MM/yyyy");
  const query = new URLSearchParams({
    partner: "picky",
    flyFrom: "PRG",
    to: "IST",
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

//Burada yaptıklarımız çok kritik
// url'e şekil verdik bi şekilde, iki tane class kullandık URLSearchParams ve URL adında. Nasıl şekil vereceğimizi nerden biliyoruz? nerden bileyim ben flyFrom diye bi şey kullanmam gerektiğini ve bunu query'ye yerleştirmem gerektiğini?
//CEVAP: başlangıçta zaten örnek API vardı, ona benzetmeye çalıştım, örnek API şöyle bi şeydi (direkt API documentationda verilmişti bu) : "https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3"

//Sonra ne yapıyoruz? Bu şekillendirdiğimiz url'i fetch ediyoruz, bu (response) bize sadece connection veriyo, datayı vermiyo. Dataya ulaşmak için bu response'u json() methoduyla muamele etmemiz lazım. Ondan sonra ham data var elimde, ama bu datanın içinde de kullanmak istemediğim birsürü şey var tabii ki. Bu data ne? Bu bi object. Bu object'in içindeki prop/key'lerden biri de "data". Ve benim aradığım şeyler bu key'e atanmış. Yani bana lazım olan şey data.data (data object'in içindeki data key'ine tekabül eden veriler).




