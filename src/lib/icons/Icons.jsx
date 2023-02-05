export function Inbox({
    width = 20,
    height = 20,
    color = "#111827",
    className = "",
}) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path d="M10.4484 8.75163C10.2221 8.53304 9.919 8.41208 9.60437 8.41482C9.28973 8.41755 8.98876 8.54375 8.76627 8.76624C8.54378 8.98873 8.41757 9.28971 8.41484 9.60434C8.41211 9.91898 8.53306 10.2221 8.75165 10.4484L11.1517 12.8484C11.3767 13.0734 11.6819 13.1998 12.0001 13.1998C12.3182 13.1998 12.6234 13.0734 12.8484 12.8484L15.2484 10.4484C15.467 10.2221 15.588 9.91898 15.5853 9.60434C15.5825 9.28971 15.4563 8.98873 15.2338 8.76624C15.0113 8.54375 14.7104 8.41755 14.3957 8.41482C14.0811 8.41208 13.778 8.53304 13.5517 8.75163L13.2001 9.10322V3.60002C13.2001 3.28176 13.0736 2.97654 12.8486 2.7515C12.6235 2.52645 12.3183 2.40002 12.0001 2.40002C11.6818 2.40002 11.3766 2.52645 11.1515 2.7515C10.9265 2.97654 10.8 3.28176 10.8 3.60002V9.10322L10.4484 8.75163Z" />
            <path d="M3.6001 5.99998C3.6001 5.36346 3.85295 4.75301 4.30304 4.30292C4.75313 3.85283 5.36358 3.59998 6.0001 3.59998H7.2001C7.51836 3.59998 7.82358 3.7264 8.04863 3.95145C8.27367 4.17649 8.4001 4.48172 8.4001 4.79998C8.4001 5.11824 8.27367 5.42346 8.04863 5.6485C7.82358 5.87355 7.51836 5.99998 7.2001 5.99998H6.0001V14.4H8.4001L9.6001 16.8H14.4001L15.6001 14.4H18.0001V5.99998H16.8001C16.4818 5.99998 16.1766 5.87355 15.9516 5.6485C15.7265 5.42346 15.6001 5.11824 15.6001 4.79998C15.6001 4.48172 15.7265 4.17649 15.9516 3.95145C16.1766 3.7264 16.4818 3.59998 16.8001 3.59998H18.0001C18.6366 3.59998 19.2471 3.85283 19.6972 4.30292C20.1472 4.75301 20.4001 5.36346 20.4001 5.99998V18C20.4001 18.6365 20.1472 19.2469 19.6972 19.697C19.2471 20.1471 18.6366 20.4 18.0001 20.4H6.0001C5.36358 20.4 4.75313 20.1471 4.30304 19.697C3.85295 19.2469 3.6001 18.6365 3.6001 18V5.99998Z" />
        </svg>
    );
}

export function ChartPie({
    width = 20,
    height = 20,
    color = "#111827",
    className = "",
}) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M2.3999 12C2.3999 9.45395 3.41133 7.01215 5.21168 5.2118C7.01203 3.41145 9.45382 2.40002 11.9999 2.40002V12H21.5999C21.5999 14.5461 20.5885 16.9879 18.7881 18.7882C16.9878 20.5886 14.546 21.6 11.9999 21.6C9.45382 21.6 7.01203 20.5886 5.21168 18.7882C3.41133 16.9879 2.3999 14.5461 2.3999 12Z" />
            <path d="M14.3999 2.70239C16.0603 3.13255 17.5754 3.99893 18.7882 5.21174C20.001 6.42454 20.8673 7.93964 21.2975 9.59999H14.3999V2.70239Z" />
        </svg>
    );
}

