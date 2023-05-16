$(function() {

  var modalFunc = function () {
    var recordX = 0;
    var recordY = 0;
    var rootElm = document.documentElement;
    var bodyElm = document.body;
    var $modal;
    var $triggerBtn;
  
    $('.modal-trigger').on('click', function () {
      var name = $(this).data('modal');
      var showModalId = '#' + name;
  
      if ($(showModalId).length === 0 || $('.overlay').length > 0) {
        return false;
      }
  
      $modal = $(showModalId);
      $triggerBtn = $(this);
  
      recordX = rootElm.scrollLeft || bodyElm.scrollLeft;
      recordY = rootElm.scrollTop || bodyElm.scrollTop;
  
      createOverlay();
      $modal.addClass('isDisplay');
  
    });
  
    $('.isCloseModal, .overlay').on('click', function () {
      $modal.removeClass('isDisplay');
      $('.overlay').remove();
      $modal.removeAttr('style');
      window.scrollTo(recordX, recordY);
      $modal = null;
      $triggerBtn = null;
    });
  
    function createOverlay() {
      $('body').append('<div class="overlay"></div>');
    }
  
  };
  
  modalFunc();


});

