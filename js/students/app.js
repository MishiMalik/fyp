$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Side-Bar//Filter Bar
function openNav() {
    document.getElementById("left-sidebar").style.width = "240px ";
    // document.getElementById("close").style.display = 'block';
    document.getElementById("backdrop").style.display = 'block';
    // document.getElementById("side-btn").style.width = "260px";
    document.getElementById("body").style.overflowY = 'hidden';
}

function closeNav() {
    document.getElementById("left-sidebar").style.width = "0";
    // document.getElementById("close").style.display = 'none';
    document.getElementById("backdrop").style.display = 'none';
    // document.getElementById("side-btn").style.width = "0";
    document.getElementById("body").style.overflowY = 'scroll';
}