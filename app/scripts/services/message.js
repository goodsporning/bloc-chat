(function(){
  function Message($firebaseArray){
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    Message.getByRoomID = function(roomId){
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };  //first roodId is referencing firebase,
        //2nd one is what we are bringing into the function.
    return Message;
  }


  angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray', Message]);
})();
