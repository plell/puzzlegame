
//window.PhaserGlobal = { disableWebAudio: true };

//dimensions should be 800, 600
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '30', { preload: preload, create: create, update: update, render: render  });

    function preload () {
        game.load.audio('collect1', 'images/audio/collect1.wav');
        game.load.audio('collect2', 'images/audio/collect2.wav');
        game.load.audio('collect3', 'images/audio/collect3.wav');
        game.load.audio('collect4', 'images/audio/collect4.wav');
        game.load.audio('collect5', 'images/audio/collect5.wav');
        game.load.audio('collect6', 'images/audio/collect6.wav');
        game.load.audio('collect7', 'images/audio/collect1.wav');
        game.load.audio('collect8', 'images/audio/collect2.wav');
        game.load.audio('collect9', 'images/audio/collect3.wav');
        game.load.audio('collect10', 'images/audio/collect4.wav');
        game.load.audio('collect11', 'images/audio/collect5.wav');
        game.load.audio('collect12', 'images/audio/collect6.wav');

        game.load.audio('mtnwaking', 'images/audio/mtnwaking.wav');

        game.load.audio('oob1', 'images/audio/oob1.wav');
        game.load.audio('oob2', 'images/audio/oob2.wav');
        game.load.audio('toss1', 'images/audio/toss1.wav');

        game.load.image('wallguard1', 'images/wallguard1.ico');
        game.load.image('wallguard2', 'images/wallguard2.ico');
        game.load.image('1', 'images/backgrounds/1.jpg');
        game.load.image('may', 'images/pixies/may.png');
        game.load.image('flag', 'images/flag.png');
        game.load.image('loveline2', 'images/loveline2.png');
        game.load.image('arrow', 'images/arrows.png');
        game.load.image('snowflake', 'images/snowflake.png');
        game.load.image('trees', 'images/tree.png');
        game.load.image('casa', 'images/casa.png');
        game.load.image('mtn', 'images/mtn.png');
        game.load.image('loveline', 'images/loveline.png');
        game.load.image('yellowtarget', 'images/yellowtarget.ico');
        game.load.image('greentarget', 'images/greentarget.ico');
        game.load.image('background', 'images/backgrounds/26.jpg');
        game.load.image('questionmark', 'images/questionsmark.ico');
        game.load.image('gameball1', 'images/gameball.ico');
        game.load.image('gameball2', 'images/gameball2.ico');
        game.load.image('gameball3', 'images/gameball3.ico');
        game.load.image('gameball4', 'images/gameball4.ico');
        game.load.image('gameball5', 'images/gameball5.ico');
        game.load.image('gameball6', 'images/gameball6.ico');
        game.load.image('gameball7', 'images/gameball.ico');
        game.load.image('gameball8', 'images/gameball2.ico');
        game.load.image('gameball9', 'images/gameball3.ico');
        game.load.image('gameball10', 'images/gameball4.ico');
        game.load.image('gameball11', 'images/gameball5.ico');
        game.load.image('gameball12', 'images/gameball6.ico');

        //bandit parts
        game.load.image('bandit0', 'images/ascii/Rightarm.ico');
        game.load.image('bandit1', 'images/ascii/Rightarm.ico');
        game.load.image('bandit2', 'images/ascii/Rightear.ico');
        game.load.image('bandit3', 'images/ascii/Eye.ico');
        game.load.image('bandit4', 'images/ascii/Mouth3.ico');
        game.load.image('bandit5', 'images/ascii/Eye.ico');
        game.load.image('bandit6', 'images/ascii/Leftear.ico');

        game.load.image('mouth0', 'images/ascii/Mouth0.ico');
        game.load.image('leftarm', 'images/ascii/Leftarm.ico');
        game.load.image('rightear', 'images/ascii/Rightear.ico');
        game.load.image('leftear', 'images/ascii/Leftear.ico');
        game.load.image('eye', 'images/ascii/Eye.ico');
    }

//global variables
  var casa;
  var thrust = 200;
//bandit possession states
  var balls = []
  var icons = []
  var grabbed = []

  var mtnwaking;
  var players;
  var weaponscale = 0;
  var playerscale = 1;
  var ballscale = 1;
  var projectiles;
