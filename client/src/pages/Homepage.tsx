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
    left: "left-[calc(50.00%_-_199px)]",
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
    <div className="bg-white relative w-full min-h-[7355px] overflow-hidden" data-testid="page-homepage">
      {/* Background Groups */}
      <img
        className="absolute top-[1518px] left-[-236px] w-[1881px] h-[1423px] max-w-none pointer-events-none"
        src="/figmaAssets/group-1171275595.png"
        alt=""
        data-testid="img-bg-group-1"
      />
      <img
        className="absolute top-[3893px] left-[calc(50.00%_-_903px)] w-[1806px] h-[1493px] max-w-none pointer-events-none"
        src="/figmaAssets/rectangle-34625688.svg"
        alt=""
        data-testid="img-bg-rectangle"
      />
      <img
        className="absolute top-[4882px] left-[-117px] w-[1955px] h-[1479px] max-w-none pointer-events-none"
        src="/figmaAssets/group-1171275483.png"
        alt=""
        data-testid="img-bg-group-2"
      />

      {/* Hero Section */}
      <img
        className="absolute top-0 left-0 w-full h-[995px] object-cover pointer-events-none"
        src="/figmaAssets/subtract.png"
        alt=""
        data-testid="img-hero-subtract"
      />

      <header className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[90px] bg-white flex items-center px-[100px] justify-between z-50" data-testid="header-main">
        <img
          className="w-[313px] h-[37px]"
          src="/figmaAssets/group-1171275242.svg"
          alt="Splenda Logo"
          data-testid="img-logo"
        />
        <nav className="flex gap-8 items-center" data-testid="nav-main">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="text-brand-color3 text-lg font-normal hover:bg-transparent p-0"
              data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {item.label}
              {item.hasDropdown && <ChevronDownIcon className="ml-1 w-4 h-4" />}
            </Button>
          ))}
        </nav>
        <div className="relative w-[398px] h-[53px]">
          <div className="absolute inset-0 bg-white border border-brand-color3 rounded-full shadow-[2px_2px_0px_#1e3e7c]" />
          <Input
            className="absolute inset-0 pl-6 pr-12 bg-transparent border-0 focus-visible:ring-0 text-brand-color3 placeholder:text-brand-color3/70"
            placeholder="Looking for something sweet..."
            data-testid="input-search-header"
          />
          <SearchIcon className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-color3" />
        </div>
      </header>

      <div className="absolute top-[702px] left-[100px]">
        <Button 
          className="w-[386px] h-[80px] bg-brand-color2 rounded-full border border-black shadow-[2px_2px_0px_#000] text-white text-[28px] font-bold hover:bg-brand-color2/90"
          data-testid="button-view-sweeteners"
        >
          VIEW SWEETENERS
        </Button>
      </div>

      {/* Quiz Section */}
      <div className="absolute top-[1080px] left-[76px] w-[1140px] h-[554px]" data-testid="section-quiz">
        <img
          className="absolute top-1 left-0 w-[624px] h-[443px]"
          src="/figmaAssets/updated-product-quiz-image-1.png"
          alt=""
          data-testid="img-quiz-main"
        />
        <div className="absolute top-[89px] left-[672px] w-[468px]">
          <h2 className="text-brand-color3 text-[56px] font-bold leading-tight mb-4" data-testid="text-quiz-title">
            FIND YOUR PERFECT SPLENDA
          </h2>
          <p className="text-brand-color3 text-xl font-medium mb-8" data-testid="text-quiz-description">
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
      </div>

      {/* Categories */}
      <div className="absolute top-[1802px] left-1/2 -translate-x-1/2 text-center w-full" data-testid="section-categories">
        <h2 className="text-brand-color3 text-[56px] font-bold mb-2">
          HAPPIER, HEALTHIER, LONGER LIVES
        </h2>
        <p className="text-brand-color3 text-[28px] font-medium">
          The only low calorie sweetener made in the USA
        </p>
      </div>

      <div className="absolute top-[1988px] left-1/2 -translate-x-1/2 flex gap-4">
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

      {/* Products Grid */}
      <div className="absolute top-[2081px] left-[100px] flex gap-10" data-testid="grid-products">
        {productImages.map((product, index) => (
          <div key={index} className="relative">
            <img
              src={product.src}
              className="w-[400px] h-[450px] rounded-[30px] object-cover"
              alt=""
              data-testid={`img-product-${index}`}
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
              <Button 
                className="h-[53px] px-8 bg-brand-color3 border border-black rounded-full shadow-[2px_2px_0px_#000] text-white text-lg font-bold"
                data-testid={`button-product-badge-${index}`}
              >
                {product.badge}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Recipes Section */}
      <div className="absolute top-[2941px] left-1/2 -translate-x-1/2 text-center w-full" data-testid="section-recipes">
        <h2 className="text-brand-color3 text-[56px] font-bold mb-8">
          EXPLORE DELICIOUS RECIPES
        </h2>
        <div className="relative w-[398px] h-[60px] mx-auto mb-16">
          <div className="absolute inset-0 bg-white border border-brand-color3 rounded-full shadow-[2px_2px_0px_#1e3e7c]" />
          <Input
            className="absolute inset-0 pl-6 pr-12 bg-transparent border-0 focus-visible:ring-0 text-brand-color3"
            placeholder="Looking for something sweet..."
            data-testid="input-search-recipes"
          />
          <SearchIcon className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-color3" />
        </div>
      </div>

      <div className="absolute top-[3129px] left-[100px] flex gap-10" data-testid="grid-recipes">
        {recipeCards.map((recipe, index) => (
          <div key={index} className="w-[400px]">
            <div className="relative mb-6">
              <img
                src={recipe.image}
                className="w-[400px] h-[450px] rounded-[30px] object-cover"
                alt=""
                data-testid={`img-recipe-${index}`}
              />
              <Badge 
                className="absolute top-4 left-4 bg-brand-color2 text-white border-0 text-xs px-4 py-2 rounded-full"
                data-testid={`badge-recipe-${index}`}
              >
                {recipe.badge}
              </Badge>
            </div>
            <h3 
              className="text-brand-color3 text-[28px] font-bold text-center leading-tight"
              data-testid={`text-recipe-title-${index}`}
            >
              {recipe.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="absolute top-[3690px] left-1/2 -translate-x-1/2">
        <Button 
          className="w-[142px] h-[60px] bg-brand-color3 border border-black rounded-full shadow-[2px_2px_0px_#000] text-white text-lg font-bold"
          data-testid="button-more-recipes"
        >
          RECIPES
        </Button>
      </div>

      {/* Instagram Section */}
      <div className="absolute top-[3895px] left-1/2 -translate-x-1/2 text-center w-full" data-testid="section-instagram">
        <img
          className="mx-auto h-[116px] mb-8"
          src="/figmaAssets/instagram-2.svg"
          alt="Instagram"
          data-testid="img-instagram-header"
        />
        <div className="flex gap-4 overflow-hidden px-[100px]" data-testid="grid-instagram">
          {instagramImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              className="w-[400px] h-[500px] rounded-[30px] object-cover"
              alt=""
              data-testid={`img-instagram-${index}`}
            />
          ))}
        </div>
        <div className="mt-12">
          <Button 
            className="h-[60px] px-8 bg-brand-color3 border border-black rounded-full shadow-[2px_2px_0px_#000] text-white text-lg font-bold inline-flex items-center gap-2"
            data-testid="button-instagram-handle"
          >
            <img className="w-9 h-9" src="/figmaAssets/frame-5.svg" alt="" />
            @SPLENDA
          </Button>
        </div>
      </div>

      {/* Impact Counter */}
      <div className="absolute top-[5996px] left-1/2 -translate-x-1/2 text-center" data-testid="section-impact">
        <Badge
          variant="outline"
          className="mb-8 border-brand-color1 text-brand-color1 text-[22px] font-bold px-8 py-3 rounded-full border-2"
          data-testid="badge-impact-year"
        >
          IN THE US SINCE 1999
        </Badge>
        <div className="mb-8 flex flex-col items-center gap-2">
          <img src="/figmaAssets/csf-2.svg" className="h-14" alt="" />
          <img src="/figmaAssets/csf-2.svg" className="h-14" alt="" />
        </div>
        <div className="bg-white border-2 border-black rounded-full px-12 py-6 shadow-[4px_4px_0px_#000] inline-block -rotate-1">
          <span 
            className="text-brand-color2 text-[48px] font-bold tracking-wider"
            data-testid="text-sugar-saved-count"
          >
            1,240,285,547,996
          </span>
        </div>
        <p className="mt-8 text-brand-color3 text-2xl font-bold">
          GRAMS OF SUGAR SAVED
        </p>
      </div>

      {/* Merch Section */}
      <div className="absolute top-[5084px] left-[100px] w-[1240px]" data-testid="section-merch">
        <img
          src="/figmaAssets/merch-shop-96-1.svg"
          className="h-[85px] mb-12"
          alt="Merch Shop"
          data-testid="img-merch-header"
        />
        <div className="flex justify-between items-start" data-testid="grid-merch">
          {merchProducts.map((product, index) => (
            <div key={index} className="w-[400px] text-center">
              <div className="relative h-[300px] mb-8">
                <img
                  src={product.ellipse}
                  className="absolute inset-0 w-full h-full"
                  alt=""
                  data-testid={`img-merch-ellipse-${index}`}
                />
              </div>
              <h3 
                className="text-brand-color1 text-[28px] font-bold mb-4 min-h-[56px]"
                data-testid={`text-merch-title-${index}`}
              >
                {product.title}
              </h3>
              <p 
                className="text-brand-color1 text-xl font-bold mb-6"
                data-testid={`text-merch-price-${index}`}
              >
                {product.price}
              </p>
              <Button 
                className="w-[203px] h-[53px] bg-brand-color1 text-brand-color3 font-bold rounded-full border border-black shadow-[2px_2px_0px_#000]"
                data-testid={`button-merch-view-${index}`}
              >
                VIEW PRODUCT
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full bg-[#f8f9fa] pt-24 pb-12 px-[100px]" data-testid="footer-main">
        <div className="grid grid-cols-5 gap-12 mb-24">
          <div className="col-span-1">
            <img
              src="/figmaAssets/group-1171275242.svg"
              className="w-full mb-8"
              alt="Logo"
              data-testid="img-footer-logo"
            />
            <p className="text-brand-color3 text-sm mb-6">
              Join the Splenda Recipe Club and get delicious recipes and baking
              tips delivered straight to your inbox.
            </p>
            <div className="relative mb-8">
              <Input
                className="rounded-full border-2 border-black pr-24 h-[50px]"
                placeholder="Email..."
                data-testid="input-footer-email"
              />
              <Button 
                className="absolute right-1 top-1 bottom-1 rounded-full bg-brand-color3 px-6 h-[42px]"
                data-testid="button-footer-submit"
              >
                SUBMIT
              </Button>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-brand-color3 mb-6">Products</h4>
            <ul className="space-y-3 text-brand-color3/80">
              <li>Where to Buy</li>
              <li>Coupons</li>
              <li>Recipes</li>
              <li>Conversion Chart</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-brand-color3 mb-6">Learn</h4>
            <ul className="space-y-3 text-brand-color3/80">
              <li>About</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-brand-color3 mb-6">Legal</h4>
            <ul className="space-y-3 text-brand-color3/80">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-brand-color3 mb-6">Follow Us</h4>
            <div className="flex flex-wrap gap-4">
              {socialIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src}
                  className={`${icon.width} ${icon.height} grayscale hover:grayscale-0 transition-all cursor-pointer`}
                  alt=""
                  data-testid={`img-footer-social-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-brand-color3/10 pt-8 text-center text-brand-color3/60 text-sm">
          © Heartland Consumer Products 1996-2026 | Carmel, Indiana USA. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
};
