var mySceneTLX;
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;
var mirx;
var mirr;
var mirl;
var l1;
var pl1;
var exp1;
var video;
var learnFlag=0;
var initialX1;
var initialX2;
var initialX3;
var k=0;
var p=0;
var fireVertexShader;
var s=1;
var flag=0;
var a;
var b;
var c;
var d=1;
var l2;
var l=1;
var pl2;
var l3;
var anime=0;
var pl3;
var f=0;

var flag;
var flag2;
var r1=-1;
var r2=-1;
var r3=-1;
var newValue1=0;
var newValue2=0;
var newValue3=0;
var flag=0;
var helpContent;
var uu;
var vu;
var uc;
var vc;

var ul;
var vl;
var an=-1;
var slope1;
var slope2;
var slope3;
var animateRay=[];
var xAnimate1=4;
var xAnimate2=4;
var xAnimate3=4;
var c1;
var c2;
var c3;
var flagAnimate1=1;
var speed=0.5;
var t;
var m1;
var m2;
var m3;
var mirx;
var mirl;
var mirr;
var sc=1;;

function EXP(){
	PIEremoveElement(l1);
	PIEremoveElement(mesh13);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh1);
	PIEremoveElement(l2);
	PIEremoveElement(l3);
	PIEremoveElement(mesh11);
	PIEremoveElement(mesh12);
	
	PIEremoveElement(mesh20);
	//PIEremoveElement(mesh21);
	PIEaddElement(mesh16);
	//PIEaddElement(mesh15);
	
	PIEremoveElement(fire);
	mesh16.position.set(4.65,.83,0);
	//	mesh15.scale.set(1,1,1);
	 fire.position.set(4,.4,0.015);
	 
//	 fire1.position.set(4,.4,0.015);
	 
	 mesh20.position.set(4,.4,0.01);
	 learnFlag=1;
//	 mesh21.position.set(4,.4,0.01);
	newValue3=-3.3;
	newValue1=-10.7;
	newValue2=-16.2;
l1=drawRay(0.05,1.75,3.2,0.55,'#ffff00',3);
	PIEaddElement(l1);
    pl1=l1;
	
	l2=drawRay(0.05,1.75-.6,3.2,0.55,'#ffff00',3);
	PIEaddElement(l2);
	pl2=l2;
  
	l3=drawRay(0.05,1.75+.6,3.2,0.55,'#ffff00',3);
	PIEaddElement(l3);
	pl3=l3;
	anime=1;
	l=1;
	flag++;
	PIEhideControlElement();
    PIEchangeInputCheckbox(exp1, true);
    PIEchangeInputCheckbox(exp2, false);
	PIEstartAnimation();
	
}
function EXP1(){
//resetExperiment();
initialiseSceneVariables();
   	newValue3=13.8;
	newValue1=2.7;
	newValue2=-5.2;
	
 handleL(newValue3);
 
 handleR(newValue2);
 handleX(newValue1);

//	PIEremoveElement(fire);
//	PIEremoveElement(fire1);
	PIEaddElement(mesh13);
	//PIEremoveElement(mesh2);
	//PIEremoveElement(mesh3);
	//PIEremoveElement(mesh1);
	PIEaddElement(mesh11);
	PIEaddElement(mesh12);
mesh16.position.set(10,0,0);

	//	PIEremoveElement(mesh14);
//	PIEremoveElement(mesh15);
		 PIEremoveElement(mesh24);
		 PIEremoveElement(mesh23);
  PIEremoveElement(mesh16);
 mesh16.position.set(10,0,0);
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh5);
		 PIEremoveElement(mesh6);
		 PIEremoveElement(mesh7);
		 PIEremoveElement(mesh8);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh10);
	 PIEremoveElement(mesh21);
	 PIEremoveElement(mesh22);
	
	PIEremoveElement(mesh20);
//	PIEremoveElement(mesh21);
	 mesh11.position.set(2.3,0.63,0);
		  mesh12.position.set(3.1,0.63,0);
 mesh13.position.set(3.8,.63,0);
 /*r1=-1;
 r2=-1;
 r3=-1;
 newValue1=0;
 newValue2=0;
 newValue3=0;
m1.rotation.z=(0);
	//per1.rotation.z=((0)+(Math.PI/2));
m2.rotation.z=(0);
	//per2.rotation.z=((0)+(Math.PI/2));
	m3.rotation.z=(0);
	*/
if(k==0){	
	PIEaddInputSlider("Upper Mirror", Xdefault, handleR, XminU, XmaxU, Xstep);
  PIEaddInputSlider("Center Mirror", Xdefault, handleX, Xmin, Xmax, Xstep);
  PIEaddInputSlider("Lower Mirror", Xdefault, handleL, XminD, XmaxD, Xstep);
k++;
  }
  
  flag++;
  newValue3=PIEgetInputSlider("Lower Mirror");
	newValue2=PIEgetInputSlider("Upper Mirror");
	newValue1=PIEgetInputSlider("Center Mirror");

    PIEchangeInputCheckbox(exp2, true);
    PIEchangeInputCheckbox(exp1, false);
	an=0;
}

