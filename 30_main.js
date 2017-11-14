
    var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'container', { preload: preload, create: create, update: update, render: render  });

    function preload () {
      text = game.add.text(400, 300, '', style0);
      text.anchor.setTo(0.5);
      game.stage.backgroundColor = '#2d2d2d';

      game.load.onFileComplete.add(fileComplete, this);

      game.load.audio('baker', 'images/audio/baker.wav');
      game.load.audio('crusher1', 'images/audio/_ crusher1.wav');
      game.load.audio('crusher2', 'images/audio/_ crusher2.wav');
      game.load.audio('crusher3', 'images/audio/_ crusher2.wav');
      game.load.audio('aha', 'images/audio/opener.wav');
      game.load.spritesheet('whirl', 'images/spritesheets/stars.png', 800, 800, 11)
      for (var i = 0; i < 19; i++){
            game.load.image('haka'+i, 'images/haka'+i+'.png');
            game.load.image('hakacrushed'+i, 'images/hakacrushed'+i+'.png');
          }
      for (var i = 0; i < 30; i++){
            game.load.image('note'+i, 'images/notes/note'+i+'.png');
          }
      for (var i = 0; i < 4; i++){
            game.load.image('seq'+i, 'images/seq'+i+'.png');
            game.load.image('seqcrush'+i, 'images/seqcrush'+i+'.png');
          }

      for (var i = 0; i < 9; i++){
        game.load.image('tree'+i, 'images/tree'+i+'.png');
        game.load.image('treebloom'+i, 'images/treebloom'+i+'.png');
      }
        game.load.image('snowflake', 'images/snowflake.png');

for (var i = 0; i< ballnumber; i++){

        game.load.image('skull'+i, 'images/skull0.png');
}
            game.load.image('statue0', 'images/statue0.png');
            game.load.image('statue1', 'images/statue1.png');
            game.load.image('statue2', 'images/statue2.png');
            game.load.image('statue3', 'images/statue3.png');
            game.load.image('statuecrushed0', 'images/statuecrushed0.png');
            game.load.image('statuecrushed1', 'images/statuecrushed1.png');
            game.load.image('statuecrushed2', 'images/statuecrushed2.png');
            game.load.image('statuecrushed3', 'images/statuecrushed3.png');
            game.load.image('sword', 'images/sword.png');
            game.load.image('voice', 'images/voice.png');
            game.load.image('bypassicon', 'images/open.png');
            game.load.image('bypassicon2', 'images/closed.png');
            game.load.image('heart', 'images/heart.png');
            game.load.image('grass', 'images/grass.png');
            game.load.image('you', 'images/you.png');
        //    game.load.image('menu', 'images/menu.png');
            game.load.image('flash', 'images/flash.png');
            game.load.image('bell', 'images/bell.png');
            game.load.image('bellcrushed', 'images/bellcrushed.png');
            game.load.image('blackarrow', 'images/blackarrow.png');
            game.load.image('blackarrowleft', 'images/blackarrowleft.png');
          //  game.load.image('whitearrow', 'images/whitearrow.png');

          //  game.load.image('gate', 'images/unlocked.png');
            game.load.image('crystal', 'images/pixies/crystal.png');
            game.load.image('crystalblow', 'images/pixies/crystalblow.png');
            game.load.image('crystaldoor', 'images/pixies/crystaldoor.png');
            game.load.image('crystaldoorshadow', 'images/pixies/crystaldoorshadow.png');

      //      game.load.image('npc1shadow', 'images/npc1shadow.png');
      //      game.load.image('npc2shadow', 'images/npc2shadow.png');
      //      game.load.image('npc3shadow', 'images/npc3shadow.png');
            game.load.image('scan1', 'images/scan1.png');
            game.load.image('ghostmode', 'images/ghostmode.png');

            game.load.image('casa', 'images/casa.png');
            game.load.image('casa2', 'images/casa2.png');
            game.load.image('yellowtarget', 'images/yellowtarget.png');
            game.load.image('greentarget', 'images/greentarget.png');

            game.load.spritesheet('friend', 'images/spritesheets/friend.png', 96, 96, 24)
          //  game.load.spritesheet('flashback', 'images/spritesheets/flashback.png', 800, 600, 30)

              game.load.audio('hook', 'images/audio/_ hook1.wav');

              for (var i = 0; i< ballnumber; i++){
              game.load.audio('collect'+(i+1), 'images/audio/_ g_collect'+(i+1)+'.wav');
            }
            for (var i = 0; i< bellnumber; i++){
            game.load.audio('pots'+(i+1), 'images/audio/_ pot'+(i+1)+'.wav');
            game.load.audio('heavenlybell'+(i+1), 'images/audio/_ newbell'+(i+1)+'.wav');
          }
            game.load.audio('on', 'images/audio/_ on.wav');
            game.load.audio('off', 'images/audio/_ off.wav');
            game.load.audio('crush', 'images/audio/crush.wav');
            game.load.audio('yes', 'images/audio/yes.wav');
            game.load.audio('no', 'images/audio/no.wav');
              game.load.audio('toss0', 'images/audio/_ toss1.wav');
              game.load.audio('toss1', 'images/audio/_ toss2.wav');
              game.load.audio('toss2', 'images/audio/_ toss3.wav');
              game.load.audio('toss3', 'images/audio/_ toss4.wav');
              game.load.audio('toss4', 'images/audio/_ toss5.wav');
              game.load.audio('toss5', 'images/audio/_ toss6.wav');

              game.load.audio('walking1', 'images/audio/_ stomp1.wav');
              game.load.audio('walking2', 'images/audio/_ stomp2.wav');
              game.load.audio('rain', 'images/audio/rain.wav');

    }


function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

	text.setText("Loading world: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

}

    var donnieplayed = false;
    var puzzlehitbox = 44;
    var ghostmode = false;

    var guard1dialogue
    var guard2dialogue
    var timer2 = 0;
    var gate1down = false;
    var scan1Moving = false;
    var scan2Moving = false;


    var puzzlenumber = 19;
var toss_speed = 15 //19 shows motion

var looperkilled1 = false;
var looperkilled2 = false;
var you
var youtimer = 0;
var youexpires = 0;
var jail

var npc1timer = 0
var npc2timer = 0
var npc3timer = 0
var npc4timer = 0

var bypassicon
var bypassicon2
var npc1init = false;
var npc2init = false;
var npc3init = false;
var npc4init = false;
var arrowtimer = 0;
var arrowsON = true

var loopershome = true;
var loopersaway = false;
var loopersstop = false;
var puzzlehakas = [];

//word doc parameters
  var yhop = 60; //34
//  var ghosticon
  var leftmargin1 = 40;
  var leftmargin2 = 800 + 40;
  var leftmargin3 = (800*2) + 40;
  var leftmargin4 = (800*3) + 40;
  var leftmargin5 = (800*4) + 40;
  var leftmargin6 = (800*5) + 40;
  var leftmargin7 = (800*6) + 40;
  var leftmargin8 = (800*7) + 40;
  var rightmargin1 = 800 - 40;
  var rightmargin2 = (800)*2 - 40;
  var rightmargin3 = (800)*3 - 40;
  var rightmargin4 = (800)*4 - 40;
  var rightmargin5 = (800)*5 - 40;
  var rightmargin6 = (800)*6 - 40;
  var rightmargin7 = (800)*7 - 40;
  var rightmargin8 = (800)*8 - 40;
  var npc1shadow
  var npc2shadow
  var npc3shadow
  var npc4shadow
  var pagestart = yhop+yhop; //28
  var pageend = 600-yhop-yhop; //572

//global variables
  var casa;
  var casa2;
//bandit possession states
  var balls = []
  var icons = []
  var grabbed = []

  var godmode = false;
  var cutscene = false;

  var restored = false;
  var scanspeed = 12;


  var players;
  var playerscale = .8 //.18;
  var ballscale = .4;
  var projectiles;

  var colorpicker = Math.random() * 0xffffff;

  var cameraspeed = 40;

  var ballmeetsplayerx = 36;
  var ballmeetsplayery = 8;
  var ballmeetsplayer = 36;
  var ballmeetsplayer2 = 16;
  var voice
  var banditmovespeed = 26;//42;
/*
  var currentdate = new Date();
  var datetime = (currentdate.getMonth()+1) + "/"
                + currentdate.getDate();
*/
  var text;
  var style0 = { font: "32px monospace", fill: "#ffffff"};
  var style = { font: "24px monospace", fill: "#ffffff" };
  var style2 = { font: "20px monospace", fill: "#ffffff" };
  var style3 = { font: "34px monospace", fill: "#000000" };
  var style4 = { font: "20px monospace", fill: "#909090" };
  var style5 = { font: "30px monospace", fill: "#ffffff" };
  var style6 = { font: "16px monospace", fill: "#f1d1e1" };
  var style7 = { font: "20px monospace", fill: "#ffffff" };
  var style8 = { font: "44px monospace", fill: "#000000" };
  var style9 = { font: "34px monospace", fill: "#ffffff" };
  var hakamoviing = false;
  var greentarget;
  var yellowtarget;
  var staticimages;
  var ballnumber = 28
  var raindrops = 51;
  var rain = [];
  var pagenumber = 10;

  var statuegrabbed = false;

  var arrows1 = [];
  var arrows2 = []
  var arrows3 = []
  var arrows4 = []
  var arrows5 = []
  var arrows6 = []
  var arrownumberrows = 5;
  var arrownumbercolumns = 7;
  var scan1
  var scan2
//  var housey = 148;
//  var housex = 60;
  var timer = 0;

  var crypttext = []

  var guard1x = 1110;
  var guard1y = pageend-10;
  var guard2x = 3000;
  var iconbud

  var treenumber = 9;
  var jailed = false;

  //pages
  var xpages = []
  var ypages = []
//  var negxpages = []
//  var negypages = []

  var bandit = [];
  var banditparts = 7;
  var yessound
  var nosound

//  var menu;

  var ONinit = false;

var banditwalkspeed = 4;
var controlstext
var graveyardtext
var ghostyardtext
var crystaldoor1
var crystaldoor1open
var crystaldoor2
var crystaldoor2open
var crystaldoor3
var crystaldoor3open
var crystaldoor4
var donnie;

var provideoffering

var puzzlesolved = false;
var puzzle2solved = false;
var puzzle3solved = false;

var shadow1x = leftmargin2+100;
var shadow1y = pageend;
var shadow2x = rightmargin2-200;
var shadow2y = pagestart;
var shadow3x = leftmargin2+450;
var shadow3y = pagestart+yhop*3;

var loopmachinenumber = 4;

var bells = [];
var grass = [];


var noteicon = [];

var grassnumber = 5;
var bellnumber = 9;

var loopmachinesleft = [];
var loopmachinesright = [];

//var menusize = 1;
var textsizetimer = 0;
var starttimer = false;
var looper2hitbox = 15;

var rainspeed = 32;
var may;

var scan1init = false;
//lopper variables
var looperleftx1 = leftmargin1+140;
var looperlefty1 = pagestart;
var looperrightx1 = rightmargin1-90;
var looperrighty1 = pagestart;

var looperleftx2 = leftmargin1+128;
var looperlefty2 = pageend-yhop;
var looperrightx2 = rightmargin1-128;
var looperrighty2 = pageend-yhop;

