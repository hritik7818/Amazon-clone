import React from "react";
import ProductCard from "./ProductCards/ProductCard";
import MultiElementProductCard from "./ProductCards/MultiElementProductCard";
import CardWithAd from "./ProductCards/CardWithAd";
import LongCard from "./ProductCards/LongCard";

const Home = () => {
  let products = [
    {
      imgUrl: "https://m.media-amazon.com/images/I/41OaM+9ZHXL._AC_SY400_.jpg",
      offPercent: "22",
      price: 14999,
      title:
        "iQOO Z6 5G (Chromatic Blue, 4GB RAM, 128GB Storage) | Snapdragon 695-6nm Processor | 120Hz FHD+ Display | 5000mAh Battery",
    },
    {
      imgUrl: "https://m.media-amazon.com/images/I/41qLZhKF5ZL._AC_SY400_.jpg",
      offPercent: "",
      price: 16999,
      title:
        "OnePlus Nord 2T 5G (Gray Shadow, 12GB Storage, 256GB Storage) - Extra INR 3000 Exchange on Android Devices",
    },
    {
      imgUrl: "https://m.media-amazon.com/images/I/41Diz41FkhL._AC_SY400_.jpg",
      offPercent: "25",
      price: 64999,
      title:
        "HP Victus AMD Ryzen 5 5600H 16.1 inches(40cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/Flicker Free Display/Windows 10 Home/MS Office/Mica Silver/2.48 Kg), 16-e0162AX, Black",
    },
    {
      imgUrl: "https://m.media-amazon.com/images/I/31IukenwcRL._AC_SY400_.jpg",
      offPercent: "",
      price: 1499,
      title:
        "OnePlus Nord Buds |True Wireless Earbuds| 12.4mm Titanium Drivers | Playback:Up to 30hr case | 4-Mic Design + AI Noise Cancellation| IP55 Rating",
    },
  ];
  return (
    <div className="container mx-auto">
      <img
        className="w-full -z-10 -mb-60 gradient-mask"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="image"
      />
      <div className="p-4 pr-10 grid grid-cols-4 gap-y-2 gap-x-7 w-full">
        <MultiElementProductCard
          key={1}
          title="Up to 70% off | Amazon Brands & more"
          imageUrls={[
            "https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/romsingh/pb_desktop_qc_augart/xcm_banners_2022_events_qc-372x232-product1appliances-product2-badge-6a11b-3ji55ej9gw-1-9djdx_372x232_in-en._SY232_CB630817358_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/romsingh/pb_desktop_qc_augart/xcm_banners_2022_events_qc-372x232-product1home-kitchen-product2-badge-6a11b-3ji55ej9gw-1-cwc6y_372x232_in-en._SY232_CB630817351_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/romsingh/pb_desktop_qc_augart/xcm_banners_2022_events_qc-372x232-product1-daily-essentilas-product2-badge-6a11b-3ji55ej9gw-1-5mf9q_372x232_in-en._SY232_CB630817349_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/PC_QC_372x23234._SY232_CB631195392_.jpg",
          ]}
          descriptions={[
            "Up to 55% off | ACs, Refrigerators & more",
            "Up to 60% off | Home & kitchen",
            "Up to 60% off | Daily essentials",
            "Under ₹599 | Clothing, shoes &...",
          ]}
        />
        <ProductCard
          key={2}
          title="Up to 75% off | Laptops, headphones & more"
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/AugArt/Electronics/GW/D52498136_IN_CEPC_Electronics_GW_Graphics_PC_CC._SY608_CB630947424_.jpg"
        />
        <MultiElementProductCard
          key={3}
          title="Up to 70% off | Amazon Brands & more"
          imageUrls={[
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/Z644WPEA/9SE/95G/9T/NEW/Launch/D51879504_AugART-Latest-Launches---Design-SIM_PC_QC3._SY232_CB631133798_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/Z644WPEA/9SE/95G/9T/NEW/Launch/D51879504_AugART-Latest-Launches---Design-SIM_PC_QC1._SY232_CB631133798_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/Z644WPEA/9SE/95G/9T/NEW/Launch/D51879504_AugART-Latest-Launches---Design-SIM_PC_QC02._SY116_CB631133798_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/Z644WPEA/9SE/95G/9T/NEW/Launch/PC_QC._SY232_CB631133798_.jpg",
          ]}
          Redmi
          Samsung
          launch
          descriptions={[
            "OnePlus Nord OnePlus 10T: Starting ₹49,999",
            "Redmi K50i 5G: Starting ₹25,999",
            "Samsung M13: Starting ₹11,999",
            "Explore all",
          ]}
        />
        <CardWithAd
          key={4}
          title="Sell on Amazon with FREE listing support"
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/retail/Seller3_230x230._CB630407699_.jpg"
          adUrl="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1c4bafd3-e04c-4c9e-9c69-97c5495bf598.jpg"
        />
        <MultiElementProductCard
          key={5}
          title="Up to 80% off | Men's fashion"
          imageUrls={[
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/AugART/Event/PC-MF/MF-1-372-232._SY232_CB630582691_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/AugART/Event/PC-MF/MF-4-372-232._SY232_CB630582691_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/AugART/Event/PC-MF/MF-2-372-232._SY232_CB630582691_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/AugART/Event/PC-MF/MF-3-372-232._SY232_CB630582691_.jpg",
          ]}
          descriptions={["Clothes", "Footwear", "Watches", "Bags and luggages"]}
        />
        <MultiElementProductCard
          key={6}
          title="Up to 70% off | Amazon Brands & more"
          imageUrls={[
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AugArt22BTF/2xPC-QC_01._SY232_CB630743142_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AugArt22BTF/2xPC-QC_02._SY232_CB630743142_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AugArt22BTF/2xPC-QC_03._SY232_CB630743142_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AugArt22BTF/2xPC-QC_04._SY232_CB630743142_.jpg",
          ]}
          descriptions={[
            "Up to 55% off | Echo smart screen devices",
            "Starting ₹2,249 | Echo smart speaker",
            "Starting ₹6,799 | Kindle E-readers",
            "Up to 45% off | Fire TV streaming devices",
          ]}
        />
        <ProductCard
          key={7}
          title="Up to 60% off | TVs and appliances"
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/LATV-PC-CC-2x_compressed._SY608_CB630556409_.jpg"
        />
        <MultiElementProductCard
          key={8}
          title="Up to 60% off | TVs and appliances"
          imageUrls={[
            "https://images-eu.ssl-images-amazon.com/images/G/31/books/naqiam/pca_atf/xcm_banners_2022_events_qc-372x232-product1-product2-badge-6a11b-nf7vu4vr0b-1-4j3j9_372x232_in-en._SY232_CB631198921_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/books/naqiam/pca_atf/xcm_banners_2022_events_qc-372x232-product1-product2-badge-6a11b-nf7vu4vr0b-1-vpd9t_372x232_in-en._SY232_CB631172894_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/books/naqiam/pca_atf/xcm_banners_2022_events_qc-372x232-product1-product2-badge-6a11b-nf7vu4vr0b-1-2npqs_372x232_in-en._SY232_CB631172890_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/books/naqiam/pca_atf/xcm_banners_2022_events_qc-372x232-product1-product2-badge-6a11b-nf7vu4vr0b-1_372x232_in-en._SY232_CB631172892_.jpg",
          ]}
          descriptions={[
            "Up to 50% off | Books",
            "Up to 70% off | Toys & games",
            "Up to 70% off | Grooming & Wellness devices",
            "Up to 55% off | Video games & accessories",
          ]}
        />
      </div>
      <LongCard title="Blockbuster deals" products={products} />

 
    </div>
  );
};

export default Home;
