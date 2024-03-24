import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

  musicStyles = [
    { name: "Adventure",
      picture:"../../../assets/adventure.jpg",
      music: "../../../assets/music/schmonz_ep2_goldgraeber3_torben_jan_mueller_ueberarbeitet_n_cut.mp3",
      image: "https://pixabay.com/de/users/thommas68-2571842/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2202910",
      photographer: "Iván Tamás"
    },
    { name: "Animation",
      picture:"../../../assets/animation.jpg",
      music: "../../../assets/music/revolution_radio_torben_jan_mueller_16bit_48khz_final_m.mp3",
      image: "https://pixabay.com/de/users/perianjs-2866210/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1885016",
      photographer: "Janos Perian"
    },
    { name: "Action",
      picture:"../../../assets/action.jpg",
      music: "../../../assets/music/99firefilm2018_torben_jan_mueller_16bit_48khz_v3m_action.mp3",
      image: "https://pixabay.com/de/users/ThePixelman-406384/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=469503",
      photographer: "ThePixelman"
    },
    { name: "Doku",
      picture:"../../../assets/docu.jpg",
      music: "../../../assets/music/mein_ahnenland_peru_maintheme_titel_torben_jan_mueller.mp3",
      image: "https://pixabay.com/de/users/mailanmaik-4340251/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2774925",
      photographer: "mailanmaik"
    },
    { name: "Drama",
      picture:"../../../assets/drama.jpg",
      music: "../../../assets/music/mein_ahnenland_peru_umweltzerstoerung_torben_jan_mueller.mp3",
      image: "https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=513525",
      photographer: "Gerd Altmann"
    },
    { name: "Funk",
      picture:"../../../assets/erotic.jpg",
      music: "../../../assets/music/02- Carefree.mp3",
      image: "https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1137271",
      photographer: "Gerd Altmann"
    },
    { name: "Fantasy",
      picture:"../../../assets/fantasy.jpg",
      music: "../../../assets/music/logo_jugendfoerderung_torben_jan_mueller_16bit_48khz_v8_final_master.mp3",
      image: "https://pixabay.com/de/users/KELLEPICS-4893063/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3395135",
      photographer: "Stefan Keller"
    },
    { name: "Horror",
      picture:"../../../assets/horror.jpg",
      music: "../../../assets/music/13- Searching For Their Friends.mp3",
      image: "https://pixabay.com/de/users/KELLEPICS-4893063/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2847724",
      photographer: "Stefan Keller"
    },
    { name: "Comedy",
      picture:"../../../assets/comedy.jpg",
      music: "../../../assets/music/99firefilm2018_torben_jan_mueller_16bit_48khz_v3m.mp3",
      image: "https://pixabay.com/de/users/skeeze-272447/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=395764",
      photographer: "skeeze"
    },
    { name: "Crime",
      picture:"../../../assets/crime.jpg",
      music: "../../../assets/music/schmonz_ep3_tracys_theme_piano_torben_jan_mueller_16bit_48kHz.mp3",
      image: "https://pixabay.com/de/users/Republica-24347/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=820017",
      photographer: "Republica"
    },
    { name: "Love Movie",
      picture:"../../../assets/love.jpg",
      music: "../../../assets/music/mein_ahnenland_peru_wiedersehen2_torben_jan_mueller.mp3",
      image: "https://pixabay.com/de/users/Pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1853532",
      photographer: "Pexels"
    },
    { name: "Music",
      picture:"../../../assets/music.jpg",
      music: "../../../assets/music/daughterly_trailer_strings.mp3",
      image: "https://pixabay.com/de/users/Pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1838390",
      photographer: "Pexels"
    },
    { name: "Science-Fiction",
      picture:"../../../assets/science-fiction.jpg",
      music: "../../../assets/music/block701_crowdfunding_halfbeat_atmo_torben_jan_mueller_16bit_48khz_n.mp3",
      image: "https://pixabay.com/de/users/KELLEPICS-4893063/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2861815",
      photographer: "Stefan Keller"
    },
    { name: "Other",
      picture:"../../../assets/other.jpg",
      music: "../../../assets/music/wodka_gorbatschow_plakadiva_torben_jan_mueller_16bit_48khz_v2m.mp3",
      image: "https://pixabay.com/de/users/pasevichbogdan-5169192/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2250056",
      photographer: "Bogdan Pasevich"
    },
    { name: "Thriller",
      picture:"../../../assets/thriller.jpg",
      music: "../../../assets/music/raising_death_buchtrailer-torben_jan_mueller_16bit_48khz_v2_master.mp3",
      image: "https://pixabay.com/de/users/SamWilliamsPhoto-10634669/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4142636",
      photographer: "SamWilliamsPhoto"
    },
    { name: "Western",
      picture:"../../../assets/western.jpg",
      music: "../../../assets/music/italowestern_suite_torben_jan_mueller_16bit_48khz_vintage1.mp3",
      image: "https://pixabay.com/de/users/TomaszProszek-613139/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=557261",
      photographer: "Tomasz Proszek"
    }
  ];

}
