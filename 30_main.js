
//window.PhaserGlobal = { disableWebAudio: true };

//dimensions should be 800, 600
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '30', { preload: preload, create: create, update: update, render: render  });

    function preload () {
        game.load.audio('collect1', 'images/audio/g_collect1.wav');
        game.load.audio('collect2', 'images/audio/g_collect2.wav');
        game.load.audio('collect3', 'images/audio/g_collect3.wav');
        game.load.audio('collect4', 'images/audio/g_collect4.wav');
        game.load.audio('collect5', 'images/audio/g_collect5.wav');
        game.load.audio('collect6', 'images/audio/g_collect6.wav');
        game.load.audio('collect7', 'images/audio/g_collect7.wav');
        game.load.audio('collect8', 'images/audio/g_collect8.wav');
        game.load.audio('collect9', 'images/audio/g_collect9.wav');
        game.load.audio('collect10', 'images/audio/g_collect10.wav');
        game.load.audio('collect11', 'images/audio/g_collect11.wav');
        game.load.audio('collect12', 'images/audio/g_collect12.wav');
        game.load.audio('collect13', 'images/audio/g_collect13.wav');
        game.load.audio('collect14', 'images/audio/g_collect14.wav');
        game.load.audio('collect15', 'images/audio/g_collect15.wav');
        game.load.audio('collect16', 'images/audio/g_collect16.wav');
        game.load.audio('collect17', 'images/audio/g_collect26.wav');
        game.load.audio('collect18', 'images/audio/g_collect27.wav');
        game.load.audio('collect19', 'images/audio/g_collect28.wav');
        game.load.audio('collect20', 'images/audio/g_collect29.wav');
        game.load.audio('collect21', 'images/audio/g_collect30.wav');
        game.load.audio('collect22', 'images/audio/g_collect31.wav');
        game.load.audio('collect23', 'images/audio/g_collect32.wav');
        game.load.audio('collect24', 'images/audio/g_collect33.wav');
        game.load.audio('collect25', 'images/audio/g_collect34.wav');
        game.load.audio('collect26', 'images/audio/g_collect26.wav');
        game.load.audio('collect27', 'images/audio/g_collect27.wav');
        game.load.audio('collect28', 'images/audio/g_collect28.wav');
        game.load.audio('collect29', 'images/audio/g_collect29.wav');
        game.load.audio('collect30', 'images/audio/g_collect30.wav');
        game.load.audio('collect31', 'images/audio/g_collect31.wav');
        game.load.audio('collect32', 'images/audio/g_collect32.wav');
        game.load.audio('collect33', 'images/audio/g_collect33.wav');
        game.load.audio('collect34', 'images/audio/g_collect34.wav');
        game.load.audio('collect35', 'images/audio/g_collect35.wav');
        game.load.audio('collect36', 'images/audio/g_collect36.wav');
        game.load.audio('collect37', 'images/audio/g_collect37.wav');
        game.load.audio('collect38', 'images/audio/g_collect38.wav');
        game.load.audio('collect39', 'images/audio/g_collect39.wav');
        game.load.audio('collect40', 'images/audio/g_collect4.wav');
        game.load.audio('goat', 'images/audio/goatsound.wav');

        game.load.audio('yes', 'images/audio/yes.wav');
        game.load.audio('no', 'images/audio/no.wav');

        game.load.audio('mtnwaking', 'images/audio/mtnwaking.wav');

        game.load.audio('oob1', 'images/audio/oob1.wav');
        game.load.audio('oob2', 'images/audio/oob2.wav');
        game.load.audio('toss1', 'images/audio/toss1.wav');
        game.load.image('menu', 'images/menu.png');
        game.load.image('gate', 'images/gate.png');
        game.load.image('gate2', 'images/gate2.png');
        game.load.image('gate3', 'images/gate3.png');

        game.load.image('scan1', 'images/scan1.png');
        game.load.image('scan2', 'images/scan2.png');

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
        game.load.image('gameball7', 'images/gameball7.ico');
        game.load.image('gameball8', 'images/gameball10.ico');
        game.load.image('gameball9', 'images/gameball3.ico');
        game.load.image('gameball10', 'images/gameball4.ico');
        game.load.image('gameball11', 'images/gameball5.ico');
        game.load.image('gameball12', 'images/gameball6.ico');
        game.load.image('gameball13', 'images/gameball3.ico');
        game.load.image('gameball14', 'images/gameball10.ico');
        game.load.image('gameball15', 'images/gameball5.ico');
        game.load.image('gameball16', 'images/gameball10.ico');
        game.load.image('gameball17', 'images/gameball.ico');
        game.load.image('gameball18', 'images/gameball2.ico');
        game.load.image('gameball19', 'images/gameball3.ico');
        game.load.image('gameball20', 'images/gameball4.ico');
        game.load.image('gameball21', 'images/gameball5.ico');
        game.load.image('gameball22', 'images/gameball6.ico');
        game.load.image('gameball23', 'images/gameball7.ico');
        game.load.image('gameball24', 'images/gameball10.ico');
        game.load.image('gameball25', 'images/gameball3.ico');
        game.load.image('gameball26', 'images/gameball4.ico');
        game.load.image('gameball27', 'images/gameball5.ico');
        game.load.image('gameball28', 'images/gameball6.ico');
        game.load.image('gameball29', 'images/gameball3.ico');
        game.load.image('gameball30', 'images/gameball10.ico');
        game.load.image('gameball31', 'images/gameball5.ico');
        game.load.image('gameball32', 'images/gameball6.ico');
        game.load.image('gameball33', 'images/gameball7.ico');
        game.load.image('gameball34', 'images/gameball10.ico');
        game.load.image('gameball35', 'images/gameball3.ico');
        game.load.image('gameball36', 'images/gameball4.ico');
        game.load.image('gameball37', 'images/gameball5.ico');
        game.load.image('gameball38', 'images/gameball6.ico');
        game.load.image('gameball39', 'images/gameball3.ico');
        game.load.image('gameball40', 'images/gameball10.ico');

        game.load.image('house', 'images/house.png');

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

        game.load.image('hippo', 'images/pixies/treehippo.png');

        game.load.image('page1', 'images/backgrounds/page1.png');
        game.load.image('page2', 'images/backgrounds/page2.png');
        game.load.image('page3', 'images/backgrounds/page3.png');
        game.load.image('page4', 'images/backgrounds/page4.png');
    }


//word doc parameters
  var yhop = 76; //34

  var leftmargin1 = 10;
  var leftmargin2 = 800 + 10;
  var leftmargin3 = 800*2 + 10;
  var leftmargin4 = 800*3 + 10;
  var leftmargin5 = 800*4 + 10;
  var leftmargin6 = 800*5 + 10;
  var leftmargin7 = 800*6 + 10;
  var leftmargin8 = 800*7 + 10;
  var rightmargin1 = 800 - 10;
  var rightmargin2 = 800*2 - 10;
  var rightmargin3 = 800*3 - 10;
  var rightmargin4 = 800*4 - 10;
  var rightmargin5 = 800*5 - 10;
  var rightmargin6 = 800*6 - 10;
  var rightmargin7 = 800*7 - 10;
  var rightmargin8 = 800*8 - 10;

  var pagestart1 = 72; //28
  var pagestart2 = 72 + 600*1;
  var pagestart3 = 72 + 600*2;
  var pagestart4 = 72 + 600*3;
  var pagestart5 = 72 + 600*4;
  var pagestart6 = 72 + 600*5;
  var pagestart7 = 72 + 600*6;
  var pagestart8 = 72 + 600*7;
  var pageend1 = 528; //572
  var pageend2 = 528 + 600*1;
  var pageend3 = 1652 //528 + 600*2;
  var pageend4 = 528 + 600*3;
  var pageend5 = 528 + 600*4;
  var pageend6 = 528 + 600*5;
  var pageend7 = 528 + 600*6;
  var pageend8 = 528 + 600*7;

//global variables
  var casa;
  var thrust = 200;
//bandit possession states
  var balls = []
  var icons = []
  var grabbed = []

  var godmode = false;
  var cutscene = false;

  var mtnwaking;
  var players;
  var weaponscale = 0;
  var playerscale = 1;
  var ballscale = 1;
  var projectiles;

  var gatemark1;
  var gatemark2;
  var gatemark3;
  var gatemark4;
  var gatemark5;
  var gatemark6;
  var gatemark7;
  var gatemark8;
  var gatemark9;
  var gatemark10;
  var gatemark11;
  var gatemark12;
  var gatemark13;
  var gatemark14;

  var cameraspeed = 40;

  var hitpower = 1;
  var highpower = 1;

  var knockbackdist = 60;
  var ballmeetsplayer = 18;
  var ballmeetsplayer2 = 16;
  var goatsound
  var b_wintexty = 300;
  var h_wintexty = 300;
  var questionmark;
  var hanamovespeed = 15;
  var banditmovespeed = 25;
