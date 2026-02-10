import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

/* eslint-disable @next/next/no-img-element */
const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5 relative z-50">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {mounted && theme && data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    classes="relative p-2.5 rounded-full transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 mr-2"
                  >
                    <img
                      className="h-5 w-5 transition-transform duration-300"
                      src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"
                        }`}
                      alt={theme === "dark" ? "Dark mode" : "Light mode"}
                    ></img>
                  </Button>
                )}


                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${!open
                      ? mounted && theme === "dark"
                        ? "menu-white.svg"
                        : "menu.svg"
                      : mounted && theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                      }`}
                    alt="Menu"
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm p-5 ${theme === "dark" ? "bg-slate-900" : "bg-white"
                } shadow-2xl rounded-xl border ${theme === "dark" ? "border-slate-700" : "border-gray-200"}`}
            >
              {!isBlog ? (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleWorkScroll}
                    className={`w-full py-3 px-4 text-left rounded-lg font-medium transition-all duration-200 ${theme === "dark" ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-gray-100"}`}
                  >
                    Work
                  </button>
                  <button
                    onClick={handleAboutScroll}
                    className={`w-full py-3 px-4 text-left rounded-lg font-medium transition-all duration-200 ${theme === "dark" ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-gray-100"}`}
                  >
                    About
                  </button>
                  {showBlog && (
                    <button
                      onClick={() => router.push("/blog")}
                      className={`w-full py-3 px-4 text-left rounded-lg font-medium transition-all duration-200 ${theme === "dark" ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-gray-100"}`}
                    >
                      Blog
                    </button>
                  )}
                  {showResume && (
                    <button
                      onClick={() => router.push('/resume')}
                      className={`w-full py-3 px-4 text-left rounded-lg font-medium transition-all duration-200 ${theme === "dark" ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-gray-100"}`}
                    >
                      Resume
                    </button>
                  )}
                  <button
                    onClick={() => window.open("mailto:ridvangulce@gmail.com")}
                    className={`w-full py-3 px-4 text-left rounded-lg font-medium transition-all duration-200 ${theme === "dark" ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-gray-100"}`}
                  >
                    Contact
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => router.push("/")}
                    className={`w-full py-3 px-4 text-left rounded-lg font-medium transition-all duration-200 ${theme === "dark" ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-gray-100"}`}
                  >
                    Home
                  </button>
                  {showBlog && (
                    <button
                      onClick={() => router.push("/blog")}
                      className={`w-full py-3 px-4 text-left rounded-lg font-medium transition-all duration-200 ${theme === "dark" ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-gray-100"}`}
                    >
                      Blog
                    </button>
                  )}
                  {showResume && (
                    <button
                      onClick={() => router.push("/resume")}
                      className={`w-full py-3 px-4 text-left rounded-lg font-medium transition-all duration-200 ${theme === "dark" ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-gray-100"}`}
                    >
                      Resume
                    </button>
                  )}
                  <button
                    onClick={() => window.open("mailto:ridvangulce@gmail.com")}
                    className={`w-full py-3 px-4 text-left rounded-lg font-medium transition-all duration-200 ${theme === "dark" ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-gray-100"}`}
                  >
                    Contact
                  </button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky top-0 z-50 tablet:flex p-4 rounded-2xl transition-all duration-300 ${theme === "light" ? "glass shadow-sm" : "glass"
          } dark:text-white`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-bold text-3xl cursor-pointer mob:p-2 laptop:p-0 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary hover:opacity-80 transition-opacity"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex gap-2">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:ridvangulce@gmail.com")}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                classes="relative p-2.5 rounded-full transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              >
                <img
                  className="h-5 w-5 transition-transform duration-300 hover:rotate-12"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt={theme === "dark" ? "Dark mode" : "Light mode"}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:ridvangulce@gmail.com")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                classes="relative p-2.5 rounded-full transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              >
                <img
                  className="h-5 w-5 transition-transform duration-300 hover:rotate-12"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt={theme === "dark" ? "Dark mode" : "Light mode"}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
