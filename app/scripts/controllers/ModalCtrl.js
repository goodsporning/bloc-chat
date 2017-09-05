(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
      var modal = this;

      modal.addRoom = function(roomName){
        Room.addRoom(roomName);
        $uibModalInstance.close();
      }

      modal.cancel = function(){
        $uibModalInstance.dismiss('cancel');
      }

      modal.createUsername = function(){
        $cookies.put('blocChatCurrentUser', modal.username);
        $uibModalInstance.close();
      }
    };



    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room','$uibModalInstance','$cookies', ModalCtrl]);
})();

// index.html <sc
// attach app.js
// inject services to controller as needed
