"use client";

import AutomationHero from "@/components/blog/AutomationHero";
import { BlogListPage, BlogCardList } from "@/components/blog/BlogList";
import FeaturedBlog from "@/components/blog/FeaturedBlog";
import Footer from "@/components/blog/Footer";
import Header from "@/components/blog/Header";
import StayUpToDate from "@/components/blog/StayUpToDate";
import SubscribeSection from "@/components/blog/SubscribeSection";
import Image from "next/image";
import { useState } from "react";

export default function BlogOverview() {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"];
  const blogs = Array(12).fill({
    title: "8 Top Open-Source LLMs for 2024 and Their Uses",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    author: "Rohit Kadam",
    date: "13th Jan 2020",
    description: "Join us for a full day of events sharing best practices from",
  });

  return (
    <div className="bg-white">
      {/* Header */}
      <Header />
      <SubscribeSection />
      <FeaturedBlog />
      <BlogListPage />
      <StayUpToDate />
      <BlogCardList />
      <AutomationHero />

      {/* Footer */}
      <Footer />
    </div>
  );
}
