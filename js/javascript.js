(function($){
    let Book = $("#Book");
    let Content = $("#Content");

    let Header = $("#header");
    let NavBox = $("#NavBox");
    let Menu = $(".Menu");
    let Logo = $("#Logo");

    let Next = $(".NImg");
    let Prev = $(".PImg");

    let Load2 = $("#Page2 > .LoadingBox");
    let Load3 = $("#Page3 > .LoadingBox");
    let Load4 = $("#Page4 > .LoadingBox");
    let Load5 = $("#Page5 > .LoadingBox");
    let Load6 = $("#Page6 > .LoadingBox");
    let Load7 = $("#Page7 > .LoadingBox");
    let Load8 = $("#Page8 > .LoadingBox");
    let Load9 = $("#Page9 > .LoadingBox");



    Header.hide();

    Book.turn({
        width: 100+"%",
        height: 100+"%",
        autoCenter: true,
    });
    Book.turn("display","single");

    // 頁面動畫開始時觸發
    Book.bind("start", function(event, pageObject, corner) {
        if (corner=="tl" || corner=="tr") {
          event.preventDefault();
        }
      });

    // 翻頁之前觸發此事件
    Book.bind("turning", function(event, page, view) {
        if (page==1) {
            Header.hide();
            Prev.hide();
        } else {
            Header.show();
            Prev.show();
        }
        $("#InPage2").load("web/page3.htm");
        $("#InPage3").load("web/page4.htm");
        $("#InPage4").load("web/page5.htm");
        $("#InPage5").load("web/page6.htm");
        $("#InPage6").load("web/page7.htm");
        $("#InPage7").load("web/page8.htm");
        $("#InPage8").load("web/page9.htm");
        $("#InPage9").load("web/page10.htm");
    });

    // 翻頁之後觸發此事件
    Book.bind("turned", function(event, page, view) {
        switch ( page ) {
            case 1 :
                Header.hide();
                Prev.hide();
                Load2.fadeIn(200);
                break;

            case 2 :
                Header.show();
                Load2.fadeOut(100);
                Load3.fadeIn(200);
                ShowLRBtn();
                $("#InPage2").load("web/page3.htm");
                break;

            case 3 :
                Header.show();
                Load2.fadeIn(200);
                Load3.fadeOut(100);
                ShowLRBtn();
                $("#InPage3").load("web/page4.htm");
                break;

            case 4 :
                Header.show();
                Load3.fadeIn(200);
                Load4.fadeOut(100);
                ShowLRBtn();
                $("#InPage4").load("web/page5.htm");
                break;

            case 5:
                Header.show();
                Load4.fadeIn(200);
                Load5.fadeOut(100);
                ShowLRBtn();
                $("#InPage5").load("web/page6.htm");
                break;

            case 6:
                Header.show();
                Load5.fadeIn(200);
                Load6.fadeOut(100);
                ShowLRBtn();
                $("#InPage6").load("web/page7.htm");
                break;

            case 7:
                Header.show();
                Load6.fadeIn(200);
                Load7.fadeOut(100);
                ShowLRBtn();
                $("#InPage7").load("web/page8.htm");
                break;

            case 8:
                Load7.fadeIn(200);
                Load8.fadeOut(100);
                ShowLRBtn();
                $("#InPage8").load("web/page9.htm");
                break;

            case 9:
                Header.show();
                Load8.fadeIn(200);
                Load9.fadeOut(100);
                Prev.show();
                Next.hide();
                $("#InPage9").load("web/page10.htm");
                break;
        }
        CloseMenu();
    });

    function WindowSize() {
        if ($(window).width() <=576) {
            Book.turn("size", window.innerWidth * 1, window.innerHeight * 1);
            Content.removeClass("Lith");
            Content.removeClass("Desk");
            Content.removeClass("Ldesk");
            Content.addClass("Tiny");
        } else if ( $(window).width() >= 577 && $(window).width() <= 767 ) {
            Book.turn("size", window.innerWidth * 1, window.innerHeight * 1);
            Content.removeClass("Tiny");
            Content.removeClass("Desk");
            Content.removeClass("Ldesk");
            Content.addClass("Lith");
        } else if ( $(window).width() >= 768 && $(window).width() <= 1024 ) {
            Book.turn("size", window.innerWidth * 1, window.innerHeight * 1);
            Content.removeClass("Tiny");
            Content.removeClass("Lith");
            Content.removeClass("Ldesk");
            Content.addClass("Desk");
        } else if( $(window).width() >1024) {
            Book.turn("size", window.innerWidth * 0.35, window.innerHeight*1);
            Content.removeClass("Tiny");
            Content.removeClass("Lith");
            Content.removeClass("Desk");
            Content.addClass("Ldesk");
        };
    }
    $(window).resize(function(){
        WindowSize();
    });
    WindowSize();
    ChangePNBtn();
    function ChangePNBtn() {
        $("ul").on("click", "li.Menu", function(){
            NavBox.fadeIn();
            Menu.removeClass("Menu").addClass("Close");
            CloseLRBtn();
        });

        $("ul").on("click", "li.Close", function(){
            NavBox.fadeOut();
            Menu.removeClass("Close").addClass("Menu");
            ShowLRBtn();
        });
    }

    ChangPage();
    LoadBox();

    function ChangPage() {
        Logo.click(function(){
            CloseMenu();
            Book.turn("page", 1);
            Next.show();
            LoadBox();
        });

        // 下一頁
        Next.click(function(){
            Book.turn("next");
        });
        // 上一頁
        Prev.click(function(){
            Book.turn("previous");
        });
    }

   
    // 讀取頁碼
    

    NavBox.load("web/nav.htm")

    $(".p1").load("web/cover.htm");

    // 動畫
    function LoadBox() {
        let LoadBox = $("#LoadBox");
        let BoxId = ['Box','Box2'];

        LoadBox.show();

        for ( let i = 0; i < BoxId.length; i++) {
            // 宣告 建立新的標籤
            let DivBox = document.createElement('div');
            // 新增 dive
            document.getElementById('LoadBox').appendChild(DivBox);

            // 增加標籤屬性
            DivBox.setAttribute('id', BoxId[i]);
        }

        function Load() {
            let LoadBox = $("#LoadBox");
            LoadBox.fadeOut(1500);
        }
        setTimeout(Load, 6500);
    }
    
})($);