function initialiseHelp(){
  helpContent="<h2>Simple Reflection at mirror help</h2>";
  helpContent=helpContent+"<p>This activity will explain you the concept of Archimedes mirrors used by Greeks to protect themselves from Romans.</p>";
  helpContent=helpContent+"<p><br><br>This animation has a set of mirrors which are used to focus sunlight at a particular point.</p>";
  helpContent=helpContent+"<p><br><br>You can drag the slider in input panel to change the angle of mirrors.</p>";
 helpContent=helpContent+"<p><br><br><h2>Experiment option is also provided to change the angles of mirrors.</h2> </p>";
 
 helpContent=helpContent+"<p><br><br><h2>Learn option is also provide to clear the principle behind Archimedes Mirror.</h2> </p>";
  
  
  helpContent=helpContent+"<p>Drag the slider in input panel to change the angle of mirrors and focus it to a particular ship.</p>";
  helpContent=helpContent+"<p>If all three ray of light will fall on same ship then the ship will begin to burn.</p>"
  helpContent=helpContent+"<p>To see how the ship is Burned Press Learn button.</p>"
  helpContent=helpContent+"<h2>Happy Experimenting</h2>"
    //helpContent +=n 90 degrees</p><h3>Obtuse</h3><p>ees</p><h3>Right Angle</h3><p>Angle is said to be if it is equal to 90 degrees</p><h3>Strainght</h3><p>Angle is said to be if it is equal to 180 degrees</p>";
  PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo(){
  infoContent ="<h2>Simple reflection at mirror concepts</h2>";
  infoContent =infoContent+"<p> Greek inventor Archimedes used a giant mirror, or set of mirrors, to set fire to Roman ships attacking his home city of Syracuse in 212 B.C.</p>";
  infoContent =infoContent+"<p>We are using the same concept to burn the ship in the water.<br> <h3>Archimedes mirror burn a object through a distance even without touching them.</h3> <br> ship will start to burn when all the rays fall on the same ship.</p>";
  infoContent =infoContent+"<p><br><br> To see the ships drowning into sea Press Learn Or Start Button. </p>";
  
  infoContent =infoContent+"<h2>Happy Experimenting.</h2>";
  
  PIEupdateInfo(infoContent);

}
function initialiseSceneVariables() {
 
  mySceneTLX = 0.0;
  mySceneTLY = 3.0;
  mySceneBRX = 4.0;
  mySceneBRY = 0.0;
  mySceneW   = (mySceneBRX - mySceneTLX);
  mySceneH   = (mySceneTLY - mySceneBRY);
  myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
  myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
   Xdefault=0;
  Xstep=0.1;
  Xmin=-20;
  Xmax=8;
  XminU=-26;
  XmaxU=4;
  XminD=-15;
  learnFlag=0;
  exp1="Learn";
  exp2="Experiment";
  uu=["0","0","0","0"];
  vu=["0","0","0","0"];
  uc=["0","0","0","0"];
  vc=["0","0","0","0"];
  ul=["0","0","0","0"];
  vl=["0","0","0","0"];
  //k=0;
  p=0;
  XmaxD=16;
  an=-1;
  sc=1;
 // PIEcamera.position.set( 2,1.5,7.1 );
     //    video = document.getElementById('video');
 

      texture = new THREE.TextureLoader().load( 'back1.png' );
/*var texture = new THREE.VideoTexture( video );
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter;
texture.format = THREE.RGBFormat;
  */	
  var groundMaterial = new THREE.MeshBasicMaterial( {map:texture} );
    var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 8,3.5 ), groundMaterial );
    mesh233.position.z = -1;
	mesh233.position.x += 2;

	mesh233.position.y += 1.5;
	mesh233.recieveShadow = true;
    PIEaddElement( mesh233 );

  
	
}








