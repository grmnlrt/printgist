function printGist() {
  const printContent = document.querySelectorAll('.readme.blob.instapaper_body');
  const newDom = window.open()
  const css_link = document.querySelector('head > link:nth-child(10)')

  newDom.document.write('<html><head><link crossorigin="anonymous" href="');
  newDom.document.write(css_link.href)
  newDom.document.write('" integrity="sha512-Uhy/mAyAx1HfsenmjQ85ASpOk5bjt2Ay03pNeixXIvkHlEm5S+N4u0HWfDGhvsGYx4bGyviXWGGPZeIffqYcNA==" media="all" rel="stylesheet"><style>.anchor {display: none; }</style></head><body >');
  printContent.forEach(function(content) {
    newDom.document.write(content.innerHTML)
  })
  newDom.document.write('</body></html>');
  newDom.print();
  newDom.close();
}

printGist();
