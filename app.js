console.log("Hello World!")
//a count variables to hold how many times a user does a function
var count = 0;

//variables for the new skill
var skills = [];

//arrays for the projects
var projectTitles = ["Movie Ranking Project", "Birthday Invite Project", "Something Project"];
var projectDescrip = ["With the knowledge of introductory HTML, the purpose is create a page ranking movies", "Using more knowledge I created the Birthday Invite project to showcase the use of image and links in a webpage", "Something something something something something"];
var projectDeadlines = ["2026-9-10", "2026-9-30", "2026-10-20"];

function downloadResume()
{
    alert("Your resume is downloaded successfully!");
    count++;
    document.getElementById("downloadCount").textContent = "Downloads: " + count;
};

document.getElementById("downloadResume").addEventListener("click", downloadResume)

const name = "Marisa";
let hasDownloadedResume;

function showGreeting(name)
{
    return "Hello, my name is " + name + "! Welcome to my portfolie!";
}

document.getElementById("greeting").textContent = showGreeting(name);

function daysUntilDeadline(startDate, endDate)
{
    let start = new Date(startDate);
    let end = new Date(endDate);
    let timeDifference = end - start;
    let daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference
}

let startDate = "2026-10-19";
let endDate = "2026-10-20";

let remainingDays = daysUntilDeadline(startDate, endDate);
document.getElementById("deadline").textContent = "Days remaining: " + remainingDays;

function projectListings()
{
    var currentDate = new Date();
    var projectStatus = "";
    for(let i = 0; i < 3; i++)
    {
        let deadline = new Date(projectDeadlines[i]);
        if(deadline > currentDate)
        {
            projectStatus += projectTitles[i] + ": " + projectDescrip[i] + ":<br>Ongoing<br><br>";
        } else {
            projectStatus += projectTitles[i] + ": " + projectDescrip[i] +":<br>Completed<br><br>";
        }
    }
    document.getElementById("projectList").innerHTML = projectStatus;
}
window.onload = projectListings;

function newSkill()
{
    var skill = document.getElementById("skillInput").value;
    skills.push(skill);
    document.getElementById("skillList").textContent = skills.join(", ");
    document.getElementById("skillsInput").value = "";
}

document.getElementById("addSkillButton").addEventListener("click", newSkill);