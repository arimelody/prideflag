# progressive pride flag! 🌈
made with ❤ by ari melody

---

a lovely little pride flag made in svg, loaded with js, and optimised to be
nice and lightweight!

it tucks into the top-right corner of any website you drop it on, and you're
welcome to link it to whichever LGBTQI+-supporting site you like :)

![progressive pride flag](prideflag.svg)

this flag currently represents:

- original LGBTQ+ colours! 🏳️‍🌈
- marginalized people of colour (POC) communities! 🧑🏾🧔🏿
- trans pride! 🏳️‍⚧️
- intersex! ♂️ ♀️

this flag is currently in use over at my own website, [arimelody.me](https://arimelody.me)!
feel free to check it out if you'd like to see it in action!

## how do I use this on my own website?

simple! just slap [prideflag.js](prideflag.js) onto your website, and your flag
will be automagically generated on page load!

alternatively, you are welcome to copy [prideflag.svg](prideflag.svg)
into your own site and set it up without javascript, like so:

```html
<style>
    #prideflag {
        position: fixed;
        top: 0;
        right: 0;
        width: 120px;
        transform-origin: 100% 0%;
        transition: transform .5s cubic-bezier(.32,1.63,.41,1.01);
        z-index: 8008135;
        pointer-events: none;
    }
    #prideflag:hover {
        transform: scale(110%);
    }
    #prideflag:active {
        transform: scale(110%);
    }
    #prideflag * {
        pointer-events: all;
    }
</style>

<a href="https://git.arimelody.me/ari/prideflag" target="_blank" id="prideflag">
    <img src="prideflag.svg" width="120" height="120" alt="progressive pride flag">
</a>
```

both files contain a simple copyright license that links back to me (see [COPYING.md](COPYING.md)).
please retain this!!

have fun spreading the gay! 🌈
