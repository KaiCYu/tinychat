/* Stub JS file for your tinychat app! */
$(document).ready(function(){
    // Stub AJAX call that demos getting the fixture data
    $.getJSON('/fixtures/fakedata.json', function() {
        console.log("success");
    }).done(function(data) {
        console.log("another success message");
        var messages = data.messages;
        const messageArea = $('.message-area');

        //display messages from JSON
        messages.forEach(message => {
            const messageEl = createMessage(message);
            messageArea.append(messageEl);
            messageArea.append('<br></br>');
        })

        //add text event listeners here
        $('.input-area').submit((e) => {
            e.preventDefault();
            const data = {
                id: messages.length + 1,
                author: $('#user').val(),
                content: $('#text-message').val(),
                timestamp: (new Date).getTime(),
                last_edited: (new Date).getTime(),
            }
            console.log('data', data)

            // //write to JSON file or send to server
            // $.post('/addMessage', data, function() {
            //     console.log('sending message to server!');
            // }).fail(function() {
            //     console.error('error sending to server');
            // });

            //add to fake data
            // messages.push(data);

            //update messages in DOM
            const newMessage = createMessage(data);
            messageArea.append(newMessage);
            messageArea.append('<br></br>');
            //resets text area
            $('#text-message').val('');
        })


    }).fail(function(err) {
        console.log(err);
        console.error("error");
    }).always(function() {
        console.info("complete");
    });
});

const createMessage = (message) => {
    const element = document.createElement("div");
    const fromEl = document.createElement("div");
    const timestampEl = document.createElement("div");
    const messageEl = document.createElement("div");

    fromEl.innerHTML = message.author;
    timestampEl.innerHTML = new Date(message.timestamp).toUTCString();
    messageEl.innerHTML = message.content;

    element.append(fromEl);
    element.append(messageEl);
    element.append(timestampEl);
    return element;
}
