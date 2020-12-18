import { css } from '@emotion/core'

const container = css`
    display:flex;
    flex-direction:column;
    min-height:100vh;
    width:100%;
    max-width:1920px;
    margin:0 auto;
`

const banner = css`
    width:100%;
    height:100vh;
    background:#FFFFFF;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    overflow:hidden;

    @media(max-width:768px) {
        height:80vh;
    }
`

const bannerHeader = css`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    height:285px;
`

const bannerFooter = css`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    height:285px;
`

const nav = css`
    display:flex;
    flex-direction:row;
`

const navItem = css`
    font-size: 16px;
    color: #444444;
    font-weight: 600;
    display: block;
    padding: 20px 25px;
    text-decoration: none;
`

const bannerContainer = css`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const bannerTitle = css``

const bannerSubTitle = css`
    margin: 0;
    text-rendering: optimizeLegibility;
    color: #1a1a1a;
    font-size: 1.4em;
    top: 355px;
    font-weight: 600;
    text-align: center;
`

const bannerOptions = css`
    display:flex;
    flex-direction:row;

    @media(max-width:768px) {
        flex-direction:column;
    }
`

const bannerHeaderImgWrapper = css`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const bannerHeaderImg = css`
    height:auto;
    width:400px;
    margin-top:-50%;
    transform:rotate(40deg);

    @media(max-width:768px) {
        display:none;
    }
`

const bannerFooterImg = css`
    height:auto;
    width:400px;
    transform:rotate(40deg);
    margin-right:15%;

    @media(max-width:768px) {
        display:none;
    }
`

const darkMode = css`
    background:#000000;
    width:100%;
    height:450px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:30px;
    box-sizing:border-box;

    @media(max-width:768px) {
        flex-direction:column;
        justify-content:flex-start;
    }
`

const darkModeWrapper = css`
    width:100%;
    max-width:1280px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    @media(max-width:768px) {
        flex-direction:column;
        align-items:center;
    }
`

const darkModeContent = css`
    display:flex;
    width:33%;
    flex-direction:column;
    
    @media(max-width:768px) {
        width:100%;
    }
`

const darkModeImage = css`
    max-width:33%;
    display:flex;
    margin-top:8%;
    flex-direction:row;
    justify-content:center;
    
    img {
        max-width:320px;
        height:auto;
    }

    @media(max-width:768px) {
        top:40%;
    }
`

const sectionTitleDark = css`
    color: #fcfcfc;
    margin:0;
    margin-bottom:15px;
    font-size: 46px;
    font-weight:500;

    @media(max-width:768px) {
        text-align:center;
    }
`

const sectionSubTitleDark = css`
    font-size: 20px;
    color: #ccc;
    line-height: 1.38105;
    font-weight: 300;
    letter-spacing: .011em;

    @media(max-width:768px) {
        text-align:center;
    }
`

const sectionTitle = css`
    font-size: 46px;
    color: #4a4a4a;
    font-weight:500;
    position:relative;
    z-index:99;
    margin-bottom:15px;

    @media(max-width:768px) {
        text-align:center;
    }
`

const sectionSubTitle = css`
    font-size: 20px;
    color: #666666;
    line-height: 1.38105;
    font-weight: 300;
    letter-spacing: .011em;

    @media(max-width:768px) {
        text-align:center;
    }
`

const experiences = css`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    position: relative;
    overflow:hidden;
    padding-bottom:60px;
    margin-top:400px;

    &::before {
        transform: rotate(45deg);
        content: "";
        position: absolute;
        left: -700px;
        bottom: -543px;
        width: 1046px;
        height: 1046px;
        box-shadow: 0 0 5px rgba(0,0,0,.1);
        z-index: -10;
        background-color: #fdfdfd;
    }

    &::after {
        transform: rotate(45deg);
        content: "";
        position: absolute;
        right: -523px;
        top: -545px;
        width: 1046px;
        height: 1046px;
        box-shadow: 0 0 5px rgba(0,0,0,.1);
        z-index: -10;
        background-color: #fdfdfd;
    }
`

const expItems = css`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    width:100%;
    max-width:1150px;
    margin-top:60px;
    position: relative;

    @media(max-width:768px) {
        flex-direction:column;
    }
`

const expItem = css`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const expItemTitle = css`
    margin: -15px 0 5px;
    font-size: 16px;
    font-weight: 700;
    color: #b91313;
`

const bannerButton = css`
    display:flex;
    flex-direction:row;
    background:#000000;
    border-radius:50px;
    width:280px;
    height:80px;
    margin:15px;
    color:#FFFFFF;
    align-items:center;
    justify-content:space-between;
    cursor:pointer;
    transition: all 0.3s ease-in;

    &:hover {
        box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.4);
    }
`

const buttonIcon = css`
    border-radius:50%;
    height:60px;
    width:60px;
    border:2px solid #FFFFFF;
    margin:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const buttonContent = css`
    display:flex;
    flex-direction:column;
    flex-grow:1;
`

const buttonSubTitle = css`
    font-size:12px;
`

const buttonTitle = css`
    font-weight: 700;
    font-size: 20px;
`

const buttonQR = css`
    border-radius:5px;
    height:50px;
    width:50px;
    background:#FFFFFF;
    margin-right:20px;
`

const shareOptions = css`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    height:100px;
    border-top:2px dashed #EEEEEE;
    border-bottom:2px dashed #EEEEEE;
    width:600px;
    margin-top:30px;
`

