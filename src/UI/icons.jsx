export const Icons = {
    Upload:(props) => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 24} 
            height={props.width || 24} 
            viewBox="0 0 24 24" 
            style={{ fill: props.fill }}
            {...props}
        >
            <path d="M13 19v-4h3l-4-5-4 5h3v4z"></path>
            <path d="M7 19h2v-2H7c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.756 2.673-3.015l.581-.102.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-3v2h3c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5z"></path>
        </svg>
    ),
    Font: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 24} 
            height={props.width || 24} 
            viewBox="0 0 24 24" 
            style={{ fill: props.fill }}
            {...props}>
            <path d="m11.307 4-6 16h2.137l1.875-5h6.363l1.875 5h2.137l-6-16h-2.387zm-1.239 9L12.5 6.515 14.932 13h-4.864z"></path>
        </svg>
    ),
    Size: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 24} 
            height={props.width || 24} 
            viewBox="0 0 24 24" 
            style={{ fill: props.fill }}
            {...props}>
            <path d="M21.316 4.055C19.556 3.478 15 1.985 15 2a3 3 0 1 1-6 0c0-.015-4.556 1.478-6.317 2.055A.992.992 0 0 0 2 5.003v3.716a1 1 0 0 0 1.242.97L6 9v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9l2.758.689A1 1 0 0 0 22 8.719V5.003a.992.992 0 0 0-.684-.948z"></path>
        </svg>
    ),
    Color: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 24} 
            height={props.width || 24} 
            viewBox="0 0 24 24" 
            style={{ fill: props.fill }}
            {...props}>
            <path d="M9.38 21.646A9.985 9.985 0 0 0 12 22l.141-.001a2.998 2.998 0 0 0 2.515-1.425c.542-.876.6-1.953.153-2.88l-.198-.415c-.453-.942-.097-1.796.388-2.281.485-.485 1.341-.841 2.28-.388h.001l.413.199a2.99 2.99 0 0 0 2.881-.153A2.997 2.997 0 0 0 22 12.141a9.926 9.926 0 0 0-.353-2.76c-1.038-3.827-4.353-6.754-8.246-7.285-3.149-.427-6.241.602-8.471 2.833S1.666 10.247 2.096 13.4c.53 3.894 3.458 7.208 7.284 8.246zM15.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5-1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM9 15.506a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-2.5-6.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.5 9.006z"></path>
        </svg>
    ),
    TextColor: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 24} 
            height={props.width || 24} 
            viewBox="0 0 24 24" 
            style={{ fill: props.fill }}
            {...props}>
            <path d="M5 18h14v3H5zm7.5-14h-1c-.401 0-.764.24-.921.609L5.745 16h2.173l1.273-3h5.604l1.268 3h2.171L13.421 4.61A1 1 0 0 0 12.5 4zm-2.46 7 1.959-4.616L13.95 11h-3.91z"></path>
        </svg>
    ),
    Image: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 24} 
            height={props.width || 24} 
            viewBox="0 0 24 24" 
            style={{ fill: props.fill }}
            {...props}>
            <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"></path>
        </svg> 
    ),
    Right: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 24} 
            height={props.width || 24} 
            viewBox="0 0 24 24" 
            style={{ fill: props.fill }}
            {...props}>
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
        </svg>
    ),
    Telegram: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 24} 
            height={props.width || 24} 
            viewBox="0 0 24 24" 
            style={{ fill: props.fill }}
            {...props}>
            <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
        </svg>
    ),

}

// home
{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg> */ }