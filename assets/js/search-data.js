// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-service",
          title: "service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-misc",
          title: "misc",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-gind-an-optimization-induced-implicit-gnn-enabling-infinite-hop-message-passing-was-accepted-as-a-spotlight-at-icml-2022",
          title: 'Our paper GIND, an optimization-induced implicit GNN enabling infinite-hop message passing, was accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-veq-the-first-to-scale-implicit-gnns-to-large-scale-graphs-was-accepted-at-ieee-bigdata-2022",
          title: 'Our paper VEQ, the first to scale implicit GNNs to large-scale graphs, was...',
          description: "",
          section: "News",},{id: "news-our-paper-nerd-on-infinitely-deep-transformers-for-image-restoration-was-accepted-to-ieee-transactions-on-image-processing-tip",
          title: 'Our paper NERD, on infinitely deep Transformers for image restoration, was accepted to...',
          description: "",
          section: "News",},{id: "news-earned-a-ph-d-in-applied-mathematics-from-peking-university-with-a-dissertation-on-deep-equilibrium-models-for-context-modeling",
          title: 'Earned a Ph.D. in Applied Mathematics from Peking University, with a dissertation on...',
          description: "",
          section: "News",},{id: "news-cread-a-classification-restoration-framework-for-long-tail-user-watch-time-prediction-was-accepted-at-aaai-2024-and-deployed-at-scale-in-the-kwai-app",
          title: 'CREAD, a classification-restoration framework for long-tail user watch-time prediction, was accepted at AAAI...',
          description: "",
          section: "News",},{id: "news-joined-aws-ai-labs-as-an-applied-scientist-working-on-llm-for-coding",
          title: 'Joined AWS AI Labs as an Applied Scientist, working on LLM for coding....',
          description: "",
          section: "News",},{id: "news-led-the-initialization-and-launch-of-the-doc-feature-for-amazon-q-developer-the-first-repository-level-code-documentation-generation-system-enabling-analysis-of-codebases-far-exceeding-llm-s-context-windows-showcased-in-matt-garman-s-keynote-at-aws-re-invent-2024",
          title: 'Led the initialization and launch of the /doc feature for Amazon Q Developer,...',
          description: "",
          section: "News",},{id: "news-kiro-autonomous-agent-was-launched-and-showcased-in-matt-garman-s-keynote-at-aws-re-invent-2025-i-led-the-end-to-end-agent-evaluation-and-benchmark-development",
          title: 'Kiro autonomous agent was launched and showcased in Matt Garman’s keynote at AWS...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%37%71%63%68%65%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=7mNt_TAAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/7qchen", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/7qchen", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_QiChen.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
