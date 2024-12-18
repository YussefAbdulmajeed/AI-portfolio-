// Project data
const projects = [
    {
        id: 1,
        name: 'sightPay DEPI graduationProject',
        description: 'Implemented a OCR model for Converting images of money into text data,\
                    EfficientNetV2L model for image classification achieving 93% accuracy.',
        dataset: {
            name: 'egyptian-new-currency-2023',
            url: 'https://www.kaggle.com/datasets/belalsafy/egyptian-new-currency-2023'
        },
        type: 'Computer Vision',
        githubUrl: 'https://github.com/YussefAbdulmajeed/sightPay-DEPI-graduationProject.git'
    },
    {
        id: 2,
        name: 'Text Generator Model',
        description: 'GPT-2 fine tuning with German Recipes and i used Google Translator API to translate\
                    from german to english and reverse',
        dataset: {
            name: 'German Recipes Dataset',
            url: 'https://www.kaggle.com/datasets/sterby/german-recipes-dataset'
        },
        type: 'NLP',
        githubUrl: 'https://github.com/YussefAbdulmajeed/NLP-Text-Generation.git'
    },
    {
        id: 3,
        name: 'Weather Classification',
        description: 'Weather Classification project using ResNets model from scratch and pre-trained model is DenseNet and Xception model',
        dataset: {
            name: '5-class weather status image classification',
            url: 'https://www.kaggle.com/datasets/ammaralfaifi/5class-weather-status-image-classification'
        },
        type: 'Deep Learning',
        githubUrl: 'https://github.com/YussefAbdulmajeed/Deep-learning-project.git'
    },
    {
        id: 4,
        name: 'house pricing',
        description: 'Developed a neural style transfer application using deep learning techniques.',
        dataset: {
            name: 'WikiArt Dataset',
            url: 'https://www.kaggle.com/c/painter-by-numbers'
        },
        type: 'Machine Learning',
        githubUrl: 'https://github.com/yourusername/style-transfer'
    }
];

// Function to create project card HTML
function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.dataset.url}" target="_blank" class="dataset-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" x2="12" y1="3" y2="15"/>
                    </svg>
                    ${project.dataset.name}
                </a>
                <div class="project-footer">
                    <span class="project-type">${project.type}</span>
                    <a href="${project.githubUrl}" target="_blank" class="github-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                        </svg>
                        View Code
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Function to render projects
function renderProjects(filteredProjects) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderProjects(projects);

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            const type = button.dataset.type;
            const filteredProjects = type === 'all' 
                ? projects 
                : projects.filter(project => project.type === type);
            
            renderProjects(filteredProjects);
        });
    });
});