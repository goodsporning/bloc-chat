(function(){
  function Room($firebaseArray){
    var Room = {};
    var ref = firebase.database().ref().child("rooms"); //https://blocchat-93532.firebaseio.com/rooms
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.addRoom = function(roomName){
      rooms.$add({name: roomName})
      }

    return Room;
    }

  angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();

//Room is the service and it is calling Firebase