var looperleftx3 = leftmargin1+24;
var looperlefty3 = pageend-(yhop*3);
var looperrightx3 = rightmargin1-124;
var looperrighty3 = pageend-(yhop*3);

var looperleftx33 = leftmargin1+250;
var looperlefty33 = pagestart+yhop*2;
var looperrightx33 = rightmargin1-380;
var looperrighty33 = pagestart+yhop*2;

var looperleftx4 = leftmargin3+30;
var looperlefty4 = pageend-yhop;
var looperrightx4 = rightmargin3-330;
var looperrighty4 = pageend-yhop;

var looperleftx5 = leftmargin4+160;
var looperlefty5 = pageend-yhop*2;
var looperrightx5 = rightmargin4-160;
var looperrighty5 = pageend-yhop*2;

var looperleftx6 = leftmargin3;
var looperlefty6 = pageend-(yhop*3);
var looperrightx6 = rightmargin3-280;
var looperrighty6 = pageend-(yhop*3);

var looperleftx66 = leftmargin3+520;
var looperlefty66 = pageend-yhop*2;
var looperrightx66 = rightmargin3-100;
var looperrighty66 = pageend-yhop*2;

var looperleftx7 = leftmargin3+400;
var looperlefty7 = pageend-(yhop*4);
var looperrightx7 = rightmargin3;
var looperrighty7 = pageend-(yhop*4);

var lootboxes = []
var lootboxnumber = 4;

var looperspeed = 3;

var keycounter = [];

