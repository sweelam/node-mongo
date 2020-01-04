$(() => {
    $('#title').click(() => getTitle())
})


function getTitle() {
    $.get('http://localhost:3000/title', (data) => {
        alert(data)
    })
}