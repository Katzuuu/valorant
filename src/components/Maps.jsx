import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Map from "./Map";

const Maps = () => {
  const [mapsData, setMapsData] = useState(null);
  const requestApi = async () => {
    try {
      const res = await axios.get("https://valorant-api.com/v1/maps");
      setMapsData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestApi();
  }, []);

  return (
    <Container>
      {mapsData?.map((map) => (
        <Map
          name={map.displayName}
          key={map.uuid}
          img={map.splash}
          coordinates={map.coordinates}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem 8rem;
  padding-top: 80px;
  background-color: #0d1a27;
`;

export default Maps;
