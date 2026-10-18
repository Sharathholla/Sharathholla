// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navbar = document.querySelector('.navbar');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navbar.classList.remove('open'));
});

// ---- Experience "show more" toggle ----
document.querySelectorAll('.show-more-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.timeline-content');
    const expanded = card.classList.toggle('expanded');
    const label = btn.querySelector('.show-more-text');
    label.textContent = expanded ? 'Show less' : `Show ${btn.dataset.count} more`;
  });
});

// ---- 2026 Achievements & Certifications ----
const ACHIEVEMENTS = [
  {
    title: 'EKS Auto Mode Demo — Bronze Recognition',
    issuer: 'Xylem',
    date: '24 Apr 2026',
    icon: 'fa-solid fa-award',
    featured: true,
    description:
      "Awarded Bronze (50 points) for an impactful demo on EKS Auto Mode. \u201cHis solution demonstrates a practical way to automate updates, reducing manual involvement and improving efficiency.\u201d — Recognized by Kinneraveena Doraiswamy.",
    type: 'pdf',
    src: 'Assets/2026/Recognition_Certificate (1).pdf',
  },
  {
    title: 'MLOps with Agent Platform: Manage Features',
    issuer: 'Google Cloud Skills Boost',
    date: '24 Sep 2026',
    icon: 'fa-brands fa-google',
    featured: true,
    description: 'Badge earned for managing ML features on an agent platform as part of an MLOps learning path — directly applied to production feature/model workflows.',
    type: 'link',
    src: 'https://www.skills.google/public_profiles/ad74f353-7b3f-4069-8e5f-130ce61244ed/badges/28300475',
  },
  {
    title: 'Machine Learning Operations (MLOps): Getting Started',
    issuer: 'Google Cloud Skills Boost',
    date: '12 Aug 2026',
    icon: 'fa-brands fa-google',
    description: 'Foundational badge covering core MLOps concepts and practices on Google Cloud.',
    type: 'link',
    src: 'https://www.skills.google/public_profiles/ad74f353-7b3f-4069-8e5f-130ce61244ed/badges/26655776',
  },
  {
    title: 'Model Context Protocol: Advanced Topics',
    issuer: 'Anthropic',
    date: '2026',
    icon: 'fa-solid fa-robot',
    description: 'Certificate of completion covering advanced MCP concepts for building and extending AI agent integrations.',
    type: 'pdf',
    src: 'Assets/2026/claude-mcp.pdf',
  },
  {
    title: 'Claude with Amazon Bedrock',
    issuer: 'Anthropic',
    date: '2026',
    icon: 'fa-solid fa-robot',
    description: 'Certificate of completion for deploying and using Claude models through Amazon Bedrock.',
    type: 'pdf',
    src: 'Assets/2026/Claude with Amazon Bedrock.pdf',
  },
  {
    title: 'Introduction to Agent Skills',
    issuer: 'Anthropic',
    date: '2026',
    icon: 'fa-solid fa-robot',
    description: 'Certificate of completion on building and using Agent Skills with Claude.',
    type: 'pdf',
    src: 'Assets/2026/claude-introduction-to-agent-skills.pdf',
  },
  {
    title: 'Introduction to Subagents',
    issuer: 'Anthropic',
    date: '2026',
    icon: 'fa-solid fa-robot',
    description: 'Certificate of completion on orchestrating subagents within Claude-based agent workflows.',
    type: 'pdf',
    src: 'Assets/2026/Claude - Introduction to Subagents.pdf',
  },
  {
    title: 'Configure AWS Lambda for Serverless Monitoring with Datadog',
    issuer: 'Datadog',
    date: '15 Mar 2026',
    icon: 'fa-solid fa-chart-line',
    description: 'Certificate of completion (ID: jenxbnvdfq) for configuring AWS Lambda serverless monitoring with Datadog.',
    type: 'pdf',
    src: 'Assets/2026/datadog-serverless-lambda-monitoring.pdf',
  },
  {
    title: 'Customize Alert Monitor Notifications',
    issuer: 'Datadog',
    date: '16 Mar 2026',
    icon: 'fa-solid fa-chart-line',
    description: 'Certificate of completion (ID: efwfwejoqv) for customizing Datadog alert monitor notifications.',
    type: 'pdf',
    src: 'Assets/2026/datadog-alert-notification-certificate.pdf',
  },
  {
    title: 'Canary Deployments Monitoring',
    issuer: 'Datadog',
    date: '2026',
    icon: 'fa-solid fa-chart-line',
    description: 'Certificate of completion for monitoring and managing canary deployments with Datadog.',
    type: 'pdf',
    src: 'Assets/2026/Datadog_Canary_Deployments_Monitoring.pdf',
  },
  {
    title: 'Cluster Monitor',
    issuer: 'Datadog',
    date: '2026',
    icon: 'fa-solid fa-chart-line',
    description: 'Certificate of completion for cluster monitoring and management with Datadog.',
    type: 'pdf',
    src: 'Assets/2026/Datadog_Cluster_Monitor.pdf',
  },
  {
    title: 'Real User Monitoring (RUM)',
    issuer: 'Datadog',
    date: '2026',
    icon: 'fa-solid fa-chart-line',
    description: 'Certificate of completion for implementing Real User Monitoring with Datadog.',
    type: 'pdf',
    src: 'Assets/2026/Datadog_RUM.pdf',
  },
  {
    title: 'Kubecost Certification',
    issuer: 'Kubecost',
    date: '2026',
    icon: 'fa-solid fa-gauge-high',
    description: 'Certification demonstrating expertise in Kubernetes cost optimization and analysis.',
    type: 'pdf',
    src: 'Assets/2026/Kubecost_Certificate.pdf',
  },
  {
    title: 'Cloud Infrastructure Security',
    issuer: 'Sumo Logic',
    date: '2026',
    icon: 'fa-solid fa-shield',
    description: 'Certificate of completion for cloud infrastructure security practices and monitoring with Sumo Logic.',
    type: 'pdf',
    src: 'Assets/2026/sumologic-cloud-infrastructure-security.pdf',
  },
  {
    title: 'Administrator Certification',
    issuer: 'Sumo Logic',
    date: '2026',
    icon: 'fa-solid fa-shield',
    description: 'Administrator certification for managing and configuring Sumo Logic platforms and services.',
    type: 'pdf',
    src: 'Assets/2026/sumologic_administartor_certificate-j8yia6xnrz55-1740146623.pdf',
  },
  {
    title: 'Microsoft Learn — Verified Credentials',
    issuer: 'Microsoft',
    date: '2026',
    icon: 'fa-brands fa-microsoft',
    description: 'Public Microsoft Learn transcript listing earned certifications and completed learning paths.',
    type: 'link',
    src: 'https://learn.microsoft.com/en-gb/users/sharathholla-5258/transcript/vje18s9p3133j33?tab=credentials-tab',
  },
];

