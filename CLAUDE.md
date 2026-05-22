# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal portfolio website for **Tarun Sharma**, deployed at **shtarun.github.io** via GitHub Pages. The site is being rebuilt from scratch — the existing academicpages/Minimal Mistakes Jekyll codebase is legacy and should not be followed as a template or constraint for the redesign.

## Tarun Sharma — Complete Profile

### Identity & Contact

- **Name:** Tarun Sharma
- **Location:** Bengaluru, Karnataka, India
- **Emails:** work.tarunsharma@gmail.com, tarjsr@gmail.com
- **Phone:** +91-7703090720
- **LinkedIn:** linkedin.com/in/tarunsha
- **GitHub:** github.com/shtarun
- **Website:** shtarun.github.io
- **Instagram:** i.am.tarun
- **Facebook:** tarun.sharma97
- **Tagline:** "Building Twinity Labs | ex JLR | IIT Kanpur | Dual Degree"
- **Bio philosophy:** "Beauty lies at the intersection of different fields"
- **Summary:** "Building Digital Twin ecosystems for the future"
- **Photos available:** `images/Photo_Self/` (Diwali_NoBackground_Sq.png is current avatar), `TARUN_SHARMA_CV_Oct_2025__Marissa_Mayer_Style_/tarunsharma.jpeg`

### Education

- **Indian Institute of Technology Kanpur** — B.Tech-M.Tech Dual Degree, Mechanical Engineering (Jul 2015 – Jun 2020)
- **Loyola School, Jamshedpur** — Mathematics and Computer Science (2002 – 2015)

### Languages

- English (Full Professional)
- Hindi (Native or Bilingual)
- German (Elementary)

---

## Professional Experience

### Twinity Labs Private Limited — Founder & CEO
**Sept 2025 – Present | Bengaluru, India**

Building an applied Digital Twin solutions venture; defining product vision, early GTM, partnerships, and pilot scoping with industrial clients.

---

### Jaguar Land Rover India — 5 years total (Sept 2020 – Aug 2025)

#### Senior Software Engineer, Software-Defined Vehicles (Jan 2025 – Aug 2025)

