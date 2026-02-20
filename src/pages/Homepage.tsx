import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon, SearchIcon, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SubtractWave from "../../public/figmaAssets/Subtract.svg";
import tophi from "../../public/figmaAssets/image-16.svg";
import cyanWave from "../../public/figmaAssets/Frame 1948757650.svg";
import topwaveyellow from "../../public/figmaAssets/Frame 1948757681.svg";
import brand from "../../public/figmaAssets/rectangle-34625799.svg";
import wavebrand from "../../public/figmaAssets/wavebrand.svg";
import waveblue from "../../public/figmaAssets/Vector 25.svg";
import bottomwaveyellowwhite from "../../public/figmaAssets/bottowavewhite.svg";
import yellowstar from "../../public/figmaAssets/yellow-2-3.png";
import yellowstar1 from "../../public/figmaAssets/yellow-2-6.png";
import splenda from "../../public/figmaAssets/splenda.svg";
import merch from "../../public/figmaAssets/merch-shop-96-1.svg";
import logoimg from "../../public/figmaAssets/group-1171275242.svg";
import find_your from "../../public/figmaAssets/find_your.png";
import for_every from "../../public/figmaAssets/for_every.png";
import explore from "../../public/figmaAssets/explore.png";
import recipes from "../../public/figmaAssets/recipes.png";
import inst from "../../public/figmaAssets/inst.svg";
import check from "../../public/figmaAssets/check.svg";
import follow from "../../public/figmaAssets/follw.svg";
import socials from "../../public/figmaAssets/Socials1.svg";

const navigationItems = [
  { label: "Products", hasDropdown: true },
  { label: "Where to Buy", hasDropdown: false },
  { label: "Learn", hasDropdown: true },
  { label: "Recipes", hasDropdown: false },
];

const categoryTabs = [
  { label: "HOT BEV", active: true },
  { label: "COLD BEV", active: false },
  { label: "BAKING", active: false },
  { label: "COOKING", active: false },
  { label: "TOPPING", active: false },
  { label: "FLAVORING", active: false },
];

const productImages = [
  {
    src: "/figmaAssets/rectangle-8633.png",
    badge: "MAGIC BAKER",
    left: "left-[100px]",
  },
  {
    src: "/figmaAssets/rectangle-8636.png",
    badge: "SHAKES",
    left: "left-[520px]",
  },
  {
    src: "/figmaAssets/rectangle-8635.png",
    badge: "STEVIA",
    left: "left-[940px]",
  },
];

const recipeCards = [
  {
    image: "/figmaAssets/rectangle-8659.png",
    badge: "MADE WITH SPLENDA® ORIGINAL SWEETENER",
    title: "Blueberry Croissant Breakfast Casserole",
    left: "left-[100px]",
  },
  {
    image: "/figmaAssets/rectangle-8661.png",
    badge: "MADE WITH SPLENDA® STEVIA SWEETENER",
    title: "No-Bake Protein Balls",
    left: "left-[520px]",
  },
  {
    image: "/figmaAssets/rectangle-8660.png",
    badge: "MADE WITH SPLENDA® DIABETIC NUTRITION SHAKES",
    title: "Chocolate Peanut Butter Banana Smoothie",
    left: "left-[940px]",
  },
];

const instagramImages = [
  { src: "/figmaAssets/img.png", width: "w-[400px]" },
  { src: "/figmaAssets/img-1.png", width: "w-[400px]" },
  { src: "/figmaAssets/img-2.png", width: "w-[400px]" },
  {
    src: "/figmaAssets/monica-silva-wpfhdtwqfta-unsplash.png",
    width: "w-[400px]",
  },
  { src: "/figmaAssets/img-3.png", width: "w-[400px]" },
];

const merchProducts = [
  {
    title: "Splenda ECR Limited Edition Replica Pit Crew Shirt, Men's Large",
    price: "$75.00",
    image: "/figmaAssets/ellipse-935.svg",
  },
  {
    title: "Splenda ECR Limited Edition Die-Cast Model Car - 1:18 Scale",
    price: "$79.00",
    image: "/figmaAssets/ellipse-936.svg",
  },
  {
    title: "ECR Limited Edition Racing Hat - Blue",
    price: "$39.99",
    image: "/figmaAssets/ellipse-937.svg",
  },
];

const socialIcons = [
  { src: "/figmaAssets/group.png", width: "w-[29px]", height: "h-[29px]" },
  { src: "/figmaAssets/frame-1.svg", width: "w-[34px]", height: "h-[34px]" },
  { src: "/figmaAssets/group-1.png", width: "w-[35px]", height: "h-[25px]" },
  { src: "/figmaAssets/frame-2.svg", width: "w-[34px]", height: "h-[34px]" },
  { src: "/figmaAssets/frame.svg", width: "w-[34px]", height: "h-[34px]" },
  { src: "/figmaAssets/group-2.png", width: "w-[31px]", height: "h-[35px]" },
];

const footerSocialIcons = [
  { src: "/figmaAssets/frame-1.svg", width: "w-[29.5px]", height: "h-[29.5px]" },
  { src: "/figmaAssets/group-5.svg", width: "w-[25px]", height: "h-[25px]" },
  { src: "/figmaAssets/frame-4.svg", width: "w-[29px]", height: "h-[29px]" },
  { src: "/figmaAssets/group-3.png", width: "w-[30px]", height: "h-[21.11px]" },
  { src: "/figmaAssets/group-4.png", width: "w-[26.32px]", height: "h-[29.95px]" },
  { src: "/figmaAssets/frame-6.svg", width: "w-[29px]", height: "h-[29px]" },
];

const productMenu = [
  {
    label: "Splenda Original Sweeteners",
    items: [
      "Packet",
      "Pouch",
      "Jar",
      "Liquid Sweeteners",
      "Minis",
      "Multi-Use Syrup",
    ],
  },
  {
    label: "Splenda Magic Baker",
    items: ["Packet Mix", "Brown Sugar Mix", "Concentrate"],
  },
  {
    label: "Splenda Beverages",
    items: ["Coffee Creamers", "Shakes", "Drink Mixes"],
  },
];

