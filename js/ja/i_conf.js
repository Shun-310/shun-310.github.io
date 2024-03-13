$(function() {
  var target = '#i_conf';
  var csvList;
  var insert = '';
  $.ajax({
    type: 'GET',
    dataType: 'text',
    url: '../csv/i_conf.csv',
    success: function(data) {
      csvList = $.csv()(data);
      for (var i = csvList.length - 1; i > 0; i--) {
        insert += '<li>';
        insert += '<b>' + csvList[i][1] + '</b><br>';
        
 // l–¼
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
        
        // ‰ï‹c–¼
        insert += csvList[i][2] + ', ';
        
        // “ss–¼
        insert += csvList[i][3] + ' ';
        
        // ‘–¼
        insert += '(' + csvList[i][4] + '), ';
        
        // “ú’ö
        insert += csvList[i][5] + ' ' + csvList[i][6] + ' ' + csvList[i][10] + '.';
        
        insert += '</li>';
      };
      $(target).append(insert);
    },
    error: function() {
      $(target).append('Error');
    }
  });
});