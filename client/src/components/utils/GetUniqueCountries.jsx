const getUniqueCountries = (props) => {
  const countries = props.events.map(
    ({
      tournament: {
        category: { name: countryName },
      },
    }) => countryName
  );
  return [...new Set(countries)];
};

export default getUniqueCountries;
