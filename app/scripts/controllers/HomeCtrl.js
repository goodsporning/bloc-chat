(function() {
    function HomeCtrl(Room, $uibModal) {
      var home = this;
      home.rooms = Room.all
      home.activeRoom = null

      home.openModal = function(){
        $uibModal.open({
          templateUrl: '/templates/form.html',
          controller: 'ModalCtrl as modal'
        });
      }
      home.setActiveRoom = function(room){
        home.activeRoom = room;

      }




}

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();

//Room is the Service