//word doc parameters
  var yhop = 76; //34
  var leftmargin = 0;
  var leftmargin2 = 400;
  var rightmargin = 400;
  var rightmargin2 = 800;
  var p2_leftmargin = 800;
  var p2_rightmargin = 1600;
  var pageturn_1 = false;
  var pageturn_2 = false;
  var pagestart = 72; //28
  var pageend = 528; //572

  var cameraspeed = 36;

  var hitpower = 1;
  var highpower = 1;

  var knockbackdist = 60;
  var ballmeetsplayer = 16;
  var ballmeetsplayer2 = 16;

  var b_wintexty = 300;
  var h_wintexty = 300;
  var questionmark;
  var hanamovespeed = 15;
  var banditmovespeed = 15;
/*
  var currentdate = new Date();
  var datetime = (currentdate.getMonth()+1) + "/"
                + currentdate.getDate();
*/
  var text;
  var style = { font: "20px times", fill: "#ffffff", align: "center" };

  var wallguard1
  var wallguard2

  var loopmachineleft;
  var loopmachineright;
  var greentarget;
  var yellowtarget;
  var loveline;
  var staticimages;
  var treenumber1 = 118;
  var treenumber2 = 118;
  var treenumber3 = 118;
  var ballnumber = 1;
  var loveline2;

  var trees1 = [];
  var trees2 = [];
  var trees3 = [];
  var flag
  var raindrops = 600;
  var rain = [];
  var pagenumber = 4;
  var xpages = []
  var arrows1 = [];
  var arrows2 = []
  var arrows3 = []
  var arrows4 = []
  var arrows5 = []
  var arrows6 = []
  var arrownumberrows = 5;
  var arrownumbercolumns = 7;

  var timer;

  var guard1x = 2600;
  var guard2x = 3000;

  var ypages = []
  var bandit = [];
  var banditparts = 7;


    function create () {
        game.stage.backgroundColor = '#2d2d2d';
        game.world.setBounds(0, 0, 10000, 10000);

//fullscreen stuff
    //    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    //    game.input.onDown.add(gofull, this);
//background
    //    var bgLayer = game.add.group();
    //    var backdrop = bgLayer.create(0, 0, 'background');

        oob1 = game.add.audio('oob1');
        oob2 = game.add.audio('oob2');
        toss1 = game.add.audio('toss1');
        mtnwaking = game.add.audio('mtnwaking');
//groups
        staticimages = game.add.group();
        projectiles = game.add.group();
        players = game.add.group();
  //      players.enableBody = true;
  //      players.physicsBodyType = Phaser.Physics.ARCADE;


        loveline = staticimages.create(leftmargin+10, 0, 'loveline');
        loveline.anchor.setTo(0);
        loveline.scale.setTo(1);

        mtn = staticimages.create(rightmargin2, pageend+100, 'mtn');
        mtn.anchor.setTo(0);
        mtn.scale.setTo(1);

        casa = staticimages.create(0, 0, 'casa');
        casa.anchor.setTo(0.5);
        casa.scale.setTo(0);

        flag = staticimages.create(looperleftx - 8, pageend, 'flag');
        flag.anchor.setTo(0.5);
        flag.scale.setTo(1);

        wallguard1 = staticimages.create(guard1x, pageend-40, 'wallguard1');
        wallguard1.anchor.setTo(0.5);
        wallguard1.scale.setTo(3);

        wallguard2 = staticimages.create(guard2x, pageend-40, 'wallguard2');
        wallguard2.anchor.setTo(0.5);
        wallguard2.scale.setTo(3);

        yellowtarget = staticimages.create(40, 40, 'yellowtarget');
        yellowtarget.anchor.setTo(0.5);
        yellowtarget.scale.setTo(2);

        loopmachineleft = staticimages.create(looperleftx, pageend-yhop, 'leftear');
        loopmachineleft.anchor.setTo(0.5);
        loopmachineleft.scale.setTo(1);

        loopmachineright = staticimages.create(looperrightx, pageend-yhop, 'rightear');
        loopmachineright.anchor.setTo(0.5);
        loopmachineright.scale.setTo(1);



//ball starting positions
for(var i=0; i<ballnumber; i++){
  balls[i] = {};
  balls[i].banditPossession = false;
  balls[i].sound = game.add.audio('collect'+(i+1));
  balls[i].sprite = projectiles.create(60+i*100, pageend, 'gameball'+(i+1));
  balls[i].sprite.anchor.setTo(0.5);
  balls[i].sprite.scale.setTo(ballscale);
  balls[i].sprite.vx = (4 + i)*2;
  balls[i].sprite.vy = (4 + i)*2;
  //looper stuff
  balls[i].inlooper = false;
  balls[i].totheright = false;
  //grid stuff
  balls[i].tonorth = true;
  balls[i].tonortheast = false;
  balls[i].toeast = false;
  balls[i].tosoutheast = false;
  balls[i].tosouth = false;
  balls[i].tosouthwest = false;
  balls[i].towest = false;
  balls[i].tonorthwest = false;
  balls[i].questionmarker = staticimages.create(looperleftx+300, pageend-yhop*4, 'questionmark');
  balls[i].questionmarker.anchor.setTo(0.5);
  balls[i].questionmarker.scale.setTo(0);
}

// icon sprites
      for(var i=0; i<ballnumber; i++){
        icons[i] = {}
        icons[i].sprite = staticimages.create(40, 40, 'gameball'+(i+1))
        icons[i].sprite.anchor.setTo(0.5);
        icons[i].sprite.scale.setTo(0);
      }

//trees
      for(var i=0; i<treenumber1; i++){
        trees1[i] = {};
        trees1[i].sprite = staticimages.create(2000+rightmargin2*(i/2), pageend, 'trees')
        trees1[i].sprite.anchor.setTo(0.5);
        trees1[i].sprite.scale.setTo(1);
      }

      for(var i=0; i<treenumber2; i++){
        trees2[i] = {};
        trees2[i].sprite = staticimages.create(2000+rightmargin2*(i/3), pageend, 'trees')
        trees2[i].sprite.anchor.setTo(0.5);
        trees2[i].sprite.scale.setTo(1);
      }

      for(var i=0; i<treenumber3; i++){
        trees3[i] = {};
        trees3[i].sprite = staticimages.create(2000+rightmargin2*(i/7), pageend, 'trees')
        trees3[i].sprite.anchor.setTo(0.5);
        trees3[i].sprite.scale.setTo(1);
      }

//camera
      for(var i = 0; i < pagenumber; i++){
        xpages[i] = {};
        xpages[i].pageturn = false;
        xpages[i].leftmargins = 800*i;
        xpages[i].rightmargins = 800 * (i+1);
      }

      for(var i = 0; i < pagenumber; i++){
        ypages[i] = {};
        ypages[i].pageturn = false;
        ypages[i].topmargins = 600*i;
        ypages[i].bottommargins = 600 * (i+1);
      }

//rain or snow
      for(var i = 0; i < raindrops; i++){
        rain[i] = {};
        rain[i].sprite = staticimages.create((10+rightmargin2+i*28), Math.random() * (700-(pagestart-200)) + (pagestart-200), 'snowflake')
        rain[i].sprite.anchor.setTo(0.5);
        rain[i].sprite.scale.setTo(0);
        rain[i].atbottom = false;
      }

//looper arrows

//rain or snow
      for(var i = 0; i < arrownumbercolumns; i++){
        for (var j = 0; j < arrownumberrows; j++){
        arrows1[i] = {};
        arrows1[i][j] = {};
        arrows1[i][j].sprite = staticimages.create(880+rightmargin2+yhop*(i+1), pageend - (j+1)*yhop, 'arrow');
        arrows1[i][j].sprite.anchor.setTo(0.5);
        arrows1[i][j].sprite.scale.setTo(1);
    //    arrows1[i][j].sound = game.add.audio('collect'+(1));
        arrows1[i][j].atnorth = true;
        arrows1[i][j].atnortheast = false;
        arrows1[i][j].ateast = false;
        arrows1[i][j].atsoutheast = false;
        arrows1[i][j].atsouth = false;
        arrows1[i][j].atsouthwest = false;
        arrows1[i][j].atwest = false;
        arrows1[i][j].atnorthwest = false;
      }
      }


//bandit parts
for(var i = 0; i < banditparts; i++){
  bandit[i] = {};
  bandit[i].sprite = players.create(240 - (i * 10), 300, 'bandit'+ i);
  bandit[i].sprite.anchor.setTo(0.5);
  bandit[i].sprite.scale.setTo(playerscale);
  bandit[i].pageportal1 = true;
  bandit[i].pageportal2 = true;
  bandit[i].leftside = true; //leftside of the first movable wall
  bandit[i].onpage1 = true;
  bandit[i].onpage4 = false;
}

    }

    function update() {
                playerMove();
                playerToss();
                ballMove();
                ballReset();
                moveCamera();
                npcTalk();
                loopMachine();
                iconUpdate();
                creatures();

}

    function render() {
                //player movement monitor
          //  game.debug.spriteInfo(gameball, 450, 32);
        //    game.debug.spriteInfo(gameball2, 450, 400);
          //  game.debug.spriteInfo(bandit, 450, 32);
}


