(function (){
  function BlocChatCookies($cookies, $uibModal){
    var currentUser = $cookies.get('blocChatCurrentUser');
    if(!currentUser || currentUser === ''){
      $uibModal.open({
        templateUrl: '/templates/username.html',
        size: 'sm',
        controller: 'ModalCtrl as modal',
        backdrop: 'static'
      });
    }
  }
  angular
      .module('blocChat')
      .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

//$cookies: Provides read/write access to browser's cookies.
