
    const addProjectBtn = document.getElementById('addProject');
    const projectNameInput = document.getElementById('projectName');
    const projectsList = document.getElementById('projectsLoad');


    // Load projects from local storage 
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    
    const displayProjects = () => {

        // Clear the existing projects list to remove duplication
        projectsList.innerHTML = '';

        
        projects.forEach((project, index) => {
             const li = document.createElement('li');
            li.textContent = project;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                deleteProject(index);
            });
            li.appendChild(deleteBtn);
            projectsList.appendChild(li);
        });
    };

    
    let addProject = () => {
        
        const projectName = projectNameInput.value.trim();
        
        if (projectName) {
            projects.push(projectName);
            
            // Clear the input field
            projectNameInput.value = '';            
            localStorage.setItem('projects', JSON.stringify(projects));           
            displayProjects();
        }
    };

    // deleting a project by index
    const deleteProject = (index) => {
        // Remove the project at the said index from the projects array
        projects.splice(index, 1);

        // Save the updated projects array to local storage
        localStorage.setItem('projects', JSON.stringify(projects));
        
        //calls for load from local storage (After the delete operaton)
        displayProjects();
    };

    // Add event listener to the add project button
    addProjectBtn.addEventListener('click', ()=>{
        addProject
        console.log("adding project ..");
    });

    
     displayProjects();

