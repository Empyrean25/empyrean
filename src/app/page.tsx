import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home | Empyrean Real Estate Solutions - Your all-in-one access to the Philippine Real Estate",
  description:
    "Welcome to Empyrean Real Estate Solutions - We are a one-stop shop for all your Real Estate needs.",
};

export default function Home() {
  return <HomeClient />;
}
