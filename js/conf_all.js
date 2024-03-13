$(function() {
  var target = '#conf_all';
  var csvList;
  var insert = '';
  $.ajax({
    type: 'GET',
    dataType: 'text',
    url: 'csv/conf_all.csv',
    success: function(data) {
      csvList = $.csv()(data);
      for (var i = csvList.length - 1; i > 0; i--) {
      if (csvList[i][4] != "JP") {
        insert += '<li>';
        insert += '<b>' + csvList[i][1] + '</b><br>';
        
        // �l��
        if (csvList[i][0] == 0) {
          for (var j = 0; j < csvList[i][12]; j++) {
            var name = csvList[i][13+j];
            if (name == csvList[i][11]) {
              insert += '<span class="u_line">' + name + '</span>, ';
            }
            else {
              insert += name + ', ';
            }
          }
        }
        else {
          insert += '<span class="u_line">' + csvList[i][11]  + '</span> ';
          insert += '(joint work with ' + csvList[i][13] + '), ';
          
        }
        
        // ��c��
        insert += csvList[i][2] + ', ';
        
        // �s�s��
        insert += csvList[i][3] + ' ';
        
        // ����
        insert += '(' + csvList[i][4] + '), ';
        
        // ����
        insert += csvList[i][5] + ' ' + csvList[i][6] + ', ' + csvList[i][10] + '.';
        
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