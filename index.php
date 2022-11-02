<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Free Convert Case</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css">
        <link rel="shortcut icon" href="img/free-convert-case-logo.svg" type="image/x-icon">
    </head>
    <body>

        <nav class="navbar fcc-navbar sticky-top navbar-expand-lg" style="background-color: #e3f2fd;">
            <div class="container">
                <a class="navbar-brand" href="#"><img src="img/free-convert-case-logo.svg" alt="Free Convert Case"><span>Free Convert Case</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Convert Case</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Small Text Generator</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            More Tools
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Underline Text Generator</a></li>
                            <li><a class="dropdown-item" href="#">Mirror Text Generator</a></li>
                            <li><a class="dropdown-item" href="#">Unicode Text Converter</a></li>
                            <li><a class="dropdown-item" href="#">Bubble Text Generator</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        <!-- Editor Section -->
        <div class="editor-section ptb-100">
            <div class="container">
                <div class="section-title">
                    <h2>Convert Your Case</h2>
                    <p>Simply enter your text and choose the case you want to convert it to.</p>
                </div>
                <div class="content-area">
                    <form id="convert-case">
                        <div class="mb-3">
                            <textarea class="form-control" id="ConvertCaseField" rows="8"></textarea>
                        </div>

                        <div class="btn-group" role="group">
                            <button type="button" name="SentenceCase" id="SentenceCase" class="btn">Sentence case</button>
                            <button type="button" name="UpperCase" id="UpperCase" class="btn">UPPER CASE</button>
                            <button type="button" name="LoweCase" id="LoweCase" class="btn">lower case</button>

                            <div class="copied"></div>
                            <button type="button" onclick="copyTextFun()" class="btn btn-copy">Copy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Editor Section -->

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>