function npcTalk() {
  if (bandit[0].sprite.x < guard1x+60 && bandit[0].sprite.x > guard1x-60 && bandit[0].sprite.y == pageend){
//    timer.start();
    console.log('growrl');
//    if (timer > 200){
//    console.log("it works");
//    }
  }
  else if (bandit[0].sprite.x < guard2x+60 && bandit[0].sprite.x > guard2x-60 && bandit[0].sprite.y == pageend){
//    timer.start();
    console.log('prawrl');
//    if (timer > 200){
//    console.log("it works");
//    }
    }
}




function crazyTrees(tree){
  var obj = tree.sprite;
//  for(var i=0; i<treenumber3; i++){
  obj.tint = Math.random() * 0xffffff;
//}
}

var may;

function creatures(){
      //crazyTrees
      for(var i=0; i<treenumber3; i++){
            crazyTrees(trees1[i]);
            crazyTrees(trees3[i]);
          }
            if (mtn.y < -110 && mtn.y > -160){
              mtnwaking.play();
            }
            if (mtn.y < -160){
              mtnrising = false;
            }
            if (mtnrising == false){
              rainFall();
            //  may = players.create(looperrightx+700, pageend, 'may');
            //  may.anchor.setTo(0.5);
            //  may.scale.setTo(1);
            }
          }

