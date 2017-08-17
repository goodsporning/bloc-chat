(function(){
  function Room($firebaseArray){
    var ref = firebase.database().ref();
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    this.Room = rooms;

    return Room;
  }

  angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();
