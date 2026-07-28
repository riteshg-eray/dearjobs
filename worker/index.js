const jobs = [
  { id: 1, title: "Senior SDET", company: "Northstar Financial", location: "Jersey City, NJ", model: "Hybrid", auth: "C2C", age: "2h ago", skills: ["Playwright", "TypeScript", "API", "CI/CD"], salary: "$70–82/hr", match: 96 },
  { id: 2, title: "QA Automation Lead", company: "Summit Digital", location: "New York, NY", model: "Hybrid", auth: "H-1B Transfer", age: "5h ago", skills: ["Java", "Selenium", "Jenkins", "Leadership"], salary: "$145–165k", match: 92 },
  { id: 3, title: "Mobile Automation Engineer", company: "BluePeak Media", location: "Remote — US", model: "Remote", auth: "C2C", age: "1d ago", skills: ["Appium", "Android", "iOS", "REST"], salary: "$65–75/hr", match: 89 },
  { id: 4, title: "SDET Architect — Payments", company: "FinCore Labs", location: "Berkeley Heights, NJ", model: "Onsite", auth: "H-1B Transfer", age: "1d ago", skills: ["Playwright", "Postman", "SQL", "Payments"], salary: "$72–85/hr", match: 87 },
  { id: 5, title: "AI Quality Engineer", company: "SignalWorks AI", location: "Remote — US", model: "Remote", auth: "W2", age: "2d ago", skills: ["LLM Evaluation", "Python", "RAG", "GitHub"], salary: "$150–180k", match: 84 },
  { id: 6, title: "QA Release Manager", company: "Harbor Bank", location: "Newark, NJ", model: "Hybrid", auth: "C2C", age: "2d ago", skills: ["Release", "Risk", "AWS", "Governance"], salary: "$68–78/hr", match: 81 }
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
    header{height:76px;background:#fff;border-bottom:1px solid #edf1f7;display:flex;align-items:center;position:sticky;top:0;z-index:20}.nav{display:flex;align-items:center;gap:34px}.brand{display:flex;align-items:center;gap:11px;font-size:25px;font-weight:800;letter-spacing:-.8px;margin-right:18px}.brandmark{width:40px;height:28px;position:relative;border-top:5px solid var(--blue);border-radius:50%}.brandmark:after{content:"";position:absolute;left:5px;right:5px;top:7px;border-top:3px solid #7db0ff}.nav a{color:var(--navy);text-decoration:none;font-weight:650;font-size:14px}.nav-actions{margin-left:auto;display:flex;gap:12px;align-items:center}.btn{border:0;border-radius:10px;padding:12px 18px;font-weight:750;cursor:pointer}.primary{background:var(--blue);color:#fff}.primary:hover{background:var(--blue2)}.ghost{background:transparent;color:var(--navy)}.lab-link{color:var(--blue)!important}
    .view{display:none}.view.active{display:block}.hero{background:linear-gradient(118deg,#f5f9ff 0%,#e9f3ff 100%);padding:64px 0 42px;overflow:hidden;position:relative}.hero:after{content:"";position:absolute;width:620px;height:350px;border:52px solid rgba(124,177,255,.25);border-bottom:0;border-radius:360px 360px 0 0;right:-70px;bottom:-170px}.hero-content{position:relative;z-index:1}.eyebrow{display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--blue);border:1px solid #dbe7ff;padding:7px 11px;border-radius:999px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.55px}.hero h1{font-size:52px;line-height:1.05;letter-spacing:-2.1px;max-width:780px;margin:18px 0 15px}.hero p{font-size:19px;line-height:1.55;color:var(--slate);max-width:600px;margin:0 0 28px}.searchbox{background:#fff;border:1px solid var(--border);border-radius:15px;padding:12px;display:grid;grid-template-columns:1.25fr 1fr 180px;box-shadow:var(--shadow);max-width:1040px}.field{display:flex;align-items:center;gap:10px;padding:0 17px;border-right:1px solid var(--border)}.field span{color:var(--blue);font-size:20px}.field input{border:0;outline:0;width:100%;height:52px;color:var(--navy)}.searchbox .btn{border-radius:9px}.chips{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}.chip{border:1px solid #a9c2ff;color:var(--blue);background:#fff;border-radius:999px;padding:9px 14px;cursor:pointer;font-weight:700;font-size:13px}.chip.active{background:var(--blue);color:#fff;border-color:var(--blue)}
    .section{padding:44px 0 68px}.section-head{display:flex;align-items:end;justify-content:space-between;margin-bottom:20px}.section-head h2{font-size:27px;letter-spacing:-.7px;margin:0}.section-head p{margin:7px 0 0;color:var(--slate)}.result-count{background:#e8f0ff;color:var(--blue);padding:6px 10px;border-radius:7px;font-size:13px;font-weight:800}.jobs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.job{background:#fff;border:1px solid var(--border);border-radius:13px;padding:20px;box-shadow:0 6px 16px rgba(16,46,90,.06);transition:.2s}.job:hover{transform:translateY(-3px);box-shadow:var(--shadow)}.job-top{display:flex;justify-content:space-between;gap:15px}.logo{width:42px;height:42px;border-radius:10px;background:#eaf2ff;color:var(--blue);display:grid;place-items:center;font-weight:900}.save{border:0;background:#f2f6fc;width:36px;height:36px;border-radius:9px;cursor:pointer;font-size:18px}.save.saved{background:#e7f8f1;color:var(--green)}.job h3{font-size:19px;margin:16px 0 5px}.company{color:var(--slate);font-size:13px}.meta{display:flex;gap:8px;flex-wrap:wrap;margin:15px 0;font-size:12px;color:#4c5e7b}.auth{color:var(--green);font-weight:800}.tags{display:flex;gap:7px;flex-wrap:wrap;border-top:1px solid #e8eef7;padding-top:14px}.tag{background:#edf4ff;color:#2352a4;border-radius:7px;padding:6px 8px;font-size:11px;font-weight:700}.job-foot{display:flex;justify-content:space-between;align-items:center;margin-top:17px}.salary{font-weight:800}.match{color:var(--green);font-size:12px;font-weight:800}
    .tracker{padding:52px 0 80px}.tracker-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:26px}.column{background:#eef3f9;border:1px solid var(--border);border-radius:13px;padding:14px;min-height:330px}.column h3{font-size:14px;margin:3px 2px 14px;display:flex;justify-content:space-between}.count{background:#fff;padding:2px 8px;border-radius:999px;color:var(--slate)}.app-card{background:#fff;border:1px solid #dce5f1;border-radius:10px;padding:13px;margin-bottom:10px}.app-card strong{font-size:13px}.app-card small{display:block;color:var(--slate);margin-top:6px}
    .lab{padding:42px 0 80px}.lab-hero{background:var(--navy);color:#fff;border-radius:18px;padding:30px;display:grid;grid-template-columns:1.6fr .8fr;gap:22px}.lab-hero p{color:#bac8e0;line-height:1.6}.sprint-card{background:#102858;border:1px solid #294479;border-radius:13px;padding:20px}.progress{height:9px;background:#263f71;border-radius:9px;overflow:hidden;margin:13px 0}.progress span{display:block;width:38%;height:100%;background:#5f91ff}.lab-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:20px;margin-top:22px}.panel{background:#fff;border:1px solid var(--border);border-radius:13px;padding:21px}.panel h2{font-size:19px;margin:0 0 16px}.ticket{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:14px 0;border-top:1px solid #e8eef7}.ticket:first-of-type{border-top:0}.ticket-id{color:var(--blue);font-size:12px;font-weight:850}.ticket p{margin:3px 0 0;color:var(--slate);font-size:12px}.status{font-size:11px;padding:6px 8px;border-radius:999px;font-weight:800;background:#fff3d6;color:#956200}.status.ready{background:#e4f8ee;color:#087b4a}.dor{list-style:none;padding:0;margin:0}.dor li{display:flex;gap:10px;padding:9px 0;color:#435472;font-size:13px}.check{color:var(--green)}.gap{color:#c47b00}.charter{background:#f3f7ff;border-left:4px solid var(--blue);padding:16px;border-radius:8px;margin-top:14px}.charter strong{display:block;margin-bottom:8px}.charter p{font-size:13px;line-height:1.5;color:#4e607d;margin:0}.footer-note{margin-top:28px;text-align:center;color:var(--slate);font-size:12px}
    .toast{position:fixed;right:22px;bottom:22px;background:var(--navy);color:#fff;padding:13px 18px;border-radius:10px;box-shadow:var(--shadow);transform:translateY(100px);opacity:0;transition:.25s;z-index:40}.toast.show{transform:translateY(0);opacity:1}
    @media(max-width:850px){.nav a:not(.brand),.ghost{display:none}.hero{padding-top:42px}.hero h1{font-size:40px}.searchbox{grid-template-columns:1fr}.field{border-right:0;border-bottom:1px solid var(--border)}.jobs-grid{grid-template-columns:1fr}.tracker-grid{grid-template-columns:1fr 1fr}.lab-hero,.lab-grid{grid-template-columns:1fr}}
    @media(max-width:520px){.container{width:min(100% - 24px,1180px)}header{height:65px}.brand{font-size:20px}.hero h1{font-size:34px}.nav-actions .btn{padding:10px 12px}.tracker-grid{grid-template-columns:1fr}.section-head{align-items:start;gap:10px}.ticket{grid-template-columns:auto 1fr}.status{grid-column:2}}
  </style>
</head>
<body>
  <header><nav class="container nav" aria-label="Main navigation">
    <a class="brand" href="#" data-view="jobs"><span class="brandmark" aria-hidden="true"></span>Dear Jobs</a>
    <a href="#" data-view="jobs">Find Jobs</a><a href="#" data-view="tracker">My Applications</a><a class="lab-link" href="#" data-view="lab">SDET Sprint Lab</a>
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
      <div class="container section"><div class="section-head"><div><h2>Recommended jobs <span class="result-count" id="resultCount">6 matches</span></h2><p>Ranked using your QA and automation profile.</p></div><button class="btn ghost" id="clearBtn">Clear filters</button></div><div class="jobs-grid" id="jobsGrid"></div><p class="footer-note">Dear Jobs is an independent educational portfolio project. Eligibility labels use simulated job data and should be verified with each employer.</p></div>
    </section>

    <section class="view" id="tracker-view"><div class="container tracker"><div class="section-head"><div><span class="eyebrow">Application workspace</span><h2 style="margin-top:14px">Keep every opportunity moving</h2><p>Demo data shows how candidates can organize their job search.</p></div><button class="btn primary" id="addApp">+ Add application</button></div><div class="tracker-grid">
      <div class="column"><h3>Interested <span class="count">2</span></h3><div class="app-card"><strong>Senior SDET</strong><small>Northstar Financial · 96% match</small></div><div class="app-card"><strong>AI Quality Engineer</strong><small>SignalWorks AI · Saved today</small></div></div>
      <div class="column"><h3>Applied <span class="count">2</span></h3><div class="app-card"><strong>QA Automation Lead</strong><small>Applied Jul 25 · Follow up Jul 30</small></div><div class="app-card"><strong>SDET Architect</strong><small>Recruiter submitted · C2C</small></div></div>
      <div class="column"><h3>Interview <span class="count">1</span></h3><div class="app-card"><strong>Mobile Automation Engineer</strong><small>Technical round · Tomorrow, 11:00 AM</small></div></div>
      <div class="column"><h3>Decision <span class="count">1</span></h3><div class="app-card"><strong>QA Release Manager</strong><small>Waiting for client feedback</small></div></div>
    </div></div></section>

    <section class="view" id="lab-view"><div class="container lab">
      <div class="lab-hero"><div><span class="eyebrow">Dear Jobs Engineering</span><h1>Welcome, new SDET.</h1><p>You joined a 10-person product team maintaining an existing job-search platform. Learn the system by completing real sprint work: explore APIs in Postman, investigate unclear requirements, automate with Playwright, and respond to code review.</p><button class="btn primary" id="startTask">Start today’s assignment</button></div><div class="sprint-card"><small>SPRINT 01 · DAY 4 OF 10</small><h3>Find, filter & save jobs</h3><div class="progress"><span></span></div><small>38% complete · 4 story points delivered</small></div></div>
      <div class="lab-grid"><div>
        <div class="panel"><h2>Your assigned work</h2>
          <div class="ticket"><span class="ticket-id">DJ-106</span><div><strong>Create Postman tests for Jobs API</strong><p>Positive, negative, schema, JWT, chained requests and Newman execution.</p></div><span class="status">In progress</span></div>
          <div class="ticket"><span class="ticket-id">DJ-109</span><div><strong>Explore combined job filters</strong><p>Assigned by Tech Lead · 60-minute charter · QA environment.</p></div><span class="status ready">Ready</span></div>
          <div class="ticket"><span class="ticket-id">DJ-107</span><div><strong>Automate job-search smoke flow</strong><p>Playwright + TypeScript · starts after DJ-106 review.</p></div><span class="status">Blocked</span></div>
        </div>
        <div class="panel" style="margin-top:20px"><h2>Exploratory test charter</h2><div class="charter"><strong>Tech Lead: Maya Chen</strong><p>Explore combinations of location, Remote, C2C, and H-1B Transfer filters. Focus on invalid values, navigation persistence, empty results, and UI/API inconsistencies. Capture evidence and identify automation candidates.</p></div></div>
      </div><aside>
        <div class="panel"><h2>Definition of Ready</h2><ul class="dor"><li><span class="check">●</span>Business value is clear</li><li><span class="check">●</span>Acceptance criteria are testable</li><li><span class="gap">●</span>API contract is missing</li><li><span class="gap">●</span>Remote vs hybrid rule unresolved</li><li><span class="check">●</span>Test data is identified</li><li><span class="gap">●</span>Performance threshold unspecified</li></ul><button class="btn primary" style="width:100%;margin-top:14px" id="raiseGap">Raise refinement questions</button></div>
        <div class="panel" style="margin-top:20px"><h2>Today’s ceremonies</h2><div class="ticket"><span>09:15</span><div><strong>Daily stand-up</strong><p>Report progress, plan, blockers.</p></div></div><div class="ticket"><span>14:00</span><div><strong>PR review</strong><p>Senior SDET + Tech Lead.</p></div></div></div>
      </aside></div>
    </div></section>
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
    document.getElementById("startTask").addEventListener("click",()=>notify("DJ-106 opened: begin with the Postman environment"));
    document.getElementById("raiseGap").addEventListener("click",()=>notify("Three questions prepared for backlog refinement"));
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
