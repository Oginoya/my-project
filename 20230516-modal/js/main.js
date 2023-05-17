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
  
    $('.overlay').on('click', function () {
      closeModal();
    });
  
    $('.isCloseModal').on('click', function () {
      closeModal();
    });
  
    function createOverlay() {
      $('body').append('<div class="overlay"></div>');
    }
  
    function closeModal() {
      $('.overlay').remove();
      $modal.removeClass('isDisplay');
      window.scrollTo(recordX, recordY);
      $modal = null;
      $triggerBtn = null;
    }
  };
  
  
  modalFunc();


});

