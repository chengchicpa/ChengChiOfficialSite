export function AboutLayout({ title, subtitle, content, className = "" }) {
  return `
    <section class="py-20 ${className}">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-center gap-12">
        <div class="md:w-1/4">
          <span class="font-sans text-sm text-[#B77449] font-bold uppercase">${subtitle}</span>
          <h2 class="text-3xl font-bold mb-6">${title}</h2>
        </div>
        <div class="md:w-2/3 leading-loose space-y-6">
          ${content}
        </div>
      </div>
    </section>
  `;
}
