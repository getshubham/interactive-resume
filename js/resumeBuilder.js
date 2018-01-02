var bio = {
    "name": "Shubham Mahajan",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "8275514829",
        "email": "getshubham.4@gmail.com",
        "github": "getshubham",
        "location": "Pune"
    },
    "picture": "images/edit.jpg",
    "welcomeMessage": "I am a Front-End developer who loves to learn and code and always ready to adapt new technologies.",
    "skills": ["Responsive Web Designs","Front-End Development" , "User Interfaces", "Git and Github",]
};


var education = {
    "schools": [
        {
            "name": "University of Pune",
            "datesAttended": "2014 - 2017",
            "location": "Pune, MH, India",
            "degree": "B.E. Computer Engineering",
            "major": "Computer Science",
            
        }
    ],
    "onlineCourses": [
        {
            "school": "Udacity",
            "title": "Intro to HTML and CSS",
            "completed": "July 2017",
            "url": "https://in.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "school": "Udacity",
            "title": "Intro to JavaScript",
            "completed": "July 2017",
            "url": "https://in.udacity.com/course/intro-to-javascript--ud803"
        },
        {
            "school": "Udacity",
            "title": "Responsive Web Design Fundamentals",
            "completed": "August 2017",
            "url": "https://in.udacity.com/course/responsive-web-design-fundamentals--ud893"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Safa Motors",
            "datesWorked": "December 2017 - January 2018",
            "description": "Created an webiste using HTML, CSS and Bootstrap " +
                "framework.",
            "images": [],
            "url": "http://getshubham.github.io/SafaMotors"
        },
        {
            "title": "HTML Invoice",
            "datesWorked": "October 2017",
            "description": "Created an mockup of invoice using only" +
                "HTML5",
            "images": [],
            "url": "http://getshubham.github.io/invoice"
        },
    ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for (i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}


projects.display = function () {
    if (projects.projects.length > 0) {
        for (i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

projects.display();

education.display = function () {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolMinor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();

/**
 * Skills Chart
 */
