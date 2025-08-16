import Image from "next/image";

function BrandLogos() {
  const logos = [
    { logo: "/images/upGrad_icon.svg", alt: "upGrad" },
    { logo: "/images/BCG_icon.svg", alt: "BCG" },
    { logo: "/images/ICICI_icon.svg", alt: "ICICI Bank" },
    { logo: "/images/TATA_icon.svg", alt: "TATA" },
    { logo: "/images/redBus_icon.svg", alt: "RedBus" },
    { logo: "/images/HSBC_icon.svg", alt: "HSBC" },
    { logo: "/images/ThomasCook_icon.svg", alt: "Thomas Cook" },
    { logo: "/images/wazirx_icon.svg", alt: "WazirX" },
  ];
  return (
    <div className="flex justify-center items-center gap-9 flex-wrap max-w-6xl">
      {/* Brand Logo Placeholders - These would be actual brand logos in production */}
      {logos?.map(({ logo, alt }) => (
        <div className="w-27 h-9">
          <Image
            src={logo}
            alt={alt}
            width={8}
            height={4}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}

export default BrandLogos;
