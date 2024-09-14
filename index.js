let h = false

function rotateBlades() {
    const blades = document.querySelectorAll('.blade');
    let rotations = 0;
    const interval = setInterval(() => {
        rotations += 1;
        
        blades.forEach((blade, index) => {
            let angle = (rotations * 2) % 10000000;
            blade.style.transform = `rotate(${angle + (index * 90)}deg) translateX(-50%)`;
        });
        if (h) { // 540 degrees = 3 full rotations | (rotations >= 540
            clearInterval(interval);
            setTimeout(() => {
                blades.forEach((blade, index) => {
                    blade.style.transform = 'rotate(0deg) translateX(0)';
                    blade.style.top = `${50 + index * 30}px`;
                    // blade.style.left = '60%';
                    blade.style.left = '540px';
                });
            }, 1000);
            document.getElementById("btSpin").disabled = false;
        }
    }, 10);
}

function showBlade(bladeIndex, word){
    const blade = document.getElementById(bladeIndex);
    blade.innerHTML = word;
    blade.style.opacity = '1';
}

function hit(){
    h = true;
}

function spin(){

    document.getElementById("btSpin").disabled = true;
    h = false;

    const blades = document.querySelectorAll('.blade');
    blades.forEach((blade, index) => {
        blade.style.top = '100px';
        blade.style.left = '60px';

        blade.style.transition = "all 1s";

        blade.style.opacity = '1';
    });
    rotateBlades();
}

//rotateBlades();