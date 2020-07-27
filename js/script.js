// when a section is clicked, hide other sections and show the content in the section
$sections = $('#pageContent').children();
$sections.each((index, currentSection) => {
  $(currentSection).on('click', () => {
    // toggle class to change the css on when the section is fully visible
    $(currentSection).addClass('fullSection');
    // toggle the hidden content in the current section
    $('.sectionText').show();
    // toggle the other secitons to hide them
    $sections.each((index, section) => {
      if (section !== currentSection) {
        $(section).hide();
      }
    });
  })
});
