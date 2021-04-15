<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task for forms</title>
</head>
<body>
    <h1>Оставить заявку</h1>
    <form action="#">
        <div>
            <input type="text" value="Иван">
        </div>
        <div>
            <input type="email" placeholder="Введите e-mail" >
        </div>
       <div>
           <label>
               <input type="radio" name="type" value="st" >
               <span>Статический</span>
               <input type="radio" name="type" value="ad" checked >
               <span>Адаптивный</span>
           </label>
       </div>
       <label for="">
           <div>
               <input type="checkbox" name="support">
               <span>Поддержка</span>
           </div>
           <div>
               <input type="checkbox" name="desigh">
               <span>Дизайн</span>
           </div>
           <div>
               <input type="checkbox" name="seo">
               <span>СЕО</span>
           </div>
       </label>
       <p>Загрузить ваш макет</p>
       <div>
            
            <input type="file" name="foto" value="Выберите файл">
        </div>
        <div>
            <textarea name="1" cols="15" rows="10" placeholder="ваш комментарий"></textarea>
        </div>
        <input type="submit" value="Отправить">
        <input type="reset" value="Сбросить"> 
    </form>
</body>
</html>