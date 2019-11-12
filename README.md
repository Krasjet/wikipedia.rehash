# wikipedia.rehash

A minimal typographic rehash of [Wikipedia](https://www.wikipedia.org/), designed for screen readability. Currently very alpha and only tested on English Wikipedia pages.

![rehashed wikipedia](./imgs/wikipedia.png)

## Introduction

[wikipedia.rehash](https://github.com/Krasjet/wikipedia.rehash) is a [UserCSS](https://github.com/openstyles/stylus/wiki/UserCSS) / [UserScript](https://greasyfork.org/en) combo adapted from a bookmarklet I wrote earlier to fix overly wide web pages like [this](http://www.geofex.com/Article_Folders/phasers/phase.html). This issue is very common to websites designed before 2005(-ish), when [4:3](https://en.wikipedia.org/wiki/Display_aspect_ratio) monitors are widely used.

This kind of **no-margin layout** probably looked okay back then, but overly wide paragraphs and tiny font sizes are unreadable on a HiDPI, 16:9 monitor commonly used today. Wikipedia is, unfortunately, one of the adopters of the no-margin layout.

I'm getting tired of fixing layout issues every time I open a Wikipedia article, so this project was born.

This project is still in the alpha stage. I might add more rules and options in the future when I encounter more problems. Pull requests are welcome.

## Features

- fix the **line length** issues of Wikipedia's default layout (note that the current line length is still probably wider than some recommended values to accommodate math formulas, code, floating boxes, etc.)
- apply a more readable **font size**
- (opinionated) change the body text font to a screen-readable **serif** (default is [Charter](https://en.wikipedia.org/wiki/Bitstream_Charter)) in order to better match math formulas
- (opinionated) slightly lower the contrast ratio of body text
- keep the vanilla look of Wikipedia, unlike some heavier redesign of Wikipedia. The goal of this project is to **fix** Wikipedia and be **minimal**, not to **redesign** it.

## Installation

wikipedia.rehash consists of **three** parts:

### 1. CSS stylesheet

There are multiple ways to install this stylesheet. Pick any **one** of them.

#### Option 1: CSS Injection [Recommended]

I would recommend this approach because you can turn on/off the theme easily if you encounter any layout issues.

1. You will have to first install a userstyles manager such as [Stylus](https://add0n.com/stylus.html) or [Xstyle](https://github.com/kriszyp/xstyle).
2. [Click here](https://raw.githubusercontent.com/Krasjet/wikipedia.rehash/master/wikipedia.rehash.user.css) to install the stylesheet.

#### Option 2: Custom CSS [Recommended]

If you have a Wikipedia account, you can apply a global custom CSS stylesheet to your account. Go to **Preferences** > **Appearance** > **Skin** > **Vector** > **Custom CSS** (> **Edit Source**, if you already have a custom CSS). Copy-paste everything inside [`vector.rehash.css`](https://github.com/Krasjet/wikipedia.rehash/blob/master/vector.rehash.css) to the editor then click **Publish page**.

An example can be found [here](https://en.wikipedia.org/wiki/User:Krasjet/vector.css).

This stylesheet is not designed for mobile usage in mind but it works surprisingly well on my tablet. Using a custom CSS is probably the only way you can use the rehash on your mobile devices.

#### Option 3: `userContent.css`

If you are using Firefox, you can append the content of [`wikipedia.rehash.user.css`](https://github.com/Krasjet/wikipedia.rehash/blob/master/wikipedia.rehash.user.css) to your [`userChrome.css`](https://www.userchrome.org/how-create-userchrome-css.html) file.

### 2. JavaScript [Optional]

Because Mediawiki's [Popups](https://www.mediawiki.org/wiki/Extension:Popups) extension dynamically computes the location of each pop-up window, I have to use some JavaScript code to dynamically adjust the pop-up window locations. This solution is not elegant. If you have a better solution, please let me know.

If you are not using the [Popups](https://www.mediawiki.org/wiki/Extension:Popups) extension (which can be turned off by **Preferences** > **Appearance** > **Reading preferences** > **Page previews** > **Disable**), you **do not** need to install the customized JavaScript file.

If you do think it's necessary to fix the issue of pop-up windows, pick either **one** of the following.

#### Option 1: JavaScript Injection [Recommended]

Still, you can turn on/off the theme easily if you encounter any layout issues.

1. You will have to first install a userscript manager such as [Greasemonkey](https://www.greasespot.net/) (Firefox only) or [Tampermonkey](https://www.tampermonkey.net/).
2. [Click here](https://github.com/Krasjet/wikipedia.rehash/raw/master/wikipedia.rehash.user.js) to install the userscript.

#### Option 2: Custom JavaScript [Recommended]

If you have a Wikipedia account, you can apply a global custom JavaScript to your account. Go to **Preferences** > **Appearance** > **Skin** > **Vector** > **Custom JavaScript** (> **Edit Source**, if you already have a custom JavaScript). Copy-paste everything inside [`vector.rehash.js`](https://github.com/Krasjet/wikipedia.rehash/blob/master/vector.rehash.js) to the editor then click **Publish page**.

An example can be found [here](https://en.wikipedia.org/wiki/User:Krasjet/vector.js).

### 3. Font

wikipedia.rehash will use [Charter](https://en.wikipedia.org/wiki/Bitstream_Charter) as the default body font. You can obtain a free copy of the font [here](https://practicaltypography.com/charter.html). If Charter is not installed, the default serif font on your system will be used.

If you are using macOS or iOS, Charter is probably [already preinstalled](https://developer.apple.com/fonts/system-fonts/) on your system.

I'm using Charter as the default font because it is free and relatively suitable for screen reading. However, the character set of Charter is fairly limited. You can switch to your favorite font by modifying the stylesheet.

Here are some other options:

- [FF Scala](https://www.myfonts.com/fonts/fontfont/ff-scala): the glyph design is my favorite, but it might be too thin for screen reading.
- [Freight Text](https://philsfonts.com/font-family/garagefonts/freight-text/GF060014X1/): looks decent on screen.
- [Garibaldi](https://www.harbortype.com/fonts/garibaldi/): very nice old style serif.
- [Alegreya ht](https://www.huertatipografica.com/en/fonts/alegreya-ht-pro): also very nice old style serif with Greek and Cyrillic support.
- [Source Serif Pro](https://adobe-fonts.github.io/source-serif-pro/) (free)
- [Noto Serif](https://www.google.com/get/noto/) (free): I'm using this as my default system serif font, and it has a very large character set.
- [Linux Libertine](http://libertine-fonts.org/) (free): the font used in Wikipedia's logo, but still too thin for screen reading.
- [Palatino](https://www.myfonts.com/fonts/linotype/palatino/): if you don't have other options.
- [Georgia](https://www.fonts.com/font/microsoft-corporation/georgia): still, if you don't have other options.

Also, Said Achmiz compiled a list of [“Screen serif” fonts](https://blog.obormot.net/Screen-serif-fonts). You can find more options in the blog post.

If you are using a different font, you will have to tweak the line spacing and font size yourself. You might find [this](https://grtcalculator.com/) to be useful.

If you have more suggestions for serif (or sans-serif) fonts suitable for screen reading, please let me know. I really want to explore more options.

## More screenshots

Sample article: [Riemann sphere](https://en.wikipedia.org/wiki/Riemann_sphere)

Please compare the images in full-screen mode for better visibility.

### Before

![plain wikipedia](./imgs/original.png)

### After rehash [Desktop]

![wikipedia.rehash](./imgs/rehash.png)

### After rehash [Tablet]

![wikipedia.rehash](./imgs/tablet.png)

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
