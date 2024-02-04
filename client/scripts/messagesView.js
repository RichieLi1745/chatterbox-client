// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    //Grab messages
    //Do something with messages.
  },

  render: function(data = Messages._data, roomname) {
    // TODO: Render _all_ the messages.
    //iterate through data


    this.$chats.html('');
    for (msg of data) {

      if (msg.roomname === roomname || roomname === undefined) {
        this.renderMessage(msg);
      }

      //console.log(msg);
    }
  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};