$(document).ready(function () {
  const getAllData = async () => {
    const allData = await fetch('https://coronavirus-19-api.herokuapp.com/all');
    return allData.json();
  };

  const getCountries = async () => {
    const allData = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
    return allData.json();
  };

  (async () => {
    const data = await getAllData();
    console.log(data);
    $('#cases').text(data.cases.toLocaleString());
    $('#deaths').text(data.deaths.toLocaleString());
    $('#recovered').text(data.recovered.toLocaleString());
  })();

  (async () => {
    const data = await getCountries();
    console.log(data);
    let no = 1;
    $('#datatables').DataTable({
      data: data,
      columns: [
        {
          data: null,
          render: function (data, type, row, meta) {
            return meta.row + meta.settings._iDisplayStart + 1;
          },
        },
        { data: 'country' },
        { data: 'cases' },
        { data: 'deaths' },
        { data: 'todayCases' },
        { data: 'todayDeaths' },
        { data: 'recovered' },
        { data: 'active' },
        { data: 'critical' },
      ],
      responsive: true,
    });
  })();
});
