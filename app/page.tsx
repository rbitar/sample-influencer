import { InfluencerHero } from "@/components/sections/InfluencerHero"

const Home: React.FC = () => {
  return (
    <main>
      <InfluencerHero
        badge="Lifestyle & Fashion Creator"
        name="Sophia Reyes"
        verified={true}
        tagline="Living life in style — one post at a time ✨"
        bio="I share daily fashion inspiration, beauty tips, and behind-the-scenes moments from my life. Partnering with brands I genuinely love to bring you authentic, creative content."
        image="https://mciiqwdowrsweuwmhybi.supabase.co/storage/v1/object/public/app/projects/b2f99fac-fe29-4839-8619-0bd381507c31/images/influencer-hero.png?t=1782574813858"
        location="Los Angeles, CA"
        stats={[
          { label: "Followers", value: "2.4M" },
          { label: "Following", value: "891" },
          { label: "Posts", value: "1,247" },
        ]}
        socials={[
          { platform: "instagram", handle: "@sophiareyes", url: "https://instagram.com" },
          { platform: "tiktok", handle: "@sophiareyes", url: "https://tiktok.com" },
          { platform: "youtube", handle: "Sophia Reyes", url: "https://youtube.com" },
          { platform: "twitter", handle: "@sophiareyes", url: "https://x.com" },
        ]}
        primaryCta="Follow Me"
        secondaryCta="Book a Collab"
      />
    </main>
  )
}

export default Home
