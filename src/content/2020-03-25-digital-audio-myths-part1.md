---
title: "Digital Audio, Myths (part 1) "
date: "2020-03-25"
draft: false
path: "/articles/digital-audio-myths-part1"
tags: ["audio", "Digital Audio"]
---

> "... Phase One, in which Doris gets her oats"
> -- ["Two of Us" by The Beatles](https://simple.wikipedia.org/wiki/Two_of_Us_(The_Beatles_song))

### Preface

This article is the first of many articles to cover digital audio. I express my personal views and I'm not affiliated with any manufacturer, reviewer or organization.

### Goal

What I will be discussing in these articles are topics around digital audio: archiving, storage, playback, audio players, streaming and all kinds of digital audio equipment. I'll try to explain how audio lives in a digital world, all the way from where audio becomes digital (typically in a studio) to a digital to analog converter (DAC) in your home audio system. So I will skip the effects of any analog equipment such as speakers, amplifiers, tubes, etc.

### What is lossless? Analogy #1

Since these articles are not intended for people with a deep scientific background, I will use analogies a lot. Let's try one really quick:

> Take a simple CD audio (per standard it is 16/44 PCM).
> It has lots of megabytes of audio data in it.
> Imagine every megabyte is a cotton ball and we have a handful of those balls.
> Now let's put it into a shoebox - that's our '.WAV' file.
> If we stuff all cotton balls into an Altoids box - we get a '.FLAC' file.

The moral of this analogy is that packing and unpacking cotton balls into 2 different boxes does not change the weight of cotton balls. This process does not remove any, nor adds anything extra. What FLAC does really well is packing and unpacking fluffy cotton since it has a lot of air in-between cotton fibers. In fact, FLAC can do it as many times as you want, so you can do `WAV->FLAC->WAV` encoding/decoding without altering audio data. This type of codec is called **Lossless**.

### What is lossy? Analogy #2

To highlight advantages of a lossless (without loss) compression, let's look into a lossy (with data losses) compression analogy:

> Same CD data, see Analogy #1 above ...
> Now let's put it into a tiny matchbox. Cotton balls do not fit!
> So lossless codec will pull some cotton out and throw it away.
> In fact it will throw away enough to make it fit (into 128kbps container)

The moral of second analogy is that packing and unpacking cotton balls into a tiny matchbox will result in a loss of data (cotton). Once thrown away it can not be fully recovered. This type of codec is called **Lossy**.

### Digital Audio Myths

#### Myth #1: coax vs optical cables

I read a post on Facebook recently where a person was claiming that switching his home internet connection from coax (Comcast) to optical (AT&T) improved 'high frequencies, made low end tighter` and so on.

Of course, different internet providers can have different quality of service. In fact, with adaptive streaming, low-quality internet will affect the quality of video and sound. But optical and coax cables are not the culprit here. The changes in characteristics of sound mentioned by this person (high/low frequencies roll of) most likely can be attributed to a streaming service he was using downgrading his stream to avoid skipping. Here's a fitting analogy:

> You open your email on your PC computer (coax Comcast connection).
> You open the same email on your iPhone (AT&T wireless).
> You go to your neighbor, open your email on his computer (dialup twisted pair).
> All messages were the same.

It might take longer to load, but don't expect to hear sound differences in a your provider's cable.

#### Myth #2: One lossless streaming service sounds better than the other

This one is tricky because so many people go to (for example, Tidal) and find music they stream from other places before, compare it and claim they hear a difference. Interestingly enough, they turn out to be right, many tracks do sound different, but why? How can the same audio sound differently? Let's try to find out potential causes:

- It's actually different audio: just because one track is titled *Pink Floyd - Wish You Were Here* on both services does not automatically mean it's the same digital audio. I have about **eight** different versions of this track and they all sound slightly different. Think about all remixes, remasters and vinyl needle drops that exist.
- One audio player is incorrectly configured: this is pretty common, actually. Some audio players do a better job by ensuring digital data is reproduced bit-perfect. It greatly depends on a computer's operating system, portable player and DAC drivers. There are good players on every platform, but there are bad ones too.
- Streaming providers cheat: it was shown that even a 1db increase in loudness can be perceived by the human brain as better. So hypothetically they could take `16/44` source, make it a bit louder, convert to `24/96` and sell as 'HiRez'.

If the music source was identical in each and every streaming service then they would all sound identical. Neither internet connection, type of cable to your house, USB cable, DAC, player nor any other path of a digital chain can change the sound.

The moral of Myth #2 is that you can't compare streaming services by individual song quality. Consider other parameters as well. You should make your decision based on price, platform availability (PC, Mac, Android, iOS) and catalog size first and foremost.

#### Myth #3: HiRez audio always sounds better

Let's imagine that some streaming service or online store decides to convert an audio track from `16/44` to `24/96`. They are calling it 'HiRez' music and selling it for more than a regular `16/44`. So what exactly happens? Let's do another analogy:

> We have a shoebox full of cotton balls.
> They took it and put it into ~3x larger container - say a 5lb bucket.
> Same amount of cotton, in a different container.

We have the same audio, same quality, same content but it takes longer to download and stream. More importantly, it sounds the same too!

### Further reading on this subject

- [Audio bit depth on Wikipedia](https://en.wikipedia.org/wiki/Audio_bit_depth)

---
continue reading, to [part 2](/articles/digital-audio-error-correction-part2)