var tosssound = [];
var crushsound = [];
var walksound = [];

    function create () {




//loading stuff    //	You can listen for each of these events from Phaser.Loader
        game.world.setBounds(0, 0, 7000, 1800);



//fullscreen stuff
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.input.onDown.add(gofull, this);
        game.scale.setMinMax(400, 300, 1200, 900)

      //  donnie = game.add.audio('donnie');

      //  opener = game.add.audio('opener');

    //    gatecrush = game.add.audio('crush');
    for (var i = 0; i< 2; i++){
    walksound[i] = {}
    walksound[i] = game.add.audio('walking'+(i+1));
    }

    rain = game.add.audio('rain', 1, true);
        hook = game.add.audio('hook');

        aha = game.add.audio('aha');
        nosound = game.add.audio('no');
        yessound = game.add.audio('yes');
      //  yessound2 = game.add.audio('yes2');
        onsound = game.add.audio('on');
        offsound = game.add.audio('off');

        for (var i = 0; i < 5; i++){
          tosssound[i] = {};
          tosssound[i] = game.add.audio('toss'+i);
      }

        for (var i = 0; i < 3; i++){
          crushsound[i] = {};
          crushsound[i] = game.add.audio('crusher'+(i+1));
        }
//groups
        staticimages = game.add.group();
        projectiles = game.add.group();
        players = game.add.group();

        baker = game.add.audio('baker');



        flash = staticimages.create(800, 0, 'flash');
        flash.anchor.setTo(0);
        flash.scale.setTo(1);


        flash1 = staticimages.create(0, 0, 'flash');
      //  flash.anchor.setTo(0);
      //  flash.scale.setTo(1);

        flash2 = staticimages.create(2400, -32, 'whirl', 61);
        flash2.anchor.setTo(0);
        flash2.scale.setTo(1);
        flash2.gowhirl = flash2.animations.add('gowhirl',[0,1,2,3,4,5,6,7,8,9,10],20, false);



        flash3 = staticimages.create(1600, 0, 'flash');
        flash3.anchor.setTo(0);
        flash3.scale.setTo(1);

        flash.tint = 0xccffff
        flash1.tint = 0xccffff
        flash2.tint = 0xccffff
        flash3.tint = 0xccffff


        for (var i = 0; i < grassnumber; i++){
        grass[i] = {};
        grass[i].sprite = staticimages.create(leftmargin5+300, pagestart, 'grass');
        grass[i].sprite.anchor.setTo(0.5);
        grass[i].sprite.scale.setTo(.3);
}

grass[0].sprite.x = leftmargin4+360
grass[0].sprite.y = pagestart+60+yhop*3
grass[1].sprite.x = shadow1x+100
grass[1].sprite.y = shadow1y
grass[2].sprite.x = leftmargin5+360
grass[2].sprite.y = pageend+yhop*3
grass[3].sprite.x = leftmargin4+360
grass[3].sprite.y = pagestart+60+yhop*3
grass[4].sprite.x = leftmargin5+360
grass[4].sprite.y = pageend+yhop*3

        arrow1 = staticimages.create(rightmargin1, pageend+yhop, 'blackarrow');
        arrow1.anchor.setTo(0.5);
        arrow1.scale.setTo(0.3);

        arrow2 = staticimages.create(rightmargin2, pageend+yhop, 'blackarrow');
        arrow2.anchor.setTo(0.5);
        arrow2.scale.setTo(0.3);

        arrow3 = staticimages.create(leftmargin2, pagestart-30, 'blackarrowleft');
        arrow3.anchor.setTo(0.5);
        arrow3.scale.setTo(0.3);




        for (var i = 0; i < bellnumber; i++){
          bells[i] = {}
          bells[i].sprite = staticimages.create(0, 0, 'bell');
          bells[i].sprite.anchor.setTo(0.5);
          bells[i].sprite.scale.setTo(0);
          bells[i].crushedsprite = staticimages.create(0, 0, 'bellcrushed');
          bells[i].crushedsprite.anchor.setTo(0.5);
          bells[i].crushedsprite.scale.setTo(0.6);
          bells[i].scan1off = true;
          bells[i].sound = game.add.audio('pots'+(i+1));
          bells[i].sound2 = game.add.audio('heavenlybell'+(i+1));
          bells[i].grabinit = false;
          bells[i].crushinit = false;
        }

        bells[0].sprite.x = leftmargin1+500
        bells[0].sprite.y = pageend-yhop*2
        bells[1].sprite.x = leftmargin4+90
        bells[1].sprite.y = pageend
        bells[2].sprite.x = leftmargin4+200
        bells[2].sprite.y = pagestart
        bells[3].sprite.x = leftmargin4+150
        bells[3].sprite.y = pageend
        bells[4].sprite.x = leftmargin4+600
        bells[4].sprite.y = pagestart+yhop*2
        bells[5].sprite.x = leftmargin4+500
        bells[5].sprite.y = pagestart+yhop*3
        bells[6].sprite.x = leftmargin4+20
        bells[6].sprite.y = pagestart+yhop*4
        bells[7].sprite.x = leftmargin4+710
        bells[7].sprite.y = pagestart+yhop*5
        bells[8].sprite.x = leftmargin2+170
        bells[8].sprite.y = pageend-yhop*2
  //      bells[9].sprite.x = leftmargin1+400
  //      bells[9].sprite.y = pagestart-yhop

        sword = staticimages.create(400, pagestart+yhop*2, 'sword');
        sword.anchor.setTo(0.5);
        sword.scale.setTo(1);
        sword.grabinit = false;

        crystaldoor1 = staticimages.create(rightmargin2-60, pageend, 'crystal');
        crystaldoor1.anchor.setTo(0.5);
        crystaldoor1.scale.setTo(1);

        crystaldoorblow1 = staticimages.create(rightmargin2-60, pageend, 'crystalblow');
        crystaldoorblow1.anchor.setTo(0.5);
        crystaldoorblow1.scale.setTo(0);

        crystaldoor1open = staticimages.create(rightmargin2-60, pageend-16, 'crystaldoor');
        crystaldoor1open.anchor.setTo(0.5);
        crystaldoor1open.scale.setTo(0);

        crystaldoor2 = staticimages.create(rightmargin3-60, pageend, 'crystal');
        crystaldoor2.anchor.setTo(0.5);
        crystaldoor2.scale.setTo(1);

        crystaldoorblow2 = staticimages.create(rightmargin3-60, pageend, 'crystalblow');
        crystaldoorblow2.anchor.setTo(0.5);
        crystaldoorblow2.scale.setTo(0);

        crystaldoor2open = staticimages.create(rightmargin3-60, pageend-16, 'crystaldoorshadow');
        crystaldoor2open.anchor.setTo(0.5);
        crystaldoor2open.scale.setTo(0);

    //    crystaldoor3 = staticimages.create(leftmargin4+520, pagestart+yhop, 'crystal');
    //    crystaldoor3.anchor.setTo(0.5);
    //    crystaldoor3.scale.setTo(1);

    //    crystaldoorblow3 = staticimages.create(leftmargin4+520, pagestart+yhop, 'crystalblow');
    //    crystaldoorblow3.anchor.setTo(0.5);
    //    crystaldoorblow3.scale.setTo(0);

        crystaldoor3open = staticimages.create(leftmargin4+520, pagestart+yhop-16, 'crystaldoor');
        crystaldoor3open.anchor.setTo(0.5);
        crystaldoor3open.scale.setTo(1);

        for (var i = 0; i < puzzlenumber; i++){
          puzzlehakas[i] = {}
          puzzlehakas[i].sprite = staticimages.create(leftmargin2+240, pagestart+yhop, 'haka'+i);
          puzzlehakas[i].sprite.anchor.setTo(0.5);
          puzzlehakas[i].sprite.scale.setTo(0);
          puzzlehakas[i].crushedsprite = staticimages.create(leftmargin2+240, pagestart+yhop, 'hakacrushed'+i);
          puzzlehakas[i].crushedsprite.anchor.setTo(0.5);
          puzzlehakas[i].crushedsprite.scale.setTo(0.5);
          puzzlehakas[i].boxfull = [];
          puzzlehakas[i].grabinit = false;
          puzzlehakas[i].crushinit = false;
      //    puzzlehakas[i].hakatext = game.add.text(puzzlehakas[i].sprite.x, puzzlehakas[i].sprite.y-45, puzzlehakas[i].boxfull.length, style4);
      //    puzzlehakas[i].hakatext.anchor.set(0.5);
          puzzlehakas[i].heart = staticimages.create(puzzlehakas[i].sprite.x, puzzlehakas[i].sprite.y-48, 'heart');
          puzzlehakas[i].heart.scale.setTo(0);
          puzzlehakas[i].heart.anchor.setTo(0.5);
        }

        puzzlehakas[0].sprite.x = leftmargin2+240
        puzzlehakas[0].sprite.y = pagestart+yhop
        puzzlehakas[0].crushedsprite.x = leftmargin2+240
        puzzlehakas[0].crushedsprite.y = pagestart+yhop
        puzzlehakas[1].sprite.x = leftmargin2+100
        puzzlehakas[1].sprite.y = pagestart+yhop
        puzzlehakas[1].crushedsprite.x = leftmargin2+100
        puzzlehakas[1].crushedsprite.y = pagestart+yhop
        puzzlehakas[2].sprite.x = leftmargin2+300
        puzzlehakas[2].sprite.y = pagestart+yhop*3
        puzzlehakas[2].crushedsprite.x = leftmargin2+300
        puzzlehakas[2].crushedsprite.y = pagestart+yhop*3
        puzzlehakas[3].sprite.x = leftmargin2+600
        puzzlehakas[3].sprite.y = pagestart+yhop*4
        puzzlehakas[3].crushedsprite.x = leftmargin2+600
        puzzlehakas[3].crushedsprite.y = pagestart+yhop*4
        puzzlehakas[4].sprite.x = leftmargin2+440
        puzzlehakas[4].sprite.y = pagestart+yhop*5
        puzzlehakas[4].crushedsprite.x = leftmargin2+440
        puzzlehakas[4].crushedsprite.y = pagestart+yhop*5
        puzzlehakas[5].sprite.x = leftmargin2+640
        puzzlehakas[5].sprite.y = pagestart+yhop*2
        puzzlehakas[5].crushedsprite.x = leftmargin2+640
        puzzlehakas[5].crushedsprite.y = pagestart+yhop*2
        puzzlehakas[6].sprite.x = leftmargin2+340
        puzzlehakas[6].sprite.y = pagestart+yhop*5
        puzzlehakas[6].crushedsprite.x = leftmargin2+340
        puzzlehakas[6].crushedsprite.y = pagestart+yhop*5
        puzzlehakas[7].sprite.x = leftmargin2+540
        puzzlehakas[7].sprite.y = pagestart+yhop*5
        puzzlehakas[7].crushedsprite.x = leftmargin2+540
        puzzlehakas[7].crushedsprite.y = pagestart+yhop*5

        puzzlehakas[8].sprite.x = shadow1x
        puzzlehakas[8].sprite.y = shadow1y
        puzzlehakas[8].sprite.scale.setTo(0);
        puzzlehakas[8].crushedsprite.x = shadow1x
        puzzlehakas[8].crushedsprite.y = shadow1y
        puzzlehakas[9].sprite.x = shadow2x
        puzzlehakas[9].sprite.y = shadow2y
        puzzlehakas[9].sprite.scale.setTo(0);
        puzzlehakas[9].crushedsprite.x = shadow2x
        puzzlehakas[9].crushedsprite.y = shadow2y
        puzzlehakas[10].sprite.x = shadow3x
        puzzlehakas[10].sprite.y = shadow3y
        puzzlehakas[10].sprite.scale.setTo(0);
        puzzlehakas[10].crushedsprite.x = shadow3x
        puzzlehakas[10].crushedsprite.y = shadow3y

//puzzle2
        puzzlehakas[11].sprite.x = leftmargin3+600
        puzzlehakas[11].sprite.y = pagestart+yhop*2
        puzzlehakas[11].crushedsprite.x = leftmargin3+600
        puzzlehakas[11].crushedsprite.y = pagestart+yhop*2
        puzzlehakas[12].sprite.x = leftmargin3+400
        puzzlehakas[12].sprite.y = pagestart+yhop
        puzzlehakas[12].crushedsprite.x = leftmargin3+400
        puzzlehakas[12].crushedsprite.y = pagestart+yhop
        puzzlehakas[13].sprite.x = leftmargin3+100
        puzzlehakas[13].sprite.y = pagestart+yhop*3
        puzzlehakas[13].crushedsprite.x = leftmargin3+100
        puzzlehakas[13].crushedsprite.y = pagestart+yhop*3
        puzzlehakas[14].sprite.x = leftmargin4+360
        puzzlehakas[14].sprite.y = pagestart+yhop*3
        puzzlehakas[14].crushedsprite.x = leftmargin4+360
        puzzlehakas[14].crushedsprite.y = pagestart+yhop*3
        puzzlehakas[15].sprite.x = leftmargin3+340
        puzzlehakas[15].sprite.y = pagestart+yhop*3
        puzzlehakas[15].crushedsprite.x = leftmargin3+340
        puzzlehakas[15].crushedsprite.y = pagestart+yhop*3
        puzzlehakas[16].sprite.x = leftmargin3+240
        puzzlehakas[16].sprite.y = pagestart+yhop*6
        puzzlehakas[16].crushedsprite.x = leftmargin3+240
        puzzlehakas[16].crushedsprite.y = pagestart+yhop*6
        puzzlehakas[17].sprite.x = leftmargin3+490
        puzzlehakas[17].sprite.y = pagestart+yhop*5
        puzzlehakas[17].crushedsprite.x = leftmargin3+490
        puzzlehakas[17].crushedsprite.y = pagestart+yhop*5
        puzzlehakas[18].sprite.x = leftmargin3+240
        puzzlehakas[18].sprite.y = pagestart
        puzzlehakas[18].crushedsprite.x = leftmargin3+240
        puzzlehakas[18].crushedsprite.y = pagestart


        for (var i =0; i < puzzlenumber; i++){
          puzzlehakas[i].heart.x = puzzlehakas[i].sprite.x
          puzzlehakas[i].heart.y = puzzlehakas[i].sprite.y-48
        }

    //    noteyard = staticimages.create(leftmargin5+240, 162, 'noteyard');
    //    noteyard.anchor.setTo(0.5);
    //    noteyard.scale.setTo(.7);

        casa = staticimages.create(0, 0, 'casa');
        casa.anchor.setTo(0.5);
        casa.scale.setTo(0);

        casa2 = staticimages.create(0, 0, 'casa2');
        casa2.anchor.setTo(0.5);
        casa2.scale.setTo(0);

        yellowtarget = staticimages.create(40, 40, 'yellowtarget');
        yellowtarget.anchor.setTo(0.5);
        yellowtarget.scale.setTo(.4);

        iconbud = staticimages.create(40, 40, 'yellowtarget');

        iconbud2 = staticimages.create(760, 40, 'greentarget');
        iconbud2.anchor.setTo(0.5);
        iconbud2.scale.setTo(0);

        iconbud2.tint = 0xaabbcc;

    //    ghosticon = staticimages.create(40, 40, 'ghostmode');
    //    ghosticon.anchor.setTo(0.5);
    //    ghosticon.scale.setTo(0);


        for (var i = 0; i < loopmachinenumber; i++){
          loopmachinesleft[i] = {};
          loopmachinesleft[i].sprite = staticimages.create(0, 0, 'statue'+i);
          loopmachinesleft[i].sprite.anchor.setTo(0.5);
          loopmachinesleft[i].sprite.scale.setTo(0);
          loopmachinesleft[i].crushedsprite = staticimages.create(0, 0, 'statuecrushed'+i);
          loopmachinesleft[i].crushedsprite.anchor.setTo(0.5);
          loopmachinesleft[i].crushedsprite.scale.setTo(0.44);
          loopmachinesleft[i].grabinit = false;
          loopmachinesleft[i].crushinit = false;
          loopmachinesright[i] = {};
          loopmachinesright[i].sprite = staticimages.create(0, 0, 'statue'+i);
          loopmachinesright[i].sprite.anchor.setTo(0.5);
          loopmachinesright[i].sprite.scale.setTo(0);
          loopmachinesright[i].crushedsprite = staticimages.create(0, 0, 'statuecrushed'+i);
          loopmachinesright[i].crushedsprite.anchor.setTo(0.5);
          loopmachinesright[i].crushedsprite.scale.setTo(0.44);
          loopmachinesright[i].grabinit = false;
          loopmachinesright[i].crushinit = false;
        }

//looper0
        loopmachinesleft[0].sprite.x =looperleftx1;
        loopmachinesleft[0].sprite.y =looperlefty1;
      //  loopmachinesleft[0].sprite.scale.setTo(.44);
        loopmachinesright[0].sprite.x =looperrightx1;
        loopmachinesright[0].sprite.y =looperrighty1;
    //    loopmachinesright[0].sprite.scale.setTo(.44);
//looper1
        loopmachinesleft[1].sprite.x =looperleftx2;
        loopmachinesleft[1].sprite.y =looperlefty2;
    //    loopmachinesleft[1].sprite.scale.setTo(.44);
        loopmachinesright[1].sprite.x =looperrightx2;
        loopmachinesright[1].sprite.y =looperrighty2;
    //    loopmachinesright[1].sprite.scale.setTo(.44);
//looper2
        loopmachinesleft[2].sprite.x =looperleftx3;
        loopmachinesleft[2].sprite.y =looperlefty3;
  //      loopmachinesleft[2].sprite.scale.setTo(.44);
        loopmachinesright[2].sprite.x =looperrightx3;
        loopmachinesright[2].sprite.y =looperrighty3;
  //      loopmachinesright[2].sprite.scale.setTo(.44);
//looper3
        loopmachinesleft[3].sprite.x =looperleftx33;
        loopmachinesleft[3].sprite.y =looperlefty33;
  //      loopmachinesleft[3].sprite.scale.setTo(.44);
        loopmachinesright[3].sprite.x =looperrightx33;
        loopmachinesright[3].sprite.y =looperrighty33;
//        loopmachinesright[3].sprite.scale.setTo(.44);


controlstext0 = game.add.text(200, pageend+60, 'bypass: F', style3);
controlstext0.anchor.setTo(0.5);

controlstext2 = game.add.text(leftmargin4+360, pageend+60, 'strum: SPACEBAR', style3);
controlstext2.anchor.setTo(0.5);

controlstext1 = game.add.text(600, pageend+60, 'drag: HOLD D', style3);
controlstext1.anchor.setTo(0.5);

controlstext3 = game.add.text(leftmargin6+360, pageend+60, 'crush: C', style9);
controlstext3.anchor.setTo(0.5);

controlstext = game.add.text(1200, pageend+60, 'move: ← →   toss: ↑ ↓', style3);
controlstext.anchor.setTo(0.5);

creditstext = game.add.text(leftmargin5+500, 270, 'CREATED BY\nDavid Plell\n\nPROGRAMMING\nJavaScript + Phaser API\n\nSOUNDS\nkorg minilogue\nKontakt\nAbsynth\nmandolin\nmarimba\nshaker\ntoy bells\nkitchen pots', style7);
creditstext.anchor.setTo(0.5);

tobecontinued = game.add.text(leftmargin6+360, 280, 'noteyard.io', style7);
tobecontinued.anchor.setTo(0.5);

for (var i =0; i < 8; i++){
crypttext[i] = {};
}

crypttext[0].text = game.add.text(puzzlehakas[0].sprite.x, puzzlehakas[0].sprite.y-46, 'THE', style3);
crypttext[0].text.anchor.setTo(0.5);
crypttext[0].text.scale.setTo(0.6);

crypttext[1].text = game.add.text(puzzlehakas[1].sprite.x, puzzlehakas[1].sprite.y-46, 'WIN', style3);
crypttext[1].text.anchor.setTo(0.5);
crypttext[1].text.scale.setTo(0.6);

crypttext[2].text = game.add.text(puzzlehakas[2].sprite.x, puzzlehakas[2].sprite.y-46, 'FAVOR', style3);
crypttext[2].text.anchor.setTo(0.5);
crypttext[2].text.scale.setTo(0.6);

crypttext[3].text = game.add.text(puzzlehakas[3].sprite.x, puzzlehakas[3].sprite.y-46, 'TO', style3);
crypttext[3].text.anchor.setTo(0.5);
crypttext[3].text.scale.setTo(0.6);

crypttext[4].text = game.add.text(puzzlehakas[4].sprite.x, puzzlehakas[4].sprite.y-46, 'THE', style3);
crypttext[4].text.anchor.setTo(0.5);
crypttext[4].text.scale.setTo(0.6);

crypttext[5].text = game.add.text(puzzlehakas[5].sprite.x, puzzlehakas[5].sprite.y-46, 'PASS', style3);
crypttext[5].text.anchor.setTo(0.5);
crypttext[5].text.scale.setTo(0.6);

crypttext[6].text = game.add.text(puzzlehakas[6].sprite.x, puzzlehakas[6].sprite.y-46, 'OF', style3);
crypttext[6].text.anchor.setTo(0.5);
crypttext[6].text.scale.setTo(0.6);

crypttext[7].text = game.add.text(puzzlehakas[7].sprite.x, puzzlehakas[7].sprite.y-46, 'DEAD', style3);
crypttext[7].text.anchor.setTo(0.5);
crypttext[7].text.scale.setTo(0.6);


//provideoffering = game.add.text(1200, pagestart-yhop, 'graveyard', style3);
//provideoffering.anchor.setTo(0.5);
//provideoffering.scale.setTo(0.5);

//bandit parts
for(var i = 0; i < banditparts; i++){
  bandit[i] = {};
  bandit[i].sprite = players.create((leftmargin2 + 400) - (i * 60), pagestart+yhop*2, 'friend', 16);
//  bandit[i].sprite = players.create((leftmargin2 + 420) - (i * 14), pagestart+yhop*2, 'bandit'+ i);
  //bandit[i].sprite.frame = 5;

  bandit[i].sprite.anchor.setTo(0.5);
  bandit[i].sprite.scale.setTo(playerscale);
  bandit[i].sprite.tint = 0xe6e6e6;

}

bandit[0].stand = bandit[0].sprite.animations.add('stand', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8, false);
bandit[0].walkleft = bandit[0].sprite.animations.add('walkleft', [16, 17, 18, 19], 8, false)
bandit[0].walkright = bandit[0].sprite.animations.add('walkright', [20, 21, 22, 23, 24], 8, false)
bandit[0].sprite.animations.play('stand', 16, true)

bandit[1].sprite.scale.setTo(0);
bandit[2].sprite.scale.setTo(0);
bandit[3].sprite.scale.setTo(0);
bandit[4].sprite.scale.setTo(0);
bandit[5].sprite.scale.setTo(0);
bandit[6].sprite.scale.setTo(0);
/*
  friend.animations.add('left', [0,1], 10, true);
  friend.animations.add('right', [3,4], 10, true);
*/
        bypassicon = staticimages.create(0, 0, 'bypassicon');
        bypassicon.anchor.setTo(0.5);
        bypassicon.scale.setTo(1);

        bypassicon2 = staticimages.create(0, 0, 'bypassicon2');
        bypassicon2.anchor.setTo(0.5);
        bypassicon2.scale.setTo(1);

        voice = staticimages.create(0, 0, 'voice');
        voice.anchor.setTo(0.5);
        voice.scale.setTo(0);


//ball starting positions
for(var i=0; i<ballnumber; i++){
  balls[i] = {};
  balls[i].banditPossession = false;
  balls[i].sound = game.add.audio('collect'+(i+1));
  balls[i].sprite = projectiles.create(leftmargin1+20+i*34, pagestart+yhop*3, 'skull'+i);
  balls[i].sprite.tint = Math.random() * 0xffffff;
  balls[i].sprite.anchor.setTo(0.5);
  balls[i].sprite.scale.setTo(ballscale);
  balls[i].sprite.vx = ballmeetsplayer/4;
  balls[i].sprite.vy = yhop/10;
  //tossed
  balls[i].notesprite = staticimages.create(0, 40, 'note'+(i+1));
  balls[i].notesprite.anchor.setTo(0.5);
  balls[i].notesprite.scale.setTo(0);
  balls[i].tossedup = false;
  balls[i].tosseddown = false;
  balls[i].tossedx = 0;
  balls[i].tossedy = 0;
    //water
//  balls[i].lake1 = false;
  balls[i].lake2 = false;
  balls[i].lake3 = false;
  balls[i].lake4 = false;

    //looper stuff
  balls[i].inlooper = false;
  balls[i].totheright = false;


  //bandit ABILITIES
  balls[i].scan1on = false;
  balls[i].scan1off = true;
  //grid stuff
/*
  balls[i].npc1shadow = staticimages.create(shadow1x, shadow1y, 'npc1shadow');
  balls[i].npc1shadow.anchor.setTo(0.5);
  balls[i].npc1shadow.scale.setTo(0);

  balls[i].npc2shadow = staticimages.create(shadow2x, shadow2y, 'npc2shadow');
  balls[i].npc2shadow.anchor.setTo(0.5);
  balls[i].npc2shadow.scale.setTo(0);

  balls[i].npc3shadow = staticimages.create(shadow3x, shadow3y, 'npc3shadow');
  balls[i].npc3shadow.anchor.setTo(0.5);
  balls[i].npc3shadow.scale.setTo(0);
*/
}
balls[0].sprite.x = bandit[0].sprite.x-90;
balls[0].sprite.y = bandit[0].sprite.y;
balls[1].sprite.x = puzzlehakas[0].sprite.x;
balls[1].sprite.y = puzzlehakas[0].sprite.y;
balls[2].sprite.y = pageend
balls[3].sprite.y = pageend-yhop;
balls[4].sprite.x = 420;
balls[4].sprite.y = pagestart;
balls[5].sprite.x = bandit[0].sprite.x+200;
balls[5].sprite.y = bandit[0].sprite.y;
balls[6].sprite.y = pageend-yhop*2;
balls[7].sprite.x = bandit[0].sprite.x;
balls[7].sprite.y = bandit[0].sprite.y-yhop;
balls[8].sprite.y = pageend-yhop*2;
balls[9].sprite.x = bandit[0].sprite.x;
balls[9].sprite.y = bandit[0].sprite.y+yhop;
balls[10].sprite.x = 420;
balls[10].sprite.y = pagestart+yhop*2;
balls[11].sprite.x = puzzlehakas[1].sprite.x;
balls[11].sprite.y = puzzlehakas[1].sprite.y;
balls[2].sprite.x = 60
balls[12].sprite.x = 120
balls[15].sprite.x = 180
balls[15].sprite.y = pagestart+yhop
balls[17].sprite.x = 240
balls[17].sprite.y = pageend
balls[18].sprite.x = 300
balls[18].sprite.y = pageend-yhop
balls[19].sprite.x = 360
balls[20].sprite.x = 420
balls[20].sprite.y = pageend-yhop
balls[21].sprite.x = 480
balls[13].sprite.y = pagestart+yhop
balls[14].sprite.y = pagestart+yhop
balls[14].sprite.y = pagestart+yhop
balls[16].sprite.x = puzzlehakas[0].sprite.x;
balls[16].sprite.y = puzzlehakas[0].sprite.y;
balls[13].sprite.x = bandit[0].sprite.x;
balls[13].sprite.y = bandit[0].sprite.y;
balls[22].sprite.x = puzzlehakas[11].sprite.x
balls[22].sprite.y = puzzlehakas[11].sprite.y
balls[23].sprite.x = puzzlehakas[12].sprite.x
balls[23].sprite.y = puzzlehakas[12].sprite.y
balls[24].sprite.x = puzzlehakas[13].sprite.x
balls[24].sprite.y = puzzlehakas[13].sprite.y
balls[25].sprite.x = puzzlehakas[15].sprite.x
balls[25].sprite.y = puzzlehakas[15].sprite.y
balls[26].sprite.x = puzzlehakas[16].sprite.x
balls[26].sprite.y = pageend-yhop
balls[27].sprite.x = puzzlehakas[17].sprite.x
balls[27].sprite.y = puzzlehakas[17].sprite.y

//ball location

for (var i = 0; i < lootboxnumber; i++){
  lootboxes[i] = {};
  lootboxes[i].sprite = projectiles.create(4076+50+184*i, pageend, 'seq'+i);
  lootboxes[i].sprite.anchor.setTo(0.5);
  lootboxes[i].sprite.scale.setTo(0.4);
  lootboxes[i].crushedsprite = projectiles.create(4076+50-800+184*i, pageend, 'seqcrush'+i);
  lootboxes[i].crushedsprite.anchor.setTo(0.5);
  lootboxes[i].crushedsprite.scale.setTo(0);
  lootboxes[i].grabinit = false;
  lootboxes[i].crushinit = false;
}


lootboxes[0].sprite.x = leftmargin5+500;
//lootboxes[2].sprite.x = lootboxes[2].sprite.x -200;
lootboxes[1].sprite.y = 1000;


game.camera.x = 800;

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

  //    for(var i = 0; i < pagenumber; i++){
  //      negxpages[i] = {};
  //      negxpages[i].pageturn = false;
  //      negxpages[i].leftmargins = -800*i;
  //      negxpages[i].rightmargins = -800 * (i+1);
  //    }

  //    for(var i = 0; i < pagenumber; i++){
  //      negypages[i] = {};
  //      negypages[i].pageturn = false;
  //      negypages[i].topmargins = -600*i;
  //      negypages[i].bottommargins = -600 * (i+1);
  //    }

//rain or snow
      for(var i = 0; i < raindrops; i++){
        rain[i] = {};
        rain[i].sprite = staticimages.create(i*96, Math.random() * (700-(pagestart-200)) + (pagestart-200), 'snowflake')
        rain[i].sprite.anchor.setTo(0.5);
        rain[i].sprite.scale.setTo(0);
        rain[i].atbottom = false;
      }



//jail = staticimages.create(400, bandit[1].sprite.y, 'jail');
//jail.anchor.setTo(0.5);
//jail.scale.setTo(0);

you = staticimages.create(bandit[0].sprite.x, bandit[0].sprite.y-46, 'you');
you.anchor.setTo(0.5);
you.tint = 0x000000;
you.scale.setTo(0.5);

for (var i = 0; i < treenumber; i++){

  trees[i] = {}
  trees[i].sprite = staticimages.create(0, 0, 'tree' + i);
  trees[i].sprite.anchor.setTo(0.5);
  trees[i].sprite.scale.setTo(0.8);
  trees[i].spritebloom = staticimages.create(0, 0, 'treebloom' + i);
  trees[i].spritebloom.anchor.setTo(0.5);
  trees[i].spritebloom.scale.setTo(0);

}



trees[0].sprite.x = 390
trees[0].sprite.y = 500
trees[6].sprite.x = leftmargin3+568
trees[6].sprite.y = pagestart+yhop-60
trees[2].sprite.x = 20
trees[2].sprite.y = 560
trees[3].sprite.x = 200
trees[3].sprite.y = 300
trees[4].sprite.x = 1200
trees[4].sprite.y = 70
trees[5].sprite.x = leftmargin4+400
trees[5].sprite.y = 250
trees[1].sprite.x = 30
trees[1].sprite.y = 170
trees[7].sprite.x = 718
trees[7].sprite.y = 98
trees[8].sprite.x = 290
trees[8].sprite.y = 50

for (var i = 0; i< trees.length; i++){
  trees[i].spritebloom.x = trees[i].sprite.x
  trees[i].spritebloom.y = trees[i].sprite.y
}

//menu = staticimages.create(0, 0, 'menu');
//menu.anchor.setTo(0.5);
//menu.scale.setTo(0);


game.load.start();


//opener.play();


    }

