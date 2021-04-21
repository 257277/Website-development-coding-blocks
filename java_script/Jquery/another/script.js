//If the script is in head then we must have to use window.onload and $ function first because if we do not write it first the script loaded first and the stuff of head was not cover by script

$(()=>{
    $('#prepend').click(()=>{
    let text = $('#item').val()
    $('#list').prepend($(`<li>${text}</li>`))///or we can do $('<li>).text(text)
    })
    $('#append').click(()=>{
        let text = $('#item').val()
        $('#list').append($(`<li>${text}</li>`))///or we can do $('<li>).text(text)
        })
})