"use client";

import { useState } from "react";
import { ArrowRight, Building2, Clock, MapPin,  Heart, Coffee, Globe, Trophy, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs = [
    {
      id: "frontend-developer",
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote / Bangalore",
      experience: "2-4 years",
      department: "Engineering",
      description: "Build beautiful, responsive web applications using React, Next.js, and modern CSS. Work on client projects and internal tools.",
      requirements: [
        "Strong proficiency in React, TypeScript, and modern JavaScript",
        "Experience with Next.js, Tailwind CSS, and responsive design",
        "Understanding of web performance and accessibility",
        "Experience with Git and collaborative development",
        "Strong problem-solving and communication skills"
      ],
      responsibilities: [
        "Develop and maintain client websites and applications",
        "Collaborate with designers and backend developers",
        "Write clean, maintainable, and well-documented code",
        "Participate in code reviews and technical discussions",
        "Stay updated with latest frontend technologies and best practices"
      ]
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Remote / Bangalore",
      experience: "3-5 years",
      department: "Design",
      description: "Create intuitive and beautiful user experiences for web and mobile applications. Work closely with clients and development teams.",
      requirements: [
        "Strong portfolio showcasing web and mobile design work",
        "Proficiency in Figma, Adobe Creative Suite, and prototyping tools",
        "Understanding of user-centered design principles",
        "Experience with design systems and component libraries",
        "Excellent visual design and typography skills"
      ],
      responsibilities: [
        "Design user interfaces for websites and applications",
        "Create wireframes, prototypes, and high-fidelity mockups",
        "Conduct user research and usability testing",
        "Collaborate with developers to ensure design feasibility",
        "Maintain and evolve design systems"
      ]
    },
    {
      id: "full-stack-developer",
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Remote / Bangalore",
      experience: "3-6 years",
      department: "Engineering",
      description: "Build end-to-end solutions from database design to frontend implementation. Work on complex projects and mentor junior developers.",
      requirements: [
        "Strong experience with React, Node.js, and TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud platforms (AWS, Vercel, Netlify)",
        "Understanding of API design and development",
        "Experience with testing frameworks and CI/CD"
      ],
      responsibilities: [
        "Develop full-stack applications and APIs",
        "Design and optimize database schemas",
        "Deploy and maintain applications in production",
        "Mentor junior developers and conduct code reviews",
        "Participate in technical architecture decisions"
      ]
    },
    {
      id: "project-manager",
      title: "Project Manager",
      type: "Full-time",
      location: "Remote / Bangalore",
      experience: "4-7 years",
      department: "Operations",
      description: "Lead client projects from inception to delivery. Coordinate between clients, designers, and developers to ensure successful outcomes.",
      requirements: [
        "Experience managing web development projects",
        "Strong communication and stakeholder management skills",
        "Knowledge of project management methodologies (Agile, Scrum)",
        "Experience with project management tools (Jira, Asana, etc.)",
        "Understanding of web technologies and development processes"
      ],
      responsibilities: [
        "Lead project planning, execution, and delivery",
        "Manage client relationships and expectations",
        "Coordinate between design, development, and QA teams",
        "Track project progress and manage risks",
        "Ensure projects are delivered on time and within budget"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible working hours"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and books"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Performance Bonuses",
      description: "Quarterly performance reviews with bonuses"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Team",
      description: "Work with talented people from around the world"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Latest Tech",
      description: "Access to the latest tools and technologies"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            We&apos;re building the future of digital experiences. Join us in creating amazing websites, 
            AI solutions, and automation tools that help businesses grow.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">Why Work With Us?</h2>
            <p className="text-zinc-400">We believe in creating an environment where great work happens</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-2xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-900 transition-colors">
                <div className="text-emerald-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-2">{benefit.title}</h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">Open Positions</h2>
            <p className="text-zinc-400">Find your perfect role and grow with us</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  selectedJob === job.id
                    ? "border-emerald-500/50 bg-emerald-950/20"
                    : "border-white/10 bg-zinc-900/60 hover:border-white/20 hover:bg-zinc-900"
                }`}
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100 mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                      <div className="flex items-center gap-1">
                        <Building2 size={16} />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight 
                    size={20} 
                    className={`text-zinc-400 transition-transform ${
                      selectedJob === job.id ? "rotate-90" : ""
                    }`}
                  />
                </div>

                <p className="text-zinc-300 mb-4">{job.description}</p>

                {selectedJob === job.id && (
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-2">Responsibilities:</h4>
                      <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 px-6 rounded-xl transition-colors">
                      Apply for this position
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">Don&apos;t see the right fit?</h2>
          <p className="text-zinc-400 mb-8">
            We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </p>
          <Link href="mailto:rs591090@gmail.com" className="bg-zinc-100 hover:bg-white text-black font-semibold py-3 px-8 rounded-xl transition-colors">
            Send us your resume
          </Link>
        </div>
      </div>
    </div>
  );
}