var trees = [];
var loadedstuff = false;

    function gameStartInitials(){
      if (loadedstuff == false){
        rain.play();
        baker.play();
        loadedstuff = true;
      }
    }

    function update() {
                gameStartInitials();
                animationUpdate();
                playerUpdate();
                statueUpdate();
                ballMove();
                moveCamera();
                puzzleUpdate();
                iconMain();
                textWobble();


}


    function render() {
          // game.debug.spriteInfo(bandit[0].sprite, 450, 32);
}



function puzzleUpdate(){
  hakaUpdate();
  bellsUpdate();
}

function playerUpdate(){
  playerMove();
  playerToss();
  playerPowers();
}

var wobbleleft = true;

function textWobble(){

rainFall();

if (controlstext3){
  if(wobbleleft == true){
        if (controlstext3.y > pageend+yhop-2){
        controlstext3.y-=0.2;
        //if (controlstext){controlstext.y-=0.2;}
        if (controlstext0){controlstext0.y-=0.2;}
        if (controlstext1){controlstext1.y-=0.2;}
        if (controlstext2){controlstext2.y-=0.2;}
      }
        else{
          wobbleleft = false;
        }
      }
      else{
        if (controlstext3.y < pageend+yhop+2){
        controlstext3.y+=0.2;
      //  if (controlstext){controlstext.y+=0.2;}
        if (controlstext0){controlstext0.y+=0.2;}
        if (controlstext1){controlstext1.y+=0.2;}
        if (controlstext2){controlstext2.y+=0.2;}
      }
        else{
          wobbleleft = true;
        }
      }
    }
}