var mtnbell;
var mtn;
var mtnrising = true;

//lopper variables
var mtnbell = 0;
var looperleftx = 900;
var looperlefty = pageend - yhop;
var looperrightx = looperleftx + 600;
var looperrighty = pageend - yhop;

function looper(ball) {
  var obj = ball.sprite;
  var direction = ball.totheright;
  var qmark = ball.questionmarker.scale;
  var sound = ball.sound;
  var inside =ball.inlooper;
  if (obj.y > looperlefty - 50 && obj.y < looperlefty + 50 && obj.x > looperleftx-20 && obj.x < looperrightx+20){
      if (direction == true) {
        obj.x += obj.vx;
        if (obj.x > looperrightx) {
        sound.play();
        mtn.tint = Math.random() * 0xffffff;
        qmark.setTo(8);
            if (mtnrising == true){
            mtnbell += 0.6;
            mtn.y -= mtnbell;
            }
        direction = false;
        }
        else{qmark.setTo(0);}
        }
      else {
        obj.x -= obj.vx;
        if (obj.x < looperleftx) {
        sound.play();
        mtn.tint = Math.random() * 0xffffff;
        qmark.setTo(8);
            if (mtnrising == true){
            mtnbell += 0.6;
            mtn.y -= mtnbell;
            }
        direction = true;
        }
        else{qmark.setTo(0);}
        }
      }
        return direction;
      }



function loopMachine() {
  for(var i=0; i<balls.length; i++){
    balls[i].totheright = looper(balls[i]);
    balls[i].inlooper = loopReset(balls[i]);
  }
}




function loopReset(ball) {
  var obj = ball.sprite;
  var inside = ball.inlooper;
  if (bandit[0].sprite.x < looperleftx && bandit[0].sprite.x > looperleftx - 8){
           obj.y = pageend;
           inside = false;
           //to reset mtn
           //mtn.y = pageend+200;
           //mtnrising = true;
}
return inside;
}

var looper2hitbox = 15;