- **Open-source-first IaC & build stack:** Triggered enterprise-wide shift from commercial Terraform to OpenTofu, refactoring shared modules, remote state backends, and CI workflows; integrated open-source platform enablers (Lorry for artifact promotion pipelines, Trustable Software Framework for policy-as-code/SBOM/compliance checks, BuildBarn-backed remote builds/caching) to cut licensing spend, harden supply-chain security, and make infra reproducible from a single declarative stack
- **Zero-downtime platform migration:** Orchestrated Software Integration Factory's decommissioning, migrating 450+ GitLab repos, Podman base images, and infra elements into JLR's ecosystem — kept Central Compute Module builds green and teams unblocked during cutover
- **Scalable cloud footing:** Coordinated with Digital to provision a fresh AWS account, aligning security, access, and cost controls with program growth
- **Platform-agnostic pipelines:** Released MR1 pipeline with SoC/MCU parity — shrinking duplication and accelerating reuse across programs
- **Frictionless application onboarding:** Published a standardized repository template so new apps can integrate with the SDV platform (Central Compute Module's SoC/MCU) in hours instead of days
- **Hardware readiness on new silicon:** Rebuilt and validated the CCMA MCU integrated image for the NXP S32N board under CI, ensuring performance and compatibility before scale-up
- **Governance & velocity:** Secured alignment from senior stakeholders on SDV GitLab restructuring, clarifying ownership and streamlining end-to-end delivery
- **Hands-free device operations:** Enabled automated flashing in MR1 & MR2 for Central Compute Module's MCU, removing manual steps and tightening feedback loops

#### Innovation Champion — Open Innovation Hub (Dec 2024 – Aug 2025)

- Championed cross-functional innovation by identifying critical business gaps within JLR and driving end-to-end startup collaborations via Plug and Play's global innovation platform. Responsible for owning the full lifecycle — from problem discovery and startup scouting to proof-of-concept (PoC) execution and funding alignment
- Independently identified a strategic opportunity in Digital Twinning and led a high-impact engagement with IndusTANTRA (founded by Prof. N.S. Vyas, IIT Kanpur) — India's foremost authority in the domain — bypassing traditional scouting channels and reducing engagement turnaround from months to under 4 weeks by directly aligning with senior JLR leadership and initiating ML-driven surrogate modelling projects to enhance JLR's Digital Twin ecosystem

#### Software Engineer, Software-Defined Vehicles (Nov 2023 – Feb 2025)

- **Executive-facing delivery:** Presented multiple times to the Boards of JLR and Tata Motors on base OS/platform progress, aligning leadership on scope, risks, and milestones. Drove ASIL-B certification plans for a safety-qualified Linux platform
- **Build ecosystem:** Maintained the CCMA SoC MR2 repo; integrated Podman via BuildStream and standardized library builds with BuildStream, CMake, Ninja, Meson — raising build reliability and developer throughput
- **OS/BSP bring-up lead:** Led board bring-up for OS and BSP integration, configuring Linux kernel, network interfaces, and systemd services to achieve stable, repeatable boots on target hardware
- **Deterministic platform services:** With Codethink, implemented a Deterministic Construction Service for JLR's custom Linux OS — improving determinism and supporting safety goals
- **Connected, production-ready stack:** Integrated AWS, Alexa, and RTI DDS, extending connectivity, telemetry, and inter-process communication for in-vehicle and cloud flows
- **Boot performance observability:** Added bootchart generation + KPIs in CI; built an automated AWS (S3, Lambda, EC2, Redshift) workflow that flashes physical SoCs, generates bootcharts, and feeds Tableau dashboards for data-driven regressions
- **Safety groundwork toward ISO 26262:** Contributed to the fault manager architecture and attempted to build an independent Safe Linux prototype (custom SCHED_DEADLINE kernel + mock deadlined processes) to aid functional-safety assessment
- **ASIL B leadership:** Led a cross-functional effort targeting ASIL B certification for a safety-certified Linux distribution, aligning practices to ISO 26262
- **Image + SDK shipped with partners:** Co-delivered integrated image and SDK with Codethink, smoothing downstream onboarding and iteration
- **People development:** Mentored 4 interns (2 directly) on Rust vs C++ trade-offs (outcomes led to PPOs), coached and directly managed 2 fresh software engineering graduates, lifting team velocity and confidence

#### Software Engineer, Global Testing Platform (Sept 2022 – Feb 2024)

- Worked on Automated Keyword-Driven Global Testing Platform to create a robust and unified testing platform for JLR
- Architected and developed a Python-based Test Executable Generator, by factory and builder designs, enabling end-to-end automated test execution across various toolchains (dSPACE, Vector, National Instruments) on 300+ global test assets
- Developed "Mars Attacks," a FastAPI microservice for processing GCP data, enhancing visibility of test environment setup
- Streamlined CI/CD pipelines, implementing validation tests and automated test environment cleanup to reduce infrastructure costs

#### Graduate Software Engineer Trainee (Sept 2020 – Aug 2022)

- Engaged in predictive maintenance research using LSTM, focusing on spectrograms, clustering, and image processing. This concept is now with the patent office
- Collaborated on Virtual & Extended Reality experiences, presenting innovative solutions to the Board of Directors
- Contributed to developing data pipelines, machine learning models for audio signal analysis, and initiating Software-in-Loop testing processes
- Provided technical mentorship, participated in hiring processes for full-time roles and internships, and acted as a liaison with IIT Kanpur for recruitment initiatives

---

### Indian Institute of Technology Kanpur — Project Engineer
**Jul 2020 – Sept 2020 | Kanpur, India**

Worked for a brief period on a project by Hyper Poland (currently Nevomo), involving the prototype of a MagRail, by framing the problem statement and approach for the solution to the project. Under Prof. Nalinaksh S. Vyas.

---

### ETA Technology Pvt. Ltd. — Summer Internship
**May 2018 – Jul 2018 | Bengaluru, India**

Supervisor: Mr. Santhosh Kumar, Director

- Designed and developed an axially frictionless Hydrostatic Bearing for withstanding 60000 kgf of radial force
- Deployed Solidworks and AutoCAD for designing components of a Friction Welding Machine
- Optimized parameters of an Electrical Upsetting and Metal Gathering Machine to get desired valve profile
- Fixed, redesigned and did failure analysis of a broken Chamfering tool
- Used power recirculation to design a Four-Square Test Rig, for testing 4 components in parallel to simulate realistic loading and articulation conditions

Report available: `files/Project_Reports/ETA_Combined_PVF_Report.pdf`
Certificate: `files/Certificates/ETA_Certificate.pdf`

---

### R&D, Tata Steel — Summer Internship
**May 2017 – Jul 2017 | Jamshedpur, India**

Supervisor: Mr. Pundan Kumar Singh, Principal Researcher

- Focused on the plastic region of deformation for high strain rates & modelled a tensile specimen using Abaqus
- The tensile test results contributed in designing new specimen for specific tests for automotive applications
- Investigated uni-axial tensile testing theory focusing on the plastic region of deformation for high strain rates

Report available: `files/Project_Reports/Signed_PVF_Tata_Steel.pdf`

---

## Publication

**R. Kumar, T. Sharma, A. Shekhar, N. S. Vyas** — "Primary suspension failure analysis in FIAT type LHB bogies and life estimation," *Engineering Failure Analysis*, vol. 138, 2022.

Note: The publications in `_publications/` are all template placeholders — only the above paper is real.

---

## Academic Projects (IIT Kanpur)

### Master's Thesis: Primary Suspension Redesign of Railway Bogie for Improved Fatigue Life
**Jul 2019 – Sept 2020 | Supervisors: Prof. Nalinaksh S. Vyas, Prof. C. Chandraprakash**

Work on primary suspension redesign of FIAT type LHB bogies used in Indian Railways. The design improvements suggested in the thesis were accepted by Indian Railways and will roll out in production for all FIAT type bogies in LHB Coaches of India. Report: `files/Project_Reports/RRVD_Combined_Report.pdf`

### Modelling of Railway Vehicle Dynamics: A Multi-Body Analytical Approach
**Jul 2018 – Dec 2018 | Supervisor: Prof. Nalinaksh S. Vyas**

Student Research Associate at Mission Lab, IIT Kanpur.

- Lateral Dynamics: Determined contact patch coordinates as a function of lateral perturbation by solving kinematic equations. Solved equations of motion iteratively on MATLAB to estimate critical speed of stability
- Longitudinal Dynamics: Observed response characteristics of railway coupler model by varying source frequency, spring stiffness, draft gear friction and coupler slack
- Software Modelling: Developed rail-wheel pair model in Simpack; observed motion on straight and curved tracks with uncertainties (camber, yaw, toe)
- Modelled beam with moving load in ANSYS APDL for rail track motion behavior

### Design & Development of an Electromagnetic Actuator (B.Tech Project)
**Aug 2018 – Apr 2019 | Supervisor: Prof. Mohit Law**

- Developed 1st generation of a compact & cheap Moving Iron Type Linear Electromagnetic Actuator for active damping (target: 100N force output)
- Peak force of ~13N in 30–140 Hz range; 100N achievable with design modifications
- Isolated natural frequency and obtained flat frequency response in 30–140 Hz
- Optimized spatial and functional parameters using COMSOL & FLUX for higher force-to-volume ratio
- Designed a low-friction linear Flexural Bearing on DS Solidworks with fatigue analysis

Report: `files/Project_Reports/BTP_Final_Report.pdf`

### Structure Integrated Sensors and Actuators to Monitor and Renew Machine Tool Deformance
**Dec 2018 – Feb 2019 | Supervisor: Prof. Mohit Law**

Student Research Associate in Machine Tool Dynamics Lab.

- Designed a Tuned Mass Damped Boring Bar and Compression Holder using DS Solidworks
- Used CutPro for modal testing of Tuned Mass Damped Boring Bar and Eddy Current Damped Boring Bar
- Optimized mass and stiffness of tuned mass using Maple & MATLAB for chatter elimination and higher Material Removal Rate

### Finite Element Analysis of Railway Couplers used in LHB Coaches
**Aug 2019 – Sept 2019 | Supervisor: Prof. Nalinaksh S. Vyas**

Student Research Associate in Vibration Lab.

- Provided Frontier Technologies Pvt. Ltd. with FE models of Railway Couplers used in LHB Coaches in India
- Used ANSYS for FEA under various loading conditions (Buff, Draft, Bending) — Von-Mises stress, total/directional deformation
- Simulated Anti Climbing Feature of coupler assembly under 45 tonnes of force

### Course Projects

**Motion Planning of a 6 DOF Robot Arm Manipulator** (Sept–Nov 2019, Prof. Ashish Dutta, Robot Motion Planning)
- MATLAB C-Space of 3DOF & 2DOF Robot arm with obstacles
- Sampling-based planners (A* Algorithm) and Rapidly Exploring Random Trees for path planning

**Algorithm Study of Constrained and Unconstrained Optimization Techniques** (Feb–Apr 2019, Prof. Bhaskar Dasgupta, Optimization Methods)
- Analyzed Steepest Descent, DFP, BFGS, Powell's Conjugate Direction on 50 test functions
- Linear and Quadratic Programming with Simplex, Active Set, Lemke's set methods

**Output Feedback Stabilisation of Inverted Pendulum** (Aug–Nov 2018, Prof. Ramprasad Potluri, Basics of Modern Control)
- Implemented research paper on output feedback stabilization with uncertainties
- Extended High Gain Observers, MATLAB + Visio simulation

**Helicopter Coupled Trim Analysis — UH-60A Black Hawk** (Aug–Oct 2018, Prof. Abhishek, Helicopter Dynamics & Aeroelasticity)
- BEMT numerical solution, Newmark's algorithm for flap response
- Free flight coupled trim analysis — control angles, shaft angles, hub loads vs forward speed

**Document Shredder & Automated Box Shifting Mechanism** (Aug 2016 – Apr 2017, Prof. S.K. Choudhary & Prof. Rajiv Shekhar, TA201A/TA202A)
- SolidWorks + AutoCAD modelling, fabricated prototypes on CNC/lathe/drilling machines
- Costing Report, Business Plan and Marketing Brochure

### Online Course Projects (Coursera — deeplearning.ai Deep Learning Specialization)

**Neural Networks and Deep Learning:**
- Shallow neural network for binary classification (flower-shaped dots, 91.25% accuracy)
- Deep neural network for Cat vs Non-Cat (80% accuracy)
- He initialization on 3-layer DNN (99% accuracy)

**Convolutional Neural Networks:**
- Art Generation with Neural Style Transfer (VGG-19, Louvre + Monet)
- Car Detection with YOLO
- Face Recognition and Verification (Keras, FaceNet, triplet loss)

Certificates: `files/Certificates/Coursera_Deep_Learning/Certificate_Course_1-4.pdf`

---

## Teaching

### Teaching Assistant — TA101A: Engineering Graphics
**Jan 2020 – Jun 2020 | IIT Kanpur**

Under Prof. Anupam Saxena and Prof. Bharat Lohani. Instructed 100+ first-year undergraduate students in weekly lab sessions.

### Teaching Assistant — ME321A: Advanced Mechanics of Solids
**Aug 2019 – Nov 2019 | Dept. of Mechanical Engineering, IIT Kanpur**

Under Prof. Ishan Sharma. Instructed 100+ junior undergraduates in weekly lab sessions.

---

## Campus Leadership & Responsibilities

### President, Association of Mechanical Engineers, IIT Kanpur
**Aug 2019 – Jun 2020**

- Overall Coordinator of the team
- Sole incharge of administering expenditure of a budget of 1.5 Lacs for yearlong workshops & Research Scholars' Day
- Spearheaded a 3-tier team of 15 PG and UG students for management of logistics and interactions between 700+ students & 45+ faculties
- Arranged training sessions from MathWorks and Ansys on dynamic/static solid simulations and FSI
- Report: `files/AME_Annual_Report_2019_2020.pdf`

### Orientation Team Member, Counselling Service, IIT Kanpur
**Jul 2019 – Aug 2019**

Assisted core team in smooth conduction of 8-day orientation program for 1000+ postgraduate students.

### Senior Executive, Entrepreneurship Cell, IIT Kanpur
**Sept 2016 – Mar 2017**

- Piloted a 5-member team to organize Summer'17 Internship program while managing website and logistics
- Contacted 200+ companies for Start-up Internship Program 2017

---

## Awards & Recognition

- **1st Runner Up, JLR GDD Hackathon** (Jul 2021) — Interactive gaze controlled HUDs. Teams from all 6 GDD centers (Gaydon, Hungary, India, Manchester, Portland, Shannon)
- **Asha Khanna Award** (May 2015, Loyola School, Jamshedpur) — Nationwide top scorer in Mathematics at ISC, 2015
- **JEE Advanced** — Qualified
- **JEE Main** — Qualified

---

## Certifications

- Machine Learning
- Object-Oriented Design
- Convolutional Neural Networks (deeplearning.ai)
- Introduction to Git and GitHub
- Software Architecture

---

## Skills & Domains

**Top Skills:** Machine Learning, Audio Processing, Linux Kernel, Software Architecture

**Technical:** Python (FastAPI), Rust, C++, MATLAB, embedded systems (NXP S32N, BuildStream, CMake, Ninja, Meson), CI/CD (GitLab), cloud (AWS — S3/Lambda/EC2/Redshift, GCP), IaC (OpenTofu/Terraform), containerization (Podman), RTI DDS, VR/XR, FEA (ANSYS, Abaqus, COMSOL), CAD (SolidWorks, AutoCAD), Simpack, CutPro, Maple, Tableau

**Domains:** Software-Defined Vehicles, Digital Twins, automotive safety (ISO 26262, ASIL-B), predictive maintenance, multibody dynamics, machine tool dynamics, railway vehicle engineering, robotics, neural networks

---

## Hobbies & Interests

Robotics & AI, Health & Nutrition, Philosophy, Hiking & Trail Runs, Societal Impact, Football, Badminton, Swimming, Financial Markets, Tech Policy, Cricket, Basketball, Cooking, Travelling

---

## Existing Assets in This Repository

**PDFs & Reports:**
- `files/Biodata_Tarun_Sharma.pdf` — Resume (embedded on current CV page)
- `files/AME_Annual_Report_2019_2020.pdf` — AME President annual report
- `files/Project_Reports/BTP_Final_Report.pdf` — B.Tech project report
- `files/Project_Reports/RRVD_Combined_Report.pdf` — Master's thesis report
- `files/Project_Reports/ETA_Combined_PVF_Report.pdf` — ETA internship report
- `files/Project_Reports/Signed_PVF_Tata_Steel.pdf` — Tata Steel internship report
- `files/Certificates/ETA_Certificate.pdf` — ETA internship certificate
- `files/Certificates/Coursera_Deep_Learning/Certificate_Course_1-4.pdf` — Deep learning course certificates
- `Profile.pdf` (root) — LinkedIn export (most current data source, 9 pages)

**LaTeX Resume:**
- `TARUN_SHARMA_CV_Oct_2025__Marissa_Mayer_Style_/mmayer.tex` — Two-column AltaCV format resume with `tarunsharma.jpeg` photo

**Images:**
- `images/Photo_Self/Diwali_NoBackground_Sq.png` — Current avatar (square, no background)
- `images/Photo_Self/` — Multiple variants (blurred, with background, etc.)
- `images/profile.png` — Older profile image
- `images/bio-photo.jpg`, `images/bio-photo-2.jpg` — Template bio photos
- `images/Tata_Steel_Logo*.png` — Tata Steel logos (multiple sizes)
- `images/ETA_Logo*.png` — ETA Technology logos (multiple sizes)
- `TARUN_SHARMA_CV_Oct_2025__Marissa_Mayer_Style_/tarunsharma.jpeg` — Resume headshot

---

## Quote

"Courage is willingness to take the risk once you know the odds. Optimistic overconfidence means you are taking the risk because you don't know the odds. It's a big difference." — Daniel Kahneman
