/** Fixed atmospheric night-highway backdrop — decorative only, no interaction. */
export function AtmosphereBackground() {
  return (
    <div className="site-atmosphere" aria-hidden="true">
      <div className="site-atmosphere-sky" />
      <div className="site-atmosphere-stars site-atmosphere-stars-a" />
      <div className="site-atmosphere-stars site-atmosphere-stars-b" />
      <div className="site-atmosphere-stars site-atmosphere-stars-c" />
      <span className="site-atmosphere-shooting site-atmosphere-shooting-1" />
      <span className="site-atmosphere-shooting site-atmosphere-shooting-2" />
      <span className="site-atmosphere-shooting site-atmosphere-shooting-3" />
      <div className="site-atmosphere-moon" aria-hidden="true">
        <span className="site-atmosphere-moon-glow" />
        <span className="site-atmosphere-moon-disc" />
      </div>
      <div className="site-atmosphere-aurora" />
      <div className="site-atmosphere-glow site-atmosphere-glow-cyan" />
      <div className="site-atmosphere-glow site-atmosphere-glow-red" />
      <div className="site-atmosphere-glow site-atmosphere-glow-green" />
      <div className="site-atmosphere-glow site-atmosphere-glow-amber" />
      <div className="site-atmosphere-haze" />
      <div className="site-atmosphere-horizon" />

      <div className="site-atmosphere-river" aria-hidden="true">
        <div className="site-atmosphere-trees site-atmosphere-trees-l">
          <span /><span /><span /><span /><span /><span /><span /><span />
        </div>
        <div className="site-atmosphere-trees site-atmosphere-trees-r">
          <span /><span /><span /><span /><span /><span /><span /><span />
        </div>
        <div className="site-atmosphere-trees site-atmosphere-trees-bank-l">
          <span /><span /><span />
        </div>
        <div className="site-atmosphere-trees site-atmosphere-trees-bank-r">
          <span /><span /><span />
        </div>
      </div>

      <svg
        className="site-atmosphere-skyline"
        viewBox="0 0 1440 280"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="atm-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#243a62" />
            <stop offset="100%" stopColor="#15243f" />
          </linearGradient>
          <linearGradient id="atm-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f4d82" />
            <stop offset="60%" stopColor="#1c3158" />
            <stop offset="100%" stopColor="#121f38" />
          </linearGradient>
          <linearGradient id="atm-near" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a5f9a" />
            <stop offset="45%" stopColor="#243f6d" />
            <stop offset="100%" stopColor="#152848" />
          </linearGradient>
          <linearGradient id="atm-glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4d7ab8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#1a3358" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="atm-warm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe9a8" />
            <stop offset="100%" stopColor="#ffb347" />
          </linearGradient>
          <linearGradient id="atm-cool" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b8f7ff" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
          <filter id="atm-soft" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="0.4" />
          </filter>
        </defs>

        {/* Far skyline layer */}
        <g fill="url(#atm-far)" opacity="0.75">
          <rect x="0" y="150" width="70" height="130" />
          <rect x="70" y="120" width="55" height="160" />
          <rect x="125" y="140" width="40" height="140" />
          <polygon points="165,155 185,130 205,155 205,280 165,280" />
          <rect x="210" y="110" width="80" height="170" />
          <rect x="300" y="135" width="50" height="145" />
          <rect x="360" y="100" width="65" height="180" />
          <rect x="435" y="145" width="45" height="135" />
          <rect x="490" y="115" width="90" height="165" />
          <rect x="590" y="130" width="48" height="150" />
          <rect x="650" y="95" width="70" height="185" />
          <rect x="730" y="125" width="55" height="155" />
          <rect x="795" y="105" width="85" height="175" />
          <rect x="890" y="140" width="50" height="140" />
          <rect x="950" y="112" width="75" height="168" />
          <rect x="1035" y="130" width="60" height="150" />
          <rect x="1105" y="98" width="80" height="182" />
          <rect x="1195" y="135" width="55" height="145" />
          <rect x="1260" y="118" width="70" height="162" />
          <rect x="1340" y="140" width="100" height="140" />
        </g>

        {/* Mid buildings with variety */}
        <g fill="url(#atm-mid)">
          <rect x="30" y="165" width="58" height="115" rx="1" />
          <rect x="95" y="128" width="46" height="152" rx="1" />
          <rect x="95" y="118" width="16" height="12" />
          <rect x="150" y="158" width="38" height="122" rx="1" />
          <rect x="198" y="100" width="68" height="180" rx="1" />
          <rect x="210" y="86" width="44" height="16" rx="1" />
          <rect x="228" y="72" width="6" height="16" />
          <rect x="278" y="148" width="52" height="132" rx="1" />
          <rect x="340" y="88" width="42" height="192" rx="1" />
          <polygon points="340,88 361,62 382,88" />
          <rect x="392" y="132" width="88" height="148" rx="1" />
          <rect x="392" y="118" width="28" height="16" />
          <rect x="492" y="110" width="54" height="170" rx="1" />
          <rect x="556" y="155" width="40" height="125" rx="1" />
          <rect x="606" y="78" width="72" height="202" rx="1" />
          <rect x="628" y="58" width="8" height="22" />
          <rect x="688" y="140" width="48" height="140" rx="1" />
          <rect x="746" y="70" width="58" height="210" rx="1" />
          <rect x="754" y="52" width="42" height="20" rx="1" />
          <rect x="816" y="120" width="76" height="160" rx="1" />
          <rect x="902" y="145" width="42" height="135" rx="1" />
          <rect x="954" y="92" width="64" height="188" rx="1" />
          <polygon points="954,92 986,68 1018,92" />
          <rect x="1028" y="130" width="50" height="150" rx="1" />
          <rect x="1088" y="100" width="70" height="180" rx="1" />
          <rect x="1110" y="84" width="26" height="18" />
          <rect x="1168" y="148" width="46" height="132" rx="1" />
          <rect x="1224" y="82" width="62" height="198" rx="1" />
          <rect x="1248" y="64" width="6" height="20" />
          <rect x="1296" y="125" width="78" height="155" rx="1" />
          <rect x="1384" y="150" width="56" height="130" rx="1" />
        </g>

        {/* Near glass towers */}
        <g fill="url(#atm-near)">
          <rect x="220" y="118" width="36" height="162" rx="1" fill="url(#atm-glass)" />
          <rect x="620" y="95" width="40" height="185" rx="1" fill="url(#atm-glass)" />
          <rect x="760" y="88" width="34" height="192" rx="1" fill="url(#atm-glass)" />
          <rect x="970" y="108" width="38" height="172" rx="1" fill="url(#atm-glass)" />
          <rect x="1238" y="98" width="36" height="182" rx="1" fill="url(#atm-glass)" />
        </g>

        {/* Street glow under buildings */}
        <ellipse cx="720" cy="276" rx="620" ry="18" fill="rgba(0,229,255,0.12)" />

        {/* Warm + cool windows */}
        <g className="site-atmosphere-windows" filter="url(#atm-soft)">
          <g fill="url(#atm-warm)">
            <rect x="105" y="145" width="5" height="7" rx="0.5" />
            <rect x="118" y="145" width="5" height="7" rx="0.5" />
            <rect x="105" y="165" width="5" height="7" rx="0.5" />
            <rect x="118" y="180" width="5" height="7" rx="0.5" />
            <rect x="210" y="120" width="6" height="8" rx="0.5" />
            <rect x="226" y="120" width="6" height="8" rx="0.5" />
            <rect x="242" y="140" width="6" height="8" rx="0.5" />
            <rect x="210" y="160" width="6" height="8" rx="0.5" />
            <rect x="242" y="180" width="6" height="8" rx="0.5" />
            <rect x="410" y="155" width="6" height="8" rx="0.5" />
            <rect x="430" y="155" width="6" height="8" rx="0.5" />
            <rect x="450" y="175" width="6" height="8" rx="0.5" />
            <rect x="410" y="195" width="6" height="8" rx="0.5" />
            <rect x="510" y="130" width="5" height="7" rx="0.5" />
            <rect x="524" y="150" width="5" height="7" rx="0.5" />
            <rect x="510" y="170" width="5" height="7" rx="0.5" />
            <rect x="700" y="165" width="5" height="7" rx="0.5" />
            <rect x="714" y="185" width="5" height="7" rx="0.5" />
            <rect x="830" y="145" width="6" height="8" rx="0.5" />
            <rect x="850" y="145" width="6" height="8" rx="0.5" />
            <rect x="830" y="170" width="6" height="8" rx="0.5" />
            <rect x="870" y="190" width="6" height="8" rx="0.5" />
            <rect x="1105" y="130" width="6" height="8" rx="0.5" />
            <rect x="1125" y="150" width="6" height="8" rx="0.5" />
            <rect x="1105" y="175" width="6" height="8" rx="0.5" />
            <rect x="1125" y="200" width="6" height="8" rx="0.5" />
            <rect x="1310" y="150" width="6" height="8" rx="0.5" />
            <rect x="1330" y="170" width="6" height="8" rx="0.5" />
            <rect x="1350" y="150" width="6" height="8" rx="0.5" />
            <rect x="1310" y="195" width="6" height="8" rx="0.5" />
          </g>
          <g fill="url(#atm-cool)">
            <rect x="350" y="110" width="5" height="7" rx="0.5" />
            <rect x="364" y="110" width="5" height="7" rx="0.5" />
            <rect x="350" y="130" width="5" height="7" rx="0.5" />
            <rect x="364" y="150" width="5" height="7" rx="0.5" />
            <rect x="350" y="175" width="5" height="7" rx="0.5" />
            <rect x="620" y="110" width="6" height="8" rx="0.5" />
            <rect x="638" y="110" width="6" height="8" rx="0.5" />
            <rect x="656" y="130" width="6" height="8" rx="0.5" />
            <rect x="620" y="155" width="6" height="8" rx="0.5" />
            <rect x="656" y="180" width="6" height="8" rx="0.5" />
            <rect x="756" y="100" width="5" height="7" rx="0.5" />
            <rect x="772" y="100" width="5" height="7" rx="0.5" />
            <rect x="756" y="125" width="5" height="7" rx="0.5" />
            <rect x="772" y="150" width="5" height="7" rx="0.5" />
            <rect x="756" y="180" width="5" height="7" rx="0.5" />
            <rect x="968" y="120" width="6" height="8" rx="0.5" />
            <rect x="986" y="120" width="6" height="8" rx="0.5" />
            <rect x="968" y="145" width="6" height="8" rx="0.5" />
            <rect x="986" y="175" width="6" height="8" rx="0.5" />
            <rect x="1240" y="110" width="5" height="7" rx="0.5" />
            <rect x="1256" y="110" width="5" height="7" rx="0.5" />
            <rect x="1240" y="135" width="5" height="7" rx="0.5" />
            <rect x="1256" y="160" width="5" height="7" rx="0.5" />
            <rect x="1240" y="190" width="5" height="7" rx="0.5" />
          </g>
        </g>
      </svg>

      <div className="site-atmosphere-highway">
        <div className="site-atmosphere-road">
          <div className="site-atmosphere-asphalt" />
          <div className="site-atmosphere-shoulder site-atmosphere-shoulder-l" />
          <div className="site-atmosphere-shoulder site-atmosphere-shoulder-r" />
          <div className="site-atmosphere-centerline" />
          <div className="site-atmosphere-dashes site-atmosphere-dashes-l" />
          <div className="site-atmosphere-dashes site-atmosphere-dashes-r" />
          <div className="site-atmosphere-edge site-atmosphere-edge-l" />
          <div className="site-atmosphere-edge site-atmosphere-edge-r" />
        </div>

        {/* LKWs: rear view, driving toward horizon (not sideways) */}
        <div className="site-atmosphere-lkw site-atmosphere-lkw-1">
          <span className="site-atmosphere-lkw-cab" />
          <span className="site-atmosphere-lkw-body" />
          <span className="site-atmosphere-lkw-rear" />
        </div>
        <div className="site-atmosphere-lkw site-atmosphere-lkw-2">
          <span className="site-atmosphere-lkw-cab" />
          <span className="site-atmosphere-lkw-body" />
          <span className="site-atmosphere-lkw-rear" />
        </div>
        <div className="site-atmosphere-lkw site-atmosphere-lkw-3">
          <span className="site-atmosphere-lkw-cab" />
          <span className="site-atmosphere-lkw-body" />
          <span className="site-atmosphere-lkw-rear" />
        </div>
        <div className="site-atmosphere-lkw site-atmosphere-lkw-4">
          <span className="site-atmosphere-lkw-cab" />
          <span className="site-atmosphere-lkw-body" />
          <span className="site-atmosphere-lkw-rear" />
        </div>
        <div className="site-atmosphere-lkw site-atmosphere-lkw-5">
          <span className="site-atmosphere-lkw-cab" />
          <span className="site-atmosphere-lkw-body" />
          <span className="site-atmosphere-lkw-rear" />
        </div>
      </div>

      <div className="site-atmosphere-vignette" />
    </div>
  );
}
