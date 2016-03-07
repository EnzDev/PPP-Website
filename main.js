function switchCell(id) {
  var ids = {'int', 'com', 'exp', 'for'};
  for (var item in ids) {
    querySelector('#'+item+' div:nth-child(2n)').id = "";
  }
  if (id in ids) {
    querySelector('#'+id+' div:nth-child(2n)').id = "activated";
  }
}