function iconMain(){



iconUpdate();
arrowsBlink();

  //kill text
  if (you){
    you.x = bandit[0].sprite.x;
    you.y = bandit[0].sprite.y-78;
    youexpires++;
    if (youexpires > 280){
      if (you){
      you.kill();
    }
    }
    //blink text
    youtimer++;
    if (youtimer > 50){
      youtimer = 0;
    }
    if (youtimer < 37){
      you.scale.setTo(0)
    }
    else if (youtimer < 50){
    you.scale.setTo(0.5)
  }
}
}

function arrowsBlink(){

  if (arrowsON == true){
  if (puzzlesolved == true){
    arrowtimer = 0;
    arrow1.scale.setTo(0);
    arrow2.scale.setTo(0);
    arrow3.scale.setTo(0);
    arrowON = false;
  }
  else{
  arrowtimer+=2;
  if (arrowtimer > 80){
    arrowtimer = 0;
  }
  if (arrowtimer < 50){
  //  controlstext.scale.setTo(0)
    arrow1.scale.setTo(0);
    arrow2.scale.setTo(0);
    arrow3.scale.setTo(0);
  //  arrow4.scale.setTo(0);
  }

  else if (arrowtimer < 80){
  // controlstext.scale.setTo(1)
   arrow1.scale.setTo(0.3);
   arrow2.scale.setTo(0.3);
   arrow3.scale.setTo(0.3);
  // arrow4.scale.setTo(0.3);
  }
}
}
}



function puzzleCompletion(){
  //puzzle1
  if (puzzlesolved == false){
  if (puzzlehakas[0].boxfull.length > 0
      && puzzlehakas[0].boxfull.length > 0
      && puzzlehakas[1].boxfull.length > 0
      && puzzlehakas[2].boxfull.length > 0
      && puzzlehakas[3].boxfull.length > 0
      && puzzlehakas[4].boxfull.length > 0
      && puzzlehakas[5].boxfull.length > 0
      && puzzlehakas[6].boxfull.length > 0
      && puzzlehakas[7].boxfull.length > 0
      && puzzlehakas[8].boxfull.length > 0
      && puzzlehakas[9].boxfull.length > 0
      && puzzlehakas[10].boxfull.length > 0
    ){
        crystaldoor1.kill();
        crystaldoor1open.scale.setTo(1);
        yessound.play();
        controlstext0.kill();
        puzzlesolved = true;
      }
    }


//puzzle2
if (puzzlesolved == true &&
   puzzle2solved == false){
if (puzzlehakas[11].boxfull.length > 0
    && puzzlehakas[12].boxfull.length > 0
    && puzzlehakas[13].boxfull.length > 0
//    && puzzlehakas[14].boxfull.length > 0
    && puzzlehakas[15].boxfull.length > 0
    && puzzlehakas[16].boxfull.length > 0
    && puzzlehakas[17].boxfull.length > 0
    && puzzlehakas[18].boxfull.length > 0){
        crystaldoor2.kill();
        crystaldoor2open.scale.setTo(0.6);
        yessound.play();
        controlstext1.kill();
      //  rain.play();
      //  flash.tint = 0x606060
      //  flash1.tint = 0x606060
      //  flash2.tint = 0x606060
      //  flash3.tint = 0x606060
        puzzle2solved = true;

      }
    }
/*
 if (puzzle2solved == true
   && puzzle3solved == false){
  if (scan1){
    if (scan1.x > bells[4].sprite.x){
      yessound.play();
      crystaldoor3.kill();
      controlstext2.kill();
      crystaldoor3open.scale.setTo(1);
        puzzle3solved = true;
  //    controlstext1.kill();
    }
    }
    }
    */
  }






function bellRinger(bell){
  var belldude = bell.sprite;
  var xscanoff = bell.scan1off;
  var ding = bell.sound;
  var dong = bell.sound2;
  var crushed = bell.crushinit

  //scan1
  if (scan1init == true){
    xscanoff = true;
  }

  if (xscanoff == true){
      if (scan1){
        //if ball is on the page
        if (belldude.x > game.camera.x){
        if (belldude.x < scan1.x+10){
          if(restored == true){
            if (crushed == false){dong.play();}
            else{ding.play();}
          }
          else{ding.play();}
          scan1.tint = Math.random() * 0xffffff;
          xscanoff = false;
        }
      }
      else{}
    }
  }

  return xscanoff
  }


function bellsUpdate(){
  for (var i = 0; i < bells.length; i++){
    bells[i].scan1off = bellRinger(bells[i]);
  }
}




function hakaUpdate(){

  for (var i = 0; i < puzzlenumber; i++)
  {
  if(puzzlehakas[i].boxfull.length>0){
      puzzlehakas[i].heart.scale.setTo(1);
    }

  else {
      puzzlehakas[i].heart.scale.setTo(0);
    }
}


puzzleboxes();
puzzleCompletion();



}



function playerPowers() {
  banditScan();
  ghostBandit();
}

/*
function playDonnie(){
  if (puzzlehakas[0].boxfull.length > 0
      && puzzlehakas[1].boxfull.length > 0
      && puzzlehakas[2].boxfull.length > 0
      && puzzlehakas[3].boxfull.length > 0
      && puzzlehakas[4].boxfull.length > 0
      && puzzlehakas[5].boxfull.length > 0
      && puzzlehakas[6].boxfull.length > 0
      && puzzlehakas[7].boxfull.length > 0
      && puzzlehakas[8].boxfull.length > 0
      && puzzlehakas[9].boxfull.length > 0
      && puzzlehakas[10].boxfull.length > 0
      && puzzlehakas[11].boxfull.length > 0
          && puzzlehakas[12].boxfull.length > 0
          && puzzlehakas[13].boxfull.length > 0
          && puzzlehakas[14].boxfull.length > 0
          && puzzlehakas[15].boxfull.length > 0
          && puzzlehakas[16].boxfull.length > 0
          && puzzlehakas[17].boxfull.length > 0
          && puzzlehakas[18].boxfull.length > 0) {
    if (donnieplayed == false){
      donnie.play();

      donnieplayed = true;
    }
  }
  else{}
}
*/


function ghostBandit(){
    //if player has ghost mode
  if (game.input.keyboard.justPressed(Phaser.Keyboard.F)) {

    if (ghostmode == false){
      if (controlstext){controlstext.kill();}
      if (controlstext0){
        controlstext0.scale.setTo(1.2);
      }
      for (var j = 0; j<bandit.length; j++){
      bandit[j].sprite.tint = 0x9933ff;
    }
  //  ghosticon.scale.setTo(1.4)

    ghostmode = true;
    }
    else {
      for (var j = 0; j<bandit.length; j++){
      bandit[j].sprite.tint = 0xe6e6e6;
    }

      if (controlstext0){
        controlstext0.scale.setTo(1);
      }
  //  ghosticon.scale.setTo(0)
    ghostmode = false;
  }
  }
  else{
  }

}


