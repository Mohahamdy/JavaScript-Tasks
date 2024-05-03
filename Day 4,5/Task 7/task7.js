var newWindow;
var moveDirection = 50;
var moveInterval;
function openAndMoveWindow() {
    newWindow = window.open('', 'Window', 'width=100,height=100')
    moveInterval = setInterval(moveWindowContinuously, 100);
}
function moveWindowContinuously() {
    var currentX = newWindow.screenX;
    var currentY = newWindow.screenY;
    var newX = currentX + (moveDirection);
    var newY = currentY + (moveDirection);
    newWindow.moveTo(newX, newY);
    if (newX <= 0 || newX >= 560) {
        moveDirection = -moveDirection;
    }
    console.log(newX)
}
function stop() {
    clearInterval(moveInterval);
}
openAndMoveWindow();

