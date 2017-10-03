import styled from 'styled-components';
import colorPallete from '../constants';

export const StyledAbilityUpgrades = styled.div`
  margin: -8px;

  & .ability {
    position: relative;
    display: inline-block;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    & img {
      height: 30px;
      width: 30px;
    }

    & > div {
      background-color: ${colorPallete.darkPrimaryColor};
      height: 30px;
      width: 30px;
      text-align: center;
      bottom: 0;
      left: 0;
      font-size: 10px;
    }

    & .placeholder {
      background-color: transparent;
    }
  }

  /* React-tooltip ability upgrades */
  & > div {
    pointer-events: auto !important;
    /*margin-left: 3px !important;
    margin-top: 1px !important;
    /*padding: 6px 12px 2px !important;*/

    &:hover {
      visibility: visible !important;
      opacity: 1 !important;
    }

    &::after {
      border-width: 20px !important;
      right: 0 !important;
      top: 0 !important;
    }
  }

  & svg {
    padding-left: 7px;
  }
`;

export const StyledCosmetic = styled.div`
  display: inline-block;
  margin: 5px;

  & img {
    height: 42px;
  }

  & > div {
    font-size: ${colorPallete.fontSizeCommon};

    & span > span {
      font-size: ${colorPallete.fontSizeSmall};
      color: ${colorPallete.colorMutedLight};
      text-transform: capitalize;
      display: block;
    }
  }

  & a {
    transition: ${colorPallete.normalTransition};
    position: relative;

    &:hover {
      cursor: pointer;
      opacity: 0.8;

      & svg {
        display: block !important;
      }
    }
  }

  & svg {
    position: absolute;

    /* override material-ui */
    fill: ${colorPallete.primaryLinkColor} !important;
    display: none !important;
    width: 18px !important;
    height: 18px !important;
    filter: drop-shadow(0 0 3px ${colorPallete.darkPrimaryColor});
    right: 2px;
    bottom: 6px;
  }
`;

export const StyledUnusedItem = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const StyledGoldIcon = styled.span`
  img {
    height: 10px;
    margin-right: 4px;
  }
`;
export const StyledRunes = styled.div`
  display: inline-block;

  & img {
    height: 24px;
    vertical-align: middle;
    margin-right: 5px;
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.08));
  }

  & span {
    text-transform: none;
    font-weight: ${colorPallete.fontWeightNormal};
  }
`;

export const StyledDivClearBoth = styled.div`
  > div {
    clear: both;
  }
`;
export const StyledBackpack = styled.div`
  display: flex;
  align-items: center;

  & > div {
    position: relative;

    &[data-hint] {
      &::before {
        left: 14px;
      }

      &::after {
        margin-left: -34px;
      }
    }
  }

  & svg {
    width: 21px;
    height: 20px;
    fill: ${colorPallete.colorMutedLight};
    margin: 0 10px;
  }
`;
export const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;
export const StyledFlexElement = styled.div`
  flex: 1;
  margin-right: 5px;
`;
export const StyledTeamIconContainer = styled.span`
  vertical-align: top;
  height: 26px !important;
  width: 26px !important;
  margin-right: 6px;
  opacity: 0.8;
  fill: ${colorPallete.textColorPrimary};
`;
export const StyledPlayersDeath = styled.div`
  position: relative;
  float: left;
  margin: 1px;
  height: 29px;

  & img {
    height: 29px;
  }
`;
export const StyledEmote = styled.img.attrs({
  alt: props => props.emote,
  src: props => `/assets/images/dota2/emoticons/${props.emote}.gif`,
})`
  width: 20px;
  height: 20px;
  vertical-align: bottom;
`;

export const StyledStorySpan = styled.span`
  white-space: nowrap;
  color: ${props =>
    (props.isRadiant ? colorPallete.colorGreen : colorPallete.colorRed)};
  svg,
  img {
    vertical-align: middle;
    max-height: 20px;
    margin-right: 2px;
    fill: ${colorPallete.textColorPrimary};
  }
  svg {
    opacity: 0.8;
    height: 20px;
  }
`;
export const StyledStoryWrapper = styled.div`
  line-height: 30px;

  > div {
    margin-bottom: 20px;
  }
`;
export const StyledStoryNetWorthBar = styled.div`

  display: flex;

 > div {
  display: inline-block;
  height: 7px;

 > div:first-child {
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;

 > div:last-child {
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
}
`;
export const StyledStoryNetWorthText = styled.div`
  display: flex;
  text-align: center;
  ${props => (props.color ? `background-color:${props.color}` : '')};
  ${props => (props.left ? `left:${props.left}%` : '')};
  width: ${props => props.width}%;

  > div {
    display: inline-block;
  }

  > div:nth-child(2) {
    position: absolute;
    transform: translateX(-50%);
  }
`;
export const StyledLogFilterForm = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
