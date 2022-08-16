const title = "Entrance Exam Info";
const description = "Know almost every entrance conducted in India at one place.";

const SEO = {
  title,
  description,
  canonical: "https://eeinfo.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://eeinfo.vercel.app",
    title,
    description,
    images: [
      {
        url: "https://eeinfo.vercel.app/static/images/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@tiluckdave",
    site: "@tiluckdave",
    cardType: "summary_large_image",
  },
};

export default SEO;
