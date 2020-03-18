$(document).ready(function() {
  const getAllData = async () => {
    const allData = await fetch("https://coronavirus-19-api.herokuapp.com/all");
    return allData.json();
  };

  const getCountries = async () => {
    const allData = await fetch("https://coronavirus-19-api.herokuapp.com/countries");
    return allData.json();
  };

  (async () => {
    const data = await getAllData();
    console.log(data);
    $("#cases").text(data.cases.toLocaleString());
    $("#deaths").text(data.deaths.toLocaleString());
    $("#recovered").text(data.recovered.toLocaleString());
  })();

  (async () => {
    const data = await getCountries();

    let no = 0;
    const dataHandler = data
      .map(country => {
        no += 1;
        return `<tr><td> ${no}</td><td> ${country.country}</td>
      <td style="background:#ffeaa7;"> ${country.cases}</td>
      <td> ${country.todayCases}</td>
      <td style="background:#fab1a0;"> ${country.deaths}</td>
      <td> ${country.todayDeaths}</td>
      <td style="background:#81ecec;"> ${country.recovered}</td>
      <td> ${country.active}</td>
      <td> ${country.critical}</td></tr>`;
      })
      .join("");
    $("#countries").html(dataHandler);
    $("#datatables").DataTable({ responsive: true });
  })();
});