export function DocumentReport({
    width = 20,
    height = 20,
    color = "#111827",
    className = "",
}) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 20"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.20005 0.400024C2.56353 0.400024 1.95308 0.652881 1.50299 1.10297C1.05291 1.55306 0.800049 2.1635 0.800049 2.80002V17.2C0.800049 17.8365 1.05291 18.447 1.50299 18.8971C1.95308 19.3472 2.56353 19.6 3.20005 19.6H12.8C13.4366 19.6 14.047 19.3472 14.4971 18.8971C14.9472 18.447 15.2 17.8365 15.2 17.2V6.89682C15.1999 6.26036 14.947 5.65001 14.4968 5.20002L10.4 1.10322C9.95007 0.653106 9.33972 0.40016 8.70325 0.400024H3.20005ZM5.60005 12.4C5.60005 12.0818 5.47362 11.7765 5.24858 11.5515C5.02353 11.3265 4.71831 11.2 4.40005 11.2C4.08179 11.2 3.77656 11.3265 3.55152 11.5515C3.32648 11.7765 3.20005 12.0818 3.20005 12.4V16C3.20005 16.3183 3.32648 16.6235 3.55152 16.8486C3.77656 17.0736 4.08179 17.2 4.40005 17.2C4.71831 17.2 5.02353 17.0736 5.24858 16.8486C5.47362 16.6235 5.60005 16.3183 5.60005 16V12.4ZM8.00005 8.80002C8.31831 8.80002 8.62353 8.92645 8.84858 9.1515C9.07362 9.37654 9.20005 9.68176 9.20005 10V16C9.20005 16.3183 9.07362 16.6235 8.84858 16.8486C8.62353 17.0736 8.31831 17.2 8.00005 17.2C7.68179 17.2 7.37656 17.0736 7.15152 16.8486C6.92648 16.6235 6.80005 16.3183 6.80005 16V10C6.80005 9.68176 6.92648 9.37654 7.15152 9.1515C7.37656 8.92645 7.68179 8.80002 8.00005 8.80002ZM12.8 7.60002C12.8 7.28176 12.6736 6.97654 12.4486 6.7515C12.2235 6.52645 11.9183 6.40002 11.6 6.40002C11.2818 6.40002 10.9766 6.52645 10.7515 6.7515C10.5265 6.97654 10.4 7.28176 10.4 7.60002V16C10.4 16.3183 10.5265 16.6235 10.7515 16.8486C10.9766 17.0736 11.2818 17.2 11.6 17.2C11.9183 17.2 12.2235 17.0736 12.4486 16.8486C12.6736 16.6235 12.8 16.3183 12.8 16V7.60002Z"
            ></path>
        </svg>
    );
}

export function ShoppingBag({
    width = 20,
    height = 20,
    color = "#111827",
    className = "",
}) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 20"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.00008 0.400024C6.34929 0.400024 4.20009 2.54922 4.20009 5.20002V6.40002H3.00009C2.38809 6.40002 1.8745 6.85964 1.8073 7.46804L0.6073 18.268C0.5701 18.6064 0.678091 18.946 0.906091 19.2004C1.13409 19.4548 1.45929 19.6 1.80009 19.6H16.2001C16.5409 19.6 16.8661 19.4548 17.0941 19.2004C17.3221 18.946 17.4301 18.6064 17.3929 18.268L16.1929 7.46804C16.1257 6.85964 15.6121 6.40002 15.0001 6.40002H13.8001V5.20002C13.8001 2.54922 11.6509 0.400024 9.00008 0.400024ZM11.4001 6.40002V5.20002C11.4001 3.87402 10.3261 2.80002 9.00008 2.80002C7.67409 2.80002 6.60009 3.87402 6.60009 5.20002V6.40002H11.4001ZM4.20009 10C4.20009 9.33762 4.73769 8.80002 5.40009 8.80002C6.06249 8.80002 6.60009 9.33762 6.60009 10C6.60009 10.6624 6.06249 11.2 5.40009 11.2C4.73769 11.2 4.20009 10.6624 4.20009 10ZM12.6001 8.80002C11.9377 8.80002 11.4001 9.33762 11.4001 10C11.4001 10.6624 11.9377 11.2 12.6001 11.2C13.2625 11.2 13.8001 10.6624 13.8001 10C13.8001 9.33762 13.2625 8.80002 12.6001 8.80002Z"
            ></path>
        </svg>
    );
}

export function LockClosed({
    width = 24,
    height = 24,
    color = "#111827",
    className = "",
}) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.0001 8.80002V6.40002C3.0001 4.80873 3.63224 3.2826 4.75746 2.15738C5.88268 1.03217 7.4088 0.400024 9.0001 0.400024C10.5914 0.400024 12.1175 1.03217 13.2427 2.15738C14.368 3.2826 15.0001 4.80873 15.0001 6.40002V8.80002C15.6366 8.80002 16.2471 9.05288 16.6972 9.50297C17.1472 9.95306 17.4001 10.5635 17.4001 11.2V17.2C17.4001 17.8365 17.1472 18.447 16.6972 18.8971C16.2471 19.3472 15.6366 19.6 15.0001 19.6H3.0001C2.36358 19.6 1.75313 19.3472 1.30304 18.8971C0.852954 18.447 0.600098 17.8365 0.600098 17.2V11.2C0.600098 10.5635 0.852954 9.95306 1.30304 9.50297C1.75313 9.05288 2.36358 8.80002 3.0001 8.80002V8.80002ZM12.6001 6.40002V8.80002H5.4001V6.40002C5.4001 5.44524 5.77938 4.52957 6.45451 3.85444C7.12964 3.17931 8.04532 2.80002 9.0001 2.80002C9.95488 2.80002 10.8706 3.17931 11.5457 3.85444C12.2208 4.52957 12.6001 5.44524 12.6001 6.40002V6.40002Z"
            ></path>
        </svg>
    );
}

