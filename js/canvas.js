let drawLine = function () {
    let allCanvas = document.querySelectorAll('.canvas');
    for (let i = 0; i < allCanvas.length; i++) {
        const canvas = allCanvas[i];
        const ctx = canvas.getContext('2d');
        let wid = canvas.parentNode.offsetWidth;
        let hgh = canvas.parentNode.offsetHeight;
        canvas.width = wid;
        canvas.height = hgh;
        ctx.strokeStyle = '#f4090a';
        ctx.lineWidth = '1';
        ctx.clearRect(0, 0, wid, hgh);
        ctx.beginPath();
        ctx.moveTo(0 + 3, 0 + 5);
        ctx.lineTo(wid - 1, hgh - 5);
        ctx.moveTo(0 + 3, hgh - 5);
        ctx.lineTo(wid - 1, 0 + 5);
        ctx.stroke();
    }
};



function drawWithTimeout(time) {
    setTimeout(drawLine, time)
}

function initAll() {
    document.addEventListener("DOMContentLoaded", function () {
        drawLine();
        function addEventToBtn() {
            let buttons = document.querySelectorAll('.ever-popup-btn');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', function () {
                    drawLine();
                });
                drawLine();
            }
        }

        setTimeout(addEventToBtn, 500);
        document.body.addEventListener('mouseleave', function () {
            drawWithTimeout(100);
        });
    });
}

initAll();

let drawTriangle = function () { // For triangles with shadow painting
    let allCanvas = document.querySelectorAll('.triangle')
    if (!allCanvas) {
        return
    } else {
        for (let i = 0; i < allCanvas.length; i++) {
            const canvas = allCanvas[i];
            const context = canvas.getContext('2d');
            let wid = 20;
            let hgh = 38;
            canvas.width = wid;
            canvas.height = hgh;
            context.clearRect(0, 0, wid, hgh);
            context.beginPath();
            context.moveTo(6, 19);
            context.lineTo(20, 4);
            context.lineTo(20, 34);
            context.closePath();
            context.shadowColor = "rgba(0,0,0,.15)";
            context.shadowBlur = 3;
            context.shadowOffsetX = -1;
            context.shadowOffsetY = 0;
            context.fillStyle = "#fff";
            context.fill();
        }
    }
};

drawTriangle();

let drawHorisontalLine = function () {
    let allCanvas = document.querySelectorAll('.horisontal-line');
    if (!allCanvas) {
        return
    } else {
        for (let i = 0; i < allCanvas.length; i++) {
            const canvas = allCanvas[i];
            const ctx = canvas.getContext('2d');
            let wid = canvas.parentNode.offsetWidth;
            let hgh = 11;
            let triangleWidth = 28;
            let triangleHeight = 28;
            canvas.width = wid;
            canvas.height = hgh+1;
            ctx.strokeStyle = '#e5e5e5';
            ctx.lineWidth = '1';
            ctx.clearRect(0, 0, wid, hgh);
            ctx.beginPath();
            ctx.moveTo(0, 1);
            ctx.lineTo(wid/2 - triangleWidth/2, 1);
            ctx.lineTo(wid/2, hgh);
            ctx.lineTo(wid/2 + triangleWidth/2, 1);
            ctx.lineTo(wid, 1);
            ctx.stroke();
        }
    }
};

drawHorisontalLine();

(function () {
    window.addEventListener("resize", resizeThrottler, false);
    var resizeTimeout;

    function resizeThrottler() {
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                drawLine();
                drawTriangle();
                drawHorisontalLine();
            }, 300);
        }
    }
}());