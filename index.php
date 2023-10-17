<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Style/lobby.css?v=<?php echo time()?>">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <!-- componenet -->
        <div class="rank-bg">
            <div class="rank-global">
                <button class="close-ranking">
                    <img src="Image/Object/cancel.png" alt="">
                </button>
                <h1>Global Rank</h1>
                <div id="line"></div>
                <table>
                    <tr style="height: 40px;">
                        <th>name</th>
                        <th>time</th>
                        <th>score</th>
                    </tr>
                </table>
            </div>
        </div>


        <div class="header-container">
            <div class="character-side">
                <button class="character">
                    <img src="Image/Object/Birds.png" alt="">
                </button>
            </div>
            <div class="button-side">
                <button class="start-game" style="background-color: rgb(25, 82, 13);" go>
                    start game
                </button>
                <button class="session" style="background-Image:url(/Image/cover/winter.png); background-size: cover; color: black;">
                    Session 1
                </button>
                <button class="buy-skin" style="background-color: goldenrod">
                    buy skins
                </button>
                <button class="show-rank" style="background-color: rgb(71, 12, 12)">
                    show rank
                </button>
                <button class="setting" style="background-color: rgb(9, 63, 63) ;">
                    settings
                </button>
            </div>
        </div>
        <div class="rank-side">
            <button class="show-more">
                <img src="Image/Object/arrow-right.png" alt="">
            </button>
        </div>
        <span style="position: absolute; bottom: 0; left: 45%; 
            font-family: 'Bebas Neue', sans-serif; color: white; letter-spacing: 2px;
        ">
            this game created by <a href="https://t.me/ahmadi_hojjat">Hojjat Ahmadi</a>
        </span>
    </div>
</body>
</html>
<script src="script/lobby.js?s=<?php echo time()?>"></script>

<?php

echo $_SERVER['PATH_INFO']


?>