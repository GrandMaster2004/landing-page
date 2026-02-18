import { ChevronDownIcon, SearchIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    ellipse: "/figmaAssets/ellipse-935.svg",
    left: "left-[84px]",
  },
  {
    title: "Splenda ECR Limited Edition Die-Cast Model Car - 1:18 Scale",
    price: "$79.00",
    ellipse: "/figmaAssets/ellipse-936.svg",
    left: "left-[calc(50%_-_199px)]",
  },
  {
    title: "ECR Limited Edition Racing Hat - Blue",
    price: "$39.99",
    ellipse: "/figmaAssets/ellipse-937.svg",
    left: "left-[958px]",
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

export const Homepage = () => {
  return (
    <div className="bg-white relative w-full overflow-x-hidden" data-testid="page-homepage">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-start" data-testid="section-hero">
        {/* Hero Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/figmaAssets/subtract.png')" }}
          data-testid="img-hero-bg"
        />

        {/* Navbar - Overlaying Hero */}
        <header className="absolute top-0 left-0 w-full h-[90px] flex items-center px-[100px] justify-between z-50 bg-transparent" data-testid="header-main">
          <img
            className="w-[313px] h-[37px]"
            src="/figmaAssets/group-1171275242.svg"
            alt="Splenda Logo"
            data-testid="img-logo"
          />
          <nav className="flex gap-12 items-center" data-testid="nav-main">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="text-brand-color3 text-xl font-medium hover:bg-white/10 p-0 h-auto"
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDownIcon className="ml-1 w-5 h-5" />}
              </Button>
            ))}
          </nav>
          <div className="relative w-[400px] h-[53px]">
            <div className="absolute inset-0 bg-white border border-brand-color3 rounded-full shadow-[2px_2px_0px_#1e3e7c]" />
            <Input
              className="absolute inset-0 pl-6 pr-12 bg-transparent border-0 focus-visible:ring-0 text-brand-color3 placeholder:text-brand-color3/70 text-lg"
              placeholder="Looking for something sweet..."
              data-testid="input-search-header"
            />
            <SearchIcon className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-color3" />
          </div>
        </header>

        {/* Hero Content Area */}
        <div className="relative flex-1 flex flex-col justify-end pb-[15vh] px-[100px] z-10">
          <Button 
            className="w-[386px] h-[80px] bg-brand-color2 rounded-full border border-black shadow-[2px_2px_0px_#000] text-white text-[28px] font-bold hover:bg-brand-color2/90 active:scale-95 transition-all"
            data-testid="button-view-sweeteners"
          >
            VIEW SWEETENERS
          </Button>
        </div>
      </section>

      {/* Main Content Container - Flowing smoothly */}
      <div className="relative w-full">
        {/* Background Decorative Elements */}
        <img
          className="absolute top-[500px] left-[-236px] w-[1881px] h-[1423px] max-w-none pointer-events-none opacity-50"
          src="/figmaAssets/group-1171275595.png"
          alt=""
        />

        {/* Quiz Section - Fixed Spacing */}
        <section className="relative px-[100px] py-24 flex items-center gap-24 bg-white" data-testid="section-quiz">
          <div className="relative w-[624px] shrink-0">
            <img
              className="w-full h-auto rounded-[30px]"
              src="/figmaAssets/updated-product-quiz-image-1.png"
              alt=""
              data-testid="img-quiz-main"
            />
            <img
              className="absolute -bottom-12 -right-12 w-[189px] h-[194px] rotate-[-18deg]"
              src="/figmaAssets/cyan-2--1--1.png"
              alt=""
            />
          </div>
          <div className="max-w-[500px]">
            <h2 className="text-brand-color3 text-[56px] font-bold leading-tight mb-6" data-testid="text-quiz-title">
              FIND YOUR PERFECT SPLENDA
            </h2>
            <p className="text-brand-color3 text-xl font-medium mb-10">
              Take a short quiz to find out which Splenda products are right for
              you.
            </p>
            <Button 
              className="w-[162px] h-[60px] bg-brand-color3 rounded-full border border-black shadow-[2px_2px_0px_#000] text-white text-lg font-bold"
              data-testid="button-take-quiz"
            >
              TAKE QUIZ
            </Button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="relative py-24 bg-[#f8f9fa]" data-testid="section-categories">
          <div className="text-center mb-16">
            <h2 className="text-brand-color3 text-[56px] font-bold mb-4">
              HAPPIER, HEALTHIER, LONGER LIVES
            </h2>
            <p className="text-brand-color3 text-[28px] font-medium">
              The only low calorie sweetener made in the USA
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-16">
            {categoryTabs.map((tab, index) => (
              <Button
                key={index}
                variant={tab.active ? "default" : "outline"}
                className={`h-[53px] px-8 rounded-full text-xl font-bold border-brand-color3 ${
                  tab.active
                    ? "bg-[#ebfaff] text-brand-color3 shadow-[2px_2px_0px_#000714]"
                    : "text-brand-color3"
                }`}
                data-testid={`button-category-${tab.label.toLowerCase()}`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          <div className="flex justify-center gap-10 px-[100px]">
            {productImages.map((product, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img
                  src={product.src}
                  className="w-[400px] h-[450px] rounded-[30px] object-cover border-2 border-transparent hover:border-brand-color3 transition-all"
                  alt=""
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <Button className="h-[53px] px-8 bg-brand-color3 border border-black rounded-full shadow-[2px_2px_0px_#000] text-white text-lg font-bold">
                    {product.badge}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recipes Section */}
        <section className="relative py-24 px-[100px] bg-white" data-testid="section-recipes">
          <div className="text-center mb-16">
            <h2 className="text-brand-color3 text-[56px] font-bold mb-8">
              EXPLORE DELICIOUS RECIPES
            </h2>
            <div className="relative w-[398px] h-[60px] mx-auto">
              <div className="absolute inset-0 bg-white border border-brand-color3 rounded-full shadow-[2px_2px_0px_#1e3e7c]" />
              <Input
                className="absolute inset-0 pl-6 pr-12 bg-transparent border-0 focus-visible:ring-0 text-brand-color3"
                placeholder="Looking for something sweet..."
                data-testid="input-search-recipes"
              />
              <SearchIcon className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-color3" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 mb-16">
            {recipeCards.map((recipe, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-8 w-full">
                  <img
                    src={recipe.image}
                    className="w-full h-[450px] rounded-[30px] object-cover"
                    alt=""
                  />
                  <Badge className="absolute top-6 left-6 bg-brand-color2 text-white border-0 text-xs px-6 py-2.5 rounded-full font-bold">
                    {recipe.badge}
                  </Badge>
                </div>
                <h3 className="text-brand-color3 text-[28px] font-bold text-center leading-tight max-w-[300px]">
                  {recipe.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button className="w-[162px] h-[60px] bg-brand-color3 border border-black rounded-full shadow-[2px_2px_0px_#000] text-white text-lg font-bold">
              RECIPES
            </Button>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="relative py-24 bg-[#f8f9fa]" data-testid="section-instagram">
          <div className="text-center mb-16">
            <img
              className="mx-auto h-[116px] mb-8"
              src="/figmaAssets/instagram-2.svg"
              alt="Instagram"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide px-[100px]">
            {instagramImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                className="w-[400px] h-[500px] rounded-[30px] object-cover shrink-0"
                alt=""
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="h-[60px] px-8 bg-brand-color3 border border-black rounded-full shadow-[2px_2px_0px_#000] text-white text-lg font-bold inline-flex items-center gap-3">
              <img className="w-9 h-9" src="/figmaAssets/frame-5.svg" alt="" />
              @SPLENDA
            </Button>
          </div>
        </section>

        {/* Merch Section */}
        <section className="relative py-24 px-[100px] bg-white overflow-hidden" data-testid="section-merch">
          <img
            src="/figmaAssets/merch-shop-96-1.svg"
            className="h-[85px] mb-20 mx-auto"
            alt="Merch Shop"
          />
          <div className="grid grid-cols-3 gap-12">
            {merchProducts.map((product, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-full h-[350px] mb-12 flex items-center justify-center">
                  <img
                    src={product.ellipse}
                    className="absolute inset-0 w-full h-full object-contain -rotate-6"
                    alt=""
                  />
                  {/* Product image would go here if available, using ellipse as backdrop */}
                </div>
                <h3 className="text-brand-color3 text-[28px] font-bold mb-4 min-h-[84px] max-w-[300px]">
                  {product.title}
                </h3>
                <p className="text-brand-color1 text-2xl font-black mb-8 px-4 py-1 bg-brand-color3 rounded-lg inline-block">
                  {product.price}
                </p>
                <Button className="w-[203px] h-[53px] bg-brand-color1 text-brand-color3 font-bold rounded-full border border-black shadow-[2px_2px_0px_#000] hover:scale-105 transition-transform">
                  VIEW PRODUCT
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Counter Section */}
        <section className="relative py-32 bg-brand-color3 text-center" data-testid="section-impact">
          <Badge
            variant="outline"
            className="mb-12 border-brand-color1 text-brand-color1 text-[24px] font-bold px-10 py-4 rounded-full border-2"
          >
            IN THE US SINCE 1999
          </Badge>
          <div className="mb-12 flex flex-col items-center gap-4">
            <img src="/figmaAssets/csf-2.svg" className="h-16 brightness-0 invert" alt="" />
            <img src="/figmaAssets/csf-2.svg" className="h-16 brightness-0 invert" alt="" />
          </div>
          <div className="bg-white border-2 border-black rounded-2xl px-16 py-8 shadow-[8px_8px_0px_#000] inline-block -rotate-1 mb-12">
            <span className="text-brand-color2 text-[64px] font-black tracking-widest font-mono">
              1,240,285,547,996
            </span>
          </div>
          <p className="text-white text-3xl font-black tracking-wider uppercase">
            GRAMS OF SUGAR SAVED
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative bg-[#f1f3f5] pt-32 pb-16 px-[100px]" data-testid="footer-main">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-24">
          <div className="md:col-span-1">
            <img
              src="/figmaAssets/group-1171275242.svg"
              className="w-[200px] mb-10"
              alt="Logo"
            />
            <p className="text-brand-color3/80 text-base mb-8 leading-relaxed">
              Join the Splenda Recipe Club and get delicious recipes and baking
              tips delivered straight to your inbox.
            </p>
            <div className="relative max-w-[300px]">
              <Input
                className="rounded-full border-2 border-black pr-28 h-[56px] bg-white focus-visible:ring-brand-color2"
                placeholder="Email..."
              />
              <Button className="absolute right-1.5 top-1.5 bottom-1.5 rounded-full bg-brand-color3 px-6 font-bold hover:bg-brand-color3/90">
                SUBMIT
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="font-black text-brand-color3 text-xl uppercase tracking-wider">Products</h4>
            <ul className="flex flex-col gap-4 text-brand-color3/70 text-lg">
              <li className="hover:text-brand-color2 cursor-pointer transition-colors">Where to Buy</li>
              <li className="hover:text-brand-color2 cursor-pointer transition-colors">Coupons</li>
              <li className="hover:text-brand-color2 cursor-pointer transition-colors">Recipes</li>
              <li className="hover:text-brand-color2 cursor-pointer transition-colors">Conversion Chart</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-black text-brand-color3 text-xl uppercase tracking-wider">Learn</h4>
            <ul className="flex flex-col gap-4 text-brand-color3/70 text-lg">
              <li className="hover:text-brand-color2 cursor-pointer transition-colors">About</li>
              <li className="hover:text-brand-color2 cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-brand-color2 cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-brand-color2 cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-black text-brand-color3 text-xl uppercase tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-4 text-brand-color3/70 text-lg">
              <li className="hover:text-brand-color2 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-brand-color2 cursor-pointer transition-colors">Terms & Conditions</li>
              <li className="hover:text-brand-color2 cursor-pointer transition-colors">Cookie Policy</li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="font-black text-brand-color3 text-xl uppercase tracking-wider">Follow Us</h4>
            <div className="flex flex-wrap gap-5">
              {socialIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src}
                  className={`${icon.width} ${icon.height} grayscale hover:grayscale-0 transition-all cursor-pointer hover:scale-110`}
                  alt=""
                />
              ))}
            </div>
            <div className="mt-4 text-brand-color3/60">
              <p className="font-bold mb-2">Customer Service</p>
              <p className="text-sm leading-relaxed">Text or call 1-800-777-5363 or Click Here for Customer Service.</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-color3/10 pt-12 text-center">
          <p className="text-brand-color3/50 text-sm font-medium">
            © Heartland Consumer Products 1996-2026 | Carmel, Indiana USA. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
