export default function Footer() {
  return (
    <footer className="border-t-[3px] border-[#111111] py-6 md:py-8 mt-8 bg-[#86A789]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#111111] font-bold text-sm md:text-base font-heading tracking-tight px-4">
          Designed and Built with Curiosity, Consistency and Countless Cups of Coffee ☕.
        </p>
        <div className="mt-2 md:mt-3 text-xs md:text-sm text-[#2D2D2D] font-medium font-sans">
          {/* © {new Date().getFullYear()} Swapnil. All rights reserved. */}
          @swapnil. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
