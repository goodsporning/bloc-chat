(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all
      this.openModal = function(){
        $uibModal.open({
          templateUrl: '/templates/form.html',
          controller: 'ModalCtrl as modal'
        })
      }
      
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();

//Room is the Service
