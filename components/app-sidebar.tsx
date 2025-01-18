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
    // {
    //   title: "Getting started",
    //   url: "/blog/react",
    //   icon: BookOpen,
    //   isActive: true,
    //   items: [
    //     { title: "What to expect", url: "/blog/react/introduction" },
    //     { title: "key considerations", url: "/blog/react/basics" },
    //     { title: "advanced concepts", url: "/blog/react/advanced" },
    //   ],
    // },
    {
      title: "React",
      url: "/blog/react",
      icon: FaReact,
      isActive: true,
      items: [
        { title: "Introduction to React", url: "/blog/react/introduction" },
        { title: "React Basics", url: "/blog/react/basics" },
        { title: "Advanced React", url: "/blog/react/advanced" },
      ],
    },
    {
      title: "CSS",
      url: "/blog/css",
      icon: SiCsswizardry,
      items: [
        { title: "CSS Basics", url: "/blog/css/basics" },
        { title: "Flexbox", url: "/blog/css/flexbox" },
        { title: "Grid", url: "/blog/css/grid" },
      ],
    },
    {
      title: "Next.js",
      url: "/blog/nextjs",
      icon: RiNextjsFill,
      items: [
        { title: "Introduction to Next.js", url: "/blog/nextjs/introduction" },
        { title: "Next.js Routing", url: "/blog/nextjs/routing" },
        { title: "Next.js API Routes", url: "/blog/nextjs/api-routes" },
      ],
    },
    {
      title: "TypeScript",
      url: "/blog/typescript",
      icon: BiLogoTypescript,
      items: [
        {
          title: "Introduction to TypeScript",
          url: "/blog/typescript/introduction",
        },
        { title: "TypeScript Basics", url: "/blog/typescript/basics" },
        { title: "Advanced TypeScript", url: "/blog/typescript/advanced" },
      ],
    },
    {
      title: "Learning SQL",
      url: "/blog/sql",
      icon: Database,
      items: [
        { title: "SQL Basics", url: "/blog/sql/basics" },
        { title: "Advanced SQL", url: "/blog/sql/advanced" },
        {
          title: "SQL Performance Tuning",
          url: "/blog/sql/performance-tuning",
        },
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
