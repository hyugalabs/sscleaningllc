export const business = {
  name: "SS Cleaning LLC",
  owner: "Shellie Kiser",
  tagline: "Professional Cleaning Services You Can Trust",
  phoneDisplay: "234-233-0504",
  phoneE164: "+12342330504",
  email: "seamanshellie@gmail.com",
  town: "Atwater",
  state: "OH",
  counties: ["Portage County", "Summit County", "Stark County"],
  facebook: "https://www.facebook.com/people/Ss-Cleaning-LLC/100086947176070/",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=SS+Cleaning+LLC+Atwater+Ohio",
  googleRating: "5.0",
  googleReviewCount: 12,
} as const;

export type ServiceId = "residential" | "commercial" | "post-construction";

export const services: {
  id: ServiceId;
  name: string;
  short: string;
  body: string;
  goodFor: string[];
  photo: string;
  photoAlt: string;
}[] = [
  {
    id: "residential",
    name: "Residential cleaning",
    short: "Residential",
    body: "Houses and apartments, top to bottom: kitchens, bathrooms, floors, dusting, and the rooms that never seem to get their turn.",
    goodFor: ["Regular upkeep", "One-time deep cleans", "Getting ready for company"],
    photo: "/photos/residential.jpg",
    photoAlt: "Bright open living room and kitchen with clean hardwood floors",
  },
  {
    id: "commercial",
    name: "Commercial & office cleaning",
    short: "Commercial / Office",
    body: "Offices and business spaces kept presentable on your schedule: desks, break rooms, restrooms, floors, and trash, done without getting in your way.",
    goodFor: ["Offices", "Storefronts", "Shared workspaces"],
    photo: "/photos/commercial.jpg",
    photoAlt: "Open-plan office with rows of clean white desks",
  },
  {
    id: "post-construction",
    name: "Post-construction cleaning",
    short: "Post-construction",
    body: "After the build and before the walkthrough: drywall dust, paint specks, stickers, and debris cleared so the space is ready to hand over.",
    goodFor: ["Builders & contractors", "Remodels", "New homes"],
    photo: "/photos/post-construction.jpg",
    photoAlt: "Newly finished kitchen with white cabinets and fresh hardwood floor",
  },
];

/** Fired by "Add to work order" buttons; the work order checks that box. */
export const ADD_SERVICE_EVENT = "ss:add-service";
