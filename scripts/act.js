function openSensors(evt, sensorAct) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sensorAct).style.display = "block";
  evt.currentTarget.className += " active";
}
// Дефолтное открытие
document.getElementById("defaultOpen").click();

// График за день
anychart.onDocumentLoad(function() {
  var chart = anychart.line()
  chart.data({header: ["#", "Давление", "Температура", "Интенсивность света"],
   rows:[
    [1,  37.8, 80.8, 41.8],
    [2,  30.9, 69.5, 32.4],
    [3,  25.4,   57, 25.7],
    [4,  11.7, 18.8, 10.5],
    [5,  11.9, 17.6, 10.4],
    [6,   8.8, 13.6,  7.7],
    [7,   7.6, 12.3,  9.6],
    [8,  12.3, 29.2, 10.6],
    [9,  16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11,  5.3,  7.9,  4.7],
    [12,  6.6,  8.4,  5.2],
    [13,  4.8,  6.3,  3.6],
    [14,  4.2,  6.2,  3.4],
    [15,  37.8, 80.8, 41.8],
    [16,  30.9, 69.5, 32.4],
    [17,  25.4,   57, 25.7],
    [18,  11.7, 18.8, 10.5],
    [19,  11.9, 17.6, 10.4],
    [20,   8.8, 13.6,  7.7],
    [21,   7.6, 12.3,  9.6],
    [22,  12.3, 29.2, 10.6],
    [23,  16.9, 42.9, 14.8]
  ]});

  chart.title("Статистика за день");
  chart.legend(true);
  chart.container("container").draw();
});

//График за месяц
anychart.onDocumentLoad(function() {
  var chart = anychart.line()
  chart.data({header: ["#", "Давление", "Температура", "Интенсивность света"],
   rows:[
    [1,  37.8, 80.8, 41.8],
    [2,  30.9, 69.5, 32.4],
    [3,  25.4,   57, 25.7],
    [4,  11.7, 18.8, 10.5],
    [5,  11.9, 17.6, 10.4],
    [6,   8.8, 13.6,  7.7],
    [7,   7.6, 12.3,  9.6],
    [8,  12.3, 29.2, 10.6],
    [9,  16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11,  5.3,  7.9,  4.7],
    [12,  6.6,  8.4,  5.2],
    [13,  4.8,  6.3,  3.6],
    [14,  4.2,  6.2,  3.4],
    [15,  37.8, 80.8, 41.8],
    [16,  30.9, 69.5, 32.4],
    [17,  25.4,   57, 25.7],
    [18,  11.7, 18.8, 10.5],
    [19,  11.9, 17.6, 10.4],
    [20,   8.8, 13.6,  7.7],
    [21,   7.6, 12.3,  9.6],
    [22,  12.3, 29.2, 10.6],
    [23,  16.9, 42.9, 14.8],
    [24,  30.9, 69.5, 32.4],
    [25,  25.4,   57, 25.7],
    [26,  11.7, 18.8, 10.5],
    [27,  11.9, 17.6, 10.4],
    [28,   8.8, 13.6,  7.7],
    [29,   7.6, 12.3,  9.6],
    [30,  12.3, 29.2, 10.6]
  ]});
  chart.title("Статистика за месяц");
  chart.legend(true);
  chart.container("container_month").draw();
});

//График за год
anychart.onDocumentLoad(function() {
  var chart = anychart.line()
  chart.data({header: ["#", "Давление", "Температура", "Интенсивность света"],
   rows:[
    [1,  37.8, 80.8, 41.8],
    [2,  30.9, 69.5, 32.4],
    [3,  25.4,   57, 25.7],
    [4,  11.7, 18.8, 10.5],
    [5,  11.9, 17.6, 10.4],
    [6,   8.8, 13.6,  7.7],
    [7,   7.6, 12.3,  9.6],
    [8,  12.3, 29.2, 10.6],
    [9,  16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11,  5.3,  7.9,  4.7],
    [12,  6.6,  8.4,  5.2]
  ]});
  chart.title("Статистика за год");
  chart.legend(true);
  chart.container("container_year").draw();
});