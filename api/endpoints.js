module.exports = (req, res) => {
  let endpoints = {
    all: "https://inshortshi50.vercel.app/v1/all",
    national: "https://inshortshi50.vercel.app/v1/national",
    business: "https://inshortshi50.vercel.app/v1/business",
    sports: "https://inshortshi50.vercel.app/v1/sports",
    world: "https://inshortshi50.vercel.app/v1/world",
    politics: "https://inshortshi50.vercel.app/v1/politics",
    technology: "https://inshortshi50.vercel.app/v1/technology",
    startup: "https://inshortshi50.vercel.app/v1/startup",
    entertainment: "https://inshortshi50.vercel.app/v1/entertainment",
    science: "https://inshortshi50.vercel.app/v1/science",
    automobile: "https://inshortshi50.vercel.app/v1/automobile",
    miscellaneous: "https://inshortshi50.vercel.app/v1/miscellaneous",
    hatke: "https://inshortshi50.vercel.app/v1/hatke",
  };

  res.json(endpoints);
};
