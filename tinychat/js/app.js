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
    //     console.log('success');
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
    })
    scrollMessagesToBottom();

    //handle submit button
    $('.input-area').submit((e) => {
        e.preventDefault();
        const data = {
            author: $('#user').val() || 'anonymous',
            content: $('#text-message').val(),
            timestamp: (new Date).getTime(),
            last_edited: (new Date).getTime(),
        }
        //send to server
        // $.post('/addMessage', data, function() {
        //     console.log('sending message to server!');
        // }).fail(function() {
        //     console.error('error sending to server');
        // });

        //update messages in DOM
        const newMessage = createMessage(data);
        messageArea.append(newMessage);

        //auto scrolls to bottom of the message area
        scrollMessagesToBottom();
        //resets text area
        $('#text-message').val('');
    })
}

const createMessage = (message) => {
    const element = document.createElement("div");
    const fromEl = document.createElement("div");
    const timestampEl = document.createElement("div");
    const messageEl = document.createElement("p");

    $(element).addClass("container-el");
    $(fromEl).addClass("from-el")
        .html(message.author)
        .appendTo(element);
    $(messageEl).addClass("message-el")
        .html(message.content)
        .appendTo(element);
    $(timestampEl).addClass("timestamp-el")
        .html(new Date(message.timestamp).toUTCString())
        .appendTo(element);
    return element;
}

const scrollMessagesToBottom = () => {
    $('.message-area').scrollTop($(".message-area")[0].scrollHeight);
}