function handleX(newValue1)
{	
	mirx=newValue1*(Math.PI/180);
	m1.rotation.z=(mirx);
	//per1.rotation.z=((mirx)+(Math.PI/2));
	//per1.rotation.z=(Math.PI/2);
	
	//per1.position.x=1.8+(Math.sin(mirx)*(.5/2));
	PIEremoveElement(pl1);
	l1=drawRay(0.05,1.75,1.8+3.8*(Math.sin(42.5*(Math.PI/180)+2*(mirx))),0.55,'#ffff00',3);
	initialX1=1.8+3.8*(Math.sin(42.5*(Math.PI/180)+2*(mirx)));
	
	//l1=drawRay(1.8,2.5,(1.8+(1*Math.sin((((Math.PI/180)*90))+2*mirx) )),(2.5-(1*Math.cos(mirx))),'#ffff00',3);-4*(Math.cos(42.5*(Math.PI/180)+2*(mirx))
	PIEaddElement(l1);
	//(1.8+(1*Math.sin((2*((Math.PI/2)-mirx))+((Math.PI/180)*2)) ))
    pl1=l1;
     if(newValue1>-7&&newValue1<-4.5)
		r1=3;
	else if(newValue1>-18.5&&newValue1<-16)
		r1=1;
	
	else if(newValue1>-12.4&&newValue1<-10)
		r1=2;
	else
	r1=-1;
	 if(r1==3&&r2==3&&r3==3&&anime==0)
PIEaddElement(mesh3);
	
	
//mesh3.scale.set(1,1,1);
	
	else if(r1==1&&r2==1&&r3==1&&anime==0)
	PIEaddElement(mesh1);	
	//mesh1.scale.set(1,1,1);
	else if(r1==2&&r2==2&&r3==2&&anime==0)
    PIEaddElement(mesh2);		//mesh2.scale.set(1,1,1);

	
	else {
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh2);
	}
	PIErender();
}
function handleR(newValue2)
{
	mirr=newValue2*(Math.PI/180);
	m3.rotation.z=(mirr);
	//per3.rotation.z=((mirr)+(Math.PI/2));
	//per3.position.x=2.3+(Math.sin(mirr)*(.5/2));
	PIEremoveElement(pl3);
	//l3=drawRay(2.3,2.5,(((Math.PI/180)*90)),0.1,'#ffff00',3);2.5-4*Math.cos((53*(Math.PI/180))+2*(mirr))
	l3=drawRay(0.05,1.75+.6,2.3+3.8*(Math.sin(53*(Math.PI/180))+2*(mirr)),0.55,'#ffff00',3);
	initialX2=2.3+3.8*(Math.sin(53*(Math.PI/180))+2*(mirr));
	PIEaddElement(l3);
  pl3=l3;
  
	if(newValue2>-24&&newValue2<-21.5)
		r2=1;
	
	else if(newValue2>-18.5&&newValue2<-16)
		r2=2;
	else if(newValue2>-12.7&&newValue2<-10.4)
		r2=3;
	else
	r2=-1;
	if(r1==3&&r2==3&&r3==3&&anime==0)
			PIEaddElement(mesh3);
	//mesh3.scale.set(1,1,1);

	else if(r1==1&&r2==1&&r3==1&&anime==0)
PIEaddElement(mesh1);
	//mesh1.scale.set(1,1,1);
	
	else if(r1==2&&r2==2&&r3==2&&anime==0)
	PIEaddElement(mesh2);
		
	//mesh2.scale.set(1,1,1);
	else{
		/*mesh1.scale.set(0,0,0);
		mesh2.scale.set(0,0,0);
		mesh3.scale.set(0,0,0);*/
		
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh2);
	}
	
	PIErender();
}
function handleL(newValue3)
{
	mirl=newValue3*(Math.PI/180);
	//mirl=mirl/3;
	m2.rotation.z=(mirl);
	//per2.rotation.z=((mirl)+(Math.PI/2));
	//per2.position.x=1.3+(Math.sin(mirl)*(.5/2));2.5-4*(Math.cos(34*(Math.PI/180)+2*(mirl)))
	PIEremoveElement(pl2);
	
	l2=drawRay(0.05,1.75-.6,1.3+3.8*(Math.sin(34*(Math.PI/180)+2*(mirl))),0.55,'#ffff00',3);
	initialX3=1.3+3.8*(Math.sin(34*(Math.PI/180)+2*(mirl)));
	PIEaddElement(l2);
	pl2=l2;
	if(newValue3>1.8&&newValue3<4.8)
		r3=3;
	
	else if(newValue3>-10.6&&newValue3<-8.5)
		r3=1;
	
	else if(newValue3>-5&&newValue3<-1.9)
		r3=2;
	else
	r3=-1;
	if(r1==3&&r2==3&&r3==3&&anime==0)
	PIEaddElement(mesh3);
		//mesh3.scale.set(1,1,1);
	
	else if(r1==1&&r2==1&&r3==1&&anime==0)
	PIEaddElement(mesh1);
		
	//mesh1.scale.set(1,1,1);
	else if(r1==2&&r2==2&&r3==2&&anime==0)
	PIEaddElement(mesh2);
	
//mesh2.scale.set(1,1,1);
	
	
	else{/*
		mesh1.scale.set(0,0,0);
		mesh2.scale.set(0,0,0);
		mesh3.scale.set(0,0,0);*/
		
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh2);
	}
	PIErender();
}


function drawRay(x,y,x2,y2,col,width){
  //width=width+100000;
  material = new THREE.LineDashedMaterial({color: col,  linewidth: width,gapSize: 5,dashSize:3});

  geometry1 = new THREE.Geometry();
  geometry1.vertices.push(
    new THREE.Vector3( x, y, 0.1),
    new THREE.Vector3( x2,y2, 0.1)
  );
  
  line = new THREE.Line( geometry1, material );
return line;

}