/*
  var currentdate = new Date();
  var datetime = (currentdate.getMonth()+1) + "/"
                + currentdate.getDate();
*/
  var text;
  var style = { font: "20px times", fill: "#ffffff", align: "center" };

  var wallguard1
  var wallguard2
  var hippo
  var loopmachineleft;
  var loopmachineright;
  var greentarget;
  var yellowtarget;
  var loveline;
  var staticimages;
  var treenumber1 = 118;
  var treenumber2 = 118;
  var treenumber3 = 118;
  var ballnumber = 30;
  var loveline2;
  var house
  var trees1 = [];
  var trees2 = [];
  var trees3 = [];
  var flag
  var raindrops = 60;
  var rain = [];
  var pagenumber = 10;

  var arrows1 = [];
  var arrows2 = []
  var arrows3 = []
  var arrows4 = []
  var arrows5 = []
  var arrows6 = []
  var arrownumberrows = 5;
  var arrownumbercolumns = 7;
  var loopmachineleft2;
  var loopmachineright2;
  var scan1
  var scan2
  var housey = 148;
  var housex = 60;
  var timer = 0;

  var guard1x = 1110;
  var guard1y = pageend3-10;
  var guard2x = 3000;
  var iconbud

  //pages
  var xpages = []
  var ypages = []
  var negxpages = []
  var negypages = []

  var bandit = [];
  var banditparts = 7;
  var collection = []
  var loveline2
  var yessound
  var nosound

  var menu;
var apuzzle1;
var bpuzzle1;
var cpuzzle1;
var dpuzzle1;
var epuzzle1;
var fpuzzle1;
var gpuzzle1;
  var ground1;
  var ground2;
  var ground3;
  var ground4;