let Book = $("#Book");
let NavBox = $("#NavBox");
let Menu = $(".Menu");
let Next = $(".NImg");
let Prev = $(".PImg");

let Page2 = function() {
    Book.turn("page", 2);
    ShowLRBtn();
    CloseMenu();
};

let Page3 = function() {
    Book.turn("page", 3);
    ShowLRBtn();
    CloseMenu();
};

let Page4 = function () {
    Book.turn("page", 4);
    ShowLRBtn();
    CloseMenu();
};

let Page5 = function () {
    Book.turn("page", 5);
    ShowLRBtn();
    CloseMenu();
};

let Page6 = function () {
    Book.turn("page", 6);
    ShowLRBtn();
    CloseMenu();
};

let Page7 = function() {
    Book.turn("page", 7);
    ShowLRBtn();
    CloseMenu();
}

let Page8 = function () {
    Book.turn("page", 8);
    ShowLRBtn();
    CloseMenu();
}

let Page9 = function () {
    Book.turn("page", 9);
    ShowLRBtn();
    CloseMenu();
}

// 關閉選單
function CloseMenu() {
    NavBox.fadeOut();
    Menu.removeClass("Close").addClass("Menu");
}

// 關閉左右按鈕
function CloseLRBtn() {
    Prev.hide();
    Next.hide();
}


// 開啟左右按鈕
function ShowLRBtn() {
    Prev.show();
    Next.show();
}