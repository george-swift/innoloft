import styled, { css } from 'styled-components';
import { media } from '../../styles';

export const StyledMain = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  min-height: 100vh;
  padding: 30px 16px;

  ${media.phone`
    padding-top: 50px;
    padding-bottom: 50px;
  `}
`;

export const StyledGrid = styled.div`
  display: block;
  margin-top: 25px;
  width: 100%;

  section + section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.lg};
      margin-bottom: 1.2rem;
    }
  }

  ${media.tabletXL`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;

    section + section {
      margin-top: 0;
    }
  `}
`;

interface StyledProductImageProps {
  imgUrl: string;
}

export const StyledProductImage = styled.div`
  background: ${(props: StyledProductImageProps) =>
    `url(${props.imgUrl}) no-repeat center`};
  background-size: contain;
  height: 275px;
  margin-bottom: 1.5rem;
`;

export const StyledProductMainInfo = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    margin-bottom: 0.75rem;

    ${media.phoneXL`
      font-size: 40px;
    `}

    ${media.tabletXL`
      font-size: 50px;
    `}
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 500;
  }

  .eyebrow {
    line-height: 1;
    opacity: 0.5;
    letter-spacing: 0.45px;
    margin-top: 4px;
    margin-bottom: 0px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 300;
  }
`;

export const StyledTabs = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};

  button {
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
    padding: 15px 24px;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 500;

    &.disabled {
      background-color: inherit;
      border-bottom: none;
      opacity: 0.5;
    }
  }
`;

interface IStyledTabProps {
  value: number;
  index: number;
}

export const StyledTabContent = styled.div`
  display: ${(props: IStyledTabProps) =>
    props.value !== props.index ? 'none' : 'block'};
  padding: 1rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-top: none;
  line-height: 1.5;

  img {
    display: none;
  }

  & > button {
    display: block;
    margin-left: auto;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.colors.yellow};

    svg {
      width: 20px;
      height: 20px;
    }
  }

  [role='textbox'] {
    border: 1px dotted ${({ theme }) => theme.colors.gray};
    padding: 0.5rem;
    margin-top: 0.25rem;
  }
`;

export const StyledDescription = styled.div``;

export const StyledToolbar = styled.div`
  background-color: ${({ theme }) => theme.colors.navbar};
  min-height: 25px;
`;

interface IRichTexButtonProps {
  active: boolean;
}

export const StyledRichTextButton = styled.button`
  margin-right: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.mediumGray};

  ${(props: IRichTexButtonProps) =>
    props.active &&
    css`
      font-weight: 900;
      color: ${({ theme }) => theme.colors.blue};
      border: 1px solid ${({ theme }) => theme.colors.blue};
    `}

  &:last-of-type {
    font-style: italic;
  }
`;

export const StyledAttribute = styled.div`
  line-height: 1.3;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  h3 {
    display: flex;
    align-items: center;
    margin-bottom: 0.2rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};

    button {
      margin-left: 0.35rem;
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const StyledUserInfo = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  margin-bottom: 18%;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  .avatar {
    width: 125px;
    height: 125px;

    img {
      width: 100%;
      border: 4px solid ${({ theme }) => theme.colors.white};
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      border-radius: 100%;
    }
  }

  p {
    margin-top: 12px;
    margin-bottom: 6px;
    font-weight: 600;

    & + p {
      display: flex;
      align-items: center;
      font-weight: 300;
      margin: 0;
    }

    span {
      margin-right: 0.5rem;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const StyledMapContainer = styled.div`
  text-align: center;
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: 0;
`;

interface ModalProps {
  visible: boolean;
}

export const StyledModal = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  display: ${({ visible }: ModalProps) => !visible && 'none'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledModalDialog = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;

  ${media.phablet`
    max-width: 500px;
  `}
`;

export const StyledModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-clip: padding-box;
  border: 1px solid ${({ theme }) => theme.colors.yellow};

  [class$='header'] {
    ${({ theme }) => theme.mixins.flexBetween};
    flex-shrink: 0;
    padding: 0.75rem 1.5rem 0.5rem;
    border-bottom: 1px solid #dee2e6;
    line-height: 1.5;

    h5 {
      font-weight: 400;
      font-size: 1.4rem;
      margin-bottom: 0;
    }

    button {
      margin-left: 2rem;
      color: ${({ theme }) => theme.colors.blue};
      font-size: ${({ theme }) => theme.fontSizes.xl};
      font-weight: 300;
    }
  }

  [class$='body'] {
    position: relative;
    flex: 1 1 auto;
    padding: 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};

    li {
      padding-right: 20px;

      &:first-of-type {
        font-size: 0.75rem;
        margin-bottom: 0.25rem;
        font-weight: 500;
      }
    }

    .close {
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: 0%;
      padding: 5px 12px;
      transform: translate(15%, -52%);
      color: ${({ theme }) => theme.colors.blue};
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`;

export const StyledTag = styled.li`
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.tags};
  border: 1px solid ${({ theme }) => theme.colors.tags};
  border-radius: 25rem;
  padding: 5px 12px;
  margin-right: 0.75rem;
  margin-top: 0.4rem;
`;

export const StyledForm = styled.form`
  min-width: 250px;
  margin-top: 1rem;

  button {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  button + button {
    margin-left: 1.5rem;
  }
`;