function loadExperimentElements() {

  PIEsetDeveloperName("Punit Agrawal");
  PIEsetExperimentTitle("Archimedes mirrors");
  initialiseSceneVariables();
  initialiseHelp();
  initialiseInfo();
  document.getElementById("start").addEventListener("click", function(){
	if(learnFlag==0){
	flagAnimate1=1;
	xAnimate1=4;
	xAnimate2=4;
	xAnimate3=4;
	for(var i=animateRay.length-1;i>=0;i--)
	{
		PIEremoveElement(animateRay[i]);
		animateRay.pop();
	}
	PIEremoveElement(sl1);
	PIEremoveElement(sl2);
	PIEremoveElement(sl3);
	PIEremoveElement(l1);
	
	PIEremoveElement(l2);
	PIEremoveElement(l3);
	PIErender();}
	});
  document.getElementById("stop").addEventListener("click", function(){
	  for(var i=animateRay.length-1;i>=0;i--)
	{
		PIEremoveElement(animateRay[i]);
		animateRay.pop();
	}
			PIEaddElement(sl1);
			PIEaddElement(sl2);
			PIEaddElement(sl3);
			PIEaddElement(l1);
			PIEaddElement(l2);
			PIEaddElement(l3);
	PIErender();
  });

  //firelagao();
 geometry = new THREE.CircleGeometry(60.2, 132);
//geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0,35, 0 ) );
	
	
  texture = new THREE.TextureLoader().load( 'sun.jpg' );
				geo = new THREE.CircleBufferGeometry( .15, 70, 110 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh = new THREE.Mesh( geo, mat );
				 mesh.position.set(4,2.7,0);
         // mesh.rotateY(Math.PI/2.5);
				PIEaddElement( mesh );
	
  texture = new THREE.TextureLoader().load( 'shipf.png' );
				geo = new THREE.PlaneBufferGeometry( .4, .3 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh11 = new THREE.Mesh( geo, mat );
				 mesh11.position.set(2.3,0.63,0);
         // mesh.rotateY(Math.PI/2.5);
				PIEaddElement( mesh11 );
				
  texture = new THREE.TextureLoader().load( 'shipf.png' );
				geo = new THREE.PlaneBufferGeometry( .4, .3 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh12 = new THREE.Mesh( geo, mat );
				 mesh12.position.set(3.1,0.63,0);
         // mesh.rotateY(Math.PI/2.5);
				PIEaddElement( mesh12 );

  texture = new THREE.TextureLoader().load( 'shipf.png' );
				geo = new THREE.PlaneBufferGeometry( .4, .3 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh13 = new THREE.Mesh( geo, mat );
				 mesh13.position.set(3.8,.63,0);
         // mesh.rotateY(Math.PI/2.5);
				PIEaddElement( mesh13 );
				
	texture = new THREE.TextureLoader().load( 'ship1.png' );
				geo = new THREE.PlaneBufferGeometry( .4, .3 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh1 = new THREE.Mesh( geo, mat );
				 mesh1.position.set(2.3,0.63,0);
         // mesh.rotateY(Math.PI/2.5);
				PIEaddElement( mesh1 );
				
				
  texture = new THREE.TextureLoader().load( 'ship1.png' );
				geo = new THREE.PlaneBufferGeometry( .4, .3 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh2 = new THREE.Mesh( geo, mat );
				 mesh2.position.set(3.1,0.63,0);
         // mesh.rotateY(Math.PI/2.5);
				PIEaddElement( mesh2 );

  texture = new THREE.TextureLoader().load( 'ship1.png' );
				geo = new THREE.PlaneBufferGeometry( .4, .3 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh3 = new THREE.Mesh( geo, mat );
				 mesh3.position.set(3.8,.63,0);
         // mesh.rotateY(Math.PI/2.5);
				PIEaddElement( mesh3 );
				
  texture = new THREE.TextureLoader().load( '7.png' );
			geo = new THREE.PlaneBufferGeometry( .75, .7 );
					 mat = new THREE.MeshBasicMaterial( { map: texture } );
				fire = new THREE.Mesh( geo, mat );
				 fire.position.set(7.8,.2,0);
         // mesh.rotateY(Math.PI/2.5);
				PIEaddElement( fire );
			
  texture = new THREE.TextureLoader().load( '11.png' );
			geo = new THREE.PlaneBufferGeometry( .75, .7 );
					 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh20 = new THREE.Mesh( geo, mat );
				 mesh20.position.set(7.8,.2,0);
         // mesh.rotateY(Math.PI/2.5);
				PIEaddElement( mesh20 );
				
  texture = new THREE.TextureLoader().load( 'shipf.png' );
				geo = new THREE.PlaneBufferGeometry( .75, .7 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh16 = new THREE.Mesh( geo, mat );
				 mesh16.position.set(4.65,.83,0);
    
	
  texture = new THREE.TextureLoader().load( 'ship1.png' );
				geo = new THREE.PlaneBufferGeometry( .75, .7 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh24 = new THREE.Mesh( geo, mat );
				 mesh24.position.set(3,.83,0);
	
  texture = new THREE.TextureLoader().load( 'ship2.png' );
				geo = new THREE.PlaneBufferGeometry( .75, .7 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh23 = new THREE.Mesh( geo, mat );
				 mesh23.position.set(3,.83,0);
				 
  texture = new THREE.TextureLoader().load( 'ship3.png' );
				geo = new THREE.PlaneBufferGeometry( .75, .7 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh4 = new THREE.Mesh( geo, mat );
				 mesh4.position.set(3,.83,0);
				 
  texture = new THREE.TextureLoader().load( 'ship4.png' );
				geo = new THREE.PlaneBufferGeometry( .75, .7 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh5 = new THREE.Mesh( geo, mat );
				 mesh5.position.set(3,.83,0);
  texture = new THREE.TextureLoader().load( 'ship5.png' );
				geo = new THREE.PlaneBufferGeometry( .75, .7 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh6 = new THREE.Mesh( geo, mat );
				 mesh6.position.set(3,.83,0);
  texture = new THREE.TextureLoader().load( 'ship6.png' );
				geo = new THREE.PlaneBufferGeometry( .75, .7 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh7 = new THREE.Mesh( geo, mat );
				 mesh7.position.set(3,.83,0);
  texture = new THREE.TextureLoader().load( 'ship7.png' );
				geo = new THREE.PlaneBufferGeometry( .75, .7 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh8 = new THREE.Mesh( geo, mat );
				 mesh8.position.set(3,.83,0);
  texture = new THREE.TextureLoader().load( 'ship8.png' );
				geo = new THREE.PlaneBufferGeometry( .75, .7 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh9 = new THREE.Mesh( geo, mat );
				 mesh9.position.set(3,.83,0);
				 
  texture = new THREE.TextureLoader().load( 'ship9.png' );
				geo = new THREE.PlaneBufferGeometry( .75, .7 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh10 = new THREE.Mesh( geo, mat );
				 mesh10.position.set(3,.83,0);
				 
  texture = new THREE.TextureLoader().load( 'ship10.png' );
				geo = new THREE.PlaneBufferGeometry( .75, .7 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh21 = new THREE.Mesh( geo, mat );
				 mesh21.position.set(3,.83,0);
				 
  texture = new THREE.TextureLoader().load( 'ship11.png' );
				geo = new THREE.PlaneBufferGeometry( .75, .7 );
				 mat = new THREE.MeshBasicMaterial( { map: texture } );
				mesh22 = new THREE.Mesh( geo, mat );
				 mesh22.position.set(3,.83,0);
    geometry = new THREE.CylinderGeometry(.03,.03,2.1);
    material = new THREE.MeshLambertMaterial({ color: 0x000000 });
   // THREE.GeometryUtils.center( geometry );
	//geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 1.8,0, 0.1 ) );
	per1 = new THREE.Mesh(geometry, material);
	//per1.rotateZ(-(Math.PI/2));
    per1.position.set(-0.05, 2.5-2.1/2, -.20);
    PIEaddElement(per1);
	/*
	geometry = new THREE.CylinderGeometry(.4,.4,7.1);
    material = new THREE.MeshLambertMaterial({ color: 0x0000ff });
   // THREE.GeometryUtils.center( geometry );
	//geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 1.8,0, 0.1 ) );
	per1 = new THREE.Mesh(geometry, material);
	per1.rotateZ(-(Math.PI/2));
    per1.position.set(2, .08, .20);
    PIEaddElement(per1);
	
	*/
	
  texture = new THREE.TextureLoader().load( 'mirror.png' );
			
    geometry = new THREE.PlaneGeometry(.2,.6);
    material = new THREE.MeshLambertMaterial({ map:texture });
   // THREE.GeometryUtils.center( geometry );
	//geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 1.8,0, 0.1 ) );
	m1 = new THREE.Mesh(geometry, material);
	//pr.rotateZ(-(Math.PI/2));
    m1.position.set(-0, 1.75, -0.1);
    PIEaddElement(m1);
	
  texture = new THREE.TextureLoader().load( 'mirror.png' );
			
    geometry = new THREE.PlaneGeometry(.2,.6);
    material = new THREE.MeshLambertMaterial({ map:texture });
   // THREE.GeometryUtils.center( geometry );
	//geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 1.8,0, 0.1 ) );
	m2 = new THREE.Mesh(geometry, material);
	//pr.rotateZ(-(Math.PI/2));
    m2.position.set(-0, 1.75-.6, -0.1);
    PIEaddElement(m2);
  texture = new THREE.TextureLoader().load( 'mirror.png' );
			
    geometry = new THREE.PlaneGeometry(.2,.6);
    material = new THREE.MeshLambertMaterial({ map:texture });
   // THREE.GeometryUtils.center( geometry );
	//geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 1.8,0, 0.1 ) );
	m3 = new THREE.Mesh(geometry, material);
	//pr.rotateZ(-(Math.PI/2));
    m3.position.set(-0, 1.75+.6, -0.1);
    PIEaddElement(m3);
	m3.receiveShadow = false;
	m2.receiveShadow = false;
	m1.receiveShadow = false;
	
	sl1=drawRay(4,2.7,0.05,1.75,'#ffff00',3);
	PIEaddElement(sl1);
	
	sl2=drawRay(4,2.7,0.05,1.75-.6,'#ffff00',3);
	PIEaddElement(sl2);
  

	sl3=drawRay(4,2.7,0.05,1.75+.6,'#ffff00',3);
	PIEaddElement(sl3);
    
	l1=drawRay(0.05,1.75,4.0,0.1,'#ffff00',3);
	//PIEaddElement(l1);
    pl1=l1;
	
	l2=drawRay(0.05,1.75-.6,3,0.1,'#ffff00',3);
	//PIEaddElement(l2);
	pl2=l2;
  
	l3=drawRay(0.05,1.75+.6,5.5,0.1,'#ffff00',3);
	//PIEaddElement(l3);
	pl3=l3;
	
	PIEremoveElement(fire);
	//PIEremoveElement(fire1);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh1);
		//mesh14.scale.set(0,0,0);
		//PIEresetExperiment();
 	 PIEaddInputCheckbox(exp1, false, EXP);
    PIEaddInputCheckbox(exp2,false,EXP1);
 	
  PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);

  
  
}


function resetExperiment(){
anime=0;
   initialiseSceneVariables();
   	newValue3=13.8;
	newValue1=2.7;
	newValue2=-5.2;
	
 handleL(newValue3);
 
 handleR(newValue2);
 handleX(newValue1);
sc=1;
	PIEremoveElement(fire);
//	PIEremoveElement(fire1);
	PIEaddElement(mesh13);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh1);
	PIEaddElement(mesh11);
	PIEaddElement(mesh12);
	//PIEremoveElement(mesh14);
//	PIEremoveElement(mesh15);
		 PIEremoveElement(mesh24);
		 PIEremoveElement(mesh23);
  PIEremoveElement(mesh16);
 mesh16.position.set(10,0,0);
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh5);
		 PIEremoveElement(mesh6);
		 PIEremoveElement(mesh7);
		 PIEremoveElement(mesh8);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh10);
	 PIEremoveElement(mesh21);
	 PIEremoveElement(mesh22);
	
	PIEremoveElement(mesh20);
//	PIEremoveElement(mesh21);
	 mesh11.position.set(2.3,0.63,0);
		  mesh12.position.set(3.1,0.63,0);
 mesh13.position.set(3.8,.63,0);
 r1=-1;
 r2=-1;
 r3=-1;
 newValue1=0;
 newValue2=0;
 newValue3=0;
m1.rotation.z=(0);
	//per1.rotation.z=((0)+(Math.PI/2));
m2.rotation.z=(0);
	//per2.rotation.z=((0)+(Math.PI/2));
	m3.rotation.z=(0);
	//per3.rotation.z=((0)+(Math.PI/2));
	PIEremoveElement(l1);
	PIEremoveElement(l2);
	PIEremoveElement(l3);
	/*l1=drawRay(0.05,1.75,4.0,0.1,'#ffff00',3);
	PIEaddElement(l1);
    pl1=l1;
	
	l2=drawRay(0.05,1.75-.6,3,0.1,'#ffff00',3);
	PIEaddElement(l2);
	pl2=l2;
  
	l3=drawRay(0.05,1.75+.6,5.5,0.1,'#ffff00',3);
	PIEaddElement(l3);
	pl3=l3;
	*/
 PIEchangeInputCheckbox(exp2, true);
    PIEchangeInputCheckbox(exp1, false);
	
}


function updateExperimentElements(time,dt){
if(learnFlag==0)
{
	 t=dt/1000;
	if(flagAnimate1==1)
	{
		xAnimate1-=speed*t;
		if(xAnimate1<0.05) 
			{
				xAnimate1=0.05;
				flagAnimate1=0;
			}
		xAnimate2-=speed*t;
		if(xAnimate2<0.05) 
			{
				xAnimate2=0.05;
				flagAnimate1=0;
			}
		xAnimate3-=speed*t;
		if(xAnimate3<0.05) 
			{
				xAnimate3=0.05;
				flagAnimate1=0;
			}
		slope1=0.24;
		c1=2.7-slope1*4;
		slope2=0.088;
		c2=2.7-slope2*4;
		slope3=0.392;
		c3=2.7-slope3*4;
		animateRay.push(drawRay(4,2.7,xAnimate1,slope1*xAnimate1+c1,'yellow',2));
		PIEaddElement(animateRay[animateRay.length-1]);

		animateRay.push(drawRay(4,2.7,xAnimate2,slope2*xAnimate2+c2,'yellow',2));
		PIEaddElement(animateRay[animateRay.length-1]);

		animateRay.push(drawRay(4,2.7,xAnimate3,slope3*xAnimate3+c3,'yellow',2));
		PIEaddElement(animateRay[animateRay.length-1]);
	}
	else
	{
		animateRay.push(drawRay(4,2.7,0.05,1.75,'yellow',2));
		PIEaddElement(animateRay[animateRay.length-1]);

		animateRay.push(drawRay(4,2.7,0.05,1.15,'yellow',2));
		PIEaddElement(animateRay[animateRay.length-1]);

		animateRay.push(drawRay(4,2.7,0.05,2.35,'yellow',2));
		PIEaddElement(animateRay[animateRay.length-1]);
		if(xAnimate1<initialX1 || xAnimate2<initialX3 || xAnimate3<initialX2)
		{
			xAnimate1+=speed*t;
			if(xAnimate1>initialX1) 
				{
					xAnimate1=initialX1;
					flagAnimate1=0;
				}
			xAnimate2+=speed*t;
			if(xAnimate2>initialX3) 
				{
					xAnimate2=initialX3;
					flagAnimate1=0;
				}
			xAnimate3+=speed*t;
			if(xAnimate3>initialX2) 
				{
					xAnimate3=initialX2;
					flagAnimate1=0;
				}
			slope1=(1.75-0.55)/(0.05-initialX1);
			c1=1.75-slope1*0.05;
			slope2=(1.15-0.55)/(0.05-initialX3);
			c2=1.15-slope2*0.05;
			slope3=(2.35-0.55)/(0.05-initialX2)
			c3=2.35-slope3*0.05;
			animateRay.push(drawRay(0.05,1.75,xAnimate1,slope1*xAnimate1+c1,'yellow',2));
			PIEaddElement(animateRay[animateRay.length-1]);

			animateRay.push(drawRay(0.05,1.15,xAnimate2,slope2*xAnimate2+c2,'yellow',2));
			PIEaddElement(animateRay[animateRay.length-1]);

			animateRay.push(drawRay(0.05,2.35,xAnimate3,slope3*xAnimate3+c3,'yellow',2));
			PIEaddElement(animateRay[animateRay.length-1]);
		}
		else
		{
			animateRay.push(drawRay(0.05,1.75,initialX1,0.55,'yellow',2));
			PIEaddElement(animateRay[animateRay.length-1]);

			animateRay.push(drawRay(0.05,1.15,initialX3,0.55,'yellow',2));
			PIEaddElement(animateRay[animateRay.length-1]);

			animateRay.push(drawRay(0.05,2.35,initialX2,0.55,'yellow',2));
			PIEaddElement(animateRay[animateRay.length-1]);
			PIEaddElement(sl1);
			PIEaddElement(sl2);
			PIEaddElement(sl3);
			PIEaddElement(l1);
			PIEaddElement(l2);
			PIEaddElement(l3);
			PIEstopAnimation();
			for(var i=animateRay.length-1;i>=0;i--)
			{
				PIEremoveElement(animateRay[i]);
				animateRay.pop();
			}
			PIErender();
			xAnimate1=4;
			xAnimate2=4;
			xAnimate3=4;
			flagAnimate1=1;
		}
	}
}
 
 //if(p==1) {
 if(mesh16.position.x>3){
	 mesh16.position.x-=.002;
	 console.log("njss");
 }
 if(mesh16.position.x<=3&&mesh16.position.x>2.75){
	 
	 //PIEremoveElement(mesh16);
	 f=f%11;
	 if(f==0){
		 PIEaddElement(mesh24);
		 PIEremoveElement(mesh23);
 
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh5);
		 PIEremoveElement(mesh6);
		 PIEremoveElement(mesh7);
		 PIEremoveElement(mesh8);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh10);
	 PIEremoveElement(mesh21);
	 PIEremoveElement(mesh22);
	
	// f=1;
	 }
	if(f==1){
		 PIEaddElement(mesh23);
		 PIEremoveElement(mesh24);
 PIEremoveElement(mesh22);
	
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh5);
		 PIEremoveElement(mesh6);
		 PIEremoveElement(mesh7);
		 PIEremoveElement(mesh8);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh10);
	 PIEremoveElement(mesh21);
	 //f=2;
	 }
	 
	if(f==2){
		 PIEaddElement(mesh4);
		 PIEremoveElement(mesh24);
 
	PIEremoveElement(mesh22);
		 PIEremoveElement(mesh23);
		 PIEremoveElement(mesh5);
		 PIEremoveElement(mesh6);
		 PIEremoveElement(mesh7);
		 PIEremoveElement(mesh8);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh10);
	 PIEremoveElement(mesh21);
	 //f=2;
	 }
	if(f==3){
		 PIEaddElement(mesh5);
		 PIEremoveElement(mesh24);
 
	PIEremoveElement(mesh22);
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh23);
		 PIEremoveElement(mesh6);
		 PIEremoveElement(mesh7);
		 PIEremoveElement(mesh8);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh10);
	 PIEremoveElement(mesh21);
	 //f=2;
	 }
	if(f==4){
		 PIEaddElement(mesh6);
		 PIEremoveElement(mesh24);
 PIEremoveElement(mesh22);
	
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh5);
		 PIEremoveElement(mesh23);
		 PIEremoveElement(mesh7);
		 PIEremoveElement(mesh8);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh10);
	 PIEremoveElement(mesh21);
	 //f=2;
	 }
	if(f==5){
		 PIEaddElement(mesh7);
		 PIEremoveElement(mesh24);
 
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh5);
	PIEremoveElement(mesh22);
		 PIEremoveElement(mesh6);
		 PIEremoveElement(mesh23);
		 PIEremoveElement(mesh8);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh10);
	 PIEremoveElement(mesh21);
	 //f=2;
	 }
	if(f==6){
		 PIEaddElement(mesh8);
		 PIEremoveElement(mesh24);
 
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh5);
		 PIEremoveElement(mesh6);
		 PIEremoveElement(mesh7);
	PIEremoveElement(mesh22);
		 PIEremoveElement(mesh23);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh10);
	 PIEremoveElement(mesh21);
	 //f=2;
	 }
	if(f==7){
		 PIEaddElement(mesh9);
		 PIEremoveElement(mesh24);
 
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh5);
		 PIEremoveElement(mesh6);
	PIEremoveElement(mesh22);
		 PIEremoveElement(mesh7);
		 PIEremoveElement(mesh8);
		 PIEremoveElement(mesh23);
		 PIEremoveElement(mesh10);
	 PIEremoveElement(mesh21);
	 //f=2;
	 }
	if(f==8){
		 PIEaddElement(mesh10);
		 PIEremoveElement(mesh24);
 
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh5);
		 PIEremoveElement(mesh6);
		 PIEremoveElement(mesh7);
		 PIEremoveElement(mesh8);
	PIEremoveElement(mesh22);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh23);
	 PIEremoveElement(mesh21);
	 //f=2;
	 }
	if(f==9){
		 PIEaddElement(mesh21);
		 PIEremoveElement(mesh24);
 
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh5);
		 PIEremoveElement(mesh6);
		 PIEremoveElement(mesh7);
	PIEremoveElement(mesh22);
		 PIEremoveElement(mesh8);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh10);
	PIEremoveElement(mesh23);
	}
	if(f==10){
		 PIEaddElement(mesh22);
		 PIEremoveElement(mesh24);
 
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh5);
		 PIEremoveElement(mesh6);
		 PIEremoveElement(mesh7);
	PIEremoveElement(mesh21);
		 PIEremoveElement(mesh8);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh10);
	PIEremoveElement(mesh23);
	}
	 //f=2;
	 if(sc>4){
	 f++;
	 
	 sc=0;}
	 sc++;
	 //fire.scale.set(1,1,1);
	// PIEaddElement(mesh20);
	 an=0;
	// fire.position.x-=.002;
	 //mesh24.position.x-=.002;
	 //mesh20.position.x-=.002;
	 //sc=1;
 }
 
