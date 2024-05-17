document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    let addProjectBtn = document.getElementById('addProject');
    let projectNameInput = document.getElementById('projectName');
    let projectDescriptionInput = document.getElementById('projectLink');
    let startDateInput = document.getElementById('startDate'); // Get reference to start date input field
    let endDateInput = document.getElementById('endDate'); // Get reference to end date input field
    let projectDescriptionTextarea = document.getElementById('projectDescription'); // Get reference to project description textarea
    let projectsList = document.getElementById('projectsLoad');

    // Load projects from local storage 
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    // Function to display projects
    const displayProjects = () => {
        // Clear the existing projects list to remove duplication
        projectsList.innerHTML = '';
        
        projects.forEach((project, index) => {
            let li = document.createElement('li');

            // Display project name
            let nameDiv = document.createElement('div');
            nameDiv.textContent = 'Project Name: ' + project.name;

            // Display project start date
            let startDateDiv = document.createElement('div');
            startDateDiv.textContent = 'Start Date: ' + project.startDate;

            // Display project end date
            let endDateDiv = document.createElement('div');
            endDateDiv.textContent = 'End Date: ' + project.endDate;

            // Display project description
            let descriptionDiv = document.createElement('div');
            descriptionDiv.textContent = 'Description: ' + project.description;

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            let viewProjectBtn = document.createElement('button');
            viewProjectBtn.textContent = 'View Project';

            // Button to redirect to one project
            viewProjectBtn.addEventListener('click', () => {
                const projectLink = project.link.trim(); // Access project link
                if (projectLink) {
                    window.location.href = projectLink; // Redirect to the project link
                } else {
                    alert('No project link provided for this project!');
                }
            });
            
            deleteBtn.addEventListener('click', () => {
                deleteProject(index);
            });

            // Append all elements to the <li>
            li.appendChild(nameDiv); 
            li.appendChild(startDateDiv);
            li.appendChild(endDateDiv);
            li.appendChild(descriptionDiv);
            li.appendChild(deleteBtn); 
            li.appendChild(viewProjectBtn);
            viewProjectBtn.style.background = "orange";
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

    // Add event listener to the add project button
    addProjectBtn.addEventListener('click', addProject);

    // Display existing projects
    displayProjects();
});
