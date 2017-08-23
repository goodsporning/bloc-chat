(function() {
    function HomeCtrl(Room, $uibModal, $scope) {
      this.rooms = Room.all
      this.openModal = function(){
        $uibModal.open({
          templateUrl: '/templates/form.html',
          controller: 'ModalCtrl as modal'
        })
      }

      $scope.activeRoom = room;

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();

//Room is the Service
