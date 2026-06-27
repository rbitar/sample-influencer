import type { ElementConfig } from "@/components/elements/types"

const config: ElementConfig = {
  InfluencerHero: {
    label: "Influencer Hero",
    fields: {
      badge: {
        type: "text",
        label: "Badge",
      },
      name: {
        type: "text",
        label: "Name",
      },
      verified: {
        type: "boolean",
        label: "Verified Badge",
      },
      tagline: {
        type: "text",
        label: "Tagline",
      },
      bio: {
        type: "textarea",
        label: "Bio",
      },
      image: {
        type: "image",
        label: "Profile Image",
      },
      location: {
        type: "text",
        label: "Location",
      },
      stats: {
        type: "array",
        label: "Stats",
        titleField: "label",
        arrayFields: {
          label: { type: "text", label: "Label" },
          value: { type: "text", label: "Value" },
        },
      },
      socials: {
        type: "array",
        label: "Socials",
        titleField: "platform",
        arrayFields: {
          platform: {
            type: "select",
            label: "Platform",
            options: [
              { label: "Instagram", value: "instagram" },
              { label: "TikTok", value: "tiktok" },
              { label: "YouTube", value: "youtube" },
              { label: "X (Twitter)", value: "twitter" },
            ],
          },
          handle: { type: "text", label: "Handle" },
          url: { type: "text", label: "URL" },
        },
      },
      primaryCta: {
        type: "text",
        label: "Primary Button",
      },
      secondaryCta: {
        type: "text",
        label: "Secondary Button",
      },
    },
  },
}

export default config
