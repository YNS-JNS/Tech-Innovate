"use client";
import Button from "@/components/Button";
import FeatureBlock from "@/components/FeatureBlock";
import FeatureCard from "@/components/FeatureCard";
import Features from "@/components/Features";
import Heading from "@/components/Heading";
import { features, featuresBlock } from "@/constants/features";
import Image from "next/image";

const Services = () => {
  return (
    <section
      id="features"
      className="relative container flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28"
    >
      <Features />
    </section>
  );
};

export default Services;
