import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D1B3D] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">☁️ Sugar Cloud Scents</h3>
            <p className="text-[#C39BD3] text-sm leading-relaxed">
              Luxe Roll-On Perfume Oil Dupes
              <br />
              Oil-Concentrated · Long-Lasting
            </p>
          </div>

          {/* Col 2: Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#C39BD3] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/products"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Shop All Scents
              </Link>
              <Link
                href="/about"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Col 3: Social + Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#C39BD3] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com/sugarcloudscents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2"
              >
                <span>📸</span>
                @sugarcloudscents
              </a>
              <a
                href="mailto:hello@sugarcloudscents.com"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © 2026 Sugar Cloud Scents · La Quinta, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
