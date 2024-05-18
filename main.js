
    let addProjectBtn = document.getElementById('addProject');
    let projectNameInput = document.getElementById('projectName');
    let projectDescriptionInput = document.getElementById('projectLink');
    let startDateInput = document.getElementById('startDate'); 
    let endDateInput = document.getElementById('endDate'); 
    let projectDescriptionTextarea = document.getElementById('projectDescription'); 
    let projectsList = document.getElementById('projectsLoad');
    let form = document.querySelector('.form-container');
    let container = document.querySelector('.container');
    let li;
    let formToggle = document.querySelector('.formShow');
    let form_main = document.querySelector('.form');



    // Load projects from local storage 
    let projects = JSON.parse(localStorage.getItem('projects'));

    
    const displayProjects = () => {
        // !IMPORTANT Clear the existing projects list remove duplication
        projectsList.innerHTML = '';
        
        projects.forEach((project, index) => {
            li = document.createElement('li');

            
            let nameDiv = document.createElement('div');
            nameDiv.textContent = 'Project Name: ' + project.name;

           
            let startDateDiv = document.createElement('div');
            startDateDiv.textContent = 'Start Date: ' + project.startDate;

           
            let endDateDiv = document.createElement('div');
            endDateDiv.textContent = 'End Date: ' + project.endDate;

           
            let descriptionDiv = document.createElement('div');
            descriptionDiv.textContent = 'Description: ' + project.description;

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            let viewbtn = document.createElement('button');
            viewbtn.textContent = 'View Project';

            let buttonContainer = document.createElement('div');

            let viewProjectBtn = document.createElement('button');
            viewProjectBtn.textContent = 'Live Project View';

            // Button to redirect to one project
            viewProjectBtn.addEventListener('click', () => {
                const projectLink = project.link.trim(); // Access project link
                if (projectLink) {
                    window.location.href = projectLink; // Redirect to the project link
                } else {
                    alert('!Error No project link provided for this project!');
                }
            });

            viewbtn.addEventListener('click', ()=>{
                console.log("clicked view button", index);
                let hlink = "project.html"+index;
                console.log(hlink);
                window.location.href = 'project.html?index='+index;


                
            })
            
            deleteBtn.addEventListener('click', () => {
                deleteProject(index);
                console.log("deleted index", index);
            });

            //Append all elements to the li tag
            li.appendChild(nameDiv); 
            // li.appendChild(startDateDiv);
            // li.appendChild(endDateDiv);
            // li.appendChild(descriptionDiv);
            // li.appendChild(deleteBtn); 
            // li.appendChild(viewbtn);
            // li.appendChild(viewProjectBtn);
            buttonContainer.appendChild(deleteBtn);
            buttonContainer.appendChild(viewbtn);
            buttonContainer.appendChild(viewProjectBtn);
            li.appendChild(buttonContainer);
            viewProjectBtn.style.background = "orange";
            viewbtn.style.background = 'rgb(144, 53, 236)'
            buttonContainer.style.display = 'flex';

            projectsList.appendChild(li);
        });
    };

    // Function to add a new project
    const addProject = () => {        
        const projectName = projectNameInput.value.trim();
        const projectLink = projectDescriptionInput.value.trim();
        const startDate = startDateInput.value.trim();
        const endDate = endDateInput.value.trim();
        const projectDescription = projectDescriptionTextarea.value.trim();
        
        if (projectName && projectLink && startDate && endDate) {
            const projectObj = {
                name: projectName,
                link: projectLink,
                startDate: startDate,
                endDate: endDate,
                description: projectDescription
            };
            projects.push(projectObj);
            
            projectNameInput.value = '';
            projectDescriptionInput.value = '';
            startDateInput.value = '';
            endDateInput.value = '';
            projectDescriptionTextarea.value = '';

            // Update local storage
            localStorage.setItem('projects', JSON.stringify(projects));           
            
            displayProjects();
        } else {
            alert('Please provide all project details!');
        }
    };

   

    // Function to delete a project
    const deleteProject = (index) => {

        projects.splice(index, 1);
        // Update local storage
        localStorage.setItem('projects', JSON.stringify(projects));
        displayProjects();
    };
    
    addProjectBtn.addEventListener('click', addProject);
    displayProjects();


let toggle = document.querySelector('.dark_light');

toggle.addEventListener('click', ()=>{
    let body = document.querySelector('.body');

    if(toggle.id === 'l'){
    toggle.style.background = 'white';
    body.style.background = '#181717';
    form.style.background = 'rgb(59, 59, 59)';
    container.style.background = "rgb(30, 29, 29)";
    container.style.color = "white";
    li.style.background = "rgb(143, 143, 143)";

    toggle.id = 'd';
    }
    else if(toggle.id === 'd'){
        body.style.background = '#e0bdbd';
        toggle.id = 'l';
        form.style.background = 'rgb(143, 143, 143)';
        container.style.background = '#FFFFFF';
        container.style.color = "black";
        
        li.style.background = "#fff2d7";
        

    }

})

console.log(formToggle.id);

formToggle.addEventListener('click', ()=>{
    if(formToggle.id === 's'){
        console.log('form toggle');
        form_main.style.display = "block";
        console.log('form toggle');
        formToggle.style.background = 'rgb(208, 77, 77)';
        formToggle.innerHTML = 'done';
        formToggle.id = 'h';
    }
    else if(formToggle.id === 'h'){
        form_main.style.display = "none";
        formToggle.style.background = '#74d26e';
        formToggle.innerHTML = 'New project';
        formToggle.id = 's';
    }
});

let view = localStorage.getItem('projects', JSON.stringify(projects));
console.log(projects[0].name);