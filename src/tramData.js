const tramData = (t2, L, map, divIcon) => {
  const fetchToken = async () => {
    try {
      const aBody = new URLSearchParams();
      aBody.append("grant_type", "client_credentials");
      aBody.append("client_id", process.env.REACT_APP_USER);
      aBody.append("client_secret", process.env.REACT_APP_SECRET);

      const rawResponse = await fetch(
        "https://opendata.tram.cat/connect/token",
        {
          method: "POST",
          // prettier-ignore
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: aBody.toString(),
        }
      );
      try {
        const content = await rawResponse.json();
        return content.access_token;
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = async (token) => {
    try {
      const rawResponse = await fetch(
        "https://opendata.tram.cat/api/v1/activeVehicles?networkId=1&lineId=2",
        {
          method: "GET",
          // prettier-ignore
          headers: {
            "Authorization": "Bearer " + token,
            "Content-type": "application/json; charset=utf-8",
          },
        }
      );
      try {
        const rStatus = await rawResponse.status;
        const rDataFull = await rawResponse.json();
        rDataFull.forEach((tram, ind, arr) => {
          const stopArrInd = t2.stopNames.indexOf(tram.originStopName);
          const stopInd = t2.stopInd[stopArrInd];

          let posInd = 0;
          if (tram.courseDirection === "A") {
            for (
              let i = stopInd;
              Math.floor(t2.distA[i]) <= Math.floor(tram.vehiclePosition);
              i++
            ) {
              posInd = i + 1;
            }
          } else if (tram.courseDirection === "R") {
            for (
              let i = stopInd;
              Math.floor(t2.distA[i]) <= Math.floor(tram.vehiclePosition);
              i--
            ) {
              posInd = i - 1;
            }
          }
          arr[ind].position = t2.track.features[0].geometry.coordinates[posInd];
        });
        const rData = rDataFull.map((a) => {
          return {
            origin: a.originStopName,
            next: a.nextStopName,
            direction: a.courseDirection,
            dist: a.vehiclePosition,
            pos: a.position,
            id: a.vehicleId,
          };
        });

        const response = { data: rData, status: rStatus };
        return response;
      } catch (e) {
        console.log(e);
        return { data: 0, status: 401 };
      }
    } catch (e) {
      console.log(e);
    }
  };
  (async () => {
    const info = await fetchData(window.token);
    if (info.status === 401) {
      const tkn = await fetchToken();
      window.token = tkn;
      const info2 = await fetchData(tkn);
      window.data = info2.data;
    } else {
      window.data = info.data;
    }
    console.log(data);
    data.forEach((tram, ind) => {
      /*       L.marker([tram.pos[1], tram.pos[0]], {
        icon: divIcon,
        id: ind,
      }).addTo(map); */
      const elem = window.trams.find((item) => item.id === tram.id);
      if (elem === undefined) {
        // New train
        const newTrain = {
          id: tram.id,
          marker: L.marker([tram.pos[1], tram.pos[0]], {
            icon: divIcon,
            id: ind,
          }),
        };
        // Add the new train's marker to the map
        newTrain.marker.addTo(map);
        // Insert the new train into trains array
        window.trams.push(newTrain);
      } else {
        // Existing train, update markers position
        elem.marker.setLatLng([tram.pos[1], tram.pos[0]]);
      }
    });
  })();
};
export default tramData;
