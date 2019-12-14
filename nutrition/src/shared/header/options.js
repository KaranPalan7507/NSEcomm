import socialIcon1 from "./../../images/social_icon1.jpg";
import socialIcon2 from "./../../images/social_icon2.jpg";
import aminoAcidImg from "./../../images/amino_acids.jpg";
import accessoriesImg from "./../../images/accessories.jpg";
import barsImg from "./../../images/bars.jpg";
import drinkImg from "./../../images/drinks.jpg";
import fatBurnerImg from "./../../images/fat_burner.jpg";
import lCarnitineImg from "./../../images/l-carnitine.jpg";
import proteinImg from "./../../images/protein.jpg";
import vitaminImg from "./../../images/vitamins.jpg";

const menuOptions = [
  {
    name: "Store",
    mainOptions: [
      {
        path: "/",
        name: "Best Sellers"
      },
      {
        path: "/",
        name: "Promos"
      },
      {
        path: "/",
        name: "New"
      },
      {
        path: "/",
        name: "Discovery Boxes"
      }
    ],
    subOptions: [
      {
        title: "Protein",
        imgPath: proteinImg,
        options: [
          {
            path: "/",
            name: "Casein"
          },
          {
            path: "/",
            name: "Gainer"
          },
          {
            path: "/",
            name: "Isolate"
          },
          {
            path: "/",
            name: "Vegan"
          },
          {
            path: "/",
            name: "Whey"
          }
        ]
      },
      {
        title: "Drinks",
        imgPath: drinkImg,
        options: [
          {
            path: "/",
            name: "Energy"
          },
          {
            path: "/",
            name: "Protein"
          },
          {
            path: "/",
            name: "Amino Acids"
          },
          {
            path: "/",
            name: "L-Carnitine"
          }
        ]
      },
      {
        title: "Fat Burner",
        imgPath: fatBurnerImg,
        options: [
          {
            path: "/",
            name: "Capsules"
          },
          {
            path: "/",
            name: "Liquid"
          }
        ]
      },
      {
        title: "Bars",
        imgPath: barsImg,
        options: [
          {
            path: "/",
            name: "Energy"
          },
          {
            path: "/",
            name: "Protein"
          }
        ]
      },
      {
        title: "Vitamins",
        imgPath: vitaminImg,
        options: [
          {
            path: "/",
            name: "Capsules"
          },
          {
            path: "/",
            name: "Ready to drink"
          },
          {
            path: "/",
            name: "Shots  "
          }
        ]
      },
      {
        title: "Accessories",
        imgPath: accessoriesImg,
        options: [
          {
            path: "/",
            name: "Belts"
          },
          {
            path: "/",
            name: "Gloves"
          },
          {
            path: "/",
            name: "Others"
          },
          {
            path: "/",
            name: "Shakers"
          },
          {
            path: "/",
            name: "T-Shirts"
          }
        ]
      },
      {
        title: "Amino Acids",
        imgPath: aminoAcidImg,
        options: [
          {
            path: "/",
            name: "Liquid"
          },
          {
            path: "/",
            name: "Capsules"
          },
          {
            path: "/",
            name: "Powders"
          }
        ]
      },
      {
        title: "L-Carnitine",
        imgPath: lCarnitineImg,
        options: [
          {
            path: "/",
            name: "Ready to drink"
          },
          {
            path: "/",
            name: "Capsules"
          },
          {
            path: "/",
            name: "Shots"
          }
        ]
      }
    ]
  },
  {
    name: "Shop By Goal",
    goalOptions: [
      {
        path: "#",
        imgPath: "/images/goal1.png",
        name: "Endurance"
      },
      {
        path: "#",
        imgPath: "/images/goal2.png",
        name: "Energy"
      },
      {
        path: "#",
        imgPath: "/images/goal3.png",
        name: "Muscle"
      },
      {
        path: "#",
        imgPath: "/images/goal4.png",
        name: "Strength"
      },
      {
        path: "#",
        imgPath: "/images/goal6.png",
        name: "Weight Loss"
      },
      {
        path: "#",
        imgPath: "/images/goal7.png",
        name: "Wellness"
      }
    ]
  },
  {
    name: "Shop By Brand",
    brandOptions: [
      {
        path: "#",
        imgPath: "/images/shop-brand.png",
        name: "Brand 1"
      },
      {
        path: "#",
        imgPath: "/images/shop-brand.png",
        name: "Brand 2"
      },
      {
        path: "#",
        imgPath: "/images/shop-brand.png",
        name: "Brand 3"
      },
      {
        path: "#",
        imgPath: "/images/shop-brand.png",
        name: "Brand 4"
      },
      {
        path: "#",
        imgPath: "/images/shop-brand.png",
        name: "Brand 5"
      },
      {
        path: "#",
        imgPath: "/images/shop-brand.png",
        name: "Brand 6"
      }
    ]
  },
  {
    name: "Offer",
    offerOptions: [
      {
        path: "#",
        imgPath: "/images/flash_menu.svg",
        name: "Flash Sale"
      },
      {
        path: "#",
        imgPath: "/images/crazy_deals_menu.svg",
        name: "Crazy Deals"
      },
      {
        path: "#",
        imgPath: "/images/wipeout_menu.svg",
        name: "Wipe Out Sale"
      },
      {
        path: "#",
        imgPath: "/images/half_price_menu.svg",
        name: "Half Price Store"
      }
    ]
  },
  {
    name: "Why Us",
    path: "/"
  },
  {
    name: "Blog",
    path: "/blog"
  },
  {
    name: "Whatsapp",
    imgPath: socialIcon1,
    path: "/"
  },
  {
    name: "i-Nutrition",
    imgPath: socialIcon2,
    path: "/"
  }
];

export default menuOptions;