export function ClipboardList({
    width = 20,
    height = 20,
    color = "#111827",
    className = "",
}) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M10.8001 2.40002C10.4818 2.40002 10.1766 2.52645 9.95157 2.7515C9.72653 2.97654 9.6001 3.28176 9.6001 3.60002C9.6001 3.91828 9.72653 4.22351 9.95157 4.44855C10.1766 4.6736 10.4818 4.80002 10.8001 4.80002H13.2001C13.5184 4.80002 13.8236 4.6736 14.0486 4.44855C14.2737 4.22351 14.4001 3.91828 14.4001 3.60002C14.4001 3.28176 14.2737 2.97654 14.0486 2.7515C13.8236 2.52645 13.5184 2.40002 13.2001 2.40002H10.8001Z" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.80005 5.99998C4.80005 5.36346 5.05291 4.75301 5.50299 4.30292C5.95308 3.85283 6.56353 3.59998 7.20005 3.59998C7.20005 4.55475 7.57933 5.47043 8.25446 6.14556C8.9296 6.82069 9.84527 7.19998 10.8 7.19998H13.2C14.1548 7.19998 15.0705 6.82069 15.7456 6.14556C16.4208 5.47043 16.8 4.55475 16.8 3.59998C17.4366 3.59998 18.047 3.85283 18.4971 4.30292C18.9472 4.75301 19.2 5.36346 19.2 5.99998V19.2C19.2 19.8365 18.9472 20.4469 18.4971 20.897C18.047 21.3471 17.4366 21.6 16.8 21.6H7.20005C6.56353 21.6 5.95308 21.3471 5.50299 20.897C5.05291 20.4469 4.80005 19.8365 4.80005 19.2V5.99998ZM8.40005 10.8C8.08179 10.8 7.77656 10.9264 7.55152 11.1514C7.32648 11.3765 7.20005 11.6817 7.20005 12C7.20005 12.3182 7.32648 12.6235 7.55152 12.8485C7.77656 13.0735 8.08179 13.2 8.40005 13.2H8.41205C8.73031 13.2 9.03553 13.0735 9.26058 12.8485C9.48562 12.6235 9.61205 12.3182 9.61205 12C9.61205 11.6817 9.48562 11.3765 9.26058 11.1514C9.03553 10.9264 8.73031 10.8 8.41205 10.8H8.40005ZM12 10.8C11.6818 10.8 11.3766 10.9264 11.1515 11.1514C10.9265 11.3765 10.8 11.6817 10.8 12C10.8 12.3182 10.9265 12.6235 11.1515 12.8485C11.3766 13.0735 11.6818 13.2 12 13.2H15.6C15.9183 13.2 16.2235 13.0735 16.4486 12.8485C16.6736 12.6235 16.8 12.3182 16.8 12C16.8 11.6817 16.6736 11.3765 16.4486 11.1514C16.2235 10.9264 15.9183 10.8 15.6 10.8H12ZM8.40005 15.6C8.08179 15.6 7.77656 15.7264 7.55152 15.9514C7.32648 16.1765 7.20005 16.4817 7.20005 16.8C7.20005 17.1182 7.32648 17.4235 7.55152 17.6485C7.77656 17.8735 8.08179 18 8.40005 18H8.41205C8.73031 18 9.03553 17.8735 9.26058 17.6485C9.48562 17.4235 9.61205 17.1182 9.61205 16.8C9.61205 16.4817 9.48562 16.1765 9.26058 15.9514C9.03553 15.7264 8.73031 15.6 8.41205 15.6H8.40005ZM12 15.6C11.6818 15.6 11.3766 15.7264 11.1515 15.9514C10.9265 16.1765 10.8 16.4817 10.8 16.8C10.8 17.1182 10.9265 17.4235 11.1515 17.6485C11.3766 17.8735 11.6818 18 12 18H15.6C15.9183 18 16.2235 17.8735 16.4486 17.6485C16.6736 17.4235 16.8 17.1182 16.8 16.8C16.8 16.4817 16.6736 16.1765 16.4486 15.9514C16.2235 15.7264 15.9183 15.6 15.6 15.6H12Z"
            ></path>
        </svg>
    );
}

