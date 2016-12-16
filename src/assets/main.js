$(function() {
 const reportCardUrl = "https://www.codeschool.com/users/kleww.json";

 $.ajax({
    url: reportCardUrl,
    dataType: 'jsonp',
    success: function(response) {
      const coursesCompleted = response.courses.completed;
      for (cc of coursesCompleted) {
        let $course = $("<div></div>");
        $course.addClass("course");
        let $title = $(`<h3>${cc.title}</h3>`);
        let $img = $(`<img src="${cc.badge}" />`);
        let $a = $(`<a href=${cc.url} target="_blank">See Course</a>`);
        $a.addClass("btn btn-primary");
        $course.append($title);
        $course.append($img);
        $course.append($a);
        $("#badges").append($course);
      }
    }
  });
});
