"use client";

import PageAnimationWrapper from "@/app/components/page_animation_wrapper";
import { useEffect, useState } from "react";

export default function SkillScreen() {
  let skills = [
    {
      title: "Flutter",
      skills: "UI/UX, State Management, etc.",
      icon: "icon-[logos--flutter]",
      bgColor: "bg-[#E7F4FF]",
      cardClass:
        "group-hover:bg-[#E7F4FF] group-hover:rounded-lg group-hover:shadow-md",
      score: 100,
      group: "Framework",
    },
    {
      title: "Dart",
      skills: "OOP, Functional Programming, etc.",
      icon: "icon-[logos--dart]",
      bgColor: "bg-[#E7F4FF]",
      cardClass:
        "group-hover:bg-[#E7F4FF] group-hover:rounded-lg group-hover:shadow-md",
      score: 100,
      group: "Programming Language",
    },
    {
      title: "Google Maps",
      skills: "Map APIs, Navigation, Geocoding, etc.",
      icon: "icon-[logos--google-maps]",
      bgColor: "bg-[#DCFFE7]",
      cardClass:
        "group-hover:bg-[#DCFFE7] group-hover:rounded-lg group-hover:shadow-md",
      score: 95,
      group: "APIs",
    },
    {
      title: "Map Box",
      skills: "Map APIs, Navigation, Geocoding, etc.",
      icon: "icon-[logos--mapbox]",
      bgColor: "bg-[#F1F1F1]",
      cardClass:
        "group-hover:bg-[#F1F1F1] group-hover:rounded-lg group-hover:shadow-md",
      score: 95,
      group: "APIs",
    },
    {
      title: "Firebase",
      skills:
        "Database, Storage, Authentication, Analytics, Crashlytics, Ad-Mob, ML, Cloud Messaging, etc.",
      icon: "icon-[logos--firebase]",
      bgColor: "bg-[#FFF7E6]",
      cardClass:
        "group-hover:bg-[#FFF7E6] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Services",
    },
    {
      title: "Figma",
      skills: "Design, Prototyping, etc.",
      icon: "icon-[logos--figma]",
      bgColor: "bg-[#FFDDDD]",
      cardClass:
        "group-hover:bg-[#FFDDDD] group-hover:rounded-lg group-hover:shadow-md",
      score: 80,
      group: "Design Tools",
    },
    {
      title: "Adobe XD",
      skills: "Design, Prototyping, etc.",
      icon: "icon-[logos--adobe-xd]",
      bgColor: "bg-[#FDC8FF]",
      cardClass:
        "group-hover:bg-[#FDC8FF] group-hover:rounded-lg group-hover:shadow-md",
      score: 80,
      group: "Design Tools",
    },

    {
      title: "Sketch",
      skills: "Design, Prototyping, etc.",
      icon: "icon-[logos--sketch]",
      bgColor: "bg-[#FFEBA2]",
      cardClass:
        "group-hover:bg-[#FFEBA2] group-hover:rounded-lg group-hover:shadow-md",
      score: 80,
      group: "Design Tools",
    },
    {
      title: "MIRO",
      skills: "Design, Prototyping, etc.",
      icon: "icon-[arcticons--miro] bg-black",
      bgColor: "bg-[#F4F4F4]",
      cardClass:
        "group-hover:bg-[#F4F4F4] group-hover:rounded-lg group-hover:shadow-md",
      score: 80,
      group: "Design Tools",
    },
    {
      title: "Photoshop",
      skills: "Design, Prototyping, etc.",
      icon: "icon-[logos--adobe-photoshop]",
      bgColor: "bg-[#A8E5FF]",
      cardClass:
        "group-hover:bg-[#A8E5FF] group-hover:rounded-lg group-hover:shadow-md",
      score: 80,
      group: "Design Tools",
    },
    {
      title: "Illustrator",
      skills: "Design, Prototyping, etc.",
      icon: "icon-[logos--adobe-illustrator]",
      bgColor: "bg-[#FFDAA3]",
      cardClass:
        "group-hover:bg-[#FFDAA3] group-hover:rounded-lg group-hover:shadow-md",
      score: 80,
      group: "Design Tools",
    },
    {
      title: "JavaScript",
      skills: "Basic",
      icon: "icon-[logos--javascript]",
      bgColor: "bg-[#FFF2CD]",
      cardClass:
        "group-hover:bg-[#FFF2CD] group-hover:rounded-lg group-hover:shadow-md",
      score: 40,
      group: "Programming Language",
    },
    {
      title: "Python",
      skills: "Basic",
      icon: "icon-[logos--python]",
      bgColor: "bg-[#FFF8BC]",
      cardClass:
        "group-hover:bg-[#FFF8BC] group-hover:rounded-lg group-hover:shadow-md",
      score: 40,
      group: "Programming Language",
    },
    {
      title: "C",
      skills: "Basic",
      icon: "icon-[logos--c]",
      bgColor: "bg-[#F4F4F4]",
      cardClass:
        "group-hover:bg-[#F4F4F4] group-hover:rounded-lg group-hover:shadow-md",
      score: 40,
      group: "Programming Language",
    },
    {
      title: "C++",
      skills: "Basic",
      icon: "icon-[devicon--cplusplus]",
      bgColor: "bg-[#DCF6FF]",
      cardClass:
        "group-hover:bg-[#DCF6FF] group-hover:rounded-lg group-hover:shadow-md",
      score: 40,
      group: "Programming Language",
    },
    {
      title: "Java",
      skills: "Basic",
      icon: "icon-[logos--java]",
      bgColor: "bg-[#F4F4F4]",
      cardClass:
        "group-hover:bg-[#F4F4F4] group-hover:rounded-lg group-hover:shadow-md",
      score: 40,
      group: "Programming Language",
    },
    {
      title: "APIs",
      skills: "REST, Third Party Integrations, Development, etc.",
      icon: "icon-[hugeicons--api] bg-black",
      bgColor: "bg-[#F4F4F4]",
      cardClass:
        "group-hover:bg-[#F4F4F4] group-hover:rounded-lg group-hover:shadow-md",
      score: 100,
      group: "APIs",
    },
    {
      title: "Jira",
      skills: "Project Management, Issue Tracking, etc.",
      icon: "icon-[logos--jira]",
      bgColor: "bg-[#D4E8FF]",
      cardClass:
        "group-hover:bg-[#D4E8FF] group-hover:rounded-lg group-hover:shadow-md",
      score: 80,
      group: "Project Management",
    },
    {
      title: "Trello",
      skills: "Project Management, Issue Tracking, etc.",
      icon: "icon-[logos--trello]",
      bgColor: "bg-[#B0E5FF]",
      cardClass:
        "group-hover:bg-[#B0E5FF] group-hover:rounded-lg group-hover:shadow-md",
      score: 80,
      group: "Project Management",
    },
    {
      title: "Slack",
      skills: "Communication, Project Management, etc.",
      icon: "icon-[logos--slack]",
      bgColor: "bg-[#FBFFD8]",
      cardClass:
        "group-hover:bg-[#FBFFD8] group-hover:rounded-lg group-hover:shadow-md",
      score: 100,
      group: "Project Management",
    },
    {
      title: "Git",
      skills: "Version Control, Branching, Merging, etc.",
      icon: "icon-[logos--git]",
      bgColor: "bg-[#FFE9E9]",
      cardClass:
        "group-hover:bg-[#FFE9E9] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Version Control",
    },
    {
      title: "GitHub",
      skills: "Version Control, Branching, Merging, etc.",
      icon: "icon-[logos--github]",
      bgColor: "bg-[#F4F4F4]",
      cardClass:
        "group-hover:bg-[#F4F4F4] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Version Control",
    },
    {
      title: "Bitbucket",
      skills: "Version Control, Branching, Merging, etc.",
      icon: "icon-[logos--bitbucket]",
      bgColor: "bg-[#CEEFFF]",
      cardClass:
        "group-hover:bg-[#CEEFFF] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Version Control",
    },
    {
      title: "GitLab",
      skills: "Version Control, Branching, Merging, etc.",
      icon: "icon-[logos--gitlab]",
      bgColor: "bg-[#FFCEB8]",
      cardClass:
        "group-hover:bg-[#FFCEB8] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Version Control",
    },
    {
      title: "Apple Pay",
      skills: "In-App Purchase, Subscription, etc.",
      icon: "icon-[logos--apple-pay]",
      bgColor: "bg-[#F4F4F4]",
      cardClass:
        "group-hover:bg-[#F4F4F4] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Payment Gateway",
    },
    {
      title: "Google Pay",
      skills: "In-App Purchase, Subscription, etc.",
      icon: "icon-[logos--google-pay]",
      bgColor: "bg-[#F4F4F4]",
      cardClass:
        "group-hover:bg-[#F4F4F4] group-hover:rounded-lg group-hover:shadow-md",
      score: 80,
      group: "Payment Gateway",
    },
    {
      title: "Stripe",
      skills: "Payment Gateway, Subscription, etc.",
      icon: "icon-[logos--stripe]",
      bgColor: "bg-[#E2DAFF]",
      cardClass:
        "group-hover:bg-[#E2DAFF] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Payment Gateway",
    },
    {
      title: "Razorpay",
      skills: "Payment Gateway, Subscription, etc.",
      icon: "icon-[simple-icons--razorpay] bg-black",
      bgColor: "bg-[#F4F4F4]",
      cardClass:
        "group-hover:bg-[#F4F4F4] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Payment Gateway",
    },
    {
      title: "MongoDB",
      skills: "Database, Storage, etc.",
      icon: "icon-[logos--mongodb]",
      bgColor: "bg-[#E3FFEB]",
      cardClass:
        "group-hover:bg-[#E3FFEB] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Database",
    },
    {
      title: "Supabase",
      skills: "Database, Storage, etc.",
      icon: "icon-[logos--supabase]",
      bgColor: "bg-[#DFFFF9]",
      cardClass:
        "group-hover:bg-[#DFFFF9] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Database",
    },
    {
      title: "PostgreSQL",
      skills: "Database, Storage, etc.",
      icon: "icon-[logos--postgresql]",
      bgColor: "bg-[#E7F4FF]",
      cardClass:
        "group-hover:bg-[#E7F4FF] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Database",
    },
    {
      title: "MySQL",
      skills: "Database, Storage, etc.",
      icon: "icon-[logos--mysql]",
      bgColor: "bg-[#E7F4FF]",
      cardClass:
        "group-hover:bg-[#E7F4FF] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Database",
    },
    {
      title: "SQLite",
      skills: "Database, Storage, etc.",
      icon: "icon-[logos--sqlite]",
      bgColor: "bg-[#E7F4FF]",
      cardClass:
        "group-hover:bg-[#E7F4FF] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Database",
    },
    {
      title: "Hive",
      skills: "Database, Storage, etc.",
      icon: "icon-[bx--hive] bg-black",
      bgColor: "bg-[#E7F4FF]",
      cardClass:
        "group-hover:bg-[#E7F4FF] group-hover:rounded-lg group-hover:shadow-md",
      score: 90,
      group: "Database",
    },
    {
      title: "Node.js",
      skills: "Server, APIs, etc.",
      icon: "icon-[logos--nodejs]",
      bgColor: "bg-[#E2FFD6]",
      cardClass:
        "group-hover:bg-[#E2FFD6] group-hover:rounded-lg group-hover:shadow-md",
      score: 50,
      group: "Framework",
    },
    {
      title: "NextJS",
      skills: "Frontend, APIS Integration, etc.",
      icon: "icon-[logos--nextjs]",
      bgColor: "bg-[#DEE1E4]",
      cardClass:
        "group-hover:bg-[#DEE1E4] group-hover:rounded-lg group-hover:shadow-md",
      score: 50,
      group: "Framework",
    },
  ];

  skills = skills.sort((a, b) => {
    return a.group.localeCompare(b.group);
  });
  


  var [searchSkills, setSearchSkills] = useState(skills);

  var groups: Array<string> = [];
  searchSkills.forEach((skill) => {
    if (!groups.includes(skill.group)) {
      groups.push(skill.group);
    }
  });

  return (
    <PageAnimationWrapper>
    {
        <div className="container m-auto p-[42px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex justify-between">
              <p className="text-[32px] font-semibold">Skills</p>
              <input
                type="text"
                placeholder="Search Skills"
                className="p-2 w-[300px] rounded-lg border border-gray-300 opacity-0 md:opacity-100 lg:opacity-100"
                onChange={(e) => {
                  var search = e.target.value;
                  var newSkills = skills.filter((skill) => {
                    return skill.title.toLowerCase().includes(search.toLowerCase()) || skill.skills.toLowerCase().includes(search.toLowerCase()) || skill.group.toLowerCase().includes(search.toLowerCase());
                  });
                  setSearchSkills(newSkills);
                }}/>
            </div>
            <p className="text-[17px]">
              I have mastered many skills while working on new ideas from
              different clients and also learning modern technologies to improve
              my qualities of work.
            </p>
             <input
                type="text"
                placeholder="Search Skills"
                className="p-2 w-full rounded-lg border border-gray-300 opacity-100 md:opacity-0 lg:opacity-0"
                onChange={(e) => {
                  var search = e.target.value;
                  var newSkills = skills.filter((skill) => {
                    return skill.title.toLowerCase().includes(search.toLowerCase()) || skill.skills.toLowerCase().includes(search.toLowerCase()) || skill.group.toLowerCase().includes(search.toLowerCase());
                  });
                  setSearchSkills(newSkills);
              }}
            />
            <div className="flex flex-col gap-[24px]">
              {groups.map((group, index) => {
                return (
                  <div key={index} className="flex flex-col gap-[24px]">
                    <p className="text-[24px] font-semibold">{group}</p>
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                      {searchSkills.map((skill, index) => {
                        if (skill.group === group) {
                          return (
                            <div className={"group"} key={index}>
                              <div
                                className={
                                  "flex flex-col md:flex-row lg:flex-row p-4 gap-4 items-center md:items-start lg:items-start " +
                                  skill.cardClass
                                }
                              >
                                <div
                                  className={
                                    "w-[100px] h-[100px] flex items-center justify-center text-white rounded-full p-6 group-hover:bg-white " +
                                    skill.bgColor
                                  }
                                >
                                  <span
                                    className={
                                      skill.icon + " w-[48px] h-[48px]"
                                    }
                                  />
                                </div>
                                <div className="flex w-full flex-col justify-center items-center md:items-start lg:items-start">
                                  <p className="text-[20px] font-semibold">
                                    {skill.title}
                                    <span
                                      className={"pl-2 text-[17px] opacity-50 "}
                                    >
                                      {skill.score + "%"}
                                    </span>
                                  </p>
                                  <p className="text-[17px] opacity-50">
                                    {skill.skills}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }</PageAnimationWrapper>
  );
}
