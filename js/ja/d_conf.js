$(function() {
  var target = '#d_conf';
  var csvList;
  var insert = '';
  $.ajax({
    type: 'GET',
    dataType: 'text',
    url: '../csv/d_conf.csv',
    success: function(data) {
      csvList = $.csv()(data);
      for (var i = csvList.length - 1; i > 0; i--) {
        insert += '<li>';
        insert += '<b>' + csvList[i][1] + '</b><br>';
        
        // 人名
        if (csvList[i][0] == 0) {
          for (var j = 0; j < csvList[i][11]; j++) {
            var name = csvList[i][12+j];
            if (name == csvList[i][10]) {
              insert += '<span class="u_line">' + name + '</span>, ';
            }
            else {
              insert += name + ', ';
            }
          }
        }
        else {
          insert += '<span class="u_line">' + csvList[i][10]  + '</span> ';
          insert += '(joint work with ' + csvList[i][12] + '), ';
          
        }
        
        // 会議名
        insert += csvList[i][2] + ', ';
        
        // 都市名
        insert += csvList[i][3] + ', ';
        
        // 日程
        insert += csvList[i][9] + '年' + csvList[i][4] + '月.' ;
        
        insert += '</li>';
      };
      $(target).append(insert);
    },
    error: function() {
      $(target).append('Error');
    }
  });
});