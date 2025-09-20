import { Github, Linkedin, Mail, Gitlab } from "lucide-react"

export const personalInfo = {
  name: "Jitendra Patel",
  tagline: "Full Stack Software Developer | React, Node.js, Next.js",
  bio: "As a passionate Full Stack Software Developer, I thrive on building robust and scalable web applications from concept to deployment. With a strong foundation in both front-end and back-end technologies, I specialize in creating intuitive user experiences and efficient server-side logic. My expertise spans modern JavaScript frameworks, database management, and version control systems, enabling me to deliver high-quality solutions that meet complex business needs. I am committed to continuous learning and leveraging cutting-edge technologies to solve real-world problems.",
  photo: "./profileImage.png", // Updated placeholder with text
  resumeLink: "./JitendraResume.pdf", // Replace with actual resume link
  contactEmail: "pateljitendra055@gmail.com",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/Jitendra1295", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/jitendra-patel-637362a5", icon: Linkedin },
    // { name: "GitLab", url: "https://gitlab.com/jitendra-patel", icon: Gitlab },
    { name: "Email", url: "mailto:jitendra.patel@example.com", icon: Mail },
  ],
}

export const skills = {
  frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Material ui", "Shadcn UI"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Socket.IO"],
  databases: ["MongoDB", "PostgreSQL", "Redis"],
  tools: ["Git", "GitHub", "GitLab", "VS Code", "Docker", "Jira", "Postman"],
}

export const projects = [
  {
    name: "E-commerce Platform",
    description:
      "A full-featured e-commerce application with product listings, shopping cart, user authentication, and payment gateway integration.",
    techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "https://github.com/jitendra-patel/ecommerce-platform",
    image: "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
  },
  {
    name: "Real-time Chat Application",
    description:
      "A real-time chat application supporting private and group messaging, with user presence indicators and message history.",
    techStack: ["React", "Node.js", "Socket.IO", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "https://easy-talk-navy.vercel.app/login",
    githubLink: "https://github.com/Jitendra1295/Easy-Talk",
    image: "./chat-app-image.png",
  },
  {
    name: "Task Management Dashboard",
    description:
      "An intuitive dashboard for managing tasks, projects, and team collaboration, featuring drag-and-drop functionality and progress tracking.",
    techStack: ["Next.js", "TypeScript", "React Query", "Node.js", "PostgreSQL"],
    liveLink: "#",
    githubLink: "https://github.com/jitendra-patel/task-dashboard",
    image: "/placeholder.svg?height=400&width=600&text=Task+Dashboard",
  },
  {
    name: "Personal Blog & Portfolio",
    description:
      "A static site generated blog and portfolio showcasing articles and projects, optimized for SEO and performance.",
    techStack: ["Next.js", "MDX", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/jitendra-patel/personal-blog",
    image: "/placeholder.svg?height=400&width=600&text=Personal+Blog",
  },
]

export const experience = [
  {
    company: "KanhaSoft",
    role: "Sr. Software Developer",
    duration: "Aug 2024 - Present",
    description: [
      "Developed and maintained scalable web applications using React, Next.js, and Node.js.",
      "Designed and implemented RESTful APIs for various services, ensuring high performance and security.",
      "Managed MongoDB and PostgreSQL databases, including schema design, optimization, and data migration.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      // "Implemented CI/CD pipelines using GitLab CI for automated testing and deployment.",
    ],
    techUsed: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "GitLab CI"],
  },
  {
    company: "Smarsh infoTech",
    role: "Software Developer",
    duration: "Jan 2023 - Aug 2024",
    description: [
      "Assisted in the development of front-end components using React and JavaScript.",
      "Contributed to back-end development with Node.js, focusing on API integration and data handling.",
      "Participated in code reviews and learned best practices for software development.",
    ],
    techUsed: ["React", "Node.js", "Express", "MongoDB", "Git", "GitHub"],
  },
  {
    company: "Greycell Labs Pvt. Ltd",
    role: "Full Stack Developer",
    duration: "July 2019 - jan 2023",
    description: [
      "Built full - stack features using React.js and Java Spring Boot",
      "Used MongoDB aggregation and integrated third - party APIs(Mainstreet, ServiceTitan)",
      "Participated in code reviews and learned best practices for software development.",
      "Participated in Scrum ceremonies including retrospectives and sprint planning"
    ],
    techUsed: ["React", "Node.js", "Java", "Express", "MongoDB", "Git", "GitHub"],
  },
]

export const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Gujarat University",
    year: "2019",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Veer Narmad South Gujarat University",
    year: "2015",
  },
]

export const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    year: "2022",
  },
]

export const testimonials = [
  {
    quote:
      "Jitendra is an exceptional full-stack developer. His ability to tackle complex problems and deliver high-quality code is truly impressive. He was instrumental in launching our new platform.",
    author: "Sarah Chen",
    title: "Project Manager at Tech Solutions Inc.",
  },
  {
    quote:
      "Working with Jitendra was a pleasure. He's not only technically proficient but also a great team player, always willing to help and share his knowledge.",
    author: "David Lee",
    title: "Senior Software Engineer",
  },
]

export const blogPosts = [
  {
    title: "Optimizing Next.js Performance: A Deep Dive",
    link: "#",
    date: "July 15, 2024",
  },
  {
    title: "Understanding Microservices with Node.js and Docker",
    link: "#",
    date: "June 20, 2024",
  },
  {
    title: "State Management in React: Choosing the Right Approach",
    link: "#",
    date: "May 10, 2024",
  },
]
