var bio = {
      "name" : "Ankita",
      "role" : "Web Developer",
      "contacts" :{
          "mobile": "123-456-7789",
          "email": "a@gmail.com",
          "github": "ankitasood",
          "twitter": "@tweetme",
          "location": "Virginia Beach, Virginia"
        },
        "welcomeMessage": "Lorem ipsum dolor sit amet, ne vel doming dolorum, ex pro ferri audire aeterno, eu qui eruditi efficiantur. Et molestie suscipit prodesset sea. Te fabellas pericula mea, sea legimus laoreet dolores ea, lorem abhorreant per id. Mel accumsan placerat vulputate et.",
        "skills": ["skill1", "skill2", "skill3"],
        "biopic": "images/fry.jpg"
};

bio.display = function display() {
  /* Replace all dummy bio data with actual data from bio JSON*/
  var name = HTMLheaderName.replace('%data%', bio.name),
    role = HTMLheaderRole.replace('%data%', bio.role),
    biopic = HTMLbioPic.replace('%data%', bio.biopic),
    wmsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage),
    skillsList;

    /* Insert the actual data into HTML */
    $('#header').prepend(name,role).append(biopic,wmsg,HTMLskillsStart);

    /*Loop through the skills array to read entire list, replace the dummy with actual data in each li element.
    Append the li items to HTML */
    $.each(bio.skills, function(i,skill) {
      skillsList = HTMLskills.replace('%data%',skill);
      $('#skills').append(HTMLskills.replace('%data%',skillsList));
    })

    /*Loop through the contacts object, replace dummy contact*/
    $.each(bio.contacts, function(contact, data) {
      var contactWays = HTMLcontactGeneric.replace('%contact%',contact).replace('%data%',data);
      $('#topContacts').append(contactWays);
      $('#footerContacts').append(contactWays);
    });
}

var work =  {
    "jobs": [
              {
                "employer":"Comp2",
                "title":" Senior Web Developer",
                "location":"New York",
                "dates":"2012-2015",
                "description" : "Senior Web Developer Role and Responsibilities. Sang on extraordinary gosh while explicit far ouch by assiduous much gazed ouch absolutely along gull woolly hey stared precise."
              },
              {
                "employer":"Comp1",
                "title":" Junior Web Developer",
                "location":"Bangalore, India",
                "dates":"2009-2012",
                "description" : "Junior Web Developer Role and Responsibilities. Goodness one useless that some from on jeepers yet tapir darn listless scorpion as the much one off momentously next gosh appalling that serene"
              }
            ]
            };

work.display = function display() {
  /*For each job entry, create the container and append after replacing place of dummy data*/
  $.each(work.jobs, function(index, job) {
    $('#workExperience').append(HTMLworkStart);
    var employer = HTMLworkEmployer.replace('%data%',job.employer),
        title = HTMLworkTitle.replace('%data%', job.title),
        duration = HTMLworkDates.replace('%data%', job.dates),
        location = HTMLworkLocation.replace('%data%', job.location),
        description = HTMLworkDescription.replace('%data%', job.description);

        $(".work-entry:last").append(employer + title,duration,location,description);
  })
}

var projects = {
  "projects" : [
    {
      "title": "Project-1",
      "dates": "2014-2015",
      "description": "Morbi ut purus placerat mi finibus cursus. Vivamus ornare luctus est vitae lobortis. Quisque condimentum tellus quis ipsum rhoncus, eget lacinia leo pulvinar. Aenean vehicula odio vel urna condimentum mollis. Vivamus a dui sed purus molestie tincidunt sed vel velit.",
      "images":["images/proj-thumb.gif","images/proj-thumb.gif"]
    },
    {
      "title": "Project-2",
      "dates": "2013-2014",
      "description": "Morbi ut purus placerat mi finibus cursus. Vivamus ornare luctus est vitae lobortis. Quisque condimentum tellus quis ipsum rhoncus, eget lacinia leo pulvinar. Aenean vehicula odio vel urna condimentum mollis. Vivamus a dui sed purus molestie tincidunt sed vel velit.",
      "images":["images/proj-thumb.gif","images/proj-thumb.gif"]
    }
  ]
}

projects.display = function display() {
  /*For each project entry, read data from JSON and append after replacing it with dummy data*/
  $.each(projects.projects, function(index,project){
    $("#projects").append(HTMLprojectStart);
    var title = HTMLprojectTitle.replace('%data%', project.title),
        dates = HTMLprojectDates.replace('%data%', project.dates),
        description = HTMLprojectDescription.replace('%data%', project.description),
        images;
        $('.project-entry:last').append(title,dates,description);
        $.each(project.images, function(i,image) {
          images = HTMLprojectImage.replace('%data%', image);
          $('.project-entry:last').append(images);
        });
  });

}
var education = {
  "schools": [
    {
      "name": "LoremSchool University",
      "location": "Miami, Florida",
      "degree": "Bachelors",
      "majors": ["Computer Science","English"],
      "dates": 2009,
      "url": "www.LoremSchool.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "www.udacity.com"
    },
    {
      "title": "Shaping Up With Angular JS",
      "school": "CodeSchool",
      "dates": "2015",
      "url": "www.codeschool.com"
    }
  ]
};

education.display = function display() {
  /* For each entry of school & courses, read data from JSON and append after replacing dummy data */
  $.each(education.schools, function(index, school) {
    $('#education').append(HTMLschoolStart);
    var name = HTMLschoolName.replace('%data%', school.name),
        degree = HTMLschoolDegree.replace('%data%', school.degree),
        dates = HTMLschoolDates.replace('%data%', school.dates),
        location = HTMLschoolLocation.replace('%data%',school.location),
        majors;

    $('.education-entry:last').append(name+degree, dates, location);

    $.each(school.majors, function(i, major) {
      majors = HTMLschoolMajor.replace('%data%', major);
      $('.education-entry:last').append(majors);
    });
  });

  $('#education').append(HTMLonlineClasses);
  $.each(education.onlineCourses, function(index, course) {
    $('#education').append(HTMLschoolStart);
    var title = HTMLonlineTitle.replace('%data%', course.title),
        school = HTMLonlineSchool.replace('%data%', course.school),
        dates = HTMLonlineDates.replace('%data%', course.dates),
        url = HTMLonlineURL.replace('%data%', course.url);

     $('.education-entry:last').append(title+school, dates, url);
  });
}

/*Call all the display methods for each page section*/
bio.display();
work.display();
projects.display();
education.display();

/*Append the google maps div to load the map*/
$("#mapDiv").append(googleMap);