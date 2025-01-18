"use client";

import * as React from "react";
import { BookOpen, Database } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
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
      url: "/react",
      icon: BookOpen,
      isActive: true,
      items: [
        { title: "What to expect", url: "/react/introduction" },
        { title: "key considerations", url: "/react/basics" },
        { title: "advanced concepts", url: "/react/advanced" },
      ],
    },
    {
      title: "React",
      url: "/react",
      icon: FaReact,
      items: [
        { title: "Introduction to React", url: "/react/introduction" },
        { title: "React Basics", url: "/react/basics" },
        { title: "Advanced React", url: "/react/advanced" },
      ],
    },
    {
      title: "CSS",
      url: "/css",
      icon: SiCsswizardry,
      items: [
        { title: "CSS Basics", url: "/css/basics" },
        { title: "Flexbox", url: "/css/flexbox" },
        { title: "Grid", url: "/css/grid" },
      ],
    },
    {
      title: "Next.js",
      url: "/nextjs",
      icon: RiNextjsFill,
      items: [
        { title: "Introduction to Next.js", url: "/nextjs/introduction" },
        { title: "Next.js Routing", url: "/nextjs/routing" },
        { title: "Next.js API Routes", url: "/nextjs/api-routes" },
      ],
    },
    {
      title: "TypeScript",
      url: "/typescript",
      icon: BiLogoTypescript,
      items: [
        {
          title: "Introduction to TypeScript",
          url: "/typescript/introduction",
        },
        { title: "TypeScript Basics", url: "/typescript/basics" },
        { title: "Advanced TypeScript", url: "/typescript/advanced" },
      ],
    },
    {
      title: "Learning SQL",
      url: "/sql",
      icon: Database,
      items: [
        { title: "SQL Basics", url: "/sql/basics" },
        { title: "Advanced SQL", url: "/sql/advanced" },
        { title: "SQL Performance Tuning", url: "/sql/performance-tuning" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mt-[80px]"></SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
