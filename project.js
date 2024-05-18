let projectTable = document.querySelector('.project');

let details = JSON.parse(localStorage.getItem('projects'));

let identifier = window.location.search.replace('?index=', '');

console.log(details[0]);

console.log("Hello"+details[identifier]);



let projectName = details[identifier].name;
let projectLink = details[identifier].link;
let startDate= details[identifier].startDate;
let endDate = details[identifier].endDate;
let projectDescription = details[identifier].description;
console.log(projectName);
console.log(projectLink);
console.log(startDate);
console.log(endDate);
console.log(projectDescription);

let projectname = document.createElement('p');
projectname.textContent = projectName;
let projectlink = document.createElement('p');
projectlink.textContent = projectLink;
let startdate = document.createElement('p');
startdate.textContent=startDate;
let enddate = document.createElement('p');
enddate.textContent=endDate;
let description = document.createElement('p');
description.textContent=projectDescription;

projectTable.appendChild(projectname);
projectTable.appendChild(projectlink);
projectTable.appendChild(startdate);
projectTable.appendChild(enddate);
projectTable.appendChild(description);