//if(mesh24.position.x<=2.75){
/*while(sc>=0.5){
	console.log("in loop");
	sc-=0.00001;
 *//* PIEremoveElement(mesh16);
	mesh24.position.z=-.5;
	mesh22.position.z=-.5;
	mesh23.position.z=-.5;
	mesh21.position.z=-.5;
	mesh4.position.z=-.5;
	mesh5.position.z=-.5;
	mesh6.position.z=-.5;
	mesh7.position.z=-.5;
	mesh8.position.z=-.5;
	mesh9.position.z=-.5;
	mesh10.position.z=-.5;
		
	mesh24.position.y-=.002;
	 mesh23.position.y-=.002;
	 mesh4.position.y-=.002;
	 mesh5.position.y-=.002;
	 mesh6.position.y-=.002;
	 mesh7.position.y-=.002;
	 mesh8.position.y-=.002;
	 mesh9.position.y-=.002;
	 mesh10.position.y-=.002;
	 mesh21.position.y-=.002;
	 mesh22.position.y-=.002;
	
	/*mesh24.scale.set(sc,sc,sc);
	mesh23.scale.set(sc,sc,sc);
	mesh21.scale.set(sc,sc,sc);
	mesh22.scale.set(sc,sc,sc);
	mesh4.scale.set(sc,sc,sc);
	mesh5.scale.set(sc,sc,sc);
	mesh6.scale.set(sc,sc,sc);
	mesh7.scale.set(sc,sc,sc);
	mesh8.scale.set(sc,sc,sc);
	mesh9.scale.set(sc,sc,sc);
	mesh10.scale.set(sc,sc,sc);
	*/
	//mesh16.scale.set(sc,sc,sc);
	
	
 //mesh16.position.y-=0.0015;
 //fire.position.y-=0.0015;
 //mesh20.position.y-0.0015;
// mesh21.position.y-=.001;
	 
 
// }
//if(sc<=0.5){
//mesh14.scale.set(0,0,0);
 //fire.scale.set(0,0,0);
 //PIEremoveElement(mesh16);
 //PIEremoveElement(fire);
  //PIEremoveElement(mesh20);
		/* PIEremoveElement(mesh22);
		 PIEremoveElement(mesh24);
 
		 PIEremoveElement(mesh4);
		 PIEremoveElement(mesh5);
		 PIEremoveElement(mesh6);
		 PIEremoveElement(mesh7);
		 PIEremoveElement(mesh21);
		 PIEremoveElement(mesh8);
		 PIEremoveElement(mesh9);
		 PIEremoveElement(mesh10);
		 PIEremoveElement(mesh23);
	*/
//PIEstopAnimation();
//}
 //handleL(newValue3);
 
 //handleR(newValue2);
 //handleX(newValue1);
  //}
}
  
	  //console.log("mflksf");
	 