var banditwalkspeed = 4;

    function create () {
        game.stage.backgroundColor = '#2d2d2d';
        game.world.setBounds(0, 0, 14400, 10800);

        text = game.add.text(0, 0, '', style);

//fullscreen stuff
    //    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    //    game.input.onDown.add(gofull, this);
//background
    //    var bgLayer = game.add.group();
    //    var backdrop = bgLayer.create(0, 0, 'background');
        nosound = game.add.audio('no');
        yessound = game.add.audio('yes');
        oob1 = game.add.audio('oob1');
        oob2 = game.add.audio('oob2');
        toss1 = game.add.audio('toss1');
        mtnwaking = game.add.audio('mtnwaking');
        goatsound = game.add.audio('goat');
//groups
        staticimages = game.add.group();
        projectiles = game.add.group();
        players = game.add.group();
  //      players.enableBody = true;
  //      players.physicsBodyType = Phaser.Physics.ARCADE;




        ground1 = staticimages.create(0, 0, 'page1');
        ground1.anchor.setTo(0);
        ground1.scale.setTo(1);

        ground2 = staticimages.create(800, 0, 'page2');
        ground2.anchor.setTo(0);
        ground2.scale.setTo(1);

        ground3 = staticimages.create(800, 600, 'page3');
        ground3.anchor.setTo(0);
        ground3.scale.setTo(1);

        ground4 = staticimages.create(800, 1200, 'page4');
        ground4.anchor.setTo(0);
        ground4.scale.setTo(1);

        apuzzle1 = staticimages.create(leftmargin2+300, pagestart3+yhop, 'greentarget');
        apuzzle1.anchor.setTo(0.5);
        apuzzle1.scale.setTo(3);

        bpuzzle1 = staticimages.create(leftmargin2+100, pagestart3+yhop, 'greentarget');
        bpuzzle1.anchor.setTo(0.5);
        bpuzzle1.scale.setTo(3);

        cpuzzle1 = staticimages.create(leftmargin2+300, pagestart3+yhop*3, 'greentarget');
        cpuzzle1.anchor.setTo(0.5);
        cpuzzle1.scale.setTo(3);

        dpuzzle1 = staticimages.create(leftmargin2+600, pagestart3+yhop*4, 'greentarget');
        dpuzzle1.anchor.setTo(0.5);
        dpuzzle1.scale.setTo(3);

        epuzzle1 = staticimages.create(leftmargin2+500, pagestart3+yhop*5, 'greentarget');
        epuzzle1.anchor.setTo(0.5);
        epuzzle1.scale.setTo(3);

        fpuzzle1 = staticimages.create(leftmargin2+700, pagestart3+yhop*2, 'greentarget');
        fpuzzle1.anchor.setTo(0.5);
        fpuzzle1.scale.setTo(3);

        gpuzzle1 = staticimages.create(leftmargin2+400, pagestart3+yhop*5, 'greentarget');
        gpuzzle1.anchor.setTo(0.5);
        gpuzzle1.scale.setTo(3);

        loveline = staticimages.create(leftmargin1+10, 0, 'loveline');
        loveline.anchor.setTo(0);
        loveline.scale.setTo(1);

        loveline2 = staticimages.create(2410, 500, 'loveline');
        loveline2.anchor.setTo(0);
        loveline2.scale.setTo(0);

        mtn = staticimages.create(rightmargin2+10, pageend3+200, 'mtn');
        mtn.anchor.setTo(0);
        mtn.scale.setTo(1);

        casa = staticimages.create(0, 0, 'casa');
        casa.anchor.setTo(0.5);
        casa.scale.setTo(0);

        flag = staticimages.create(looperleftx - 8, pageend3, 'flag');
        flag.anchor.setTo(0.5);
        flag.scale.setTo(1);

        house = staticimages.create(housex, housey, 'house');
        house.anchor.setTo(0);
        house.scale.setTo(1);

    //    wallguard1 = staticimages.create(guard1x, guard1y, 'wallguard1');
    //    wallguard1.anchor.setTo(0.5);
    //    wallguard1.scale.setTo(3);

    //    wallguard2 = staticimages.create(guard2x, pageend1-40, 'wallguard2');
    //    wallguard2.anchor.setTo(0.5);
    //    wallguard2.scale.setTo(3);

        yellowtarget = staticimages.create(40, 40, 'yellowtarget');
        yellowtarget.anchor.setTo(0.5);
        yellowtarget.scale.setTo(2);

        iconbud = staticimages.create(40, 40, 'yellowtarget');

        loopmachineleft = staticimages.create(looperleftx, pageend3-yhop, 'leftear');
        loopmachineleft.anchor.setTo(0.5);
        loopmachineleft.scale.setTo(1);

        loopmachineright = staticimages.create(looperrightx, pageend3-yhop, 'rightear');
        loopmachineright.anchor.setTo(0.5);
        loopmachineright.scale.setTo(1);

        loopmachineleft2 = staticimages.create(looperleftx2, pageend3+yhop, 'leftear');
        loopmachineleft2.anchor.setTo(0.5);
        loopmachineleft2.scale.setTo(1);

        loopmachineright2 = staticimages.create(looperrightx2, pageend3+yhop, 'rightear');
        loopmachineright2.anchor.setTo(0.5);
        loopmachineright2.scale.setTo(1);

        //gatemarkers
        gatemark1 = staticimages.create(rightmargin1-10, pageend1, 'gate');
        gatemark2 = staticimages.create(leftmargin2+10, pageend1, 'gate');
        gatemark3 = staticimages.create(1250-10, pageend1, 'gate');
        gatemark4 = staticimages.create(leftmargin2+10, pagestart2, 'gate');
        gatemark5 = staticimages.create(rightmargin2-10, pageend2, 'gate');
        gatemark6 = staticimages.create(leftmargin2+10, pagestart3, 'gate');
        gatemark7 = staticimages.create(leftmargin2+10, pageend3, 'gate2');
        gatemark8 = staticimages.create(rightmargin2-10, pageend3, 'gate');
        gatemark9 = staticimages.create(leftmargin3+10, pageend3, 'gate');
        gatemark10 = staticimages.create(rightmargin3-10, pageend3, 'gate');
        gatemark11 = staticimages.create(leftmargin4+10, pageend3, 'gate');
        gatemark12 = staticimages.create(rightmargin5-10, pagestart3, 'gate2');
        gatemark13 = staticimages.create(leftmargin5+10, pageend3, 'gate');
        gatemark14 = staticimages.create(leftmargin1+10, pageend3, 'gate3');
        gatemark15 = staticimages.create(rightmargin1-10, pageend3, 'gate');
        gatemark16 = staticimages.create(rightmargin4-10, pageend3, 'gate');
        gatemark1.anchor.setTo(0.5);
        gatemark2.anchor.setTo(0.5);
        gatemark3.anchor.setTo(0.5);
        gatemark4.anchor.setTo(0.5);
        gatemark5.anchor.setTo(0.5);
        gatemark6.anchor.setTo(0.5);
        gatemark7.anchor.setTo(0.5);
        gatemark8.anchor.setTo(0.5);
        gatemark9.anchor.setTo(0.5);
        gatemark10.anchor.setTo(0.5);
        gatemark11.anchor.setTo(0.5);
        gatemark12.anchor.setTo(0.5);
        gatemark13.anchor.setTo(0.5);
        gatemark14.anchor.setTo(0.5);
        gatemark15.anchor.setTo(0.5);
        gatemark16.anchor.setTo(0.5);
        gatemark1.scale.setTo(1);
        gatemark2.scale.setTo(1);
        gatemark3.scale.setTo(1);
        gatemark4.scale.setTo(1);
        gatemark5.scale.setTo(1);
        gatemark6.scale.setTo(1);
        gatemark7.scale.setTo(1);
        gatemark8.scale.setTo(1);
        gatemark9.scale.setTo(1);
        gatemark10.scale.setTo(1);
        gatemark11.scale.setTo(1);
        gatemark12.scale.setTo(1);
        gatemark13.scale.setTo(1);
        gatemark14.scale.setTo(1);
        gatemark15.scale.setTo(1);
        gatemark16.scale.setTo(1);


//all text
//guard1dialogue = game.add.text(guard1x, guard1y, 'going over the bridge? \n [Y] for yes \n [N] for no', style);
//guard2dialogue = game.add.text(guard2x, pageend1-100, 'wanna go upstairs? \n [Y] for yes \n [N] for no', style);


//ball starting positions
for(var i=0; i<ballnumber; i++){
  balls[i] = {};
  balls[i].banditPossession = false;
  balls[i].sound = game.add.audio('collect'+(i+1));
  balls[i].sprite = projectiles.create(60+i*10, pageend1, 'gameball'+(i+1));
  balls[i].sprite.anchor.setTo(0.5);
  balls[i].sprite.scale.setTo(ballscale);
  balls[i].sprite.vx = ballmeetsplayer/4;
  balls[i].sprite.vy = yhop/10;
  //tossed
  balls[i].tossedup = false;
  balls[i].tosseddown = false;
  balls[i].tossedx = 0;
  balls[i].tossedy = 0;
    //water
  balls[i].lake1 = false;
  balls[i].lake2 = false;
  balls[i].lake3 = false;
  balls[i].waves = 1;

  balls[i].seen = false;
  balls[i].held = false;
    //looper stuff
  balls[i].inlooper = false;
  balls[i].totheright = false;
  balls[i].inlooper2 = false;
  balls[i].totheright2 = false;
  //puzzle1
  balls[i].inboxa = false;
  balls[i].inboxb = false;
  balls[i].inboxc = false;
  //bandit ABILITIES
  balls[i].scan1on = false;
  balls[i].scan2on = false;
  balls[i].scan1off = true;
  balls[i].scan2off = true;
  //grid stuff
/*  balls[i].tonorth = false;
  balls[i].tonortheast = false;
  balls[i].toeast = false;
  balls[i].tosoutheast = false;
  balls[i].tosouth = false;
  balls[i].tosouthwest = false;
  balls[i].towest = false;
  balls[i].tonorthwest = false; */
  balls[i].questionmarker = staticimages.create(looperleftx+300, pageend3-yhop*4, 'questionmark');
  balls[i].questionmarker.anchor.setTo(0.5);
  balls[i].questionmarker.scale.setTo(0);
}


//trees
      for(var i=0; i<treenumber1; i++){
        trees1[i] = {};
        trees1[i].sprite = staticimages.create(2000+rightmargin1*(i/2), pageend1, 'trees')
        trees1[i].sprite.anchor.setTo(0.5);
        trees1[i].sprite.scale.setTo(1);
      }
      for(var i=0; i<treenumber2; i++){
        trees2[i] = {};
        trees2[i].sprite = staticimages.create(2000+rightmargin1*(i/3), pageend1, 'trees')
        trees2[i].sprite.anchor.setTo(0.5);
        trees2[i].sprite.scale.setTo(1);
      }
      for(var i=0; i<treenumber3; i++){
        trees3[i] = {};
        trees3[i].sprite = staticimages.create(2000+rightmargin1*(i/7), pageend1, 'trees')
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

      for(var i = 0; i < pagenumber; i++){
        negxpages[i] = {};
        negxpages[i].pageturn = false;
        negxpages[i].leftmargins = -800*i;
        negxpages[i].rightmargins = -800 * (i+1);
      }

      for(var i = 0; i < pagenumber; i++){
        negypages[i] = {};
        negypages[i].pageturn = false;
        negypages[i].topmargins = -600*i;
        negypages[i].bottommargins = -600 * (i+1);
      }

//rain or snow
      for(var i = 0; i < raindrops; i++){
        rain[i] = {};
        rain[i].sprite = staticimages.create((10+rightmargin1+i*28), Math.random() * (700-(pagestart3-200)) + (pagestart3-200), 'snowflake')
        rain[i].sprite.anchor.setTo(0.5);
        rain[i].sprite.scale.setTo(0);
        rain[i].atbottom = false;
      }

//looper arrows
/*
      for(var i = 0; i < arrownumbercolumns; i++){
        arrows1[i] = {};
        for (var j = 0; j < arrownumberrows; j++){
          arrows1[i][j] = {};
          arrows1[i][j].sprite = staticimages.create(880+rightmargin1+yhop*(i+1), pageend1 - (j+1)*yhop, 'arrow');
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
      */

//animals
hippo = players.create(rightmargin5-300, pageend3, 'hippo');
hippo.onpage1 = false;
hippo.onpage2 = false;
hippo.onpage3 = false;
hippo.onpage4 = false;
hippo.onpage5 = false;
hippo.onpage6 = true;
hippo.onpage7 = false;
hippo.onpage8 = false;
hippo.onpage9 = false;

//bandit parts
for(var i = 0; i < banditparts; i++){
  bandit[i] = {};
  bandit[i].sprite = players.create(240 - (i * 10), 300, 'bandit'+ i);
  bandit[i].sprite.anchor.setTo(0.5);
  bandit[i].sprite.scale.setTo(playerscale);
  bandit[i].pageportal1 = true;
  bandit[i].pageportal2 = true;
  bandit[i].leftside = false; //leftside of the first movable wall
  bandit[i].rightside = false; //leftside of the first movable wall
  bandit[i].onpage1 = true;
  bandit[i].onpage2 = false;
  bandit[i].onpage3 = false;
  bandit[i].onpage4 = false;
  bandit[i].onpage5 = false;
  bandit[i].onpage6 = false;
  bandit[i].onpage7 = false;
  bandit[i].onpage8 = false;
  bandit[i].onpage9 = false;
  bandit[i].onpage10 = false;
  bandit[i].onpage11 = false;
  bandit[i].onpage12 = false;
  bandit[i].onpage13 = false;
}

menu = staticimages.create(0, 0, 'menu');
menu.anchor.setTo(0.5);
menu.scale.setTo(0);

    }

    function update() {
                playerMove();
                playerToss();
                playerPowers();
                ballMove();
                moveCamera();
          //      npcTalk();
            //    animals();
                iconUpdate();
                creatures();
                puzzleCompletion();


            //    pauseMenu();

}

    function render() {
                //player movement monitor
              //  if(loader){
        //    game.debug.spriteInfo(loader, 450, 400);}
        //    game.debug.spriteInfo(bandit[0].sprite, 450, 32);
}

var puzzlehitbox = 44;
var puzzle1timer = 0;
var puzzle1blink = false;
var gate1sounda = false;
var gate1soundb = true;
var access1sound = false;

function puzzleCompletion(){
  if (boxfull_a.length > 0
      && boxfull_a.length > 0
      && boxfull_b.length > 0
      && boxfull_c.length > 0
      && boxfull_d.length > 0
      && boxfull_e.length > 0
      && boxfull_f.length > 0
      && boxfull_g.length > 0){
        gate1down = true;
        if (access1sound == false){
      //  oob2.play();
        access1sound = true;
        ground4.tint = 0x9933ff;
      }
      }
  else {
    gate1down = false;
    access1sound = false;
    ground4.tint = 0xffffff;
    }

  if (gate1down == true){
    if (gate1sounda == false){
    gatemark7.kill();
    gatemark7 = staticimages.create(leftmargin2+10, pageend3, 'gate');
    gatemark7.scale.setTo(1);
    yessound.play();
    gate1sounda = true;
    }
    else{gate1soundb = false;}
    }
  else {
    if (gate1soundb == false){
    gatemark7.kill();
    gatemark7 = staticimages.create(leftmargin2+10, pageend3, 'gate2');
    gatemark7.scale.setTo(1);
    nosound.play();
    gate1soundb = true;
    }
    else{gate1sounda = false;}
  }
}

function puzzle1(ball){

  var obj = ball.sprite


}

var hippofollow = false;
var hippospeed = 4;
var ghostmode = false;


function animals(){
  //hippo

    if (hippofollow == false){
      if (bandit[0].sprite.x > hippo.x - 100 && bandit[0].sprite.y == hippo.y){
        goatsound.play();
        hippofollow = true;
  }}

    if (hippofollow == true){

      if (hippo.x < bandit[0].sprite.x - 60 || hippo.y < bandit[0].sprite.y){
        hippo.x+=hippospeed;
      }
      else if (hippo.x > bandit[0].sprite.x + 60 || hippo.y > bandit[0].sprite.y){
        hippo.x-=hippospeed;
      }
      else{goatsound.play();}
      marginer(hippo);
    }
    else{}


}


var loadtime = 40
var loader;

function loadingBar(time, xspot, yspot) {
  var t = time
  var x_ = xspot
  var y_ = yspot

  if(loader){loader.kill();}
  if (t > 1 && t < loadtime){
  loader = staticimages.create(xspot, yspot, 'casa');
  loader.anchor.setTo(0.5);
  loader.scale.setTo(1);
  loader.tint = Math.random() * 0xffffff;
}
}

var guard1dialogue
var guard2dialogue
var timer2 = 0;
var gate1down = false;
var scan1Moving = false;
var scan2Moving = false;

function playerPowers() {
  banditScan();
  ghostBandit();
}

function ghostBandit(){
  if (game.input.keyboard.justPressed(Phaser.Keyboard.Z)) {
    if (ghostmode == false){
      for (var j = 0; j<bandit.length; j++){
      bandit[j].sprite.tint = 0x9933ff;
    }
    ghostmode = true;
    }
    else {
      console.log('hello')
      for (var j = 0; j<bandit.length; j++){
      bandit[j].sprite.tint = 0xffffff;
    }
    ghostmode = false;
  }
  }
}

function banditScan() {

//scan init
  if (scan1init == true){
    scan1 = staticimages.create(game.camera.x, game.camera.y, 'scan1');
    scan1.anchor.setTo(0);
    scan1.scale.setTo(1);
    scan1Moving = true;
    scan1init = false;
  }

//scan move
if (scan1Moving == true){
  if (scan1.x < game.camera.x + 800){
    scan1.x+=10;
  }
  else {
  scan1Moving=false;
  scan1init=false;
   if (scan1) {
   scan1.kill();
    }
  }
}
else{}


//scan2 init
  if (scan2init == true){
    scan2 = staticimages.create(game.camera.x, game.camera.y, 'scan2');
    scan2.anchor.setTo(0);
    scan2.scale.setTo(1);
    scan2Moving = true;
    scan2init = false;
  }

//scan2 move
if (scan2Moving == true){
  if (scan2.y < game.camera.y + 600){
    scan2.y+=7.4;
  }
  else {
   if (scan2) {
   scan2.kill();}
   scan2Moving=false;
   scan2init=false;
  }
}
else{}
}

function ballScan(balls){
var ball = balls.sprite;
var xscanoff = balls.scan1off;
var ding = balls.sound;

//scan1
if (scan1init == true){
  xscanoff = true;
}

if (xscanoff == true){
    if (scan1){
      //if ball is on the page
      if (ball.x > game.camera.x && ball.x < game.camera.x + 800
        && ball.y > game.camera.y && ball.y < game.camera.y + 600){
      if (ball.x < scan1.x+10){
        ding.play();
        scan1.tint = Math.random() * 0xffffff;
        xscanoff = false;
      }
    }
    else{}
  }
}

return xscanoff
}


function ballScan2(balls){
var ball = balls.sprite;
var yscanoff = balls.scan2off;
var ding = balls.sound;

//scan2
if (scan2init == true){
  yscanoff = true;
}

if (yscanoff == true){
    if (scan2){
      //if ball is on the page
      if (ball.x > game.camera.x
        && ball.x < game.camera.x + 800
        && ball.y > game.camera.y
        && ball.y < game.camera.y + 600){
      if (ball.y < scan2.y+15){
        ding.play();
        scan2.tint = Math.random() * 0xffffff;
        yscanoff = false;
      }
    }
    else{}
  }
}

return yscanoff;
}

function npcTalk() {
//includes loading bar

  //wallguards
  if (bandit[0].sprite.x < guard1x+100
    && bandit[0].sprite.x > guard1x-30
    && bandit[0].sprite.y == pageend3){
  timer++;
  //console.log('growrl');
//  loadingBar(timer, guard1x-10, guard1y);

    if (timer > 40){
      guard1dialogue.scale.setTo(1);
      if (game.input.keyboard.justPressed(Phaser.Keyboard.Y))  {
        guard1dialogue.scale.setTo(0);
        gatemark7.kill();
        gatemark7 = staticimages.create(leftmargin2+10, pageend3, 'gate');
        gatemark7.scale.setTo(1);
        yessound.play();
        gate1down = true;
        }
      if (game.input.keyboard.justPressed(Phaser.Keyboard.N))  {
        guard1dialogue.scale.setTo(0);
        gatemark7.kill();
        gatemark7 = staticimages.create(leftmargin2+10, pageend3, 'gate2');
        gatemark7.scale.setTo(1);
        nosound.play();
        gate1down = false;
      }
}
}
  else {
    loadingBar(timer, guard1x-10, guard1y);
    guard1dialogue.scale.setTo(0);
    timer = 0;
  }


  if (bandit[0].sprite.x < guard2x+60
    && bandit[0].sprite.x > guard2x-60
    && bandit[0].sprite.y == pageend1){
  timer2++;
  //console.log('prawrl');
  loadingBar(timer2, guard2x-10, pageend1-70);
  if (timer2 > 40){
    guard2dialogue.scale.setTo(1);
    if (game.input.keyboard.justPressed(Phaser.Keyboard.Y))  {
      guard2dialogue.scale.setTo(0);
      loveline2.scale.setTo(1);
      yessound.play();
      for (var i = 0; i < bandit.length; i++){
        bandit[i].rightside = true;
      }
      }
    if (game.input.keyboard.justPressed(Phaser.Keyboard.N))  {
      nosound.play();
      guard2dialogue.scale.setTo(0);
      loveline2.scale.setTo(0);
    for (var i = 0; i < bandit.length; i++){
      bandit[i].rightside = false;
    }
    }
}
}
else {
  loadingBar(timer2, guard2x-10, pageend1-70);
  guard2dialogue.scale.setTo(0);
  timer2 = 0;
}


}





function crazyTrees(tree){
  var obj = tree.sprite;
  obj.tint = Math.random() * 0xffffff;
}

var may;
var mtnplaysong = true;

function creatures(){
      //crazyTrees
      /*
      for(var i=0; i<treenumber3; i++){
            crazyTrees(trees1[i]);
            crazyTrees(trees3[i]);
          }
          */
            if (mtn.y < pageend2-100){
              mtnrising = false;

            }
            if (mtnrising == false){
              rainFall();
              if (mtnplaysong == true){
              mtnwaking.play();
              mtnplaysong = false;
              }
            }
          }

var mtnbell;
var mtn;
var mtnrising = true;

var scan1init = false;
var scan2init = false;
//lopper variables
var mtnbell = 0;
var looperleftx = 1620;
var looperlefty = pageend3 - yhop;
var looperrightx = 2380;
var looperrighty = pageend3 - yhop;

var looperleftx2 = 1620;
var looperlefty2 = pageend3 + yhop;
var looperrightx2 = 2380;
var looperrighty2 = pageend3 + yhop;
var looperspeed = 19;


function looper(ball) {
  var obj = ball.sprite;
  var direction = ball.totheright;
  var qmark = ball.questionmarker.scale;
  var sound = ball.sound;
  var inside = ball.inlooper;
  var poss = ball.banditPossession

  if (poss == false){
  if (obj.y > looperlefty - 50
    && obj.y < looperlefty + 50
    && obj.x > looperleftx-60
    && obj.x < looperrightx+60){
      if (direction == true) {
        obj.x += looperspeed;//obj.vx;
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
        obj.x -= looperspeed;//obj.vx;
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
    }
        return direction;
      }


  function looper2(ball) {
    var obj = ball.sprite;
    var direction = ball.totheright2;
    var qmark = ball.questionmarker.scale;
    var sound = ball.sound;
    var inside =ball.inlooper2;
    var poss = ball.banditPossession

  if (poss == false){
    if (obj.y > looperlefty2 - 50
      && obj.y < looperlefty2 + 50
      && obj.x > looperleftx2-60
      && obj.x < looperrightx2+60){
        if (direction == true) {
          obj.x += looperspeed;//obj.vx;
          if (obj.x > looperrightx2) {
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
          obj.x -= looperspeed; //obj.vx;
          if (obj.x < looperleftx2) {
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
      }
          return direction;
        }

function loopReset(ball) {
  var obj = ball.sprite;
  var inside = ball.inlooper;
  if (bandit[0].sprite.x > looperleftx && bandit[0].sprite.x < looperleftx + 200){
    if (game.input.keyboard.isDown(Phaser.Keyboard.R)) {
           obj.y = pageend3;
           inside = false;
         }
}
return inside;
}

function loopReset2(ball) {
  var obj = ball.sprite;
  var inside = ball.inlooper;
  if (bandit[0].sprite.x > looperleftx && bandit[0].sprite.x < looperleftx + 200){
    if (game.input.keyboard.isDown(Phaser.Keyboard.R)) {
           obj.y = pageend3;
           inside = false;
}
}
return inside;
}


var looper2hitbox = 15;


/*
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


return obj_n, obj_ne, obj_e, obj_se, obj_s, obj_sw, obj_w, obj_nw;
}

*/




var rainspeed = 12;

function rainer(rain){
  var rsprite = rain.sprite;
  rsprite.scale.setTo(0.4);

  if (rsprite.y < pagestart4){
    rsprite.y+=rainspeed;

  }
  else {
    rsprite.y = pageend2+30;
    rsprite.scale.setTo(0.4);
  }
}

function rainFall(){
//  for (var i=0; i<raindrops;i++){
//    rainer(rain[i]);
//  }

  casa.scale.setTo(2);

  casa.x = bandit[0].sprite.x;
  casa.y = bandit[0].sprite.y -20;

}


function gofull() {
    if (game.scale.isFullScreen)
    { game.scale.stopFullScreen();}
    else  { game.scale.startFullScreen(false); }
  }


  function camMoverXneg(page) {
    var turned = page.pageturn;
    var rmargin = page.rightmargins;
    var lmargin = page.leftmargins;

    if (bandit[0].sprite.x > lmargin){
      turned = true; }
    else {
      turned = false;}

    if (turned == true){
        if (game.camera.x < lmargin) {
          game.camera.x += cameraspeed;
        }}
        else {
        if  (game.camera.x > rmargin) {
            game.camera.x -= cameraspeed;
          }}
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
      if (game.camera.x < rmargin) {
        game.camera.x += cameraspeed;
      }}
      else {
      if  (game.camera.x > lmargin) {
          game.camera.x -= cameraspeed;
        }}

  return turned;
}

function camMoverYneg(page) {
  var turned = page.pageturn;
  var topmargin = page.topmargins;
  var bottommargin = page.bottommargins;

  if (bandit[0].sprite.y > topmargin){
    turned = true; }
  else {
    turned = false;}

  if (turned == true){
      if (game.camera.y < topmargin) {
        game.camera.y += cameraspeed;
      }}
      else {
      if  (game.camera.y > bottommargin) {
          game.camera.y -= cameraspeed;
        }}
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
      if (game.camera.y < bottommargin) {
        game.camera.y += cameraspeed;
      }}
      else {
      if  (game.camera.y > topmargin) {
          game.camera.y -= cameraspeed;
        }}

  return turned;
}


function moveCamera() {
//follow bandit
  for(var i = 0; i < pagenumber; i++){
    xpages[i].pageturn = camMoverX(xpages[i]);
    ypages[i].pageturn = camMoverY(ypages[i]);
    negxpages[i].pageturn = camMoverXneg(negxpages[i]);
    negypages[i].pageturn = camMoverYneg(negypages[i]);
  }

//icons
  yellowtarget.x = game.camera.x + 40;
  yellowtarget.y = game.camera.y + 40;
  menu.x = game.camera.x + 400; //center x (800x600)
  menu.y = game.camera.y + 300; //center y (800x600)

  iconbud.x = yellowtarget.x;
  iconbud.y = yellowtarget.y;

  }



function iconUpdate(){
  if(grabbed.length>0){
    if(iconbud){
      iconbud.kill()
    }
    iconbud = projectiles.create(40, 40, 'gameball'+(grabbed[0]+1))
    iconbud.anchor.setTo(0.5);
    iconbud.scale.setTo(1);
    iconbud.x = yellowtarget.x;
    iconbud.y = yellowtarget.y;
    text.kill();
    text = game.add.text(iconbud.x, iconbud.y+30, grabbed.length, style);
    text.anchor.set(0.5);

  } else {
    if(iconbud){
      iconbud.kill()
    }
    text.kill();
  }
}

function pager(obj) {
  var ob = obj.sprite
  var pagevar = obj.pageportal1;
  var page1 = obj.onpage1

if (page1 == true){
  if (pagevar == true){
            if (ob.y >= pageend1 && ob.x > 400-4)
            {
            pagevar = !pagevar;
            ob.x = 400 + 4;
            ob.y = pagestart1;
            }}
            else     {
            if (ob.y <= pagestart1 && ob.x < 400+4)
            {
            pagevar = !pagevar;
            ob.x = 400 - 4;
            ob.y = pageend1;
          }}}
  return pagevar;
}


function b_pagePortal() {
  for (var i=0;i<bandit.length;i++){
  bandit[i].pageportal1 = pager(bandit[i]);
  }
}

var menusize = 1;


    //player movement
     function playerMove() {
       if (godmode == true){

         if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                   for (var j = 0; j < banditmovespeed; j++){
                  for (var i = 0; i < bandit.length; i++){
                   bandit[i].sprite.x --;}
                 }}
         if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                  for (var j = 0; j < banditmovespeed; j++){
                  for (var i = 0; i < bandit.length; i++){
                   bandit[i].sprite.x ++;}}
                            }
      if (game.input.keyboard.isDown(Phaser.Keyboard.UP))  {
                              for (var j = 0; j < banditmovespeed; j++){
                                for (var i = 0; i < bandit.length; i++){
                               bandit[i].sprite.y --;}  }
                             }
      if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))  {
                              for (var j = 0; j < banditmovespeed; j++){
                                  for (var i = 0; i < bandit.length; i++){
                               bandit[i].sprite.y ++;}}
                             }
       if (game.input.keyboard.justPressed(Phaser.Keyboard.I))  {
        menu.scale.setTo(menusize);
        menusize = 1 - menusize;
                      }


                           }

       else if (cutscene == true){

       }

//map location booleans
       else {

         for (var i = 0; i < bandit.length; i++){ //THIS IS THE MAIN FOR LOOP FOR PLAYER MOVE

          //at home
          if (bandit[0].sprite.y == housey+yhop
            && bandit[0].sprite.x < housex+180
            && bandit[0].sprite.x > housex-10){
              if (game.input.keyboard.justPressed(Phaser.Keyboard.ENTER))  {
              console.log('tadaima!')
              jamSpace();
            }
            }

           //boundary

           if (bandit[i].sprite.x > rightmargin5-30 && bandit[i].sprite.y == pageend3){
          //   cutscene = true;
               bandit[i].sprite.x -= 100
        //     cutscene = false;
           }

           //boundary
           if (bandit[i].sprite.x < leftmargin1+30 && bandit[i].sprite.y == pagestart1){
          //   cutscene = true;
               bandit[i].sprite.x += 100
          //   cutscene = false;
           }

//on page 1
           if (bandit[i].sprite.x < rightmargin1
             && bandit[i].sprite.x > leftmargin1
             && bandit[i].sprite.y <= pageend1
             && bandit[i].sprite.y >= pagestart1){
               bandit[i].onpage2 = false;
               bandit[i].onpage1 = true;
              console.log('1')
           }
//on page 2
           if (bandit[i].sprite.x < rightmargin2
             && bandit[i].sprite.x > leftmargin2
             && bandit[i].sprite.y <= pageend1
             && bandit[i].sprite.y >= pagestart1){
               bandit[i].onpage1 = false;
               bandit[i].onpage3 = false;
               bandit[i].onpage2 = true;
               console.log('2')
           }
//on page 3
            if (bandit[i].sprite.x < rightmargin2
              && bandit[i].sprite.x > leftmargin2
              && bandit[i].sprite.y <= pageend2
              && bandit[i].sprite.y >= pagestart2){
                bandit[i].onpage2 = false;
                bandit[i].onpage4 = false;
                bandit[i].onpage3 = true;
                console.log('3')
            }
//on page 4
            if (bandit[i].sprite.x < rightmargin2
              && bandit[i].sprite.x > leftmargin2
              && bandit[i].sprite.y <= pageend3
              && bandit[i].sprite.y >= pagestart3){
                bandit[i].onpage3 = false;
                bandit[i].onpage5 = false;
                bandit[i].onpage7 = false;
                bandit[i].onpage4 = true;
                console.log('4')
            }
//on page 5
            if (bandit[i].sprite.x < rightmargin3
              && bandit[i].sprite.x > leftmargin3
              && bandit[i].sprite.y <= pageend3
              && bandit[i].sprite.y >= pagestart3){
                bandit[i].onpage4 = false;
                bandit[i].onpage6 = false;
                bandit[i].onpage5 = true;
                console.log('5')
            }
//on page 6
            if (bandit[i].sprite.x < rightmargin4
              && bandit[i].sprite.x > leftmargin4
              && bandit[i].sprite.y <= pageend3
              && bandit[i].sprite.y >= pagestart3){
                bandit[i].onpage5 = false;
                bandit[i].onpage6 = true;
                console.log('6')
            }
//on page 7
          if (bandit[i].sprite.x < rightmargin1
            && bandit[i].sprite.x > leftmargin1
            && bandit[i].sprite.y <= pageend3
            && bandit[i].sprite.y >= pagestart3){
              bandit[i].onpage4 = false;
              bandit[i].onpage8 = false;
              bandit[i].onpage7 = true;
              console.log('7')
          }
//on page 8
//REVERSED MARGINS (NEGATIVE NUMBERS)
          if (bandit[i].sprite.x > rightmargin1 * -1
            && bandit[i].sprite.x < leftmargin1 * -1
            && bandit[i].sprite.y <= pageend3
            && bandit[i].sprite.y >= pagestart3){
              bandit[i].onpage7 = false;
              bandit[i].onpage9 = false;
              bandit[i].onpage8 = true;
              console.log('8')
          }
//on page 9
          if (bandit[i].sprite.x > rightmargin1 * -1
            && bandit[i].sprite.x < leftmargin1 * -1
            && bandit[i].sprite.y <= pageend4
            && bandit[i].sprite.y >= pagestart4){
              bandit[i].onpage10 = false;
              bandit[i].onpage8 = false;
              bandit[i].onpage9 = true;
              console.log('9')
          }
         }



//bandit left and right
       if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
         if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
           for (var j = 0; j < banditwalkspeed; j++){
          for (var i = 0; i < bandit.length; i++){
           bandit[i].sprite.x --;
           b_marginRules();
           b_pagePortal();
           b_marginRules2();  }
        }
         }
         else{
                 for (var j = 0; j < banditmovespeed; j++){
                for (var i = 0; i < bandit.length; i++){
                 bandit[i].sprite.x --;
                 b_marginRules();
                 b_pagePortal();
                 b_marginRules2();  }
              } }
                          }
       if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
         if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
           for (var j = 0; j < banditwalkspeed; j++){
          for (var i = 0; i < bandit.length; i++){
           bandit[i].sprite.x ++;
           b_marginRules();
           b_pagePortal();
           b_marginRules2();  }
        }
         }
         else{
                for (var j = 0; j < banditmovespeed; j++){
                for (var i = 0; i < bandit.length; i++){
                 bandit[i].sprite.x ++;
                 b_marginRules();
                 b_pagePortal();
                 b_marginRules2();  }  }
                          }
                        }
                          /*
    if (game.input.keyboard.justPressed(Phaser.Keyboard.ENTER))  {

                            for (var j = 0; j < thrust; j++){
                              for (var i = 0; i < bandit.length; i++){
                             bandit[i].sprite.x --;
                             b_marginRules();
                             b_pagePortal();
                             b_marginRules2();  }  }
                           }*/
                           /*
    if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR))  {
                            for (var j = 0; j < thrust; j++){
                                for (var i = 0; i < bandit.length; i++){
                             bandit[i].sprite.x ++;
                             b_marginRules();
                             b_pagePortal();
                             b_marginRules2();}}
                           }
                           */

     if (game.input.keyboard.justPressed(Phaser.Keyboard.I))  {
      menu.scale.setTo(menusize);
      menusize = 1 - menusize;
                    }

    if (game.input.keyboard.justPressed(Phaser.Keyboard.S))  {
      if (scan1) {
        scan1.kill();}
      for (var i = 0;i< balls.length;i++){
      balls[i].scan1off = true;
    }
      scan1init = true;
      }

     if (game.input.keyboard.justPressed(Phaser.Keyboard.D))  {
       if (scan2) {
         scan2.kill();}

      for (var i = 0;i< balls.length;i++){
      balls[i].scan2off = true;
    }
       scan2init = true;
       }
                    }

                         }




