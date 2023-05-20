import styled from "styled-components";
import banner from "../../assets/imgBg.png";
import banner1 from "../../assets/Rectangle.png";
import banner2 from "../../assets/Ellipse.png";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 48px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  position: relative;
  &:hover {
    box-shadow: 0px 0px 22px 5px rgba(23, 9, 143, 0.71);
    -webkit-box-shadow: 0px 0px 22px 5px rgba(23, 9, 143, 0.71);
    -moz-box-shadow: 0px 0px 22px 5px rgba(23, 9, 143, 0.71);
    animation: 2s ease-in-out 1.5s infinite alternate rotateY;
  }
  @keyframes rotateY {
    0% {
      transform: perspective(800px) rotateY(0deg);
    }
    50% {
      transform: perspective(800px) rotateY(-15deg);
    }

    100% {
      transform: perspective(800px) rotateY(15deg);
    }
  }
`;

export const TopBgImg = styled.div`
  background: url(${banner}) no-repeat;
  height: 168px;
  width: 308px;
  position: absolute;
  top: 30px;
`;

export const Rectangle = styled.div`
  background: url(${banner1}) no-repeat;
  height: 8px;
  width: 380px;
  position: absolute;
  top: 203px;
`;
export const Ellipse = styled.div`
  background: url(${banner2}) no-repeat;
  height: 80px;
  width: 90px;
  position: absolute;
  top: 170px;
`;

export const Img = styled.img`
  width: 62px;
  height: 62px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 40px;
  margin-top: 178px;
  position: relative;
  z-index: 2;
`;

export const TweetsQuantity = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
  margin-bottom: 16px;
  margin-top: 26px;
`;
export const FolowersQuantity = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
  margin-bottom: 26px;
`;

export const Btn = styled.button`
  font-family: Montserrat, sans-serif;
  padding: 14px 56px;
  margin-bottom: 36px;
  background: ${(props) => (props.isUnfollow ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  color: #373737;
  &:hover {
    background-color: #5cd3a8;
  }
`;

export const BtnLoadMore = styled.button`
  font-family: Montserrat, sans-serif;
  padding: 14px 56px;
  margin-top: 36px;
  background-color: #ebd8ff;
  transition: all 0.3s ease-in-out;
  border-radius: 10.3108px;
  color: #373737;
  &:hover {
    background-color: #471ca9;
    transform: scale(1.1);
    color: rgb(235, 216, 255);
  }
`;

export const Dropdown = styled.div`
  margin-bottom: 40px;
`;

export const StyledSelect = styled.select`
  font-family: Montserrat, sans-serif;
  padding: 8px;
  font-size: 16px;
  border-radius: 11px;
  border: 3px solid #ebd8ff;
  background-color: #471ca9;
  color: #ebd8ff;
`;

export const StyledOption = styled.option`
  padding: 8px;
`;
