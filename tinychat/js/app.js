$(document).ready(function(){
    //route for fake JSON data
    $.getJSON('/fixtures/fakedata.json', function() {
        console.log("success");
    }).done(function(data) {
        console.log("another success message");
        displayMessages(data);
    }).fail(function(err) {
        console.error(err);
    }).always(function() {
        console.info("complete");
    });

    //route for real data
    // $.get('/getMessage', function(data) {
    //     displayMessages(data);
    // }).fail(function(err) {
    //     console.error(err);
    // })
});

const displayMessages = (data) => {
    var messages = data.messages;
    const messageArea = $('.message-area');

    //display messages from server/JSON
    messages.forEach(message => {
        const messageEl = createMessage(message);
        messageArea.append(messageEl);
        messageArea.append('<br></br>');
    })

    //handle submit button
    $('.input-area').submit((e) => {
        e.preventDefault();
        const data = {
            author: $('#user').val(),
            content: $('#text-message').val(),
            timestamp: (new Date).getTime(),
            last_edited: (new Date).getTime(),
        }
    //write to JSON file or send to server
        // $.post('/addMessage', data, function() {
        //     console.log('sending message to server!');
        // }).fail(function() {
        //     console.error('error sending to server');
        // });

        //update messages in DOM
        const newMessage = createMessage(data);
        messageArea.append(newMessage);
        // messageArea.append('<br></br>');

        //resets text area
        $('#text-message').val('');
    })
}

const createMessage = (message) => {
    const element = document.createElement("div");
    const fromEl = document.createElement("div");
    const timestampEl = document.createElement("div");
    const messageEl = document.createElement("p");

    $(element).addClass('container-el');
    $(fromEl).addClass('from-el')
        .html(message.author)
        .appendTo(element);
    $(timestampEl).addClass('from-el')
        .html(new Date(message.timestamp).toUTCString())
        .appendTo(element);
    $(messageEl).addClass('message-el')
        .html(message.content)
        .appendTo(element);

    return element;
}