function marginer(obj) {
  var ob = obj.sprite
  var page1 = obj.onpage1
  var page2 = obj.onpage2
  var page3 = obj.onpage3
  var page4 = obj.onpage4
  var page5 = obj.onpage5
  var page6 = obj.onpage6
  var page7 = obj.onpage7
  var page8 = obj.onpage8
  var page9 = obj.onpage9
  var page10 = obj.onpage10
  var page11 = obj.onpage11
  var page12 = obj.onpage12
  var pagevar = obj.pageportal1;

if (page1 == true){
  //pagevar because the page has a split in the middle
          if (pagevar == true) {
                     if (ob.x < leftmargin1) {
                       ob.y = ob.y - yhop;
                       ob.x = 400;
                     }
                     if (ob.x > 400) {
                       ob.y = ob.y + yhop;
                       ob.x = leftmargin1;                     }}
           else {            //if at the bottom, keep going forward
               if (ob.y == pageend1 && ob.x > 450){
                     }      //if not at the bottom, stay on this page
                     else {
                       if (ob.x < 400) {
                         ob.y = ob.y - yhop;
                         ob.x = rightmargin1;
                       }
                       if (ob.x > rightmargin1) {
                         ob.y = ob.y + yhop;
                         ob.x = 400;
                       }}}}

 else if (page2 == true){
              if (ob.y == pageend1 && ob.x > 1250){
                      ob.x = leftmargin2;
                      ob.y = pagestart2;
                      }
              if (ob.y == pagestart2 && ob.x < leftmargin2){
                        ob.y = pageend1;
                        ob.x = 1250;
                        }
                    }

else if (page3 == true){
  //pagevar because the page has a split in the middle
              if (ob.y == pageend1 && ob.x > 1250){
                      ob.x = leftmargin2;
                      ob.y = pagestart2;
                      }
              if (ob.y == pagestart2 && ob.x < leftmargin2){
                        ob.y = pageend1;
                        ob.x = 1250;
                        }

                        //above prevents splitting

              if (ob.y < 1070) {
                     if (ob.x > leftmargin2 + 450){
                       ob.y = ob.y + yhop;
                       ob.x = leftmargin2;
                     }
                     if (ob.x < leftmargin2) {
                       ob.y = ob.y - yhop;
                       ob.x = leftmargin2 + 450; }}

              if (ob.y == pageend2){
                    if (ob.x > rightmargin2){
                      ob.y = pagestart3;
                      ob.x = leftmargin2;
                    }
                    if (ob.x < leftmargin2) {
                      ob.y = ob.y - yhop;
                      ob.x = leftmargin2 + 450;
                              }}
              if (ob.y == pageend2 && ob.x > rightmargin2){
                ob.y = pagestart3;
                ob.x = leftmargin2;
              }
            }


  else if (page4 == true){

    if (ob.y == pagestart3 && ob.x < leftmargin2){
      ob.x = rightmargin2;
      ob.y = pageend2;

    }
    if (ob.y == pageend2 && ob.x > rightmargin2){
      ob.y = pagestart3;
      ob.x = leftmargin2;
    }
    if (ob.y == pageend3 && ob.x > rightmargin2) {
      //go straight
    }
    else{
    if (ob.x > rightmargin2){
      ob.y = ob.y + yhop;
      ob.x = leftmargin2;
    }
    else if (ob.x < leftmargin2) {
      if (gate1down == true){
        if (ob.y < pageend3 && ob.x < leftmargin2){
          ob.y = ob.y - yhop;
          ob.x = rightmargin2; }
        else if (ob.y == pageend3 && ob.x < leftmargin2) {
          //go straight
        }
      }
      else{
        ob.y = ob.y - yhop;
        ob.x = rightmargin2;
      }

      }
    }
  }

  else if (page5 == true){
  }
  else if (page6 == true){
  }
  else if (page7 == true){

  }
  else if (page8 == true){

  }
  else if (page9 == true){

  }
  else if (page10 == true){

  }
  else if (page11 == true){

  }


return pagevar;
}

 function b_marginRules() {
   for (var i = 0; i<bandit.length;i++){
     bandit[i].pageportal1 = marginer(bandit[i]);

 }
 }


 //fixme
 function marginer2(obj){
   var ob = obj.sprite
   var page1 = obj.onpage1
   var lefter = obj.leftside
   var righter = obj.rightside
   var pagevar = obj.pageportal2;
   var leftm = 2400;
   var rightm = 2800;

if (lefter == true){
         if (pagevar == true) {
                      if (ob.y > pageend1 && ob.x < leftm) {
                        ob.y = ob.y - yhop;
                        ob.x = rightm;
                      }
                      if (ob.x > rightm) {
                        ob.y = ob.y + yhop;
                        ob.x = leftm;   }}
}

if (righter == true){
          if (pagevar == true) {
             if (ob.y == pageend1 && ob.x < rightm) {
               ob.y = ob.y - yhop;
               ob.x = rightm + 400;
             }
             if (ob.y == pageend1 - yhop && ob.x > rightm + 400) {
               ob.y = ob.y + yhop;
               ob.x = rightm;
             }
             if (ob.y < pageend1 && ob.x < leftm) {
               ob.y = ob.y - yhop;
               ob.x = rightm + 400;   }
             if (ob.y < pageend1 && ob.x > rightm + 400) {
               ob.y = ob.y + yhop;
               ob.x = leftm;   }}
 }


//far side
 if (ob.x > 5600 - 10 && ob.y >= pageend1){
   ob.x = 4800 + 10
   ob.y = ob.y + yhop;
 }
 if (ob.x > 4800){
   if (ob.x < 4800 + 10 && ob.y > pageend1){
   ob.x = 5600 - 10
   ob.y = ob.y - yhop;
 }
 }


 return pagevar;
 }


 function b_marginRules2(){
   for (var i=0;i<bandit.length;i++){
   bandit[i].pageportal2 = marginer2(bandit[i]);
   }
 }


