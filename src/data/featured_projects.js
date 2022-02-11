let imgPath = '/assets/images/project/'
let logoPath = '/assets/images/logos/'
export const featured_projects = [
  {
    id: 0,
    name: 'Saral Lagani',
    logo: `${logoPath}saral.jpg`,
    img: `${imgPath}sarallagani1.png`,
    link: 'https://play.google.com/store/apps/details?id=com.sarallagani.android',
    description:
      'A responsive mobile application which helps to monitor closely the stock market of Nepal with the feautres of have free portfolio and watchlist. This app provides free annual report of company listed for trading in Nepal Stock Exchange .',
    colour: 'linear-gradient(to top, rgb(0, 122, 65),rgb(37, 207, 108))',
    languages: ['Dart', 'Javascript', 'Kotlin', 'Swift'],
    task: [
      'Front-End',
      'Back-End',
      'SQL Database',
      'UI/UX',
      'Api integration',
      'Social Media Marketing',
    ],

    puglins: ['Flutter'],
  },
  {
    id: 1,
    logo: `${logoPath}meme.png`,
    name: 'Meme Bhahadur',
    img: `${imgPath}memebahadur1.png`,
    link: 'https://play.google.com/store/apps/details?id=com.developer45.memebahadur&hl=en&gl=US',
    description:
      'A meme-making mobile application. Users can create their meme according too theier likes. They can import any meme kind like of photos and edit to create their own brand new meme.',
    colour:
      'linear-gradient(to bottom right, rgb(193, 56, 85),rgb(230, 162, 53))',
    task: ['Front-End', 'UI/UX', 'Api integration', 'Social Media Marketing'],
    languages: ['Dart', 'Javascript', 'Kotlin', 'Swift'],
    puglins: ['Flutter'],
  },
  {
    id: 2,
    name: 'Trabeely',
    link: 'https://www.trabeely.com/',
    logo: `${logoPath}trabeely.jpg`,
    img: `${imgPath}trabeely.jpg`,
    description:
      'A application guiding fellow travellers around who wants to visit the country. It included facilities of booking hotels, booking travelling packages, posting travel photos into feed and many more.',
    task: ['Front-End', 'UI/UX', 'Api integration', 'Social Media Marketing'],
    colour:
      'linear-gradient(to bottom right, rgb(193, 56, 85),rgb(230, 162, 53))',
    languages: ['Dart', 'Javascript', 'Kotlin', 'Swift'],
    puglins: ['Flutter'],
  },
]
