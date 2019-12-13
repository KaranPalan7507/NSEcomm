import socialIcon1 from "./../images/social_icon1.jpg";
import socialIcon2 from "./../images/social_icon2.jpg";
import aminoAcidImg from "./../images/amino_acids.jpg";
import accessoriesImg from "./../images/accessories.jpg";
import barsImg from "./../images/bars.jpg";
import drinkImg from "./../images/drinks.jpg";
import fatBurnerImg from "./../images/fat_burner.jpg";
import lCarnitineImg from "./../images/l-carnitine.jpg";
import proteinImg from "./../images/protein.jpg";
import vitaminImg from "./../images/vitamins.jpg";
import brand1 from "./../images/brand_1.jpg";
import offer1 from "./../images/offer_1.jpg";
import offer2 from "./../images/offer_2.jpg";
import offer3 from "./../images/offer_3.jpg";
import offer4 from "./../images/offer_4.jpg";

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
        path: "/product",
        imgPath: "images/goal1.png",
        name: "Endurance"
      },
      {
        path: "/product",
        imgPath: "images/goal2.png",
        name: "Energy"
      },
      {
        path: "/product",
        imgPath: "images/goal3.png",
        name: "Muscle"
      },
      {
        path: "/product",
        imgPath: "images/goal4.png",
        name: "Strength"
      },
      {
        path: "/product",
        imgPath: "images/goal6.png",
        name: "Weight Loss"
      },
      {
        path: "/product",
        imgPath: "images/goal7.png",
        name: "Wellness"
      }
    ]
  },
  {
    name: "Shop By Brand",
    brandOptions: [
      {
        path: "/",
        imgPath: brand1,
        name: "Brand 1"
      },
      {
        path: "/",
        imgPath: brand1,
        name: "Brand 2"
      },
      {
        path: "/",
        imgPath: brand1,
        name: "Brand 3"
      },
      {
        path: "/",
        imgPath: brand1,
        name: "Brand 4"
      },
      {
        path: "/",
        imgPath: brand1,
        name: "Brand 5"
      },
      {
        path: "/",
        imgPath: brand1,
        name: "Brand 6"
      }
    ]
  },
  {
    name: "Offer",
    offerOptions: [
      {
        path: "/product",
        imgPath: offer1,
        name: "Flash Sale"
      },
      {
        path: "/product",
        imgPath: offer2,
        name: "Crazy Deals"
      },
      {
        path: "/product",
        imgPath: offer3,
        name: "Wipe Out Sale"
      },
      {
        path: "/product",
        imgPath: offer4,
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
