import { ChevronDownIcon, SearchIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

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
    top: "top-[2081px]",
    left: "left-[100px]",
  },
  {
    src: "/figmaAssets/rectangle-8636.png",
    badge: "SHAKES",
    top: "top-[2081px]",
    left: "left-[520px]",
  },
  {
    src: "/figmaAssets/rectangle-8635.png",
    badge: "STEVIA",
    top: "top-[2081px]",
    left: "left-[940px]",
  },
];

const occasionCategories = [
  { label: "BAKING", active: true },
  { label: "COOKING", active: false },
  { label: "DRINKS", active: false },
  { label: "DESSERT", active: false },
  { label: "TOPPING", active: false },
  { label: "FLAVORING", active: false },
];

const recipeCards = [
  {
    image: "/figmaAssets/rectangle-8659.png",
    badge: "MADE WITH SPLENDA® ORIGINAL SWEETENER",
    title: "Blueberry Croissant Breakfast Casserole",
    top: "top-[3129px]",
    left: "left-[100px]",
  },
  {
    image: "/figmaAssets/rectangle-8661.png",
    badge: "MADE WITH SPLENDA® STEVIA SWEETENER",
    title: "No-Bake Protein Balls",
    top: "top-[3129px]",
    left: "left-[520px]",
  },
  {
    image: "/figmaAssets/rectangle-8660.png",
    badge: "MADE WITH SPLENDA® DIABETIC NUTRITION SHAKES",
    title: "Chocolate Peanut Butter Banana Smoothie",
    top: "top-[3129px]",
    left: "left-[940px]",
  },
];

const instagramImages = [
  { src: "/figmaAssets/img.png", width: "w-[88px]" },
  { src: "/figmaAssets/img-1.png", width: "w-[400px]" },
  { src: "/figmaAssets/img-2.png", width: "w-[400px]" },
  {
    src: "/figmaAssets/monica-silva-wpfhdtwqfta-unsplash.png",
    width: "w-[400px]",
  },
  { src: "/figmaAssets/img-3.png", width: "w-[88px]" },
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
  {
    src: "/figmaAssets/group.png",
    width: "w-[29.08px]",
    height: "h-[29.08px]",
  },
  {
    src: "/figmaAssets/frame-1.svg",
    width: "w-[34.31px]",
    height: "h-[34.31px]",
  },
  {
    src: "/figmaAssets/group-1.png",
    width: "w-[34.9px]",
    height: "h-[24.56px]",
  },
  {
    src: "/figmaAssets/frame-2.svg",
    width: "w-[34.13px]",
    height: "h-[34.13px]",
  },
  {
    src: "/figmaAssets/frame.svg",
    width: "w-[33.73px]",
    height: "h-[33.73px]",
  },
  {
    src: "/figmaAssets/group-2.png",
    width: "w-[30.61px]",
    height: "h-[34.84px]",
  },
];

const footerColumn1Links = [
  "Products",
  "Where to Buy",
  "Coupons",
  "Recipes",
  "Conversion Chart",
  "Baking Tips",
  "Health",
  "FAQ",
  "Merch Shop",
  "Shop Policies",
];

const footerColumn2Links = [
  "Healthcare Professionals",
  "Food Service",
  "About",
  "Timeline",
  "Blog",
  "Press Releases",
  "Contests",
  "Contest Rules",
  "Global Sites",
];

const footerColumn3Links = [
  "Recipe",
  "About Us",
  "FAQ",
  "Healthcare",
  "Blog",
  "Contact Us",
];

const footerColumn4Links = [
  "Privacy Policy",
  "Terms & Conditions",
  "Cookie Policy",
  "Recipe Index",
  "Blog Index",
];

