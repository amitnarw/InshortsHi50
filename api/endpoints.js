module.exports = (req, res) => {
  let endpoints = {
    all: "https://inshortshi50.vercel.app/all",
    national: "https://inshortshi50.vercel.app/national",
    business: "https://inshortshi50.vercel.app/business",
    sports: "https://inshortshi50.vercel.app/sports",
    world: "https://inshortshi50.vercel.app/world",
    politics: "https://inshortshi50.vercel.app/politics",
    technology: "https://inshortshi50.vercel.app/technology",
    startup: "https://inshortshi50.vercel.app/startup",
    entertainment: "https://inshortshi50.vercel.app/entertainment",
    science: "https://inshortshi50.vercel.app/science",
    automobile: "https://inshortshi50.vercel.app/automobile",
    miscellaneous: "https://inshortshi50.vercel.app/miscellaneous",
    hatke: "https://inshortshi50.vercel.app/hatke",
  };

  res.json(endpoints);
};
