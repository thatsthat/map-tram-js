const tramData = (t2) => {
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
              posInd = i;
            }
          } else if (tram.courseDirection === "R") {
            for (
              let i = stopInd;
              Math.floor(t2.distA[i]) <= Math.floor(tram.vehiclePosition);
              i--
            ) {
              posInd = i;
            }
          }
          console.log(posInd);
        });

        const rData = rDataFull.map((a) => {
          return {
            origin: a.originStopName,
            next: a.nextStopName,
            direction: a.courseDirection,
            pos: a.vehiclePosition,
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
    console.log(window.data);
  })();
};
export default tramData;
