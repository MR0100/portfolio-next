"use client";

import PageAnimationWrapper from "./components/page_animation_wrapper";
import HomeScreen from "./screens/home/page";

export default function Home() {
  return <PageAnimationWrapper children={<HomeScreen />} />;
}
