//comando para establecer la conexion
var socket = io();
var label = $('#lblNuevoTicket');
socket.on('connect', function() {
    console.log('Conectado al servidor');

});
socket.on('disconnect', function() {
    console.log('Desconecado al servidor');
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);

})

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
        label.css("background-color", "#F06951");
        label.css("border-radius", "10px");
        label.css("padding", "20px");
        label.css("box-shadow", "0 1px 1px 0 rgba(0,0,0,.1), 0 -1px 2px 0 rgba(0,0,0,.1)");

    });
})