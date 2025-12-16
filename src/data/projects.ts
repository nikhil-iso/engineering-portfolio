export type ProjectType = "personal" | "team";
export type ProjectLayout = "large" | "medium" | "small";

export interface ProjectDetailContent {
  purpose: string[];
  development: string[];
  documentation: string[];
  results: string[];
  futurePlans: string[];
}

export interface PersonalProject {
  id: number;
  type: "personal";
  name: string;
  image: string;
  layout: ProjectLayout;
  skills: string[];
  learningExperience: string;
  futurePlansSummary: string;
  detail: ProjectDetailContent;
}

export interface TeamProjectDetail extends ProjectDetailContent {
  myRole: string[];
}

export interface TeamProject {
  id: number;
  type: "team";
  isFeatured?: boolean;
  teamSize: number;
  teamName: string;
  projectName: string;
  image: string;
  skills: string[];
  description: string;
  roleSummary: string;
  detail: TeamProjectDetail;
}

export type AnyProject = PersonalProject | TeamProject;

export const personalProjects: PersonalProject[] = [
  {
    id: 1,
    type: "personal",
    name: "Sunrise Simulight",
    image: "/images/SimuLight Wide Banner Website.png",
    layout: "large",
    skills: ["Arduino", "Python", "Systems Integration", "IoT"],
    learningExperience:
      "Built a low-flicker PWM sunrise engine on Arduino, tuned LED drivers for efficiency, and paired a Python calibration tool with user testing from 15+ sleepers to validate circadian impact.",
    futurePlansSummary:
      "Release a standalone mobile app, add HomeKit/Alexa/Google routines, and train an ML model to personalize light curves from sleep data.",
    detail: {
      purpose: [
        "Deliver a sunrise lamp that ramps lux and color temperature to reinforce circadian rhythm without harsh alarms",
        "Use low-cost Arduino and LED driver hardware to prototype a manufacturable IoT device",
        "Collect real wake-up feedback to validate light dosage versus alertness and mood",
        "Design firmware that can extend to sunset and wellness routines without hardware changes"
      ],
      development: [
        "Arduino Nano drives dual-channel 2700K/6500K LEDs via 12-bit PWM with bezier easing across 30–90 minute ramps",
        "BLE module plus Python tuning utility to push new light curves and scheduler presets over UART/BLE",
        "Power path with MOSFET dimming, soft-start, and thermal foldback to protect LED strings at peak current",
        "3D-printed enclosure with diffusion baffles and serviceable LED/driver modules",
        "JSON control layer for schedule CRUD, brightness overrides, and telemetry hooks for future app integration"
      ],
      documentation: [
        "Circuit/BOM pack detailing current budget, LED driver selection, and isolation clearances",
        "Firmware state-machine notes covering scheduler logic, BLE command set, and brownout failsafes",
        "API quickstart for mobile integration with sample payloads, rate-limit guidance, and OTA hooks",
        "User calibration guide with lux targets, color temperature presets, and troubleshooting steps"
      ],
      results: [
        "Prototype ramps from 0–100% with <2% flicker and smooth color temperature sweep over 30–60 minutes",
        "15-person trial reported faster wake-ups and lower grogginess; survey deltas captured for next revision",
        "Power budget tuned to ~85% efficiency versus the first revision through dimming curves and driver swaps",
        "Firmware and hardware validated across iOS/Android BLE stacks and a HomeAssistant bridge"
      ],
      futurePlans: [
        "Release a native mobile app with offline scheduling and guided wellness routines",
        "Ship HomeKit/Alexa/Google integrations alongside a local MQTT bridge",
        "Use on-device ML to adapt ramp shapes to sleep and wake telemetry",
        "Add heart-rate and ambient sensors to auto-adjust lux targets",
        "Work with small-run manufacturers on DFM and add sunset/relaxation modes"
      ]
    }
  },
  {
    id: 2,
    type: "personal",
    name: "Arduino Based Macro Keyboard",
    image: "/images/MacroKeyboard Banner Website.png",
    layout: "medium",
    skills: ["Arduino", "C++", "Electronics", "User-Centric Design"],
    learningExperience:
      "Wrote custom HID firmware in Arduino/C++, tuned debounce and latency, and iterated with accessibility testers on ergonomics and tactile feedback.",
    futurePlansSummary:
      "Build a cross-platform configurator, ship a low-latency wireless SKU, and open-source macro scripting with curated community presets.",
    detail: {
      purpose: [
        "Ship a budget macro keypad for accessibility and power users with full remap support",
        "Prove firmware-controlled macros can beat expensive commercial boards while staying cross-platform",
        "Design hardware that is serviceable with swappable switches/encoders and a printable enclosure",
        "Create a sandbox for experimenting with lighting, macros, and automation workflows"
      ],
      development: [
        "Custom Arduino HID firmware with multi-profile storage, per-key macros, and adjustable debounce",
        "Hot-swappable PCB supporting mechanical switches, rotary encoder, and per-key RGB with animation layers",
        "3D-printed case with 6° typing angle, detachable wrist rest, and routed cable channels",
        "Prototype desktop configurator for macro/lighting presets and OTA firmware updates",
        "Usability sessions with motor-impaired testers to refine travel force, macro placement, and feedback cues"
      ],
      documentation: [
        "Firmware docs covering HID report formats, state diagrams, and macro scripting examples",
        "Assembly guide with BOM, solder steps, and switch/encoder swap instructions",
        "Electrical schematics highlighting row/column matrix, ESD protection, and LED power budget",
        "Accessibility testing notes and contribution guide to invite community features"
      ],
      results: [
        "Fully working keypad with per-key RGB, profile switching, and sub-5 ms debounce variance",
        "Plug-and-play on Windows, macOS, and Linux via standard HID (no drivers required)",
        "Module costs reduced through reusable PCB and printed enclosure; assembly under 30 minutes with basic tools",
        "Open repository seeded with firmware and STL files that already attracted early forks"
      ],
      futurePlans: [
        "Drag-and-drop layout/config app with shareable presets and cloud sync",
        "BLE and 2.4GHz variants with secure pairing and low-latency polling",
        "Advanced macro engine with conditionals, app-aware layers, and haptic cues",
        "Integrate haptic click modules and audio cues for accessibility feedback",
        "Run small-batch kits with makerspaces and document a build curriculum"
      ]
    }
  },
  {
    id: 3,
    type: "personal",
    name: "RC Airplane Based Land Surveying System",
    image: "https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    layout: "small",
    skills: ["Raspberry Pi", "Python", "LiDAR", "GPS"],
    learningExperience:
      "Built an autopilot stack with Raspberry Pi, tuned waypoint planners, and prototyped a photogrammetry pipeline for stitched ortho maps.",
    futurePlansSummary:
      "Add LiDAR and RTK-grade GPS for cm-level models, live telemetry links, ML-based crop analytics, and research pilots with growers.",
    detail: {
      purpose: [
        "Create a low-cost RC fixed-wing platform for aerial mapping of farms and construction sites",
        "Enable autonomous surveys with repeatable flight paths and swappable payloads",
        "Validate an open-source autopilot and imaging stack as a substitute for commercial drones",
        "Keep the airframe repairable so communities can maintain it without specialized tools"
      ],
      development: [
        "Composite airframe with modular payload bay for cameras, LiDAR, and NDVI sensors",
        "Raspberry Pi flight controller running waypoint navigation, telemetry streaming, and failsafes tied to GPS/IMU data",
        "Synchronized image capture with gimbal isolation and shutter triggers tuned to ground-sample distance targets",
        "Ground station tooling for mission planning, live telemetry overlays, and post-flight data offload",
        "Propulsion tuning to balance 45+ minute endurance against a 500g payload envelope with redundant power bus"
      ],
      documentation: [
        "Airframe CAD plus weight-and-balance worksheets for different payload configurations",
        "Sensor integration plans covering mounts, power, and data buses for camera and LiDAR payloads",
        "PID/autopilot tuning logs with control surface throws and stability margins per flight regime",
        "Photogrammetry pipeline notes for stitching, georeferencing, and QA thresholds on imagery"
      ],
      results: [
        "Stable autonomous flights on pre-programmed waypoints with automatic image capture intervals",
        "GPS logging within ~2 m CEP enabling reliable geotagging for stitched maps",
        "Camera mount delivered sharp imagery with vibration isolation validated in test sorties",
        "Estimated 80% cost reduction versus contracting drone surveys while retaining survey-grade outputs"
      ],
      futurePlans: [
        "Integrate LiDAR and RTK GPS for centimeter-level terrain models",
        "Add cellular or satellite links for real-time telemetry and remote abort/retask",
        "Train ML models for crop health and yield prediction using multispectral data",
        "Design quick-release sensor modules for swapping between ag and construction missions",
        "Run field trials with agricultural research partners and explore licensing while keeping education kits"
      ]
    }
  }
];

