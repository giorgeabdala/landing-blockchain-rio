import React, { useEffect, useState } from 'react';

export default function TwitterEmbed() {
    const [isScriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.charset = 'utf-8';
        script.onload = () => {
            setScriptLoaded(true);
        };

        document.body.appendChild(script);

        return () => {
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    if (!isScriptLoaded) {
        return null; // You can render a loading indicator here if needed
    }

    return (
        <div>
            <blockquote className="twitter-tweet">
                <p lang="pt" dir="ltr">
                    Polkadot Blockchain Academy 2023 ⭐️ Formando os Melhores Desenvolvedores | Dotsama | DOT | Kusama
                    {/* ... rest of your Twitter embed code ... */}
                    <a href="https://twitter.com/vdscripto/status/1689954898421379073?ref_src=twsrc%5Etfw">August 11, 2023</a>
                </p>
            </blockquote>
        </div>
    );
}
