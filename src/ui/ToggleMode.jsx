import { useEffect, useState } from 'react';
import Button from './Button';

export default function ToggleMode() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <Button
            hideTextOnMin={true}
            variant='ghost_gray'
            onclick={toggleTheme}
            text={isDark ? "Clair" : "Sombre"}
            icon={
                <>
                    {/* Sun */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-5 h-5 text-white/70 transition-all ${!isDark ? 'hidden' : 'block'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>

                    {/* Moon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-5 h-5 text-black transition-all ${!isDark ? 'block' : 'hidden'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path

                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>

                </>
            }
        >


        </Button>
    );
}