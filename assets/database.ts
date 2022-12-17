import {Movie} from "../pages/types";
import {purple_hearts, gray_man, top_gun, rings, punisher, bourne, mission_impossible, godfather_two, godzilla_two,
    fast_furious, gladiator, sonic, jurassic_world, bronx, casino, minions, goodfellas, bad_boys, sixty_seconds,
    godfather, terminator, shawshank, equalizer, wakanda, home_alone, water_boy, blonde, training_day, flash,
    avatar, inception, forrest_gump, spider_man, batman, thor, bullet_train, black_adam, godzilla, godzilla_kong}
    from "../public";

export const json : { movies: Movie[] , listOfOptions: string[]} = {

    movies:[

        {
        imageUrl:gray_man,
        title:"The Gray Man",
        id:1,
        imdb:"https://www.imdb.com/title/tt1649418/?ref_=nv_sr_srsg_0",
        children: [
            {
                imageUrl:top_gun,
                title:"Top Gun",
                id:4,
                imdb:"https://www.imdb.com/title/tt1745960/?ref_=nv_sr_srsg_1",
                children:[
                    {
                        imageUrl:avatar,
                        title:"Avatar",
                        id:13,
                        imdb:"https://www.imdb.com/title/tt1630029/?ref_=nv_sr_srsg_0",
                        children:[
                            {
                                imageUrl:black_adam,
                                title:"Black Adam",
                                id:16,
                                imdb:"https://www.imdb.com/title/tt6443346/",
                                children:[]
                            },
                            {
                                imageUrl:godzilla,
                                title:"Godzilla",
                                id:17,
                                imdb:"https://www.imdb.com/title/tt0831387/",
                                children:[]
                            },
                            {
                                imageUrl:godzilla_kong,
                                title:"Kong",
                                id:18,
                                imdb:"https://www.imdb.com/title/tt5034838/",
                                children:[]
                            }
                        ]
                    },
                    {
                        imageUrl:inception,
                        title:"Inception",
                        id:14,
                        imdb:"https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0",
                        children:[]
                    },
                    {
                        imageUrl:forrest_gump,
                        title:"Forrest Gump",
                        id:15,
                        imdb:"https://www.imdb.com/title/tt0109830/?ref_=nv_sr_srsg_0",
                        children:[]
                    }
                ]
            },
            {
                imageUrl:bullet_train,
                title:"Bullet Train",
                id:5,
                imdb:"https://www.imdb.com/title/tt12593682/?ref_=nv_sr_srsg_0",
                children:[
                    {
                        imageUrl:black_adam,
                        title:"Black Adam",
                        id:16,
                        imdb:"https://www.imdb.com/title/tt6443346/",
                        children:[]
                    },
                    {
                        imageUrl:godzilla,
                        title:"Godzilla",
                        id:17,
                        imdb:"https://www.imdb.com/title/tt0831387/",
                        children:[]
                    },
                    {
                        imageUrl:godzilla_kong,
                        title:"Kong",
                        id:18,
                        imdb:"https://www.imdb.com/title/tt5034838/",
                        children:[]
                    }
                ]
            },
            {
                imageUrl:thor,
                title:"Thor",
                id:6,
                imdb:"https://www.imdb.com/title/tt10648342/?ref_=nv_sr_srsg_0",
                children:[
                    {
                        imageUrl:batman,
                        title:"Batman",
                        id:19,
                        imdb:"https://www.imdb.com/title/tt1877830/",
                        children: []
                    },
                    {
                        imageUrl:spider_man,
                        title:"Spider Man",
                        id:20,
                        imdb:"https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_3",
                        children:[]
                    },
                    {
                        imageUrl:flash,
                        title:"Flash",
                        id:21,
                        imdb:"https://www.imdb.com/title/tt3107288/?ref_=nv_sr_srsg_0",
                        children:[]
                    }
                ]
            }
        ]
    },

    {
        imageUrl:blonde,
        title:"Blonde",
        id:2,
        imdb:"https://www.imdb.com/title/tt1655389/?ref_=nv_sr_srsg_0",
        children:[
            {
                imageUrl:purple_hearts,
                title:"Purple Hearts",
                id:7,
                imdb:"https://www.imdb.com/title/tt4614584/?ref_=nv_sr_srsg_0",
                children:[
                    {
                        imageUrl:training_day,
                        title:"Training Day",
                        id:22,
                        imdb:"https://www.imdb.com/title/tt0139654/?ref_=nv_sr_srsg_0",
                        children:[]
                    },
                    {
                        imageUrl:water_boy,
                        title:"WaterBoy",
                        id:23,
                        imdb:"https://www.imdb.com/title/tt0120484/?ref_=fn_al_tt_10",
                        children:[]
                    },
                    {
                        imageUrl:home_alone,
                        title:"Home Alone",
                        id:24,
                        imdb:"https://www.imdb.com/title/tt0099785/?ref_=nv_sr_srsg_0",
                        children:[]
                    }
                ]
            },
            {
                imageUrl:wakanda,
                title:"Wakanda Forever",
                id:8,
                imdb:"https://www.imdb.com/title/tt9114286/?ref_=nv_sr_srsg_0",
                children:[
                    {
                        imageUrl:equalizer,
                        title:"Equalizer",
                        id:25,
                        imdb:"https://www.imdb.com/title/tt0455944/?ref_=fn_al_tt_2",
                        children:[]
                    },
                    {
                        imageUrl:terminator,
                        title:"Terminator 2",
                        id:26,
                        imdb:"https://www.imdb.com/title/tt0103064/?ref_=fn_al_tt_4",
                        children:[]
                    },
                    {
                        imageUrl:shawshank,
                        title:"Shawshank Redemption",
                        id:27,
                        imdb:"https://www.imdb.com/title/tt0111161/?ref_=nv_sr_srsg_0",
                        children:[]
                    }
                ]
            },
            {
                imageUrl:godfather,
                title:"The Godfather",
                id:9,
                imdb:"https://www.imdb.com/title/tt0068646/?ref_=nv_sr_srsg_0",
                children: [
                    {
                        imageUrl:sixty_seconds,
                        title:"60 Seconds",
                        id:28,
                        imdb:"https://www.imdb.com/title/tt0187078/?ref_=nv_sr_srsg_1",
                        children:[]
                    },
                    {
                        imageUrl:bad_boys,
                        title:"Bad Boys 3",
                        id:29,
                        imdb:"https://www.imdb.com/title/tt1502397/?ref_=nv_sr_srsg_0",
                        children:[]
                    },
                    {
                        imageUrl:goodfellas,
                        title:"Goodfellas",
                        id:30,
                        imdb:"https://www.imdb.com/title/tt0099685/?ref_=fn_al_tt_1",
                        children:[]
                    }
                ]
            }
        ]
    },

    {
        imageUrl:minions,
        title:"Minions",
        id:3,
        imdb:"https://www.imdb.com/title/tt5113044/?ref_=nv_sr_srsg_3",
        children:[
            {
                imageUrl:casino,
                title:"Casino",
                id:10,
                imdb:"https://www.imdb.com/title/tt0112641/?ref_=nv_sr_srsg_0",
                children:[
                    {
                        imageUrl:bronx,
                        title:"A Bronx Tale",
                        id:31,
                        imdb:"https://www.imdb.com/title/tt0106489/?ref_=nv_sr_srsg_0",
                        children:[]
                    },
                    {
                        imageUrl:jurassic_world,
                        title:"Jurassic World",
                        id:32,
                        imdb:"https://www.imdb.com/title/tt0369610/?ref_=nv_sr_srsg_4",
                        children:[]
                    },
                    {
                        imageUrl:sonic,
                        title:"Sonic",
                        id:33,
                        imdb:"https://www.imdb.com/title/tt3794354/?ref_=fn_al_tt_2",
                        children:[]
                    }
                ]
            },
            {
                imageUrl:gladiator,
                title:"The Gladiator",
                id:11,
                imdb:"https://www.imdb.com/title/tt0172495/?ref_=nv_sr_srsg_0",
                children:[
                    {
                        imageUrl:fast_furious,
                        title:"Fast and Furious",
                        id:34,
                        imdb:"https://www.imdb.com/title/tt0232500/?ref_=fn_al_tt_3",
                        children:[]
                    },
                    {
                        imageUrl:godzilla_two,
                        title:"Godzilla II",
                        id:35,
                        imdb:"https://www.imdb.com/title/tt3741700/?ref_=nv_sr_srsg_8",
                        children:[]
                    },
                    {
                        imageUrl:godfather_two,
                        title:"Godfather II",
                        id:36,
                        imdb:"https://www.imdb.com/title/tt0071562/?ref_=fn_al_tt_1",
                        children:[]
                    }
                ]
            },
            {
                imageUrl:rings,
                title:"Lord of the Rings",
                id:12,
                imdb:"https://www.imdb.com/title/tt0167261/?ref_=nv_sr_srsg_8",
                children:[
                    {
                        imageUrl:punisher,
                        title:"The Punisher",
                        id:37,
                        imdb:"https://www.imdb.com/title/tt0330793/?ref_=fn_al_tt_2",
                        children:[]
                    },
                    {
                        imageUrl:bourne,
                        title:"The Bourne Identity",
                        id:38,
                        imdb:"https://www.imdb.com/title/tt0258463/?ref_=fn_al_tt_4",
                        children:[]
                    },
                    {
                        imageUrl:mission_impossible,
                        title:"Mission Impossible",
                        id:39,
                        imdb:"https://www.imdb.com/title/tt0117060/?ref_=fn_al_tt_2",
                        children:[]
                    }
                ]
            }
        ]
    }],

    listOfOptions: [
        "Choose one of the three movies",
        "Which one do you like the most?",
        "Which one do you want to watch now?"
    ],
};


