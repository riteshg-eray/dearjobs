const jobs = [
  { id: 1, title: "Senior SDET", company: "Northstar Financial", location: "Jersey City, NJ", model: "Hybrid", auth: "C2C", age: "2h ago", skills: ["Playwright", "TypeScript", "API", "CI/CD"], salary: "$70–82/hr", match: 96 },
  { id: 2, title: "QA Automation Lead", company: "Summit Digital", location: "New York, NY", model: "Hybrid", auth: "H-1B Transfer", age: "5h ago", skills: ["Java", "Selenium", "Jenkins", "Leadership"], salary: "$145–165k", match: 92 },
  { id: 3, title: "Mobile Automation Engineer", company: "BluePeak Media", location: "Remote — US", model: "Remote", auth: "C2C", age: "1d ago", skills: ["Appium", "Android", "iOS", "REST"], salary: "$65–75/hr", match: 89 },
  { id: 4, title: "SDET Architect — Payments", company: "FinCore Labs", location: "Berkeley Heights, NJ", model: "Onsite", auth: "H-1B Transfer", age: "1d ago", skills: ["Playwright", "Postman", "SQL", "Payments"], salary: "$72–85/hr", match: 87 },
  { id: 5, title: "AI Quality Engineer", company: "SignalWorks AI", location: "Remote — US", model: "Remote", auth: "W2", age: "2d ago", skills: ["LLM Evaluation", "Python", "RAG", "GitHub"], salary: "$150–180k", match: 84 },
  { id: 6, title: "QA Release Manager", company: "Harbor Bank", location: "Newark, NJ", model: "Hybrid", auth: "C2C", age: "2d ago", skills: ["Release", "Risk", "AWS", "Governance"], salary: "$68–78/hr", match: 81 },
  { id: 7, title: "Full Stack Developer", company: "Liberty Commerce", location: "New York, NY", model: "Hybrid", auth: "W2", age: "1h ago", skills: ["React", "Node.js", "TypeScript", "PostgreSQL"], salary: "$145–175k", match: 94 },
  { id: 8, title: "AI Engineer", company: "Bay Intelligence", location: "San Francisco, CA", model: "Hybrid", auth: "H-1B Transfer", age: "2h ago", skills: ["Python", "PyTorch", "LLM", "MLOps"], salary: "$175–215k", match: 93 },
  { id: 9, title: "Technical Project Manager", company: "Windy City Systems", location: "Chicago, IL", model: "Hybrid", auth: "W2", age: "3h ago", skills: ["Agile", "Jira", "Roadmaps", "Stakeholders"], salary: "$125–150k", match: 92 },
  { id: 10, title: "Data Engineer", company: "Hill Country Data", location: "Austin, TX", model: "Hybrid", auth: "C2C", age: "4h ago", skills: ["Python", "Spark", "Airflow", "Snowflake"], salary: "$140–170k", match: 91 },
  { id: 11, title: "Cloud Solutions Architect", company: "Emerald Cloud", location: "Seattle, WA", model: "Remote", auth: "W2", age: "5h ago", skills: ["AWS", "Kubernetes", "Terraform", "Architecture"], salary: "$170–205k", match: 90 },
  { id: 12, title: "Cybersecurity Analyst", company: "Capital Shield", location: "Washington, DC", model: "Hybrid", auth: "US Citizen", age: "6h ago", skills: ["SIEM", "SOC", "Incident Response", "NIST"], salary: "$115–140k", match: 89 },
  { id: 13, title: "Backend Developer", company: "Harbor Software", location: "Boston, MA", model: "Hybrid", auth: "H-1B Transfer", age: "7h ago", skills: ["Java", "Spring Boot", "Kafka", "Microservices"], salary: "$150–180k", match: 88 },
  { id: 14, title: "Product Manager", company: "Rocky Mountain Labs", location: "Denver, CO", model: "Hybrid", auth: "W2", age: "8h ago", skills: ["Product Strategy", "Analytics", "Discovery", "Roadmaps"], salary: "$135–165k", match: 87 },
  { id: 15, title: "DevOps Engineer", company: "Peachtree Platforms", location: "Atlanta, GA", model: "Remote", auth: "C2C", age: "9h ago", skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions"], salary: "$135–165k", match: 86 },
  { id: 16, title: "Machine Learning Engineer", company: "Pacific Vision", location: "Los Angeles, CA", model: "Hybrid", auth: "H-1B Transfer", age: "10h ago", skills: ["Python", "TensorFlow", "Computer Vision", "MLOps"], salary: "$165–200k", match: 85 },
  { id: 17, title: "Business Intelligence Developer", company: "Desert Analytics", location: "Phoenix, AZ", model: "Hybrid", auth: "W2", age: "11h ago", skills: ["Power BI", "SQL", "DAX", "ETL"], salary: "$110–135k", match: 84 },
  { id: 18, title: "Mobile App Developer", company: "Ocean Mobile", location: "Miami, FL", model: "Hybrid", auth: "C2C", age: "12h ago", skills: ["React Native", "iOS", "Android", "REST"], salary: "$125–155k", match: 83 },
  { id: 19, title: "Scrum Master", company: "Keystone Digital", location: "Philadelphia, PA", model: "Onsite", auth: "W2", age: "13h ago", skills: ["Scrum", "SAFe", "Coaching", "Jira"], salary: "$105–130k", match: 82 },
  { id: 20, title: "Database Administrator", company: "Lone Star Health", location: "Dallas, TX", model: "Hybrid", auth: "W2", age: "14h ago", skills: ["SQL Server", "PostgreSQL", "Performance", "Backup"], salary: "$115–140k", match: 81 },
  { id: 21, title: "Data Scientist", company: "Gulf Analytics", location: "Houston, TX", model: "Remote", auth: "H-1B Transfer", age: "15h ago", skills: ["Python", "Machine Learning", "SQL", "Statistics"], salary: "$145–175k", match: 80 },
  { id: 22, title: "Site Reliability Engineer", company: "Twin Cities Tech", location: "Minneapolis, MN", model: "Hybrid", auth: "C2C", age: "16h ago", skills: ["Go", "Kubernetes", "Observability", "SRE"], salary: "$145–175k", match: 79 },
  { id: 23, title: "UX Designer", company: "Motor City Design", location: "Detroit, MI", model: "Hybrid", auth: "W2", age: "17h ago", skills: ["Figma", "Research", "Prototyping", "Design Systems"], salary: "$105–135k", match: 78 },
  { id: 24, title: "Frontend Developer", company: "Music City Apps", location: "Nashville, TN", model: "Remote", auth: "W2", age: "18h ago", skills: ["React", "TypeScript", "Next.js", "Accessibility"], salary: "$120–150k", match: 77 },
  { id: 25, title: "ERP Program Manager", company: "Gateway Manufacturing", location: "St. Louis, MO", model: "Onsite", auth: "W2", age: "19h ago", skills: ["SAP", "Program Management", "Budgeting", "Change Management"], salary: "$145–175k", match: 76 },
  { id: 26, title: "Network Engineer", company: "Queen City Networks", location: "Charlotte, NC", model: "Hybrid", auth: "US Citizen", age: "20h ago", skills: ["Cisco", "SD-WAN", "Firewalls", "Network Security"], salary: "$110–140k", match: 75 },
  { id: 27, title: "Software Engineering Manager", company: "Rose City Software", location: "Portland, OR", model: "Hybrid", auth: "H-1B Transfer", age: "21h ago", skills: ["Leadership", "JavaScript", "Architecture", "Hiring"], salary: "$170–205k", match: 74 },
  { id: 28, title: "Healthcare Data Analyst", company: "Buckeye HealthTech", location: "Columbus, OH", model: "Hybrid", auth: "W2", age: "22h ago", skills: ["SQL", "Tableau", "Healthcare", "Analytics"], salary: "$95–120k", match: 73 },
  { id: 29, title: "Platform Engineer", company: "Steel City Cloud", location: "Pittsburgh, PA", model: "Remote", auth: "C2C", age: "23h ago", skills: ["Kubernetes", "Go", "Terraform", "CI/CD"], salary: "$140–170k", match: 72 },
  { id: 30, title: "Information Security Manager", company: "Charm City Secure", location: "Baltimore, MD", model: "Hybrid", auth: "US Citizen", age: "1d ago", skills: ["GRC", "Risk", "ISO 27001", "Leadership"], salary: "$145–175k", match: 71 },
  { id: 31, title: "Embedded Software Engineer", company: "Indy Mobility", location: "Indianapolis, IN", model: "Onsite", auth: "W2", age: "1d ago", skills: ["C++", "Embedded Linux", "CAN", "RTOS"], salary: "$120–150k", match: 70 },
  { id: 32, title: "FinTech Product Owner", company: "Salt Lake Finance", location: "Salt Lake City, UT", model: "Hybrid", auth: "H-1B Transfer", age: "1d ago", skills: ["Product Backlog", "FinTech", "Agile", "APIs"], salary: "$120–145k", match: 69 },
  { id: 33, title: "Solutions Engineer", company: "Mission Tech", location: "San Diego, CA", model: "Hybrid", auth: "W2", age: "1d ago", skills: ["APIs", "Cloud", "Demos", "Customer Success"], salary: "$130–160k", match: 68 },
  { id: 34, title: "Robotics Engineer", company: "Research Triangle Robotics", location: "Raleigh, NC", model: "Onsite", auth: "H-1B Transfer", age: "1d ago", skills: ["ROS", "Python", "C++", "Computer Vision"], salary: "$135–165k", match: 67 },
  { id: 35, title: "Enterprise Architect", company: "River City Enterprise", location: "Jacksonville, FL", model: "Hybrid", auth: "C2C", age: "1d ago", skills: ["TOGAF", "Cloud", "Integration", "Architecture"], salary: "$160–195k", match: 66 },
  { id: 36, title: "GIS Developer", company: "Heartland Mapping", location: "Kansas City, MO", model: "Hybrid", auth: "W2", age: "1d ago", skills: ["ArcGIS", "Python", "JavaScript", "Spatial Data"], salary: "$105–130k", match: 65 },
  { id: 37, title: "IT Operations Manager", company: "Silver State Resorts", location: "Las Vegas, NV", model: "Onsite", auth: "W2", age: "1d ago", skills: ["ITIL", "Operations", "Vendors", "ServiceNow"], salary: "$115–145k", match: 64 },
  { id: 38, title: "Cloud Security Engineer", company: "Cream City Security", location: "Milwaukee, WI", model: "Remote", auth: "US Citizen", age: "1d ago", skills: ["AWS Security", "IAM", "DevSecOps", "Terraform"], salary: "$140–170k", match: 63 },
  { id: 39, title: "Systems Analyst", company: "Sooner Systems", location: "Oklahoma City, OK", model: "Hybrid", auth: "W2", age: "1d ago", skills: ["Requirements", "SQL", "Process Modeling", "UAT"], salary: "$90–115k", match: 62 },
  { id: 40, title: "API Developer", company: "Bluegrass Digital", location: "Louisville, KY", model: "Remote", auth: "C2C", age: "1d ago", skills: ["Node.js", "REST", "GraphQL", "PostgreSQL"], salary: "$115–145k", match: 61 },
  { id: 41, title: "E-commerce Product Manager", company: "River Bluff Retail", location: "Memphis, TN", model: "Hybrid", auth: "W2", age: "2d ago", skills: ["E-commerce", "Analytics", "A/B Testing", "Roadmaps"], salary: "$120–150k", match: 60 },
  { id: 42, title: "AI Research Scientist", company: "Route 66 AI", location: "Albuquerque, NM", model: "Hybrid", auth: "H-1B Transfer", age: "2d ago", skills: ["Deep Learning", "NLP", "Python", "Research"], salary: "$155–190k", match: 59 },
  { id: 43, title: "Salesforce Developer", company: "Sonoran CRM", location: "Tucson, AZ", model: "Remote", auth: "W2", age: "2d ago", skills: ["Apex", "Lightning", "SOQL", "Integrations"], salary: "$120–150k", match: 58 },
  { id: 44, title: "Data Governance Manager", company: "Capital City Data", location: "Sacramento, CA", model: "Hybrid", auth: "W2", age: "2d ago", skills: ["Governance", "Catalog", "Privacy", "Data Quality"], salary: "$135–165k", match: 57 },
  { id: 45, title: "Insurance Technology Analyst", company: "Plains Insurance", location: "Omaha, NE", model: "Hybrid", auth: "W2", age: "2d ago", skills: ["Guidewire", "SQL", "Insurance", "Business Analysis"], salary: "$95–120k", match: 56 },
  { id: 46, title: "Payments Software Developer", company: "Suncoast Payments", location: "Tampa, FL", model: "Hybrid", auth: "C2C", age: "2d ago", skills: ["Java", "Spring", "Payments", "Kafka"], salary: "$130–160k", match: 55 },
  { id: 47, title: "Technical Business Analyst", company: "Fresno AgTech", location: "Fresno, CA", model: "Onsite", auth: "W2", age: "2d ago", skills: ["Requirements", "Agile", "SQL", "Process Mapping"], salary: "$90–115k", match: 54 },
  { id: 48, title: "DevSecOps Engineer", company: "Old Dominion Cloud", location: "Richmond, VA", model: "Remote", auth: "US Citizen", age: "2d ago", skills: ["DevSecOps", "Kubernetes", "SAST", "Terraform"], salary: "$140–170k", match: 53 },
  { id: 49, title: "Analytics Engineering Lead", company: "Crescent City Analytics", location: "New Orleans, LA", model: "Hybrid", auth: "W2", age: "2d ago", skills: ["dbt", "Snowflake", "SQL", "Leadership"], salary: "$135–165k", match: 52 },
  { id: 50, title: "Supply Chain Project Manager", company: "Inland Logistics", location: "Riverside, CA", model: "Onsite", auth: "W2", age: "2d ago", skills: ["Supply Chain", "Project Management", "ERP", "Lean"], salary: "$110–140k", match: 51 },
  { id: 51, title: "Computer Vision Engineer", company: "Spartan Vision", location: "San Jose, CA", model: "Hybrid", auth: "H-1B Transfer", age: "2d ago", skills: ["Python", "OpenCV", "PyTorch", "Edge AI"], salary: "$170–205k", match: 50 },
  { id: 52, title: "Digital Transformation Director", company: "Virginia Beach Digital", location: "Virginia Beach, VA", model: "Hybrid", auth: "W2", age: "2d ago", skills: ["Strategy", "Transformation", "Cloud", "Leadership"], salary: "$175–210k", match: 49 },
  { id: 53, title: "Java Microservices Developer", company: "Queen City Finance", location: "Cincinnati, OH", model: "Hybrid", auth: "H-1B Transfer", age: "3d ago", skills: ["Java", "Spring Boot", "Kafka", "AWS"], salary: "$125–155k", match: 48 },
  { id: 54, title: "Data Warehouse Architect", company: "First Coast Data", location: "Orlando, FL", model: "Remote", auth: "C2C", age: "3d ago", skills: ["Snowflake", "ETL", "Dimensional Modeling", "AWS"], salary: "$145–175k", match: 47 },
  { id: 55, title: "Agile Delivery Manager", company: "Granite State Solutions", location: "Providence, RI", model: "Hybrid", auth: "W2", age: "3d ago", skills: ["Agile", "Delivery", "Risk", "Portfolio Management"], salary: "$125–150k", match: 46 },
  { id: 56, title: "Renewable Energy Data Engineer", company: "Nutmeg Energy", location: "Hartford, CT", model: "Hybrid", auth: "W2", age: "3d ago", skills: ["Python", "Spark", "IoT", "Data Lakes"], salary: "$125–155k", match: 45 }
];

const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="Dear Jobs helps technology professionals discover jobs that match their skills, work model, and work authorization.">
  <title>Dear Jobs — Work that fits</title>
  <style>
    :root{--blue:#1555f5;--blue2:#0f43c7;--navy:#071b49;--slate:#60708f;--pale:#eff6ff;--border:#d6e0ef;--green:#16a46a;--white:#fff;--shadow:0 12px 30px rgba(31,74,136,.14)}
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--navy);background:#f8faff}button,input,select{font:inherit}.container{width:min(1180px,calc(100% - 40px));margin:auto}
    header{height:76px;background:#fff;border-bottom:1px solid #edf1f7;display:flex;align-items:center;position:sticky;top:0;z-index:20}.nav{display:flex;align-items:center;gap:34px}.brand{display:flex;align-items:center;gap:11px;font-size:25px;font-weight:800;letter-spacing:-.8px;margin-right:18px}.brandmark{width:40px;height:28px;position:relative;border-top:5px solid var(--blue);border-radius:50%}.brandmark:after{content:"";position:absolute;left:5px;right:5px;top:7px;border-top:3px solid #7db0ff}.nav a{color:var(--navy);text-decoration:none;font-weight:650;font-size:14px}.nav-actions{margin-left:auto;display:flex;gap:12px;align-items:center}.btn{border:0;border-radius:10px;padding:12px 18px;font-weight:750;cursor:pointer}.primary{background:var(--blue);color:#fff}.primary:hover{background:var(--blue2)}.ghost{background:transparent;color:var(--navy)}
    .view{display:none}.view.active{display:block}.hero{background:linear-gradient(118deg,#f5f9ff 0%,#e9f3ff 100%);padding:64px 0 42px;overflow:hidden;position:relative}.hero:after{content:"";position:absolute;width:620px;height:350px;border:52px solid rgba(124,177,255,.25);border-bottom:0;border-radius:360px 360px 0 0;right:-70px;bottom:-170px}.hero-content{position:relative;z-index:1}.eyebrow{display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--blue);border:1px solid #dbe7ff;padding:7px 11px;border-radius:999px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.55px}.hero h1{font-size:52px;line-height:1.05;letter-spacing:-2.1px;max-width:780px;margin:18px 0 15px}.hero p{font-size:19px;line-height:1.55;color:var(--slate);max-width:600px;margin:0 0 28px}.searchbox{background:#fff;border:1px solid var(--border);border-radius:15px;padding:12px;display:grid;grid-template-columns:1.25fr 1fr 180px;box-shadow:var(--shadow);max-width:1040px}.field{display:flex;align-items:center;gap:10px;padding:0 17px;border-right:1px solid var(--border)}.field span{color:var(--blue);font-size:20px}.field input{border:0;outline:0;width:100%;height:52px;color:var(--navy)}.searchbox .btn{border-radius:9px}.chips{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}.chip{border:1px solid #a9c2ff;color:var(--blue);background:#fff;border-radius:999px;padding:9px 14px;cursor:pointer;font-weight:700;font-size:13px}.chip.active{background:var(--blue);color:#fff;border-color:var(--blue)}
    .section{padding:44px 0 68px}.section-head{display:flex;align-items:end;justify-content:space-between;margin-bottom:20px}.section-head h2{font-size:27px;letter-spacing:-.7px;margin:0}.section-head p{margin:7px 0 0;color:var(--slate)}.result-count{background:#e8f0ff;color:var(--blue);padding:6px 10px;border-radius:7px;font-size:13px;font-weight:800}.jobs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.job{background:#fff;border:1px solid var(--border);border-radius:13px;padding:20px;box-shadow:0 6px 16px rgba(16,46,90,.06);transition:.2s}.job:hover{transform:translateY(-3px);box-shadow:var(--shadow)}.job-top{display:flex;justify-content:space-between;gap:15px}.logo{width:42px;height:42px;border-radius:10px;background:#eaf2ff;color:var(--blue);display:grid;place-items:center;font-weight:900}.save{border:0;background:#f2f6fc;width:36px;height:36px;border-radius:9px;cursor:pointer;font-size:18px}.save.saved{background:#e7f8f1;color:var(--green)}.job h3{font-size:19px;margin:16px 0 5px}.company{color:var(--slate);font-size:13px}.meta{display:flex;gap:8px;flex-wrap:wrap;margin:15px 0;font-size:12px;color:#4c5e7b}.auth{color:var(--green);font-weight:800}.tags{display:flex;gap:7px;flex-wrap:wrap;border-top:1px solid #e8eef7;padding-top:14px}.tag{background:#edf4ff;color:#2352a4;border-radius:7px;padding:6px 8px;font-size:11px;font-weight:700}.job-foot{display:flex;justify-content:space-between;align-items:center;margin-top:17px}.salary{font-weight:800}.match{color:var(--green);font-size:12px;font-weight:800}
    .tracker{padding:52px 0 80px}.tracker-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:26px}.column{background:#eef3f9;border:1px solid var(--border);border-radius:13px;padding:14px;min-height:330px}.column h3{font-size:14px;margin:3px 2px 14px;display:flex;justify-content:space-between}.count{background:#fff;padding:2px 8px;border-radius:999px;color:var(--slate)}.app-card{background:#fff;border:1px solid #dce5f1;border-radius:10px;padding:13px;margin-bottom:10px}.app-card strong{font-size:13px}.app-card small{display:block;color:var(--slate);margin-top:6px}
    .toast{position:fixed;right:22px;bottom:22px;background:var(--navy);color:#fff;padding:13px 18px;border-radius:10px;box-shadow:var(--shadow);transform:translateY(100px);opacity:0;transition:.25s;z-index:40}.toast.show{transform:translateY(0);opacity:1}
    @media(max-width:850px){.nav a:not(.brand),.ghost{display:none}.hero{padding-top:42px}.hero h1{font-size:40px}.searchbox{grid-template-columns:1fr}.field{border-right:0;border-bottom:1px solid var(--border)}.jobs-grid{grid-template-columns:1fr}.tracker-grid{grid-template-columns:1fr 1fr}}
    @media(max-width:520px){.container{width:min(100% - 24px,1180px)}header{height:65px}.brand{font-size:20px}.hero h1{font-size:34px}.nav-actions .btn{padding:10px 12px}.tracker-grid{grid-template-columns:1fr}.section-head{align-items:start;gap:10px}.ticket{grid-template-columns:auto 1fr}.status{grid-column:2}}
  </style>
</head>
<body>
  <header><nav class="container nav" aria-label="Main navigation">
    <a class="brand" href="#" data-view="jobs"><span class="brandmark" aria-hidden="true"></span>Dear Jobs</a>
    <a href="#" data-view="jobs">Find Jobs</a><a href="#" data-view="tracker">My Applications</a>
    <div class="nav-actions"><button class="btn ghost" id="savedBtn">Saved <span id="savedCount">0</span></button><button class="btn primary" data-view="tracker">Track Applications</button></div>
  </nav></header>

  <main>
    <section class="view active" id="jobs-view">
      <div class="hero"><div class="container hero-content">
        <span class="eyebrow">✓ Authorization-aware job discovery</span>
        <h1>Find work that fits your career and work authorization.</h1>
        <p>Search technology roles by skills, location, work model, and eligibility—without digging through every job description.</p>
        <form class="searchbox" id="searchForm"><label class="field"><span>⌕</span><input id="roleInput" aria-label="Role or skills" placeholder="Role or skills"></label><label class="field"><span>⌖</span><input id="locationInput" aria-label="Location" placeholder="Location"></label><button class="btn primary" type="submit">Search Jobs</button></form>
        <div class="chips" aria-label="Quick filters"><button class="chip" data-filter="C2C">C2C</button><button class="chip" data-filter="H-1B Transfer">H-1B Transfer</button><button class="chip" data-filter="Remote">Remote</button><button class="chip" data-filter="Hybrid">Hybrid</button></div>
      </div></div>
      <div class="container section"><div class="section-head"><div><h2>Recommended jobs <span class="result-count" id="resultCount">56 matches</span></h2><p>Ranked across technology, data, AI, product, and business roles.</p></div><button class="btn ghost" id="clearBtn">Clear filters</button></div><div class="jobs-grid" id="jobsGrid"></div></div>
    </section>

    <section class="view" id="tracker-view"><div class="container tracker"><div class="section-head"><div><span class="eyebrow">Application workspace</span><h2 style="margin-top:14px">Keep every opportunity moving</h2><p>Demo data shows how candidates can organize their job search.</p></div><button class="btn primary" id="addApp">+ Add application</button></div><div class="tracker-grid">
      <div class="column"><h3>Interested <span class="count">2</span></h3><div class="app-card"><strong>Senior SDET</strong><small>Northstar Financial · 96% match</small></div><div class="app-card"><strong>AI Quality Engineer</strong><small>SignalWorks AI · Saved today</small></div></div>
      <div class="column"><h3>Applied <span class="count">2</span></h3><div class="app-card"><strong>QA Automation Lead</strong><small>Applied Jul 25 · Follow up Jul 30</small></div><div class="app-card"><strong>SDET Architect</strong><small>Recruiter submitted · C2C</small></div></div>
      <div class="column"><h3>Interview <span class="count">1</span></h3><div class="app-card"><strong>Mobile Automation Engineer</strong><small>Technical round · Tomorrow, 11:00 AM</small></div></div>
      <div class="column"><h3>Decision <span class="count">1</span></h3><div class="app-card"><strong>QA Release Manager</strong><small>Waiting for client feedback</small></div></div>
    </div></div></section>

  </main>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <script>
    const allJobs=${JSON.stringify(jobs)};
    let activeFilter="", saved=new Set();
    const grid=document.getElementById("jobsGrid"), toast=document.getElementById("toast");
    function notify(message){toast.textContent=message;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2200)}
    function render(list=allJobs){grid.innerHTML=list.map(j=>'<article class="job"><div class="job-top"><div class="logo">'+j.company.split(" ").map(x=>x[0]).join("").slice(0,2)+'</div><button class="save '+(saved.has(j.id)?"saved":"")+'" data-save="'+j.id+'" aria-label="Save '+j.title+'">'+(saved.has(j.id)?"♥":"♡")+'</button></div><h3>'+j.title+'</h3><div class="company">'+j.company+' · '+j.age+'</div><div class="meta"><span>⌖ '+j.location+'</span><span>▣ '+j.model+'</span><span class="auth">✓ '+j.auth+'</span></div><div class="tags">'+j.skills.map(s=>'<span class="tag">'+s+'</span>').join("")+'</div><div class="job-foot"><span class="salary">'+j.salary+'</span><span class="match">'+j.match+'% match</span></div></article>').join("");document.getElementById("resultCount").textContent=list.length+" matches"}
    function filterJobs(){const role=document.getElementById("roleInput").value.toLowerCase(),loc=document.getElementById("locationInput").value.toLowerCase();return allJobs.filter(j=>(!role||(j.title+" "+j.skills.join(" ")).toLowerCase().includes(role))&&(!loc||j.location.toLowerCase().includes(loc))&&(!activeFilter||j.auth===activeFilter||j.model===activeFilter))}
    document.getElementById("searchForm").addEventListener("submit",e=>{e.preventDefault();render(filterJobs());notify("Search results updated")});
    document.querySelectorAll(".chip").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));activeFilter=activeFilter===b.dataset.filter?"":b.dataset.filter;b.classList.toggle("active",!!activeFilter);render(filterJobs())}));
    document.getElementById("clearBtn").addEventListener("click",()=>{activeFilter="";document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));document.getElementById("roleInput").value="";document.getElementById("locationInput").value="";render()});
    grid.addEventListener("click",e=>{const b=e.target.closest("[data-save]");if(!b)return;const id=Number(b.dataset.save);saved.has(id)?saved.delete(id):saved.add(id);document.getElementById("savedCount").textContent=saved.size;render(filterJobs());notify(saved.has(id)?"Job saved":"Job removed")});
    document.querySelectorAll("[data-view]").forEach(x=>x.addEventListener("click",e=>{e.preventDefault();const view=x.dataset.view;document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));document.getElementById(view+"-view").classList.add("active");scrollTo(0,0)}));
    document.getElementById("savedBtn").addEventListener("click",()=>{render(allJobs.filter(j=>saved.has(j.id)));notify(saved.size?saved.size+" saved jobs shown":"Save a job to see it here")});
    document.getElementById("addApp").addEventListener("click",()=>notify("Demo application added to Interested"));
    render();
  </script>
</body></html>`;

export default {
  async fetch() {
    return new Response(page, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=60"
      }
    });
  }
};
