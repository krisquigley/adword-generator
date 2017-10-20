const createCsvWriter = require('csv-writer').createArrayCsvWriter
const titleize = require('titleize')

let places = ['yorkshire', 'leeds', 'on-site', 'remote']
let languages = ['ruby on rails', 'ruby', 'javascript', 'react', 'reactjs', 'back end',
'front end', 'full stack', 'rails']
let campaigns = ['programming'].concat(languages).concat(['generics'])

let results = []
let generatedWords = []

let headline1 = 'Become a Developer in 16 Weeks'
let description1 = 'Working on commercial projects will give you the edge over other Junior Devs'
let headline2 = 'Learn to Code in 16 Weeks'
let description2 = 'Work on commercial projects alongside senior developers who specialise in eComm'
let finalURL = 'https://procoders.io'

function words () {
  let languagesPhrases = []
  let placesLanguagesPhrases = []
  let additionalLanguagesPhrases = []
  let placesGenerics = []

  // Remove all duplication
  // Create adgroups (lang | phrase | place, lang | phrase, etc...)
  let additional = ['commercial']
  let phrases = ['course', 'programming course', 'programming classes', 'beginner course', 'basics course', 'coding course', 'coding class', 'for beginners', 'training', 'learn', 'learn to code', 'teach yourself', 'best place to learn', 'learning', 'where to learn', 'learn to write']
  let generics = ['learn to code',
                  'coding classes',
                  'coding courses',
                  'learn web development',
                  'computer programming courses',
                  'web development courses',
                  'code academy',
                  'codeschool',
                  'web designing course',
                  'how to code',
                  'learn programming',
                  'coding for beginners',
                  'programming courses',
                  'web application development',
                  'learn coding online',
                  'online web design courses',
                  'code online',
                  'online coding courses',
                  'programming for beginners',
                  'learn web design',
                  'learn to code apps',
                  'online programming courses',
                  'web design and development',
                  'learn computer programming',
                  'online website design',
                  'best way to learn coding',
                  'programming websites',
                  'which programming language to learn',
                  'teach yourself code',
                  'web design online',
                  'learn programming online',
                  'coding courses for beginners',
                  'computer coding courses',
                  'coding lessons',
                  'learn computer coding',
                  'computer programming for beginners',
                  'website design and development',
                  'learn to write code',
                  'web design development',
                  'web design for beginners',
                  'coding training',
                  'best websites to learn coding',
                  'how to learn coding for beginners',
                  'online courses for computer programming',
                  'best code to learn',
                  'best online coding courses',
                  'computer coding for beginners',
                  'learn coding from scratch',
                  'web designing courses for beginners',
                  'computer programming courses for beginners',
                  'learn code academy',
                  'learn basic coding',
                  'website design courses online',
                  'web page development',
                  'best online programming courses',
                  'learning to code where to start',
                  'learn to code websites',
                  'how to learn programming for beginners',
                  'online web page design',
                  'online web development',
                  'best sites to learn coding',
                  'best coding courses',
                  'websites to learn coding',
                  'learn to code javascript',
                  'best place to learn coding',
                  'learn basic programming',
                  'online coding school',
                  'learn web designing online',
                  'learn website development',
                  'where to learn coding',
                  'web design web development',
                  'programming lessons',
                  'code to learn',
                  'web design classes',
                  'learn web development online',
                  'coding classes near me',
                  'computer coding classes',
                  'coding websites for beginners',
                  'coding education',
                  'web design school',
                  'code learning sites',
                  'i want to learn coding',
                  'online coding classes',
                  'how can i learn coding',
                  'website design for beginners',
                  'coding courses for adults',
                  'online computer coding courses',
                  'best webdesign',
                  'custom website development',
                  'webdesign portfolio',
                  'web design and web development',
                  'website design classes',
                  'learn computer programming online',
                  'computer programming lessons',
                  'computer coding classes online',
                  'how to learn web designing from basics',
                  'website development websites',
                  'how to learn web designing at home',
                  'computer coding schools',
                  'best coding schools',
                  'basic coding classes',
                  'where can i learn to code',
                  'coding and programming for beginners',
                  'online programming classes',
                  'programing classes',
                  'how to learn web designing online',
                  'best way to learn computer programming',
                  'coding for beginners online',
                  'online programming courses for beginners',
                  'online programming school',
                  'coding classes for beginners',
                  'web design courses online for beginners',
                  'study programming online',
                  'online programming learning sites',
                  'best way to learn coding online',
                  'learn to write computer code',
                  'learning to write code for beginners',
                  'computer coding lessons',
                  'online coding courses for beginners']

  languages.forEach((language) => {
    phrases.forEach((phrase) => {
      languagesPhrases.push(language.concat(' ', phrase))
    })
  })

  places.forEach((place) => {
    languagesPhrases.forEach((languagesPhrase) => {
      placesLanguagesPhrases.push(place.concat(' ', languagesPhrase))
    })
    generics.forEach((generic) => {
      placesGenerics.push(generic.concat(' ', place))
    })
  })

  additional.forEach((add) => {
    languagesPhrases.forEach((languagesPhrase) => {
      additionalLanguagesPhrases.push(add.concat(' ', languagesPhrase))
    })
  })

  return new Promise((resolve) => {
    generatedWords = generatedWords.concat(placesLanguagesPhrases, placesGenerics, additionalLanguagesPhrases, languagesPhrases, generics)
    resolve(generatedWords)
  })
}

