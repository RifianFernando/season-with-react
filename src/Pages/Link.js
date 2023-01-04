import React from "react";

const Link = ({ className, href, children }) => {
    // prevent full page reload
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, "", href)
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        // prevent full page reload
        event.preventDefault();
        // update url
        window.history.pushState({}, "", href);

        // communicate to Routes that URL has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };  

    return (
      <a className={className} href={href} onClick={onClick}>
        {children}
      </a>
    );
};

export default Link;