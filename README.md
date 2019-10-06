# wikipedia.rehash

A minimal typographic rehash of [Wikipedia](https://www.wikipedia.org/), designed for screen readability. Currently very alpha.

![plain wikipedia](./imgs/wikipedia.png)

## Introduction

[wikipedia.rehash](https://github.com/Krasjet/wikipedia.rehash) is a [UserCSS](https://github.com/openstyles/stylus/wiki/UserCSS) stylesheet adapted from a bookmarklet I wrote earlier to fix overly wide web pages like [this](http://www.geofex.com/Article_Folders/phasers/phase.html). This issue is very common to websites designed before 2005(-ish), when [4:3](https://en.wikipedia.org/wiki/Display_aspect_ratio) monitors are widely used.

This kind of **no-margin layout** probably looked okay back then, but overly wide paragraphs and tiny font sizes are unreadable on a HiDPI, 16:9 monitor commonly used today. Wikipedia is, unfortunately, one of the adopters of the no-margin layout.

I'm getting tired of fixing layout issues every time I open a Wikipedia article, so this stylesheet was born.

This project is still in the alpha stage. I might add more rules and options in the future when I encounter more problems. Pull requests are welcome.

## Features

- fix the **line length** issues of Wikipedia's default layout (note that the current line length is still probably wider than some recommended values to accommodate math formulas, code, floating boxes, etc.)
- apply a more readable **font size**
- (opinionated) change the body text font to a screen-readable **serif** (default is [Charter](https://en.wikipedia.org/wiki/Bitstream_Charter)) in order to better match math formulas
- (opinionated) slightly lower the contrast ratio of body text
- keep the vanilla look of Wikipedia, unlike some heavier redesign of Wikipedia. The goal of this project is to **fix** Wikipedia and be **minimal**, not to **redesign** it.

## Installation

There are multiple ways to install this stylesheet. Pick any **one** of them.

#### 1. CSS Injection

I would recommend this approach because you can turn on/off the rehash easily if you encounter any layout issues.

1. You will have to first install a userstyles manager such as [Stylus](https://add0n.com/stylus.html) or [Xstyle](https://github.com/kriszyp/xstyle).
2. [Click here](https://raw.githubusercontent.com/Krasjet/wikipedia.rehash/master/wikipedia.rehash.user.css) to install the stylesheet.

#### 2. `userContent.css`

If you are using Firefox, you can append the content of `wikipedia.rehash.user.css` to your [`userContent.css`](https://www.userchrome.org/how-create-userchrome-css.html) file.

#### 3. Custom CSS

If you have a Wikipedia account, you can apply a global custom CSS stylesheet to your account. Go to Preferences > Appearance > Skin > Vector > Custom CSS (> Edit Source, if you already have a custom CSS). Copy-paste all the CSS rules inside `@-moz-document` and click `Publish page`.

I'm not sure if the custom CSS will apply to the mobile version or not. This stylesheet is not intended to be used on mobile devices.

#### Font

wikipedia.rehash will use [Charter](https://en.wikipedia.org/wiki/Bitstream_Charter) as the default body font. You can obtain a free copy of the font [here](https://practicaltypography.com/charter.html). If Charter is not installed, the default serif font on your system will be used.

I'm using Charter as the default font because it is free and relatively suitable for screen reading. However, the character set of Charter is fairly limited. You can switch to your favorite font by modifying the stylesheet.

Here are some other options:

- [FF Scala](https://www.myfonts.com/fonts/fontfont/ff-scala): I love the design of each character in this font, but it might be too thin for screen reading.
- [Freight Text](https://philsfonts.com/font-family/garagefonts/freight-text/GF060014X1/): looks decent
- [Source Serif Pro](https://adobe-fonts.github.io/source-serif-pro/) (free)
- [Linux Libertine](http://libertine-fonts.org/) (free): still too thin for screen reading
- [Palatino](https://www.myfonts.com/fonts/linotype/palatino/): if you don't have other options
- [Georgia](https://www.fonts.com/font/microsoft-corporation/georgia): still, if you don't have other options

Also, Said Achmiz compiled a list of [“Screen serif” fonts](https://blog.obormot.net/Screen-serif-fonts). You can find more options in the blog post.

If you are using a different font, you will have to tweak the line spacing and font size yourself. You might find [this](https://grtcalculator.com/) to be useful.

If you have more suggestions for serif (or sans-serif) fonts suitable for screen reading, please let me know. I really want to explore more options.

## More screenshots

Sample article: [Riemann sphere](https://en.wikipedia.org/wiki/Riemann_sphere)

Please compare the images in full-screen mode for better visibility.

### Before

![plain wikipedia](./imgs/original.png)

### After rehash

![wikipedia.rehash](./imgs/rehash.png)

## Further readings

If you want to know more about the design principles, here are some further readings.

- [58 bytes of css to look great nearly everywhere](https://jrl.ninja/etc/1/)
- [Long-Form Websites and Typography](https://lawler.io/scrivings/long-form-websites-and-typography/)
- [Butterick’s Practical Typography](https://practicaltypography.com)
- [The Elements *of Typographic Style*](https://www.amazon.com/dp/0881792128/)

## (Maybe) related projects

Some alternatives to try if you want a more elaborated redesign.

- [Wikiwand](http://www.wikiwand.com/)
- [WiTeX](https://github.com/AndrewBelt/WiTeX)

## License

[wikipedia.rehash](https://github.com/Krasjet/wikipedia.rehash) is licensed under [CC-BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). (c) 2019 Krasjet

Please do not use this project for commercial purposes without my consent.
