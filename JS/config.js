google.charts.load("current", {
    packages: ["corechart"],
    language: "pt",
  });
  $(document).ready(mediaQ);
  window.addEventListener("resize", mediaQ);
  
  var altura;
  var largura;
  
  function desenharPizza() {
    let dadosJson = $.ajax({
      url: "https://gist.githubusercontent.com/joaokx/d4205eb93af7046290ec29c20685c59f/raw/7f10a153b37541f3d83c27ae1ae8e79cd3c13ed0/jogos+caros.js",
      dataType: "json",
      async: false,
    }).responseText;
    let tabela = new google.visualization.DataTable(dadosJson);
  
    let visualization = new google.visualization.PieChart(
      document.getElementById("grafico-pizza")
    );
    google.visualization.events.addListener(visualization, "click", separar);
    let options = {
      backgroundColor: "#1b2838",
      legend: { position: "labeled", textStyle: { color: "white" } },
      is3D: true,
      height: [altura],
      width: [largura],
    };
    function separar(event) {
      let n = event.targetID.split("").splice(6, 2).join("");
      options = Object.assign({
        slices: { [n]: { offset: 0.2 } },
        legend: { position: "labeled", textStyle: { color: "white" } },
        is3D: true,
        height: [altura],
        backgroundColor: "#1b2838",
        width: [largura],
      });
      visualization.draw(tabela, options);
    }
    visualization.draw(tabela, options);
  }
  
  function desenharBarra() {
    let dadosJson = $.ajax({
      url: "https://gist.githubusercontent.com/joaokx/d4205eb93af7046290ec29c20685c59f/raw/7f10a153b37541f3d83c27ae1ae8e79cd3c13ed0/jogos+caros.js",
      dataType: "json",
      async: false,
    }).responseText;
  
    let tabela = new google.visualization.DataTable(dadosJson);
    let visualization = new google.visualization.BarChart(
      document.getElementById("grafico-barra")
    );
  
    tabela.setCell(0, 4, "valores:  95.99");
    tabela.setCell(1, 4, "valores: 78.99");
    tabela.setCell(2, 4, "valores: 75.99");
    tabela.setCell(3, 4, "valores: 69.99");
    tabela.setCell(4, 4, "valores: 60.99");
    tabela.setCell(5, 4, "valores: 52.99");
  
    
  
    function bandeira(url, casa) {
      return `<div class="tooltipBarra">
            <p> ${casa} </p>
            <img src="${url}">
            </div>`;
    }
  
    let options = {
      backgroundColor: "#1b2838",
      colors: ["red"],
      annotations: { alwaysOutside: true },
      tooltip: { isHtml: true },
      height: [altura],
      width: [largura],
      animation: {
        startup: true,
        duration: 3000,
        easing: "out",
      },
      vAxis: { minValue: 0, maxValue: 1000, textStyle: { color: "white" } },
      hAxis: {
        gridlines: { color: "transparent" },
        baselineColor: "grey",
        textStyle: { color: "white" },
      },
      bar: { groupWidth: "65%" },
      legend: { position: "none" },
    };
  
    visualization.draw(tabela, options);
  }
  
  function desenharLinha() {
    let dadosJson = $.ajax({
      url: "https://gist.githubusercontent.com/joaokx/a0a85f46020d668374d975b80ee378f8/raw/b742bd9e59bbde091cce49f904fcbba0a80e511b/anos+numero",
      dataType: "json",
      async: false,
    }).responseText;
  
    let tabela = new google.visualization.DataTable(dadosJson);
    let visualization = new google.visualization.LineChart(
      document.getElementById("grafico-linha")
    );
    let options = {
      backgroundColor: "#1b2838",
      animation: {
        startup: true,
        duration: 3000,
        easing: "out",
      },
      vAxis: {
        minValue: 0,
        maxValue: 1000,
        gridlines: { color: "transparent" },
        textStyle: { color: "white" },
      },
      hAxis: {
        minValue: 1,
        maxValue: 8,
        gridlines: { color: "transparent" },
        textStyle: { color: "white" },
      },
      height: [altura],
      width: [largura],
      curveType: "function",
      legend: { position: "top", textStyle: { fontSize: 16, bold: true } },
      tooltip: { trigger: "select" },
    };
    visualization.draw(tabela, options);
  }
  
  function desenharColuna() {
    let dadosJson = $.ajax({
      url: "https://gist.githubusercontent.com/joaokx/297c029537d1decc71e2acc7043b68eb/raw/c200d7337965406e7ee51a3c790ff9a06d9552e5/jogos+baratos",
      dataType: "json",
      async: false,
    }).responseText;
    let tabela = new google.visualization.DataTable(dadosJson);
    let visualization = new google.visualization.ColumnChart(
      document.getElementById("grafico-coluna")
    );
    let options = {
      backgroundColor: "#1b2838",
      tooltip: { isHtml: true },
      height: [altura],
      width: [largura],
      animation: {
        startup: true,
        duration: 3500,
        easing: "out",
      },
      vAxis: {
        minValue: 0,
        maxValue: 1000,
        gridlines: { color: "transparent" },
        textStyle: { color: "white" },
      },
      hAxis: {
        gridlines: { color: "transparent" },
        textStyle: { color: "white" },
      },
      legend: {
        position: "none",
        textStyle: { color: "black", fontSize: 16, bold: true },
      },
    };
  
   
  
    function bandeira(url, casa, ass) {
      return `<div class="tooltipBarra">
            <p> ${casa} </p>
            <img src="${url}">
            <p>Assassinatos: ${ass} </p>
            </div>`;
    }
  
    visualization.draw(tabela, options);
  }
  
  function desenharDonut() {
    let dadosJson = $.ajax({
      url: "https://gist.githubusercontent.com/joaokx/1cbec322c3dfb011320c4ba678384d44/raw/7ae445043c5f190a934abeb3e31ca858cbcb19f6/usarios%2520simultanios",
      dataType: "json",
      async: false,
    }).responseText;
    let tabela = new google.visualization.DataTable(dadosJson);
    let visualization = new google.visualization.PieChart(
      document.getElementById("grafico-donut")
    );
    google.visualization.events.addListener(visualization, "click", separar);
  
    function separar(event) {
      let n = event.targetID.split("").splice(6, 2).join("");
      options = Object.assign({
        slices: {
          0: { color: "#898989" },
          1: { color: "#898989" },
          2: { color: "#898989" },
          3: { color: "#898989" },
          4: { color: "#898989" },
          [n]: { offset: 0.2, color: "red" },
        },
        backgroundColor: "#1b2838",
        legend: { position: "labeled", textStyle: { color: "white" } },
        height: [altura],
        width: [largura],
        pieHole: 0.4,
        hAxis: { textStyle: { color: "white" } },
        vAxis: { textStyle: { color: "white" } },
      });
      visualization.draw(tabela, options);
    }
    let options = {
      backgroundColor: "#1b2838",
      height: [altura],
      width: [largura],
      pieHole: 0.4,
      legend: { position: "labeled", textStyle: { color: "white" } },
      slices: {
        0: { color: "#898989" },
        1: { color: "#898989" },
        2: { color: "#7F7F7F" },
        3: { color: "#898989" },
        4: { color: "#898989" },
      },
      hAxis: { textStyle: { color: "white" } },
      vAxis: { textStyle: { color: "white" } },
    };
    visualization.draw(tabela, options);
  }
  
  function desenharColuna2() {
    let dadosJson = $.ajax({
      url: "https://gist.githubusercontent.com/joaokx/a3938e8ce18f131434485f57942e1fad/raw/3fe26dcbec90a9e28f5cf095ba82c61ffb85d1b7/desenvolvedoras%2520+%2520jogos",
      dataType: "json",
      async: false,
    }).responseText;
    let tabela = new google.visualization.DataTable(dadosJson);
    let visualization = new google.visualization.ColumnChart(
      document.getElementById("grafico-coluna2")
    );
  
    let options = {
      backgroundColor: "#1b2838",
      animation: {
        startup: true,
        duration: 3500,
        easing: "out",
      },
      legend: "none",
      tooltip: { isHtml: true },
      annotations: { alwaysOutside: true },
      height: [altura],
      width: [largura],
      vAxis: {
        minValue: 0,
        maxValue: 1000,
        gridlines: { color: "transparent" },
        textStyle: { color: "white" },
      },
      hAxis: { textStyle: { color: "white" } },
    };
    tabela.setCell(
      0,
      3,
      personagem(
        "https://i.postimg.cc/YCzF5f1R/Daenerys.jpg",
        "Daenerys Targaryen"
      )
    );
    
  
    function personagem(url, personagem) {
      return `<div class="tooltipcoluna">
            <p> ${personagem} </p>
            <img src="${url}">
            </div>`;
    }
  
    visualization.draw(tabela, options);
  }
  function desenharBolha() {
    let dadosJson = $.ajax({
      url: "https://gist.githubusercontent.com/joaokx/d93d3ae952655005bf170581c4f20a51/raw/04f01aed0f4ab54865723f98a44170582fa56761/gistfile1.txt",
      dataType: "json",
      async: false,
    }).responseText;
    let tabela = new google.visualization.DataTable(dadosJson);
    let visualization = new google.visualization.BubbleChart(
      document.getElementById("grafico-bolha")
    );
    let options = {
      backgroundColor: "#1b2838",
      animation: {
        startup: true,
        duration: 4000,
        easing: "out",
      },
      colorAxis: {
        legend: { position: "none", color: "white", textStyle: "white" },
        colors: ["red", "yellow", "green"],
        textStyle: { color: "white" },
        d: { stroke: { color: "#ffffff" } },
      },
      height: [altura],
      width: [largura],
      bubble: { textStyle: { color: "transparent" } },
      vAxis: {
        textStyle: { color: "white" },
        minValue: 0,
        maxValue: 1100000,
        gridlines: { color: "transparent" },
      },
      hAxis: {
        minValue: 0,
        maxValue: 100,
        gridlines: { color: "transparent" },
        textStyle: { color: "white" },
      },
    };
    visualization.draw(tabela, options);
  }
  
  function desenharArea() {
    let dadosJson = $.ajax({
      url: "https://gist.githubusercontent.com/joaokx/46eaf24c623295aeb404da54023c44b5/raw/57618a61545ea9b0fa4a7cd849134fc283f4547d/10%2520jogos%2520+18",
      dataType: "json",
      async: false,
    }).responseText;
  
    let tabela = new google.visualization.DataTable(dadosJson);
    let visualization = new google.visualization.AreaChart(
      document.getElementById("grafico-area")
    );
  
    let options = {
      backgroundColor: "#1b2838",
      colors: ["#BCBCBC"],
      height: [altura],
      width: [largura],
      animation: {
        startup: true,
        duration: 4000,
        easing: "out",
      },
      vAxis: {
        minValue: 0,
        maxValue: 75,
        gridlines: { color: "transparent" },
        textStyle: { color: "white" },
      },
      hAxis: {
        gridlines: { color: "transparent" },
        textStyle: { color: "white" },
      },
    };
  
    visualization.draw(tabela, options);
  }
  
  function desenhar() {
    let dadosJson = $.ajax({
      url: "https://gist.githubusercontent.com/joaokx/c3371cc4138b55943dc792696f9b5a7e/raw/322634bb1127043f348e0e021723856ecea25b9c/editoras+jogos",
      dataType: "json",
      async: false,
    }).responseText;
    let tabela = new google.visualization.DataTable(dadosJson);
    let visualization = new google.visualization.BarChart(
      document.getElementById("grafico-teste")
    );
  
    let options = {
      backgroundColor: "#1b2838",
      colors: ["green"],
      animation: {
        startup: true,
        duration: 3000,
        easing: "out",
      },
      bar: { groupWidth: "65%" },
      height: [altura],
      width: [largura],
      vAxis: { minValue: 0, maxValue: 80, textStyle: { color: "white" } },
      hAxis: {
        gridlines: { color: "transparent" },
        textStyle: { color: "white" },
      },
      legend: { textStyle: { color: "white" } },
    };
    visualization.draw(tabela, options);
  }
  
  function desenharbarra3() {
    let dadosJson = $.ajax({
      url: "https://gist.githubusercontent.com/joaokx/a5dbf4222edb1faf13ba6b3d60d086de/raw/78190c515300606f20abe2cc55c03d1b42e63bf4/jogos_gratis",
      dataType: "json",
      async: false,
    }).responseText;
    let tabela = new google.visualization.DataTable(dadosJson);
    let visualization = new google.visualization.BarChart(
      document.getElementById("grafico-barra3")
    );
  
    let options = {
      backgroundColor: "#1b2838",
      colors: ["#750103"],
      animation: {
        startup: true,
        duration: 3000,
        easing: "out",
      },
      bar: { groupWidth: "75%" },
      height: [altura],
      width: [largura],
      vAxis: { minValue: 0, maxValue: 80, textStyle: { color: "white" } },
      hAxis: {
        gridlines: { color: "transparent" },
        textStyle: { color: "white" },
      },
    };
    visualization.draw(tabela, options);
  }
  function mediaQ() {
    if (window.matchMedia("(min-width: 600px)").matches) {
      google.charts.setOnLoadCallback(desenharPizza);
      google.charts.setOnLoadCallback(desenharBarra);
      google.charts.setOnLoadCallback(desenharLinha);
      google.charts.setOnLoadCallback(desenharColuna);
      google.charts.setOnLoadCallback(desenharDonut);
      google.charts.setOnLoadCallback(desenharColuna2);
      google.charts.setOnLoadCallback(desenharBolha);
      google.charts.setOnLoadCallback(desenharArea);
      google.charts.setOnLoadCallback(desenhar);
      google.charts.setOnLoadCallback(desenharbarra3);
      altura = 600;
      largura = 1100;
    } else {
      google.charts.setOnLoadCallback(desenharPizza);
      google.charts.setOnLoadCallback(desenharBarra);
      google.charts.setOnLoadCallback(desenharLinha);
      google.charts.setOnLoadCallback(desenharColuna);
      google.charts.setOnLoadCallback(desenharDonut);
      google.charts.setOnLoadCallback(desenharColuna2);
      google.charts.setOnLoadCallback(desenharBolha);
      google.charts.setOnLoadCallback(desenharArea);
      google.charts.setOnLoadCallback(desenhar);
      google.charts.setOnLoadCallback(desenharbarra3);
      altura = 350;
      largura = 350;
    }
  }