function looper2(arrow, ball){
  var obj = ball.sprite;
  var obj_xspeed = ball.sprite.vx;
  var obj_yspeed = ball.sprite.vy;
  var obj_possessed = ball.banditPossession;
  var obj_n = ball.tonorth;
  var obj_ne = ball.tonortheast;
  var obj_e = ball.toeast;
  var obj_se = ball.tosoutheast;
  var obj_s = ball.tosouth;
  var obj_sw = ball.tosouthwest;
  var obj_w = ball.towest;
  var obj_nw = ball.tonorthwest;
  var arrw = arrow.sprite;
  var arrw_n = arrow.atnorth;
  var arrw_ne = arrow.atnortheast;
  var arrw_e = arrow.ateast;
  var arrw_se = arrow.atsoutheast;
  var arrw_s = arrow.atsouth;
  var arrw_sw = arrow.atsouthwest;
  var arrw_w = arrow.atwest;
  var arrw_nw = arrow.atnorthwest;
//  var arrw_sound = arrow.sound;

if (obj.x < arrw.x + looper2hitbox && obj.x > arrw.x - looper2hitbox && obj.y < arrw.y + looper2hitbox && obj.y > arrw.y - looper2hitbox) {
//arrow states
  if (arrw_n == true){
    obj_n =true;
  }
  else {obj_n=false;}

  if (arrw_ne == true){
    obj_ne =true;
  }
  else {obj_ne=false;}

  if (arrw_e == true){
    obj_e =true;
  }
  else {obj_e=false;}

  if (arrw_se == true){
    obj_se =true;
  }
  else {obj_se=false;}

  if (arrw_s == true){
    obj_s =true;
  }
  else {obj_s=false;}

  if (arrw_sw == true){
    obj_sw =true;
  }
  else {obj_sw=false;}

  if (arrw_w == true){
    obj_w =true;
  }
  else {obj_w=false;}

  if (arrw_nw == true){
    obj_nw =true;
  }
  else {obj_nw=false;}
}
/*
//ball movements
if (obj_possessed == false){
  if (obj_n == true){
    obj.y -= obj_yspeed;
  }
  if (obj_ne == true){
    obj.y -= obj_yspeed;
    obj.x += obj_xspeed;
  }
  if (obj_e == true){
    obj.x += obj_xspeed;
  }
  if (obj_se == true){
    obj.y += obj_yspeed;
    obj.x += obj_xspeed;
  }
  if (obj_s == true){
    obj.y += obj_yspeed;
  }
  if (obj_sw == true){
    obj.y += obj_yspeed;
    obj.x -= obj_xspeed;
  }
  if (obj_w == true){
    obj.x -= obj_xspeed;
  }
  if (obj_nw == true){
    obj.y -= obj_yspeed;
    obj.x -= obj_xspeed;
  }
}
*/

return obj_n, obj_ne, obj_e, obj_se, obj_s, obj_sw, obj_w, obj_nw;
}






var rainspeed = 12;

function rainer(rain){
  var rsprite = rain.sprite;
  rsprite.scale.setTo(0.4);
  if (rsprite.y < 600){
    rsprite.y+=rainspeed;

  }
  else {
    rsprite.y = -40;
    rsprite.scale.setTo(0.4);
  }
}

function rainFall(){
  for (var i=0; i<raindrops;i++){
    rainer(rain[i]);
  }

  casa.scale.setTo(2);

  casa.x = bandit[0].sprite.x;
  casa.y = bandit[0].sprite.y -20;

}


function gofull() {
    if (game.scale.isFullScreen)
    { game.scale.stopFullScreen();}
    else  { game.scale.startFullScreen(false); }
  }



function camMoverX(page) {
  var turned = page.pageturn;
  var rmargin = page.rightmargins;
  var lmargin = page.leftmargins;

  if (bandit[0].sprite.x > rmargin){
    turned = true; }
  else {
    turned = false;}

  if (turned == true){
/*
    if (game.camera.x < rmargin) {
      game.camera.x = rmargin;
    }}
    else {
    if  (game.camera.x > lmargin) {
        game.camera.x = game.camera.x - 800;
      }}*/

      if (game.camera.x < rmargin) {
        game.camera.x += cameraspeed;
      }}
      else {
      if  (game.camera.x > lmargin) {
          game.camera.x -= cameraspeed;
        }}

  //  console.log(game.camera.x)
  return turned;
}

function camMoverY(page) {
  var turned = page.pageturn;
  var topmargin = page.topmargins;
  var bottommargin = page.bottommargins;

  if (bandit[0].sprite.y > bottommargin){
    turned = true; }
  else {
    turned = false;}

  if (turned == true){
/*
    if (game.camera.x < rmargin) {
      game.camera.x = rmargin;
    }}
    else {
    if  (game.camera.x > lmargin) {
        game.camera.x = game.camera.x - 800;
      }}*/

      if (game.camera.y < bottommargin) {
        game.camera.y += cameraspeed;
      }}
      else {
      if  (game.camera.y > topmargin) {
          game.camera.y -= cameraspeed;
        }}

  //  console.log(game.camera.x)
  return turned;
}


