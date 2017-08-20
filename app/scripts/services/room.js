(function(){
  function Room($firebaseArray){
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room){
      //use firebase method add here
    }

    return Room;
  }

  angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();

//Room is the service and it is calling Firebase
