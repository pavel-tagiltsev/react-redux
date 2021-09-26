import React from "react";
import styled from "styled-components";

const SpriteContainer = styled.svg`
    display: none;
`

const SvgSprite = () => {
    return (
        <SpriteContainer width="0" height="0">
            <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" id="download">
                <path d="M35.9712 11.3808C35.5114 8.64857 34.1585 6.15505 32.0895 4.2628C29.7905 2.15834 26.8018 1 23.6893 1C21.2842 1 18.941 1.6897 16.9338 2.98951C15.2626 4.06827 13.8744 5.52724 12.8929 7.24264C12.4684 7.16306 12.0263 7.11885 11.5842 7.11885C7.82624 7.11885 4.76681 10.1783 4.76681 13.9362C4.76681 14.4226 4.81986 14.8912 4.90829 15.351C2.47666 17.1195 1 19.9667 1 22.9996C1 25.4489 1.91075 27.8275 3.5731 29.7109C5.27966 31.6385 7.53444 32.7791 9.93954 32.9118C9.96607 32.9118 9.98376 32.9118 10.0103 32.9118H17.6146C18.2778 32.9118 18.8083 32.3812 18.8083 31.7181C18.8083 31.0549 18.2778 30.5243 17.6146 30.5243H10.0457C6.42916 30.3033 3.38742 26.8636 3.38742 22.9907C3.38742 20.4884 4.73144 18.154 6.8978 16.8896C7.40181 16.5978 7.61402 15.9877 7.41949 15.4394C7.24265 14.9619 7.15423 14.4579 7.15423 13.9186C7.15423 11.4781 9.14374 9.48858 11.5842 9.48858C12.1059 9.48858 12.6188 9.577 13.0962 9.75385C13.6798 9.96606 14.3253 9.7008 14.5906 9.14373C16.2441 5.63335 19.8164 3.36973 23.6981 3.36973C28.9151 3.36973 33.2213 7.27801 33.7164 12.4596C33.7695 12.999 34.1762 13.4322 34.7068 13.5207C38.6416 14.1927 41.6126 17.8268 41.6126 21.9739C41.6126 26.3685 38.1553 30.1883 33.8933 30.5155H27.3765C26.7133 30.5155 26.1828 31.046 26.1828 31.7092C26.1828 32.3724 26.7133 32.9029 27.3765 32.9029H33.9375C33.964 32.9029 33.9905 32.9029 34.0259 32.9029C36.7228 32.7084 39.2429 31.4705 41.1174 29.4014C42.9831 27.35 44 24.715 44 21.9739C43.9912 17.0134 40.6046 12.6011 35.9712 11.3808Z" fill="white"></path>
                <path d="M15.3422 36.6146C14.8735 37.0833 14.8735 37.8349 15.3422 38.3035L21.6644 44.6257C21.8855 44.8468 22.1949 44.9794 22.5044 44.9794C22.8139 44.9794 23.1234 44.8556 23.3444 44.6257L29.6667 38.3035C30.1353 37.8349 30.1353 37.0833 29.6667 36.6146C29.4368 36.3847 29.1273 36.2609 28.8267 36.2609C28.526 36.2609 28.2165 36.3759 27.9866 36.6146L23.6981 40.9031L23.6981 21.1937C23.6981 20.5305 23.1676 20 22.5044 20C21.8413 20 21.3107 20.5305 21.3107 21.1937L21.3107 40.9031L17.0222 36.6146C16.5624 36.146 15.8108 36.146 15.3422 36.6146Z" fill="white"></path>
            </symbol>
            <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" id="minus">
                <path d="M38.2943 18H27.7619H18.2381H7.70571C5.1181 18 3 20.1733 3 22.7619C3 25.3505 5.1181 27.5238 7.70571 27.5238H18.2381H27.7619H38.2943C40.8819 27.5238 43 25.3505 43 22.7619C43 20.1733 40.8819 18 38.2943 18Z" fill="white"></path>
            </symbol>
            <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" id="plus">
                <path d="M40.8292 20.2092H25.7906V5.17054C25.7906 4.48546 24.8604 3 22.9999 3C21.1395 3 20.2092 4.48555 20.2092 5.17054V20.2093H5.17054C4.48554 20.2092 3 21.1395 3 22.9998C3 24.8602 4.48554 25.7906 5.17054 25.7906H20.2093V40.8293C20.2093 41.5142 21.1395 42.9999 23 42.9999C24.8605 42.9999 25.7907 41.5142 25.7907 40.8293V25.7906H40.8295C41.5144 25.7906 43 24.8604 43 22.9998C43 21.1393 41.5142 20.2092 40.8292 20.2092Z" fill="white"></path>
            </symbol>
            <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" id="reset">
                <path d="M42.5056 5.1609C42.176 4.83143 41.7852 4.66615 41.3337 4.66615C40.8824 4.66615 40.4922 4.83143 40.1619 5.1609L36.7767 8.52077C34.9191 6.76709 32.7921 5.40827 30.3964 4.44495C28.001 3.48155 25.535 2.99994 23.0002 2.99994C18.2256 2.99994 14.0592 4.44505 10.5 7.3359C6.94074 10.2264 4.59708 13.9977 3.46858 18.6508V18.833C3.46858 19.0587 3.55095 19.2541 3.71595 19.4189C3.88096 19.5839 4.07616 19.6662 4.30182 19.6662H9.48406C9.86615 19.6662 10.1264 19.4665 10.2654 19.0674C10.9945 17.3314 11.4544 16.3158 11.6456 16.0206C12.8607 14.0414 14.4753 12.4875 16.4893 11.359C18.5035 10.2306 20.6736 9.66615 22.9998 9.66615C26.4897 9.66615 29.5191 10.8555 32.0888 13.234L28.4944 16.8276C28.1654 17.1575 28 17.5483 28 17.9998C28 18.4511 28.1653 18.8418 28.4944 19.1716C28.8247 19.5015 29.2155 19.6663 29.6669 19.6663H41.3337C41.7851 19.6663 42.1759 19.5015 42.5056 19.1716C42.8352 18.8418 43 18.4512 43 17.9998V6.33282C43 5.8814 42.8362 5.49091 42.5056 5.1609Z" fill="white"></path>
                <path d="M41.5154 26.3334H36.5154C36.1334 26.3334 35.873 26.5329 35.7344 26.9323C35.0056 28.6685 34.5452 29.6836 34.3545 29.9789C33.1389 31.9576 31.5243 33.5121 29.5108 34.6405C27.4965 35.7693 25.3265 36.3331 23.0001 36.3331C21.3162 36.3331 19.6928 36.0208 18.1305 35.396C16.568 34.7705 15.1702 33.8849 13.9377 32.739L17.5056 29.1714C17.8353 28.8418 18.0003 28.4507 18.0003 27.9996C18.0003 27.5482 17.8353 27.1571 17.5056 26.8277C17.1757 26.4975 16.7852 26.3323 16.3338 26.3323H4.66685C4.21515 26.3323 3.82448 26.4975 3.49465 26.8277C3.16482 27.1572 3 27.5483 3 27.9996L3 39.6666C3 40.1176 3.16482 40.5087 3.49474 40.8384C3.82485 41.1677 4.21552 41.3335 4.66694 41.3335C5.11826 41.3335 5.50875 41.1678 5.83876 40.8384L9.19808 37.4787C11.0558 39.2492 13.1697 40.6124 15.5396 41.5672C17.9094 42.5224 20.3617 42.9994 22.8962 42.9994C27.6535 42.9994 31.8027 41.5541 35.3443 38.6636C38.886 35.7732 41.2124 32.0011 42.324 27.3485C42.3414 27.3138 42.3496 27.253 42.3496 27.1665C42.3496 26.9405 42.2669 26.7458 42.102 26.5803C41.9369 26.4162 41.7414 26.3334 41.5154 26.3334Z" fill="white"></path>
            </symbol>
            <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" id="upload">
                <path d="M35.9712 13.3808C35.5114 10.6486 34.1585 8.15505 32.0895 6.2628C29.7905 4.15834 26.8018 3 23.6893 3C21.2842 3 18.941 3.6897 16.9338 4.98951C15.2626 6.06827 13.8744 7.52724 12.8929 9.24264C12.4684 9.16306 12.0263 9.11885 11.5842 9.11885C7.82624 9.11885 4.76681 12.1783 4.76681 15.9362C4.76681 16.4226 4.81986 16.8912 4.90829 17.351C2.47666 19.1195 1 21.9667 1 24.9996C1 27.4489 1.91075 29.8275 3.5731 31.7109C5.27966 33.6385 7.53444 34.7791 9.93954 34.9118C9.96607 34.9118 9.98376 34.9118 10.0103 34.9118H17.6146C18.2778 34.9118 18.8083 34.3812 18.8083 33.7181C18.8083 33.0549 18.2778 32.5243 17.6146 32.5243H10.0457C6.42916 32.3033 3.38742 28.8636 3.38742 24.9907C3.38742 22.4884 4.73144 20.154 6.8978 18.8896C7.40181 18.5978 7.61402 17.9877 7.41949 17.4394C7.24265 16.9619 7.15423 16.4579 7.15423 15.9186C7.15423 13.4781 9.14374 11.4886 11.5842 11.4886C12.1059 11.4886 12.6188 11.577 13.0962 11.7539C13.6798 11.9661 14.3253 11.7008 14.5906 11.1437C16.2441 7.63335 19.8164 5.36973 23.6981 5.36973C28.9151 5.36973 33.2213 9.27801 33.7164 14.4596C33.7695 14.999 34.1762 15.4322 34.7068 15.5207C38.6416 16.1927 41.6126 19.8268 41.6126 23.9739C41.6126 28.3685 38.1553 32.1883 33.8933 32.5155H27.3765C26.7133 32.5155 26.1828 33.046 26.1828 33.7092C26.1828 34.3724 26.7133 34.9029 27.3765 34.9029H33.9375C33.964 34.9029 33.9905 34.9029 34.0259 34.9029C36.7228 34.7084 39.2429 33.4705 41.1174 31.4014C42.9831 29.35 44 26.715 44 23.9739C43.9912 19.0134 40.6046 14.6011 35.9712 13.3808Z" fill="white"></path>
                <path d="M29.6667 26.1314C30.1353 25.6628 30.1353 24.9112 29.6667 24.4425L23.3444 18.1203C23.1234 17.8992 22.8139 17.7666 22.5044 17.7666C22.1949 17.7666 21.8855 17.8904 21.6644 18.1203L15.3422 24.4425C14.8735 24.9112 14.8735 25.6628 15.3422 26.1314C15.5721 26.3613 15.8816 26.4851 16.1822 26.4851C16.4828 26.4851 16.7923 26.3701 17.0222 26.1314L21.3107 21.8429V41.5523C21.3107 42.2155 21.8413 42.746 22.5044 42.746C23.1676 42.746 23.6981 42.2155 23.6981 41.5523V21.8429L27.9866 26.1314C28.4464 26.6 29.198 26.6 29.6667 26.1314Z" fill="white"></path>
            </symbol>
        </SpriteContainer>
    )
}

export default SvgSprite;