import { NextResponse } from "next/server";

const dummyMovies = {
  success: true,
  data: [
    {
      id: "668739108436317016-no-gain-no-love",
      imgUrl: "https://img.awafim.tv/images/8G4Y9mB3o4Zg.192x0.webp",
      country: "kr",
      title: "No Gain No Love",
      year: "2024",
      duration: "S01E11",
      rate: "8.6",
      postedAt: "4 hours ago",
    },
  ],
};

const dummyMovie = {
  success: true,
  data: {
    imgUrl: "https://img.awafim.tv/images/8G4Y9mB3o4Zg.webp",
    title: "No Gain No Love (2024 Series)",
    desc: "Meet Hae-yeong, a woman with a sharp mind for numbers and a zero tolerance for loss in any shape or form. Enter Ji-uk, the neighborhood’s kind-hearted convenience store clerk, who avoids trouble at all costs. Hae-yeong unexpectedly challenges Ji-uk with an irresistible, mind-blowing proposal, and comedic mishaps and heartfelt moments are bound to follow. What could her daring offer be?",
    trailer: "tBo9xY1MPrE",
    meta: {
      duration: " 2024",
      year: "Aug 26",
      posted: " 4 hours ago",
      rate: "8.6",
      votes: "4177",
    },
    download: {
      video:
        "localhost:3000/api/v2/download/668739108436317016-no-gain-no-love/S01/E11/download-0-0",
      subtitle:
        "localhost:3000/api/v2/download/668739108436317016-no-gain-no-love/S01/E11/download-0-1",
    },
    related: [
      {
        id: "349460141806064392-penthouse",
        imgUrl: "https://img.awafim.tv/images/epV99dDvdRnw.192x0.webp",
        country: "kr",
        title: "The Penthouse",
        year: "2020",
        duration: "S03E14              finale",
        rate: "7.9",
        postedAt: "Sep 11, 2021",
      },
      {
        id: "277569013008177926-hometown-cha-cha-cha",
        imgUrl: "https://img.awafim.tv/images/JD4qOOYwObn5.192x0.webp",
        country: "kr",
        title: "Hometown Cha-Cha-Cha",
        year: "2021",
        duration: "S01E16              finale",
        rate: "8.3",
        postedAt: "Oct 17, 2021",
      },
      {
        id: "261629655646346981-kings-affection",
        imgUrl: "https://img.awafim.tv/images/b8e9GgvoPYEq.192x0.webp",
        country: "kr",
        title: "The King's Affection",
        year: "2021",
        duration: "S01E20              finale",
        rate: "8",
        postedAt: "Dec 14, 2021",
      },
      {
        id: "560417001089143651-moon-in-the-day",
        imgUrl: "https://img.awafim.tv/images/QpOVwmgOkDdR.192x0.webp",
        country: "kr",
        title: "Moon in the Day",
        year: "2023",
        duration: "S01E14              finale",
        rate: "7",
        postedAt: "Dec 14, 2023",
      },
      {
        id: "63121751818772333-agency",
        imgUrl: "https://img.awafim.tv/images/5Gyr3ZVAvB60.192x0.webp",
        country: "kr",
        title: "Agency",
        year: "2023",
        duration: "S01E16              finale",
        rate: "7.8",
        postedAt: "Apr 12, 2023",
      },
      {
        id: "370905039109232237-awaken",
        imgUrl: "https://img.awafim.tv/images/9Ey8db92WmDp.192x0.webp",
        country: "kr",
        title: "Awaken",
        year: "2020",
        duration: "S01E16              finale",
        rate: "7.5",
        postedAt: "Jan 19, 2021",
      },
    ],
    details: {
      type: [
        {
          name: "series",
          url: "https://www.awafim.tv/browse?type=series",
        },
      ],
      "premiere date": "Aug 26, 2024",
      country: [
        {
          name: "South Korea",
          url: "https://www.awafim.tv/countries/KOR",
        },
      ],
      "": "",
      language: [
        {
          name: "Korean",
          url: "https://www.awafim.tv/languages/kor",
        },
      ],
      genre: [
        {
          name: "Drama",
          url: "https://www.awafim.tv/genres/Drama",
        },
        {
          name: "Comedy",
          url: "https://www.awafim.tv/genres/Comedy",
        },
        {
          name: "Romance",
          url: "https://www.awafim.tv/genres/Romance",
        },
      ],
      cast: [
        {
          name: "Shin Min-a",
          url: "https://www.awafim.tv/persons/Shin-Min-a",
        },
        {
          name: "Kim Young-dae",
          url: "https://www.awafim.tv/persons/Kim-Young-dae",
        },
        {
          name: "Lee Sang-yi",
          url: "https://www.awafim.tv/persons/Lee-Sang-yi",
        },
        {
          name: "Han Ji-hyun",
          url: "https://www.awafim.tv/persons/Han-Ji-hyun",
        },
        {
          name: "Lee You-jin",
          url: "https://www.awafim.tv/persons/Lee-You-jin",
        },
        {
          name: "Song Won-seok",
          url: "https://www.awafim.tv/persons/Song-Won-seok",
        },
        {
          name: "Jeon Hye-won",
          url: "https://www.awafim.tv/persons/Jeon-Hye-won",
        },
        {
          name: "Choi Jin-ho",
          url: "https://www.awafim.tv/persons/Choi-Jin-ho",
        },
        {
          name: "Lee Il-hwa",
          url: "https://www.awafim.tv/persons/Lee-Il-hwa",
        },
        {
          name: "Kim Hye-hwa",
          url: "https://www.awafim.tv/persons/Kim-Hye-hwa",
        },
        {
          name: "Lee Chang-ho",
          url: "https://www.awafim.tv/persons/Lee-Chang-ho",
        },
        {
          name: "Jo Deok-hee",
          url: "https://www.awafim.tv/persons/Jo-Deok-hee",
        },
        {
          name: "Joo Min-kyung",
          url: "https://www.awafim.tv/persons/Joo-Min-kyung",
        },
        {
          name: "Heo Jung-min",
          url: "https://www.awafim.tv/persons/Heo-Jung-min",
        },
        {
          name: "Yoon Bok-in",
          url: "https://www.awafim.tv/persons/Yoon-Bok-in",
        },
      ],
      references: [
        {
          name: "imdb",
          url: "https://www.imdb.com/title/tt32981987/",
        },
        {
          name: "website",
          url: "https://tvn.cjenm.com/ko/No-Gain-No-Love/",
        },
        {
          name: "MyDramaList",
          url: "https://mydramalist.com/754711-because-i-want-no-loss",
        },
        {
          name: "website",
          url: "https://www.primevideo.com/detail/0L6EHB1CGZVMW1LH8P4I91M3BR/",
        },
      ],
    },
  },
};

export async function GET() {
  try {
    return NextResponse.json({
      dummyMovies,
      dummyMovie,
    });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
}
