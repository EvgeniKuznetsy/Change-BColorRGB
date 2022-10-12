let colors = [0, 0, 0];
function type(colors) {
    // console.log(typeof colors);
    if (colors[2] < 255) {
        colors[2]++;
    } else {
        colors[2] = 0;
        colors[1]++;
    }
    if (colors[1] === 255) {
        colors[1] = 0;
        colors[0]++;
    }

    document.querySelectorAll('.colDiv').forEach(function (elem) {
        elem.style.background = 'RGB('+colors.join(',')+')';

    })





}
setInterval(() => {
    if (colors[0] > 255) {
        colors = [0, 0, 0];
    }
    type(colors);
}, 100);