export function Collection({
    width = 20,
    height = 20,
    color = "#111827",
    className = "",
}) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 18"
        >
            <path d="M6.3999 0.599976C6.08164 0.599976 5.77642 0.726404 5.55137 0.951447C5.32633 1.17649 5.1999 1.48172 5.1999 1.79998C5.1999 2.11824 5.32633 2.42346 5.55137 2.6485C5.77642 2.87355 6.08164 2.99998 6.3999 2.99998H13.5999C13.9182 2.99998 14.2234 2.87355 14.4484 2.6485C14.6735 2.42346 14.7999 2.11824 14.7999 1.79998C14.7999 1.48172 14.6735 1.17649 14.4484 0.951447C14.2234 0.726404 13.9182 0.599976 13.5999 0.599976H6.3999ZM2.7999 5.39998C2.7999 5.08172 2.92633 4.77649 3.15137 4.55145C3.37642 4.3264 3.68164 4.19998 3.9999 4.19998H15.9999C16.3182 4.19998 16.6234 4.3264 16.8484 4.55145C17.0735 4.77649 17.1999 5.08172 17.1999 5.39998C17.1999 5.71824 17.0735 6.02346 16.8484 6.2485C16.6234 6.47355 16.3182 6.59998 15.9999 6.59998H3.9999C3.68164 6.59998 3.37642 6.47355 3.15137 6.2485C2.92633 6.02346 2.7999 5.71824 2.7999 5.39998ZM0.399902 10.2C0.399902 9.56346 0.652759 8.95301 1.10285 8.50292C1.55293 8.05283 2.16338 7.79998 2.7999 7.79998H17.1999C17.8364 7.79998 18.4469 8.05283 18.897 8.50292C19.347 8.95301 19.5999 9.56346 19.5999 10.2V15C19.5999 15.6365 19.347 16.2469 18.897 16.697C18.4469 17.1471 17.8364 17.4 17.1999 17.4H2.7999C2.16338 17.4 1.55293 17.1471 1.10285 16.697C0.652759 16.2469 0.399902 15.6365 0.399902 15V10.2Z" />
        </svg>
    );
}

export function Support({
    width = 20,
    height = 20,
    color = "#111827",
    className = "",
}) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.5999 10C19.5999 12.5461 18.5885 14.9879 16.7881 16.7882C14.9878 18.5886 12.546 19.6 9.9999 19.6C7.45382 19.6 5.01203 18.5886 3.21168 16.7882C1.41133 14.9879 0.399902 12.5461 0.399902 10C0.399902 7.45395 1.41133 5.01215 3.21168 3.2118C5.01203 1.41145 7.45382 0.400024 9.9999 0.400024C12.546 0.400024 14.9878 1.41145 16.7881 3.2118C18.5885 5.01215 19.5999 7.45395 19.5999 10ZM17.1999 10C17.1999 11.1916 16.9107 12.3148 16.3983 13.3048L14.5695 11.4748C14.8433 10.6273 14.8757 9.72018 14.6631 8.85522L16.5375 6.98082C16.9623 7.89882 17.1999 8.92002 17.1999 10ZM11.0019 14.6956L12.8979 16.5916C11.9847 16.9937 10.9977 17.2009 9.9999 17.2C8.95732 17.2013 7.92698 16.9753 6.9807 16.5376L8.8551 14.6632C9.55911 14.8357 10.293 14.8468 11.0019 14.6956ZM5.3895 11.3404C5.15335 10.5273 5.13638 9.66621 5.3403 8.84442L5.2443 8.94042L3.4083 7.10082C3.00607 8.01439 2.79885 9.00183 2.7999 10C2.7999 11.1448 3.0675 12.2272 3.5427 13.1884L5.3907 11.3404H5.3895ZM6.6951 3.60042C7.71657 3.07245 8.85005 2.79792 9.9999 2.80002C11.1447 2.80002 12.2271 3.06762 13.1883 3.54282L11.3403 5.39082C10.419 5.12247 9.43847 5.13627 8.5251 5.43042L6.6951 3.60162V3.60042ZM12.3999 10C12.3999 10.6365 12.147 11.247 11.697 11.6971C11.2469 12.1472 10.6364 12.4 9.9999 12.4C9.36338 12.4 8.75293 12.1472 8.30285 11.6971C7.85276 11.247 7.5999 10.6365 7.5999 10C7.5999 9.3635 7.85276 8.75306 8.30285 8.30297C8.75293 7.85288 9.36338 7.60002 9.9999 7.60002C10.6364 7.60002 11.2469 7.85288 11.697 8.30297C12.147 8.75306 12.3999 9.3635 12.3999 10Z"
            ></path>
        </svg>
    );
}