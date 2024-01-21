import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {AdditionalProps} from 'react-native-svg/lib/typescript/xml';

const xml = `
<svg width="73" height="76" viewBox="0 0 73 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_0_308)">
<rect x="2" y="1" width="69" height="69" rx="24" fill="white"/>
</g>
<path d="M60.0658 5C61.7266 6.04141 63.2157 7.27605 64.5209 8.69167C65.7896 10.0678 66.8846 11.615 67.7945 13.322L68.0315 13.776C69.9702 17.572 71.0001 21.7418 71.0001 30.6317V40.6031L70.9951 41.6475C70.9129 50.1667 69.8057 54.1397 67.7945 57.9128C66.0557 61.1748 63.6412 63.8532 60.6292 65.8697" stroke="#F1DE02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67 11.9175C65.962 10.2567 64.7314 8.76756 63.3205 7.46241C61.9488 6.19365 60.4067 5.09872 58.7053 4.18881L58.2528 3.95181C54.4693 2.01309 50.3132 0.983216 41.4525 0.983216H31.5139L30.4729 0.988152C21.9817 1.07035 18.0217 2.17757 14.261 4.18881C11.0098 5.9276 8.34013 8.34208 6.3303 11.354" stroke="#009639" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.47924 8.66272C7.21048 10.0344 6.11555 11.5765 5.20564 13.2778L4.96864 13.7304C3.02992 17.5139 2.00005 21.67 2.00005 30.5307V40.4693L2.00498 41.5103C2.08718 50.0015 3.1944 53.9615 5.20564 57.7221C6.94443 60.9734 9.75891 63.643 12.7709 65.6529" stroke="#F40000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99304 63.504C11.3647 64.7728 12.9068 65.8677 14.6082 66.7776L15.0607 67.0146C18.8442 68.9533 23.0003 69.9832 31.861 69.9832H41.7996L42.8406 69.9783C51.3318 69.8961 55.2918 68.7888 59.0525 66.7776C59.6314 66.468 60.1918 66.137 60.7334 65.785C63.2335 64.1601 65.1312 62.088 66.7832 59.6124" stroke="#FF8300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M67.7944 57.939C66.0556 61.1902 63.6411 63.8599 60.6292 65.8697" stroke="#FFCF08" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<mask id="mask0_0_308" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="29" y="39" width="15" height="16">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.0085 39.9896H43.8077V54.7887H29.0085V39.9896Z" fill="white"/>
</mask>
<g mask="url(#mask0_0_308)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.4083 51.9981C39.1355 51.9981 41.0169 50.2221 41.0169 47.6641V42.7803H31.7992V47.6641C31.7992 50.2221 33.6807 51.9981 36.4083 51.9981ZM36.4083 54.7888C32.2431 54.7888 29.0085 51.7444 29.0085 47.6641V39.9896H43.8077V47.6641C43.8077 51.7444 40.5731 54.7888 36.4083 54.7888Z" fill="#1D1D1B"/>
</g>
<mask id="mask1_0_308" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="29" y="16" width="15" height="15">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.0084 16.0997H43.8076V30.7718H29.0084V16.0997Z" fill="white"/>
</mask>
<g mask="url(#mask1_0_308)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.4078 18.8904C33.6806 18.8904 31.7991 20.6663 31.7991 23.2243V27.9811H41.0169V23.2243C41.0169 20.6663 39.1354 18.8904 36.4078 18.8904ZM36.4078 16.0997C40.573 16.0997 43.8076 19.1441 43.8076 23.2243V30.7718H29.0084V23.2243C29.0084 19.1441 32.243 16.0997 36.4078 16.0997Z" fill="#1D1D1B"/>
</g>
<mask id="mask2_0_308" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="17" y="27" width="15" height="16">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 27.9811H31.7992V42.7803H17V27.9811Z" fill="white"/>
</mask>
<g mask="url(#mask2_0_308)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7907 35.3809C19.7907 38.108 21.5667 39.9896 24.1246 39.9896H29.0085V30.7718H24.1246C21.5667 30.7718 19.7907 32.6533 19.7907 35.3809ZM17 35.3809C17 31.2156 20.0444 27.9811 24.1246 27.9811H31.7992V42.7803H24.1246C20.0444 42.7803 17 39.5457 17 35.3809Z" fill="#1D1D1B"/>
</g>
<mask id="mask3_0_308" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="41" y="27" width="15" height="16">
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.017 27.9811H55.8162V42.7802H41.017V27.9811Z" fill="white"/>
</mask>
<g mask="url(#mask3_0_308)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0256 35.3804C53.0256 32.6532 51.2495 30.7718 48.6915 30.7718H43.8078V39.9896H48.6915C51.2495 39.9896 53.0256 38.108 53.0256 35.3804ZM55.8162 35.3804C55.8162 39.5456 52.7718 42.7802 48.6915 42.7802H41.017V27.9811H48.6915C52.7718 27.9811 55.8162 31.2156 55.8162 35.3804Z" fill="#1D1D1B"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0255 35.3805C53.0255 32.6533 51.2495 30.7719 48.6915 30.7719H43.8077V39.9896H48.6915C51.2495 39.9896 53.0255 38.1081 53.0255 35.3805Z" fill="#F1DE02"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.4078 18.8904C33.6806 18.8904 31.7992 20.6664 31.7992 23.2244V27.9812H41.017V23.2244C41.017 20.6664 39.1354 18.8904 36.4078 18.8904Z" fill="#009639"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.4083 51.9981C39.1355 51.9981 41.017 50.2222 41.017 47.6642V42.7803H31.7992V47.6642C31.7992 50.2222 33.6807 51.9981 36.4083 51.9981Z" fill="#FF8300"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7906 35.381C19.7906 38.1081 21.5666 39.9896 24.1246 39.9896H29.0084V30.7719H24.1246C21.5666 30.7719 19.7906 32.6534 19.7906 35.381Z" fill="#F40000"/>
<defs>
<filter id="filter0_d_0_308" x="0" y="1" width="73" height="75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_308"/>
<feOffset dy="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.845109 0 0 0 0 0.845109 0 0 0 0 0.845109 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_308"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_308" result="shape"/>
</filter>
</defs>
</svg>

`;

const PortalImage = (props: AdditionalProps) => {
  return <SvgXml xml={xml} {...props} />;
};

export default PortalImage;