function banditScan() {

//scan init
  if (scan1init == true){
    scan1 = staticimages.create(game.camera.x, game.camera.y, 'scan1');
    scan1.tint = 0x000000;
    scan1.anchor.setTo(0);
    scan1.scale.setTo(1);
    scan1Moving = true;
    scan1init = false;
    if (controlstext2){controlstext2.scale.setTo(1.2);}
  }
  else{}

//scan move
if (scan1Moving == true){
  if (scan1.x < game.camera.x + 800){
    scan1.x+=scanspeed;
    voice.scale.setTo(0.5);
  }
  else {
   if (scan1) {
   voice.scale.setTo(0);
   scan1.kill();
   if (controlstext2){controlstext2.scale.setTo(1);}
    }
    scan1Moving=false;
    scan1init=false;
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
      if (ball.x > game.camera.x //&& ball.x < game.camera.x + 800
      //  && ball.y > game.camera.y && ball.y < game.camera.y + 600
      ){
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

var notearray = [];

function loopGroup1(ball, left, right){
  var leftx = left.sprite.x
  var lefty = left.sprite.y
  var rightx = right.sprite.x
  var righty = right.sprite.y
  var obj = ball.sprite;
  var direction = ball.totheright;
//  var note = ball.notesprite;

//  var npc = ball.npc1.scale;
//  var shadow = ball.npc1shadow.scale;
//  var shadow2 = ball.npc2shadow.scale;
//  var shadow3 = ball.npc3shadow.scale;
  var sound = ball.sound;
//  var inside = ball.inlooper;
  var poss = ball.banditPossession

  if (poss == false){
    if (lefty == righty){
    if (rightx > leftx){

            if (obj.y > lefty - 60
              && obj.y < lefty + 60
              && obj.x > leftx-40
              && obj.x < rightx+40){

                if (direction == true) {

                  obj.x += looperspeed;

                    if (obj.x > rightx) {
                    colorpicker = Math.random() * 0xffffff;
                    sound.play();
                    notearray = [];
                    notearray.push(obj);

                    direction = false;
                    }
                  }
                else {

                  obj.x -= obj.vx;
                  if (obj.x < leftx) {
                  colorpicker = Math.random() * 0xffffff;
                  sound.play();
                  notearray = [];
                  notearray.push(obj);
                  direction = true;
                  }
                  }
                }
              }
    //if rightx < leftx
    else {

                  if (obj.y > righty - 60
                    && obj.y < righty + 60
                    && obj.x > rightx-40
                    && obj.x < leftx+40){

                      if (direction == true) {
                        obj.x += looperspeed;

                          if (obj.x > leftx) {
                          colorpicker = Math.random() * 0xffffff;
                          sound.play();
                          notearray = [];
                          notearray.push(obj);

                          direction = false;
                          }
                        }
                      else {
                        obj.x -= obj.vx;
                        if (obj.x < rightx) {
                        colorpicker = Math.random() * 0xffffff;
                        sound.play();
                        notearray = [];
                        notearray.push(obj);
                        direction = true;
                        }
                        }
                      }
                    }
    }
  }
        return direction;

}



function rainer(rain){
  var rsprite = rain.sprite;
  rsprite.scale.setTo(0.4);

  if (rsprite.y < 630){
    rsprite.y+=rainspeed;

  }
  else {
    rsprite.y = 0-30;
  //  rsprite.scale.setTo(0.4);
  }
}

function rainFall(){
  for (var i=0; i<raindrops;i++){
    rainer(rain[i]);
  }



  casa.x = bandit[0].sprite.x+30;
  casa.y = bandit[0].sprite.y -20;
  casa2.x = bandit[0].sprite.x+48;
  casa2.y = bandit[0].sprite.y -4;

}


function gofull() {
    if (game.scale.isFullScreen)
    { game.scale.stopFullScreen();}
    else  { game.scale.startFullScreen(false); }
  }

/*
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
*/

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
/*
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
*/
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


var walktimer = 0;

function moveCamera() {
//follow bandit
  for(var i = 0; i < pagenumber; i++){
    xpages[i].pageturn = camMoverX(xpages[i]);
  //  ypages[i].pageturn = camMoverY(ypages[i]);
//    negxpages[i].pageturn = camMoverXneg(negxpages[i]);
//    negypages[i].pageturn = camMoverYneg(negypages[i]);
  }

//icons
  yellowtarget.x = game.camera.x + 40;

  /*
  menu.x = game.camera.x + 400; //center x (800x600)
  menu.y = game.camera.y + 300; //center y (800x600)
*/

  for (var i = 0; i < balls.length; i++){
    balls[i].notesprite.x = game.camera.x + 89 //760
  }

  iconbud.x = yellowtarget.x;

  iconbud2.x = game.camera.x + 760;

//  ghosticon.x = yellowtarget.x + 40

  }



function iconUpdate(){
  if(grabbed.length>0){
    if(iconbud){
      iconbud.kill()
    }
    iconbud = projectiles.create(40, 40, 'skull'+(grabbed[0]+1))
    iconbud.scale.setTo(0.5);
    iconbud.anchor.setTo(0.5);
    iconbud.x = yellowtarget.x;
    iconbud.y = yellowtarget.y;
    text.kill();
    text = game.add.text(iconbud.x, iconbud.y+34, grabbed.length, style8);
    text.scale.setTo(0.6);
    text.anchor.set(0.5);
}

   else {
    if(iconbud){
      iconbud.kill()
    }
    text.kill();
  }
/*
  if (text){
  //  if (starttimer == true){
    textsizetimer++

    if (textsizetimer < 90){
      iconbud.scale.setTo(1);
    //  text.scale.setTo(0.65);
    }
    else if (textsizetimer < 100){
      iconbud.scale.setTo(.7);
//      text.scale.setTo(0.6);
    }
    else {
      textsizetimer = 0;
  //    starttimer = false;
  //  }
  }
  }
  */
}

var bellcrush = false;
var hakacrush = false;
var statuecrush = false;

var backway = false;
    //player movement
     function playerMove() {



        if (ghostmode == true){
               banditmovespeed = 22;
               if (ONinit == false){
                 onsound.play();
                 ONinit = true;}
             }
        else{
             if (ONinit == true){
               offsound.play();
               ONinit = false;
             }
             banditmovespeed = 10;
           }

        if (statuegrabbed == true){
          banditmovespeed = 5;
        }

        if (ghostmode == true
        || bypassing == true){
          bypassicon2.scale.setTo(0);
          bypassicon.scale.setTo(1);
        }
        else{
          bypassicon2.scale.setTo(1);
          bypassicon.scale.setTo(0);
        }

        //page 1 backwards block path
        if (bandit[6].sprite.y < 0 && bandit[6].sprite.x < leftmargin1+300){
          for (var i = 0;i<banditparts;i++){
            bandit[i].sprite.x = (leftmargin1+600)-(i*14);
          }
        }

        bypassicon.x = bandit[0].sprite.x
        bypassicon.y = bandit[0].sprite.y-46
        bypassicon2.x = bandit[0].sprite.x
        bypassicon2.y = bandit[0].sprite.y-46
        voice.x = bandit[0].sprite.x//-28
        voice.y = bandit[0].sprite.y//-14

        //crystal blocks path
        if (puzzlesolved == false){
          if (bandit[0].sprite.y == pageend && bandit[0].sprite.x > rightmargin2-100){
            crystaldoorblow1.scale.setTo(1);
            nosound.play();
            for (var i = 0; i < bells.length; i++){
              if (bells[i].grabinit == true){
                bells[i].sound.play();
              }
            }
              for (var i = 0;i<banditparts;i++){
                bandit[i].sprite.x = (rightmargin2-280)-(i*14);
              }
          }
          else{ crystaldoorblow1.scale.setTo(0);}
        }

        if (puzzle2solved == false){
          if (bandit[0].sprite.y == pageend && bandit[0].sprite.x > rightmargin3-100){
            crystaldoorblow2.scale.setTo(1);
            nosound.play();
            for (var i = 0; i < bells.length; i++){
              if (bells[i].grabinit == true){
                bells[i].sound.play();
              }
            }
              for (var i = 0;i<banditparts;i++){
                bandit[i].sprite.x = (rightmargin3-280)-(i*14);
              }
          }
          else{ crystaldoorblow2.scale.setTo(0);}
        }
        else{


          if (restored == false){
            if (puzzlehakas[14].boxfull > 0){

            for (var i = 0; i < bellnumber; i++){
                  bells[i].sprite.scale.setTo(0.6);
                  bells[i].crushedsprite.scale.setTo(0);
                }

                for (var i = 0; i < trees.length; i++){
                  trees[i].sprite.scale.setTo(0);
                  trees[i].spritebloom.scale.setTo(0.8)
                }


                   for (var i = 0; i < loopmachinenumber; i++){
                         loopmachinesleft[i].sprite.scale.setTo(0.44);
                         loopmachinesleft[i].crushedsprite.scale.setTo(0);
                           loopmachinesright[i].sprite.scale.setTo(0.44);
                           loopmachinesright[i].crushedsprite.scale.setTo(0);
                         }

                   for (var i = 0; i < puzzlenumber; i++){
                         puzzlehakas[i].sprite.scale.setTo(0.5);
                         puzzlehakas[i].crushedsprite.scale.setTo(0);
                       }
                   flash.tint = 0xffffff
                   flash1.tint = 0xffffff
                   flash2.tint = 0xffffff
                   flash3.tint = 0xffffff
                    flash2.animations.play('gowhirl', 20, true);
                    aha.play();
                    baker.stop();
                    rain.stop();
                    startgo = false;
                    rainspeed = 0.8;
                    restored = true;

                   }
                   }
                   else {
                     bandit[0].sprite.tint = Math.random() * 0xffffff
                   }


          backway = true;
        }
/*
        if (puzzle3solved == false){
          if (bandit[0].sprite.y == pagestart+yhop && bandit[0].sprite.x > leftmargin4+500){
            crystaldoorblow3.scale.setTo(1);
            nosound.play();
            for (var i = 0; i < bells.length; i++){
              if (bells[i].grabinit == true){
                bells[i].sound.play();
              }
            }
              for (var i = 0;i<banditparts;i++){
                bandit[i].sprite.x = (leftmargin4+160)-(i*14);
              }
          }
          else{ crystaldoorblow3.scale.setTo(0);}
        }
        else {
        }
*/
var animationgo = false;
var animationtimer = 0;
var crushinit = false;

       if (boxcrush == true){

         for (var i = 0; i < lootboxnumber; i++){
           if (bandit[0].sprite.y == lootboxes[i].sprite.y
             && casa.x > lootboxes[i].sprite.x-70
             && casa.x < lootboxes[i].sprite.x+30)
             {
               lootboxes[i].sprite.scale.setTo(0);
               lootboxes[i].crushedsprite.scale.setTo(0.4);
               if (controlstext3){controlstext3.kill();}
               if (lootboxes[i].crushinit == false){
                 crushsound[Math.floor(Math.random()*2)].play();
                 lootboxes[i].crushinit = true;
               }
             }
           }


         for (var i = 0; i < bellnumber; i++){
           if (bandit[0].sprite.y == bells[i].sprite.y
             && casa.x > bells[i].sprite.x-70
             && casa.x < bells[i].sprite.x+30)
             {
               bells[i].sprite.scale.setTo(0);
               bells[i].crushedsprite.scale.setTo(0.6);
               if (bells[i].crushinit == false){
                 bells[i].sound.play();
                 bells[i].crushinit = true;
               }
             }
           }

           for (var i = 0; i < loopmachinenumber; i++){
             if (bandit[0].sprite.y == loopmachinesleft[i].sprite.y
               && casa.x > loopmachinesleft[i].sprite.x-70
               && casa.x < loopmachinesleft[i].sprite.x+30)
               {
                 loopmachinesleft[i].sprite.scale.setTo(0);
                 loopmachinesleft[i].crushedsprite.scale.setTo(0.44);
                 if (loopmachinesleft[i].crushinit == false){
                   crushsound[Math.floor(Math.random()*2)].play();
                   loopmachinesleft[i].crushinit = true;
                 }
               }
               if (bandit[0].sprite.y == loopmachinesright[i].sprite.y
                 && casa.x > loopmachinesright[i].sprite.x-70
                 && casa.x < loopmachinesright[i].sprite.x+30)
                 {
                   loopmachinesright[i].sprite.scale.setTo(0);
                   loopmachinesright[i].crushedsprite.scale.setTo(0.44);
                   if (loopmachinesright[i].crushinit == false){
                     crushsound[Math.floor(Math.random()*2)].play();
                     loopmachinesright[i].crushinit = true;
                   }
                 }
             }


           for (var i = 0; i < puzzlenumber; i++){
             if (bandit[0].sprite.y == puzzlehakas[i].sprite.y
               && casa.x > puzzlehakas[i].sprite.x-70
               && casa.x < puzzlehakas[i].sprite.x+30)
               {
                 puzzlehakas[i].sprite.scale.setTo(0);
                 puzzlehakas[i].crushedsprite.scale.setTo(0.5);
                 if (puzzlehakas[i].crushinit == false){
                   crushsound[Math.floor(Math.random()*2)].play();
                   puzzlehakas[i].crushinit = true;
                 }
               }
             }
       }




       if (godmode == true){

         if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                   for (var j = 0; j < banditmovespeed; j++){
                  for (var i = 0; i < bandit.length; i++){
                   bandit[i].sprite.x --;}
                 }

               }
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
  /*
       if (game.input.keyboard.justPressed(Phaser.Keyboard.Q))  {
        menu.scale.setTo(menusize);
        menusize = 1 - menusize;
                      }
*/

                           }

  //     else if (cutscene == true){
  //       var t = 0;
  //       t++;
  //     }

//map location booleans
       else {


         for (var i = 0; i < bandit.length; i++){ //THIS IS THE MAIN FOR LOOP FOR PLAYER MOVE

//bandit left and right
       if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                 for (var j = 0; j < banditmovespeed; j++){
            //    for (var i = 0; i < bandit.length; i++){
                 bandit[i].sprite.x --;
                 b_marginRules();
            //    }
              }
              walktimer++;
              if (statuegrabbed == true){
              if (walktimer>120){
              walksound[1].play();
              walktimer=0;
            }
          }
              else if (ghostmode == true){
                if (walktimer>60){
                walksound[0].play();
                walktimer=0;
              }
              }
              else {
                if (walktimer>100){
                walksound[0].play();
                walktimer=0;
              }
              }
            }

       if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                for (var j = 0; j < banditmovespeed; j++){
            //    for (var i = 0; i < bandit.length; i++){
                 bandit[i].sprite.x ++;
                 b_marginRules();
            //      }
                }
                walktimer++;
                if (statuegrabbed == true){
                if (walktimer>120){
                walksound[1].play();
                walktimer=0;
              }
            }
                else if (ghostmode == true){
                  if (walktimer>60){
                  walksound[0].play();
                  walktimer=0;
                }
                }
                else {
                  if (walktimer>100){
                  walksound[0].play();
                  walktimer=0;
                }
              }
            }


var leftfoot = false;
/*
     if (game.input.keyboard.justPressed(Phaser.Keyboard.Q))  {
      menu.scale.setTo(menusize);
      menusize = 1 - menusize;
    }*/

    if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR))  {
      if (scan1) {
        scan1.kill();}
      if (controlstext2){controlstext2.kill();}

      for (var j = 0;j< balls.length;j++){
      if (balls[j].sprite.x > game.camera.x
        && balls[j].sprite.x < game.camera.x+800){
      balls[j].scan1off = true;
    }
    }

    for (var j = 0;j< bells.length;j++){
    if (bells[j].sprite.x > game.camera.x
      && bells[j].sprite.x < game.camera.x+800){
    bells[j].scan1off = true;
  }
  }
      scan1init = true;
      }

if (puzzle2solved == true){
  if (game.input.keyboard.isDown(Phaser.Keyboard.C))  {
    casa.scale.setTo(0);
    casa2.scale.setTo(1);
    boxcrush = true;
  }
  else {
    boxcrush = false;
    casa.scale.setTo(1);
    casa2.scale.setTo(0);
  }
}
                    }

                    }
                 }



