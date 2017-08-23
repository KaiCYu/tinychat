/* Stub JS file for your tinychat app! */

$(document).ready(function(){
    
    // Stub AJAX call that demos getting the fixture data
    $.getJSON('/fixtures/fakedata.json', function(data) {
        console.log("success");
        // console.log(data);

        let messages = data.messages;
        let messageArea = $('.message-area');

        // console.log(messages);
        messages.forEach(message => {
            let element = document.createElement("div");
            element.innerHTML = message.content;
            // console.log('message area', messageArea);
            console.log('element', element);
            messageArea.append(element);
        })


    }).done(function() {
        console.log("another success message");

    }).fail(function() {
        console.error("error");
    }).always(function() {
        console.info("complete");
        //check for new messages, update messages
    });


});
