
const url = 'projects.json';
async function fetchProjects() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const projects = await response.json();
        const projectsClass = document.querySelector('.projects');
        projectsClass.innerHTML = '';

        projects.forEach((project, index) => {
            const projectHTML = `
        <div class="project">
          <div class="project${index + 1}">
            <div class="project-content">
              <h2>${project.titleFirstHalf}<span></span></h2>
              <p>${project.p}</p> 
              <div class="tech-used">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
              </div>
            </div>
            <aside class="project-preview">
              <img class="project-image" id="proj-img${index + 1}" src="${project.image}" alt="${project.titleFirstHalf} ${project.titleSecondHalf}">
            </aside>
          </div>
        </div>
      `;
            projectsClass.innerHTML += projectHTML;
        });


        $('.project-content p').slideDown(900);

        projects.forEach((project, index) => {
            const projectNumber = index + 1;
            const selector = `.project${projectNumber}`;
            const imgId = `#proj-img${projectNumber}`;

          
            $(selector + ' .project-content').mouseenter(() => {
                $(imgId).fadeIn(200);
            });

            $(selector).mouseleave(() => {
                $(imgId).fadeOut(200);
            });

     
            $(imgId).mouseenter(() => {
                $(imgId).css('width', '35vw');
            });

            $(imgId).mouseleave(() => {
                $(imgId).css('width', '25vw');
            });

            new Typed(`.project${projectNumber} .project-content h2 span`, {
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