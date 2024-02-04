// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

  },

  render: function() {
    // TODO: Render out the list of rooms.
    //iterate through Room._data so render a list of unique room names
    for (name of Rooms._data) {
      this.renderRoom(name);
    }
  },

  renderRoom: function(roomname) {
    this.$select.append(`<option value="${roomname}"> ${roomname}</option>`);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

    App.fetch((data) => {
      Messages.getNew(data);
      MessagesView.render(undefined, event);
    });
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
