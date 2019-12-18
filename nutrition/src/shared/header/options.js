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
        path: "/product",
        name: "Best Sellers"
      },
      {
        path: "/product",
        name: "Promos"
      },
      {
        path: "/product",
        name: "New"
      },
      {
        path: "/product",
        name: "Discovery Boxes"
      }
    ],
    subOptions: [
      {
        title: "Protein",
        imgPath: proteinImg,
        options: [
          {
            path: "/product",
            name: "Casein"
          },
          {
            path: "/product",
            name: "Gainer"
          },
          {
            path: "/product",
            name: "Isolate"
          },
          {
            path: "/product",
            name: "Vegan"
          },
          {
            path: "/product",
            name: "Whey"
          }
        ]
      },
      {
        title: "Drinks",
        imgPath: drinkImg,
        options: [
          {
            path: "/product",
            name: "Energy"
          },
          {
            path: "/product",
            name: "Protein"
          },
          {
            path: "/product",
            name: "Amino Acids"
          },
          {
            path: "/product",
            name: "L-Carnitine"
          }
        ]
      },
      {
        title: "Fat Burner",
        imgPath: fatBurnerImg,
        options: [
          {
            path: "/product",
            name: "Capsules"
          },
          {
            path: "/product",
            name: "Liquid"
          }
        ]
      },
      {
        title: "Bars",
        imgPath: barsImg,
        options: [
          {
            path: "/product",
            name: "Energy"
          },
          {
            path: "/product",
            name: "Protein"
          }
        ]
      },
      {
        title: "Vitamins",
        imgPath: vitaminImg,
        options: [
          {
            path: "/product",
            name: "Capsules"
          },
          {
            path: "/product",
            name: "Ready to drink"
          },
          {
            path: "/product",
            name: "Shots  "
          }
        ]
      },
      {
        title: "Accessories",
        imgPath: accessoriesImg,
        options: [
          {
            path: "/product",
            name: "Belts"
          },
          {
            path: "/product",
            name: "Gloves"
          },
          {
            path: "/product",
            name: "Others"
          },
          {
            path: "/product",
            name: "Shakers"
          },
          {
            path: "/product",
            name: "T-Shirts"
          }
        ]
      },
      {
        title: "Amino Acids",
        imgPath: aminoAcidImg,
        options: [
          {
            path: "/product",
            name: "Liquid"
          },
          {
            path: "/product",
            name: "Capsules"
          },
          {
            path: "/product",
            name: "Powders"
          }
        ]
      },
      {
        title: "L-Carnitine",
        imgPath: lCarnitineImg,
        options: [
          {
            path: "/product",
            name: "Ready to drink"
          },
          {
            path: "/product",
            name: "Capsules"
          },
          {
            path: "/product",
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
        imgPath: "/images/goal1.png",
        name: "Endurance"
      },
      {
        path: "/product",
        imgPath: "/images/goal2.png",
        name: "Energy"
      },
      {
        path: "/product",
        imgPath: "/images/goal3.png",
        name: "Muscle"
      },
      {
        path: "/product",
        imgPath: "/images/goal4.png",
        name: "Strength"
      },
      {
        path: "/product",
        imgPath: "/images/goal6.png",
        name: "Weight Loss"
      },
      {
        path: "/product",
        imgPath: "/images/goal7.png",
        name: "Wellness"
      }
    ]
  },
  {
    name: "Shop By Brand",
    brandOptions: [
      {
        path: "/product",
        imgPath: "/images/shop-brand.png",
        name: "Brand 1"
      },
      {
        path: "/product",
        imgPath: "/images/shop-brand.png",
        name: "Brand 2"
      },
      {
        path: "/product",
        imgPath: "/images/shop-brand.png",
        name: "Brand 3"
      },
      {
        path: "/product",
        imgPath: "/images/shop-brand.png",
        name: "Brand 4"
      },
      {
        path: "/product",
        imgPath: "/images/shop-brand.png",
        name: "Brand 5"
      },
      {
        path: "/product",
        imgPath: "/images/shop-brand.png",
        name: "Brand 6"
      }
    ]
  },
  {
    name: "Offer",
    offerOptions: [
      {
        path: "/product?offer=flash-sale",
        imgPath: "/images/lightning.svg",
        name: "Flash Sale"
      },
      {
        path: "/product?offer=crazy-deals",
        imgPath: "/images/banking.svg",
        name: "Crazy Deals"
      },
      {
        path: "/product?offer=wipe-out-sale",
        imgPath: "/images/shopping-bag.svg",
        name: "Wipe Out Sale"
      },
      {
        path: "/product?half-price-store",
        imgPath: "/images/percent.svg",
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
