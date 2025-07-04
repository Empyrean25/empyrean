import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home | Empyrean - Your Trusted Partner in Business Solutions",
  description:
    "Welcome to Empyrean. We provide innovative business solutions and services to help your company grow. Expert consulting, digital transformation, and strategic planning services.",
};

export default function Home() {
  return <HomeClient />;
}
