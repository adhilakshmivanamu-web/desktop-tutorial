<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .calculator {
            max-width: 300px;
            margin: 50px auto;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 15px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .display {
            height: 60px;
            font-size: 2em;
            text-align: right;
            padding: 10px;
            margin-bottom: 15px;
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 3px;
        }
        .btn-calculator {
            width: 100%;
            height: 60px;
            font-size: 1.5em;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="calculator">
            <div class="display" id="display">0</div>
            <div class="row">
                <div class="col-3"><button class="btn btn-secondary btn-calculator" onclick="clearDisplay()">C</button></div>
                <div class="col-3"><button class="btn btn-secondary btn-calculator" onclick="appendValue('/')">/</button></div>
                <div class="col-3"><button class="btn btn-secondary btn-calculator" onclick="appendValue('*')">*</button></div>
                <div class="col-3"><button class="btn btn-secondary btn-calculator" onclick="deleteLast()">DEL</button></div>
            </div>
            <div class="row">
                <div class="col-3"><button class="btn btn-primary btn-calculator" onclick="appendValue('7')">7</button></div>
                <div class="col-3"><button class="btn btn-primary btn-calculator" onclick="appendValue('8')">8</button></div>
                <div class="col-3"><button class="btn btn-primary btn-calculator" onclick="appendValue('9')">9</button></div>
                <div class="col-3"><button class="btn btn-secondary btn-calculator" onclick="appendValue('-')">-</button></div>
            </div>
            <div class="row">
                <div class="col-3"><button class="btn btn-primary btn-calculator" onclick="appendValue('4')">4</button></div>
                <div class="col-3"><button class="btn btn-primary btn-calculator" onclick="appendValue('5')">5</button></div>
                <div class="col-3"><button class="btn btn-primary btn-calculator" onclick="appendValue('6')">6</button></div>
                <div class="col-3"><button class="btn btn-secondary btn-calculator" onclick="appendValue('+')">+</button></div>
            </div>
            <div class="row">
                <div class="col-3"><button class="btn btn-primary btn-calculator" onclick="appendValue('1')">1</button></div>
                <div class="col-3"><button class="btn btn-primary btn-calculator" onclick="appendValue('2')">2</button></div>
                <div class="col-3"><button class="btn btn-primary btn-calculator" onclick="appendValue('3')">3</button></div>
                <div class="col-3"><button class="btn btn-success btn-calculator" onclick="calculateResult()">=</button></div>
            </div>
            <div class="row">
                <div class="col-6"><button class="btn btn-primary btn-calculator" onclick="appendValue('0')">0</button></div>
                <div class="col-3"><button class="btn btn-primary btn-calculator" onclick="appendValue('.')">.</button></div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>