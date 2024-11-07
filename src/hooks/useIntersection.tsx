import React from 'react';

const useIntersection = (headers: { anchor: string; level: number; text: string }[]) => {
    const [activeId, setActiveId] = React.useState<string | null>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = headers?.map(header => document.getElementById(header.anchor));
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setActiveId(entry.target.id);
                        }
                    });
                },
                { rootMargin: '0px 0px -50% 0px' }
            );

            sections?.forEach(section => {
                if (section) observer.observe(section);
            });

            return () => {
                sections?.forEach(section => {
                    if (section) observer.unobserve(section);
                });
            };
        };

        handleScroll();
    }, [headers]);

    return [activeId];
}

export default useIntersection;