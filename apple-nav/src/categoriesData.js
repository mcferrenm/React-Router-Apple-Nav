const categoriesData = [
  {
    title: null,
    img: "./img/apple1.png",
    subCategories: []
  },
  {
    title: "Mac",
    img: "",
    subCategories: [
      {
        title: "MacBook",
        img: "",
        icon:
          "https://www.apple.com/v/mac/home/ae/images/familybrowser/macbook__fjd32xo0xwmm_large.svg"
      },
      {
        title: "MacBookAir",
        img: "",
        icon:
          "https://www.apple.com/v/mac/home/ae/images/familybrowser/macbookair__by1vem70tkc2_large.svg"
      },
      {
        title: "MacBook Pro",
        img: "",
        icon:
          "https://www.apple.com/v/mac/home/ae/images/familybrowser/macbookpro__e0wcugzmt26a_large.svg"
      },
      {
        title: "iMac",
        img: "",
        icon:
          "https://www.apple.com/v/mac/home/ae/images/familybrowser/imac__dlz2ciyr6hm6_large.svg"
      },
      {
        title: "iMac Pro",
        img: "",
        icon:
          "https://www.apple.com/v/mac/home/ae/images/familybrowser/imac_pro__el8kcar06qky_large.svg"
      },
      {
        title: "Mac Pro",
        img: "",
        icon:
          "https://www.apple.com/v/mac/home/ae/images/familybrowser/macpro__dt69qr0ywncm_large.svg"
      },
      {
        title: "Mac mini",
        img: "",
        icon:
          "https://www.apple.com/v/mac/home/ae/images/familybrowser/macmini__rzlk7b0xsmqq_large.svg"
      },
      {
        title: "Accessories",
        img: "",
        icon:
          "https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_acc__fia3ihqup4ae_large.svg"
      },
      {
        title: "Mojave",
        img: "",
        icon:
          "https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_osx__dq0x03ehapyu_large.svg"
      },
      {
        title: "Compare",
        img: "",
        icon:
          "https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_comp__by57zw2zt32a_large.svg"
      }
    ]
  },
  {
    title: "iPad",
    img: "",
    subCategories: [
      {
        title: "iPad Pro",
        img: "",
        isNew: true,
        icon:
          "https://www.apple.com/v/ipad/home/am/images/chapternav/ipadpro_light__fic9xqb4rq62_large.svg"
      },
      {
        title: "iPad Pro",
        img: "",
        isNew: false,
        size: '10.5"',
        icon:
          "https://www.apple.com/v/ipad/home/am/images/chapternav/ipadpro_10_5_light__cdnzsjo3mhsi_large.svg"
      },
      {
        title: "iPad",
        img: "",
        isNew: false,
        size: '9.7"',
        icon:
          "https://www.apple.com/v/ipad/home/am/images/chapternav/ipad_light__fxafu0jcd16q_large.svg"
      },
      {
        title: "iPad mini 4",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/ipad/home/am/images/chapternav/ipadmini_light__br4a8cvnupki_large.svg"
      },
      {
        title: "iOS 12",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/ipad/home/am/images/chapternav/ios_light__gnmyez8xx0a6_large.svg"
      },
      {
        title: "Apple Pencil",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/ipad/home/am/images/chapternav/apple_pencil_light__bz8n8cqdvcia_large.svg"
      },
      {
        title: "Smart Keyboard",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/ipad/home/am/images/chapternav/keyboard_light__f6gmbmwm4i6a_large.svg"
      },
      {
        title: "Accessories",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/ipad/home/am/images/chapternav/ipad_acc_light__f7t99j4r9qem_large.svg"
      },
      {
        title: "Compare",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/ipad/home/am/images/chapternav/ipad_comp_light__btey5qm4uaoi_large.svg"
      }
    ]
  },
  {
    title: "iPhone",
    background: "dark",
    img: "",
    subCategories: [
      {
        title: "iPhone Xs",
        img: "",
        isNew: true,
        size: "",
        icon:
          "https://www.apple.com/v/iphone/home/y/images/chapternav/iphonexs_dark_large.svg"
      },
      {
        title: "iPhone Xr",
        img: "",
        isNew: true,
        size: "",
        icon:
          "https://www.apple.com/v/iphone/home/y/images/chapternav/iphonexr_dark_large.svg"
      },
      {
        title: "iPhone 8",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/iphone/home/y/images/chapternav/iphone8_dark_large.svg"
      },
      {
        title: "iPhone 7",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/iphone/home/y/images/chapternav/iphone7_dark_large.svg"
      },
      {
        title: "iOS 12",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/iphone/home/y/images/chapternav/ios_dark_large.svg"
      },
      {
        title: "AirPods",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/iphone/home/y/images/chapternav/airpods_dark_large.svg"
      },
      {
        title: "Accessories",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/iphone/home/y/images/chapternav/accessories_dark_large.svg"
      },
      {
        title: "Compare",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/iphone/home/y/images/chapternav/compare_dark_large.svg"
      }
    ]
  },
  {
    title: "Watch",
    img: "",
    subCategories: [
      {
        title: "Apple Watch Series 4",
        img: "",
        isNew: true,
        size: "",
        icon:
          "https://www.apple.com/v/watch/home/l/images/watch_nav_series_2_large.svg"
      },
      {
        title: "Apple Watch Nike 4+",
        img: "",
        isNew: true,
        size: "",
        icon:
          "https://www.apple.com/v/watch/home/l/images/watch_nav_nike_large.svg"
      },
      {
        title: "Apple Watch Hernès",
        img: "",
        isNew: TextTrackCueList,
        size: "",
        icon:
          "https://www.apple.com/v/watch/home/l/images/watch_nav_hermes_large.svg"
      },
      {
        title: "Apple Watch Series 3",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/watch/home/l/images/watch_nav_edition_large.svg"
      },
      {
        title: "watchOS",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/watch/home/l/images/watch_nav_watch_os_large.svg"
      },
      {
        title: "Bands",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/watch/home/l/images/watch_nav_bands_large.svg"
      },
      {
        title: "Accessories",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/watch/home/l/images/watch_nav_accessories_large.svg"
      },
      {
        title: "Compare",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/watch/home/l/images/watch_nav_compare_large.svg"
      }
    ]
  },
  {
    title: "TV",
    background: "dark",
    img: "",
    subCategories: [
      {
        title: "Apple TV 4k",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/tv/home/f/images/home/apple_tv_dark_large.svg"
      },
      {
        title: "Apple TV",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/tv/home/f/images/home/apple_tv_dark_large.svg"
      },
      {
        title: "TV App",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/tv/home/f/images/home/tvapp_dark_large.svg"
      },
      {
        title: "Accessories",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/tv/home/f/images/home/accessories_dark_large.svg"
      },
      {
        title: "Compare",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/tv/home/f/images/home/compare_dark_large.svg"
      }
    ]
  },
  {
    title: "Music",
    img: "",
    subCategories: [
      {
        title: "Apple Music",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/music/h/images/overview/icons/apple_music_large.svg"
      },
      {
        title: "iTunes",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/music/h/images/overview/icons/itunes_large.svg"
      },
      {
        title: "HomePod",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/music/h/images/overview/icons/homepod_icon_large.svg"
      },
      {
        title: "AirPods",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/music/h/images/overview/icons/airpods_icon_large.svg"
      },
      {
        title: "iPodTouch",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/music/h/images/overview/icons/ipod_touch_light_large.svg"
      },
      {
        title: "Music Accessories",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/music/h/images/overview/icons/accessories_large.svg"
      },
      {
        title: "Gift Cards",
        img: "",
        isNew: false,
        size: "",
        icon:
          "https://www.apple.com/v/music/h/images/overview/icons/gift_cards_large.svg"
      }
    ]
  },
  {
    title: "Support",
    img: "",
    subCategories: []
  },
  {
    title: null,
    img: "",
    subCategories: []
  },
  {
    title: null,
    img: "",
    subCategories: []
  }
];

export default categoriesData;