var boxcrush = false;

function marginer(obj) {
  var ob = obj.sprite

if (ob.x > leftmargin1-20 && ob.x < rightmargin1+20){
            if (backway == true)    {
                  if (ob.y >= pageend && ob.x > rightmargin1){
                     ob.x = leftmargin2;
                     ob.y = pagestart;
                     }
                  else if (ob.y == pagestart && ob.x < leftmargin1) {
                       ob.y = pageend;
                       ob.x = rightmargin6;
                     }
                 else if (ob.x < leftmargin1) {
                      ob.y = ob.y - yhop;
                      ob.x = rightmargin1;
                    }
                  else if (ob.x > rightmargin1) {
                       ob.y = ob.y + yhop;
                       ob.x = leftmargin1;   }
                     }
            else{
              if (ob.y >= pageend && ob.x > rightmargin1){
                 ob.x = leftmargin2;
                 ob.y = pagestart;
                 }
              else if (ob.x < leftmargin1) {
                   ob.y = ob.y - yhop;
                   ob.x = rightmargin1;
                 }
              else if (ob.x > rightmargin1) {
                   ob.y = ob.y + yhop;
                   ob.x = leftmargin1;   }
            }
                   }

 else if (ob.x > leftmargin2-20 && ob.x < rightmargin2+20){
                    if (ob.y == pagestart && ob.x < leftmargin2){
                       ob.x = rightmargin1;
                       ob.y = pageend;
                       }
                    else if (ob.y == pageend && ob.x > rightmargin2){
                       ob.x = leftmargin3;
                       ob.y = pagestart;
                       }
                    else if (ob.x < leftmargin2) {
                         ob.y = ob.y - yhop;
                         ob.x = rightmargin2;
                       }
                    else if (ob.x > rightmargin2) {
                         ob.y = ob.y + yhop;
                         ob.x = leftmargin2;   }
                       }


else if (ob.x > leftmargin3-20 && ob.x < rightmargin3+20){
                    if (ob.y == pagestart && ob.x < leftmargin3){
                       ob.x = rightmargin2;
                       ob.y = pageend;
                       }
                       else if (ob.y == pageend && ob.x > rightmargin3){
                       ob.x = leftmargin4;
                       ob.y = pagestart;
                       }
                       else if (ob.x < leftmargin3) {
                         ob.y = ob.y - yhop;
                         ob.x = rightmargin3;
                       }
                       else if (ob.x > rightmargin3) {
                         ob.y = ob.y + yhop;
                         ob.x = leftmargin3;   }
                       }


  else if (ob.x > leftmargin4-20 && ob.x < rightmargin4+20){

    if (ob.y <= pagestart && ob.x < leftmargin4){
       ob.x = rightmargin3;
       ob.y = pageend;
       }
       else if (ob.y >= pageend && ob.x > rightmargin4){
       //ob.x = leftmargin5;
       //ob.y = pagestart;
       }
       else if (ob.x < leftmargin4) {
         ob.y = ob.y - yhop;
         ob.x = rightmargin4;
       }
       else if (ob.x > rightmargin4) {
         ob.y = ob.y + yhop;
         ob.x = leftmargin4;   }
       }

       else if (ob.x > leftmargin5-20 && ob.x < rightmargin5+820){

         if (ob.y <= pagestart && ob.x < leftmargin5){
            ob.x = rightmargin4;
            ob.y = pageend;
            }
            else if (ob.y >= pageend && ob.x > rightmargin5+800){
            ob.x = leftmargin1;
            ob.y = pagestart;
            }
            else if (ob.x < leftmargin5) {
          //    ob.y = ob.y - yhop;
          //    ob.x = rightmargin5;
            }
            else if (ob.x > rightmargin5) {
          //    ob.y = ob.y + yhop;
          //    ob.x = leftmargin5;
        }
            }

}

 function b_marginRules() {
   for (var i = 0; i<bandit.length;i++){
     marginer(bandit[i]);
 }
 }

 var startdelay = false;
 var startgo = false;
 var starttimer = 0;

function topBoundary(ball){
  var obj = ball.sprite;
  var lake2 = ball.lake2;
//  var looped = ball.inlooper
  //lake 2
  if (obj.y > pageend){
    lake2 = true;
    }

    if (lake2 == true){
      if(obj.y > pageend){
        obj.y -= 1;
    //    looped = false;
      }
      else {
        lake2 = false;
      }
    }

    return lake2;
  }

function bottomBoundary(ball){
  var obj = ball.sprite;
  var lake3 = ball.lake3;
//  var looped = ball.inlooper2;
//  var tossx = ball.tossedx;
  //lake 2
  if (obj.y < pagestart){
    lake3 = true;
    }

    if (lake3 == true){
      if (obj.y < pagestart){
        obj.y += 1;
  //      looped = false;
      }
      else{
        lake3 = false;
      }
    }
    return lake3;
  }

  function endBoundary(ball){
    var obj = ball.sprite;
    var lake4 = ball.lake4;
  //  var looped = ball.inlooper2;
  //  var tossx = ball.tossedx;
    //lake 2
    if (obj.y < pageend && obj.x > rightmargin4){
      lake4 = true;
      }

      if (lake4 == true){
        if (obj.y < pageend){
          obj.y += 1;
    //      looped = false;
        }
        else{
          lake4 = false;
        }
      }
      return lake4;
    }




function puzzleboxes(){



for (var i = 0; i < 8; i++) {
  if (puzzlehakas[i].boxfull.length > 0){
    puzzlehakas[i].crushedsprite.tint = colorpicker
    puzzlehakas[i].sprite.tint = colorpicker
    if (puzzlesolved == false){
    crypttext[i].text.scale.setTo(0);
    }
  }
  else{
    puzzlehakas[i].crushedsprite.tint = 0xffffff;
    puzzlehakas[i].sprite.tint = 0xffffff;
    if (puzzlesolved == false){
    crypttext[i].text.scale.setTo(.6);
  }
  }
}

for (var i = 8; i < 11; i++) {
  if (puzzlehakas[i].boxfull.length > 0){
        puzzlehakas[i].crushedsprite.tint = colorpicker;
        puzzlehakas[i].sprite.tint = colorpicker
        //puzzlehakas[i].sprite.scale.setTo(0.8);
  }
  else{
        puzzlehakas[i].crushedsprite.tint = 0xffffff;
        puzzlehakas[i].sprite.tint = 0xffffff;
      //  puzzlehakas[i].sprite.scale.setTo(0);
  }
}

for (var i = 11; i < 19; i++) {
  if (puzzlehakas[i].boxfull.length > 0){
        puzzlehakas[i].crushedsprite.tint = colorpicker;
        puzzlehakas[i].sprite.tint = colorpicker
  }
  else{
        puzzlehakas[i].crushedsprite.tint = 0xffffff;
        puzzlehakas[i].sprite.tint = 0xffffff;
  }
}
}


function statueUpdate(){
  for (var j = 0; j<loopmachinesleft.length; j++ ){
  loopmachinesleft[j].grabinit = statueMover(loopmachinesleft[j]);
  loopmachinesright[j].grabinit = statueMover(loopmachinesright[j]);
}
  for (var i = 0; i < bells.length; i++){
    bells[i].grabinit = bellMover(bells[i]);
  }
  for (var i = 0; i < lootboxes.length; i++){
    lootboxes[i].grabinit = boxMover(lootboxes[i]);
  }
  swordMover();
}

var bypassing = false;

function boxMover(box){
  var obj = box.sprite
  var crushed = box.crushedsprite
  var grabinit = box.grabinit


      if (game.input.keyboard.isDown(Phaser.Keyboard.D))
      {
        if(controlstext1){controlstext1.scale.setTo(1.2);}
        bypassing = true;
        if (statuegrabbed == false){
          if (bandit[0].sprite.y == obj.y
            && bandit[0].sprite.x > obj.x-70
            && bandit[0].sprite.x < obj.x+100){
              hook.play();
              grabinit = true;
              statuegrabbed = true;
            }
        }
        if (grabinit == true){
          obj.x = bandit[0].sprite.x;
          obj.y = bandit[0].sprite.y;
        }
        else{}

      }
      else {
        if(controlstext1){controlstext1.scale.setTo(1);}
        bypassing = false;
        statuegrabbed = false;
        grabinit = false;
      }

      //broken moves with whole objects
          crushed.x = obj.x
          crushed.y = obj.y




      return grabinit
}

function bellMover(bell){

    var obj = bell.sprite
    var crushed = bell.crushedsprite
    var grabinit = bell.grabinit
    var bellsound = bell.sound

    if (game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
      bypassing = true;
      if (statuegrabbed == false){
        if (bandit[0].sprite.y == obj.y
          && bandit[0].sprite.x > obj.x-70
          && bandit[0].sprite.x < obj.x+100){
            bellsound.play();
            grabinit = true;
            statuegrabbed = true;
          }
      }
      if (grabinit == true){
        obj.x = bandit[0].sprite.x;
        obj.y = bandit[0].sprite.y;
      }
      else{}

    }
    else {
      bypassing = false;
      statuegrabbed = false;
      grabinit = false;
    }
    //else{}
    //broken moves with whole objects
        crushed.x = obj.x
        crushed.y = obj.y

    return grabinit
}

