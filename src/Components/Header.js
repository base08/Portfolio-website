import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <div className="Header-contents">
        <Link to="/">
          <svg
            className="Logo"
            width="145"
            height="60"
            viewBox="0 0 145 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.4232 40.1478C15.6533 41.7005 13.1642 42.4768 10.0391 42.4768C6.85867 42.4768 4.36964 41.7005 2.62731 40.1478C0.884989 38.6229 0 36.2384 0 33.0221V18.3271H5.17166V33.0221C5.17166 33.6598 5.22697 34.2975 5.33759 34.9075C5.44822 35.5175 5.66946 36.072 6.02899 36.5434C6.38852 37.0147 6.85867 37.4029 7.49475 37.7079C8.13084 38.0129 8.96052 38.1515 10.0114 38.1515C11.8644 38.1515 13.1366 37.7356 13.828 36.9038C14.5194 36.072 14.8789 34.7689 14.8789 33.0221V18.3271H20.0505V33.0221C20.1059 36.2107 19.2209 38.5951 17.4232 40.1478Z" />
            <path d="M38.5247 41.7837C37.3908 42.255 36.2569 42.5046 35.123 42.5046C33.3253 42.5046 31.6936 42.1996 30.2555 41.5619C28.8174 40.9242 27.6006 40.0646 26.605 38.9556C25.6093 37.8465 24.8626 36.5434 24.3372 35.0739C23.8117 33.5766 23.5352 31.9685 23.5352 30.2495C23.5352 28.475 23.8117 26.8391 24.3372 25.3419C24.8626 23.8447 25.637 22.5138 26.605 21.377C27.6006 20.2402 28.8174 19.3807 30.2555 18.743C31.6936 18.1053 33.3253 17.7726 35.123 17.7726C36.3398 17.7726 37.5014 17.9667 38.6353 18.3271C39.7692 18.6876 40.7924 19.2144 41.7051 19.9352C42.6177 20.6284 43.3644 21.5157 43.9729 22.5415C44.5536 23.5674 44.9408 24.7596 45.0515 26.1182H40.101C39.7968 24.7874 39.1884 23.7892 38.3311 23.1515C37.4461 22.4861 36.3952 22.1534 35.123 22.1534C33.9614 22.1534 32.9658 22.3752 32.1638 22.8188C31.3618 23.2624 30.698 23.8724 30.1726 24.6487C29.6748 25.3974 29.2876 26.2846 29.0663 27.255C28.8451 28.2254 28.7068 29.2236 28.7068 30.2772C28.7068 31.2754 28.8174 32.2458 29.0663 33.1608C29.2876 34.1035 29.6748 34.9352 30.1726 35.6839C30.6704 36.4325 31.3341 37.0425 32.1638 37.4861C32.9658 37.9297 33.9614 38.1515 35.123 38.1515C36.8376 38.1515 38.1651 37.7079 39.1054 36.8484C40.0457 35.9889 40.5989 34.7134 40.7371 33.0498H35.5102V29.1681H45.411V41.95H42.1199L41.5945 39.2606C40.6542 40.4805 39.6309 41.3123 38.5247 41.7837Z" />
            <path d="M49.366 25.3419C49.8915 23.8447 50.6658 22.5138 51.6338 21.377C52.6294 20.2402 53.8462 19.3807 55.2844 18.743C56.7225 18.1053 58.3542 17.7726 60.1518 17.7726C61.9771 17.7726 63.6088 18.1053 65.0469 18.743C66.485 19.3807 67.6742 20.268 68.6698 21.377C69.6654 22.5138 70.4121 23.8169 70.9376 25.3419C71.4631 26.8669 71.7396 28.5027 71.7396 30.2495C71.7396 31.9685 71.4631 33.5766 70.9376 35.0739C70.4121 36.5711 69.6378 37.8465 68.6698 38.9556C67.6742 40.0646 66.4573 40.9242 65.0469 41.5619C63.6088 42.1996 61.9771 42.5046 60.1518 42.5046C58.3542 42.5046 56.7225 42.1996 55.2844 41.5619C53.8462 40.9242 52.6294 40.0646 51.6338 38.9556C50.6382 37.8465 49.8915 36.5434 49.366 35.0739C48.8405 33.5766 48.564 31.9685 48.564 30.2495C48.5916 28.475 48.8405 26.8391 49.366 25.3419ZM54.1228 33.133C54.3441 34.0757 54.7312 34.9075 55.229 35.6561C55.7268 36.4047 56.3906 37.0147 57.2203 37.4584C58.0223 37.902 59.0179 38.1238 60.1795 38.1238C61.341 38.1238 62.3366 37.902 63.1386 37.4584C63.9407 37.0147 64.6044 36.4047 65.1299 35.6561C65.6277 34.9075 66.0149 34.0757 66.2361 33.133C66.4573 32.1903 66.5956 31.2199 66.5956 30.2495C66.5956 29.2236 66.485 28.1977 66.2361 27.2273C66.0149 26.2569 65.6277 25.3974 65.1299 24.621C64.6321 23.8724 63.9683 23.2624 63.1386 22.7911C62.3366 22.3474 61.341 22.1256 60.1795 22.1256C59.0179 22.1256 58.0223 22.3474 57.2203 22.7911C56.4183 23.2347 55.7545 23.8447 55.229 24.621C54.7312 25.3696 54.3441 26.2569 54.1228 27.2273C53.9016 28.1977 53.7633 29.1959 53.7633 30.2495C53.7633 31.2476 53.8739 32.1903 54.1228 33.133Z" />
            <path d="M110.181 17.8003V27.061H119.944V17.8003H125.254V41.95H119.944V31.5249H110.181V41.95H104.871V17.8003H110.181Z" />
            <path d="M115.076 60C98.5658 60 85.1527 46.5527 85.1527 30C85.1527 13.4473 98.5658 0 115.076 0C131.587 0 145 13.4473 145 30C145 46.5527 131.559 60 115.076 60ZM115.076 4.18669C100.861 4.18669 89.3288 15.7763 89.3288 30C89.3288 44.2237 100.889 55.8133 115.076 55.8133C129.264 55.8133 140.824 44.2237 140.824 30C140.824 15.7763 129.264 4.18669 115.076 4.18669Z" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
