var message = document.querySelector('[contenteditable="true"]')

message.addEventListener("input", function(e) {
    if (message.innerText.length > 1000) {
        alert('Remember the shape of the message affects its meaning.\n\nThe medium is also the message.\n\nAre you sure you want to send that email?')
    }
}, false);