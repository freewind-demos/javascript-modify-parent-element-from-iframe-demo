$(document).ready(function () {
    $('#trigger').click(function () {
        $('#main', window.parent.document).text('Hello from IFrame')
    })
})

