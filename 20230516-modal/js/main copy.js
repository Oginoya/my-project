$(function() {
  var modalFunc = function (name) {

    // スクロール位置記録用変数を定義
    var recordX = 0;
    var recordY = 0;
    var rootElm = document.documentElement;
    var bodyElm = document.body;
  
    // クリック時のスクロール位置を記録する
    recordX = rootElm.scrollLeft || bodyElm.scrollLeft;
    recordY = rootElm.scrollTop || bodyElm.scrollTop;
  
    // 表示対象IDを生成
    var showModalId = '#' + name;
    
    // 表示対象IDが存在する場合のみ以下を実行
    if ($(showModalId).length) {
  
      // オーバーレイの多重起動防止
      if ($('.overlay')[0]) {
      // オーバーレイが存在する場合は処理を終了
        return false;
      } else {
      // オーバーレイが存在しない場合はソースを生成
        $('body').append('<div class="overlay"></div>');
      }
  
      // オーバーレイとモーダル本体を表示する
      $('.overlay,' + showModalId).addClass('isDisplay');
  
      // モーダル位置調整用関数定義
      var calcPosi = function() {
  
        var outerHeight = window.outerHeight; // アドレスバー含むブラウザ全体の高さ
        var innerHeight = window.innerHeight; // ブラウザ表示領域の高さ
        var modalHeight = $(showModalId).outerHeight(); // 余白含むモーダルの高さ
        var heightDiff  = modalHeight - innerHeight;
  
        if (heightDiff > 0) {
          $(showModalId).addClass('unfixed').css({
            'top' : (outerHeight * 0.2) + 'px',
          });
  
          window.scrollTo(0, 0);
  
        } else {
          $(showModalId).removeClass('unfixed').css({
            'top' : '50%',
          });
        }
      }
      calcPosi();
  
      // ウィンドウリサイズ対応
      $(window).on('resize', function() {
        calcPosi();
      });
  
  
      // モーダルウィンドウを閉じる
      $('.isCloseModal, .overlay').on('click', function() {
  
        $('.overlay,' + showModalId).removeClass('isDisplay');
        $('.overlay').remove();
        $(showModalId).removeAttr('style');
        if ($(showModalId).hasClass('unfixed')) {
          $(showModalId).removeClass('unfixed');
        }
  
        // モーダルを開いた時の位置に戻す
        window.scrollTo(recordX, recordY);
  
        // IDを初期化
        showModalId = null;
      });
    } else {
      return false;
    }




  }

  $('.modal-open').on('click', function () { 
    modalFunc('test1');
   });


});

