import React, { useEffect, useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Spinner, Center, Heading } from '@chakra-ui/react';

const WeatherTable = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/group?id=5128581,2643743,2968815,1850147,2147714,2950159,3117735,1816670,3435910,360630&units=metric&appid=YOUR_API_KEY');
        const data = await response.json();
        setWeatherData(data.list);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">Top 10 Cities Weather</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>City</Th>
            <Th>Temperature (°C)</Th>
            <Th>Weather</Th>
          </Tr>
        </Thead>
        <Tbody>
          {weatherData.map((city) => (
            <Tr key={city.id}>
              <Td>{city.name}</Td>
              <Td>{city.main.temp}</Td>
              <Td>{city.weather[0].description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default WeatherTable;