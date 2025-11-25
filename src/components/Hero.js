import { heroData, companyInfo } from '../data/content';

export function Hero() {
    return `
    <div id="top"></div>
    <section class="relative h-[650px] flex items-center justify-center bg-cover bg-center" style="background-image: url('${heroData.bgImage}');">
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-6xl md:text-6xl font-bold mb-10 tracking-wider">${heroData.title}</h1>
        <b class="text-lg md:text-xl text-white/90 font-bold">${heroData.subtitle}</b>
      </div>
      
      <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#F4F3F1] rounded-full flex flex-col items-center justify-center z-20">
         <span class="text-[#B77449] font-bold text-3xl">${companyInfo.logoText}</span>
         <span class="text-[10px] text-gray-500 uppercase mt-1">${companyInfo.est}</span>
      </div>
    </section>
  `;
}