function moveCamera() {
//follow bandit
  for(var i = 0; i < pagenumber; i++){
    xpages[i].pageturn = camMoverX(xpages[i]);
    ypages[i].pageturn = camMoverY(ypages[i]);
  }

  if (bandit[0].sprite.x > 3600){
    if (game.camera.x < bandit[0].sprite.x - 400){
      game.camera.x = bandit[0].sprite.x - 400;
    }
    if
    (game.camera.x > bandit[0].sprite.x - 400){
      game.camera.x = bandit[0].sprite.x - 400;
    }
  }

//icons
  yellowtarget.x = game.camera.x + 40;
  yellowtarget.y = game.camera.y + 40;
  for (var i = 0; i < balls.length; i++){
  iconMove(icons[i]);
}
}

function iconMove(icon){
  var obj = icon.sprite;
  for (var i = 0; i < balls.length; i++){
    obj.x = game.camera.x + 40;
    obj.y = game.camera.y + 40;
  }
}

function iconUpdate(){
  if(grabbed.length>0){
      for(var j=0; j<icons.length; j++){
        var i = grabbed[0];
        if (i == 'gameball' + j + 1) {
          icons[j].sprite.scale.setTo(1);
        }
        else{
          icons[j].sprite.scale.setTo(0);
        }
        }
    }
}

function pager(obj) {
  var ob = obj.sprite
  var pagevar = obj.pageportal1;
  var page1 = obj.onpage1

if (page1 == true){
  if (pagevar == true){
            if (ob.y >= pageend && ob.x > rightmargin-4)
            {
            pagevar = !pagevar;
            ob.x = leftmargin2 + 4;
            ob.y = pagestart;
            }}
            else     {
            if (ob.y <= pagestart && ob.x < leftmargin2+4)
            {
            pagevar = !pagevar;
            ob.x = rightmargin - 4;
            ob.y = pageend;
          }}}
  return pagevar;
}


function b_pagePortal() {
  for (var i=0;i<bandit.length;i++){
  bandit[i].pageportal1 = pager(bandit[i]);
  }
}


    //player movement
     function playerMove() {

       if (bandit[0].sprite.x > 1400){
         for (var i = 0; i < bandit.length; i++){
           bandit[i].onpage1 = false;
       }}
       else if (bandit[0].sprite.x < 1400){
         for (var i = 0; i < bandit.length; i++){
           bandit[i].onpage1 = true;
       }}


//bandit left and right
       if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                 for (var j = 0; j < banditmovespeed; j++){
                for (var i = 0; i < bandit.length; i++){
                 bandit[i].sprite.x --;
                 b_marginRules();
                 b_pagePortal();
                 b_marginRules2();  }  }
                          }
       if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                for (var j = 0; j < banditmovespeed; j++){
                for (var i = 0; i < bandit.length; i++){
                 bandit[i].sprite.x ++;
                 b_marginRules();
                 b_pagePortal();
                 b_marginRules2();  }  }
                          }
    if (game.input.keyboard.justPressed(Phaser.Keyboard.ENTER))  {

                            for (var j = 0; j < thrust; j++){
                              for (var i = 0; i < bandit.length; i++){
                             bandit[i].sprite.x --;
                             b_marginRules();
                             b_pagePortal();
                             b_marginRules2();  }  }
                           }
    if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR))  {
                            for (var j = 0; j < thrust; j++){
                                for (var i = 0; i < bandit.length; i++){
                             bandit[i].sprite.x ++;
                             b_marginRules();
                             b_pagePortal();
                             b_marginRules2();}}
                           }
                          }



