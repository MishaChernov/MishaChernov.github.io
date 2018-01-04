<!DOCTYPE html>
<?php include 'functions.php' ?>
<html lang="en" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>main</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css"/>
</head>
<body>
  <div class="wrapper">
    <div class="wrapper--right">
      <h1 class="title">New way .New life. <span>20 min</span></h1>
      <div class="form">
        <form class="form__wrapper" action="thanks.php" method="POST">
          <input class="form__btn" type="submit" name="submit" value="שלח">
          <input class="form__input" type="text" name="first_name"  placeholder="שם" required>
          <input class="form__input" type="text" name="phone" placeholder="טלפון" required>
          <input class="form__input" type="text" name="email" placeholder="אימייל" required>
        </form>
      </div>

      <div class="video">
        <iframe width="300" height="200"
          src="https://www.youtube.com/embed/XGSy3_Czz8k?autoplay=0">
        </iframe>
      </div>
    </div>

    <div class="wrapper--left">
      <h2 class="subtitle">הדרך המהירה ביותר</h2>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum reiciendis ad ratione velit et, fuga, eos maxime.</p>
      <a href="/" class="logo">EMSclub</a>
    </div>
  </div>

  <script type="text/javascript" src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"></script>
  <script src="js/main-js.js" type="text/javascript"></script>
</body>
</html>