const achvGrid = document.getElementById('achvGrid');
const achvModalOverlay = document.getElementById('achvModalOverlay');
const achvModalBody = document.getElementById('achvModalBody');
const achvModalClose = document.getElementById('achvModalClose');

function renderAchievements() {
  if (!achvGrid) return;
  achvGrid.innerHTML = ACHIEVEMENTS.map((item, index) => `
    <div class="achv-card${item.featured ? ' featured' : ''}">
      ${item.featured ? '<span class="achv-badge">Featured</span>' : ''}
      <div class="achv-card-top">
        <i class="${item.icon} achv-icon"></i>
        <button type="button" class="achv-eye-btn" data-index="${index}" aria-label="View details">
          <i class="fa-regular fa-eye"></i>
        </button>
      </div>
      <h4>${item.title}</h4>
      <p class="muted achv-meta">${item.issuer} · ${item.date}</p>
    </div>
  `).join('');
}

function openAchievementModal(index) {
  const item = ACHIEVEMENTS[index];
  if (!item || !achvModalOverlay || !achvModalBody) return;

  const linkHtml = item.type === 'pdf'
    ? `<a class="btn btn-primary" href="${encodeURI(item.src)}" target="_blank" rel="noopener"><i class="fa-regular fa-file-pdf"></i> Open certificate (PDF)</a>`
    : `<a class="btn btn-primary" href="${item.src}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Verify credential</a>`;

  achvModalBody.innerHTML = `
    <i class="${item.icon} achv-modal-icon"></i>
    <h3 id="achvModalTitle">${item.title}</h3>
    <p class="muted achv-meta">${item.issuer} · ${item.date}</p>
    <p class="achv-modal-desc">${item.description}</p>
    ${linkHtml}
  `;
  achvModalOverlay.hidden = false;
}

function closeAchievementModal() {
  if (achvModalOverlay) achvModalOverlay.hidden = true;
}

if (achvGrid) {
  renderAchievements();
  achvGrid.addEventListener('click', (event) => {
    const btn = event.target.closest('.achv-eye-btn');
    if (!btn) return;
    openAchievementModal(Number(btn.dataset.index));
  });
}

if (achvModalClose) achvModalClose.addEventListener('click', closeAchievementModal);
if (achvModalOverlay) {
  achvModalOverlay.addEventListener('click', (event) => {
    if (event.target === achvModalOverlay) closeAchievementModal();
  });
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeAchievementModal();
});


// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reveal sections on scroll
const revealTargets = document.querySelectorAll('.section, .hero');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => {
  el.classList.add('pre-reveal');
  observer.observe(el);
});

// ---- Contact form -> Google Form submission ----
// Wired to the "Github.io Contact List" Google Form (Name, Email, Phone Number).
// Google Forms/Sheets already auto-records a server-side "Timestamp" column for every response.
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd1eINpw-qrj5qy0wbiYqqI6fpXRES9xLg8E3mvOoN0k4-eDw/formResponse';
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.1938298703',
  email: 'entry.119454574',
  phone: 'entry.1411018380',
  message: 'entry.1040510351',
};

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('cfName').value.trim();
    const email = document.getElementById('cfEmail').value.trim();
    const phone = document.getElementById('cfPhone').value.trim();
    const message = document.getElementById('cfMessage').value.trim();

    formStatus.classList.remove('error');

    if (!name || !email || !phone) {
      formStatus.textContent = 'Please fill in all fields.';
      formStatus.classList.add('error');
      return;
    }

    const payload = new FormData();
    payload.append(GOOGLE_FORM_ENTRIES.name, name);
    payload.append(GOOGLE_FORM_ENTRIES.email, email);
    payload.append(GOOGLE_FORM_ENTRIES.phone, phone);
    payload.append(GOOGLE_FORM_ENTRIES.message, message);

    const submitBtn = contactForm.querySelector('.form-submit');
    submitBtn.disabled = true;
    formStatus.textContent = 'Sending...';

    try {
      // Google Forms blocks cross-origin reads, so "no-cors" always looks successful once the request is sent.
      await fetch(GOOGLE_FORM_ACTION_URL, { method: 'POST', mode: 'no-cors', body: payload });
      formStatus.textContent = "Thanks! Your message has been sent — I'll get back to you soon.";
      contactForm.reset();
    } catch (err) {
      formStatus.textContent = 'Something went wrong. Please try again later.';
      formStatus.classList.add('error');
    } finally {
      submitBtn.disabled = false;
    }
  });
}
