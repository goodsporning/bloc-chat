(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
      var home = this;
      home.rooms = Room.all;
      home.activeRoom = null;
      home.messages = null; //set messages to null
      home.currentUser = $cookies.get('blocChatCurrentUser');

      home.openModal = function(){
        $uibModal.open({
          templateUrl: '/templates/form.html',
          controller: 'ModalCtrl as modal'
        });
      }
      home.setActiveRoom = function(room){
        home.activeRoom = room;
        home.messages = Message.getByRoomID(room.$id)
            //get messages when the room selected is active
      }
    }

      angular
          .module('blocChat')
          .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();

//Room is the Service
