<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Laver Test</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        <link rel="shorcut icon"  href="images/apple-icon.png">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body class="laver-test formulario">
        <header>
            <div class="container">
                <div class="logo">
                    <h1>La Llave Maestra</h1>
                    <img src="images/llave-maestra-negro.svg" alt="Mariano Marquevich">
                </div>
            </div>
        </header>

        <form action="envio.php" class="container " method="post">
            <div class="row d-block">
                <input type="text" class="col-12 formulario__input" name="nombre" required>
                <label for="nombre" class="col-10 formulario__label">Nombre/s</label>
                <input type="text" class="col-12 formulario__input" name="apellido" required>
                <label for="apellido" class="col-10 formulario__label">Apellido</label>
                <input type="email" class="col-12 formulario__input" name="correo" required>
                <label for="correo" class="col-10 formulario__label">Correo</label>
                <div class="btn-inicio d-flex justify-content-center">
                    <input type="submit" class="col-8 formulario__submit" value="Comenzar Test">
                </div>
            </div>
          </form>

        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="js/form.js"></script>
    </body>
</html>