export const teamProjects: TeamProject[] = [
  {
    id: 1,
    type: "team",
    isFeatured: true,
    teamSize: 25,
    teamName: "USST - University of Saskatchewan Space Design Team",
    projectName: "USST Rocket Project: Up ↑",
    image: "/images/Rocket Full Length.png",
    skills: ["OpenRocket", "Fusion 360", "ANSYS", "SolidWorks", "OnShape"],
    description:
      "Designed and optimized an 8ft M-class rocket for Launch Canada 2025 with aerodynamic, structural, and propulsion trade studies to reach competition targets safely.",
    roleSummary:
      "Owned CAD for major assemblies, ran ANSYS/OpenRocket analyses on aero stability, and coordinated interfaces across propulsion, structures, and avionics.",
    detail: {
      purpose: [
        "Design and launch an 8ft M-class rocket for Launch Canada 2025 with competition-grade safety factors",
        "Train student engineers on propulsion, aerodynamics, and structures using industry-style workflows",
        "Validate a student-built avionics and telemetry stack for reliable recovery and data capture",
        "Build a repeatable process and knowledge base for next-generation vehicles"
      ],
      development: [
        "CAD in SolidWorks, Fusion 360, and OnShape with revision control and interference checks across subsystems",
        "ANSYS FEA/thermal and OpenRocket trajectory sims to tune fin geometry, CG/CP margins, and motor selection",
        "Propulsion modeling including thrust curve analysis and motor retention hardware design",
        "Avionics integration with flight computer, GPS, and telemetry harness routing through the airframe",
        "Weekly design reviews and DVP&R checklists aligning propulsion, structures, and avionics schedules"
      ],
      documentation: [
        "Structural and thermal reports with load cases, safety factors, and laminate stackups",
        "Flight simulation packets covering trajectory envelopes, stability (caliber), and recovery descent rates",
        "Manufacturing drawings with tolerances, materials, and QA checks for machined and composite parts",
        "Launch readiness and safety protocols including pad ops, abort paths, and recovery procedures"
      ],
      results: [
        "Ground hot-fire and static tests hit 95% of predicted thrust and validated retention hardware",
        "FEA shows >1.5× safety margin on critical structures; thermal limits cleared for ascent",
        "Preliminary design review passed with industry mentors; timeline accelerated ~30% via parallel workstreams",
        "Secured local aerospace mentorship and sponsorship interest for the launch campaign"
      ],
      futurePlans: [
        "Flight-readiness review followed by Launch Canada attempt targeting 10,000 ft and payload deployment",
        "Next-gen design aiming for 5kg payload capacity with richer telemetry and health monitoring",
        "Hybrid propulsion investigation to blend solid/liquid advantages for efficiency and controllability",
        "Spin up small satellite payload research and controls training for the team",
        "Maintain an annual launch cadence and collaborate with other university rocketry teams"
      ],
      myRole: [
        "Led CAD for nose, airframe, and fin assemblies in SolidWorks/Fusion/OnShape with release control",
        "Ran ANSYS and OpenRocket analyses for aero performance, CG/CP margins, and trajectory optimization",
        "Coordinated propulsion, structures, and avionics interfaces while managing design review cadences",
        "Presented designs to faculty and industry reviewers, capturing risk registers and test plans",
        "Maintained the documentation set for manufacturing packages and launch readiness artifacts"
      ]
    }
  },
  {
    id: 2,
    type: "team",
    teamSize: 35,
    teamName: "4627 Manning Robotics",
    projectName: "Thor & Loki",
    image: "/images/4627Thor.png",
    skills: ["Fusion 360 Simulation", "Fusion 360 Assemblies", "Team Leadership", "Manufacturing"],
    description:
      "Designed and maintained drive trains for the 2023 FRC Charged Up season, delivering 95% reliability and serviceability across regional events.",
    roleSummary:
      "Owned drivetrain architecture, gearbox design, and mentoring on CAD/manufacturing while keeping uptime targets on track.",
    detail: {
      purpose: [
        "Engineer a robust drivetrain for FRC Charged Up that holds up across regional events",
        "Optimize serviceability with modular swerve/gearboxes for rapid pit repairs",
        "Mentor students on CAD best practices, tolerance control, and manufacturing readiness",
        "Document a repeatable process for future seasons and rookie onboarding"
      ],
      development: [
        "Designed gearboxes and frame integrations including ratio selection, chain/belt paths, and FEA checks",
        "Preventive maintenance program that delivered 95% drivetrain reliability with pre/post-match checklists",
        "Modular swerve modules enabling hot swaps and quick alignment during events",
        "CAD review cadence with tolerance stack analysis; integrated electrical routing for clean service loops",
        "Fusion 360 simulations and driver feedback loops to refine acceleration and control response"
      ],
      documentation: [
        "Drivetrain spec sheets with torque calculations, materials, and performance envelopes",
        "Manufacturing/assembly instructions with exploded views, torque specs, and inspection gates",
        "Maintenance playbooks with spare tracking, contingency procedures, and fastener schedules",
        "Electrical and pneumatic schematics aligned to the mechanical layout plus driver training guides",
        "Post-event retrospectives capturing risks, mitigations, and improvement items"
      ],
      results: [
        "Maintained 95% drivetrain uptime through the 2023 season with minimal emergency repairs",
        "Consistent autonomous paths due to precise calibration and control loop tuning",
        "Assembly time cut ~30% via modular gearbox design and standardized hardware",
        "Judges and mentors highlighted documentation quality and mentorship impact"
      ],
      futurePlans: [
        "Adopt lighter materials and custom gear profiles to improve acceleration and efficiency",
        "Pilot predictive maintenance with onboard sensors for drivetrain health monitoring",
        "Run workshops for rookie teams and expand mentorship coverage",
        "Build digital-twin simulation workflows for driver practice and tuning",
        "Package sponsor-ready documentation that highlights engineering rigor"
      ],
      myRole: [
        "Owned drivetrain architecture, gearbox CAD, and stress checks for the 2023 robot",
        "Set maintenance standards and checklists that hit the 95% reliability metric",
        "Led design reviews and tolerance checks before machining started",
        "Coordinated fabrication: material procurement, tooling setup, and quality control",
        "Mentored students on CAD, simulation workflows, and manufacturing best practices"
      ]
    }
  },
  {
    id: 3,
    type: "team",
    teamSize: 3,
    teamName: "Manning Robotics",
    projectName: "2023 Skills Alberta Robotics Competition",
    image: "/images/skillsbot.JPG",
    skills: ["Machining", "Circuit Design", "Problem Solving", "Technical Documentation", "Fabrication"],
    description:
      "Built two precision hockey robots for the 2023 Skills Alberta competition, focusing on machining, control systems, and rapid iteration under tight timelines.",
    roleSummary:
      "Led a 3-person team through design, prototyping, documentation, and testing to keep the robots competition-ready.",
    detail: {
      purpose: [
        "Deliver competition-ready hockey robots with precise control and puck handling",
        "Stress-test machining and circuit design workflows under tight timelines",
        "Implement control systems that adapt to fast gameplay and opponent dynamics",
        "Demonstrate team leadership and documentation discipline in a judged environment"
      ],
      development: [
        "Led concept-to-competition cycle including requirements, design iteration, and risk triage",
        "Machined custom gearboxes and drivetrains; fabricated manipulator mechanisms for puck control",
        "Designed control PCBs for motor drivers, sensor IO, and comms with noise mitigation",
        "Implemented autonomous routines and driver controls with diagnostics for quick tuning",
        "Modular architecture for pit repairs and swaps during matches"
      ],
      documentation: [
        "Assembly procedures with BOMs, QC gates, and tolerance notes",
        "Circuit diagrams and firmware notes including troubleshooting flows and pin maps",
        "Match strategy docs with scoring paths, counter-strats, and telemetry checklists",
        "Maintenance and safety protocols tailored to event requirements and pit workflows"
      ],
      results: [
        "Two reliable hockey bots completed and validated in scrimmages ahead of the event",
        "Met competition timeline and budget while maintaining precision control",
        "Positive judge and peer feedback on mechanical design and consistency",
        "Positioned the team as a go-to for outreach and mentoring requests"
      ],
      futurePlans: [
        "Roll lessons into future competition robots with tighter control loops",
        "Expand outreach and education around precision robotics builds",
        "Develop kit-style documentation for schools and rookie teams",
        "Collaborate with other teams for shared testing and design sprints",
        "Mentor the next cohort on machining, controls, and competition prep"
      ],
      myRole: [
        "Project-led a 3-person crew; owned scheduling, risk calls, and competition readiness",
        "Coordinated machining, electronics, and programming deliverables across the team",
        "Ran design reviews and QA to keep both robots compliant and reliable",
        "Mentored teammates on machining, circuit design, and controls implementation",
        "Presented the technical approach to judges and other teams during the event"
      ]
    }
  },
  {
    id: 4,
    type: "team",
    teamSize: 6,
    teamName: "ExoSpace",
    projectName: "2024 NASA Space Apps Challenge",
    image:
      "https://images-assets.nasa.gov/image/PIA23408/PIA23408~orig.jpg?w=600&h=300&fit=crop",
    skills: ["HTML5", "CSS", "JavaScript", "NASA API"],
    description:
      "Built a responsive web app during the 2024 NASA Space Apps Challenge to visualize live NASA datasets with performant API pipelines.",
    roleSummary:
      "Front-end build and API integration for data visualization components, delivering performant browser experiences under hackathon timelines.",
    detail: {
      purpose: [
        "Prototype web-based data visualizations for NASA challenges using open APIs",
        "Show how modern browser tech can make space telemetry accessible to students and researchers",
        "Build a portable ingestion layer that merges multiple NASA datasets quickly",
        "Collaborate rapidly under a 48-hour hackathon constraint"
      ],
      development: [
        "Responsive single-page app with mobile-first layouts and motion to aid comprehension",
        "Integrated NASA APIs for imagery and astronomy data with caching and request throttling",
        "Interactive charts/maps with accessible controls, keyboard navigation, and annotations",
        "Data processing pipeline for merging datasets and handling rate limits/failures gracefully",
        "PWA features including offline caching, install prompts, and performance budgets"
      ],
      documentation: [
        "API playbooks covering authentication, rate limits, and error handling",
        "UX research notes on accessibility and clarity for non-expert users",
        "System diagrams for data flow, caching, and component boundaries",
        "Judge-ready pitch deck summarizing tech stack, performance, and impact"
      ],
      results: [
        "Shipped a working prototype in 48 hours with multiple live visualizations",
        "Earned judge feedback on clarity of data viz and performance under load",
        "Scored well on technical implementation and potential impact categories",
        "Built reusable components that now seed future space-education demos"
      ],
      futurePlans: [
        "Add more NASA datasets and richer visualization layers for educators",
        "Partner with teachers to package lessons around the tooling",
        "Harden the API gateway with better caching, observability, and fallbacks",
        "Explore media and research use cases for the visualization stack",
        "Return to future NASA challenges with the evolved toolkit"
      ],
      myRole: [
        "Drove the front-end build with responsive layouts and motion for quick comprehension",
        "Integrated NASA APIs while handling throttling, caching, and degraded states",
        "Built chart and map components with accessible interactions and annotations",
        "Coordinated day-of sprints and presented the solution to judges",
        "Documented API contracts and onboarding steps so teammates could extend features"
      ]
    }
  }
];

export const featuredTeamProject = teamProjects.find((project) => project.isFeatured);
export const additionalTeamProjects = teamProjects.filter((project) => !project.isFeatured);

export const allProjects: AnyProject[] = [...personalProjects, ...teamProjects];

export const getProjectById = (type: ProjectType, id: number) => {
  return (type === "personal" ? personalProjects : teamProjects).find((project) => project.id === id);
};
