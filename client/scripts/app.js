// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {
  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages

    App.startSpinner();
    App.fetch((data) => {
      console.log(data);
      Messages.getNew(data);
      MessagesView.render();
      Rooms.addRooms(data);
      RoomsView.render();
      App.stopSpinner();
      // TODO: Make sure the app loads data from the API
      // continually, instead of just once at the start
      //use setInterval to continuously call fetch;
      /*setInterval(()=> {

        var sliced = Messages.updateNew(data);
        MessagesView.render(sliced);
        Messages.updateNew(Messages._data);
        MessagesView.render();
      }, 5000);*/
    });
    setInterval(()=> {


      App.fetch((data) => {
        var $roomSelected = $('option:selected').val();
        console.log('rs', $roomSelected);
        // TODO: Make sure the app loads data from the API
        // continually, instead of just once at the start
        //use setInterval to continuously call fetch;
      /*
      var sliced = Messages.updateNew(data);
      MessagesView.render(sliced);*/
        Messages.getNew(data);
        MessagesView.render(undefined, $roomSelected);
      });


    }, 5000 );

    //in messages make a refresh

    $('#rooms select').on('change', () => {
      var $roomSelected = $('option:selected').val();

      RoomsView.handleChange($roomSelected);
    });

  },


  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      //console.log(data);
      //console.log("this is a test");
      callback(data);
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};