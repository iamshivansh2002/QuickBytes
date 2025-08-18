
const restaurantList = [
  {
    id: '1001',
    name: 'Santosh Family Dhaba',
    receipe: 'Tomato Soup, Paneer Butter Masala, Butter Naan',
    rating: '4.0',
    price: '₹300 for two',
    deliveryTime: '22 MINS',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mkcibe6x1ychvzjkywxk',
    menu: [
      {
        id: '1',
        name: 'Tomato Soup',
        price: '₹80',
        image:
          'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/tomato-soup-recipe.jpg',
      },
      {
        id: '2',
        name: 'Paneer Butter Masala',
        price: '₹180',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOctT65OKXCTgKx04zwy7hTHwkxKJlJSx9ezkqnUx7zeTFdZ2guhTw4EtA3OjMtf98_Nc&usqp=CAU',
      },
      {
        id: '3',
        name: 'Butter Naan',
        price: '₹40',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStbM0bdCCADKB0ejQD70I7UKKbrzhERuVUG4zU0HRERgfs70MZXR3IGO6xCrYin0zF_W8&usqp=CAU',
      },
    ],
  },
  {
    id: '1002',
    name: 'Cafe Niloufer',
    receipe: 'Maska Bun, Irani Chai, Osmania Biscuits',
    rating: '4.5',
    price: '₹400 for two',
    deliveryTime: '32 MINS',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dc9t0kiq7lhsd3pndohf',
    menu: [
      {
        id: '1',
        name: 'Maska Bun',
        price: '₹50',
        image:
          'https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/3f/55/da/bun-maska.jpg',
      },
      {
        id: '2',
        name: 'Irani Chai',
        price: '₹30',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOfKc8hMrYBcuQ9iJO4RKKWWutZPtSt-2_g&s ',
      },
      {
        id: '3',
        name: 'Osmania Biscuits',
        price: '₹20',
        image:
          'https://cafeniloufer.com/cdn/shop/products/Osmania.jpg?v=1647518239',
      },
    ],
  },
  {
    id: '1003',
    name: 'Crispy Bytes',
    receipe: 'Crispy Corn, Veg Manchurian, Hakka Noodles',
    rating: '4.5',
    price: '₹560 for two',
    deliveryTime: '32 MINS',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dwqb8nhiop8fvqya0alq',
    menu: [
      {
        id: '1',
        name: 'Crispy Corn',
        price: '₹100',
        image:
          'https://rakskitchen.net/wp-content/uploads/2022/01/crisp-corn.jpg',
      },
      {
        id: '2',
        name: 'Veg Manchurian',
        price: '₹150',
        image:
          'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/veg-manchurian.jpg',
      },
      {
        id: '3',
        name: 'Hakka Noodles',
        price: '₹130',
        image:
          'https://purendesi.in/wp-content/uploads/2024/05/Hakka-Noodles-Recipe.jpg',
      },
    ],
  },
  {
    id: '1004',
    name: 'Grameen Kulfi',
    receipe: 'Sitaphal Stick Kulfi, Mango Kulfi, Malai Kulfi',
    rating: '4.6',
    price: '₹120 for two',
    deliveryTime: '18 MINS',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vu0thsifji9wgfuzfmic',
    menu: [
      {
        id: '1',
        name: 'Sitaphal Kulfi',
        price: '₹60',
        image:
          'https://images.squarespace-cdn.com/content/v1/5cef7b136434550001a53d10/1601006941874-BQU7HU5H7E2I8ZRRLYME/sitaphal+kulfi+new-6.jpeg',
      },
      {
        id: '2',
        name: 'Mango Kulfi',
        price: '₹70',
        image:
          'https://www.sharmispassions.com/wp-content/uploads/2014/05/mango-kulfi7.jpg',
      },
      {
        id: '3',
        name: 'Malai Kulfi',
        price: '₹50',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRvgaYWh992IBp345cIZPVSaowmhnfwVtsg&s',
      },
    ],
  },
  {
    id: '1005',
    name: 'Nrs Nandini',
    receipe: 'Special Idli, Spicy Vada,  VegUpma',
    rating: '4.4',
    price: '₹150 for two',
    deliveryTime: '21 MINS',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9fa5ca30c3db622c69cec0326ff63b41',
    menu: [
      {
        id: '1',
        name: 'Idli',
        price: '₹30',
        image:
          'https://www.ohmyveg.co.uk/wp-content/uploads/2023/07/Idli-1-scaled-e1722868852202-720x720.jpg',
      },
      {
        id: '2',
        name: 'Vada',
        price: '₹35',
        image:
          'https://media.istockphoto.com/id/1488738018/photo/medu-vada-or-medu-vada-with-sambhar-and-coconut-chutney-red-chutney-green-chutney-popular.jpg?s=612x612&w=0&k=20&c=dvWgKhQuw1lfOBxDpR6YFMLSZnWdyqYGV1pvcBt7mZw=',
      },
      {
        id: '3',
        name: 'Upma',
        price: '₹40',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9An3jEhdO77Wd7jrkfZg3SEGR_kR9Da46A&s',
      },
    ],
  },
  {
    id: '1006',
    name: 'Utsav Vegetarian',
    receipe: 'Kaju Paneer Biryani, Veg Pulao, Raita',
    rating: '4.1',
    price: '₹300 for two',
    deliveryTime: '32 MINS',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/y2lkcxxax3794vepe2se',
    menu: [
      {
        id: '1',
        name: 'Kaju Paneer Biryani',
        price: '₹180',
        image: 'https://iili.io/HSOzKxf.md.jpg',
      },
      {
        id: '2',
        name: 'Veg Pulao',
        price: '₹120',
        image:
          'https://www.indianveggiedelight.com/wp-content/uploads/2019/07/veg-pulao-featured.jpg',
      },
      {
        id: '3',
        name: 'Raita',
        price: '₹30',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMnvosxJDYzFaewmaCgOg0lDNSMJMK7CG2A&s',
      },
    ],
  },
  {
    id: '1007',
    name: 'Subbayya Gari Hotel',
    receipe: 'Butta Bojanam, Gongura Pachadi, Pappu',
    rating: '4.0',
    price: '₹300 for two',
    deliveryTime: '24 MINS',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9',
    menu: [
      {
        id: '1',
        name: 'Butta Bojanam',
        price: '₹250',
        image:
          'https://content.jdmagicbox.com/v2/comp/bangalore/w8/080pxx80.xx80.220124223052.j6w8/catalogue/andhra-butta-bhojanam-krishnarajapuram-bangalore-bhojanalya-1txyzlppry.jpg',
      },
      {
        id: '2',
        name: 'Gongura Pachadi',
        price: '₹80',
        image:
          'https://www.pavaniskitchen.com/wp-content/uploads/2021/09/gongura-pachadi.jpg',
      },
      {
        id: '3',
        name: 'Pappu',
        price: '₹60',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4Gmla31VyYmLlZnniAtcLiB97-_vb1i-YQ&s',
      },
    ],
  },
  {
    id: '1008',
    name: 'Paradise Biryani',
    receipe: 'Chicken Biryani, Mutton Biryani, Kachumber Salad',
    rating: '4.3',
    price: '₹500 for two',
    deliveryTime: '30 MINS',
    image:
      'https://media.istockphoto.com/id/1058029096/photo/chicken-biryani.jpg?s=612x612&w=0&k=20&c=yVV1RArkYz1fXf0Blpeuwxt0yTHHDnlOURVMJmYgAeI=',
    menu: [
      {
        id: '1',
        name: 'Hyderabadi Chicken Biryani',
        price: '₹250',
        image:
          'https://media.istockphoto.com/id/469866881/photo/mutton-gosht-biryani.jpg?s=612x612&w=0&k=20&c=FH6dExVNp_hb9JtJCyGrmKAhPJwQo3UdlMC6gHCbVLg=',
      },
      {
        id: '2',
        name: 'Mutton Biryani',
        price: '₹300',
        image:
          'https://t3.ftcdn.net/jpg/07/91/20/84/360_F_791208487_FvPUDOvneQYY13BMM4GfG1L55NkdoiQF.jpg',
      },
      {
        id: '3',
        name: 'Kachumber Salad',
        price: '₹50',
        image:
          'https://www.simplyrecipes.com/thmb/TCihoMgBAszaHRNdU9WX781I2Fg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Kachumber-Salad-LEAD-03-aa6e0ac0e5184139bcd20d7a1718f48d.jpg',
      },
    ],
  },
  {
    id: '1009',
    name: 'Burger King',
    receipe: 'Whopper, Chicken Fries, Soft Drink',
    rating: '4.2',
    price: '₹350 for two',
    deliveryTime: '25 MINS',
    image:
      'https://cdn.prod.website-files.com/631b4b4e277091ef01450237/6594636a8c4a03b42b54ef11_Bacon%20King.png',
    menu: [
      {
        id: '1',
        name: 'Whopper',
        price: '₹180',
        image:
          'https://thumbs.dreamstime.com/b/czerlejno-poland-october-burger-king-bacon-cheese-new-whopper-345759119.jpg',
      },
      {
        id: '2',
        name: 'Chicken Fries',
        price: '₹90',
        image:
          'https://thumbs.dreamstime.com/b/chicken-tenders-fries-fried-french-dipping-sauce-93035208.jpg',
      },
      {
        id: '3',
        name: 'Soft Drink',
        price: '₹40',
        image:
          'https://t4.ftcdn.net/jpg/03/49/80/15/360_F_349801592_MX0ZnIl6pXNQH4srBoJEhJCSxlhUTDpf.jpg',
      },
    ],
  },
  {
    id: '1010',
    name: 'Barbeque Nation',
    receipe: 'Paneer Tikka, Grilled Veg, Hara Bhara Kebab',
    rating: '4.4',
    price: '₹800 for two',
    deliveryTime: '40 MINS',
    image:
      'https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg',
    menu: [
      {
        id: '1',
        name: 'Paneer Tikka',
        price: '₹250',
        image:
          'https://t4.ftcdn.net/jpg/04/75/65/21/360_F_475652107_Sx73qgHWljGylX5KRyDFeE46ftX0A4EE.jpg',
      },
      {
        id: '2',
        name: 'Grilled Veg',
        price: '₹200',
        image:
          'https://media.istockphoto.com/id/538168264/photo/vegetable-and-meat-skewers-in-a-herb-marinade.jpg?s=612x612&w=0&k=20&c=qoHePaYTT5oz90YeZQ-6XBV_Ant1ePesFbc42zTuhPU=',
      },
      {
        id: '3',
        name: 'Hara Bhara Kebab',
        price: '₹150',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oxPr3hdHz9_5kv6jce-r3ovID2rad0Q4-Q&s',
      },
    ],
  },
  {
    id: '1011',
    name: 'Chutneys',
    receipe: 'Ghee Karam Dosa, Sambar, Coconut Chutney',
    rating: '4.5',
    price: '₹250 for two',
    deliveryTime: '20 MINS',
    image:
      'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg',
    menu: [
      {
        id: '1',
        name: 'Ghee Karam Dosa',
        price: '₹70',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABGoKEozlFdtd1s2913tD_VOyFtYQAPv86g&s',
      },
      {
        id: '2',
        name: 'Sambar',
        price: '₹30',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoA7g2iFh-fL2N2X9vjYEXfO1qEUcnh4nKhA&s',
      },
      {
        id: '3',
        name: 'Coconut Chutney',
        price: '₹20',
        image:
          'https://media.istockphoto.com/id/598165214/photo/coconut-chutney-indian-food.jpg?s=612x612&w=0&k=20&c=HlVj9eImt9IYR9hP3tS3wLagS4HPv0tkKJayGOcmLzQ=',
      },
    ],
  },
  {
    id: '1012',
    name: 'The Belgian Waffle Co.',
    receipe: 'Nutella Waffle, Banana Waffle, Strawberry Waffle',
    rating: '4.6',
    price: '₹200 for two',
    deliveryTime: '28 MINS',
    image:
      'https://healthfulblondie.com/wp-content/uploads/2023/03/nutella-waffles.jpg',
    menu: [
      {
        id: '1',
        name: 'Nutella Waffle',
        price: '₹120',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvDYMvOa1E2OTdwYxw3qc49YvAqgPu4seZQ&s',
      },
      {
        id: '2',
        name: 'Banana Waffle',
        price: '₹140',
        image:
          'https://preppykitchen.com/wp-content/uploads/2024/12/Banana-Waffles-Recipe-Card.jpg',
      },
      {
        id: '3',
        name: 'Strawberry Waffle',
        price: '₹130',
        image:
          'https://media.istockphoto.com/id/476897398/photo/belgium-waffles-with-strawberries-and-mint-on-white-plate.jpg?s=612x612&w=0&k=20&c=4Kble4aW-cPuIO_XsIqj3dBIaC9z6ShyrWquj7Q12ps=',
      },
    ],
  },
  {
    id: '1013',
    name: 'Pista House',
    receipe: 'Pista Cookies, Baklava, ChocoCake',
    rating: '4.3',
    price: '₹600 for two',
    deliveryTime: '35 MINS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqOJsZamQQdAYXNDJbBrHkjUv9aNLmUtH7g&s=10',
    menu: [
      {
        id: '1',
        name: 'PistaCookies',
        price: '₹150',
        image:
          'https://classicfoodsbakery.com/wp-content/uploads/2020/11/Pista-cookies-trichy.jpg',
      },
      {
        id: '2',
        name: 'Baklava',
        price: '₹200',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASGsysWZtQJVwe4rL7tyt5nFvzOUb2jNZUQ&s',
      },
      {
        id: '3',
        name: 'ChocoCake',
        price: '₹250',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgtMPxX4TyOoZW-sPgZUAgcg5o9lIhhwJpw&s',
      },
    ],
  },
  {
    id: '1014',
    name: 'Baskin ',
    receipe: 'Chocolate IceCream, Vanilla IceCream, choco IceCream',
    rating: '4.7',
    price: '₹180 for two',
    deliveryTime: '15 MINS',
    image:
      'https://carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg',
    menu: [
      {
        id: '1',
        name: 'Chocolate Ice Cream',
        price: '₹80',
        image:
          'https://buttermilkbysam.com/wp-content/uploads/2023/07/no-churn-chocolate-ice-cream-7.jpg',
      },
      {
        id: '2',
        name: 'Vanilla Ice Cream',
        price: '₹70',
        image:
          'https://media.istockphoto.com/id/1326143969/photo/bowl-with-vanilla-ice-cream-balls.jpg?s=612x612&w=0&k=20&c=WxEriNEK7yW7F4AWImLQRrpco-R_bdDYEQoyhigu9fc=',
      },
      {
        id: '3',
        name: 'Choco Ice Cream',
        price: '₹75',
        image:
          'https://joyfoodsunshine.com/wp-content/uploads/2020/06/homemade-chocolate-ice-cream-recipe-7.jpg',
      },
    ],
  },
  {
    id: '1015',
    name: "Domino's Pizza",
    receipe: 'Cheese Burst Pizza, Garlic Bread, Coke',
    rating: '4.5',
    price: '₹450 for two',
    deliveryTime: '30 MINS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKaQ7-G7Jnvt6rusRZ99dYGiuWWeooXCOFA&s',
    menu: [
      {
        id: '1',
        name: 'Cheese Burst Pizza',
        price: '₹250',
        image:
          'https://recipesblob.oetker.in/assets/89398df9d59d4a4795357ed8228c04bb/360x400/cheese-burst-pizza.jpg',
      },
      {
        id: '2',
        name: 'Garlic Bread',
        price: '₹120',
        image:
          'https://www.allrecipes.com/thmb/ymrjQ3GFq_Fc7Fu2yfvIj108tcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21080-great-garlic-bread-DDMFS-4x3-e1c7b5c79fde4d629a9b7bce6c0702ed.jpg',
      },
      {
        id: '3',
        name: 'Coke',
        price: '₹30',
        image:
          'https://media.istockphoto.com/id/458464735/photo/coke.jpg?s=612x612&w=0&k=20&c=YbmiazMmY0DkWh_W8T0pBkOgai2k62hGF1TJn9EC5W0=',
      },
    ],
  },
  {
    id: '1021',
    name: 'Subway burger',
    receipe: 'Veggie Delight Sub, Chicken Sub, Cold Cut Sub',
    rating: '4.2',
    price: '₹300 for two',
    deliveryTime: '22 MINS',
    image:
      'https://subwayisfresh.com.sg/wp-content/uploads/2022/01/Menuitem-Veggie-Delite.jpg',
    menu: [
      {
        id: '1',
        name: 'Veggie Delight Sub',
        price: '₹150',
        image:
          'https://www.vice.com/wp-content/uploads/sites/2/2019/06/1560537773182-veggie-delite-defense.jpeg',
      },
      {
        id: '2',
        name: 'Chicken Sub',
        price: '₹180',
        image:
          'https://media.istockphoto.com/id/175204982/photo/foot-long-buffalo-chicken-ranch-sub.jpg?s=612x612&w=0&k=20&c=LFGWr3ogvYOVe0IQFwp4crmOUEAHcrYPBQkHo7XDkQs=',
      },
      {
        id: '3',
        name: 'Cold Cut Sub',
        price: '₹170',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZTTXE_hn2zlbbeWEg4MN78hfDPXhDv-Cog&s',
      },
    ],
  },
  {
    id: '1022',
    name: 'KFC',
    receipe: 'Zinger Burger Meal, Fries, Coleslaw',
    rating: '4.3',
    price: '₹420 for two',
    deliveryTime: '25 MINS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZE5klWGa9c3geTct1ONcROlGwKWQfiBTDg&s=10',
    menu: [
      {
        id: '1',
        name: 'Zinger Burger',
        price: '₹220',
        image:
          'https://media.istockphoto.com/id/501530895/photo/zinger-burger-5.jpg?s=612x612&w=0&k=20&c=6WEnVQJFZi06zB_ajk_g_F5oM0G591GavOyjYnCx2Vc=',
      },
      {
        id: '2',
        name: 'Fries',
        price: '₹80',
        image:
          'https://thumbs.dreamstime.com/b/picking-kfc-french-fries-table-137760589.jpg',
      },
      {
        id: '3',
        name: 'Coleslaw',
        price: '₹60',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHcXCJq9KILZG7Pjllnn1wIkYrKGTzDpW1Q&s',
      },
    ],
  },
  {
    id: '1023',
    name: "Haldiram's",
    receipe: 'Chole Bhature Combo, Samosa, Lassi',
    rating: '4.4',
    price: '₹280 for two',
    deliveryTime: '20 MINS',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/oq3rrzcqbyuijtwuayv4',
    menu: [
      {
        id: '1',
        name: 'Chole Bhature',
        price: '₹180',
        image:
          'https://www.shutterstock.com/image-photo/chole-bhature-north-indian-food-600nw-2238261205.jpg',
      },
      {
        id: '2',
        name: 'Samosa',
        price: '₹30',
        image:
          'https://media.istockphoto.com/id/1430060145/photo/sweet-tasty-fried-indian-dish-samosha-indian-delicious-deep-fried-breakfast-samosa-also-know.jpg?s=612x612&w=0&k=20&c=bxOAfJThGKNSzugC7Id_vPO9l5UPljCKSgOc18-2vS0=',
      },
      {
        id: '3',
        name: 'Lassi',
        price: '₹70',
        image:
          'https://www.sharmispassions.com/wp-content/uploads/2023/08/sweet-lassi5.jpg',
      },
    ],
  },
  {
    id: '1024',
    name: 'Wow! Momo',
    receipe: 'Spicy Chicken Momos, Veg Momos, Momo Soup',
    rating: '4.1',
    price: '₹250 for two',
    deliveryTime: '18 MINS',
    image:
      'https://dukaan.b-cdn.net/1000x1000/webp/4338846/1f4ed201-cae3-41e6-90b8-319709966f5f/chicken-momo-3b453671-d5a3-45c5-8494-92847dedc6b3.jpeg',
    menu: [
      {
        id: '1',
        name: 'Spicy Chicken Momos',
        price: '₹120',
        image:
          'https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-15T174448.090.jpg?impolicy=Medium_Widthonly&w=350&h=263',
      },
      {
        id: '2',
        name: 'Veg Momos',
        price: '₹100',
        image:
          'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2019/Classic_Veg_Momo_Recipe_Dumplings_4.jpg',
      },
      {
        id: '3',
        name: 'Momo Soup',
        price: '₹50',
        image:
          'https://i0.wp.com/prasuma.com/wp-content/uploads/2020/11/Hot-Sour-Momo-Soup.png?fit=800%2C470&ssl=1',
      },
    ],
  },

  {
    id: '1025',
    name: "McDonald's",
    receipe: 'McAloo Tikki Meal, French Fries, Coke',
    rating: '4.5',
    price: '₹370 for two',
    deliveryTime: '24 MINS',
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2022/03/McAloo-tikki1.jpg',

    menu: [
      {
        id: '1',
        name: 'McAloo Tikki Burger',
        price: '₹120',
        image:
          'https://mcdonaldsblog.in/wp-content/uploads/2018/04/McAloo-tikki.jpg',
      },
      {
        id: '2',
        name: 'French Fries',
        price: '₹60',
        image:
          'https://static.vecteezy.com/system/resources/thumbnails/027/536/411/small/delicious-french-fries-on-a-white-background-photo.jpg',
      },
      {
        id: '3',
        name: 'Coke',
        price: '₹70',
        image:
          'https://media.istockphoto.com/id/1393991948/photo/cola-with-crushed-ice-in-glass-and-there-is-water-droplets-around-cool-black-fresh-drink.jpg?s=612x612&w=0&k=20&c=St-ONdM6Tpg_DPFzZzq-OI-dsIG2Hv30KVdYf83ARs8=',
      },
    ],
  },
];

export default restaurantList;
