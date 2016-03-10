var bio = {
  "name": "Judy Hopps",
  "role": "Police Officer @Zootopia",
  "contacts": {
    "mobile": "401-456-JUDY",
    "email": "judyhopps@Zootopia.com",
    "twitter": "@judyhopps",
    "location": "Animal Kingdom, Disney World"
  },
  "welcomeMessage": "Hi! I am Juddy Hopps, an anthropomorphic rabbit who doesn't know when to quit. I believe anybody can be whoever they want to be. And also, life's too short - try everything.That's why I'm trying to learn web development by taking the FEND @ Udacity!",
  "quote": "I won’t give up, no I won’t give in. Till I reach the end. And then I’ll start again",
  "cite": "https://www.youtube.com/watch?v=c6rP-YP4c5I",
  "skills": ["Effective Communication Skills - with predators and preys alike.", "Ability to use good judgment and to problem solve.", "Capacity for engaging in teamwork and ability to collaborate.", "Physically fit. Can hop, skip and jump in a jiffy."],
  "biopic": "images/biopic.jpg"
};

bio.display = function display() {
  /* Replace all dummy bio data with actual data from bio JSON*/
  var name = HTMLheaderName.replace('%data%', bio.name),
    role = HTMLheaderRole.replace('%data%', bio.role),
    biopic = HTMLbioPic.replace('%data%', bio.biopic),
    /*quote = (bio.quote.replace(/\./g,'\n')),*/
    wmsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage).replace('%cite%', bio.cite).replace('%quote%', bio.quote),
    skillsList;

  /* Insert the actual data into HTML */
  $(".name").append(name, role).after(HTMLtopContacts);
  /*$(".main-img").append();*/
  $('#header').append(biopic, wmsg, HTMLskillsStart);

  if (bio.skills.length !== 0) {
    /*Loop through the skills array to read entire list, replace the dummy with actual data in each li element.
       Append the li items to HTML */
    $.each(bio.skills, function(i, skill) {
      skillsList = HTMLskills.replace('%data%', skill);
      $('#skills').append(skillsList);
    });
  }

  /*Loop through the contacts object, replace dummy contact*/
  $.each(bio.contacts, function(contact, data) {
    var contactWays = HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', data);
    $('#topContacts').append(contactWays);
    $('#footerContacts').append(contactWays);
  });
};

var work = {
  "jobs": [{
    "employer": "Zootopia Police Department",
    "title": " Officer",
    "location": "Zootopia",
    "dates": "2015-2016",
    "description": "First rabbit to join the police force @Zootopia. Fighting crime, trying to save the world. "
  }, {
    "employer": "Self employed",
    "title": "Vegetable Farmer & Vendor",
    "location": "Bunnyburrow Land",
    "dates": "2014-2015",
    "description": "Cultivating, harvesting and selling blueberries and carrots for the entire neighborhood."
  }]
};

work.display = function display() {
  /*For each job entry, create the container and append after replacing place of dummy data*/
  $.each(work.jobs, function(index, job) {
    $('#workExperience').append(HTMLworkStart);
    var employer = HTMLworkEmployer.replace('%data%', job.employer),
      title = HTMLworkTitle.replace('%data%', job.title),
      duration = HTMLworkDates.replace('%data%', job.dates),
      location = HTMLworkLocation.replace('%data%', job.location),
      description = HTMLworkDescription.replace('%data%', job.description);

    $(".work-entry:last").append(employer + title, duration, location, description);
  });
};

var crimeCases = {
  "cases": [{
    "title": "Finding Mr. Otterton",
    "dates": "2014-2015",
    "description": "Was assigned the task of finding Mr. Otterton who'd been missing since 2 weeks. Not only did I manage to find him within 48 hours, I also solved the mystery of why predators of Zootopia were going 'savage'. Even though the police force at Zootopia were struggling to solve the case, I jumped at the chance to crack a case, even though it resulted in teaming up with a con-artist fox.",
    "images": ["images/case1-thumb1.jpg", "images/case1-thumb2.jpg", "images/case1-thumb3.jpg", "images/case1-thumb4.jpg"]
  }, {
    "title": "Case of stolen bags of plant bulbs",
    "dates": "2015-2016",
    "description": "While working as a meter-maid, noticed a criminal running away with stolen plant-bulbs. Energetically and enthusiastically chased and followed him to Little Rodentia. With my quick thinking and presense of mind, captured the thief using a doughnut.",
    "images": ["images/case2-thumb1.jpg", "images/case2-thumb2.jpg", "images/case2-thumb3.jpg"]
  }]
};

crimeCases.display = function display() {
  /*For each crime entry, read data from JSON and append after replacing it with dummy data*/
  $.each(crimeCases.cases, function(index, crime) {
    $('#cases').append(HTMLcaseStart);
    var title = HTMLcaseTitle.replace('%data%', crime.title),
      dates = HTMLcaseDates.replace('%data%', crime.dates),
      description = HTMLcaseDescription.replace('%data%', crime.description),
      images;
    $('.crime-entry:last').append(title, dates, description);
    $.each(crime.images, function(i, image) {
      images = HTMLcaseImage.replace('%data%', image);
      $('.crime-entry:last').append(images);
    });
  });
};

var education = {
  "schools": [{
    "name": "Zootopia Police Academy",
    "location": "Zootopia",
    "degree": " Officer",
    /*"majors": ["Computer Science","English"],*/
    "dates": 2015,
    "url": "www.zpd.com"
  }],
  "onlineCourses": [{
    "title": "Front End Web Developer Nanodegree",
    "school": "Udacity",
    "dates": 2016,
    "url": "www.udacity.com"
  }, {
    "title": "Shaping Up With Angular JS",
    "school": "CodeSchool",
    "dates": "2015",
    "url": "www.codeschool.com"
  }]
};

education.display = function display() {
  /* For each entry of school & courses, read data from JSON and append after replacing dummy data */
  $.each(education.schools, function(index, school) {
    $('#education').append(HTMLschoolStart);
    var name = HTMLschoolName.replace('%data%', school.name),
      degree = HTMLschoolDegree.replace('%data%', school.degree),
      dates = HTMLschoolDates.replace('%data%', school.dates),
      location = HTMLschoolLocation.replace('%data%', school.location),
      majors;

    $('.education-entry:last').append(name + degree, dates, location);

    /*$.each(school.majors, function(i, major) {
      majors = HTMLschoolMajor.replace('%data%', major);
      $('.education-entry:last').append(majors);
    });*/
  });

  $('#education').append(HTMLonlineClasses);
  $.each(education.onlineCourses, function(index, course) {
    $('#education').append(HTMLschoolStart);
    var title = HTMLonlineTitle.replace('%data%', course.title),
      school = HTMLonlineSchool.replace('%data%', course.school),
      dates = HTMLonlineDates.replace('%data%', course.dates),
      url = HTMLonlineURL.replace('%data%', course.url);

    $('.education-entry:last').append(title + school, dates, url);
  });
};

var mapLocations = {
  "Disneyland Park": "My ideal vacation place!",
  "Magic Kingdom Park": "Visit this place often to meet Mickey and Minnie. They make an adorable couple, don't they!?",
  "Disney's Animal Kingdom Theme Park": "Work place. Love hanging out with all the other animals here.",
  "Disney's Hollywood Studios": "Photo shoots and press conferences happen here."

};

/*Call all the display methods for each page section*/
bio.display();
work.display();
crimeCases.display();
education.display();

/*Append the google maps div to load the map*/
$("#mapDiv").append(googleMap);