function campaign () {
  let adgroups = ['course', 'lesson', 'learn to code', 'learn', 
                  'code', 'beginner', 'train', 'web', 'develop']

  places.forEach((place) => {
    campaigns.forEach((campaign) => {
      adgroups.forEach((adgroup) => {
        results.push([titleize(campaign), titleize(`${campaign} | ${adgroup} | ${place}`), '', 
        titleize(`${campaign} | ${adgroup} | ${place}`), headline1, description1, finalURL])
        results.push([titleize(campaign),  titleize(`${campaign} | ${adgroup} | ${place}`), '', 
        titleize(`${campaign} | ${adgroup} | ${place}`), headline2, description2, finalURL])

        results.push([titleize(campaign), titleize(`${campaign} | ${adgroup} | Commercial`), '', 
        titleize(`${campaign} | ${adgroup}`), headline1, description1, finalURL])
        results.push([titleize(campaign),  titleize(`${campaign} | ${adgroup} | Commercial`), '', 
        titleize(`${campaign} | ${adgroup}`), headline2, description2, finalURL])
        
        matchKeywords(campaign, adgroup, place)
      })
    })
  })
  campaigns.forEach((campaign) => {
    adgroups.forEach((adgroup) => {
      results.push([titleize(campaign), titleize(`${campaign} | ${adgroup}`), '', titleize(`${campaign} | ${adgroup}`), headline1, description1, finalURL])
      results.push([titleize(campaign), titleize(`${campaign} | ${adgroup}`), '', titleize(`${campaign} | ${adgroup}`), headline2, description2, finalURL])

      matchKeywords(campaign, adgroup)
    })
  })
  return new Promise((resolve) => {
    resolve(results)
  })
}

function matchKeywords (campaign, adgroup, place = false) {
  let title
  let removeWords = []

  // Loop through each word
  generatedWords.forEach((phrase) => {
    // If it is a generics campaign make sure the phrase doesn't include any other campaign
    // if it contains the campaign and adgroup then add it
    if (phrase.match('commercial') && phrase.match(campaign) && phrase.match(adgroup)) {
      title = titleize(`${campaign} | ${adgroup} | Commercial`)
      results.push([titleize(campaign), title, phrase])
      removeWords.push(phrase)
    } else if (campaign === 'generics' && phrase.match(place) && phrase.match(adgroup)) {
      title = titleize(`${campaign} | ${adgroup} | ${place}`)
      results.push([titleize(campaign), title, phrase])
      removeWords.push(phrase)
    } else if (phrase.match(place) && phrase.match(campaign) && phrase.match(adgroup)) {
      title = titleize(`${campaign} | ${adgroup} | ${place}`)
      results.push([titleize(campaign), title, phrase])
      removeWords.push(phrase)
    } else if (!place && phrase.match(campaign) && phrase.match(adgroup)) {
      title = titleize(`${campaign} | ${adgroup}`)
      results.push([titleize(campaign), title, phrase])
      removeWords.push(phrase)
    } else if (campaign === 'generics' && !place && phrase.match(adgroup)) {
      title = titleize(`${campaign} | ${adgroup}`)
      results.push([titleize(campaign), title, phrase])
      removeWords.push(phrase)
    }
  })
  removeWords.forEach((word) => {
    removeWord(word)
  })
}

function writeCSV () {
  let headers = ['Campaign', 'Ad Group', 'Keyword', 'Headline 1', 'Headline 2', 
                 'Description', 'Final URL']

  const csvWriter = createCsvWriter({
    path: './file.csv',
    header: headers
  })

  csvWriter.writeRecords(results) // returns a promise 
  .then(() => {
    console.log('...Done')
  })
}

function removeWord (word) {
  let index = generatedWords.indexOf(word)
  generatedWords.splice(index, 1)
}

words().then(() => {
  campaign().then(() => {
    writeCSV()
  })
})