function jamSpace(){


}


function lake1area(ball){
  var obj = ball.sprite;
  var lake1 = ball.lake1;
  var wave = ball.waves;
//lake 1
if (obj.x < rightmargin2
  && obj.x > leftmargin2-20
  && obj.y < pageend1-20
  && obj.y > pagestart1
  || obj.x < rightmargin2
    && obj.x > 1263
    && obj.y < pageend2-10
  || obj.x < rightmargin1
    && obj.x > leftmargin1
    && obj.y < pageend1-20
    && obj.y < pagestart1){
  lake1 = true;
  }

  if (lake1 == true){

    if(obj.x < rightmargin2 - 50 - (Math.random() * 360)){
      obj.x += Math.random() * 6;
    }
    else if(obj.y < pageend2-10){
      obj.y += Math.random() * 6;
    }
    else {
      lake1 = false;
    }
  }
  return lake1
}



function lake2area(ball){
  var obj = ball.sprite;
  var lake2 = ball.lake2;
  var wave = ball.waves;
  //lake 2
  if (obj.x < rightmargin2+20
    && obj.x > leftmargin2-20
    && obj.y > pageend3){
    lake2 = true;
    }

    if (lake2 == true){
      if(obj.y > pageend3){
        obj.y -= obj.vy*wave;
      }
      else {
        lake2 = false;
      }
    }

    return lake2;
  }


  function lake3area(ball){
    var obj = ball.sprite;
    var lake3 = ball.lake2;
    var wave = ball.waves;
    //lake 2
    if (obj.x < rightmargin1+20
      && obj.x > leftmargin1-20
      && obj.y > pageend1){
      lake3 = true;
      }

      if (lake3 == true){
        if(obj.y > pageend1){
          obj.y -= 2*wave;
        }
        else {
          lake3 = false;
        }
      }

      return lake3;
    }

