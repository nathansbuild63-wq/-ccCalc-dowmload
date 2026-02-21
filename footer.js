(function() {
    const footerHTML = `
    <div id="wave-wrap" style="width: 100%; position: relative; margin-top: 80px; overflow: hidden; line-height: 0;">
        <svg viewBox="0 24 150 28" preserveAspectRatio="none" style="width: 100%; height: 80px;">
            <defs>
                <path id="w-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="w-anim">
                <use href="#w-path" x="48" y="0" fill="rgba(0, 162, 255, 0.2)" />
                <use href="#w-path" x="48" y="3" fill="rgba(0, 162, 255, 0.4)" />
                <use href="#w-path" x="48" y="7" fill="#00a2ff" />
            </g>
        </svg>
        <div style="background: #00a2ff; color: #04080f; text-align: center; padding: 25px 0; font-family: 'Inter', sans-serif; font-weight: 800; font-size: 1rem; letter-spacing: 1px;">
            ©2026 ccNutch
        </div>
        <style>
            .w-anim > use { animation: wave-slide 20s cubic-bezier(.55,.5,.45,.5) infinite; }
            .w-anim > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
            .w-anim > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
            .w-anim > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
            @keyframes wave-slide {
                0% { transform: translate3d(-90px,0,0); }
                100% { transform: translate3d(85px,0,0); }
            }
        </style>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