function marginer(obj) {
  var ob = obj.sprite
  var page1 = obj.onpage1
  var pagevar = obj.pageportal1;

if (page1 == true){

          if (pagevar == true) {
                     if (ob.x < leftmargin) {
                       ob.y = ob.y - yhop;
                       ob.x = rightmargin;
                     }
                     if (ob.x > rightmargin) {
                       ob.y = ob.y + yhop;
                       ob.x = leftmargin;                     }}
           else {            //if at the bottom, keep going forward
               if (ob.y == pageend && ob.x > 450){
                     }      //if not at the bottom, stay on this page
                     else {
                       if (ob.x < leftmargin2) {
                         ob.y = ob.y - yhop;
                         ob.x = rightmargin2;
                       }
                       if (ob.x > rightmargin2) {
                         ob.y = ob.y + yhop;
                         ob.x = leftmargin2;
                       }}}}
return pagevar;
}

 function b_marginRules() {
   for (var i = 0; i<bandit.length;i++){
     bandit[i].pageportal1 = marginer(bandit[i]);

 }
 }

 var page4mid = 2800;
 var page4left = 2400;
 var halfpagexhop = 400;
 var wallIsUp = true;

 //fixme
 function marginer2(obj){
   var ob = obj.sprite
   var page1 = obj.onpage1
   var pagevar = obj.pageportal2;
   var leftm = 2400;
   var rightm = 2800;

if (page1 == false){
           if (pagevar == true) {
                      if (ob.y > pageend && ob.x < leftm) {
                        ob.y = ob.y - yhop;
                        ob.x = rightm;
                      }
                      if (ob.x > rightm) {
                        ob.y = ob.y + yhop;
                        ob.x = leftm;   }}
}
 return pagevar;
 }


 function b_marginRules2(){
   for (var i=0;i<bandit.length;i++){
   bandit[i].pageportal2 = marginer2(bandit[i]);
   }
 }


//ball movement
function ballMove() {

  for(var i=0; i<balls.length; i++){

    if(balls[i].banditPossession==false){
      //meets player
      if (balls[i].sprite.x > bandit[0].sprite.x-ballmeetsplayer && balls[i].sprite.y > bandit[0].sprite.y-ballmeetsplayer && balls[i].sprite.x < bandit[0].sprite.x+ballmeetsplayer && balls[i].sprite.y < bandit[0].sprite.y+ballmeetsplayer) {
          balls[i].sound.play();
          balls[i].banditPossession = true;
          grabbed.push(i);
      }


      //goes into looper2
/*
      if (bandit[0].sprite.x > rightmargin && bandit[0].sprite.x < 3000){
                  for (var h = 0; h < arrownumbercolumns; h++){
                  for (var j = 0; j < arrownumberrows; j++){
                  balls[i].atnorth = looper2(arrows1[h][j], balls[i]);
                  balls[i].atnortheast = looper2(arrows1[h][j], balls[i]);
                  balls[i].ateast = looper2(arrows1[h][j], balls[i]);
                  balls[i].atsoutheast = looper2(arrows1[h][j], balls[i]);
                  balls[i].atsouth = looper2(arrows1[h][j], balls[i]);
                  balls[i].atsouthwest = looper2(arrows1[h][j], balls[i]);
                  balls[i].atwest = looper2(arrows1[h][j], balls[i]);
                  balls[i].atnorthwest = looper2(arrows1[h][j], balls[i]);
                }
                }
              }
*/
  }

    else {

      if (balls[i].sprite.x > bandit[0].sprite.x)  {
        balls[i].sprite.x -= balls[i].sprite.vx*hitpower;
      }
      else if (balls[i].sprite.x < bandit[0].sprite.x) {
        balls[i].sprite.x += balls[i].sprite.vx*hitpower;
      }
      if (balls[i].sprite.y > bandit[0].sprite.y)  {
        balls[i].sprite.y -= balls[i].sprite.vy*hitpower;
      }
      else if (balls[i].sprite.y < bandit[0].sprite.y)  {
        balls[i].sprite.y += balls[i].sprite.vy*hitpower;
      }
    }
  }
  }






function winLose() {}
           /*
             if (bandit.y < 165 || hana.y < 165) {
                       text = game.add.text(100, h_wintexty, "HANA WIN", style);
                       text.anchor.set(0.5);
                    //   game.stage.backgroundColor = '#C0FFEE';

                      // game.input.onTap.addOnce(restart,this);
                       h_wintexty = h_wintexty + 30;
             }
             if (bandit.y > 430 || hana.y > 430 ) {
                       text = game.add.text(700, b_wintexty, "BANDIT WIN", style);
                       text.anchor.set(0.5);
                  //     game.stage.backgroundColor = '#C0FFEE';

                    //   game.input.keyboard.SPACEBAR.addOnce(restart,this));
                       b_wintexty = b_wintexty + 30;
             }
             */

function restart () {}

function impactVisual() {}





