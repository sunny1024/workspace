$(document).ready(function () {
    $("tr:odd").css("background-color", "yellow");
    $("tr:even").css("background-color", "white");
    $("tr").mouseover(function () {
        $("tr").css("fontWeight", "bold")
    });
    $("tr").mouseout(function () {
        $("tr").css("fontWeight", "normal")
    });
});