function swordMover(){
  if (game.input.keyboard.isDown(Phaser.Keyboard.D))
  {
    if (statuegrabbed == false){
      if (bandit[0].sprite.y == sword.y
        && bandit[0].sprite.x > sword.x-70
        && bandit[0].sprite.x < sword.x+100){
          hook.play();
          sword.grabinit = true;
          statuegrabbed = true;
        }
    }
    if (sword.grabinit == true){
      sword.x = bandit[0].sprite.x;
      sword.y = bandit[0].sprite.y;
    }
    else{}

  }
  else {
    statuegrabbed = false;
    sword.grabinit = false;
  }
}


function statueMover(loopers) {

  var obj = loopers.sprite
  var crushed = loopers.crushedsprite
  var grabinit = loopers.grabinit

  if (game.input.keyboard.isDown(Phaser.Keyboard.D))
  {
    if (statuegrabbed == false){
      if (bandit[0].sprite.y == obj.y
        && bandit[0].sprite.x > obj.x-70
        && bandit[0].sprite.x < obj.x+100){
          hook.play();
          grabinit = true;
          statuegrabbed = true;
        }
    }
    if (grabinit == true){
      obj.x = bandit[0].sprite.x;
      obj.y = bandit[0].sprite.y;
    }
    else{}

  }
  else {
    statuegrabbed = false;
    grabinit = false;
  }
  //else{}
  //broken moves with whole objects
      crushed.x = obj.x
      crushed.y = obj.y

  return grabinit
}

//ball movement
function ballMove() {

  for(var i=0; i<balls.length; i++){

    if (notearray.includes(balls[i].sprite) == true){
      balls[i].notesprite.scale.setTo(.4);
    }
    else{
      balls[i].notesprite.scale.setTo(0);
    }



  if(balls[i].banditPossession==false){

//    balls[i].orb.x = balls[i].sprite.x;
//    balls[i].orb.y = balls[i].sprite.y;

    for (var j = 0; j < puzzlenumber; j++){
    //puzzle1
    if (balls[i].sprite.x > puzzlehakas[j].sprite.x-puzzlehitbox
      && balls[i].sprite.x < puzzlehakas[j].sprite.x+puzzlehitbox
      && balls[i].sprite.y > puzzlehakas[j].sprite.y-puzzlehitbox
      && balls[i].sprite.y < puzzlehakas[j].sprite.y+puzzlehitbox
      )
      {
        puzzlehakas[j].boxfull.push(i);
      }
      else {
        puzzlehakas[j].boxfull.splice(i);
      }
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

  if (ghostmode == false
    && bypassing == false) {
  //meets player
    if (balls[i].sprite.x > bandit[0].sprite.x-ballmeetsplayerx
      && balls[i].sprite.y > bandit[0].sprite.y-ballmeetsplayery
      && balls[i].sprite.x < bandit[0].sprite.x+ballmeetsplayerx
      && balls[i].sprite.y < bandit[0].sprite.y+ballmeetsplayery) {
  //pick up balls
  if (startdelay == true){
        balls[i].sound.play();
      }
        balls[i].banditPossession = true;
        grabbed.push(i);
        notearray = [];
        notearray.push(balls[i].sprite);
  }
  }

//water areas
      balls[i].lake2 = topBoundary(balls[i]);
      balls[i].lake3 = bottomBoundary(balls[i]);
      balls[i].lake4 = endBoundary(balls[i]);

//scan1 and scan 2
      balls[i].scan1off = ballScan(balls[i]);

//loopers

//if (donnieplayed == false){
if (startgo == false){
  starttimer++;
//  console.log('waiting')
  if (starttimer > 6000){
    startdelay = true;
    startgo = true;
  }
}
else{
for (j = 0; j < loopmachinenumber; j++){
balls[i].totheright = loopGroup1(balls[i], loopmachinesleft[j], loopmachinesright[j]);
}
}
//}


  if (puzzle2solved == false){
      if (bandit[0].sprite.x < 1600){
        if (loopersaway == true){
        loopmachinesleft[0].sprite.x =looperleftx1;
        loopmachinesleft[0].sprite.y =looperlefty1;
        loopmachinesright[0].sprite.x =looperrightx1;
        loopmachinesright[0].sprite.y =looperrighty1;
        loopmachinesleft[1].sprite.x =looperleftx2;
        loopmachinesleft[1].sprite.y =looperlefty2;
        loopmachinesright[1].sprite.x =looperrightx2;
        loopmachinesright[1].sprite.y =looperrighty2;
        loopmachinesleft[2].sprite.x =looperleftx3;
        loopmachinesleft[2].sprite.y =looperlefty3;
        loopmachinesright[2].sprite.x =looperrightx3;
        loopmachinesright[2].sprite.y =looperrighty3;
        loopmachinesleft[3].sprite.x =looperleftx33;
        loopmachinesleft[3].sprite.y =looperlefty33;
        loopmachinesright[3].sprite.x =looperrightx33;
        loopmachinesright[3].sprite.y =looperrighty33;
        loopersaway = false;
        loopershome = true;
      }
    }
  else{
    if (loopershome == true){
    loopmachinesleft[0].sprite.x =looperleftx4;
    loopmachinesleft[0].sprite.y =looperlefty4;
    loopmachinesright[0].sprite.x =looperrightx4;
    loopmachinesright[0].sprite.y =looperrighty4;
    loopmachinesleft[1].sprite.x =looperleftx7-200;
    loopmachinesleft[1].sprite.y =looperlefty7;
    loopmachinesright[1].sprite.x =looperrightx7;
    loopmachinesright[1].sprite.y =looperrighty7;
    loopmachinesleft[2].sprite.x =looperleftx6;
    loopmachinesleft[2].sprite.y =looperlefty6;
    loopmachinesright[2].sprite.x =looperrightx6;
    loopmachinesright[2].sprite.y =looperrighty6;
    loopmachinesleft[3].sprite.x =looperleftx66+50;
    loopmachinesleft[3].sprite.y =looperlefty66;
    loopmachinesright[3].sprite.x =looperrightx66+50;
    loopmachinesright[3].sprite.y =looperrighty66;
    loopershome = false;
    loopersaway = true;
    }
  }
}
  else{
    if (loopersstop == false){
    loopmachinesleft[0].sprite.x =looperleftx1;
    loopmachinesleft[0].sprite.y =looperlefty1;
    loopmachinesright[0].sprite.x =looperrightx1;
    loopmachinesright[0].sprite.y =looperrighty1;
    loopmachinesleft[1].sprite.x =looperleftx2;
    loopmachinesleft[1].sprite.y =looperlefty2;
    loopmachinesright[1].sprite.x =looperrightx2;
    loopmachinesright[1].sprite.y =looperrighty2;
    loopmachinesleft[2].sprite.x =looperleftx3;
    loopmachinesleft[2].sprite.y =looperlefty3;
    loopmachinesright[2].sprite.x =looperrightx3;
    loopmachinesright[2].sprite.y =looperrighty3;
    loopmachinesleft[3].sprite.x =looperleftx33;
    loopmachinesleft[3].sprite.y =looperlefty33;
    loopmachinesright[3].sprite.x =looperrightx33;
    loopmachinesright[3].sprite.y =looperrighty33;
    loopersstop = true;
  }
  }


      //puzzle1
    //  puzzle1(balls[i]);

    //sucks balls into puzzles

    for (var j = 0; j < puzzlenumber; j++){

    if (balls[i].sprite.y == puzzlehakas[j].sprite.y
      && balls[i].sprite.x > puzzlehakas[j].sprite.x - puzzlehitbox
      && balls[i].sprite.x < puzzlehakas[j].sprite.x + puzzlehitbox){
      if (balls[i].sprite.x > puzzlehakas[j].sprite.x){
        balls[i].sprite.x--;
      }
      if (balls[i].sprite.x < puzzlehakas[j].sprite.x){
        balls[i].sprite.x++;
      }
    }
  }
  }

  else { // bandit has the ball

    //balls chase bandit
    //puzzle1 stuff
    for (j = 0; j < puzzlenumber; j++){
    puzzlehakas[j].boxfull.splice(i);
  }

//    if (balls[i].ballreset == false){
  //  balls[i].lake1 = false;
    balls[i].lake2 = false;
    balls[i].lake3 = false;
    balls[i].lake4 = false;
    balls[i].inlooper = false;
  //  balls[i].inlooper2 = false;
  //  balls[i].inlooper3 = false;
//    balls[i].ballreset = true;
//  }

    balls[i].sprite.x = bandit[0].sprite.x;
    balls[i].sprite.y = bandit[0].sprite.y;

  }

  }// end loop
}

var gameisup = false;

function animationUpdate(){
//opening tune
  if (gameisup == false){
    baker.play();
    gameisup = true;
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
  {
    //leftstride
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
      //tossup
      bandit[0].sprite.animations.play('stand', true);
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
      //tossdown
      bandit[0].sprite.animations.play('stand', true);
    }
    else{
    bandit[0].sprite.animations.play('walkleft');
    }
  }
  else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
      {
        //rightstride
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
        {
          //tossup
          bandit[0].sprite.animations.play('stand', true);
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
        {
          //tossdown
          bandit[0].sprite.animations.play('stand', true);
        }
        else{
        bandit[0].sprite.animations.play('walkright');
        }
    }
    else{
      //center
      bandit[0].sprite.animations.play('stand', true);
    }
}


function playerToss() {



           if (game.input.keyboard.justPressed(Phaser.Keyboard.UP))  {
         if(grabbed.length>0){
         for(var j=0; j<grabbed.length; j++){
           var i = grabbed[j]
               tosssound[Math.floor(Math.random()*4)].play();
               notearray = [];
               notearray.push(balls[i].sprite);
               balls[i].sound.play();
               balls[i].tossedy = bandit[0].sprite.y;
               balls[i].tossedx = bandit[0].sprite.x;
               balls[i].sprite.y = bandit[0].sprite.y;
               balls[i].sprite.x = bandit[0].sprite.x;
               balls[i].tossedup = true;
               balls[i].banditPossession = false;
               grabbed.splice(j,1)
               break;
           }
         }
         }

            if (game.input.keyboard.justPressed(Phaser.Keyboard.DOWN))  {

              if(grabbed.length>0){
              for(var j=0; j<grabbed.length; j++){
                var i = grabbed[j];
                    balls[i].tossedy = bandit[0].sprite.y;
                    balls[i].tossedx = bandit[0].sprite.x;
                    balls[i].sprite.y = bandit[0].sprite.y;
                    balls[i].sprite.x = bandit[0].sprite.x;
                    balls[i].tosseddown = true;
                    tosssound[Math.floor(Math.random()*4)].play();
                    notearray = [];
                    notearray.push(balls[i].sprite);
                    balls[i].sound.play();
                    balls[i].banditPossession = false;
                    grabbed.splice(j,1)
                    break;

                }
                }
               }
             }
