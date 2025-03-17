function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var check = document.querySelector("#check");
var ball = document.querySelector(".ball");

// Set initial toggle state based on current theme
window.addEventListener("DOMContentLoaded", function () {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  check.checked = isDark;
});

check.addEventListener("change", function () {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  const lightLogo = document.querySelector(".light-mode-logo");
  const darkLogo = document.querySelector(".dark-mode-logo");

  if (isDark) {
    document.body.removeAttribute("data-theme");
    lightLogo.style.display = "block";
    darkLogo.style.display = "none";
  } else {
    document.body.setAttribute("data-theme", "dark");
    lightLogo.style.display = "none";
    darkLogo.style.display = "block";
  }
});

const certifications = [
  {
    name: "Git Certification",
    image: "assets/kodekloud-Git.png",
    link: "https://engineer.kodekloud.com/certificate-verification/ded91b22-6b5f-4d17-ad9e-b62283768ce8?view",
  },
  {
    name: "Pearson Cloud Specialist",
    image: "assets/PearsonItSpecialist.jpeg",
    link: "https://www.credly.com/badges/c6a0127b-ca44-485e-b6cf-b296af22ffd8/public_url",
  },
  {
    name: "Linux System Administration",
    image: "assets/kodekloud-Linux.png",
    link: "https://engineer.kodekloud.com/certificate-verification/7f35f53e-c7c5-47b3-bfce-5c97ee27bc45",
  },
  {
    name: "Docker Certification",
    image: "assets/kodekloud-Docker.png",
    link: "https://engineer.kodekloud.com/certificate-verification/2811c9f5-857c-46c0-8e43-8b2ca572719c?view",
  },
  {
    name: "Jenkins Certification",
    image: "assets/kodekloud-Jenkins.png",
    link: "https://engineer.kodekloud.com/certificate-verification/5cb85756-cb4f-46a1-88cb-8c7da58c92e2?view",
  },
  // {
  //   name: "AWS Certified Solutions Architect",
  //   image: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  // },
  // {
  //   name: "Docker Certified Associate",
  //   image: "https://images.credly.com/size/680x680/images/99289602-861e-4929-8277-773e63a2fa6f/image.png"
  // },
  // {
  //   name: "Azure Fundamentals",
  //   image: "https://www.securecloudaas.com/wp-content/uploads/2021/03/azure_logo_794_new.png"
  // },
  // {
  //   name: "Kubernetes Administrator",
  //   image: "https://images.credly.com/size/680x680/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png"
  // },
  // {
  //   name: "CompTIA Linux+",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStLo48S5ZEOWId08gjTdvzlc0-7pnHI0GJA&s"
  // },
];

const tools = [
  {
    name: "Docker",
    image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  },
  {
    name: "Kubernetes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1055px-Kubernetes_logo_without_workmark.svg.png",
  },
  {
    name: "Jenkins",
    image: "https://www.jenkins.io/images/logos/jenkins/jenkins.png",
  },
  {
    name: "Git",
    image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    name: "AWS",
    image:
      "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
  },
  {
    name: "Azure",
    image:
      "https://www.securecloudaas.com/wp-content/uploads/2021/03/azure_logo_794_new.png",
  },
  {
    name: "Linux",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png",
  },
  {
    name: "MongoDB",
    image: "https://www.mongodb.com/assets/images/global/leaf.png",
  },
  {
    name: "Node js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
  },
  {
    name: "React",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
];

// Function to create marquee items
function createMarqueeItems(items, containerId) {
  const container = document.getElementById(containerId);

  // Create content div (will be animated)
  const contentDiv = document.createElement("div");
  contentDiv.className = "marquee-content";

  // Create items using the array
  const itemsHTML = items
    .map(
      (item) => `
    <div class="marquee-item">
      <a href="${item.link}" target="_blank">
        <img src="${item.image}" alt="${item.name}" />
      </a>
      <span>${item.name}</span>
    </div>
  `
    )
    .join("");

  // Add the items to the content div
  contentDiv.innerHTML = itemsHTML;

  // Add a duplicate set for continuous scrolling
  const duplicateContentDiv = contentDiv.cloneNode(true);

  // Add both to the container
  container.appendChild(contentDiv);
  container.appendChild(duplicateContentDiv);
}

// Initialize marquees when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Create marquees
  createMarqueeItems(certifications, "certifications-marquee");
  createMarqueeItems(tools, "tools-marquee");

  // Check if dark mode is enabled initially
  const isDark = document.body.getAttribute("data-theme") === "dark";
  check.checked = isDark;
});