const footerSocialIcons = [
  {
    src: "/figmaAssets/frame-1.svg",
    width: "w-[29.5px]",
    height: "h-[29.5px]",
  },
  { src: "/figmaAssets/group-5.svg", width: "w-[25px]", height: "h-[25px]" },
  { src: "/figmaAssets/frame-4.svg", width: "w-[29px]", height: "h-[29px]" },
  { src: "/figmaAssets/group-3.png", width: "w-[30px]", height: "h-[21.11px]" },
  {
    src: "/figmaAssets/group-4.png",
    width: "w-[26.32px]",
    height: "h-[29.95px]",
  },
  { src: "/figmaAssets/frame-6.svg", width: "w-[29px]", height: "h-[29px]" },
];

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[7355px] relative">
      <img
        className="absolute top-[1518px] left-0 w-[1440px] h-[1423px]"
        alt="Group"
        src="/figmaAssets/group-1171275595.png"
      />

      <img
        className="absolute top-[3893px] left-[calc(50.00%_-_938px)] w-[1806px] h-[1493px]"
        alt="Rectangle"
        src="/figmaAssets/rectangle-34625688.svg"
      />

      <img
        className="absolute top-[4882px] left-0 w-[1440px] h-[1479px]"
        alt="Group"
        src="/figmaAssets/group-1171275483.png"
      />

      {productImages.map((product, index) => (
        <img
          key={`product-${index}`}
          className={`absolute ${product.top} ${product.left} w-[400px] h-[450px] rounded-[30px] object-cover`}
          alt="Rectangle"
          src={product.src}
        />
      ))}

      <div className="absolute top-[2559px] left-[653px]">
        <Button className="h-[53px] bg-brand-color3 border-[#000714] shadow-[2px_2px_0px_#000714] rounded-[64px] border border-solid [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[18px]">
          SHAKES
        </Button>
      </div>

      <div className="absolute top-[2559px] left-[1077px]">
        <Button className="h-[53px] bg-brand-color3 border-[#000714] shadow-[2px_2px_0px_#000714] rounded-[64px] border border-solid [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[18px]">
          STEVIA
        </Button>
      </div>

      <div className="absolute top-[2559px] left-[209px]">
        <Button className="h-[53px] bg-brand-color3 border-[#000714] shadow-[2px_2px_0px_#000714] rounded-[64px] border border-solid [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[18px]">
          MAGIC BAKER
        </Button>
      </div>

      <div className="inline-flex items-center gap-4 absolute top-[1988px] left-[calc(50.00%_-_480px)]">
        {categoryTabs.map((tab, index) => (
          <Button
            key={`tab-${index}`}
            variant={tab.active ? "default" : "outline"}
            className={`h-[53px] rounded-[64px] ${
              tab.active
                ? "bg-[#eaf9ff] border-[#000714] shadow-[2px_2px_0px_#000714] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-brand-color3"
                : "border-[#1e3e7c] [font-family:'Gotham_Narrow-Book',Helvetica] font-normal text-brand-color3"
            } text-xl tracking-[0] leading-5`}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <img
        className="absolute top-[1802px] left-[calc(50.00%_+_54px)] w-[558px] h-[58px]"
        alt="Navy blue"
        src="/figmaAssets/navy-blue-1-1.png"
      />

      <div className="absolute top-[1884px] left-[calc(50.00%_+_54px)] [font-family:'Gotham_Narrow-Medium',Helvetica] font-medium text-brand-color3 text-[28px] text-center tracking-[-0.56px] leading-[42px] whitespace-nowrap">
        The only low calorie sweetener made in the USA
      </div>

      <img
        className="absolute top-0 left-0 w-[1440px] h-[995px] object-cover"
        alt="Subtract"
        src="/figmaAssets/subtract.png"
      />

      <header className="absolute top-0 left-[calc(50.00%_-_720px)] w-[1440px] h-[90px] bg-white">
        <nav className="inline-flex items-center gap-4 absolute top-[35px] left-[calc(50.00%_-_162px)]">
          {navigationItems.map((item, index) => (
            <Button
              key={`nav-${index}`}
              variant="ghost"
              className="h-auto p-0 [font-family:'Gotham_Narrow-Book',Helvetica] font-normal text-brand-color3 text-lg tracking-[-0.36px] leading-[18px]"
            >
              {item.label}
              {item.hasDropdown && <ChevronDownIcon className="ml-1 h-4 w-4" />}
            </Button>
          ))}
        </nav>

        <div className="absolute top-[18px] left-[calc(50.00%_+_222px)] w-[400px] h-[53px]">
          <div className="absolute top-0 left-0 w-[398px] h-[53px] bg-white rounded-[64px] border border-solid border-[#1e3e7c] shadow-[2px_2px_0px_#1e3e7c]" />
          <Input
            placeholder="Looking for something sweet..."
            className="absolute top-3.5 left-[calc(50.00%_-_180px)] w-[235px] border-0 bg-transparent [font-family:'Gotham_Narrow-Book',Helvetica] font-normal text-brand-color3 text-base tracking-[-0.32px] leading-6 focus-visible:ring-0"
          />
          <SearchIcon className="absolute top-3.5 right-[44px] w-6 h-6 text-brand-color3" />
        </div>

        <img
          className="absolute top-[26px] left-[calc(50.00%_-_620px)] w-[313px] h-[37px]"
          alt="Group"
          src="/figmaAssets/group-1171275242.svg"
        />
      </header>

      <div className="absolute top-[702px] left-[100px]">
        <Button className="w-[386px] h-20 bg-brand-color2 rounded-[90px] border border-solid border-[#000714] shadow-[2px_2px_0px_#000714] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-white text-[28px] leading-7 tracking-[0]">
          VIEW SWEETENERS
        </Button>
      </div>

      <div className="absolute top-[3895px] left-[100px] w-[456px] h-[118px] flex flex-col gap-0.5">
        <img
          className="w-[314px] h-[58px]"
          alt="Instagram"
          src="/figmaAssets/instagram-2.svg"
        />
        <img
          className="w-[456px] h-[58px]"
          alt="Instagram"
          src="/figmaAssets/instagram-2.svg"
        />
      </div>

      <div className="absolute top-[4834px] left-[calc(50.00%_-_92px)]">
        <Button className="w-[200px] h-[60px] bg-brand-color3 rounded-[64px] border border-solid border-[#000714] shadow-[2px_2px_0px_#000714] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[18px]">
          <img
            className="w-9 h-9 mr-2"
            alt="Frame"
            src="/figmaAssets/frame-5.svg"
          />
          @SPLENDA
        </Button>
      </div>

      <div className="absolute top-[6343px] left-[calc(50.00%_-_233px)] w-[468px] h-[99px]">
        <div className="absolute top-[5px] left-px w-[464px] h-[90px] bg-white rounded-[64px] border border-solid border-[#000714] rotate-[-1.17deg] shadow-[2px_2px_0px_#000714]" />
        <div className="absolute top-[27px] left-[37px] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-brand-color2 text-5xl tracking-[0] leading-[48px] whitespace-nowrap">
          1,240,285,547,996
        </div>
      </div>

      <div className="absolute top-[6079px] left-[calc(50.00%_-_217px)] w-[434px] h-[118px] flex flex-col gap-[5.6px]">
        <img
          className="w-[434.06px] h-[56.19px]"
          alt="Csf"
          src="/figmaAssets/csf-2.svg"
        />
        <img
          className="ml-[21.1px] w-[390.51px] h-[56.19px]"
          alt="Csf"
          src="/figmaAssets/csf-2.svg"
        />
      </div>

      <div className="absolute top-[5996px] left-[calc(50.00%_-_139px)]">
        <Badge
          variant="outline"
          className="w-[281px] h-[53px] rounded-[86.67px] border-[1.35px] border-solid border-[#fbdf52] [-webkit-text-stroke:1.35px_#00573f] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-brand-color1 text-[22px] tracking-[0.88px] leading-[22px] flex items-center justify-center"
        >
          IN THE US SINCE 1999
        </Badge>
      </div>

      <div className="absolute top-[6220px] left-[calc(50.00%_-_140px)] w-[280px] h-[118px]">
        <img
          className="absolute top-0 left-[110px] w-[170px] h-[111px] object-cover"
          alt="Image"
          src="/figmaAssets/image-16.svg"
        />
        <img
          className="absolute top-2 left-0 w-[149px] h-[110px] object-cover"
          alt="Image"
          src="/figmaAssets/image-18.png"
        />
      </div>

      <div className="absolute top-[1169px] left-[748px] w-[468px] h-[296px] flex flex-col">
        <img
          className="w-[466px] h-[118px]"
          alt="Group"
          src="/figmaAssets/group-1171275274.png"
        />
        <div className="-ml-3.5 h-[60px] w-[454px] self-center mt-[18px] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-brand-color3 text-xl tracking-[-0.40px] leading-[30px]">
          Take a short quiz to find out which Splenda products are right for
          you.
        </div>
        <Button className="w-[162px] h-[60px] mt-10 bg-brand-color3 rounded-[64px] border border-solid border-[#000714] shadow-[2px_2px_0px_#000714] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[18px]">
          TAKE QUIZ
        </Button>
      </div>

      <div className="inline-flex items-center gap-[19px] absolute top-[2941px] left-[calc(50.00%_-_239px)]">
        <img
          className="relative w-[236.36px] h-[58px]"
          alt="Explore"
          src="/figmaAssets/explore-1.png"
        />
        <img
          className="relative w-[222px] h-[58px]"
          alt="Navy blue"
          src="/figmaAssets/navy-blue-2-1.png"
        />
      </div>

      <div className="absolute top-[3603px] left-[calc(50.00%_-_558px)] w-[276px] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-brand-color3 text-[28px] text-center tracking-[-0.84px] leading-7">
        Blueberry Croissant Breakfast Casserole
      </div>

      <div className="absolute top-[3603px] left-[calc(50.00%_-_138px)] w-[276px] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-brand-color3 text-[28px] text-center tracking-[-0.84px] leading-7">
        No-Bake Protein Balls
      </div>

      <div className="absolute top-[3603px] left-[calc(50.00%_+_263px)] w-[314px] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-brand-color3 text-[28px] text-center tracking-[-0.84px] leading-7">
        Chocolate Peanut Butter Banana Smoothie
      </div>

      {recipeCards.map((recipe, index) => (
        <div key={`recipe-${index}`}>
          <img
            className={`absolute ${recipe.top} ${recipe.left} w-[400px] h-[450px] rounded-[30px] object-cover`}
            alt="Rectangle"
            src={recipe.image}
          />
          <Badge className="absolute top-[3141px] left-[calc(50.00%_-_608px_+_${index * 420}px)] bg-brand-color2 rounded-[64px] [-webkit-text-stroke:1px_#00573f] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-white text-xs tracking-[0.24px] leading-3">
            {recipe.badge}
          </Badge>
        </div>
      ))}

      <div className="absolute top-[3690px] left-[calc(50.00%_-_71px)]">
        <Button className="w-36 h-[60px] bg-brand-color3 rounded-[64px] border border-solid border-[#000714] shadow-[2px_2px_0px_#000714] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[18px]">
          RECIPES
        </Button>
      </div>

      <div className="absolute top-[3029px] left-[calc(50.00%_-_199px)] w-[400px] h-[60px]">
        <div className="absolute top-0 left-0 w-[398px] h-[60px] bg-white rounded-[64px] border border-solid border-[#1e3e7c] shadow-[2px_2px_0px_#1e3e7c]" />
        <Input
          placeholder="Looking for something sweet..."
          className="absolute top-[18px] left-[calc(50.00%_-_180px)] w-[235px] border-0 bg-transparent [font-family:'Gotham_Narrow-Book',Helvetica] font-normal text-[#1c1c1cb2] text-base tracking-[-0.32px] leading-6 focus-visible:ring-0"
        />
        <SearchIcon className="absolute top-[18px] right-[44px] w-6 h-6" />
      </div>

      <img
        className="absolute top-0 left-0 w-px h-px object-cover"
        alt="Picnic scene with"
      />

      <img
        className="absolute top-[3089px] left-[47px] w-[91px] h-[91px]"
        alt="Yellow"
        src="/figmaAssets/yellow-2-3.png"
      />

      <img
        className="absolute top-[4110px] left-[calc(50.00%_-_226px)] w-[500px] h-[190px]"
        alt="Top clickable linked"
        src="/figmaAssets/top--clickable---linked-into-instagram-.png"
      />

      <div className="inline-flex items-start gap-4 absolute top-[4214px] left-[calc(50.00%_-_1032px)]">
        {instagramImages.map((img, index) => (
          <img
            key={`instagram-${index}`}
            className={`relative ${img.width} h-[500px]`}
            alt="Img"
            src={img.src}
          />
        ))}
      </div>

      <img
        className="absolute top-[4700px] left-[calc(50.00%_-_226px)] w-[500px] h-[180px]"
        alt="Bottom clickable"
        src="/figmaAssets/bottom--clickable---linked-into-instagram-.svg"
      />

      <div className="absolute top-[1080px] left-[76px] w-[624px] h-[554px]">
        <img
          className="absolute top-1 left-0 w-[624px] h-[443px]"
          alt="Updated product quiz"
          src="/figmaAssets/updated-product-quiz-image-1.png"
        />
        <img
          className="absolute top-[360px] left-[434px] w-[189px] h-[194px]"
          alt="Cyan"
          src="/figmaAssets/cyan-2--1--1.png"
        />
        <img
          className="absolute top-0 left-[21px] w-[105px] h-[110px]"
          alt="Cyan"
          src="/figmaAssets/cyan-2--1--7.png"
        />
      </div>

      <img
        className="absolute top-[6206px] left-[968px] w-[158px] h-[164px]"
        alt="Cyan"
        src="/figmaAssets/cyan-2--1--6.svg"
      />

      <img
        className="absolute top-[2000px] left-[39px] w-[130px] h-[134px]"
        alt="Cyan"
        src="/figmaAssets/cyan-2--1--2.png"
      />

      <img
        className="absolute top-[3871px] left-[577px] w-[130px] h-[137px]"
        alt="Cyan"
        src="/figmaAssets/cyan-2--1--3.svg"
      />

      <img
        className="absolute top-[5106px] left-[1148px] w-52 h-[216px]"
        alt="Yellow"
        src="/figmaAssets/yellow-2-6.png"
      />

      <img
        className="absolute top-[5212px] left-[100px] w-[529px] h-[85px]"
        alt="Merch shop"
        src="/figmaAssets/merch-shop-96-1.svg"
      />

      {merchProducts.map((product, index) => (
        <div key={`merch-${index}`}>
          <div
            className={`absolute top-[5673px] ${
              index === 0
                ? "left-[calc(50.00%_-_600px)]"
                : index === 1
                  ? "left-[calc(50.00%_-_136px)]"
                  : "left-[calc(50.00%_+_309px)]"
            } ${
              index === 0 ? "w-[325px]" : index === 1 ? "w-[271px]" : "w-64"
            } [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-brand-color1 text-[28px] text-center tracking-[-0.84px] leading-7`}
          >
            {product.title}
          </div>
          <div
            className={`absolute top-[5771px] ${
              index === 0
                ? "left-[calc(50.00%_-_468px)]"
                : index === 1
                  ? "left-[calc(50.00%_-_31px)]"
                  : "left-[calc(50.00%_+_407px)]"
            } [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-brand-color1 text-xl text-center tracking-[-0.40px] leading-[30px] whitespace-nowrap`}
          >
            {product.price}
          </div>
          <img
            className={`absolute top-[5374px] ${product.left} w-[397px] h-[279px]`}
            alt="Ellipse"
            src={product.ellipse}
          />
          <Button
            className={`absolute top-[5821px] ${
              index === 0
                ? "left-[182px]"
                : index === 1
                  ? "left-[619px]"
                  : "left-[1057px]"
            } w-[203px] h-[53px] bg-brand-color1 rounded-[64px] border border-solid border-[#000714] shadow-[2px_2px_0px_#000714] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-brand-color3 text-lg leading-[18px] tracking-[0]`}
          >
            VIEW PRODUCT
          </Button>
        </div>
      ))}

      <img
        className="absolute top-[5084px] left-[100px] w-[505px] h-[118px]"
        alt="Group"
        src="/figmaAssets/group-1171275390.svg"
      />

      <img
        className="top-[4834px] w-[107px] absolute left-[1009px] h-[30px]"
        alt="Socials"
        src="/figmaAssets/socials-1.svg"
      />

      <img
        className="top-[4865px] w-48 absolute left-[1009px] h-[30px]"
        alt="Socials"
        src="/figmaAssets/socials-1.svg"
      />

      <div className="inline-flex items-center gap-[26.75px] absolute top-[4917px] left-[1009px]">
        {socialIcons.map((icon, index) => (
          <img
            key={`social-${index}`}
            className={`relative ${icon.width} ${icon.height}`}
            alt="Group"
            src={icon.src}
          />
        ))}
      </div>

      <footer className="absolute top-[6617px] left-[calc(50.00%_-_787px)] w-[1575px] h-[653px]">
        <img
          className="absolute top-3 left-[calc(50.00%_-_720px)] w-[1440px] h-[507px]"
          alt="Image"
          src="/figmaAssets/image-20.svg"
        />

        <div className="flex flex-col w-[139px] items-start gap-[17px] absolute top-0 left-[678px]">
          <img
            className="relative self-stretch w-full h-[28.58px]"
            alt="Navy blue"
            src="/figmaAssets/navy-blue-7.png"
          />
          <nav className="flex flex-col w-[122px] items-start gap-[15px] relative flex-[0_0_auto]">
            {footerColumn1Links.map((link, index) => (
              <a
                key={`footer1-${index}`}
                href="#"
                className="relative self-stretch [font-family:'Gotham_Narrow-Book',Helvetica] font-normal text-brand-color3 text-lg tracking-[-0.36px] leading-[27px] hover:underline"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <nav className="flex flex-col w-[122px] items-start gap-[15px] absolute top-[50px] left-[891px]">
          {footerColumn2Links.map((link, index) => (
            <a
              key={`footer2-${index}`}
              href="#"
              className="relative self-stretch [font-family:'Gotham_Narrow-Book',Helvetica] font-normal text-brand-color3 text-lg tracking-[-0.36px] leading-[27px] hover:underline"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex flex-col w-[103px] items-start gap-[22px] absolute top-0 left-[1087px]">
          <img
            className="relative self-stretch w-full h-6"
            alt="Navy blue"
            src="/figmaAssets/navy-blue-8.png"
          />
          <nav className="flex flex-col w-[84px] items-start gap-[15px] relative flex-[0_0_auto]">
            {footerColumn3Links.map((link, index) => (
              <a
                key={`footer3-${index}`}
                href="#"
                className="relative self-stretch [font-family:'Gotham_Narrow-Book',Helvetica] font-normal text-brand-color3 text-lg tracking-[-0.36px] leading-[27px] hover:underline"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col w-36 items-start gap-[22px] absolute top-0 left-[1264px]">
          <img
            className="relative w-[68.25px] h-6"
            alt="Navy blue"
            src="/figmaAssets/navy-blue-9.png"
          />
          <nav className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            {footerColumn4Links.map((link, index) => (
              <a
                key={`footer4-${index}`}
                href="#"
                className="relative self-stretch [font-family:'Gotham_Narrow-Book',Helvetica] font-normal text-brand-color3 text-lg tracking-[-0.36px] leading-[27px] hover:underline"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="absolute top-[593px] left-[calc(50.00%_-_620px)] w-[1242px] h-[60px] flex flex-col gap-8">
          <Separator className="w-[1240px] h-px" />
          <div className="flex items-center justify-center -ml-0.5 h-[27px] w-[634px] self-center [font-family:'Gotham_Narrow-Book',Helvetica] font-normal text-[#1e3e7c] text-lg text-center tracking-[-0.36px] leading-[27px] whitespace-nowrap">
            © Heartland Consumer Products 1996-2026 | Carmel, Indiana USA. All
            rights reserved.
          </div>
        </div>

        <div className="absolute top-0 left-[167px] w-[442px] h-[463px] flex flex-col gap-[39.5px]">
          <div className="flex w-[440px] h-[369.95px] relative flex-col items-start gap-[30px]">
            <img
              className="relative w-[302px] h-9"
              alt="Group"
              src="/figmaAssets/group-1171275243.png"
            />

            <Card className="relative w-[444px] h-[204px] mr-[-4.00px] bg-brand-color2 rounded-[14.48px] border-[0.48px] border-solid border-[#1e3e7c] shadow-[1.93px_1.93px_0px_#002f87]">
              <CardContent className="p-4">
                <div className="w-[135px] h-[26px] flex bg-[url(/figmaAssets/image-18-1.png)] bg-cover bg-[50%_50%]">
                  <img
                    className="w-[135px] h-[25.62px]"
                    alt="Rectangle"
                    src="/figmaAssets/rectangle-8676.png"
                  />
                </div>
                <p className="mt-[14px] w-[348px] [font-family:'Gotham_Narrow-Book',Helvetica] font-normal text-brand-color3 text-sm tracking-[-0.28px] leading-[21px]">
                  Join the Splenda Recipe Club and get delicious recipes and
                  baking tips delivered straight to your inbox.
                </p>
                <div className="mt-[26px] flex items-center gap-2">
                  <Input
                    placeholder="Email..."
                    className="flex-1 h-[60px] bg-white rounded-[44px] border-2 border-solid border-[#000714] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-brand-color3 text-base tracking-[-0.32px] leading-5"
                  />
                  <Button className="w-[122px] h-14 bg-brand-color3 rounded-[64px] [font-family:'Gotham_Narrow-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[18px]">
                    SUBMIT
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col w-[283.82px] items-start gap-4 relative flex-[0_0_auto]">
              <img
                className="relative w-[127.88px] h-6"
                alt="Navy blue"
                src="/figmaAssets/navy-blue-96.png"
              />
              <div className="flex items-center gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                {footerSocialIcons.map((icon, index) => (
                  <a
                    key={`footer-social-${index}`}
                    href="#"
                    className="hover:opacity-80"
                  >
                    <img
                      className={`relative ${icon.width} ${icon.height}`}
                      alt="Frame"
                      src={icon.src}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center ml-[-188px] h-[54px] w-[254px] self-center [font-family:'Gotham_Narrow-Regular',Helvetica] font-normal text-[#1e3e7c] text-lg tracking-[-0.36px] leading-[27px]">
            <span className="tracking-[-0.06px]">
              Text or call 1-800-777-5363 or{" "}
            </span>
            <a
              href="#"
              className="[font-family:'Gotham_Narrow-Bold',Helvetica] font-bold tracking-[-0.06px] hover:underline"
            >
              Click Here for Customer Service.
            </a>
          </div>
        </div>

        <img
          className="absolute top-0 left-[568px] w-[100px] h-[95px]"
          alt="Group"
          src="/figmaAssets/group-1171275303.svg"
        />
      </footer>

      <img
        className="absolute top-[878px] left-[23px] w-[1417px] h-[185px]"
        alt="Happier HEALTHIER"
        src="/figmaAssets/happier-healthier-longer-lives-happier-healthier-longer-lives-ha.svg"
      />

      <img
        className="absolute top-[3760px] left-[1058px] w-[124px] h-[124px]"
        alt="Rectangle"
        src="/figmaAssets/rectangle-34625799.svg"
      />
    </div>
  );
};