function puzzleboxes(){
  if (boxfull_a.length > 0){
    apuzzle1.tint = 0x9933ff;
  }
  else{
    apuzzle1.tint = 0xffffff;
  }
  if (boxfull_b.length > 0){
      bpuzzle1.tint = 0x9933ff;
  }
  else{
      bpuzzle1.tint = 0xffffff;
  }
  if (boxfull_c.length > 0){
        cpuzzle1.tint = 0x9933ff;
  }
  else{
        cpuzzle1.tint = 0xffffff;
  }

  if (boxfull_d.length > 0){
    dpuzzle1.tint = 0x9933ff;
  }
  else{
    dpuzzle1.tint = 0xffffff;
  }
  if (boxfull_e.length > 0){
      epuzzle1.tint = 0x9933ff;
  }
  else{
      epuzzle1.tint = 0xffffff;
  }
  if (boxfull_f.length > 0){
        fpuzzle1.tint = 0x9933ff;
  }
  else{
        fpuzzle1.tint = 0xffffff;
  }
  if (boxfull_g.length > 0){
        gpuzzle1.tint = 0x9933ff;
  }
  else{
        gpuzzle1.tint = 0xffffff;
  }
}

var toss_speed = 19 //19 shows motion
var boxfull_a = [];
var boxfull_b = [];
var boxfull_c = [];
var boxfull_d = [];
var boxfull_e = [];
var boxfull_f = [];
var boxfull_g = [];
//ball movement
function ballMove() {

  if (bandit[0].onpage4 == true){
      puzzleboxes();
    }

  for(var i=0; i<balls.length; i++){


  if(balls[i].banditPossession==false){

    //puzzle1
    if (balls[i].sprite.x > apuzzle1.x-puzzlehitbox
      && balls[i].sprite.x < apuzzle1.x+puzzlehitbox
      && balls[i].sprite.y > apuzzle1.y-puzzlehitbox
      && balls[i].sprite.y < apuzzle1.y+puzzlehitbox
      )
      {
        boxfull_a.push(i);
      }
      else {
        boxfull_a.splice(i);
      }

      if (balls[i].sprite.x > bpuzzle1.x-puzzlehitbox
        && balls[i].sprite.x < bpuzzle1.x+puzzlehitbox
        && balls[i].sprite.y > bpuzzle1.y-puzzlehitbox
        && balls[i].sprite.y < bpuzzle1.y+puzzlehitbox
        )
        {
          boxfull_b.push(i);
        }
        else {
          boxfull_b.splice(i);
        }

        if (balls[i].sprite.x > cpuzzle1.x-puzzlehitbox
          && balls[i].sprite.x < cpuzzle1.x+puzzlehitbox
          && balls[i].sprite.y > cpuzzle1.y-puzzlehitbox
          && balls[i].sprite.y < cpuzzle1.y+puzzlehitbox
          )
          {
            boxfull_c.push(i);
          }
          else {
            boxfull_c.splice(i);
          }

          if (balls[i].sprite.x > dpuzzle1.x-puzzlehitbox
            && balls[i].sprite.x < dpuzzle1.x+puzzlehitbox
            && balls[i].sprite.y > dpuzzle1.y-puzzlehitbox
            && balls[i].sprite.y < dpuzzle1.y+puzzlehitbox
            )
            {
              boxfull_d.push(i);
            }
            else {
              boxfull_d.splice(i);
            }

            if (balls[i].sprite.x > epuzzle1.x-puzzlehitbox
              && balls[i].sprite.x < epuzzle1.x+puzzlehitbox
              && balls[i].sprite.y > epuzzle1.y-puzzlehitbox
              && balls[i].sprite.y < epuzzle1.y+puzzlehitbox
              )
              {
                boxfull_e.push(i);
              }
              else {
                boxfull_e.splice(i);
              }

              if (balls[i].sprite.x > fpuzzle1.x-puzzlehitbox
                && balls[i].sprite.x < fpuzzle1.x+puzzlehitbox
                && balls[i].sprite.y > fpuzzle1.y-puzzlehitbox
                && balls[i].sprite.y < fpuzzle1.y+puzzlehitbox
                )
                {
                  boxfull_f.push(i);
                }
                else {
                  boxfull_f.splice(i);
                }

                if (balls[i].sprite.x > gpuzzle1.x-puzzlehitbox
                  && balls[i].sprite.x < gpuzzle1.x+puzzlehitbox
                  && balls[i].sprite.y > gpuzzle1.y-puzzlehitbox
                  && balls[i].sprite.y < gpuzzle1.y+puzzlehitbox
                  )
                  {
                    boxfull_g.push(i);
                  }
                  else {
                    boxfull_g.splice(i);
                  }

//magnet


  if (balls[i].tossedup == true){
    if(balls[i].sprite.y > balls[i].tossedy-yhop){
      balls[i].sprite.y-=toss_speed;
    }
      else{
        balls[i].tossedup = false;}
  }

  if (balls[i].tosseddown == true){
    if(balls[i].sprite.y < balls[i].tossedy+yhop){
      balls[i].sprite.y+=toss_speed;
    }
    else{balls[i].tosseddown = false;}
  }

  if (ghostmode == false) {
  //meets player
    if (balls[i].sprite.x > bandit[0].sprite.x-ballmeetsplayer
      && balls[i].sprite.y > bandit[0].sprite.y-ballmeetsplayer
      && balls[i].sprite.x < bandit[0].sprite.x+ballmeetsplayer
      && balls[i].sprite.y < bandit[0].sprite.y+ballmeetsplayer) {
  //pick up balls
        balls[i].sound.play();
        balls[i].banditPossession = true;
        grabbed.push(i);
  }
  }



    if (balls[i].lake1 == true){
      //this next bit breaks water movement
    }
    else if (balls[i].lake2 == true){
      //this next bit breaks water movement
    }
    else if (balls[i].lake3 == true){
      //this next bit breaks water movement
    }
    else{
      if (bandit[0].sprite.y == pageend1
        && balls[i].sprite.y < pagestart2
        && balls[i].sprite.y > pageend1){
        balls[i].sprite.y = pagestart2;
      }
      else if (bandit[0].sprite.y == pagestart2
        && balls[i].sprite.y < pagestart2
        && balls[i].sprite.y > pageend1){
        balls[i].sprite.y = pageend1;
      }
      if (bandit[0].sprite.y == pageend2
        && balls[i].sprite.y < pagestart3
        && balls[i].sprite.y > pageend2){
        balls[i].sprite.y = pagestart3;
      }
      else if (bandit[0].sprite.y == pagestart3
        && balls[i].sprite.y < pagestart3
        && balls[i].sprite.y > pageend2){
        balls[i].sprite.y = pageend2;
      }
    }

//water areas
      balls[i].lake1 = lake1area(balls[i]);
      balls[i].lake2 = lake2area(balls[i]);
      balls[i].lake3 = lake3area(balls[i]);
//scan1 and scan 2
      balls[i].scan1off = ballScan(balls[i]);
      balls[i].scan2off = ballScan2(balls[i]);
//machinelooper1
      balls[i].totheright = looper(balls[i]);
      balls[i].inlooper = loopReset(balls[i]);
      balls[i].totheright2 = looper2(balls[i]);
      balls[i].inlooper2 = loopReset2(balls[i]);

      //puzzle1
    //  puzzle1(balls[i]);

    //a
    if (balls[i].sprite.y == apuzzle1.y
      && balls[i].sprite.x > apuzzle1.x - puzzlehitbox
      && balls[i].sprite.x < apuzzle1.x + puzzlehitbox){
      if (balls[i].sprite.x > apuzzle1.x){
        balls[i].sprite.x--;
      }
      if (balls[i].sprite.x < apuzzle1.x){
        balls[i].sprite.x++;
      }
    }
    //b
    if (balls[i].sprite.y == bpuzzle1.y
      && balls[i].sprite.x > bpuzzle1.x - puzzlehitbox
      && balls[i].sprite.x < bpuzzle1.x + puzzlehitbox){
      if (balls[i].sprite.x > bpuzzle1.x){
        balls[i].sprite.x--;
      }
      if (balls[i].sprite.x < bpuzzle1.x){
        balls[i].sprite.x++;
      }
    }
    //c
    if (balls[i].sprite.y == cpuzzle1.y
      && balls[i].sprite.x > cpuzzle1.x - puzzlehitbox
      && balls[i].sprite.x < cpuzzle1.x + puzzlehitbox){
      if (balls[i].sprite.x > cpuzzle1.x){
        balls[i].sprite.x--;
      }
      if (balls[i].sprite.x < cpuzzle1.x){
        balls[i].sprite.x++;
      }
    }
  //d
    if (balls[i].sprite.y == dpuzzle1.y
      && balls[i].sprite.x > dpuzzle1.x - puzzlehitbox
      && balls[i].sprite.x < dpuzzle1.x + puzzlehitbox){
      if (balls[i].sprite.x > dpuzzle1.x){
        balls[i].sprite.x--;
      }
      if (balls[i].sprite.x < dpuzzle1.x){
        balls[i].sprite.x++;
      }
    }
    //e
    if (balls[i].sprite.y > epuzzle1.y-16
      && balls[i].sprite.y < epuzzle1.y+16 // extra
      && balls[i].sprite.x > epuzzle1.x - puzzlehitbox
      && balls[i].sprite.x < epuzzle1.x + puzzlehitbox){
      if (balls[i].sprite.x > epuzzle1.x){
        balls[i].sprite.x--;
      }
      if (balls[i].sprite.x < epuzzle1.x){
        balls[i].sprite.x++;
      }
    }
    //f
    if (balls[i].sprite.y == fpuzzle1.y
      && balls[i].sprite.x > fpuzzle1.x - puzzlehitbox
      && balls[i].sprite.x < fpuzzle1.x + puzzlehitbox){
      if (balls[i].sprite.x > fpuzzle1.x){
        balls[i].sprite.x--;
      }
      if (balls[i].sprite.x < fpuzzle1.x){
        balls[i].sprite.x++;
      }
    }
    if (balls[i].sprite.y > gpuzzle1.y-16
      && balls[i].sprite.y < gpuzzle1.y+16 //extra
      && balls[i].sprite.x > gpuzzle1.x - puzzlehitbox
      && balls[i].sprite.x < gpuzzle1.x + puzzlehitbox){
      if (balls[i].sprite.x > gpuzzle1.x){
        balls[i].sprite.x--;
      }
      if (balls[i].sprite.x < gpuzzle1.x){
        balls[i].sprite.x++;
      }
    }

  }

  else { // bandit has the ball

    //balls chase bandit
    //puzzle1 stuff
    boxfull_a.splice(i);
    boxfull_b.splice(i);
    boxfull_c.splice(i);
    boxfull_d.splice(i);
    boxfull_e.splice(i);
    boxfull_f.splice(i);
    boxfull_g.splice(i);
    balls[i].lake1 = false;
    balls[i].lake2 = false;
    balls[i].lake3 = false;
    balls[i].inboxa = false;
    balls[i].inboxb = false;
    balls[i].inboxc = false;

    balls[i].sprite.x = bandit[0].sprite.x;
    balls[i].sprite.y = bandit[0].sprite.y;

//flying balls

/*
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
    */
  }

  }// end loop
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
    if (game.input.keyboard.isDown(Phaser.Keyboard.Y)){
    if(grabbed.length>0){
      for(var j=0; j<grabbed.length; j++){
        var i = grabbed[j]
    //    if (balls[i].sprite.x > bandit[0].sprite.x-ballmeetsplayer
    //      && balls[i].sprite.y > bandit[0].sprite.y-ballmeetsplayer
    //      && balls[i].sprite.x < bandit[0].sprite.x+ballmeetsplayer
    //      && balls[i].sprite.y < bandit[0].sprite.y+ballmeetsplayer){
          //  balls[i].sprite.y -= yhop;
          balls[i].sprite.y = bandit[0].sprite.y;
          balls[i].sprite.x = bandit[0].sprite.x;
          //  toss1.play();
            balls[i].banditPossession = false;
            grabbed.splice(j,1)
            break;
    //      }
        }
      }
    }


    else {
      if(grabbed.length>0){
      for(var j=0; j<grabbed.length; j++){
        var i = grabbed[j]
      //  if (balls[i].sprite.x > bandit[0].sprite.x-ballmeetsplayer
      //    && balls[i].sprite.y > bandit[0].sprite.y-ballmeetsplayer
      //    && balls[i].sprite.x < bandit[0].sprite.x+ballmeetsplayer
      //    && balls[i].sprite.y < bandit[0].sprite.y+ballmeetsplayer){
          //  balls[i].justGotTossed = true
            toss1.play();
            balls[i].sound.play();
            balls[i].tossedy = bandit[0].sprite.y;
            balls[i].tossedx = bandit[0].sprite.x;
            balls[i].sprite.y = bandit[0].sprite.y;
            balls[i].sprite.x = bandit[0].sprite.x;
            balls[i].tossedup = true;
            balls[i].banditPossession = false;
            grabbed.splice(j,1)
            break;
      //    }
        }
      }
    }
  }

  if (game.input.keyboard.justPressed(Phaser.Keyboard.DOWN)){

    if (game.input.keyboard.isDown(Phaser.Keyboard.Y)){
    if(grabbed.length>0){
      for(var j = grabbed.length; j--;){
        var i = grabbed[j]
  //      if (balls[i].sprite.x > bandit[0].sprite.x-ballmeetsplayer
  //        && balls[i].sprite.y > bandit[0].sprite.y-ballmeetsplayer
  //        && balls[i].sprite.x < bandit[0].sprite.x+ballmeetsplayer
  //        && balls[i].sprite.y < bandit[0].sprite.y+ballmeetsplayer){
        //    toss1.play();
            balls[i].sprite.y = bandit[0].sprite.y;
            balls[i].sprite.x = bandit[0].sprite.x;
            balls[i].banditPossession = false;
            grabbed.splice(j,1)
            break;
  //        }
        }
      }
    }
    else {
      if(grabbed.length>0){
      for(var j=0; j<grabbed.length; j++){
        var i = grabbed[j]
      //  if (balls[i].sprite.x > bandit[0].sprite.x-ballmeetsplayer
      //    && balls[i].sprite.y > bandit[0].sprite.y-ballmeetsplayer
      //    && balls[i].sprite.x < bandit[0].sprite.x+ballmeetsplayer
      //    && balls[i].sprite.y < bandit[0].sprite.y+ballmeetsplayer){
            balls[i].tossedy = bandit[0].sprite.y;
            balls[i].tossedx = bandit[0].sprite.x;
            balls[i].sprite.y = bandit[0].sprite.y;
            balls[i].sprite.x = bandit[0].sprite.x;
            balls[i].tosseddown = true;
            toss1.play();
            balls[i].sound.play();
            balls[i].banditPossession = false;
            grabbed.splice(j,1)
            break;
      //    }
        }
      }
    }
}
}

function ballReset() {

  for(var i=0; i<balls.length; i++){
    if (bandit[0].sprite.x < 1400
      && balls[i].sprite.y > pageend1+20
      || balls[i].sprite.y < pagestart1-20) {
      balls[i].sprite.x = 60+i*100;
      balls[i].sprite.y = pageend1;
      oob1.play();
      balls[i].banditPossession = false;
      if (grabbed.length > 0){
      grabbed.splice[0];
    }
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
