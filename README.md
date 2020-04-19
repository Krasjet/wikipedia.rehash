# wikipedia.rehash

This is a minimal typographical rehash of [Wikipedia](https://www.wikipedia.org/) designed for screen readability. It's currently very alpha and only tested on English, Japanese, and (Traditional + Simplified) Chinese Wikipedia pages.

![rehashed wikipedia](./imgs/wikipedia.png)

## Introduction

[wikipedia.rehash](https://github.com/Krasjet/wikipedia.rehash) is a [UserCSS](https://github.com/openstyles/stylus/wiki/UserCSS)/[UserScript](https://greasyfork.org/en) twin adapted from a bookmarklet I wrote earlier that fixes overly wide web pages (an example can be found [here](http://www.geofex.com/Article_Folders/phasers/phase.html)). This issue is very common in websites designed before 2005(-ish), when [4:3](https://en.wikipedia.org/wiki/Display_aspect_ratio) monitors were widely used.

This kind of **full-width layout** probably looked fine back then, but the overly wide paragraphs and the tiny font size are unreadable on a HiDPI, 16:9 monitor commonly used today. Wikipedia is, unfortunately, one of the adopters of this kind of full-width layout.

I'm getting tired of fixing layout issues every time I open a Wikipedia article, so wikipedia.rehash was born.

This project is still in the alpha stage. I might add some additional rules and options in the future when I encounter more problems. You can send me a pull request on [GitHub](https://github.com/Krasjet/wikipedia.rehash) if you have any suggestions.

## Features

Currently, the stylesheet will

1. Fix the **line width** issues of Wikipedia's default layout (note that the new line width is still wider than usual to accommodate formulas, code, floating boxes, etc.).
2. Apply a more readable **font size**.
3. (Opinionated) Change the body text font to a screen-readable **serif** in order to better match math formulas. The default English font is [Charter](https://en.wikipedia.org/wiki/Bitstream_Charter) and 明朝体 / 明體 / 宋体 system fonts for Japanese/Chinese.
4. (Opinionated) **Slightly** lower the contrast ratio of body text.
5. And, finally, unlike some heavier redesign of Wikipedia, it will keep the vanilla look of Wikipedia. The goal of this project is to **fix** Wikipedia and be **minimal**, not to **redesign** it.

## Installation

wikipedia.rehash consists of **three** parts:

### 1. CSS stylesheet

There are multiple ways to install this stylesheet. Pick any **one** of them.

#### Option 1: CSS Injection [Recommended]

I would recommend this approach because you can turn on/off the theme easily if you encounter any layout issues.

1. You will have to first install a userstyles manager such as [Stylus](https://add0n.com/stylus.html) or [Xstyle](https://github.com/kriszyp/xstyle).
2. [Click here](https://raw.githubusercontent.com/Krasjet/wikipedia.rehash/master/wikipedia.rehash.user.css) to install the stylesheet.

#### Option 2: Custom CSS [Recommended]

If you have a Wikipedia account, you can apply a global custom CSS stylesheet specific to your account.

Go to **Preferences** > **Appearance** > **Skin** > **Vector** > **Custom CSS** (and > **Edit Source**, if you already have a custom CSS). Copy-paste everything inside [`vector.rehash.css`](vector.rehash.css) to the editor then click **Publish page**.

An example can be found [here](https://en.wikipedia.org/wiki/User:Krasjet/vector.css).

This stylesheet is not designed for mobile usage in mind but it works surprisingly well on my tablet. Using a custom CSS is probably the only way you can use the rehash on your mobile devices.

#### Option 3: `userContent.css`

If you are using Firefox, you can append the content of [`wikipedia.rehash.user.css`](https://github.com/Krasjet/wikipedia.rehash/blob/master/wikipedia.rehash.user.css) to your [`userChrome.css`](https://www.userchrome.org/how-create-userchrome-css.html) file.

### 2. JavaScript [Optional]

Because Mediawiki's [Popups](https://www.mediawiki.org/wiki/Extension:Popups) extension computes the location of each pop-up window dynamically, I have to use some JavaScript code to dynamically adjust the pop-up window locations. This solution is not elegant. If you have a better solution, please let me know.

If you are not using the [Popups](https://www.mediawiki.org/wiki/Extension:Popups) extension (which can be turned off by **Preferences** > **Appearance** > **Reading preferences** > **Page previews** > **Disable**), you **do not** need to install the customized JavaScript file.

If you do think it's necessary to fix the issue of pop-up windows, pick either **one** of the following.

#### Option 1: JavaScript Injection [Recommended]

Still, you can turn on/off the theme easily if you encounter any layout issues.

1. You will have to first install a userscript manager such as [Greasemonkey](https://www.greasespot.net/) (Firefox only) or [Tampermonkey](https://www.tampermonkey.net/).
2. [Click here](https://github.com/Krasjet/wikipedia.rehash/raw/master/wikipedia.rehash.user.js) to install the userscript.

#### Option 2: Custom JavaScript [Recommended]

If you have a Wikipedia account, you can apply a global custom JavaScript specific to your account.

Go to **Preferences** > **Appearance** > **Skin** > **Vector** > **Custom JavaScript** (and > **Edit Source**, if you already have a custom JavaScript). Copy-paste everything inside [`vector.rehash.js`](https://github.com/Krasjet/wikipedia.rehash/raw/master/wikipedia.rehash.user.js) to the editor then click **Publish page**.

An example can be found [here](https://en.wikipedia.org/wiki/User:Krasjet/vector.js).

### 3. Font

wikipedia.rehash will use [Charter](https://en.wikipedia.org/wiki/Bitstream_Charter) as the default English body font. You can obtain a free copy of the font [here](https://practicaltypography.com/charter.html). If Charter is not installed, the default serif font on your system will be used.

If you are using macOS or iOS, Charter is probably [already preinstalled](https://developer.apple.com/fonts/system-fonts/) on your system.

I'm using Charter as the default English font because it is free and relatively suitable for screen reading. However, the character set of Charter is fairly limited, unless you are on macOS and iOS (Apple has their own version of Charter with expansive character set). You can switch to your favorite font by modifying the stylesheet.

Here are some other options. For more detailed discussion, see [*body text on screens*](https://krasjet.com/choices/body/).

- [Charis SIL](https://software.sil.org/charis/) (free): A Charter clone with a much larger character set, but the design of added glyphs are, in my opinion, not as good as in the Charter licensed to Apple.
- [Freight Text](https://philsfonts.com/font-family/garagefonts/freight-text/GF060014X1/): My go-to replacement for system fonts such as Georgia. It looks very descent on screens, but can be very stagnant.
- [Garibaldi](https://www.harbortype.com/fonts/garibaldi/): The typeface I use all the time since the day I bought it. It's a nice [**calligraphic old-style**](https://krasjet.com/choices/body/#alegreya-ht-free) serif
- [Alegreya ht](https://www.huertatipografica.com/en/fonts/alegreya-ht-pro) (free): Another very nice **calligraphic old-style** serif, with Greek and Cyrillic support.
- [Source Serif Pro](https://adobe-fonts.github.io/source-serif-pro/) (free): Because it's free, the typeface is very popular. The most famous use case might be Gwern Branwen's [personal website](https://www.gwern.net/). It has Greek and Cyrillic support, but it looks too stiff to me.
- [Noto Serif](https://www.google.com/get/noto/) (free): I'm using this as my default system serif font. It has a very large character set.
- [Linux Libertine](http://libertine-fonts.org/) (free): The typeface used in Wikipedia's logo, but strokes might be too thin for screen reading.
- [Palatino](https://www.myfonts.com/fonts/linotype/palatino/): If you don't have other options.
- [Georgia](https://www.fonts.com/font/microsoft-corporation/georgia): Still, if you don't have other options.

Said Achmiz also compiled a list of [“Screen serif” fonts](https://blog.obormot.net/Screen-serif-fonts). You can find more options in the blog post.

You will have to tweak the line spacing and font size yourself if you are using a different font. You might find [this calculator](https://grtcalculator.com/) to be helpful.

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

### After rehash [Japanese]

![](./imgs/rehash_jp.png)

### After rehash [Chinese]

![](./imgs/rehash_zh.png)

## Further readings

If you want to know more about the design principles, these might be interesting to you.

- [58 bytes of css to look great nearly everywhere](https://jrl.ninja/etc/1/)
- [Long-Form Websites and Typography](https://lawler.io/scrivings/long-form-websites-and-typography/)
- [Butterick’s Practical Typography](https://practicaltypography.com)
- [The Elements *of Typographic Style*](https://www.amazon.com/dp/0881792128/)

## Known issues

Sometimes the pop-up window of inline reference does not align vertically with the link.

![vert_align](./imgs/vert_align.png)

If you know why this happens or how to fix it, please let me know or send a pull request on [GitHub](https://github.com/Krasjet/wikipedia.rehash). Thank you.

## (Maybe) related projects

Some alternatives to try if you want a more elaborated redesign. I won't guarantee you will enjoy them, though.

- [Wikiwand](http://www.wikiwand.com/)
- [WiTeX](https://github.com/AndrewBelt/WiTeX)

## License

[wikipedia.rehash](https://github.com/Krasjet/wikipedia.rehash) is licensed under [CC-BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). (c) 2020 Krasjet.

Please do not use this project for any commercial purposes without my consent.