export const Homepage = () => {
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<{ label: string; items: string[] } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white relative w-full overflow-x-hidden" data-testid="page-homepage">
      {/* Hero Section */}
      <div className="w-full">

  {/* ✅ Navbar - Sticks to Top Without Overlap */}
  <header className="sticky top-0 left-0 w-full min-h-[60px] lg:h-[70px] flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-4 sm:px-6 lg:px-[60px] bg-white z-50 shadow-sm py-4 lg:py-0">

    {/* Mobile Branding + Search */}
    <div className="flex w-full flex-col gap-3 lg:hidden">
      <div className="flex items-center justify-between">
        <p className="text-[#1EA4C9] text-lg font-['Luckiest_Guy',cursive]">
          <span className="mr-1">I USE</span>
          <span className="text-brand-color2 font-['Pacifico',cursive]">Splenda</span>
          <span className="ml-1">DO YOU?</span>
        </p>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-brand-color3 text-white shadow-[2px_2px_0px_#0C3C60]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <div className="relative h-[48px]">
        <Input
          placeholder="Looking for something sweet..."
          className="h-full w-full rounded-full border-[2px] border-[#1E3E7C] bg-white pl-4 pr-12 text-sm text-[#1E3E7C] placeholder:text-[#1E3E7C]/60"
        />
        <SearchIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1E3E7C]" strokeWidth={1.6} />
      </div>
    </div>

    {/* Desktop Layout */}
    <div className="hidden w-full items-center justify-between lg:flex">
      <div className="flex items-center gap-6">
        <div className="flex items-baseline gap-1">
          <img
            src={logoimg}
            alt="logoimg"
            className="h-6 w-[160px] lg:w-[130px] min-[1100px]:w-[115px] xl:w-[160px] object-contain"
          />
        </div>

        {/* Navigation - Desktop */}
        <nav className="flex gap-8 lg:gap-5 min-[1100px]:gap-4 xl:gap-8 items-center">
      {navigationItems.map((item, index) => {
        if (item.label === "Products") {
          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setProductMenuOpen(true)}
            >
              <button className="text-[#0C3C60] text-base lg:text-sm min-[1100px]:text-xs xl:text-base hover:opacity-80 flex items-center gap-1">
                {item.label}
                <ChevronDownIcon className="w-3 h-3" />
              </button>

              {productMenuOpen && (
                <div
                  className={`absolute left-0 top-full mt-3 rounded-lg bg-white shadow-xl ${
                    activeCategory ? "flex w-[520px]" : "w-[260px]"
                  }`}
                  onMouseEnter={() => setProductMenuOpen(true)}
                  onMouseLeave={() => {
                    setProductMenuOpen(false);
                    setActiveCategory(null);
                  }}
                >
                  <div className={`${activeCategory ? "w-1/2 rounded-l-lg border-r border-[#1E3E7C]/15" : "w-full rounded-lg"} bg-white`}>
                    {productMenu.map((category) => {
                      const isActive = activeCategory?.label === category.label;
                      return (
                        <button
                          key={category.label}
                          onMouseEnter={() => setActiveCategory(category)}
                          className={`flex w-full items-center justify-between px-5 py-3 text-left text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-[#1E3E7C] text-white"
                              : "text-[#1E3E7C] hover:bg-[#E6ECF7]"
                          }`}
                        >
                          <span>{category.label}</span>
                          <ChevronRightIcon className="h-4 w-4" />
                        </button>
                      );
                    })}
                  </div>
                  {activeCategory && (
                    <div className="w-1/2 rounded-r-lg bg-white py-4 px-6">
                      {activeCategory.items.map((subItem) => (
                        <p
                          key={subItem}
                          className="py-2 text-sm font-medium text-[#1E3E7C] hover:text-[#0E2A58]"
                        >
                          {subItem}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        }

        return (
          <button
            key={item.label}
            className="text-[#0C3C60] text-base lg:text-sm min-[1100px]:text-xs xl:text-base hover:opacity-80 flex items-center gap-1"
          >
            {item.label}
            {item.hasDropdown && <ChevronDownIcon className="w-3 h-3" />}
          </button>
        );
      })}
        </nav>
      </div>

      {/* Search - Desktop */}
      <div className="relative w-[400px] lg:w-[300px] min-[1100px]:w-[250px] xl:w-[400px] h-[32px]">
        <Input
          placeholder="Looking for something sweet..."
          className="absolute inset-0 h-full w-full rounded-full border-[1px] border-[#1E3E7C] bg-[#F2F4F7] shadow-[1px_2px_0px_#1E3E7C] pl-6 pr-8 text-lg  text-[#1E3E7C] placeholder:text-[#1E3E7C]/60 focus-visible:ring-0 focus-visible:border-[#1E3E7C]"
        />
        <div className="pointer-events-none absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center ">
          <SearchIcon className="h-5 w-6 text-[#1E3E7C]" strokeWidth={1.5} />
        </div>
      </div>
    </div>

    {/* Mobile Menu Overlay */}
    {mobileMenuOpen && (
      <div className="lg:hidden absolute top-[60px] left-0 w-full bg-white shadow-lg border-t border-gray-100 z-50">
        {/* Mobile Search */}
        <div className="p-4 border-b border-gray-100">
          <div className="relative w-full h-[40px]">
            <Input
              placeholder="Looking for something sweet..."
              className="h-full w-full rounded-full border-[1px] border-[#1E3E7C] bg-[#F2F4F7] shadow-[1px_2px_0px_#1E3E7C] pl-4 pr-10 text-sm text-[#1E3E7C] placeholder:text-[#1E3E7C]/60 focus-visible:ring-0 focus-visible:border-[#1E3E7C]"
            />
            <div className="pointer-events-none absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center">
              <SearchIcon className="h-4 w-4 text-[#1E3E7C]" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        {/* Mobile Navigation Links */}
        <nav className="flex flex-col p-4 gap-4">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              className="text-[#0C3C60] text-base font-medium hover:text-brand-color2 flex items-center justify-between py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
              {item.hasDropdown && <ChevronDownIcon className="w-4 h-4" />}
            </button>
          ))}
        </nav>
      </div>
    )}
  </header>


  {/* ✅ Hero Section */}
  <section className="w-screen min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen relative">

    {/* Hero Background */}
    <img
      src="/figmaAssets/heroimg.svg"
      alt="Hero background"
      className="absolute left-0 right-0 top-0 bottom-0 w-full h-full min-w-full min-h-full max-w-none object-cover object-center "
      loading="eager"
      decoding="sync"
    />

    {/* Hero Content */}
    <div className="relative z-10 min-h-[calc(60vh-60px)] sm:min-h-[calc(70vh-60px)] lg:min-h-[calc(100vh-70px)] flex items-end justify-center lg:justify-start px-4 sm:px-6 lg:px-[100px] pb-[10vh] sm:pb-[15vh] lg:pb-[20vh]">
      <Button className="w-full sm:w-[200px] lg:w-[280px] h-[50px] lg:h-[60px] bg-brand-color2 rounded-full border border-black shadow-[2px_2px_0px_#000] text-white text-base sm:text-lg lg:text-xl font-bold hover:bg-brand-color2/90 transition-all">
        VIEW SWEETENERS
      </Button>
    </div>

</section>

</div>

      <div className="bottom-0 left-0 w-full pb-50 z-10 pointer-events-none">
          <img
            src={cyanWave}
    alt="Cyan Wave"
    className="absolute z-20 w-full mt-[-80px] sm:mt-[-100px] lg:mt-[-160px] h-[150px] sm:h-[200px] lg:h-[251px] object-fill"
      />
      </div>
      {/* Main Content Container - Flowing smoothly */}
      <div className="relative w-full ">
        {/* Quiz Section - Fixed Spacing */}

        <section
  className="relative px-4 sm:px-6 lg:px-[100px] pt-[4rem] sm:pt-[6rem] lg:pt-[8rem] flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-24 bg-white"
  data-testid="section-quiz"
>
  {/* IMAGE SIDE */}
  <div className="
      relative
      w-full
      max-w-[624px]
      max-[1185px]:max-w-[420px]
      max-[1024px]:max-w-[320px]
      
  ">
    
    {/* Decorative Star */}
    <img
      className="absolute -bottom-30 -right-23 mb-[90px] w-[80px] h-[90px] sm:w-[100px] sm:h-[114px] lg:w-[130px] lg:h-[144px] rotate-[15deg] z-10 hidden sm:block"
      src="/figmaAssets/cyan-2--1--1.png"
      alt=""
    />

    {/* MAIN IMAGE */}
    <img
      className="w-full h-auto rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]"
      src="/figmaAssets/updated-product-quiz-image-1.png"
      alt=""
      data-testid="img-quiz-main"
    />

    <img
      className="absolute -bottom-12 -right-12 w-[100px] h-[103px] sm:w-[140px] sm:h-[144px] lg:w-[189px] lg:h-[194px] rotate-[-18deg] hidden sm:block"
      src="/figmaAssets/cyan-2--1--1.png"
      alt=""
    />
  </div>

  {/* TEXT SIDE */}
  <div className="max-w-[500px] text-center lg:text-left">
    <h2 className="mb-4 sm:mb-6 flex justify-center lg:justify-start">
      <img
        src={find_your}
        alt="find_your"
        className="w-[200px] sm:w-[280px] lg:w-auto h-auto"
      />
    </h2>

    <p className="text-brand-color3 text-base sm:text-lg lg:text-xl font-medium mb-6 sm:mb-8 lg:mb-10">
      Take a short quiz to find out which Splenda products are right for you.
    </p>

    <Button
      className="w-full sm:w-[162px] h-[50px] lg:h-[60px] bg-brand-color3 rounded-full border border-black shadow-[2px_2px_0px_#000] text-white text-base lg:text-lg font-bold"
    >
      TAKE QUIZ
    </Button>
  </div>
</section>

        {/* Categories Section */}
  <section className="relative overflow-hidden">

  {/* ================= TOP WAVE ================= */}
  <div className=" left-0 w-full z-20">
    <img
      src={topwaveyellow}
      alt="Top Wave"
      className="w-full object-cover"
    />
  </div>

  {/* ================= SECTION CONTENT white wave ================= */}
  <div className="relative z-10 bg-[#FBDF52] pb-[20%] overflow-hidden">

    {/* Mobile Layout */}
    <div className="md:hidden px-4 pt-10 pb-16 flex flex-col gap-10">
      <div className="relative flex flex-col items-center text-center gap-3">
        <img
          src={for_every}
          alt="for_every"
          className="max-w-[280px] w-full h-auto object-contain"
        />
        <p className="text-[#0C3C60] text-base leading-snug font-semibold max-w-[320px]">
          The only low calorie sweetener made in the USA
        </p>
        <img
          className="absolute -left-3 -top-4 w-[55px] h-[60px] rotate-[12deg]"
          src="/figmaAssets/cyan-2--1--1.png"
          alt=""
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {categoryTabs.map((tab) => (
          <button
            key={tab.label}
            className={`rounded-full border-[2px] border-[#0C3C60] py-3 text-sm font-bold tracking-wide transition-all ${
              tab.active
                ? "bg-[#EBFAFF] text-[#0C3C60] shadow-[2px_2px_0px_#0C3C60]"
                : "bg-white text-[#0C3C60]/80"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-10">
        {productImages.map((product) => (
          <div key={product.badge} className="relative pb-8">
            <img
              src={product.src}
              alt={product.badge}
              className="w-full h-[260px] rounded-[28px] object-cover border-[3px] border-[#F7C94C] shadow-[0_10px_0px_rgba(12,60,96,0.15)]"
            />
            <Button className="absolute left-1/2 -bottom-2 -translate-x-1/2 h-[46px] px-10 rounded-full bg-[#0C3C60] border border-[#0C3C60] text-white text-sm font-bold shadow-[0_6px_0px_rgba(12,60,96,0.45)]">
              {product.badge}
            </Button>
          </div>
        ))}
      </div>
    </div>

    {/* Tablet & Desktop Layout */}
    <div className="hidden md:block">
      <div className="text-center lg:text-right mr-0 lg:mr-32 mb-8 lg:mb-12 px-4 sm:px-6 flex flex-col items-center lg:items-end">
        <img
          src={for_every}
          alt="for_every"
          className="max-w-[280px] sm:max-w-[400px] lg:max-w-[520px] w-full h-auto object-contain"
        />
        <p className="text-[#0C3C60] text-sm sm:text-base md:text-[20px] lg:text-[24px] leading-[1.5] font-semibold mt-3 lg:mt-4 max-w-[720px]">
          The only low calorie sweetener made in the USA
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 lg:mb-16 px-4 sm:px-6">
        {categoryTabs.map((tab, index) => (
          <Button
            key={index}
            variant={tab.active ? "default" : "outline"}
            className={`px-6 py-3 text-base lg:px-4 lg:py-2 lg:text-sm min-[1100px]:px-3 min-[1100px]:py-2 min-[1100px]:text-xs xl:px-6 xl:text-base rounded-full font-bold border-2 border-brand-color3 whitespace-nowrap ${
              tab.active
                ? "bg-[#ebfaff] text-brand-color3 shadow-[2px_2px_0px_#0C3C60]"
                : "bg-white text-brand-color3"
            }`}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <img
        className="absolute pointer-events-none top-[17%] left-[4%] -right-34 mb-[90px] w-[80px] h-[90px] sm:w-[100px] sm:h-[114px] lg:w-[130px] lg:h-[144px] scale-100 lg:scale-90 min-[1100px]:scale-75 xl:scale-100 z-10 hidden md:block"
        src="/figmaAssets/cyan-2--1--1.png"
        alt=""
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12 sm:gap-8 px-4 sm:px-6 lg:px-[100px] ">
        {productImages.map((product, index) => (
          <div key={index} className="relative group cursor-pointer flex flex-col items-center">
            <img
              src={product.src}
              className="w-[420px] lg:w-[360px] min-[1100px]:w-[320px] xl:w-[420px] max-w-full h-[320px] sm:h-[360px] lg:h-[420px] rounded-[24px] object-cover border-2 border-transparent hover:border-brand-color3 transition-all"
              alt=""
            />
            <div className="mt-6 whitespace-nowrap">
              <Button className="h-[48px] px-8 bg-brand-color3 border border-black rounded-full shadow-[2px_2px_0px_#000] text-white text-base font-bold">
                {product.badge}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>

  {/* ================= BOTTOM WAVE ================= */}
{/* <div className=" mt-[-13%]  w-full overflow2-hidden">
  <img
    src={bottomwaveyellowwhite}
    alt="Bottom Wave"
    className=" absolute z-[100000] w-[120%] max-w-none h-[200px] object-cover  -ml-[10%]"
  />
</div> */}
<div
  className="
   
    absolute left-0
    top-[85%]
    max-[1080px]:top-[88%]
    max-[1023px]:top-[91%]
    max-[780px]:top-[93%]
    w-full overflow-hidden
    pointer-events-none z-20
  "
>
  <img
    src={bottomwaveyellowwhite}
    alt="Middle Wave"
    className="h-full object-cover w-[120%] max-w-none"
  />
</div>


</section>


        {/* Recipes Section */}
<section className="relative pt-8 sm:pt-12 lg:pt-16 pb-[20rem] sm:pb-[26rem] max-[1090]:pb-[10rem] lg:pb-[27rem] px-4 sm:px-6 lg:px-[100px] bg-white overflow-visible">
          {/* Yellow Star Decoration - Top Left */}
            <div className="hidden lg:block absolute top-[300px] left-[50px] z-[5]">
                  <img src={yellowstar} alt="" className="w-50 h-50" />
          </div>

          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
              <img src={explore} alt="img" className="h-8 sm:h-10 lg:h-auto w-auto" />
              <img src={recipes} alt="recipes.png" className="h-8 sm:h-10 lg:h-auto w-auto" />
            </div>
            <h2 className="text-brand-color3 font-bold text-5xl lg:text-4xl min-[1100px]:text-3xl xl:text-5xl leading-tight mb-4 sm:mb-6">
              Explore Recipes
            </h2>
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[398px] h-[50px] lg:h-[60px] mx-auto">

  {/* Border + Background */}
  <div className="absolute inset-0 rounded-full border-2 border-[#1E3E7C] bg-white shadow-[4px_4px_0px_#1E3E7C]" />

  {/* Input */}
  <Input
    className="absolute inset-0 w-full h-full bg-transparent 
               pl-6 pr-14 
               border-0 focus-visible:ring-0 
               text-[#1E3E7C] placeholder:text-[#1E3E7C]/60 
               rounded-full"
    placeholder="Looking for something sweet..."
    data-testid="input-search-recipes"
  />

  {/* Icon */}
  <SearchIcon className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1E3E7C]" />

</div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 mb-10 lg:mb-16">
            {recipeCards.map((recipe, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-4 sm:mb-6 lg:mb-8 w-full">
                  <img
                    src={recipe.image}
                    className="w-full h-[280px] sm:h-[350px] lg:h-[450px] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] object-cover"
                    alt=""
                  />
                  <Badge className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 bg-brand-color2 text-white border-0 text-[10px] sm:text-xs px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-2.5 rounded-full font-bold">
                    {recipe.badge}
                  </Badge>
                </div>
                <h3 className="text-brand-color3 text-lg sm:text-xl lg:text-[25px] font-bold text-center leading-tight max-w-[260px] sm:max-w-[280px] lg:max-w-[300px]">
                  {recipe.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-10 lg:mb-16">
            <Button className="w-full sm:w-[162px] h-[50px] lg:h-[60px] bg-brand-color3 border border-black rounded-full shadow-[2px_2px_0px_#000] text-white text-base lg:text-lg font-bold">
              RECIPES
            </Button>
          </div>

          {/* #1 Recommended Badge - Bottom Right */}
{/* #1 Recommended Badge - Responsive */}
{/* #1 Recommended Badge - FIXED RESPONSIVE */}
<div
  className="
    absolute
    right-[6%]
    bottom-[24%]
    max-[1300px]:bottom-[20%]
    max-[1100px]:bottom-[16%]
    mr-24
    z-30
  "
>
  <img
    src={brand}
    alt="Recommended Badge"
    className="
      w-[100px]
      
      h-auto
    "
  />
</div>
          

          {/* Yellow Wave Transition to Instagram Section */}
<div className="absolute bottom-[-60px]  left-0 w-full z-0">
  <div className="px-4 sm:px-10 lg:px-[80px] max-[1090px]:py-0 mb-6 sm:mb-8 lg:mb-10 relative">
            <div className="flex items-start gap-3">
               <span className="flex flex-col items-start"><img src={check} alt="check" className="h-8 sm:h-12 lg:h-auto w-auto" /><img src={inst} alt="inst" className="h-6 sm:h-10 lg:h-auto w-auto mt-1" /></span> 
              {/* Sparkle Stars */}
              <div className="hidden lg:flex items-end gap-[3px] mt-2">
              <img
  className="absolute top-[-45%] left-[38%] max-[1200px]:left-[45%] mb-[90px] rotate-[15deg] w-[130px] h-[144px] z-10"
  src="/figmaAssets/cyan-2--1--1.png"
  alt="img"
/>
              </div>
            </div>
          </div>
  <img
    src={wavebrand}
    alt="wavebrand"
    className="mt-[-10%] max-[1290px]:mt-[-4%] max-[1100px]:mt-[-1%] z-[0] ml-[-12%] max-w-none h-full w-[120%] object-cover block"
  />
</div>

        </section>

        {/* Instagram Section */}
 <section
  className="
    relative
    overflow-hidden
    bg-[#F4D548]
    -mt-[60px]          /* smoother overlap */
    max-[1250px]:mt-[10px]
    max-[1024px]:mt-[10px]
    pt-0
    pb-0
    z-[1]
  "
  data-testid="section-instagram"
>
          {/* Header with Stars */}
          

          {/* Instagram Carousel - Auto-scrolling, pauses on hover */}
          <div 
            className="instagram-carousel-container group relative overflow-hidden pb-5" 
          >
            <div 
              className="instagram-carousel flex gap-3 pl-4 pr-4 animate-[scrollLeft_25s_linear_infinite]"
            >
              {/* Duplicate images for seamless loop */}
              {[...instagramImages, ...instagramImages].map((img, index) => (
                <div 
                  key={index}
                  className="instagram-card group/card relative shrink-0 [width:clamp(200px,50vw,280px)] rounded-[16px] overflow-hidden bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
                >
                  {/* Instagram Header - Shows on hover */}
                  <div 
                    className="instagram-header absolute inset-x-0 top-0 bg-white py-3 px-[14px] flex items-center justify-between opacity-0 -translate-y-full transition-all duration-300 ease-linear z-10"
                  >
                    <div className="flex items-center gap-[10px]">
                      <div className="w-8 h-8 rounded-full bg-[linear-gradient(135deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">S</span>
                      </div>
                      <span className="text-[#262626] text-[14px] font-semibold">Splenda</span>
                    </div>
                    <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                      <circle cx="2" cy="2" r="2" fill="#262626"/>
                      <circle cx="8" cy="2" r="2" fill="#262626"/>
                      <circle cx="14" cy="2" r="2" fill="#262626"/>
                    </svg>
                  </div>

                  {/* Image */}
                  <img
                    src={img.src}
                    className="w-full h-[320px] object-cover block"
                    alt="Instagram post"
                  />

                  {/* Instagram Footer - Shows on hover */}
                  <div 
                    className="instagram-footer absolute inset-x-0 bottom-0 bg-white py-3 px-[14px] flex justify-between items-center opacity-0 translate-y-full transition-all duration-300 ease-linear z-10"
                  >
                    <div className="flex gap-4">
                      {/* Heart */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#ed4956" stroke="#ed4956" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                      {/* Comment */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                      {/* Share */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </div>
                    {/* Bookmark */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section with @SPLENDA button and Follow socials */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-around gap-8 lg:gap-0 pt-12 sm:pt-16 lg:pt-[90px] px-4 max-[1200px]:pb-6 sm:px-6 pb-40 sm:pb-60  relative z-5">
            {/* @SPLENDA Button */}
            <button className="flex items-center gap-2 bg-[#0C3C60] text-white py-3 px-6 sm:py-3.5 sm:px-7 rounded-full text-sm sm:text-base font-bold cursor-pointer border-none lg:ml-[39%]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="6" fill="url(#instagram-gradient)"/>
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="18" cy="6" r="1.5" fill="white"/>
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433"/>
                    <stop offset="25%" stopColor="#e6683c"/>
                    <stop offset="50%" stopColor="#dc2743"/>
                    <stop offset="75%" stopColor="#cc2366"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
              </svg>
              @SPLENDA
            </button>

            {/* Follow Our Socials */}
            <div className="text-center lg:text-right">
              <span className="flex justify-center lg:justify-end gap-2 mb-3">
                <img src={follow} alt="follow" className="h-5 sm:h-6 lg:h-auto" /><img src={socials} alt="socials" className="h-5 sm:h-6 lg:h-auto" />
              </span>
              <div className="flex gap-2 sm:gap-3 justify-center lg:justify-end">
                {/* Instagram */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0C3C60] flex items-center justify-center cursor-pointer">
                  <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="white">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
                    <circle cx="18" cy="6" r="1" fill="white"/>
                  </svg>
                </div>
                {/* Facebook */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0C3C60] flex items-center justify-center cursor-pointer">
                  <svg className="w-2.5 h-4 sm:w-[10px] sm:h-[18px]" viewBox="0 0 10 18" fill="white">
                    <path d="M6.5 6V4c0-.55.45-1 1-1H9V0H6.5C4.57 0 3 1.57 3 3.5V6H0v3h3v9h3.5V9H9l.5-3H6.5z"/>
                  </svg>
                </div>
                {/* YouTube */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0C3C60] flex items-center justify-center cursor-pointer">
                  <svg className="w-4 h-3 sm:w-5 sm:h-3.5" viewBox="0 0 20 14" fill="white">
                    <path d="M19.15 2.16A2.5 2.5 0 0 0 17.39.4C15.87 0 10 0 10 0S4.13 0 2.61.4A2.5 2.5 0 0 0 .85 2.16 26 26 0 0 0 .45 7a26 26 0 0 0 .4 4.84 2.5 2.5 0 0 0 1.76 1.76C4.13 14 10 14 10 14s5.87 0 7.39-.4a2.5 2.5 0 0 0 1.76-1.76A26 26 0 0 0 19.55 7a26 26 0 0 0-.4-4.84zM8 10V4l5.2 3L8 10z"/>
                  </svg>
                </div>
                {/* LinkedIn */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0C3C60] flex items-center justify-center cursor-pointer">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="white">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </div>
                {/* Pinterest */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0C3C60] flex items-center justify-center cursor-pointer">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="white">
                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                  </svg>
                </div>
                {/* TikTok */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0C3C60] flex items-center justify-center cursor-pointer">
                  <svg className="w-3.5 h-4" viewBox="0 0 14 16" fill="white">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0z" transform="translate(-1)"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Yellow to Blue Wave Transition */}
       

          {/* CSS for carousel animation */}
          <style>{`
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .instagram-carousel-container:hover .instagram-carousel {
              animation-play-state: paused;
            }
            .instagram-card:hover .instagram-header {
              opacity: 1;
              transform: translateY(0);
            }
            .instagram-card:hover .instagram-footer {
              opacity: 1;
              transform: translateY(0);
            }
          `}</style>
        </section>

        {/* Merch Section */}
        <div
                  className=" lg:block pointer-events-none absolute w-[140%] leading-[0] z-10 ml-[-14%] mt-[-20%]"
>
  <img
    src={waveblue}
    alt="Blue Wave" 
    className="w-full block"
  />
</div>
       <section className="relative bg-[#00AEEF] -mt-10 lg:-mt-20 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">

  {/* ⭐ Sparkle Stars - Top Right */}
  <img
    src={yellowstar1}
    alt="Sparkle"
    className="absolute top-[-20px] right-4 sm:right-12 lg:right-14 lg:max-[1279px]:right-10 min-[1100px]:max-[1279px]:right-12 w-[120px] h-[125px] sm:w-[160px] sm:h-[170px] lg:w-[180px] lg:h-[188px] min-[1100px]:max-[1279px]:w-[170px] min-[1100px]:max-[1279px]:h-[178px] lg:max-[1279px]:top-[-8px] xl:w-[220px] xl:h-[230px] xl:right-24 rotate-[1deg] z-[200] hidden sm:block pointer-events-none"
  />

  {/* 🔹 Header Container */}
  <div className="relative z-20 px-4 sm:px-10 lg:px-[80px] mb-8 sm:mb-12 lg:mb-[60px]">
    
    {/* Splenda + ECR */}
    <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-3 mb-2 mt-[-3px]">
      <span className="text-white text-[40px]">
        <img src={splenda} alt="splenda" className="h-8 sm:h-10 lg:h-auto w-[450px] max-[1090px]:h-7 max-[1090px]:w-[290px]"/>
        <img src={merch} alt="merch" className="h-12 sm:h-16 lg:h-auto w-auto mt-2 max-[1090px]:h-10 max-[1090px]:w-[120px]"/>
      </span>
    </div>
  </div>

  {/* 🔹 Products Row */}
  <div className="px-4 sm:px-6 lg:px-[100px] pt-6 sm:pt-8 lg:pt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10 sm:gap-8 lg:gap-6 min-[1100px]:max-[1279px]:gap-4 lg:max-[1279px]:gap-4 xl:gap-16 relative z-20">
    {merchProducts.map((product, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center w-full"
      >
        {/* Oval Container */}
        <div className="w-[260px] h-[180px] sm:w-[300px] sm:h-[200px] lg:w-[280px] lg:h-[190px] min-[1100px]:max-[1279px]:w-[260px] min-[1100px]:max-[1279px]:h-[178px] lg:max-[1279px]:w-[260px] lg:max-[1279px]:h-[178px] xl:w-[370px] xl:h-[250px] bg-white rounded-[250%] rotate-[-5deg] flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-[160px] max-h-[130px] sm:max-w-[190px] sm:max-h-[150px] lg:max-w-[180px] lg:max-h-[145px] min-[1100px]:max-[1279px]:max-w-[160px] min-[1100px]:max-[1279px]:max-h-[130px] lg:max-[1279px]:max-w-[160px] lg:max-[1279px]:max-h-[130px] xl:max-w-[230px] xl:max-h-[190px] object-contain rotate-[5deg]"
          />
        </div>

        {/* Title */}
        <p className="text-[#F4D548] text-sm sm:text-[15px] lg:text-[15px] min-[1100px]:max-[1279px]:text-[14px] lg:max-[1279px]:text-[14px] xl:text-[16px] font-semibold italic mb-2 sm:mb-3 max-w-[200px] sm:max-w-[220px] lg:max-w-[210px] min-[1100px]:max-[1279px]:max-w-[200px] lg:max-[1279px]:max-w-[200px] xl:max-w-[240px] leading-snug">
          {product.title}
        </p>

        {/* Price */}
        <p className="text-[#F4D548] text-base sm:text-[17px] lg:text-[18px] font-bold mb-4 sm:mb-5">
          {product.price}
        </p>

        {/* Button */}
        <button className="bg-[#F4D548] text-[#0C3C60] font-bold text-xs sm:text-[13px] lg:text-[14px] px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 rounded-full border-2 border-[#0C3C60] shadow-[2px_2px_0_#0C3C60] hover:bg-[#FFE066] transition-colors">
          VIEW PRODUCT
        </button>
      </div>
    ))}
  </div>

  {/* Bottom Text */}
  <div className="flex flex-col items-center mt-12 sm:mt-16 lg:mt-20 relative z-20">
    <span className="border border-white text-white text-[10px] sm:text-[11px] lg:text-[12px] px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 lg:mb-6">
      IN THE US SINCE 1999
    </span>

    <h2
      className="text-[#F4D548] text-[28px] sm:text-[36px] lg:text-[44px] text-center leading-tight px-4 font-['Luckiest_Guy',cursive] drop-shadow-[2px_2px_0_#b8920a]"
    >
      CALORIE SAVING <br /> FROM SPLENDA
    </h2>
  </div>

  {/* White Wave Bottom */}
  <div className="absolute bottom-[-9%] w-full h-[260px] overflow-hidden">
    <img
      src={SubtractWave}
      alt="Wave Divider"
      className="w-full h-full object-cover"
    />
  </div>
</section>


        {/* Impact Counter Section */}
        {/* ================= IMPACT COUNTER SECTION ================= */}
<section className="relative text-center overflow-visible z-[200]">

  {/* ⚪ White Bottom Area */}
  <div className="relative bg-white pb-16 sm:pb-20 lg:pb-24 pt-1 ">

    {/* 🟡 Splenda Packets - Perfect Overlap */}
    <div className="absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-12 lg:-top-16 flex items-center z-[1000]">
      <img
        src={tophi}
        alt="packet"
        className="w-24 sm:w-32 lg:w-40 rotate-[-8deg] drop-shadow-xl"
      />
      <img
        src={tophi}
        alt="packet"
        className="w-28 sm:w-40 lg:w-48 -ml-4 sm:-ml-6 lg:-ml-8 rotate-[6deg] drop-shadow-xl"
      />
    </div>

    {/* 🔢 Counter Pill */}
    <div className="relative z-20 mt-12 sm:mt-16 lg:mt-20 flex justify-center rotate-[-2deg] px-4">
      <div className="bg-white border-2 border-[#0C3C60] rounded-full px-6 sm:px-10 lg:px-16 py-2 sm:py-3 lg:py-4 shadow-md">
        <span
          className="text-[#1EA4C9] text-lg sm:text-2xl lg:text-[40px] font-bold tracking-wide font-['DM_Sans',sans-serif]"
        >
          1,240,285,547,996
        </span>
      </div>
    </div>

    {/* ✨ Cyan Stars Right Side */}
    <div className="hidden lg:flex absolute right-[23%] top-[-18%] rotate-[18deg] flex-col items-end gap-3">
         <img
              className=" rotate-[15deg] w-[130px] h-[144px] z-10"
              src="/figmaAssets/cyan-2--1--1.png"
              alt=""
            />
    </div>

  </div>
</section>

      </div>

      {/* Footer */}
      <footer className="relative bg-white pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8" data-testid="footer-main">
        {/* Large Splenda watermark background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] sm:text-[300px] lg:text-[400px] font-bold text-brand-color3 whitespace-nowrap font-['Pacifico',cursive]">
            Splenda
          </span>
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-[100px]">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Left Column - Newsletter */}
            <div className="w-full lg:w-[420px] lg:shrink-0">
              {/* I USE Splenda DO YOU? Header */}
              <h2 className="mb-4 sm:mb-6 text-center lg:text-left">
                <span className="text-brand-color3 text-xl sm:text-2xl lg:text-[28px] font-['Luckiest_Guy',cursive]">I USE </span>
                <span className="text-brand-color2 text-2xl sm:text-[28px] lg:text-[32px] font-['Pacifico',cursive]">Splenda </span>
                <span className="text-brand-color3 text-xl sm:text-2xl lg:text-[28px] font-['Luckiest_Guy',cursive]">DO YOU?</span>
              </h2>
              
              {/* Sweet Dish Card */}
              <div className="relative bg-brand-color2 rounded-[15px] sm:rounded-[20px] p-4 sm:p-5 lg:p-6 mb-6 sm:mb-8">
                {/* Stars */}
                <div className="absolute top-[-60px] sm:top-[-80px] right-[-20px] sm:right-[-34px] flex gap-1 hidden sm:flex">
                  <img
              className="rotate-[-25deg] w-[60px] h-[68px] sm:w-[80px] sm:h-[90px] z-10"
              src="/figmaAssets/cyan-2--1--1.png"
              alt=""
            />
                </div>
                
                {/* Sweet Dish Logo */}
                <div className="mb-2 sm:mb-3">
                  <span className="text-white text-[9px] sm:text-[10px] block font-['DM_Sans',sans-serif]">the</span>
                  <span className="text-white text-xl sm:text-2xl lg:text-[28px] font-bold font-['Pacifico',cursive]">sweet d!sh</span>
                  <span className="text-white text-sm sm:text-lg align-top">®</span>
                </div>
                
                <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  Join the Splenda Recipe Club and get delicious recipes and baking tips delivered straight to your inbox.
                </p>
                
                {/* Email Input */}
                <div className="relative">
                  <Input
                    className="w-full h-[44px] sm:h-[50px] rounded-full border-2 border-brand-color3 bg-white pl-4 sm:pl-5 pr-20 sm:pr-28 text-sm sm:text-base text-brand-color3 placeholder:text-brand-color3/50"
                    placeholder="Email..."
                  />
                  <Button className="absolute right-1 top-1 bottom-1 rounded-full bg-brand-color3 px-4 sm:px-6 text-sm sm:text-base font-bold text-white hover:bg-brand-color3/90">
                    SUBMIT
                  </Button>
                </div>
              </div>
              
              {/* Follow Us Section */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-brand-color3 text-base sm:text-lg lg:text-[20px] mb-3 sm:mb-4 text-center lg:text-left font-['Luckiest_Guy',cursive]">FOLLOW US</h3>
                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
                  {/* Facebook */}
                  <a href="#" className="text-brand-color3 hover:text-brand-color2 transition-colors">
                    <svg width="12" height="24" viewBox="0 0 12 24" fill="currentColor">
                      <path d="M3.54 24V12.76H0V8.68h3.54V5.22c0-3.5 2.14-5.4 5.27-5.4 1.5 0 2.78.11 3.16.16v3.66h-2.17c-1.7 0-2.03.81-2.03 2v2.24h4.06l-.53 4.08H7.77V24H3.54z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="text-brand-color3 hover:text-brand-color2 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* X (Twitter) */}
                  <a href="#" className="text-brand-color3 hover:text-brand-color2 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a href="#" className="text-brand-color3 hover:text-brand-color2 transition-colors">
                    <svg width="28" height="20" viewBox="0 0 28 20" fill="currentColor">
                      <path d="M27.4 3.1c-.3-1.2-1.2-2.1-2.4-2.4C22.9 0 14 0 14 0S5.1 0 3 .7C1.8 1 .9 1.9.6 3.1 0 5.2 0 10 0 10s0 4.8.6 6.9c.3 1.2 1.2 2.1 2.4 2.4 2.1.7 11 .7 11 .7s8.9 0 11-.7c1.2-.3 2.1-1.2 2.4-2.4.6-2.1.6-6.9.6-6.9s0-4.8-.6-6.9zM11.2 14.2V5.8l7.4 4.2-7.4 4.2z"/>
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a href="#" className="text-brand-color3 hover:text-brand-color2 transition-colors">
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                  {/* Pinterest */}
                  <a href="#" className="text-brand-color3 hover:text-brand-color2 transition-colors">
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor">
                      <path d="M10 0C4.48 0 0 4.48 0 10c0 4.08 2.44 7.58 5.94 9.13-.08-.74-.16-1.88.03-2.69.17-.73 1.11-4.7 1.11-4.7s-.28-.57-.28-1.4c0-1.32.76-2.3 1.71-2.3.81 0 1.2.61 1.2 1.33 0 .81-.52 2.02-.78 3.15-.22.94.47 1.7 1.4 1.7 1.68 0 2.97-1.77 2.97-4.32 0-2.26-1.62-3.84-3.94-3.84-2.69 0-4.26 2.01-4.26 4.09 0 .81.31 1.68.7 2.15.08.09.09.17.07.27-.07.29-.24.94-.27 1.07-.04.17-.14.21-.32.13-1.18-.55-1.92-2.28-1.92-3.67 0-2.99 2.17-5.73 6.26-5.73 3.29 0 5.84 2.34 5.84 5.47 0 3.27-2.06 5.9-4.92 5.9-.96 0-1.86-.5-2.17-1.09l-.59 2.25c-.21.82-.78 1.84-1.17 2.46.88.27 1.81.42 2.78.42 5.52 0 10-4.48 10-10S15.52 0 10 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Customer Service */}
              <div className="text-brand-color3 text-center lg:text-left">
                <p className="text-xs sm:text-sm mb-1">Text or call 1-800-777-5363 or</p>
                <a href="#" className="text-brand-color2 text-xs sm:text-sm font-bold hover:underline">Click Here for Customer Service.</a>
              </div>
            </div>
            
            {/* Link Columns */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-brand-color3 text-sm sm:text-base lg:text-[18px] mb-3 sm:mb-4 font-['Luckiest_Guy',cursive]">QUICK LINKS</h4>
                <ul className="flex flex-col gap-1.5 sm:gap-2 text-brand-color3 text-xs sm:text-sm lg:text-[15px]">
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Products</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Where to Buy</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Coupons</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Recipes</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Conversion Chart</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Baking Tips</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Health</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">FAQ</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Merch Shop</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Shop Policies</li>
                </ul>
              </div>
              
              {/* Quick Links Column 2 */}
              <div>
                <h4 className="text-transparent text-sm sm:text-base lg:text-[18px] mb-3 sm:mb-4 hidden sm:block font-['Luckiest_Guy',cursive]">&nbsp;</h4>
                <ul className="flex flex-col gap-1.5 sm:gap-2 text-brand-color3 text-xs sm:text-sm lg:text-[15px]">
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Healthcare Professionals</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Food Service</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">About</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Timeline</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Blog</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Press Releases</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Contests</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Contest Rules</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Global Sites</li>
                </ul>
              </div>
              
              {/* Company */}
              <div>
                <h4 className="text-brand-color3 text-sm sm:text-base lg:text-[18px] mb-3 sm:mb-4 font-['Luckiest_Guy',cursive]">COMPANY</h4>
                <ul className="flex flex-col gap-1.5 sm:gap-2 text-brand-color3 text-xs sm:text-sm lg:text-[15px]">
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Recipe</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">About Us</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">FAQ</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Healthcare</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Blog</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Contact Us</li>
                </ul>
              </div>
              
              {/* Legal */}
              <div>
                <h4 className="text-brand-color3 text-sm sm:text-base lg:text-[18px] mb-3 sm:mb-4 font-['Luckiest_Guy',cursive]">LEGAL</h4>
                <ul className="flex flex-col gap-1.5 sm:gap-2 text-brand-color3 text-xs sm:text-sm lg:text-[15px]">
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Privacy Policy</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Terms & Conditions</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Cookie Policy</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Recipe Index</li>
                  <li className="hover:text-brand-color2 cursor-pointer transition-colors">Blog Index</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-200 my-6 sm:my-8"></div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-brand-color3 text-xs sm:text-sm px-2">
              © Heartland Consumer Products 1996-2026 | Carmel, Indiana USA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
