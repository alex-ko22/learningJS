<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Forms</title>
</head>
<body>
    <h1>Формы</h1>
    <form action="#">
        <h4>Регистрация на курсы</h4>
        <div>
            <input type="text" placeholder="логин" name="login">
        </div>
        <div>
            <input type="password" placeholder="пароль" name="password">
        </div>
        <div>
            <input type="text" name="firstname" value="иван" >
            <input type="text" name="lastname" value="иванов">
        </div>
        <div>
            <p>Выберите языки</p>
            <input type="checkbox" name="html" id="html-input">
            <label for="html-input">HTML</label>
            <label>
                <input type="checkbox" name="css">
                <span>CSS</span>
            </label>
             <label>
                <input type="checkbox" name="js" checked>
                <span>JS</span>
            </label>
             <label>
                <input type="checkbox" name="php" checked>
                <span>PHP</span>
            </label>
        </div>
        <div>
            <label>
                <input checked type="radio" name="payment" value="cash">
                <span>Cash</span>
            </label>
            <label>
                <input type="radio" name="payment" value="card">
                <span>Card</span>
            </label>
        </div>
        <div>
            <p>Загрузите фото</p>
            <input type="file" name="foto">
        </div>
        <div>
            <textarea name="about" cols="30" rows="5" placeholder="Tell something"></textarea>
        </div>
        <input type="submit" value="Register">
        <input type="button" value="Просто кнопка"> 
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>
        <button>Ещё одна кнопка</button>    
    </form>
    
</body>
</html>