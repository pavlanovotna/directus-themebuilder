import * as shade from '@/resources/shade'

export default function Splash({ hex }: { hex: string }) {

    return (
        <div className="flex flex-col gap-3 mt-8 items-center font-bold">

            {/* Dynamic Directus Logo */}
            <div className='w-24 h-24 rounded-xl overflow-hidden relative'>
                <svg viewBox="0 0 1152 1152">
                    <rect width="1152" height="1152" fill={shade.parse(hex, 0.20)}></rect>
                    <path d="M1152 409.138C1148.61 406.92 1146.7 405.765 1146.7 405.765L6.87761e-07 958.424L-7.3277e-07 1152L506.681 1152C558.985 1126.93 614.88 1101.25 672.113 1074.95C839.401 998.085 1018.12 915.967 1152 828.591L1152 409.138Z" fill={shade.parse(hex, 0.10)}></path>
                    <path d="M1152 159.866C1130.19 146.319 1114.45 138.98 1114.45 138.98L-6.09246e-07 759.421L-3.66364e-07 1152L88.7501 1152C131.867 1108.8 194.289 1054.33 281.936 993.927C371.847 931.97 507.23 864.306 651.138 792.382C828.097 703.939 1017.95 609.052 1152 510.407L1152 159.866Z" fill={hex}></path>
                    <path d="M772.894 -0.000472457L-4.49523e-07 457.782L-5.22658e-07 953.071C22.142 919.082 94.6279 821.1 262.854 696.786C351.427 631.334 485.624 558.338 628.272 480.744C816.642 378.28 1019.75 267.8 1152 156.087L1152 -0.000477328L772.894 -0.000472457Z" fill={shade.parse(hex, -0.10)}></path>
                    <path d="M286.365 -0.000483108L-1.73191e-07 176.373L2.43255e-06 662.21C33.488 615.87 106.028 529.959 243.326 424.909C331.205 357.671 464.771 281.956 606.749 201.473C720.914 136.756 840.519 68.9554 946.182 -0.000479285L286.365 -0.000483108Z" fill={shade.parse(hex, -0.20)}></path>
                    <path d="M0.00195277 363.139C37.1564 313.499 107.096 233.66 228.181 137.623C281.94 94.9838 353.09 48.7594 432.872 9.43526e-06L0.00195595 0L0.00195277 363.139Z" fill={shade.parse(hex, -0.30)}></path>
                </svg>
                <svg width="192" height="40" className='absolute top-7 left-3' viewBox="0 0 192 40">
                    <path d="M52.7 25.24c-.31-.07-.56-.15-.8-.25-.16-.08-.3-.16-.42-.27a.32.32 0 01-.11-.28c.12-1.27-.01-2.4.1-3.65.51-5.12 3.73-3.5 6.62-4.33 1.65-.47 3.31-1.39 3.92-3.2.1-.3.01-.62-.2-.85a37.06 37.06 0 00-6.26-5.68A37.5 37.5 0 0028.93.37a.47.47 0 00-.34.72A14.02 14.02 0 0033 5.43c.32.2.19.63-.18.54a8.39 8.39 0 01-2.98-1.3.36.36 0 00-.34-.03l-1.69.68a.46.46 0 00-.12.78 14 14 0 0016.43 1.39c.32-.2.83.2.73.56-.17.57-.36 1.36-.56 2.43-1.3 6.53-5.02 6.03-9.63 4.38-9.2-3.34-14.43-.49-19.07-6.13-.33-.4-.9-.53-1.28-.2a4.36 4.36 0 00.44 6.97c.15.1.34.06.45-.07.29-.37.52-.6.82-.76.31-.16.47.3.2.53-.99.87-1.27 1.91-1.91 3.97-1.02 3.21-.59 6.5-5.32 7.36-2.5.13-2.46 1.83-3.37 4.36-1.06 3.06-2.44 4.4-5 7.08-.36.36-.39.95 0 1.28 1.02.87 2.08.92 3.15.48 2.66-1.12 4.71-4.56 6.64-6.79 2.15-2.48 7.31-1.42 11.21-3.85 2.1-1.29 3.37-2.94 2.97-5.4-.07-.4.39-.64.55-.27.31.7.52 1.44.6 2.2.03.21.2.36.41.35 4.22-.24 9.67 4.41 14.77 5.67.31.08.53-.28.36-.55a9.41 9.41 0 01-1.33-3.1c-.1-.39.48-.5.68-.14a9.42 9.42 0 007.56 4.84c1.24.1 2.6-.05 4.02-.48 1.7-.51 3.27-1.17 5.14-.81a5.3 5.3 0 013.5 2.15c1.13 1.66 3.53 2.1 4.81.36a.83.83 0 00.08-.82c-2.82-6.6-9.97-7.05-13.05-7.85z" fill="#fff"></path>
                </svg>
            </div>

            <p>Theme Builder</p>

            {/* Motto area with hyperlink to Directus */}
            <p className='text-sm italic text-neutral-400 font-mono max-w-[300px]'>
                Transform <a
                    href="https://directus.io"
                    style={{ color: hex }}
                    rel="noreferrer"
                    target="_blank"
                >
                    Directus
                </a> with a splash of color, streamlined for effortless use.
            </p>
        </div >
    )
}
