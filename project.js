
//Load projects from json file
const file = 'projects.json';
async function fetchProjects() {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        //Parse json file to js objects
        const projects = await response.json();

        //Select project class where the projects are going to go
        const projectsClass = document.querySelector('.projects');
        projectsClass.innerHTML = '';

        //Create HTML for each project from json data
        projects.forEach((project, index) => {
            const projectNumber = index + 1;
            const projectHTML = `
        <article class="project">
          <div class="project-num${projectNumber}">
            <div class="project-content">
              <h2>${project.titleFirstHalf}<span></span></h2>
              <p>${project.p}</p> 
              <div class="tech-used">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
              </div>
            </div>
            <aside class="project-preview">
              <img class="project-image" id="proj-img${projectNumber}" src="${project.image}" alt="${project.titleFirstHalf} ${project.titleSecondHalf}">
            </aside>
          </div>
        </article>
      `;
            projectsClass.innerHTML += projectHTML;
        });


        //JQuery code to add animation to projects
        $('.project-content p').slideDown(900);

        projects.forEach((project, index) => {
            const projectNumber = index + 1;
            const projectClassSelector = `.project-num${projectNumber}`;
            const imgId = `#proj-img${projectNumber}`;
          
            $(projectClassSelector + ' .project-content').mouseenter(() => {
                $(imgId).fadeIn(200);
            });

            $(projectClassSelector).mouseleave(() => {
                $(imgId).fadeOut(200);
            });

     
            $(imgId).mouseenter(() => {
                $(imgId).css('width', '35vw');
            });

            $(imgId).mouseleave(() => {
                $(imgId).css('width', '25vw');
            });   

            new Typed(projectClassSelector + ' .project-content h2 span', {
                strings: [project.titleSecondHalf],
                typeSpeed: 50,
                backSpeed: 0,
                loop: false,
                showCursor: false,
            });
        });


    } catch (error) {
        console.error('Error loading json file for projects:', error);
    }
}


fetchProjects();