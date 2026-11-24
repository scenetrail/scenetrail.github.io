/* 試作品の仮データ（場面の説明は記憶から書いた仮の文。予告編のどこに出るかは未確認）。場面と場所の対応・説明・出典は確認前のもの（実データは出典を1件ずつ確かめて作る） */
const PHOTOS = {
 "shinjuku_day": {
  "file": "img/shinjuku_day.jpg",
  "title": "Skyscrapers Nishi-Shinjuku - Shinjuku i-land",
  "creator": "",
  "license": "CC0 1.0",
  "source": "rawpixel",
  "page": "https://www.rawpixel.com/image/3338809/free-photo-image-aerial-view-apartment-building-architecture",
  "original": "https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L3drNjEzMTA3ODEtaW1hZ2Uta3A2ZGw0eXUuanBn.jpg"
 },
 "shinjuku_night": {
  "file": "img/shinjuku_night.jpg",
  "title": "Skyscrapers Nishi-Shinjuku night - Shinjuku",
  "creator": "",
  "license": "CC0 1.0",
  "source": "rawpixel",
  "page": "https://www.rawpixel.com/image/3338806/free-photo-image-aerial-view-architecture-asphalt",
  "original": "https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L3drNjEzMTA4NDYtaW1hZ2Uta3A2ZGxocDQuanBn.jpg"
 },
 "shinjuku_skyline": {
  "file": "img/shinjuku_skyline.jpg",
  "title": "Shinjuku",
  "creator": "Vitor Nisida",
  "license": "PDM 1.0",
  "source": "flickr",
  "page": "https://www.flickr.com/photos/24061144@N06/52740251941",
  "original": "https://live.staticflickr.com/65535/52740251941_07a956a45e_b.jpg"
 },
 "nact": {
  "file": "img/nact.jpg",
  "title": "Interior National Art Center, Tokyo",
  "creator": "",
  "license": "CC0 1.0",
  "source": "rawpixel",
  "page": "https://www.rawpixel.com/image/8717901/photo-image-public-domain-interior-glass",
  "original": "https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2xyL3drMzg1MTgyNTYtaW1hZ2UuanBn.jpg"
 }
};
const HERO_PHOTO = "shinjuku_skyline";
const CHAPTERS = [
 {
  "id": "tokyo",
  "ja": "東京の日々",
  "en": "Days in Tokyo",
  "desc": {
   "ja": "入れ替わった二人が過ごす東京",
   "en": "Tokyo through two swapped lives"
  }
 },
 {
  "id": "search",
  "ja": "糸守を探して",
  "en": "Searching for Itomori",
  "desc": {
   "ja": "瀧が飛騨へ向かう旅",
   "en": "Taki's journey to Hida"
  }
 },
 {
  "id": "reunion",
  "ja": "そして、再会",
  "en": "And then, we meet",
  "desc": {
   "ja": "時を越えて",
   "en": "Across time"
  }
 }
];
const PLACES = [
 {
  "id": "nishishinjuku",
  "name": {
   "ja": "西新宿の高層ビル街",
   "en": "Nishi-Shinjuku skyscrapers"
  },
  "area": {
   "ja": "東京",
   "en": "Tokyo"
  },
  "address": {
   "ja": "東京都新宿区西新宿",
   "en": "Nishi-Shinjuku, Shinjuku, Tokyo"
  },
  "stand": {
   "ja": "都庁前の歩道（仮）",
   "en": "Sidewalk near the Metropolitan Government Building (sample)"
  },
  "lat": 35.6896,
  "lng": 139.6917,
  "cert": "press",
  "cautions": {
   "ja": [
    "歩道で立ち止まって通行をふさがないでください"
   ],
   "en": [
    "Do not stop and block the sidewalk"
   ]
  },
  "sources": [
   {
    "ja": "（仮）新聞記事",
    "en": "(sample) 新聞記事"
   },
   {
    "ja": "（仮）旅行雑誌の特集",
    "en": "(sample) 旅行雑誌の特集"
   }
  ]
 },
 {
  "id": "nact",
  "name": {
   "ja": "国立新美術館",
   "en": "The National Art Center, Tokyo"
  },
  "area": {
   "ja": "東京",
   "en": "Tokyo"
  },
  "address": {
   "ja": "東京都港区六本木",
   "en": "Roppongi, Minato, Tokyo"
  },
  "stand": {
   "ja": "館内の吹き抜け（仮）",
   "en": "Atrium inside the building (sample)"
  },
  "lat": 35.6653,
  "lng": 139.7263,
  "cert": "press",
  "cautions": {
   "ja": [
    "館内の決まりに従ってください。カフェでは他の客を撮らないでください"
   ],
   "en": [
    "Follow the museum's rules. Do not photograph other guests in the cafe"
   ]
  },
  "sources": [
   {
    "ja": "（仮）新聞記事",
    "en": "(sample) 新聞記事"
   }
  ]
 },
 {
  "id": "shinanomachi",
  "name": {
   "ja": "信濃町駅前の歩道橋",
   "en": "Footbridge at Shinanomachi Station"
  },
  "area": {
   "ja": "東京",
   "en": "Tokyo"
  },
  "address": {
   "ja": "東京都新宿区信濃町",
   "en": "Shinanomachi, Shinjuku, Tokyo"
  },
  "stand": {
   "ja": "歩道橋の上（仮）",
   "en": "On the footbridge (sample)"
  },
  "lat": 35.6801,
  "lng": 139.7203,
  "cert": "fan",
  "cautions": {
   "ja": [
    "駅の利用者の通行をふさがないでください",
    "線路や車道に出て撮らないでください"
   ],
   "en": [
    "Do not block other passengers",
    "Never step onto tracks or into traffic for a photo"
   ]
  },
  "sources": [
   {
    "ja": "（仮）ファンのブログA",
    "en": "(sample) ファンのブログA"
   },
   {
    "ja": "（仮）ファンのブログB",
    "en": "(sample) ファンのブログB"
   }
  ]
 },
 {
  "id": "suga",
  "name": {
   "ja": "須賀神社の階段（男坂）",
   "en": "Suga Shrine stairs (Otokozaka)"
  },
  "area": {
   "ja": "東京",
   "en": "Tokyo"
  },
  "address": {
   "ja": "東京都新宿区須賀町",
   "en": "Sugacho, Shinjuku, Tokyo"
  },
  "stand": {
   "ja": "階段の下から見上げる位置（仮）",
   "en": "At the bottom of the stairs, looking up (sample)"
  },
  "lat": 35.6863,
  "lng": 139.7221,
  "cert": "press",
  "cautions": {
   "ja": [
    "住宅地の中です。階段や道をふさいで撮らないでください",
    "早朝・夜は静かに。住民を撮らないでください",
    "神社の境内では神社の撮影の決まりに従ってください"
   ],
   "en": [
    "This is a residential area. Do not block the stairs or road while taking photos",
    "Keep quiet early in the morning and at night. Do not photograph residents",
    "Follow the shrine's rules on photography"
   ]
  },
  "sources": [
   {
    "ja": "（仮）新聞記事",
    "en": "(sample) 新聞記事"
   },
   {
    "ja": "（仮）区の観光ページ",
    "en": "(sample) 区の観光ページ"
   }
  ]
 },
 {
  "id": "hidafurukawa",
  "name": {
   "ja": "飛騨古川駅",
   "en": "Hida-Furukawa Station"
  },
  "area": {
   "ja": "飛騨",
   "en": "Hida"
  },
  "address": {
   "ja": "岐阜県飛騨市古川町",
   "en": "Furukawa, Hida, Gifu"
  },
  "stand": {
   "ja": "駅の北の跨線橋（仮）",
   "en": "Footbridge north of the station (sample)"
  },
  "lat": 36.238,
  "lng": 137.1867,
  "cert": "official",
  "cautions": {
   "ja": [
    "駅の利用者の通行をふさがないでください",
    "線路や車道に出て撮らないでください"
   ],
   "en": [
    "Do not block other passengers",
    "Never step onto tracks or into traffic for a photo"
   ]
  },
  "sources": [
   {
    "ja": "（仮）飛騨市の観光ページ",
    "en": "(sample) 飛騨市の観光ページ"
   }
  ]
 },
 {
  "id": "hidalib",
  "name": {
   "ja": "飛騨市図書館",
   "en": "Hida City Library"
  },
  "area": {
   "ja": "飛騨",
   "en": "Hida"
  },
  "address": {
   "ja": "岐阜県飛騨市古川町",
   "en": "Furukawa, Hida, Gifu"
  },
  "stand": {
   "ja": "館内（撮影は申し出が必要・仮）",
   "en": "Inside (ask before photographing, sample)"
  },
  "lat": 36.2366,
  "lng": 137.1889,
  "cert": "official",
  "cautions": {
   "ja": [
    "館内の撮影は受付で申し出てください（仮）",
    "利用者を撮らないでください"
   ],
   "en": [
    "Ask at the counter before taking photos inside (sample)",
    "Do not photograph other visitors"
   ]
  },
  "sources": [
   {
    "ja": "（仮）飛騨市の観光ページ",
    "en": "(sample) 飛騨市の観光ページ"
   }
  ]
 },
 {
  "id": "kehi",
  "name": {
   "ja": "気多若宮神社",
   "en": "Kehi Wakamiya Shrine"
  },
  "area": {
   "ja": "飛騨",
   "en": "Hida"
  },
  "address": {
   "ja": "岐阜県飛騨市古川町",
   "en": "Furukawa, Hida, Gifu"
  },
  "stand": {
   "ja": "参道の石段の下（仮）",
   "en": "Bottom of the stone steps (sample)"
  },
  "lat": 36.2412,
  "lng": 137.1793,
  "cert": "fan",
  "cautions": {
   "ja": [
    "神社の境内では神社の撮影の決まりに従ってください",
    "参拝の人を優先してください"
   ],
   "en": [
    "Follow the shrine's rules on photography",
    "Give way to worshippers"
   ]
  },
  "sources": [
   {
    "ja": "（仮）ファンのブログA",
    "en": "(sample) ファンのブログA"
   },
   {
    "ja": "（仮）ファンのブログB",
    "en": "(sample) ファンのブログB"
   }
  ]
 },
 {
  "id": "suwa",
  "name": {
   "ja": "諏訪湖",
   "en": "Lake Suwa"
  },
  "area": {
   "ja": "長野",
   "en": "Nagano"
  },
  "address": {
   "ja": "長野県諏訪市",
   "en": "Suwa, Nagano"
  },
  "stand": {
   "ja": "湖を見下ろす展望地（仮）",
   "en": "A lookout above the lake (sample)"
  },
  "lat": 36.048,
  "lng": 138.085,
  "cert": "fan",
  "cautions": {
   "ja": [
    "湖畔の私有地に入らないでください"
   ],
   "en": [
    "Do not enter private land along the shore"
   ]
  },
  "sources": [
   {
    "ja": "（仮）ファンのブログA",
    "en": "(sample) ファンのブログA"
   },
   {
    "ja": "（仮）ファンのブログB",
    "en": "(sample) ファンのブログB"
   }
  ]
 }
];
const SCENES = [
 {
  "id": "s01",
  "no": 1,
  "chapter": "tokyo",
  "place": "nishishinjuku",
  "title": {
   "ja": "初めて見る、東京の朝",
   "en": "A first morning in Tokyo"
  },
  "photo": "shinjuku_day",
  "keywords": "ビル 朝 東京 新宿",
  "desc": {
   "ja": "入れ替わった三葉が、瀧の部屋の窓から初めて東京の街を見下ろす朝。高層ビルが朝日を受けて並ぶ景色に、山あいの町で育った三葉は思わず息をのみます。",
   "en": "Mitsuha, now in Taki's body, looks out over Tokyo for the first time. The towers in the morning light leave the girl from a mountain town speechless."
  },
  "video": {
   "id": "k4xGqY5IDBE",
   "start": null,
   "channel": {
    "ja": "東宝MOVIEチャンネル",
    "en": "Toho Movie Channel"
   }
  }
 },
 {
  "id": "s02",
  "no": 2,
  "chapter": "tokyo",
  "place": "nact",
  "title": {
   "ja": "先輩とのデートのカフェ",
   "en": "The café on the date"
  },
  "photo": "nact",
  "keywords": "カフェ 美術館 デート 六本木",
  "desc": {
   "ja": "瀧が、バイト先の先輩・奥寺さんと出かけた日に立ち寄るカフェ。逆さの円すいのような形の上にある席で、二人はぎこちない時間を過ごします。",
   "en": "The café Taki visits on his day out with Okudera, his senior at work. They sit on top of a striking inverted cone, and the date does not go smoothly."
  },
  "video": {
   "id": "k4xGqY5IDBE",
   "start": null,
   "channel": {
    "ja": "東宝MOVIEチャンネル",
    "en": "Toho Movie Channel"
   }
  }
 },
 {
  "id": "s03",
  "no": 3,
  "chapter": "tokyo",
  "place": "nishishinjuku",
  "title": {
   "ja": "夜の新宿、ビルの灯り",
   "en": "Shinjuku lights at night"
  },
  "photo": "shinjuku_night",
  "keywords": "夜 ビル 新宿",
  "desc": {
   "ja": "夜の西新宿。ビルの窓の灯りが重なる中を、瀧が一人で歩いて帰る場面です。三葉とのつながりが切れたあとの、静かな東京が描かれます。",
   "en": "Taki walks home alone through Nishi-Shinjuku at night, the office windows still lit. A quiet Tokyo after his connection with Mitsuha is lost."
  },
  "video": {
   "id": "k4xGqY5IDBE",
   "start": null,
   "channel": {
    "ja": "東宝MOVIEチャンネル",
    "en": "Toho Movie Channel"
   }
  }
 },
 {
  "id": "s04",
  "no": 4,
  "chapter": "tokyo",
  "place": "shinanomachi",
  "title": {
   "ja": "歩道橋から見上げる空",
   "en": "The sky from the footbridge"
  },
  "photo": null,
  "keywords": "歩道橋 空 信濃町",
  "desc": {
   "ja": "信濃町駅前の歩道橋。瀧が空を見上げる場面で、背後にドコモタワーが見えます。何度も出てくる、物語の大事な目印の景色です。",
   "en": "The footbridge in front of Shinanomachi Station. Taki looks up at the sky with the Docomo Tower behind him, a view the film returns to again and again."
  },
  "video": {
   "id": "k4xGqY5IDBE",
   "start": null,
   "channel": {
    "ja": "東宝MOVIEチャンネル",
    "en": "Toho Movie Channel"
   }
  }
 },
 {
  "id": "s05",
  "no": 5,
  "chapter": "search",
  "place": "hidafurukawa",
  "title": {
   "ja": "飛騨の駅に降り立つ",
   "en": "Arriving at a station in Hida"
  },
  "photo": null,
  "keywords": "駅 飛騨 古川 電車",
  "desc": {
   "ja": "瀧が、記憶をたよりに描いた風景画を手に飛騨へ向かう場面。小さな駅に降り立ち、町の人に絵を見せて場所を尋ね歩きます。",
   "en": "Taki travels to Hida with landscape sketches drawn from memory. He gets off at a small station and shows the sketches to people, asking where it is."
  },
  "video": {
   "id": "k4xGqY5IDBE",
   "start": null,
   "channel": {
    "ja": "東宝MOVIEチャンネル",
    "en": "Toho Movie Channel"
   }
  }
 },
 {
  "id": "s06",
  "no": 6,
  "chapter": "search",
  "place": "hidalib",
  "title": {
   "ja": "図書館で、消えた町を調べる",
   "en": "Looking up the lost town in the library"
  },
  "photo": null,
  "keywords": "図書館 飛騨 調べる",
  "desc": {
   "ja": "たどり着いた図書館で、瀧は糸守町の記録を調べ、町に何が起きたかを知ります。物語が大きく動く場面です。",
   "en": "At the library, Taki searches the records of Itomori and learns what happened to the town. The story turns here."
  },
  "video": {
   "id": "k4xGqY5IDBE",
   "start": null,
   "channel": {
    "ja": "東宝MOVIEチャンネル",
    "en": "Toho Movie Channel"
   }
  }
 },
 {
  "id": "s07",
  "no": 7,
  "chapter": "search",
  "place": "kehi",
  "title": {
   "ja": "町はずれの神社へ",
   "en": "To the shrine on the edge of town"
  },
  "photo": null,
  "keywords": "神社 飛騨 石段",
  "desc": {
   "ja": "町はずれの神社を、三葉と家族が訪れる場面のもとになったと言われる場所です。",
   "en": "A shrine on the edge of town, said to be the model for the shrine Mitsuha and her family visit."
  },
  "video": {
   "id": "k4xGqY5IDBE",
   "start": null,
   "channel": {
    "ja": "東宝MOVIEチャンネル",
    "en": "Toho Movie Channel"
   }
  }
 },
 {
  "id": "s08",
  "no": 8,
  "chapter": "search",
  "place": "suwa",
  "title": {
   "ja": "糸守湖を思わせる湖",
   "en": "A lake that recalls Itomori"
  },
  "photo": null,
  "keywords": "湖 諏訪 糸守",
  "desc": {
   "ja": "山に囲まれた湖。糸守湖の景色の手がかりになったと言われています。",
   "en": "A lake ringed by mountains, said to have inspired the view of Lake Itomori."
  },
  "video": {
   "id": "k4xGqY5IDBE",
   "start": null,
   "channel": {
    "ja": "東宝MOVIEチャンネル",
    "en": "Toho Movie Channel"
   }
  }
 },
 {
  "id": "s09",
  "no": 9,
  "chapter": "reunion",
  "place": "suga",
  "title": {
   "ja": "階段で、すれ違う二人",
   "en": "Passing on the stairs"
  },
  "photo": null,
  "keywords": "階段 神社 ラスト 須賀 四谷",
  "desc": {
   "ja": "物語の最後、大人になった二人が階段ですれ違い、振り返る場面。赤い手すりのある神社の階段です。",
   "en": "Near the end, the two, now adults, pass each other on a flight of stairs and turn around. The shrine stairs with red railings."
  },
  "video": {
   "id": "k4xGqY5IDBE",
   "start": null,
   "channel": {
    "ja": "東宝MOVIEチャンネル",
    "en": "Toho Movie Channel"
   }
  }
 }
];
