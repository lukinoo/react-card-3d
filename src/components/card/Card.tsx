import { useMotionValue, useTransform } from "framer-motion";
import {
  SCard,
  SCardBuyNowButton,
  SCardCircle,
  SCardContainer,
  SCardInfoTitle,
  SCardInfoTitleDescription,
  SCardInfoWrapper,
  SCardLogo,
  SCardLogoWrapper,
  SCardPrice,
  SCardPriceWrapper,
  SCardShoes,
  SCardShoesWrapper,
  SCardSizesButton,
  SCardSizesButtonWrapper,
  SCardSizesTitle,
  SCardSizesWrapper,
} from "./Card.styled";

export const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <SCardContainer>
      <SCard
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <SCardLogoWrapper>
          <SCardLogo />
        </SCardLogoWrapper>
        <SCardShoesWrapper
          style={{ x, y, rotateX, rotateY, z: 2000 }}
          drag
          dragElastic={0.12}
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <SCardShoes />
        </SCardShoesWrapper>
        <SCardInfoWrapper>
          <SCardInfoTitle>air jordan 1 mid</SCardInfoTitle>
          <SCardInfoTitleDescription>"halloween"</SCardInfoTitleDescription>
        </SCardInfoWrapper>
        <SCardSizesWrapper>
          <SCardSizesTitle>size</SCardSizesTitle>
          <SCardSizesButtonWrapper>
            <SCardSizesButton>9</SCardSizesButton>
            <SCardSizesButton>10</SCardSizesButton>
            <SCardSizesButton>11</SCardSizesButton>
            <SCardSizesButton>12</SCardSizesButton>
          </SCardSizesButtonWrapper>
        </SCardSizesWrapper>
        <SCardPriceWrapper>
          <SCardPrice>&#36;110</SCardPrice>
          <SCardBuyNowButton>buy now</SCardBuyNowButton>
        </SCardPriceWrapper>
        <SCardCircle></SCardCircle>
      </SCard>
    </SCardContainer>
  );
};
