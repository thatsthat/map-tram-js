const tramData = () => {
  var token = 0;
  var data = 0;

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
        //"https://opendata.tram.cat/api/v1/gtfsrealtime?networkId=1",
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
        const rData = rDataFull.map((a) => {
          return {
            origin: a.originStopName,
            next: a.nextStopName,
            direction: a.courseDirection,
            pos: a.vehiclePosition,
            //delay: a.delay,
            time: Date.now(),
          };
        });
        /*         const bufferRes = await rawResponse.arrayBuffer();
        const pbf = new Pbf(new Uint8Array(bufferRes));
        const obj = FeedMessage.read(pbf);
        const rData = obj.entity; */

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

  const getInfo = async () => {
    console.log(data);
    const info = await fetchData(token);
    if (info.status === 401) {
      const tkn = await fetchToken();
      token = tkn;
      const info2 = await fetchData(tkn);
      data = info2.data;
    } else {
      data = info.data;
    }
  };
  const id = setInterval(getInfo, 31000);
};
export default tramData;
