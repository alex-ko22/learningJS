<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM</title>
    <link rel="stylesheet" href="./task13.css">
</head>
<body>
    <div>Пользователи</div>
    <ul>
        <li>John</li>
        <li>Pete</li>
    </ul>
    
<form name="search">
    <label>Search the site:
      <input type="text" name="search">
    </label>
    <input type="submit" value="Search!">
</form>

  <hr>

<form name="search-person">
    Search the visitors:
    <table id="age-table">
      <tr>
        <td>Age:</td>
        <td id="age-list">
          <label>
            <input type="radio" name="age" value="young">less than 18</label>
          <label>
            <input type="radio" name="age" value="mature">18-50</label>
          <label>
            <input type="radio" name="age" value="senior">more than 50</label>
        </td>
      </tr>

      <tr>
        <td>Additionally:</td>
        <td>
          <input type="text" name="info[0]">
          <input type="text" name="info[1]">
          <input type="text" name="info[2]">
        </td>
      </tr>

    </table>

    <input type="submit" value="Search!">
</form>
    
<table class = "table-three">
    <tr>
        <td>1:1</td>
        <td>1:2</td>
        <td>1:3</td>
        <td>1:4</td>
        <td>1:5</td>
    </tr>
    <tr>
        <td>2:1</td>
        <td>2:2</td>
        <td>2:3</td>
        <td>2:4</td>
        <td>2:5</td>
    </tr>
    <tr>
        <td>3:1</td>
        <td>3:2</td>
        <td>3:3</td>
        <td>3:4</td>
        <td>3:5</td>
    </tr>
    <tr>
        <td>4:1</td>
        <td>4:2</td>
        <td>4:3</td>
        <td>4:4</td>
        <td>4:5</td>
    </tr>
    <tr>
        <td>5:1</td>
        <td>5:2</td>
        <td>5:3</td>
        <td>5:4</td>
        <td>5:5</td>
    </tr>
</table>

<script src = "./task13.js"></script>
</body>
</html>