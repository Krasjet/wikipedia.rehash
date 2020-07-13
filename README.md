# wikipedia.rehash

![](https://krasjet.com/voice/wikipedia.rehash/imgs/wikipedia.png)

wikipedia.rehash a minimal typographical rehash of [Wikipedia][wikipedia],
specifically designed for **screen readability**. It's currently very alpha and
only tested on English, Japanese, and Chinese Wikipedia pages, but it will
probably work under most languages.

[wikipedia]: https://www.wikipedia.org/

## TL;DR

If you just want to try out wikipedia.rehash, you can install it by

1. Install [Stylus][stylus], then [click here][usercss] to install the UserCSS.
2. Install [Tampermonkey][tampermonkey], then [click here][userjs] to install
   the UserScript (The UserScript is optional. It's a hack to fix a slight
   annoyance).
3. If you are not on iOS or macOS, install [Charter][charter], or use another
   typeface you like.
4. Open up a Wikipedia article, e.g. [Wikipedia][wikipedia].
5. Read the [source code][css_src] and customize it to your liking, or uninstall
   it if you don't like what you see.

[stylus]: https://github.com/openstyles/stylus
[usercss]: https://github.com/Krasjet/wikipedia.rehash/raw/master/wikipedia.rehash.user.css
[tampermonkey]: https://www.tampermonkey.net/
[userjs]: https://github.com/Krasjet/wikipedia.rehash/raw/master/wikipedia.rehash.user.js
[charter]: https://practicaltypography.com/charter.html
[css_src]: https://github.com/Krasjet/wikipedia.rehash/blob/master/wikipedia.rehash.user.css

If you don't want to use extensions, there are alternative options for each
step, see [Installations](#installation) for details. The source code is
intended to be read and customized.

## The rationale

wikipedia.rehash is adapted from a [bookmarklet][bm] I wrote earlier to fix
overly wide web pages. This issue is very common in websites designed before
2005(-ish), when [4:3][aspect_ratio] monitors were widely used.

[bm]: https://krasjet.com/bookmarklets/
[aspect_ratio]: https://en.wikipedia.org/wiki/Display_aspect_ratio

Such **full-width layout** probably looked fine back then, but the overly wide
paragraphs and the tiny font size are unreadable on a HiDPI, 16:9 monitor
commonly used today. Wikipedia is, unfortunately, one of the adopters of such
layout.

It is ridiculously easy to fix this issue, just set a maximum width to the
`body` tag, then set the margin to `auto`.
```css
body {
  max-width: 750px;
  margin: auto;
}
```
This is essentially the basis of my [resize][bm] bookmarklet. I won't fix all
websites, but hopefully most of them.

We will use Jim McCann's "[Writing Stupid Code][stupid_code]" as an example.
Here is how it looks on a 16:9 screen.

[stupid_code]: http://graphics.cs.cmu.edu/courses/15-466-f19/notes/stupid-code.html

![](https://krasjet.com/voice/wikipedia.rehash/imgs/resize_before.png)

and here is how it looks after applying the resize bookmarklet. It's not
perfect, but at least it is readable to me now.

![](https://krasjet.com/voice/wikipedia.rehash/imgs/resize_after.png)

I'm getting tired of fixing layout issues every time I open up a Wikipedia
article, so wikipedia.rehash was born.

Of course, fixing Wikipedia won't be as simple as 4 lines of code, but it would
neither take near [20000 lines][wikiwand] of CSS. The [source code][css_src] of
the UserCSS is less than 200 lines, including comments, and it can be reduced
further if you don't care about details.

[wikiwand]: https://www.wikiwand.com/en/Wikipedia

I don't want to alter the vanilla look of Wikipedia, so the minimal code base
is rather intentional. The goal is to **fix** Wikipedia, not to **redesign**
it.

## Overview of changes

Currently, the stylesheet will

1. Fix the line width issues of Wikipedia's default layout (Note that the new
   line width is still wider than usual to accommodate formulas, code, floating
   boxes, etc.).
2. Apply a more readable font size.
3. (Opinionated) Enable hyphenation in body text. This requires Firefox,
   Safari, or legacy Edge. Chromium based browsers don't support auto hyphenation
   on Linux and Windows.
4. (Opinionated) Change the body text typeface to a screen-readable **serif**
   to better match math formulas. The default typeface is [Charter][charter] for
   Latin characters and 明朝体 / 明體 / 宋体 system fonts for Japanese and
   Chinese.
5. (Opinionated) **Slightly** lower the contrast ratio of body text.

Do notice that wikipedia.rehash is still very alpha. I might add some
additional rules and options in the future when I get annoyed. The
[stylesheet][css_src] is commented and very simple. You are free to disabled
any of the changes listed above.

Send me a pull request on [GitHub][repo_url] if you have any suggestions.

[repo_url]: https://github.com/Krasjet/wikipedia.rehash

## Installation

The recommended way to install wikipedia.rehash is introduced in [the first
section](#tldr), but there are other options you don't want to pollute your
browser with extensions.

Note that wikipedia.rehash consists of **three** parts:

### CSS stylesheet

There are multiple ways to install the stylesheet. Pick any **one** of them.

#### Option 1: CSS Injection [Recommended]

I would recommend this approach because you can turn on/off the theme easily if
you encounter any layout issues.

1. First install a userstyles manager such as [Stylus][stylus] or
   [Xstyle][xstyle].
2. [Click here][usercss] to install the stylesheet.

[xstyle]: https://github.com/kriszyp/xstyle

#### Option 2: Custom CSS [Recommended]

If you have a Wikipedia account, you can apply a global custom CSS stylesheet
specific to your account.

First log in your Wikipedia account, then go to
```text
Preferences > Appearance > Skin > Vector > Custom CSS
```
If you already have a custom CSS, you also need to click **Edit Source**.
Copy-paste everything inside [`vector.rehash.css`][vector_css] to the editor
then click **Publish page**.

[vector_css]: https://github.com/Krasjet/wikipedia.rehash/blob/master/vector.rehash.css

An example can be found [here][vectorcss_ex].

[vectorcss_ex]: https://en.wikipedia.org/wiki/User:Krasjet/vector.css

The stylesheet is not designed to be used on mobile devices in mind, but it
works surprisingly well on my tablet. Using a custom CSS theme is probably the
only way you can use the rehash on your mobile devices.

#### Option 3: `userContent.css`

If you are using Firefox, you can append the content of
[`wikipedia.rehash.user.css`][css_src] to your [`userChrome.css`][userchrome]
file, but you won't have the option to turn it off easily.

[userchrome]: https://www.userchrome.org/how-create-userchrome-css.html

### JavaScript [Optional]

Because Mediawiki's [Popups][popups] extension computes the location of each
pop-up window dynamically, I have to use some JavaScript code to dynamically
adjust the pop-up window locations. This solution is not elegant. If you have a
better solution, please let me know.

[popups]: https://www.mediawiki.org/wiki/Extension:Popups

If you are not using the [Popups][popups] extension, which can be turned off by
```wider
Preferences > Appearance > Reading preferences > Page previews > Disable
```
you don't need to install the customized JavaScript file, but if you do think
it's necessary to fix the pop-up window issue, pick either **one** of the
following.

#### Option 1: JavaScript Injection [Recommended]

Still, you can turn on/off the theme easily if you encounter any layout issues.

1. First install a userscript manager such as [Greasemonkey][greasemonkey]
   (Firefox only) or [Tampermonkey][tampermonkey].
2. [Click here][userjs] to install the userscript.

[tampermonkey]: https://www.tampermonkey.net/
[greasemonkey]: https://www.greasespot.net/

### Option 2: Custom JavaScript [Recommended]

If you have a Wikipedia account, you can apply a global custom JavaScript
specific to your account.

First log in your Wikipedia account, then go to
```text
Preferences > Appearance > Skin > Vector > Custom JavaScript
```
If you already have a custom JavaScript, you also need to click **Edit
Source**. Copy-paste everything inside [`vector.rehash.js`][vectorjs] to the
editor then click **Publish page**.

[vectorjs]: https://github.com/Krasjet/wikipedia.rehash/blob/master/vector.rehash.js

An example can be found [here][vectorjs_ex].

[vectorjs_ex]: https://en.wikipedia.org/wiki/User:Krasjet/vector.js

## Font

wikipedia.rehash will use [Charter][charter] as the default Latin body text
font. You can obtain a free copy of Bitstream Charter [here][charter_dl]. If
you are using macOS or iOS, Charter is probably [already
pre-installed][charter_apple] on your system. The default serif typeface on
your system will be used if Charter is not installed.

[charter_dl]: https://practicaltypography.com/charter.html
[charter_apple]: https://developer.apple.com/fonts/system-fonts/

I'm using Charter as the default English font because it is free and relatively
suitable for screen reading. However, the character set of Charter is fairly
limited, unless you are on macOS and iOS (Apple has their own version of
Charter with expansive character set). You can switch to your favorite font by
modifying the stylesheet.

Here are some other options I recommend.

- [Charis SIL][charis] (free): A Charter clone with a much larger character
  set, but the glyph design of added characters is, in my opinion, not as good
  as the Charter licensed to Apple.
- [Freight Text][freight]: My go-to replacement for system fonts such as
  Georgia. It looks very descent on screens, but can be too stagnant for me.
- [Garibaldi][garibaldi]: What you are reading right now. It's a very nice
  [**calligraphic old-style**][call_oldstyle] serif.
- [Alegreya ht][alegreya] (free): Another very nice **calligraphic old-style**
  serif, with Greek and Cyrillic support.
- [Source Serif Pro][src_serif] (free): Because it's free, the typeface is very
  popular. The most famous use case might be Gwern Branwen's [personal
  website][gwern]. It has Greek and Cyrillic support.
- [Noto Serif][noto_serif] (free): I'm using this as my default system serif
  typeface. It has a very large character set.
- [Linux Libertine][libertine] (free): It is used in Wikipedia's logo, but
  strokes might be too thin for screen reading.
- [Palatino][palatino]: If you don't have other options.
- [Georgia][georgia]: Still, if you don't have other options.

[charis]: https://software.sil.org/charis/
[freight]: https://philsfonts.com/font-family/garagefonts/freight-text/GF060014X1/
[garibaldi]: https://www.harbortype.com/fonts/garibaldi/
[call_oldstyle]: https://krasjet.com/choices/body/#alegreya-ht-free
[alegreya]: https://www.huertatipografica.com/en/fonts/alegreya-ht-pro
[src_serif]: https://adobe-fonts.github.io/source-serif-pro/
[gwern]: https://www.gwern.net/
[noto_serif]: https://www.google.com/get/noto/
[libertine]: http://libertine-fonts.org/
[palatino]: https://www.myfonts.com/fonts/linotype/palatino/
[georgia]: https://www.fonts.com/font/microsoft-corporation/georgia

Said Achmiz also compiled a list of [“Screen serif” fonts][screen_serif]. You
can find more options in the blog post.

[screen_serif]: https://blog.obormot.net/Screen-serif-fonts

You will have to tweak the line spacing and font size yourself if you are using
a different font. You might find [this calculator][grtcalc] helpful.

[grtcalc]: https://grtcalculator.com/

If you have more suggestions for serif (or sans-serif) typefaces suitable for
screen reading, please let me know. I'm willing to explore more options.

## More screenshots

Sample article: [Riemann sphere](https://en.wikipedia.org/wiki/Riemann_sphere)

Please compare the images in full-screen mode at 100% zoom level for better
visibility.

### Before

![](https://krasjet.com/voice/wikipedia.rehash/imgs/original.png)

### After rehash [Desktop]

![](https://krasjet.com/voice/wikipedia.rehash/imgs/rehash.png)

### After rehash [Japanese]

![](https://krasjet.com/voice/wikipedia.rehash/imgs/rehash_jp.png)

### After rehash [Chinese]

![](https://krasjet.com/voice/wikipedia.rehash/imgs/rehash_zh.png)

### After rehash [Tablet]

![](https://krasjet.com/voice/wikipedia.rehash/imgs/tablet.png)

## Further readings

These might be some interesting read if you care about typography on the Web
and in general.

- [58 bytes of CSS to look great nearly everywhere](https://jrl.ninja/etc/1/)
- [Long-Form Websites and Typography](https://lawler.io/scrivings/long-form-websites-and-typography/)
  by Eric Lawler
- [Butterick’s Practical Typography](https://practicaltypography.com) by
  Matthew Butterick
- [The Elements of Typographic Style](https://www.amazon.com/dp/0881792128/) by
  Robert Bringhurst

## Known issues

Sometimes the pop-up window of inline reference does not align vertically with the link.

![](https://krasjet.com/voice/wikipedia.rehash/imgs/vert_align.png)

If you know why this happens or how to fix it, please send a pull request. Thank you.

## (Maybe) related projects

Some alternatives to try if you want a more elaborated redesign. I won't
guarantee you will enjoy them, though.

- [Wikiwand](http://www.wikiwand.com/)
- [WiTeX](https://github.com/AndrewBelt/WiTeX)

## License

[wikipedia.rehash][repo_url] is licensed under [CC-BY-NC 4.0][cc]. © 2020 Krasjet.

[cc]: https://creativecommons.org/licenses/by-nc/4.0/

Please do not use this project for any commercial purposes without contacting me first.
