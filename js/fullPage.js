$(function(){
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#254875', '#9ecc9a', '#254587', '#695684',' '],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        'navigation': true,
        'navigationPosition': 'right',
        // 'navigationColor':'blue',
        'navigationTooltips': ['首页', '第二页', '第三页', '第四页', '第五页'],
    afterRender: function () {
        $('.next-page').on('click', function () {
          $.fn.fullpage.moveSectionDown();
        })
        
      },
      
 

    })
})

