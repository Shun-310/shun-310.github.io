$(function() {
  var target = '#proc';
  var csvList;
  var insert = '';
  $.ajax({
    type: 'GET',
    dataType: 'text',
    url: '../csv/proc.csv',
    success: function(data) {
      csvList = $.csv()(data);
      for (var i = csvList.length - 1; i > 0; i--) {
        insert += '<li>';
        insert += '<b>' + csvList[i][1] + '</b><br>';
        
        // ƒŠƒ“ƒN
        if (csvList[i][0] == 2) {
          insert += '[<a href="' + csvList[i][2] + '" target="_blank">website</a>]';
          insert += '<br>';
        }
                
        // ’˜Ò–¼
        insert += csvList[i][3] + ', ';
        
        // ‘î•ñ
        if (csvList[i][0] == 0) {
          insert += 'submitted.';
        }
        else if (csvList[i][0] == 1) {
          insert += csvList[i][4] + ', ';
          insert += csvList[i][5] + ': ';
          insert += csvList[i][6] + ', ';
          insert += csvList[i][7] + '.';
        }
        else {
          insert += csvList[i][4] + ', ';
          insert += csvList[i][5] + ': ';
          insert += csvList[i][6] + ', ';
          insert += csvList[i][7] + '.';
        }
        insert += '</li>';
      };
      $(target).append(insert);
    },
    error: function() {
      $(target).append('Error');
    }
  });
});