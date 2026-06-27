"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { RiInstagramLine, RiTiktokLine, RiYoutubeLine, RiTwitterXLine, RiPhoneLine, RiVerifiedBadgeLine } from "@remixicon/react"

export interface HeroStat {
  label: string
  value: string
}

export interface HeroSocial {
  platform: "instagram" | "tiktok" | "youtube" | "twitter"
  handle: string
  url: string
}

export interface InfluencerHeroProps {
  badge?: string
  name?: string
  verified?: boolean
  tagline?: string
  bio?: string
  image?: string
  location?: string
  stats?: HeroStat[]
  socials?: HeroSocial[]
  primaryCta?: string
  secondaryCta?: string
}

const socialConfig: Record<
  HeroSocial["platform"],
  { icon: React.ReactNode; label: string; color: string }
> = {
  instagram: { icon: <RiInstagramLine size={20} />, label: "Instagram", color: "hover:text-pink-500" },
  tiktok: { icon: <RiTiktokLine size={20} />, label: "TikTok", color: "hover:text-neutral-900 dark:hover:text-white" },
  youtube: { icon: <RiYoutubeLine size={20} />, label: "YouTube", color: "hover:text-red-500" },
  twitter: { icon: <RiTwitterXLine size={20} />, label: "X", color: "hover:text-neutral-900 dark:hover:text-white" },
}

function InfluencerHero({
  badge = "Lifestyle & Fashion Creator",
  name = "Sophia Reyes",
  verified = true,
  tagline = "Living life in style — one post at a time ✨",
  bio = "I share daily fashion inspiration, beauty tips, and behind-the-scenes moments from my life. Partnering with brands I genuinely love to bring you authentic, creative content.",
  image = "https://mciiqwdowrsweuwmhybi.supabase.co/storage/v1/object/public/app/projects/b2f99fac-fe29-4839-8619-0bd381507c31/images/influencer-hero.png?t=1782574813858",
  location = "Los Angeles, CA",
  stats = [
    { label: "Followers", value: "2.4M" },
    { label: "Following", value: "891" },
    { label: "Posts", value: "1,247" },
  ],
  socials = [
    { platform: "instagram", handle: "@sophiareyes", url: "https://instagram.com" },
    { platform: "tiktok", handle: "@sophiareyes", url: "https://tiktok.com" },
    { platform: "youtube", handle: "Sophia Reyes", url: "https://youtube.com" },
    { platform: "twitter", handle: "@sophiareyes", url: "https://x.com" },
  ],
  primaryCta = "Follow Me",
  secondaryCta = "Book a Collab",
}: InfluencerHeroProps) {
  return (
    <section
      data-component="InfluencerHero"
      className="relative w-full overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(224 30% 12%) 1px, transparent 1px), linear-gradient(to bottom, hsl(224 30% 12%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---------- Left: Content ---------- */}
          <div className="flex flex-col items-start gap-6 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge
                variant="secondary"
                className="gap-1.5 rounded-full border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {badge}
              </Badge>
            </div>

            {/* Name */}
            <div className="flex items-center gap-3">
              <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {name}
              </h1>
              {verified && (
                <RiVerifiedBadgeLine
                  size={36}
                  className="shrink-0 text-primary"
                  aria-label="Verified"
                />
              )}
            </div>

            {/* Tagline */}
            <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
              {tagline}
            </p>

            {/* Bio */}
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              {bio}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <RiPhoneLine size={16} className="text-primary" />
              <span>{location}</span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-2">
              {stats?.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-heading text-3xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button size="lg" className="h-12 rounded-full px-8 text-base font-semibold">
                {primaryCta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-8 text-base font-semibold"
              >
                {secondaryCta}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="text-sm font-medium text-muted-foreground">
                Find me on
              </span>
              <div className="flex items-center gap-2">
                {socials?.map((social, i) => {
                  const config = socialConfig[social.platform]
                  return (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors",
                        config.color
                      )}
                      aria-label={`${config.label}: ${social.handle}`}
                    >
                      {config.icon}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* ---------- Right: Image ---------- */}
          <div className="relative flex items-center justify-center">
            {/* Gradient ring behind avatar */}
            <div className="absolute h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-primary via-accent to-primary opacity-20 blur-2xl sm:h-[26rem] sm:w-[26rem]" />

            {/* Avatar */}
            <div className="relative animate-fade-in">
              <div className="rounded-[2rem] bg-gradient-to-tr from-primary to-accent p-[4px] shadow-2xl">
                <Avatar className="h-[20rem] w-[20rem] rounded-[1.85rem] sm:h-[24rem] sm:w-[24rem]">
                  <AvatarImage
                    src={image}
                    alt={name}
                    className="object-cover"
                  />
                  <AvatarFallback className="rounded-[1.85rem] font-heading text-6xl font-bold text-primary">
                    {name?.charAt(0) ?? "S"}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Floating stat card — top right */}
              <div className="absolute -right-4 -top-4 animate-glow-pulse rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-lg dark:bg-card/80 sm:-right-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500/10 text-pink-500">
                    <RiInstagramLine size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold leading-none text-foreground">
                      1.8M
                    </p>
                    <p className="text-xs text-muted-foreground">Instagram</p>
                  </div>
                </div>
              </div>

              {/* Floating stat card — bottom left */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-lg dark:bg-card/80 sm:-left-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <RiTiktokLine size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold leading-none text-foreground">
                      950K
                    </p>
                    <p className="text-xs text-muted-foreground">TikTok</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { InfluencerHero }
export default InfluencerHero
