<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQ</title>
    <script src="./jquery.js"></script>
    <style>
        #modal {
            left: 0px;
            top: 0px;
            z-index: 1000;
            background-color: lightgrey;
            opacity: 90%; 
            width: 100%;
            height: 100%;
            position: absolute; 
            
        }
        
        .d-none {
            display: none;
        }
        #window {
            width: 200px;
            height: 100px;
            border: 2px solid black;
            background-color: lightgreen;
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%); 
                        
        }
        #btn {
            width: 100px;
            height: 40px;
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%); 
        }

    </style>
    
</head>
<body>
    <a href="#modal" id="link">Открыть модальное окно</a>
    
	<div id="modal" class="d-none">
        <div id="window">
            <button id="btn" name="Close">Close</button>
        </div>
    <div> 

    <script src="./jQ.js"></script>
</body>
</html>