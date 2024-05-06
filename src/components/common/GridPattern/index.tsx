import type { FC } from 'react';
import { cn } from '@/lib/utils';

interface GridPatternProps {
  className?: string;
  viewBox: string;
  translate: string;
  scale: string;
  radial: string;
};

const GridPattern: FC<GridPatternProps> = ({
  className,
  viewBox,
  translate,
  scale,
  radial,
}) => {
  return (
    <svg
      className={cn(
        "absolute w-full h-auto object-cover object-center inset-0 z-10",
        className
      )}
      width="100%"
      height="100%"
      viewBox={cn("0, 0", viewBox)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_227_7371)">
        <path
          opacity="0.1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.4878 244.762V271.863H-4V272.637H23.4878V299.738H-4V300.512H23.4878V328H24.2622V300.512H51.3628V328H52.1372V300.512H79.2379V328H80.0122V300.512H107.113V328H107.887V300.512H134.988V328H135.762V300.512H162.863V328H163.637V300.512H190.738V328H191.512V300.512H218.613V328H219.387V300.512H246.488V328H247.262V300.512H274.363V328H275.137V300.512H302.238V328H303.012V300.512H330.113V328H330.887V300.512H357.988V328H358.762V300.512H385.863V328H386.637V300.512H413.738V328H414.512V300.512H442V299.738H414.512V272.637H442V271.863H414.512V244.762H442V243.988H414.512V216.887H442V216.113H414.512V189.012H442V188.238H414.512V161.137H442V160.363H414.512V133.262H442V132.488H414.512V105.387H442V104.613H414.512V77.5122H442V76.7379H414.512V49.6372H442V48.8629H414.512V21.7622H442V20.9879H414.512V-6.11284H442V-6.88715H414.512V-33.9878H442V-34.7621H414.512V-61.8628H442V-62.6372H414.512V-89.7378H442V-90.5122H414.512V-118H413.738V-90.5122H386.637V-118H385.863V-90.5122H358.762V-118H357.988V-90.5122H330.887V-118H330.113V-90.5122H303.012V-118H302.238V-90.5122H275.137V-118H274.363V-90.5122H247.262V-118H246.488V-90.5122H219.387V-118H218.613V-90.5122H191.512V-118H190.738V-90.5122H163.637V-118H162.863V-90.5122H135.762V-118H134.988V-90.5122H107.887V-118H107.113V-90.5122H80.0122V-118H79.2379V-90.5122H52.1372V-118H51.3628V-90.5122H24.2622V-118H23.4878V-90.5122H-4V-89.7379H23.4878V-62.6372H-4V-61.8629H23.4878V-34.7622H-4V-33.9879H23.4878V-6.88717H-4V-6.11287H23.4878V20.9878H-4V21.7621H23.4878V48.8628H-4V49.6371H23.4878V76.7378H-4V77.5121H23.4878V104.613H-4V105.387H23.4878V132.488H-4V133.262H23.4878V160.363H-4V161.137H23.4878V188.238H-4V189.012H23.4878V216.113H-4V216.887H23.4878V243.988H-4V244.762H23.4878ZM413.738 299.738V272.637H386.637V299.738H413.738ZM385.863 299.738V272.637H358.762V299.738H385.863ZM357.988 299.738V272.637H330.887V299.738H357.988ZM330.113 299.738V272.637H303.012V299.738H330.113ZM302.238 299.738V272.637H275.137V299.738H302.238ZM274.363 299.738V272.637H247.262V299.738H274.363ZM246.488 299.738V272.637H219.387V299.738H246.488ZM218.613 299.738V272.637H191.512V299.738H218.613ZM190.738 299.738V272.637H163.637V299.738H190.738ZM162.863 299.738V272.637H135.762V299.738H162.863ZM134.988 299.738V272.637H107.887V299.738H134.988ZM107.113 299.738V272.637H80.0122V299.738H107.113ZM79.2379 299.738V272.637H52.1372V299.738H79.2379ZM51.3628 299.738V272.637H24.2622V299.738H51.3628ZM51.3628 271.863H24.2622V244.762H51.3628V271.863ZM79.2379 271.863H52.1372V244.762H79.2379V271.863ZM107.113 271.863H80.0122V244.762H107.113V271.863ZM134.988 271.863H107.887V244.762H134.988V271.863ZM162.863 271.863H135.762V244.762H162.863V271.863ZM190.738 271.863H163.637V244.762H190.738V271.863ZM218.613 271.863H191.512V244.762H218.613V271.863ZM246.488 271.863H219.387V244.762H246.488V271.863ZM274.363 271.863H247.262V244.762H274.363V271.863ZM302.238 271.863H275.137V244.762H302.238V271.863ZM330.113 271.863H303.012V244.762H330.113V271.863ZM357.988 271.863H330.887V244.762H357.988V271.863ZM385.863 271.863H358.762V244.762H385.863V271.863ZM413.738 271.863H386.637V244.762H413.738V271.863ZM413.738 -89.7378H386.637V-62.6372H413.738V-89.7378ZM413.738 -61.8629H386.637V-34.7622H413.738V-61.8629ZM413.738 -33.9879H386.637V-6.88716H413.738V-33.9879ZM413.738 -6.11286H386.637V20.9878H413.738V-6.11286ZM413.738 21.7621H386.637V48.8628H413.738V21.7621ZM413.738 49.6371H386.637V76.7378H413.738V49.6371ZM413.738 77.5121H386.637V104.613H413.738V77.5121ZM413.738 105.387H386.637V132.488H413.738V105.387ZM413.738 133.262H386.637V160.363H413.738V133.262ZM413.738 161.137H386.637V188.238H413.738V161.137ZM413.738 189.012H386.637V216.113H413.738V189.012ZM413.738 216.887H386.637V243.988H413.738V216.887ZM385.863 216.887V243.988H358.762V216.887H385.863ZM385.863 189.012V216.113H358.762V189.012H385.863ZM385.863 161.137V188.238H358.762V161.137H385.863ZM385.863 133.262V160.363H358.762V133.262H385.863ZM385.863 105.387V132.488H358.762V105.387H385.863ZM385.863 77.5121V104.613H358.762V77.5121H385.863ZM385.863 49.6371V76.7378H358.762V49.6371H385.863ZM385.863 21.7621V48.8628H358.762V21.7621H385.863ZM385.863 -6.11286V20.9878H358.762V-6.11286H385.863ZM385.863 -33.9879V-6.88716H358.762V-33.9879H385.863ZM385.863 -61.8629V-34.7622H358.762V-61.8629H385.863ZM385.863 -89.7378V-62.6372H358.762V-89.7378H385.863ZM24.2622 243.988H51.3628V216.887H24.2622V243.988ZM52.1372 243.988H79.2379V216.887H52.1372V243.988ZM80.0122 243.988H107.113V216.887H80.0122V243.988ZM107.887 243.988H134.988V216.887H107.887V243.988ZM135.762 243.988H162.863V216.887H135.762V243.988ZM163.637 243.988H190.738V216.887H163.637V243.988ZM191.512 243.988H218.613V216.887H191.512V243.988ZM219.387 243.988H246.488V216.887H219.387V243.988ZM247.262 243.988H274.363V216.887H247.262V243.988ZM275.137 243.988H302.238V216.887H275.137V243.988ZM303.012 243.988H330.113V216.887H303.012V243.988ZM330.887 243.988H357.988V216.887H330.887V243.988ZM357.988 189.012V216.113H330.887V189.012H357.988ZM357.988 161.137V188.238H330.887V161.137H357.988ZM357.988 133.262V160.363H330.887V133.262H357.988ZM357.988 105.387V132.488H330.887V105.387H357.988ZM357.988 77.5121V104.613H330.887V77.5121H357.988ZM357.988 49.6371V76.7378H330.887V49.6371H357.988ZM357.988 21.7621V48.8628H330.887V21.7621H357.988ZM357.988 -6.11286V20.9878H330.887V-6.11286H357.988ZM357.988 -33.9879V-6.88716H330.887V-33.9879H357.988ZM357.988 -61.8629V-34.7622H330.887V-61.8629H357.988ZM357.988 -89.7379V-62.6372H330.887V-89.7379H357.988ZM24.2622 216.113H51.3628V189.012H24.2622V216.113ZM52.1372 216.113H79.2379V189.012H52.1372V216.113ZM80.0122 216.113H107.113V189.012H80.0122V216.113ZM107.887 216.113H134.988V189.012H107.887V216.113ZM135.762 216.113H162.863V189.012H135.762V216.113ZM163.637 216.113H190.738V189.012H163.637V216.113ZM191.512 216.113H218.613V189.012H191.512V216.113ZM219.387 216.113H246.488V189.012H219.387V216.113ZM247.262 216.113H274.363V189.012H247.262V216.113ZM275.137 216.113H302.238V189.012H275.137V216.113ZM303.012 216.113H330.113V189.012H303.012V216.113ZM330.113 161.137V188.238H303.012V161.137H330.113ZM330.113 133.262V160.363H303.012V133.262H330.113ZM330.113 105.387V132.488H303.012V105.387H330.113ZM330.113 77.5121V104.613H303.012V77.5121H330.113ZM330.113 49.6371V76.7378H303.012V49.6371H330.113ZM330.113 21.7621V48.8628H303.012V21.7621H330.113ZM330.113 -6.11286V20.9878H303.012V-6.11286H330.113ZM330.113 -33.9879V-6.88716H303.012V-33.9879H330.113ZM330.113 -61.8629V-34.7622H303.012V-61.8629H330.113ZM330.113 -89.7379V-62.6372H303.012V-89.7379H330.113ZM24.2622 188.238H51.3628V161.137H24.2622V188.238ZM52.1372 188.238H79.2379V161.137H52.1372V188.238ZM80.0122 188.238H107.113V161.137H80.0122V188.238ZM107.887 188.238H134.988V161.137H107.887V188.238ZM135.762 188.238H162.863V161.137H135.762V188.238ZM163.637 188.238H190.738V161.137H163.637V188.238ZM191.512 188.238H218.613V161.137H191.512V188.238ZM219.387 188.238H246.488V161.137H219.387V188.238ZM247.262 188.238H274.363V161.137H247.262V188.238ZM275.137 188.238H302.238V161.137H275.137V188.238ZM302.238 133.262V160.363H275.137V133.262H302.238ZM302.238 105.387V132.488H275.137V105.387H302.238ZM302.238 77.5121V104.613H275.137V77.5121H302.238ZM302.238 49.6371V76.7378H275.137V49.6371H302.238ZM302.238 21.7621V48.8628H275.137V21.7621H302.238ZM302.238 -6.11286V20.9878H275.137V-6.11286H302.238ZM302.238 -33.9879V-6.88716H275.137V-33.9879H302.238ZM302.238 -61.8629V-34.7622H275.137V-61.8629H302.238ZM302.238 -89.7379V-62.6372H275.137V-89.7379H302.238ZM24.2622 160.363H51.3628V133.262H24.2622V160.363ZM52.1372 160.363H79.2379V133.262H52.1372V160.363ZM80.0122 160.363H107.113V133.262H80.0122V160.363ZM107.887 160.363H134.988V133.262H107.887V160.363ZM135.762 160.363H162.863V133.262H135.762V160.363ZM163.637 160.363H190.738V133.262H163.637V160.363ZM191.512 160.363H218.613V133.262H191.512V160.363ZM219.387 160.363H246.488V133.262H219.387V160.363ZM247.262 160.363H274.363V133.262H247.262V160.363ZM274.363 105.387V132.488H247.262V105.387H274.363ZM274.363 77.5121V104.613H247.262V77.5121H274.363ZM274.363 49.6371V76.7378H247.262V49.6371H274.363ZM274.363 21.7621V48.8628H247.262V21.7621H274.363ZM274.363 -6.11286V20.9878H247.262V-6.11286H274.363ZM274.363 -33.9879V-6.88716H247.262V-33.9879H274.363ZM274.363 -61.8629V-34.7622H247.262V-61.8629H274.363ZM274.363 -89.7379V-62.6372H247.262V-89.7379H274.363ZM24.2622 132.488H51.3628V105.387H24.2622V132.488ZM52.1372 132.488H79.2379V105.387H52.1372V132.488ZM80.0122 132.488H107.113V105.387H80.0122V132.488ZM107.887 132.488H134.988V105.387H107.887V132.488ZM135.762 132.488H162.863V105.387H135.762V132.488ZM163.637 132.488H190.738V105.387H163.637V132.488ZM191.512 132.488H218.613V105.387H191.512V132.488ZM219.387 132.488H246.488V105.387H219.387V132.488ZM246.488 77.5121V104.613H219.387V77.5121H246.488ZM246.488 49.6371V76.7378H219.387V49.6371H246.488ZM246.488 21.7621V48.8628H219.387V21.7621H246.488ZM246.488 -6.11286V20.9878H219.387V-6.11286H246.488ZM246.488 -33.9879V-6.88716H219.387V-33.9879H246.488ZM246.488 -61.8629V-34.7622H219.387V-61.8629H246.488ZM246.488 -89.7379V-62.6372H219.387V-89.7379H246.488ZM24.2622 104.613H51.3628V77.5121H24.2622V104.613ZM52.1372 104.613H79.2379V77.5121H52.1372V104.613ZM80.0122 104.613H107.113V77.5121H80.0122V104.613ZM107.887 104.613H134.988V77.5121H107.887V104.613ZM135.762 104.613H162.863V77.5121H135.762V104.613ZM163.637 104.613H190.738V77.5121H163.637V104.613ZM191.512 104.613H218.613V77.5121H191.512V104.613ZM218.613 49.6371V76.7378H191.512V49.6371H218.613ZM218.613 21.7621V48.8628H191.512V21.7621H218.613ZM218.613 -6.11286V20.9878H191.512V-6.11286H218.613ZM218.613 -33.9879V-6.88716H191.512V-33.9879H218.613ZM218.613 -61.8629V-34.7622H191.512V-61.8629H218.613ZM218.613 -89.7379V-62.6372H191.512V-89.7379H218.613ZM24.2622 76.7378H51.3628V49.6371H24.2622V76.7378ZM52.1372 76.7378H79.2379V49.6371H52.1372V76.7378ZM80.0122 76.7378H107.113V49.6371H80.0122V76.7378ZM107.887 76.7378H134.988V49.6371H107.887V76.7378ZM135.762 76.7378H162.863V49.6371H135.762V76.7378ZM163.637 76.7378H190.738V49.6371H163.637V76.7378ZM190.738 21.7621V48.8628H163.637V21.7621H190.738ZM190.738 -6.11286V20.9878H163.637V-6.11286H190.738ZM190.738 -33.9879V-6.88716H163.637V-33.9879H190.738ZM190.738 -61.8629V-34.7622H163.637V-61.8629H190.738ZM190.738 -89.7379V-62.6372H163.637V-89.7379H190.738ZM24.2622 48.8628H51.3628V21.7621H24.2622V48.8628ZM52.1372 48.8628H79.2379V21.7621H52.1372V48.8628ZM80.0122 48.8628H107.113V21.7621H80.0122V48.8628ZM107.887 48.8628H134.988V21.7621H107.887V48.8628ZM135.762 48.8628H162.863V21.7621H135.762V48.8628ZM162.863 -6.11286V20.9878H135.762V-6.11286H162.863ZM162.863 -33.9879V-6.88716H135.762V-33.9879H162.863ZM162.863 -61.8629V-34.7622H135.762V-61.8629H162.863ZM162.863 -89.7379V-62.6372H135.762V-89.7379H162.863ZM24.2622 20.9878H51.3628V-6.11287H24.2622V20.9878ZM52.1372 20.9878H79.2379V-6.11287H52.1372V20.9878ZM80.0122 20.9878H107.113V-6.11287H80.0122V20.9878ZM107.887 20.9878H134.988V-6.11286H107.887V20.9878ZM134.988 -33.9879V-6.88716H107.887V-33.9879H134.988ZM134.988 -61.8629V-34.7622H107.887V-61.8629H134.988ZM134.988 -89.7379V-62.6372H107.887V-89.7379H134.988ZM24.2622 -6.88717H51.3628V-33.9879H24.2622V-6.88717ZM52.1372 -6.88717H79.2379V-33.9879L52.1372 -33.9879V-6.88717ZM80.0122 -6.88717H107.113V-33.9879H80.0122V-6.88717ZM107.113 -61.8629V-34.7622H80.0122V-61.8629H107.113ZM107.113 -89.7379V-62.6372H80.0122V-89.7379H107.113ZM24.2622 -34.7622H51.3628V-61.8629H24.2622V-34.7622ZM52.1372 -34.7622L79.2379 -34.7622V-61.8629H52.1372V-34.7622ZM79.2379 -89.7379V-62.6372H52.1372V-89.7379H79.2379ZM24.2622 -62.6372H51.3628V-89.7379H24.2622V-62.6372Z"
          fill="url(#paint0_radial_227_7371)"
          fillOpacity="0.7"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_227_7371"
          cx="0"
          cy="0"
          r={radial}
          gradientUnits="userSpaceOnUse"
          gradientTransform={cn(`translate(${translate}) rotate(90) scale(${scale})`)}
        >
          <stop
            stopColor="hsl(var(--foreground))"
          />
          <stop
            offset="1"
            stopColor="hsl(var(--primary))"
            stopOpacity="0"
          />
        </radialGradient>
        <clipPath id="clip0_227_7371">
          <rect
            width="100%"
            height="100%"
            fill="hsl(var(--foreground))"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GridPattern;