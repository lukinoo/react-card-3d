import styled from "styled-components";
import { motion } from "framer-motion";

export const SCardContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  -webkit-perspective: 2000;
  perspective: 2000;
`;

export const SCard = styled(motion.div)`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  background: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 0.8rem;
  position: relative;
  cursor: grab;
  z-index: 1;
`;

export const SCardCircle = styled(motion.div)`
  position: absolute;
  top: 23%;
  left: 50%;
  transform: translate(-50%, -23%);
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  background-image: linear-gradient(120deg, #feaf03 10%, #112047 70%);
  z-index: -1;
`;

export const SCardLogoWrapper = styled.div`
  width: 100%;
`;

export const SCardLogo = styled.img`
  width: 60px;
  height: 60px;
  user-select: none;
`;

SCardLogo.defaultProps = {
  src: "assets/svg/nike.svg",
  alt: "nike logo",
};

export const SCardShoesWrapper = styled(motion.div)`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  user-select: none;
`;

export const SCardShoes = styled(motion.img)`
  width: 100%;
  user-select: none;
`;

SCardShoes.defaultProps = {
  src: "assets/png/Air Jordan.png",
  alt: "Air Jordan",
};

export const SCardInfoWrapper = styled.div`
  width: 100%;
  margin-top: 1.2rem;
`;

export const SCardInfoTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const SCardInfoTitleDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0.3rem 0;
  text-transform: uppercase;
  color: #999999;
`;

export const SCardSizesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const SCardSizesTitle = styled.h5`
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 0.2rem;
`;

export const SCardSizesButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const SCardSizesButton = styled.button`
  border: none;
  outline: none;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.1rem;
  border-radius: 0.6rem;
  font-weight: bold;
  color: #dcdcdc;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-family: inherit;
  &:nth-child(4) {
    border: 2px solid #000;
    color: #000;
  }
`;

export const SCardPriceWrapper = styled.div`
  width: 100%;
  margin: 3rem 0 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;

export const SCardPrice = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const SCardBuyNowButton = styled.button`
  width: 100%;
  height: 2.5rem;
  background: #feaf03;
  border-radius: 3rem;
  border: none;
  outline: none;
  font-family: inherit;
  font-weight: 400;
  text-transform: capitalize;
  font-size: 1rem;
`;
