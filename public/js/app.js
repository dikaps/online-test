$(document).ready(function () {
  $(".inputs").keyup(function () {
    if (this.value.length == this.maxLength) {
      let next = $(this).next(".inputs");

      if (next.length) {
        $(this).next(".inputs").focus();
      } else {
        $(this).blur();
      }
    }
  });
});
