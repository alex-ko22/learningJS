<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    <style>
        .row div {
            min-height:50px;
            border: 2px solid darkblue;
            box-sizing: border-box;
        }
        .container {
            margin-top:20px;
            
        }
        
        .row {
            margin:10px;
        }
    </style>

</head>
<body>
    <div class="container border">
        <div class="row">
            <div class="col-12 col-md-3 col-lg-12 bg-dark">1</div>
            <div class="d-none d-md-block col-md-8 col-lg-6 bg-secondary">2</div>
            <div class="d-none d-md-block col-md-1 col-lg-6 bg-primary">
                3
                <div class="row d-none d-lg-flex">
                    <div class="col-2 bg-dark">1</div>
                    <div class="col-8 bg-secondary">2</div>
                    <div class="col-2 bg-primary">3</div>
                    <div class="col-2 bg-info">4</div>
                    <div class="col-10 bg-warning">5</div>
                    <div class="col-8 bg-success">6</div>
                    <div class="col-4 bg-light">7</div>
                    
                    
                    
                </div>
            </div>
            <div class="col-4 d-lg-2 bg-info">4</div>
            <div class="col-8 col-md-4 offset-md-4 offset-lg-0 col-lg-2 bg-warning">5</div>
            <div class="col-8 col-md-5 col-lg-2 bg-success">6</div>
            <div class="col-2 col-md-3 offset-md-1 col-lg-1 bg-light">7</div>
            <div class="col-2 col-md-1 col-lg-2 offset-md-2 offset-lg-0 bg-danger">8</div>
        </div>
    </div>
    
</body>
</html>