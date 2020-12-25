declare namespace JSX {
    interface IntrinsicElements {
        'wx-swiper': React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { [props: string]: any }
        'wx-swiper-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { [props: string]: any }
    }
}