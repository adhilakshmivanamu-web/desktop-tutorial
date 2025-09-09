<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Color Changer</title>
  <style>
    #myDiv {
      width: 200px;
      height: 200px;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      text-align: center;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div id="myDiv">Click the button to change my background color!</div>
  <button onclick="changeColor()">Change Color</button>

  <script>
    function changeColor() {
      let div = document.getElementById("myDiv");
      let randomColor = getRandomColor();
      div.style.backgroundColor = randomColor;
    }

    function getRandomColor() {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  </script>
</body>
</html>


