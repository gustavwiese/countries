import { useState } from "react";

interface Country {
  name: { common: string; official: string };
  capital: string[];
  borders: string[];
  population: number;
  altSpelling: Array<string>;
  flags: { png: string; svg: string; alt: string };
  maps: { googleMaps: string };
}

type CountryInfoProps = {
  country: Country | null;
};

const fetchCountryData = async (countryCode) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
  const countries = await res.json();
  console.log(countries);
  return countries[0];
};

export default function App() {
  const [code, setCode] = useState("dk");
  const [country, setCountry] = useState(null);

  const getInfo = async () => {
    const info = await fetchCountryData(code);
    setCountry(info);
  };

  return (
    <>
      <h1>Show Country Info</h1>
      <input
        type="text"
        id="code"
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter Country Code"
      />
      <button onClick={() => getInfo()}>Get Info</button>
      <CountryInfo country={country} />
    </>
  );
}
const CountryInfo = (props) => {
  const country = props.country;

  return country == null ? (
    <p>Enter Country Code above to fetch country info</p>
  ) : (
    <>
      <h1>Country Info</h1>
      <h4>Flag</h4>
      <img style={{ width: 100 }} src={country.flags.png} alt={country.flags.alt} />
      <p>Country Name Common: TODO</p>
      <p>Country Name Official: TODO</p>
      <p>Country Capital: TODO</p>
      <p>Population: TODO</p>
      <p>Country Borders: TODO</p>
      <h4>Alternative Spellings</h4>
      <ol>TODO</ol>
      <a href="TODO" target="_blank">
        Google Maps
      </a>
    </>
  );
};
