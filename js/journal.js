$(function() {
  var target = '#journal';
  var csvList;
  var insert = '';
  $.ajax({
    type: 'GET',
    dataType: 'text',
    url: 'csv/journal.csv',
    success: function(data) {
      csvList = $.csv()(data);
      for (var i = csvList.length - 1; i > 0; i--) {
        if (csvList[i][0] != 0){
        insert += '<li>';
        insert += '<b>' + csvList[i][1] + '</b><br>';
        
        // リンク
        if (csvList[i][2] != 0) {
          insert += '[<a href="' + csvList[i][2] + '" target="_blank">arXiv</a>]';
        }
        if (csvList[i][3] != 0) {
            insert += '[<a href="' + csvList[i][3] + '" target="_blank">Preprint</a>]';
        }
        if (csvList[i][5] != 0) {
          insert += '[<a href="' + csvList[i][5] + '" target="_blank">Proceeding</a>]';
        }
        if (csvList[i][6] != 0) {
          insert += '[<a href="' + csvList[i][6] + '" target="_blank">Letter</a>]';
        }
        if (csvList[i][4] != 0) {
          insert += '[<a href="' + csvList[i][4] + '" target="_blank">Journal</a>]';
        }
        if (csvList[i][2] != 0 || csvList[i][3] != 0 || csvList[i][4] != 0 || csvList[i][5] != 0) {
        insert += '<br>';
        }
        
        // 著者名
        insert += csvList[i][7] + ', ';
        
        // 書誌情報
        if (csvList[i][0] == 1) {
          insert += 'to appear in ' + csvList[i][8];
        }
        else {
          insert += csvList[i][8] + ', ';
          if (csvList[i][9] != 0) {
            insert += csvList[i][9] + ': ';
          }
          if (csvList[i][10] != 0) {
            insert += csvList[i][10] + ', ';
          }
          insert += csvList[i][11] + '.';
        }
        insert += '</li>';
      }
      };
      $(target).append(insert);
    },
    error: function() {
      $(target).append('Error');
    }
  });
});