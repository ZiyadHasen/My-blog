"use client";

import * as React from "react";
import { BookOpen, Database } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import TeamSwitcher from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Ziyad Hasen",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Getting started",
      url: "#",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "What to expect",
          url: "#",
        },
        {
          title: "key considerations",
          url: "#",
        },
      ],
    },
    {
      title: "React",
      url: "#",
      icon: FaReact,
      // isActive: true,
      items: [
        {
          title: "Introduction to React",
          url: "#",
        },
        {
          title: "React Basics",
          url: "#",
        },
        {
          title: "Advanced React",
          url: "#",
        },
      ],
    },
    {
      title: "CSS",
      url: "#",
      icon: SiCsswizardry,
      items: [
        {
          title: "CSS Basics",
          url: "#",
        },
        {
          title: "Flexbox",
          url: "#",
        },
        {
          title: "Grid",
          url: "#",
        },
      ],
    },
    {
      title: "Next.js",
      url: "#",
      icon: RiNextjsFill,
      items: [
        {
          title: "Introduction to Next.js",
          url: "#",
        },
        {
          title: "Next.js Routing",
          url: "#",
        },
        {
          title: "Next.js API Routes",
          url: "#",
        },
      ],
    },
    {
      title: "TypeScript",
      url: "#",
      icon: BiLogoTypescript,
      items: [
        {
          title: "Introduction to TypeScript",
          url: "#",
        },
        {
          title: "TypeScript Basics",
          url: "#",
        },
        {
          title: "Advanced TypeScript",
          url: "#",
        },
      ],
    },
    {
      title: "Learning SQL",
      url: "#",
      icon: Database,
      items: [
        {
          title: "SQL Basics",
          url: "#",
        },
        {
          title: "Advanced SQL",
          url: "#",
        },
        {
          title: "SQL Performance Tuning",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
