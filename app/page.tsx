export default function Home() {
  const profile = {
    name: "Vikram Sahu",
    title:
      "Sr. IT Admin | IT Infrastructure | Network & System Administration | Automation & MIS",
    location: "Raipur, Chhattisgarh, India",
    phone: "+91 9644655310",
    email: "vdoc1508@gmail.com",
    linkedin: "https://linkedin.com/in/vikramsoft",
    summary:
      "IT Administrator with hands-on experience in IT infrastructure, network security, system administration, and automation. Experienced in managing firewalls, Wi-Fi/routing, Windows Server services, and building integrations/APIs for ERP and reporting.",
    skills: [
      "Python (Pandas, NumPy), Flask REST API",
      "SQL, Excel, Google Sheets, BigQuery, Looker Studio",
      "Firewall: Fortigate 60F, Sophos XG (SD-WAN, VPN, URL filtering)",
      "Networking: Mikrotik, Omada Controller, VLAN, OSPF, TCP/IP",
      "Windows Server 2012 R2: IIS, AD/LDAP, RDS, iSCSI, Print/File Server",
      "Nginx/Waitress, VMware ESXi 6.7",
      "Automation: Google Apps Script, MIS/DSS, n8n",
      "Tools: Outlook, Word, PowerPoint, GitHub, Postman",
    ],
    experience: [
      {
        role: "Sr. IT Admin",
        company: "Zoff Spices (Asquare Food & Beverages Pvt. Ltd.), Raipur",
        period: "Aug 25, 2025 — Present",
        bullets: [
          "IT asset management: hardware/software tracking, POs, quotations, lifecycle control.",
          "Firewall administration (Fortigate 60F, Sophos XG): SD-WAN, VPN, URL filtering, policies, port forwarding.",
          "Network operations: Omada controller, Mikrotik routers/switches, load balancing.",
          "Windows Server administration: IIS, Print/File, iSCSI, LDAP/AD; Google Workspace controls.",
          "MIS automation using Apps Script & Sheets; reporting with BigQuery and Looker Studio.",
        ],
      },
      {
        role: "IT Officer",
        company: "Popular Paint and Chemical Pvt. Ltd., Raipur (Tendua)",
        period: "Nov 10, 2021 — Aug 01, 2025",
        bullets: [
          "CCTV, video conferencing, intercom and IP phone setup/support; ITMS support.",
          "Local apps & servers: MySQL, Flask apps behind Nginx/Waitress.",
          "Built REST APIs and integrations with ERP/accounting tools.",
          "LAN/Wi-Fi setup, system maintenance, OS installation, troubleshooting.",
        ],
      },
    ],
    education: {
      degree: "B.Tech in Computer Science Engineering",
      school: "SRIT - Shri Rawatpura Institute of Technology, CSVTU",
      period: "2018 — 2021",
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-sm text-slate-600">{profile.location}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-slate-700">{profile.title}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Call
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-100"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-100"
            >
              LinkedIn
            </a>

            {/* Optional: Put your CV in /public as cv.pdf and enable this */}
            <a
              href="/cv.pdf"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-100"
            >
              Download CV
            </a>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-10 md:grid-cols-3">
        {/* Left column */}
        <aside className="space-y-8 md:col-span-1">
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold tracking-wide text-slate-600">
              Summary
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              {profile.summary}
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold tracking-wide text-slate-600">
              Skills
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {profile.skills.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold tracking-wide text-slate-600">
              Education
            </h2>
            <p className="mt-3 text-sm font-semibold">{profile.education.degree}</p>
            <p className="mt-1 text-sm text-slate-700">{profile.education.school}</p>
            <p className="mt-1 text-xs text-slate-500">{profile.education.period}</p>
          </section>
        </aside>

        {/* Right column */}
        <section className="space-y-6 md:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold tracking-wide text-slate-600">
              Experience
            </h2>

            <div className="mt-5 space-y-6">
              {profile.experience.map((job) => (
                <article key={job.role + job.company} className="border-t pt-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold">
                      {job.role} — {job.company}
                    </h3>
                    <p className="text-xs text-slate-500">{job.period}</p>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <footer className="rounded-2xl bg-white p-6 text-xs text-slate-500 shadow-sm">
            <p>
              © {new Date().getFullYear()} {profile.name}. Built with Next.js and deployed
              on Vercel.
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
        }