function playerToss() {
//  if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) use this for arpeggiator
  if (game.input.keyboard.justPressed(Phaser.Keyboard.UP)){
//console.log(grabbed)
    //for(var i=0; i<balls.length; i++){
    if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)){
    if(grabbed.length>0){
      for(var j=0; j<grabbed.length; j++){
        var i = grabbed[j]
        if (balls[i].sprite.x > bandit[0].sprite.x-ballmeetsplayer && balls[i].sprite.y > bandit[0].sprite.y-ballmeetsplayer && balls[i].sprite.x < bandit[0].sprite.x+ballmeetsplayer && balls[i].sprite.y < bandit[0].sprite.y+ballmeetsplayer){
          //  balls[i].sprite.y -= yhop;
            toss1.play();
            balls[i].banditPossession = false;
            grabbed.splice(j,1)
            break;
          }
        }
      }
    }
    else {
      if(grabbed.length>0){
      for(var j=0; j<grabbed.length; j++){
        var i = grabbed[j]
        if (balls[i].sprite.x > bandit[0].sprite.x-ballmeetsplayer && balls[i].sprite.y > bandit[0].sprite.y-ballmeetsplayer && balls[i].sprite.x < bandit[0].sprite.x+ballmeetsplayer && balls[i].sprite.y < bandit[0].sprite.y+ballmeetsplayer){
            balls[i].sprite.y -= yhop;
            toss1.play();
            balls[i].banditPossession = false;
            grabbed.splice(j,1)
            break;
          }
        }
      }
    }
  }

//  if (game.input.keyboard.justPressed(Phaser.Keyboard.DOWN)) use this for arpeggiator!
  if (game.input.keyboard.justPressed(Phaser.Keyboard.DOWN)){
  //  console.log(grabbed)
    //for(var i=0; i<balls.length; i++){
    //for(var i=0; i<balls.length; i++){
    if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)){
    if(grabbed.length>0){
      for(var j = grabbed.length; j--;){
        var i = grabbed[j]
        if (balls[i].sprite.x > bandit[0].sprite.x-ballmeetsplayer && balls[i].sprite.y > bandit[0].sprite.y-ballmeetsplayer && balls[i].sprite.x < bandit[0].sprite.x+ballmeetsplayer && balls[i].sprite.y < bandit[0].sprite.y+ballmeetsplayer){
          //  balls[i].sprite.y -= yhop;
            toss1.play();
            balls[i].banditPossession = false;
            grabbed.splice(j,1)
            break;
          }
        }
      }
    }
    else {
      if(grabbed.length>0){
      for(var j=0; j<grabbed.length; j++){
        var i = grabbed[j]
        if (balls[i].sprite.x > bandit[0].sprite.x-ballmeetsplayer && balls[i].sprite.y > bandit[0].sprite.y-ballmeetsplayer && balls[i].sprite.x < bandit[0].sprite.x+ballmeetsplayer && balls[i].sprite.y < bandit[0].sprite.y+ballmeetsplayer){
            balls[i].sprite.y += yhop;
            toss1.play();
            balls[i].banditPossession = false;
            grabbed.splice(j,1)
            break;
          }
        }
      }
    }
}
}

function ballReset() {

  for(var i=0; i<balls.length; i++){
    if (balls[i].sprite.y > pageend+20 || balls[i].sprite.y < pagestart-20) {
      balls[i].sprite.x = 60+i*100;
      balls[i].sprite.y = pageend;
      oob1.play();
      balls[i].banditPossession = false;
    }
  }

}


          function knockBack(){
            }
    /*
            if (gameball.x > bandit.x-ballmeetsplayer && gameball.y > bandit.y-ballmeetsplayer && gameball.x < bandit.x+ballmeetsplayer && gameball.y < bandit.y+ballmeetsplayer)
                                      { passtoBandit = !passtoBandit;
                                    for (var i = 0; i < knockbackdist; i++) {
                                    bandit.x --;
                                    bandit0.x --;
                                    bandit1.x --;
                                    bandit2.x --;
                                    bandit3.x --;
                                    bandit4.x --;
                                    bandit5.x --;
                                    marginRules();
                                                }
                                        }
                                    //    playerMove();
                                    */
            /*ok, here are some notes on the hit system
            8 unique toss styles: hold left, right, up, down, left-down, right-down, left-up, or right-up to choose toss style
            4 toss speeds: release spacebar at the right time to toss at low, medium, high, and super high power
            */
