export function PartnerLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      <div className="text-4xl font-light text-gray-400">«</div>

      {/* Logo 1 - R in circle */}
      <div className="flex size-12 items-center justify-center">
        <div className="flex size-10 items-center justify-center rounded-full border-2 border-black">
          <span className="font-bold">R</span>
        </div>
      </div>

      {/* Logo 2 - Discord-like */}
      <div className="flex size-12 items-center justify-center">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
          <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.885-.608 1.28a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.28.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.49a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"></path>
        </svg>
      </div>

      {/* Logo 3 - SA */}
      <div className="flex size-12 items-center justify-center">
        <span className="font-serif text-2xl">SA</span>
      </div>

      {/* Logo 4 - Abstract shape */}
      <div className="flex size-12 items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          width="36"
          height="36"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
        </svg>
      </div>

      {/* Logo 5 - A shape */}
      <div className="flex size-12 items-center justify-center">
        <span className="relative text-2xl font-bold">
          A<span className="absolute inset-x-0 top-1/2 h-0.5 bg-red-500"></span>
        </span>
      </div>

      {/* Logo 6 - Abstract curved shape */}
      <div className="flex size-12 items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          width="36"
          height="36"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      </div>

      <div className="text-4xl font-light text-gray-400">»</div>
    </div>
  );
}
