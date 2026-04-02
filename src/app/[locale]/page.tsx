import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Menu } from "@/components/sections/Menu";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Reservation } from "@/components/sections/Reservation";
import { Location } from "@/components/sections/Location";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Reservation />
      <Location />
    </>
  );
}