const addOns = css`
    display:flex;
    flex-direction:row;
    height: 600px;
    position: relative;
    overflow: hidden;
    background: #f5f7fb;
    box-shadow: 0px 0px 45px rgba(0,0,0,.1);
    z-index: 10;
    justify-content:center;
    align-items:center;

    @media(max-width:768px) {
        height:auto;
    }
`

const addOnBlocksContainer = css`
    position:relative;
    width:60%;
    height:600px;

    @media(max-width:768px) {
        width:100%;
        height:300px;
    }
`

const addOnBlock = css`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    box-shadow: 
        8px 8px 20px rgba(0,0,0,.1), 
        -8px -8px 20px rgba(255,255,255, 1);
    position: absolute;
    background: #f5f7fb;

    &:nth-child(1) {
        top: 90px;
        left: 234px;
    }

    &:nth-child(2) {
        top: 400px;
        left: 100px;
    }

    &:nth-child(3) {
        top: 50px;
        left: 500px;
    }

    &:nth-child(4) {
        top: 120px;
        left: 680px;
    }

    &:nth-child(5) {
        top: 220px;
        left: 410px;
    }

    &:nth-child(6) {
        top: 365px;
        left: 705px;
    }
`

const addOnWrapper = css`
    width:100%;
    max-width:1024px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    position:relative;
    height:600px;
    padding:30px;
    box-sizing:border-box;
    

    @media(max-width:768px) {
        flex-direction:column;
        align-items:center;
        height:auto;
    }
`

const addOnContent = css`
    width:50%;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media(max-width:768px) {
        width:100%;
    }
`

const addOnImage = css`
    position:absolute;
    right:30px;
    top:50%;
    display:flex;
    flex-direction:row;
    justify-content:center;

    img {
        width:100%;
        max-width:400px;
        height:auto;
    }

    @media(max-width:768px) {
        width:100%;
        right:0;
    }
`

const devAndDesignWrapper = css`
    width:100%;
    max-width:1024px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
    position:relative;
    height:600px;

    @media(max-width:768px) {
        flex-direction:column-reverse;
        align-items:center;
        height:auto;
    }
`

const devAndDesign = css`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background: #fcfcfc;
    position:relative;
`

const devAndDesignImage = css`
    width:60%;
    height:600px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;

    @media(max-width:768px) {
        width:100%;
        height:auto;
        align-items:center;
    }

    img {
        width:100%;
        max-width:545px;
        height:auto;
    }
`

const devAndDesignContent = css`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:600px;
    width:40%;

    @media(max-width:768px) {
        width:100%;
        height:auto;
    }

`

const tabletFeature = css`
    height: 650px;
    background: #fff;
    box-shadow: 0px 0px 45px rgba(0,0,0,.1);
    z-index: 10;
    border-top: 1px solid #fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    overflow:hidden;
    padding:15px;

    @media(max-width:768px) {
        height:auto;
    }
`;

const tabletContent = css`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const tabletFeatureImage = css`
    margin-bottom:-20%;
    margin-top:30px;

    img {
        width:100%;
        max-width:900px;
        height:auto;
    }

    @media(max-width:768px) {
        margin-bottom:-40%;
    }
`

const footer = css`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    height: 200px;
    background: #222222;
    position: relative;
    z-index: 20;
`

const footerWrapper = css`
    display:flex;
    flex-direction:row;
    width:100%;
    max-width:1024px;
    justify-content:space-between;
    padding:15px;
    box-sizing:border-box;

    @media(max-width:768px) {
        flex-direction:column;
    }
`

const footerAbout = css`
    width:50%;
    display:flex;
    flex-direction:row;
    align-items:center;

    @media(max-width:768px) {
        width:100%;
        justify-content:center;
    }
`

const footerLogo = css`
    height:80px;
    width:80px;
    background:#FFFFFF;
    border-radius:5px;
`

const footerName = css`
    font-size:2em;
    color:#FFFFFF;
    margin-left:15px;
`

const footerContent = css`
    display:flex;
    flex-direction:column;
    align-items:flex-end;

    span {
        color:#AAAAAA;
        font-size:12px;
        margin-top:5px;
    }

    @media(max-width:768px) {
        margin-top:15px;
        align-items:center;
    }
`

const footerSocial = css`
    display:flex;
    flex-direction:row;

    a {
        margin-left:10px;
    }
`

export default {
    container,
    banner,
    bannerHeader,
    bannerFooter,
    nav,
    navItem,
    bannerContainer,
    bannerTitle,
    bannerSubTitle,
    bannerOptions,
    bannerHeaderImgWrapper,
    bannerHeaderImg,
    bannerFooterImg,
    darkMode,
    darkModeWrapper,
    darkModeContent,
    darkModeImage,
    sectionTitleDark,
    sectionSubTitleDark,
    sectionTitle,
    sectionSubTitle,
    experiences,
    expItems,
    expItem,
    expItemTitle,
    bannerButton,
    buttonIcon,
    buttonContent,
    buttonSubTitle,
    buttonTitle,
    buttonQR,
    shareOptions,
    addOns,
    addOnBlocksContainer,
    addOnBlock,
    addOnWrapper,
    addOnContent,
    addOnImage,
    devAndDesign,
    devAndDesignWrapper,
    devAndDesignImage,
    devAndDesignContent,
    tabletFeature,
    tabletContent,
    tabletFeatureImage,
    footer,
    footerWrapper,
    footerAbout,
    footerLogo,
    footerName,
    footerContent,
    footerSocial
}