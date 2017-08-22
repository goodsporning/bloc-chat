(function(){
  function Room($firebaseArray){
    var Room = {};
    var ref = firebase.database().ref().child("rooms"); //https://blocchat-93532.firebaseio.com/rooms
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.addRoom = function(roomName){
      rooms.$add({name: roomName})
    }


    // Room.add = function(room){
    //   room.$add({name: "rooms"}).then(function(ref){
    //     var id = ref.key;
    //     list.$indexFor(id); //returns location in the array
    //   });

      //From Firebase Docs'
    // }
//     var list = $firebaseArray(ref);
//     list.$add({ foo: "bar" }).then(function(ref) {
//       var id = ref.key;
//       console.log("added record with id " + id);
//       list.$indexFor(id); // returns location in the array
// });

    return Room;
  }

  // would think I would need to create the room for room.add here outside of the service

  angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();

//Room is the service and it is calling Firebase
