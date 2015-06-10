/**
 * Created by midas on 07/06/15.
 */


// create an new instance of a pixi stage
var stage = new PIXI.Stage(0x0212223);
// create a renderer instance
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

// create a new Sprite using the texture
var bunny = new PIXI.Sprite.fromImage("assets/bunny.png");

bunny.position.set(200, 230);

stage.addChild(bunny);

createParticles();

animate();

function createParticles() {
    for (var i = 0; i < 40; i++) {
        // create a new Sprite using the texture
        var bunny = new PIXI.Sprite.fromImage("assets/bunny.png");
        bunny.xSpeed = (Math.random() * 20) - 10;

        bunny.ySpeed = (Math.random() * 20) - 10;

        bunny.tint = Math.random() * 0xffffff;

        bunny.rotation = Math.random() * 6;
        stage.addChild(bunny);
    }
}

function animate() {
    // render the stage
    var i;
    for(i = 0; i < stage.children.length; i++) {
        stage.children[i].x += stage.children[i].xSpeed;
        stage.children[i].y += stage.children[i].ySpeed;
    }
    renderer.render(stage);

    requestAnimationFrame(animate);
}