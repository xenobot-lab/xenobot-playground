var CAMERA, SCENE, RENDERER;
var CANVAS_SIZE = 400
var N = 15;
var PARTICLES = [];
var IMG = {};
var SPHERES = ["images/white.png"];

function init() {
    CAMERA = new THREE.Camera( 26, 1, 1, 10000 );
    CAMERA.position.z = 1000;

    SCENE = new THREE.Scene();

    var x, y, z, theta, sinTheta, cosTheta, dx = dy = 0;
    var r = 500, aa = 1, ra = 0, rb = 152;
    for(var i = 0; i < N; i++) {
        r = generate_random(ra,rb);
        
        theta = generate_random(0, 6.3);
        
        sinTheta = Math.sin(theta);
        cosTheta = Math.cos(theta);

        s = 1.8;
        
        x = r*sinTheta;
        y = r*cosTheta;
        z = generate_random(90,95);
        
        dx = generate_random(-aa,aa);
        dy = generate_random(-aa,aa);
        
        PARTICLES[i] = {'dots':[], 'dx':dx, 'dy':dy};
        add_dot(PARTICLES[i], x,y,z, s, SPHERES[0]);
    }

    RENDERER = new THREE.CanvasRenderer();
    RENDERER.setSize( CANVAS_SIZE, CANVAS_SIZE );
    
    $("screen").appendChild(RENDERER.domElement);
}

function $(id) {
    return document.getElementById(id);
}


for(var i=0; i<SPHERES.length; ++i) {
    IMG[SPHERES[i]] = new Image();
    IMG[SPHERES[i]].src = SPHERES[i];
}



function generate_random(a,b) {
    return a+(b-a)*Math.random();
}



function add_dot(particle, x,y,z,s, texture) {
    var dot = new THREE.Particle( new THREE.ParticleBitmapMaterial( IMG[texture] ) );
    dot.position.x = x;
    dot.position.y = y;
    dot.position.z = z;
    dot.scale.x = dot.scale.y = s;

    particle.dots.push(dot);
    
    SCENE.addObject(dot);
}



function frame() {
    var i,d,d2,dx,dy,nx,ny,theta;
    
    for(i=0; i < N; i++) {
        PARTICLES[i].dots[0].position.x += PARTICLES[i].dx;
        PARTICLES[i].dots[0].position.y += PARTICLES[i].dy;
        
        d = Math.sqrt(PARTICLES[i].dots[0].position.x*PARTICLES[i].dots[0].position.x + PARTICLES[i].dots[0].position.y*PARTICLES[i].dots[0].position.y);
        
        if(d>155) {
            if(0) {
                // simple bounce
                PARTICLES[i].dx *= -1;
                PARTICLES[i].dy *= -1;
            }
            else {
                // bounce to random target
                theta = generate_random(0,6.3);
                nx = 152*Math.sin(theta);
                ny = 152*Math.cos(theta);
                
                d = Math.sqrt(PARTICLES[i].dx*PARTICLES[i].dx + PARTICLES[i].dy*PARTICLES[i].dy);
                
                dx = nx - PARTICLES[i].dots[0].position.x;
                dy = ny - PARTICLES[i].dots[0].position.y;
                
                d2 = Math.sqrt(dx*dx + dy*dy);
                
                PARTICLES[i].dx = d*(dx/d2)
                PARTICLES[i].dy = d*(dy/d2);
            }
        }
    }
    
    RENDERER.render(SCENE, CAMERA);
}

function start() {
    init();
    // currently, all the xenobots have the same speed given by the frame refresh rate
    // we can modify this to simulate actual speed as per the design and position of the bots once we add the force vectors and physics engine
    setInterval(frame, 15); //change the interval time for different speeds
}

