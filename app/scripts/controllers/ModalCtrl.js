(function() {
    function ModalCtrl(Room, $uibModalInstance) {

      this.addRoom = function(roomName){
        Room.addRoom(roomName)
      }

      this.cancel = function () {
          $uibModalInstance.dismiss('cancel');
      }
    };


    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room','$uibModalInstance', ModalCtrl]);
})();

// index.html <sc
// attach app.js
// inject services to controller as needed
